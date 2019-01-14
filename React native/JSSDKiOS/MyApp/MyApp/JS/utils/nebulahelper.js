'use strict';

var Constants = require('../values/constants');
var URLBuilder = require('./urlbuilder');
const { createMaskedString, unmaskString } = require('../utils/stringhelper');
var Platform = { OS: 'ios' };

var TAG = 'NebulaHelper';
var NEBULA_URL = Constants.NEBULA.HOST[Constants.ENV_TYPE];

const fakedConfigList = {
  createAccount: true,
  createAccount_lastName: true,
  createAccount_country: true,
  avatar: true,
  avatar_face: true,
  avatar_object: true
};

function Headers () {
  this.map = {};
  this.append = (key, value)=>{
    this.map[key] = [value];
  };
}

function NebulaURLBuilder(url, path){
  URLBuilder.call(this, url, Constants.NEBULA.PATH.API);
  if (path){
    this.appendPath(path);
  }
  this.andCount = 0;
  this.orCount = 0;
}
NebulaURLBuilder.prototype =  Object.create(URLBuilder.prototype);
NebulaURLBuilder.prototype.constructor = NebulaURLBuilder;

NebulaURLBuilder.prototype.appendQueryWhere = function(prop, value, andOr, op){
  var key = Constants.NEBULA.QUERY.FILTER_WHERE;
  if (andOr === 'and'){
    key = key.concat('[and][', this.andCount++, ']');
  } else if (andOr == 'or'){
    key = key.concat('[or][', this.orCount++, ']');
  }
  key = key.concat('[', prop, ']');
  if (op){
    key = key.concat('[', op, ']');
  }
  this.appendQuery(key, value);
}

function getURLBuilder(path){
  return new NebulaURLBuilder(NEBULA_URL, path);
}

function getEventURLBuilder(eventID){
  var builder = getURLBuilder(Constants.NEBULA.PATH.EVENT);
  if (eventID){
    builder.appendQueryWhere('id', eventID, null, 'lt');
  }
  return builder;
}

function getJSONProfileDiamondConfig(key, value){
  var json = {diamondConfig: {}};
  if (key){
    if (typeof value !== 'object')
      json.diamondConfig[key] = {value : value};
    else
      json.diamondConfig[key] = value;
  }
  return json;
}

function getURLTimeControl(){
  var builder = getURLBuilder(Constants.NEBULA.PATH.TIME_CONTROL);
  return builder;
}

function getURLUtilities(){
  var builder = getURLBuilder(Constants.NEBULA.PATH.UTILITIES);
  return builder;
}

function getURLHelpPages(){
  var builder = getURLBuilder(Constants.NEBULA.PATH.HELP_PAGES);
  return builder;
}


module.exports = {
  setNebulaURL : function(env){
    if (Constants.NEBULA.HOST[env]){
      NEBULA_URL = Constants.NEBULA.HOST[env];
    }
  },

  /*
    options: {
      userAgent: string,
      token: string,
      basicAuth: string
    }
  */
  getRequestHeader : function(options){
    var headers = new Headers();
    if (options.hasBody !== false){
      headers.append('Content-Type', 'application/json');
    }
    headers.append('Diamond-App-Type', Constants.PUG? 'PUG': 'NORMAL');
    if (options.userAgent){
      headers.append('User-Agent', options.userAgent);
    }
    if (options.token){
      headers.append('Authorization', 'Bearer ' + unmaskString(options.token));
    } else if (options.basicAuth){
      headers.append('Authorization', 'Basic ' + options.basicAuth);
    }
    return headers;
  },

  getURLPairing : function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.BOXES);
    builder.appendPath(Constants.NEBULA.PATH.BOXES_PAIRING);
    return builder.build();
  },

  getURLPairingResult : function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.BOXES);
    builder.appendPath(Constants.NEBULA.PATH.BOXES_PAIRING_RESULT);
    return builder.build();
  },
  
  getURLUnpair : function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.BOXES);
    builder.appendPath(Constants.NEBULA.PATH.BOXES_UNPAIR);
    return builder.build();
  },

  getURLSignIn : function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.BOXES);
    builder.appendPath(Constants.NEBULA.PATH.BOXES_SIGNIN);
    return builder.build();
  },

  getURLCreateAccount : function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.BOXES);
    builder.appendPath(Constants.NEBULA.PATH.BOXES_CREATE_ACCOUNT);
    return builder.build();
  },

  getURLReset: function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.BOXES);
    builder.appendPath(Constants.NEBULA.PATH.BOXES_RESET);
    return builder.build();
  },

  getURLWhatsNew : function(version, id, locale, isPUG){
    var builder = getURLBuilder(Constants.NEBULA.PATH.NEWS);
    builder.appendQuery('updateType', 2);
    if (version){
      builder.appendQuery('version', version);
    } else if (id) {
      builder.appendPath(id);
    }
    if (locale) {
      builder.appendQuery('language', locale);
    }
    builder.appendQuery('isPug', isPUG ? 1: 0);
    return builder.build();
  },

  getURLDevice : function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.DEVICE);
    builder.appendQuery(Constants.NEBULA.QUERY.FILTER_ORDER, 'created DESC');
    builder.appendQuery(Constants.NEBULA.QUERY.FILTER_LIMIT, 1);
    builder.appendQueryWhere('sourceType', 1);
    return builder.build();
  },

  getURLEvent : function(eventID){
    return getEventURLBuilder(eventID).build();
  },

  getURLPutEvent : function(eventID){
    var builder = getURLBuilder(Constants.NEBULA.PATH.EVENT);
    builder.appendPath(eventID);
    return builder.build();
  },
  
  getURLEventActionRequired : function(deviceID){
    var builder = getEventURLBuilder();
    builder.appendQueryWhere('actionRequired', true);
    builder.appendQuery('loadMore', false);
    if (deviceID){
       builder.appendQueryWhere('deviceID', deviceID);
    }
    return builder.build();
  },
  
  getURLEventTypeAll : function(deviceID, type){
    var builder = getEventURLBuilder();
    builder.appendQueryWhere('deviceID', deviceID);
    builder.appendQueryWhere('type', type);
    builder.appendQuery('loadMore', false);
    return builder.build();
  },
  
  getURLEventCount : function(deviceID){
    var builder = getURLBuilder(Constants.NEBULA.PATH.EVENT_COUNT);
    if (deviceID){
       builder.appendQuery('deviceID', deviceID);
    }
    return builder.build();
  },

  getURLEventAction : function(eventID){
    var builder = getURLBuilder(Constants.NEBULA.PATH.EVENT_ACTION);
    if (eventID){
       builder.appendPath(eventID);
    }
    return builder.build();
  },

  getURLEventByDeviceID : function(deviceID, eventID, type){
    var builder = getEventURLBuilder(eventID);
    builder.appendQueryWhere('deviceID', deviceID);
    if (type){
      builder.appendQueryWhere('type', type);
    }
    return builder.build();
  },

  getURLEventByMemberID : function(memberID, eventID, type){
    var builder = getEventURLBuilder(eventID);
    builder.appendQueryWhere('memberID', memberID);
    if (type){
      builder.appendQueryWhere('type', type);
    }
    return builder.build();
  },

  getURLEventByType : function(type, eventID, gtDay, limit){
    var builder = getEventURLBuilder(eventID);
    if(type) builder.appendQueryWhere('type', type);
    if(gtDay) builder.appendQueryWhere('created', gtDay, null, 'gt');
    if(limit) builder.appendQuery(Constants.NEBULA.QUERY.FILTER_LIMIT, limit);
    return builder.build();
  },

  getURLNetworkAttackRules : function(locale, ruleIDs) {
    var builder = getURLBuilder(Constants.NEBULA.PATH.NETWORK_ATTACK);
    if (ruleIDs && Array.isArray(ruleIDs)) {
      builder.appendQuery('id', ruleIDs.toString());
    }
    if (locale) {
      builder.appendQuery('language', locale);
    }
    return builder.build();
  },

  getURLIPListToLocations : function(locale, ipList) {
    var builder = getURLBuilder(Constants.NEBULA.PATH.IP_TO_CITY);
    if (ipList && Array.isArray(ipList)) {
      builder.appendQuery('ip', ipList.toString());
    }
    if (locale) {
      builder.appendQuery('language', locale);
    }
    return builder.build();
  },

  getURLScanCommand : function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.COMMAND);
    builder.appendPath(Constants.NEBULA.PATH.COMMAND_SCAN);
    return builder.build();
  },

  getURLProfile : function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.PROFILE);
    return builder.build();
  },

  getURLProfilePauseNetwork: function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.PROFILE);
    builder.appendPath(Constants.NEBULA.PATH.PROFILE_MEMBER);
    builder.appendPath('pause');
    return builder.build();
  },

  getTopAttackDevices: function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.DASHBOARD);
    builder.appendPath(Constants.NEBULA.PATH.TOP_ATTACK_DEVICES);
    return builder.build();
  },

  getMemberOnline: function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.DASHBOARD);
    builder.appendPath(Constants.NEBULA.PATH.MEMBER_ONLINE);
    return builder.build();
  },

  getEventSummary: function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.DASHBOARD);
    builder.appendPath(Constants.NEBULA.PATH.EVENT_SUMMARY);
    return builder.build();
  },

  getNetworkUsage: function(type){
    var builder = getURLBuilder(Constants.NEBULA.PATH.DASHBOARD);
    builder.appendPath(Constants.NEBULA.PATH.NETWORK_USAGE);
    builder.appendQuery('brief', type);
    return builder.build();
  },

  getAppUsage: function(memberID){
    var builder = getURLBuilder(Constants.NEBULA.PATH.DASHBOARD);
    builder.appendPath(Constants.NEBULA.PATH.APP_USAGE);
    builder.appendPath(memberID);
    return builder.build();
  },

  getURLMemberImage : function(memberID){
    var builder = getURLBuilder(Constants.NEBULA.PATH.PROFILE);
    builder.appendPath(Constants.NEBULA.PATH.PROFILE_MEMBER_IMAGE);
    builder.appendQuery('memberID', memberID);
    return builder.build();
  },

  getURLProfileAppInstallList : function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.PROFILE);
    builder.appendPath(Constants.NEBULA.PATH.INAPPROPRIATE_APP_LIST);
    return builder.build();
  },
  
  getURLProfileToken : function(){
    var builder = getURLBuilder(Constants.NEBULA.PATH.PROFILE);
    builder.appendPath(Constants.NEBULA.PATH.PROFILE_TOKEN);
    return builder.build();
  },

  getURLPutProfile : function(path){
    var builder = getURLBuilder(Constants.NEBULA.PATH.PROFILE);
    if (path !== undefined && path != null){
      builder.appendPath(path);
    }
    return builder.build();
  },

  getURLPutProfileDevice : function(){
    return this.getURLPutProfile(Constants.NEBULA.PATH.PROFILE_DEVICE);
  },

  getURLPutProfileMember : function(){
    return this.getURLPutProfile(Constants.NEBULA.PATH.PROFILE_MEMBER);
  },

  getURLPutProfileSetting : function(){
    return this.getURLPutProfile(Constants.NEBULA.PATH.PROFILE_SETTING);
  },

  getURLPutProfileApp : function(){
    return this.getURLPutProfile(Constants.NEBULA.PATH.PROFILE_APP);
  },

  getURLLog : function(){
    return getURLBuilder(Constants.NEBULA.PATH.LOG).build();
  },

  getURLLicenseInfo : function(ec){
    let builder = getURLBuilder(Constants.NEBULA.PATH.LICENSE);
    builder.appendPath(Constants.NEBULA.PATH.LICENSE_INFO);
    builder.appendQuery('ec', ec);
    return builder.build();
  },

  getURLLicenseIAP : function(){
    let builder = getURLBuilder(Constants.NEBULA.PATH.LICENSE);
    builder.appendPath(Constants.NEBULA.PATH.LICENSE_GOOGLE_IAP);
    return builder.build();
  },

  getURLLicenseInquire: function(){
    let builder = getURLBuilder(Constants.NEBULA.PATH.LICENSE);
    builder.appendPath(Constants.NEBULA.PATH.LICENSE_INQUIRE);
    return builder.build();
  },

  getURLAccessToken : function(boxID, env){
    let builder = new NebulaURLBuilder(Constants.NEBULA.HOST[env], Constants.NEBULA.PATH.ACCESS_TOKEN);
    builder.appendQuery('boxID', boxID);
    return builder.build();
  },

  getURLScreenshotInfo : function(url){
    var builder = getURLBuilder(Constants.NEBULA.PATH.SCREENSHOT);
    if (url){
       builder.appendQuery('url', encodeURI(url));
    }
    return builder.build();
  },

  getURLMiniSurvey : function(id, locale){
    var builder = getURLBuilder(Constants.NEBULA.PATH.SURVEY);
    if (id){
       builder.appendPath(id);
    }
    if (locale) {
      builder.appendQuery('language', locale);
    }
    return builder.build();
  },

  getURLMaliciousUrlOfEventHistory: function() {
    var builder = getURLBuilder(Constants.NEBULA.PATH.DAILY_EVENT);
    builder.appendPath(Constants.NEBULA.PATH.DAILY_EVENT_BOX);
    builder.appendPath(Constants.NEBULA.PATH.DAILY_EVENT_CONTENT);
    return builder.build();
  },

  getURLTimeControl : function(){
    return getURLTimeControl().build();
  },

  getURLTimeControlRuleByMemberID : function(memberID){
    var builder = getURLTimeControl();
    builder.appendPath(Constants.NEBULA.PATH.PROFILE_MEMBER);
    builder.appendPath(memberID);
    return builder.build();
  },
  
  getURLTimeControlByRuleID : function(ruleID){
    var builder = getURLTimeControl();
    builder.appendPath(ruleID);
    return builder.build();
  },

  getURLTimeControlCancelLimits : function(){
    var builder = getURLTimeControl();
    builder.appendPath('cancel');
    builder.appendPath('today');
    return builder.build();
  },

  getURLDailyTimeLimitsByID : function(memberID){
    var builder = getURLBuilder(Constants.NEBULA.PATH.DASHBOARD);
    builder.appendPath(Constants.NEBULA.PATH.TIME_LIMITS);
    builder.appendPath(memberID);
    return builder.build();
  },
  
  getURLSupportCallback: function(){
    var builder = getURLUtilities();
    builder.appendPath(Constants.NEBULA.PATH.UTILITIES_SUPPORT_CALLBACK);
    return builder.build();
  },

  getURLHelpPagesByLocale: function(locale){
    var builder = getURLHelpPages();
    if (locale) {
      builder.appendQuery('language', locale);
    }
    return builder.build();
  },
  
  getJSONPairing : function(appID, boxID){
    var json = {
      appID: appID,
      boxID: boxID,
    };
    return json;
  },

  getJSONPairingCode: function(pairingCode){
    let json = {
      pairingCode: unmaskString(pairingCode)
    };
    return json;
  },

  getJSONPairingResult : function(appID, boxID, pairingCode, commandID){
    return {
      appID: appID,
      boxID: boxID,
      pairingCode: unmaskString(pairingCode),
      commandID: commandID,
      appPlatform: Platform.OS,
      locale: DateHelper.getTimezoneID(),
      isPUG: Constants.PUG
    };
  },

  getJSONSignIn : function(pairingInfo, email, password){
    return {
      account: {
        Email: email,
        Password: password
      },
      appID: pairingInfo.appID,
      boxID: pairingInfo.boxID,
      pairingCode: unmaskString(pairingInfo.pairingCode),
      commandID: pairingInfo.commandID,
      appPlatform: Platform.OS,
      locale: DateHelper.getTimezoneID()
    };
  },

  getJSONCreateAccount : function(pairingInfo, email, password, firstName, lastName, countryCode, subscribeNews, phoneNumber, language){
    let account = {
      Email: email,
      Password: password,
      SubscribeNewsFlag: subscribeNews? 'Y': 'N'
    };
    if (firstName) {
      account.FirstName = firstName;
    }
    if (lastName) {
      account.LastName = lastName;
    }
    if (phoneNumber){
      account.Phone = phoneNumber;
    }
    if (language) {
      account.Language = language;
    } else {
      account.Country = countryCode? countryCode.toString(): '392'; //default JP
    }
    return {
      account: account,
      appID: pairingInfo.appID,
      boxID: pairingInfo.boxID,
      pairingCode: unmaskString(pairingInfo.pairingCode),
      commandID: pairingInfo.commandID,
      appPlatform: Platform.OS,
      locale: DateHelper.getTimezoneID()
    };
  },

  getJSONProfileDeviceName : function(deviceID, name){
    return {
      deviceID: deviceID,
      name: encodeURI(name)
    };
  },
  
  getJSONProfileDeviceType : function(deviceID, type){
    return {
      deviceID: deviceID,
      deviceType: type
    };
  },
  
  getJSONProfileDeviceBrand : function(deviceID, brand){
    return {
      deviceID: deviceID,
      brand: encodeURI(brand)
    };
  },
  
  getJSONProfileDeviceModel : function(deviceID, model){
    return {
      deviceID: deviceID,
      model: encodeURI(model)
    };
  },

  getJSONProfileDeviceBlock : function(deviceID, block){
    return {
      deviceID: deviceID,
      block: block
    };
  },

  getJSONProfileDeviceHidden : function(deviceID){
    return {
      deviceID: deviceID,
      hidden: true
    };
  },

  getJSONProfileDeviceMemberID : function(deviceID, memberID){
    return {
      deviceID: deviceID,
      memberID: memberID? memberID: 'unassigned'
    };
  },
  
  getJSONProfileToken : function(accessToken){
    return {
      old: unmaskString(accessToken)
    };
  },

  getJSONEventIgnore : function(){
    return {
      ignore: true
    };
  },

  getJSONEventTapped: function () {
    return {
      hasTapped: true
    };
  },

  getJSONEventHelpful : function(helpful){
    return {
      helpful: helpful
    };
  },

  getJSONEventAllow : function(type, allow){
    return {
      type, 
      allow
    };
  },

  getJSONProfileMemberAdd : function(name, sticker, image, deviceIDs){
    let members = {
      name: encodeURI(name)
    };
    if (sticker){
      members.sticker = sticker;
    } else if (image){
      members.image = image;
    }
    return {
      members: members,
      deviceIDs : deviceIDs
    };
  },

  getJSONProfileMemberName : function(memberID, name){
    return {
      members : {
        memberID: memberID,
        name: encodeURI(name)
      }
    };
  },

  getJSONProfileMemberSticker : function(memberID, sticker){
    return {
      members : {
        memberID: memberID,
        sticker: sticker
      }
    };
  },

  getJSONProfileMemberImage : function(memberID, image){
    return {
      members : {
        memberID: memberID,
        image: image
      }
    };
  },

  getJSONProfileMemberDeviceIDs : function(memberID, deviceIDs){
    return {
      members : {
        memberID: memberID,
      },
      deviceIDs : deviceIDs
    };
  },

  getJSONProfileMemberDelete : function(memberID){
    return {
      members : {
        memberID: memberID,
      },
      delete : true
    };
  },

  getJSONProfileMemberWebFilterConfig : function(memberID, config){
    return {
      members : {
        memberID: memberID,
        webFilterConfig : WebFilterConfig.toJSON(config)
      }
    };
  },

  getJSONProfileMemberContentFilterConfig : function(memberID, config){
    console.log(TAG, 'getJSONProfileMemberContentFilterConfig:' + JSON.stringify(config));
    return {
      members : {
        memberID: memberID,
        contentFilteringConfig : {
          filter : ContentFilterConfig.toJSON(config)
        }
      }
    };
  },

  getJSONProfileMemberAppFilterConfig : function(memberID, notify, category){
    return {
      members : {
        memberID: memberID,
        inappropriateAppConfig : {
          notify : notify,
          category : category
        }
      }
    };
  },

  getJSONProfileMemberNetControlConfig : function(memberID, netControlConfig){
    return {
      members : {
        memberID: memberID,
        networkControlConfig : netControlConfig.JSON
      }
    };
  },

  getJSONProfileMemberConnectHomeConfig : function(memberID, config){
    let timeFrom = new Date(0), timeTo = new Date(0);
    timeFrom.setUTCHours(12);
    timeTo.setUTCHours(22);
    let kidsBackToHomeConfig = {
      notify : config.notify,
      period : {
        from : timeFrom,
        to : timeTo,
      }
    };
    if (config.devices)
      kidsBackToHomeConfig.devices = config.devices;
    if (config.selectAll != null)
      kidsBackToHomeConfig.selectAll = config.selectAll;
    return {
      members : {
        memberID : memberID,
        kidsBackToHomeConfig : kidsBackToHomeConfig
      }
    };
  },

  getJSONProfileMemberUseReportConfig: function (memberID, config) {
    console.log(TAG, 'getJSONProfileMemberUseReportConfig:' + JSON.stringify(config));
    return {
      members: {
        memberID: memberID,
        appUsageConfig : {
          enable : config.enable
        }
      }
    };
  },
  
  getJSONProfileDiamondConfigWTP : function(value, aggressivePipe){
    return getJSONProfileDiamondConfig('wtp', {value, aggressivePipe});
  },

  getJSONProfileDiamondConfigWTPList : function(value){
    return getJSONProfileDiamondConfig('globalWhiteList', DomainList.toJSON(value));
  },

  getJSONProfileDiamondConfigVPatch : function(value){
    return getJSONProfileDiamondConfig('vpatch', value);
  },

  getJSONProfileDiamondConfigEastWest : function(value){
    return getJSONProfileDiamondConfig('eastwest', value);
  },

  getJSONProfileDiamondConfigSmartFirewall : function(value){
    return getJSONProfileDiamondConfig('opp', value);
  },
  
  getJSONProfileDiamondConfigAdBlock : function(value){
    return getJSONProfileDiamondConfig('adblock', value);
  },
  
  getJSONProfileDiamondConfigIPMasq : function(value){
    return getJSONProfileDiamondConfig('ipmasquerade', value);
  },

  getJSONProfileDiamondConfigRAP : function(value, userDefined){
    let payload = {};
    if (value != null) {
      payload['value'] = value;
    }
    if (userDefined != null) {
      payload['userDefined'] = userDefined;
    }
    return getJSONProfileDiamondConfig('rap', payload);
  },  

  getJSONProfileDiamondConfigRAPNotifyBlackList : function(userDefined){
    return {
      notifyConfig: {
        'appBlockNotifyBlackList': (userDefined != null) ? userDefined : {}
      }
    };
  },

  getJSONProfileDiamondConfigNDP : function(value){
    return getJSONProfileDiamondConfig('ndp', value);
  },

  getJSONProfileNotifyConfig : function(networkAttack, webFilter, securityWarning, newDevice, rapLevel, licenseRenewal, survey){
    var json = {notifyConfig: {}};
    if (networkAttack != null){
      json.notifyConfig.networkAttack = networkAttack;
    }
    if (webFilter != null){
      json.notifyConfig.websitesFiltering = webFilter;
    }
    if (securityWarning != null){
      json.notifyConfig.deviceVulFound = securityWarning;
    }
    if (newDevice != null){
      json.notifyConfig.newDevice = newDevice;
    }
    if (rapLevel != null){
      json.notifyConfig.rapLevel = rapLevel;
    }
    if (licenseRenewal != null){
      json.notifyConfig.licenseRenewal = licenseRenewal;
    }
    if (survey != null){
      json.notifyConfig.survey = survey;
    }
    return json;
  },

  getJSONProfileExcludedDeviceList : function(deviceList) {
    let list = (deviceList && Array.isArray(deviceList)) ? deviceList : [];
    return {
      excludedDeviceList: list
    };
  },

  getJSONProfileDHCPRequired : function(value){
    return {
      dhcpRequired: value
    };
  },

  getJSONProfileAppDeviceToken : function(appID, token){
    return {
      appID: appID,
      deviceToken: token
    };
  },
  
  getJSONProfileAppInfo : function(appID, version, language, ubmEnabled){
    return {
      appID: appID,
      appVersion: version,
      language: language,
      ubmEnabled: ubmEnabled
    };
  },

  getJSONLicenseIAP : function(pairingCode, purchaseResult, campaignID, campaignIDTime) {
    let json = {
      isSkuConsumable: true,
      pairingCode: unmaskString(pairingCode),
      googleResponse: purchaseResult
    };
    if (campaignID) {
      json.tmAdditionalInfo = {
        campaignId: campaignID,
        campaignClickTime: campaignIDTime
      };
    }
    return json;
  },

  getJSONPauseNetwork: function (memberID, doPause, appID) {
    let json = {
      memberID: memberID,
      paused: doPause,
    };
    if (appID != null) {
      json.appID = appID;
    }
    return json;
  },

  getJSONTimeControlRule: function(memberID, rule){
    return TimeControlRule.toJSON(memberID, rule);
  },

  getJSONCancelTimeLimits: function (memberID) {
    return { memberID: memberID };
  },

  parseJSONTimeControlRule : function(json){
    return TimeControlRule.parseJSON(json);
  },

  parseJSONTimeLimits: function (json) {
    return DailyTimeLimits.parseJSON(json);
  },

  getJSONDelete : function(){
    return TimeControlRule.toDeleteJSON();
  },
  
  parseJSONDeleteRule : function(json){
    return TimeControlRule.parseJSONID(json);
  },

  getJSONSupportCallbackInfo: function(name, phone, pageID, pairingCode, email){
    let json = {
      userName: name,
      phoneNumber: phone,
      pageID: pageID,
      pairingCode: unmaskString(pairingCode),
      email: unmaskString(email) || '',
    };
    return json;
  },
};
