'use strict';

var DEVICE_ORDER = {
  PC : 1,
  MAC : 2,
  LAPTOP : 3,
  IOS : 4,
  ANDROID : 5,
  MOBILE : 6,
  PAD : 7,
  TABLET : 8,
  GAME_CONSOLE : 9,
  IOT : 10,
  OTHER : 11,
  ROUTER : 12,
};

var DEVICE_TYPE = {
  UNKNOWN : {
    TYPE : 0,
    IMAGE_ID : "img_device_unknown_l",
    ORDER : DEVICE_ORDER.OTHER,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_OTHER'
  },
  CAMERA : {
    TYPE : 1,
    IMAGE_ID : "img_device_webcam_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_CAMERA'
  },
  NAS : {
    TYPE : 2,
    IMAGE_ID : "img_device_nas_l",
    ORDER : DEVICE_ORDER.OTHER,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_NAS'
  },
  ROUTER : {
    TYPE : 3,
    IMAGE_ID : "img_device_router_l",
    ORDER : DEVICE_ORDER.ROUTER,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_ROUTER'
  },
  PC : {
    TYPE : 4,
    IMAGE_ID : "img_device_pc_l",
    ORDER : DEVICE_ORDER.PC,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_PC'
  },
  IMAC : {
    TYPE : 5,
    IMAGE_ID : "img_device_mac_l",
    ORDER : DEVICE_ORDER.MAC,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_MAC'
  },
  IPHONE : {
    TYPE : 6,
    IMAGE_ID : "img_device_iphone_l",
    ORDER : DEVICE_ORDER.IOS,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_IPHONE'
  },
  PRINTER : {
    TYPE : 7,
    IMAGE_ID : "img_device_printer_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_PRINTER'
  },
  GAME_CONSOLE : {
    TYPE : 8,
    IMAGE_ID : "img_device_game_l",
    ORDER : DEVICE_ORDER.GAME_CONSOLE,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_GAME_CONSOLE'
  },
  SMART_TV : {
    TYPE : 9,
    IMAGE_ID : "img_device_tv_l",
    ORDER : DEVICE_ORDER.OTHER,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_TV'
  },
  ANDROID : {
    TYPE : 10,
    IMAGE_ID : "img_device_androidphone_l",
    ORDER : DEVICE_ORDER.ANDROID,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_ANDROID_PHONE'
  },
  SMART_PHONE : {
    TYPE : 11,
    IMAGE_ID : "img_device_androidphone_l",
    ORDER : DEVICE_ORDER.MOBILE,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_PHONE'
  },
  PAD : {
    TYPE : 12,
    IMAGE_ID : "img_device_ipad_l",
    ORDER : DEVICE_ORDER.PAD,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_IPAD'
  },
  TABLET : {
    TYPE : 13,
    IMAGE_ID : "img_device_androidpad_l",
    ORDER : DEVICE_ORDER.TABLET,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_TABLET'
  },
  LAPTOP : {
    TYPE : 14,
    IMAGE_ID : "img_device_notebook_l",
    ORDER : DEVICE_ORDER.LAPTOP,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_NOTEBOOK'
  },
  JEWELRY_BOX : {
    TYPE : 15,
    IMAGE_ID : "img_device_jewelrybox_l",
    ORDER : DEVICE_ORDER.OTHER,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_JEWELRY_BOX'
  },
  CLEANROBOT : {
    TYPE : 16,
    IMAGE_ID : "img_device_irobot_l",
    ORDER : DEVICE_ORDER.IOT,
  },
  DEHUMIDIFIER : {
    TYPE : 17,
    IMAGE_ID : "img_dehumidifier_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_AIR_PURIFIER'
  },
  PS4 : {
    TYPE : 18,
    IMAGE_ID : "img_device_psfamily_l",
    ORDER : DEVICE_ORDER.GAME_CONSOLE,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_PLAYSTATION'
  },
  FREEZER : {
    TYPE : 19,
    IMAGE_ID : "img_device_freezer_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_REFRIGERATOR'
  },
  NEST : {
    TYPE : 20,
    IMAGE_ID : "img_device_nest_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_THERMOSTAT'
  },
  APPLE_TV : {
    TYPE : 21,
    IMAGE_ID : "img_apple_tv_l",
    ORDER : DEVICE_ORDER.OTHER,
  },
  KINDLE : {
    TYPE : 22,
    IMAGE_ID : "img_device_ereader",
    ORDER : DEVICE_ORDER.TABLET,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_KINDLE'
  },
  FEATURE_PHONE : {
    TYPE : 23,
    IMAGE_ID : "img_device_phone_l",
    ORDER : DEVICE_ORDER.MOBILE,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_PHONE'
  },
  MEDIA_DEVICE : {
    TYPE : 24,
    IMAGE_ID : "img_device_media",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_MEDIA_DEVICE'
  },
  MACBOOK : {
    TYPE : 25,
    IMAGE_ID : "img_device_notebook_l",
    ORDER : DEVICE_ORDER.LAPTOP,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_MACBOOK'
  },
  HOME_CONTROLLER : {
    TYPE : 26,
    IMAGE_ID : "img_device_homecontrol",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_HOME_CONTROLLER'
  },
  WIFI_SPEAKER : {
    TYPE : 27,
    IMAGE_ID : "img_device_wifi",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_WIFI_SPEAKER'
  },
  HUB : {
    TYPE : 28,
    IMAGE_ID : "img_device_hub",
    ORDER : DEVICE_ORDER.OTHER,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_HUB'
  },
  ROBOT : {
    TYPE : 29,
    IMAGE_ID : "img_device_robot",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_ROBOT'
  },
  PLUG : {
    TYPE : 30,
    IMAGE_ID : "img_device_smartplug_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_PLUG'
  },
  WATCH : {
    TYPE : 31,
    IMAGE_ID : "img_device_smartwatch",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_WATCH'
  },
  LIGHT_BULB : {
    TYPE : 32,
    IMAGE_ID : "img_device_light_bubble_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_LIGHT_BULB'
  },
  NDS : {
    TYPE : 33,
    IMAGE_ID : "img_device_3ds_l",
    ORDER : DEVICE_ORDER.GAME_CONSOLE,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_3DS'
  },
  WEIGHTMETER : {
    TYPE : 34,
    IMAGE_ID : "img_device_weight_meter_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_WEIGHT_METER'
  },
  AMAZON_ECHO : {
    TYPE : 35,
    IMAGE_ID : "img_device_amazon_echo_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_AMAZON_ECHO'
  },
  GOOGLE_HOME : {
    TYPE : 36,
    IMAGE_ID : "img_device_google_home_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_GOOGLE_HOME'
  },
  NINTENDO_SWITCH : {
    TYPE : 37,
    IMAGE_ID : "img_device_switch_l",
    ORDER : DEVICE_ORDER.GAME_CONSOLE,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_NINTENDO_SWITCH'
  },
  XBOX_ONE : {
    TYPE : 38,
    IMAGE_ID : "img_device_xbox_l",
    ORDER : DEVICE_ORDER.GAME_CONSOLE,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_XBOX_ONE'
  },
  HOME_POD : {
    TYPE : 39,
    IMAGE_ID : "img_device_homepod_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_HOME_POD'
  },
  DOORBELL : {
    TYPE : 40,
    IMAGE_ID : "img_device_smartdoorbell_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_DOORBELL'
  },
  BABY_MONITOR : {
    TYPE : 41,
    IMAGE_ID : "img_device_baby_monitor_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_BABY_MONITOR'
  },
  COOKING : {
    TYPE : 42,
    IMAGE_ID : "img_device_cooking_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_COOKING'
  },
  DOOR_SECURITY_CAMERA : {
    TYPE : 43,
    IMAGE_ID : "img_device_doorsecuritycamera_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_DOOR_SECURITY_CAMERA'
  },
  IROBOT : {
    TYPE : 44,
    IMAGE_ID : "img_device_irobot_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_IROBOT'
  },
  LIGHTS_SWITCH : {
    TYPE : 45,
    IMAGE_ID : "img_device_lightswitch_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_LIGHTS_SWITCH'
  },
  OUTDOOR_SECURITY_CAMERA : {
    TYPE : 46,
    IMAGE_ID : "img_device_outdoorsecuritycamera_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_OUTDOOR_SECURITY_CAMERA'
  },
  REMOTE_CONTROL : {
    TYPE : 47,
    IMAGE_ID : "img_device_remotecontrol_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_REMOTE_CONTROL'
  },
  SMART_SPRINKLERS : {
    TYPE : 48,
    IMAGE_ID : "img_device_smart_sprinkers_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_SMART_SPRINKLERS'
  },
  SMART_BTN : {
    TYPE : 49,
    IMAGE_ID : "img_device_smartbtn_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_SMART_BTN'
  },
  SMART_CAR : {
    TYPE : 50,
    IMAGE_ID : "img_device_smartcar_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_SMART_CAR'
  },
  PET_CAMERA_FEEDER : {
    TYPE : 51,
    IMAGE_ID : "img_device_pet_camera_feeder_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_PET_CAMERA_FEEDER'
  },
  SMART_DOOR_LOCK : {
    TYPE : 52,
    IMAGE_ID : "img_device_samrt_door_lock_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_SMART_DOOR_LOCK'
  },
  TV_STICK : {
    TYPE : 53,
    IMAGE_ID : "img_device_tv_stick_l",
    ORDER : DEVICE_ORDER.OTHER,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_TV_STICK'
  },
  AUDIO_RECEIVER : {
    TYPE : 54,
    IMAGE_ID : "img_device_audio_receiver_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_AUDIO_RECEIVER'
  },
  SMART_HOME_HUB : {
    TYPE : 55,
    IMAGE_ID : "img_device_smart_home_hub_l",
    ORDER : DEVICE_ORDER.OTHER,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_SMART_HOME_HUB'
  },
  SMOKE_DETECTOR : {
    TYPE : 56,
    IMAGE_ID : "img_device_smoke_detector_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_SMOKE_DETECTOR'
  },
  BLURAY_PLAYER : {
    TYPE : 57,
    IMAGE_ID : "img_device_bluray_player_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_BLURAY_PLAYER'
  },
  SMART_SPEAKER_GENERIC : {
    TYPE : 58,
    IMAGE_ID : "img_device_smart_speaker_generic_l",
    ORDER : DEVICE_ORDER.IOT,
    NAME_KEY : 'DEVICE_SETTINGS_TYPE_SMART_SPEAKER_GENERIC'
  },
};
const EXPORT_DEVICE_TYPE = Object.keys(DEVICE_TYPE).reduce(function(previous, current){
    previous[current] = DEVICE_TYPE[current].TYPE;
    return previous;
}, {});
const EXPORT_DEVICE = Object.keys(DEVICE_TYPE).reduce(function(previous, current){
    previous[DEVICE_TYPE[current].TYPE] = DEVICE_TYPE[current];
    return previous;
}, {});

module.exports = {
  ENV_TYPE: 'INT',

  PUG: false,

  NETWORK_CONTROL_SCHOOL_NIGHT: false,

  NEBULA : {

    HOST : {
      DEV : "https://int2.diamond.trendmicro.com",
      BETA : "https://ibeta.diamond.trendmicro.com",
      INT : "https://int.diamond.trendmicro.com",
      PROD : "https://diamond.trendmicro.com",
    },

    PATH : {
      API : "/api/v1/",
      BOXES : "boxes",
      BOXES_PAIRING : "startPairing",
      BOXES_PAIRING_RESULT : "getPairingResult",
      BOXES_UNPAIR : "unpair",
      BOXES_SIGNIN : "signin",
      BOXES_CREATE_ACCOUNT : "createAccount",
      BOXES_RESET : "reset",
      NEWS : "whatsNews",
      DASHBOARD: "dashboards",
      DEVICE : "devices/deviceDisplay",
      EVENT : "timelines",
      EVENT_COUNT : "timelines/countLog",
      EVENT_ACTION : "timelines/action",
      NETWORK_ATTACK : "networkAttacks",
      IP_TO_CITY : "utilities/IpToCity",
      UTILITIES: "utilities",
      UTILITIES_SUPPORT_CALLBACK: "supportCallback",
      COMMAND : "commands",
      COMMAND_SCAN : "scan",
      PROFILE : "profiles",
      PROFILE_MEMBER : "members",
      PROFILE_MEMBER_IMAGE : "memberImage",
      PROFILE_DEVICE : "devices",
      PROFILE_SETTING : "settings",
      PROFILE_APP : "apps",
      PROFILE_TOKEN : "token",
      INAPPROPRIATE_APP_LIST : "get_inappropriate_app_list",
      LOG : "logs",
      LICENSE : "licenses",
      LICENSE_INFO : "info",
      LICENSE_GOOGLE_IAP : "googleIap",
      LICENSE_INQUIRE: "inquire",
      ACCESS_TOKEN : "tools/getAccessToken",
      SCREENSHOT : "screenshots",
      SURVEY : "miniSurveys",
      DAILY_EVENT: "dailyEvents",
      DAILY_EVENT_BOX: "box",
      DAILY_EVENT_CONTENT: "content",
      TOP_ATTACK_DEVICES: "topAtkDevices",
      MEMBER_ONLINE: "memberOnline",
      EVENT_SUMMARY: "eventSummary",
      NETWORK_USAGE: "networkUsage",
      APP_USAGE: "appUsage",
      TIME_CONTROL: "timeControls",
      HELP_PAGES: 'helpPages',
      TIME_LIMITS: "timeLimits",
    },

    QUERY : {
      FILTER_WHERE : "filter[where]",
      FILTER_ORDER : "filter[order]",
      FILTER_LIMIT : "filter[limit]",
      FILTER_FIELDS : "filter[fields]",
    },

  },

  SUPPORT: {
    HOST : {
      DEV : "https://akagrbeta.trendmicro.com/GREntry/NonPayment?",
      BETA : "https://akagrbeta.trendmicro.com/GREntry/NonPayment?",
      INT : "https://akagrbeta.trendmicro.com/GREntry/NonPayment?",
      PROD : "https://gr.trendmicro.com/GREntry/NonPayment?",
    },
    GMO_HOST: {
      DEV: 'https://grbeta_nextgen.trendmicro.com/GREntry/ByParams?',
      INT: 'https://grbeta_nextgen.trendmicro.com/GREntry/ByParams?',
      BETA: 'https://grbeta_nextgen.trendmicro.com/GREntry/ByParams?',
      PROD: 'https://gr_nextgen.trendmicro.com/GREntry/ByParams?',
    },
    TARGET: {
      IKB: {
        ID: 'Diamond_iKB',
        FUNCTION: {
          SCAN_STATION: 'Scan_Station',
          HELP: 'Help',
          WHATSNEW: 'Whats_New',
          DEVICE_CUSTOMIZE: 'Device_Customize',
          DEVICE_UNKNOWN: 'Device_Unknown',
          DEVICE_SIMILAR: 'Device_Similar',
          DEVICE_IDENTIFY: 'Device_Identify',
          DEVICE_ADD: 'Device_Add',
          BOX_RESET: 'Box_Reset',
          BOX_RMA: 'RMA',
          BOX_REFUND: 'Box_Refund',
          SYSTEM_ERROR: 'System_Error',
          EXPIRED: 'Expired',
          EOS: 'EOS',
          ARP: 'ARPspoofing',
          EULA: 'EULA',
          SURVEY: 'Survey',
          WEAK_PASSWORD: 'weak_password',
          ERROR_CODE: 'Error_Code_',
          UBM: 'UBM',
          CMPT: 'CMPT',
          DHCP: 'DHCP',
          DISCOVER_DEVICE: 'Discover_Device',
          UPDATE_NEEDED: 'Update_Needed',
          UPDATE_NEEDED_PUG: 'Update_Needed_PUG',
          APPROVED_LIST_LIMIT: 'Approved_List_Limit',
          APPROVED_LIST_CONFLICT: 'Approved_List_Conflict',
          PUG_IN: 'PUG_IN',
          PUG_OUT: 'PUG_OUT',
          PUG_COMMUNITY: 'PUG_COMMUNITY',
          SMART_FIREWALL: 'Smart_Firewall',
          INTRANET_PROTECT: 'Intranet_Protection',
          UNSECURED_DEVICES: 'Unsecured_Devices',
          REMOTE_ACCESS: 'Remote_Access',
          REMOTE_ACCESS_NOTIFY: 'Remote_Access_Notify',
          PRIVACY_POLICY: 'Privacy_Policy',
          EVERYDAY_RULE: 'Everyday_Rule',
          PAIRING_CODE: 'Pairing_Code',
          NETWORK_TRAFFIC_IPV6: 'Network_Traffic_Ipv6',
          BOX_STATUS_ERROR: 'Box_Status_Error',
          BOX_STATUS_UPDATING: 'Box_Status_Updating',
          BOX_STATUS_WAITING: 'Box_Status_Waiting',
          BOX_STATUS_PAIRING: 'Box_Status_Pairing',
          BOX_STATUS_OFFLINE: 'Box_Status_Offline',
          BOX_STATUS_NO_INTERNET: 'Box_Status_No_Internet',
          CONTENT_FILTER_YOUTUBE: 'Content_Filter_Youtube',
          CONTENT_FILTER_GOOGLE_MESSAGE: 'Content_Filter_Google',
          CONTENT_FILTER_BLOCK: 'Content_Filter_Block',
          HELP_INTERNET_SLOW: 'Help_Internet_Slow',
          HELP_DEVICE_NETWORK_ISSUES: 'Help_Device_Network_Issues', 
          HELP_PLAYING_GAMES:'Help_Playing_Games',
          HELP_STREAMING_VIDEOS:'Help_Streaming_Videos',
          HELP_OTHERS: 'Help_Others',
          HELP_PROTECT_KIDS: 'Help_Protect_Kids',
          HELP_MANAGE_DEVICES: 'Help_Manage_Devices',
          HELP_BLOCK_DEVICES: 'Help_Block_Devices',
          HELP_IDENTIFY_DEVICES: 'Help_Identify_Devices',
          HELP_HNS_RPOTECTS: 'Help_HNS_Protects',
        },
        hostByEnv: true
      },
      GDPR: {
        ID: 'Diamond_GDPR',
        FUNCTION: {
          DCN: 'Data_Collection_Notice',
        },
        hostByEnv: true
      },
      MKT: {
        ID: 'Diamond_MKT',
        FUNCTION: {
          FEEDBACK: 'Feedback'
        }
      },
      MYACCOUNT: {
        ID: 'MyAccount',
        FUNCTION: {
          ACCOUNT: 'Account',
          FORGET_PASSWORD: 'ForgetPassword'
        },
        hostByEnv: true
      },
      LOCAL:{
        FUNCTION:{
          EULA: '../values/eula/eula.html',
        }
      }
    }
  },

  TEST_URL: {
    MALWARE: 'http://test-malware.hns.tm',
    ADULT: 'http://test-adult.hns.tm',
    DATING: 'http://test-dating.hns.tm',
    DRUGS: 'http://test-drugs.hns.tm',
    CRIMINAL: 'http://test-criminal.hns.tm' 
  },

  DEVICE_TYPE : EXPORT_DEVICE_TYPE,

  DEVICE : EXPORT_DEVICE,

  MEMBER: {
    HOUSEHOLD: 'HouseHold',
    GUEST: 'Guest',
  },

  DASHBOARD_CARD: {
    SUMMARY: 1,
    FAMILY_MEMBERS: 2,
    TOP_ATTACKED_DEVICES: 3,
    NETWORK_USAGE: 4,
  },

  EVENT: {
    DIAMOND : 0,
    FIRST_TIME : 1,
    NEW_DEVICE : 2,
    DEFAULT_PASSWORD : 3,
    NETWORK_ATTACK : 4,
    WEB_THREAT : 5,
    WEB_FILTERING : 6,
    APP_INSTALL : 7,
    NETWROK_CONTROL : 8,
    CONNECT_AT_HOME : 9,
    DAILY_SCAN : 10,
    FORGET_DEVICE : 11,
    DELETE_MEMBER : 12,
    DIAMOND_APP_INSTALL : 13,
    EOL : 14,
    RANSOMWARE : 15,
    CONTINUE_BROWSING : 16,
    BOX_STATUS_CHANGED : 17,
    CONTINUE_BROWSING_ALLOW : 18,
    PATTERN_UPDATED : 19,
    FEATURE_UPDATED : 21,
    RENEWED : 22,
    APP_BLOCKED: 23,
    RAP_BLOCKED: 24,
    TIME_LIMIT_REACHED: 25,
    NETWORK_ACCESS_REQUEST: 28,
    NETWORK_ACCESS_APPROVED: 29,
    NETWORK_ACCESS_BLOCKED: 30,
    RAP_CONNECTED: 32,

    //for local event
    TOTAL_PROTECTED_DEVICE: 101,

    CAMPAIGN : 301
  },

  NOTIFICATION: {
    NEW_DEVICE_JOINED : 1,
    BOX_DISCONNECTED : 2,
    DIAMOND_APP_INSTALLED : 3,
    ANOTHER_ARP_SPOOFING_FOUND : 4,
    DEFAULT_PASSWORD : 5,
    WEB_THREATS : 6,
    NETWORK_ATTACK : 7,
    WEBSITES_FILTERING : 8,
    INAPPROPRIATE_APP : 9,
    NETWORK_CONTROL : 10,
    CONNECTED_AT_HOME : 11,
    EOL : 12,
    AFTER_EOS : 13,
    EXPIRED : 14,
    RENEWED : 15,
    SURVEY : 16,
    RANSOMWARE : 17,
    NEW_IN_CLIENT_VERSION: 18,
    BOX_CONNECTED : 19,
    IDENTIFY_DEVICE : 20,
    CONTINUE_BROWSING : 21,
    PATTERN_UPDATED : 22,
    APP_BLOCKED: 23,
    RAP_BLOCKED: 24,
    TIME_LIMIT_REACHED: 25,
    NETWORK_ACCESS_REQUEST: 28,
    RAP_CONNECTED: 29,

    //for local notification
    MARKET_SURVEY : 101,
    PROMOTION_FAMILY : 102,

    CAMPAIGN : 301,
    RENEW : 302
  },

  DASHBOARD_CARD_CATEGORY_TYPE: {
    SECURITY: 1,
    FAMILY: 2
  },

  NETWORK_USAGE_TYPE: {
    LAST_7_DAYS: 'last7Days',
    LAST_30_DAYS: 'last30Days',
  },

  NETWORK_ATTACK_ROLE: {
    VICTIM : 0,
    ATTACKER : 1
  },

  // 7 Days * 24 Hours * 60 Minutes * 60 Seconds * 1000 
  EVENT_EXPIRE_TIME: 604800000,

  // 30 Days * 24 Hours * 60 Minutes * 60 Seconds * 1000 
  TIME_30_DAYS: 2592000000,

  MALFUNCTION: {
    ANOTHER_ARP_SPOOFING_FOUND : 1,
    UNSUPPORTED_ROUTER : 2,
  },

  COMMAND_STATUS: {
    PENDING : 1,
    EXECUTING : 2,
    SUCCESS : 3,
    FAILED : 4,
    SKIPPED : 5,
    TIMEOUT: 6,
    PUBFAILED: 7,
  },

  TIME_CONTROL_EDIT_TYPE: {
    ADD: 1,
    DAYS: 2,
    HOUR: 3,
    DURATION: 4,
    NAME: 5,
  },

  REACHABILITY: {
    NOT_REACHABLE: 0,
    CELLUAR: 1,
    WIFI: 2,
  },

  SOLUTION_ID: {
    NABU: 'Diamond_NABU',
    JP_ONLINE: 'Diamond_JP_Online',
    JP_BBSS: 'Diamond_BBSS'
  },

  SUPPORT_NUMBER:{
    NABU: '(888) 896-6923',
  },

  REQUEST_CALL_PAGE_ID:{
    QRCODE_CLOUD_PAIRING: 'Cloud Pairing',
    OFFLINE_AFTER_ACTIVATION: 'Offline after Activation',
    DHCP_REQUIRED: 'DHCP Required',
    HELP_PAGE: 'Help Page',
    FIRMWARE_UPDATE: 'Firmware Update',
  },

  BOX_STATUS: {
    ONLINE : 'ONLINE',
    OFFLINE : 'OFFLINE',
    LICENSE_EXPIRED : 'LICENSE_EXPIRED',
    RESET : 'RESET',
    LICENSE_EOL : 'LICENSE_EOL',
    LICENSE_EOS : 'LICENSE_EOS',
    RMA : 'RMA',
    REFUND: 'REFUND',
    MALFUNCTION : 'MALFUNCTION',
    DISABLED_DHCP: 'DISABLED_DHCP',
    PUG_BLOCK: 'PUG_BLOCK'
  },

  NETWORK_ATTACK_CATEGORY : {
    'DoS/DDoS' : 'SECURITY_LOG_NETWORK_ATTACK_DOS',
    'Scan' : 'SECURITY_LOG_NETWORK_ATTACK_SCAN',
    'Misc' : 'SECURITY_LOG_NETWORK_ATTACK',
    'Access Control' : 'SECURITY_LOG_NETWORK_ATTACK_ACCESS_CONTROL',
    'Virus/Worm' : 'SECURITY_LOG_NETWORK_ATTACK_VIRUS',
    'Web Attack' : 'SECURITY_LOG_NETWORK_ATTACK_WEB',
    'Buffer Overflow' : 'SECURITY_LOG_NETWORK_ATTACK_BUFFER_OVERFLOW',
    'BotNet' : 'SECURITY_LOG_NETWORK_ATTACK',
    'Backdoor/Trojan' : 'SECURITY_LOG_NETWORK_ATTACK'
  },

  WEB_FILTER_CATEGORY : {
    FAMILY_SETTINGS_WEB_FILTER_CATEGORY_ADULT : [1, 2, 3, 6],
    FAMILY_SETTINGS_WEB_FILTER_CATEGORY_PERSONAL : [47],
    FAMILY_SETTINGS_WEB_FILTER_CATEGORY_CRIME : [9],
    FAMILY_SETTINGS_WEB_FILTER_CATEGORY_DRUG : [25],
    FAMILY_SETTINGS_WEB_FILTER_CATEGORY_USERDEFINED : [100],
    FAMILY_SETTINGS_FILTERING_CATES_MEDIA: [42, 51, 52, 39, 53, 57, 43, 47, 56, 71, 69, 50, 88],
    FAMILY_SETTINGS_FILTERING_CATES_CONTROVERSIAL: [16, 22, 63, 9, 25, 10, 14, 15],
    FAMILY_SETTINGS_FILTERING_CATES_SHOPPING: [8, 59, 11, 33, 58],
  },

  WEB_FILTER_PREDEFINED_CATEGORY: {
    FAMILY_SETTINGS_FILTERING_CHILD: {
      FAMILY_SETTINGS_WEB_FILTER_CATEGORY_ADULT: [1, 5, 6, 3, 4],
      FAMILY_SETTINGS_FILTERING_CATES_MEDIA: [42, 51, 52, 39, 53, 57, 43, 47, 56, 71, 69, 50, 88],
      FAMILY_SETTINGS_FILTERING_CATES_CONTROVERSIAL: [16, 22, 63, 9, 25, 10, 14, 15],
      FAMILY_SETTINGS_FILTERING_CATES_SHOPPING: [8, 59, 11, 33, 58],
    },
    FAMILY_SETTINGS_FILTERING_PRETEEN: {
      FAMILY_SETTINGS_WEB_FILTER_CATEGORY_ADULT: [1, 5, 6, 3, 4],
      FAMILY_SETTINGS_FILTERING_CATES_MEDIA: [39, 47, 50],
      FAMILY_SETTINGS_FILTERING_CATES_CONTROVERSIAL: [16, 22, 63, 9, 25, 14, 15],
      FAMILY_SETTINGS_FILTERING_CATES_SHOPPING: [8, 59, 11],
    },
    FAMILY_SETTINGS_FILTERING_TEEN: {
      FAMILY_SETTINGS_WEB_FILTER_CATEGORY_ADULT: [1, 6, 3],
      FAMILY_SETTINGS_FILTERING_CATES_MEDIA: [51],
      FAMILY_SETTINGS_FILTERING_CATES_CONTROVERSIAL: [9, 25, 14],
      FAMILY_SETTINGS_FILTERING_CATES_SHOPPING: [8, 11],
    },
  },

  WEBSITE_FILTER_CATEGORY_MORE: {
    FAMILY_SETTINGS_WEB_FILTER_CATEGORY_ADULT: [
      { id: 1, key: 'FILTERING_ITEMS_EROTIC' },
      { id: 5, key: 'FILTERING_ITEMS_INTIME_APPAREL' },
      { id: 6, key: 'FILTERING_ITEMS_NUDITY' },
      { id: 3, key: 'FILTERING_ITEMS_PRONOGRAPY' },
      { id: 4, key: 'FILTERING_ITEMS_SEX_EDUCATION' }
    ],
    FAMILY_SETTINGS_FILTERING_CATES_MEDIA: [
      { id: 42, key: 'FILTERING_ITEMS_BLOGS' },
      { id: 51, key: 'FILTERING_ITEMS_INSTANT_MSG' },
      { id: 52, key: 'FILTERING_ITEMS_EMAIL' },
      { id: 39, key: 'FILTERING_ITEMS_HACKING' },
      { id: 53, key: 'FILTERING_ITEMS_NEWSGROUPS' },
      { id: 57, key: 'FILTERING_ITEMS_P2P' },
      { id: 43, key: 'FILTERING_ITEMS_PHTOTO' },
      { id: 47, key: 'FAMILY_SETTINGS_WEB_FILTER_CATEGORY_PERSONAL' },
      { id: 56, key: 'FILTERING_ITEMS_SHARING_SERVICE' },
      { id: 71, key: 'FILTERING_ITEMS_SOFTWARE_DOWNLOAD' },
      { id: 69, key: 'FILTERING_ITEMS_STREAMING_MEDIA' },
      { id: 50, key: 'FILTERING_ITEMS_SOCIAL_NETWORKKING' },
      { id: 88, key: 'FILTERING_ITEMS_WEB_AD' },
    ],

    FAMILY_SETTINGS_FILTERING_CATES_CONTROVERSIAL: [
      { id: 16, key: 'FILTERING_ITEMS_ABORTION' },
      { id: 22, key: 'FILTERING_ITEMS_CULT_OCCULT' },
      { id: 63, key: 'FILTERING_ITEMS_GUN_CLUBS' },
      { id: 9, key: 'FILTERING_ITEMS_ILLEAGE' },
      { id: 25, key: 'FAMILY_SETTINGS_WEB_FILTER_CATEGORY_DRUG' },
      { id: 10, key: 'FILTERING_ITEMS_TASTELESS' },
      { id: 14, key: 'FILTERING_ITEMS_VIOLENCE' },
      { id: 15, key: 'FILTERING_ITEMS_WEAPONS' },
    ],

    FAMILY_SETTINGS_FILTERING_CATES_SHOPPING: [
      { id: 8, key: 'FILTERING_ITEMS_ALCOHOL' },
      { id: 59, key: 'FILTERING_ITEMS_AUCTIONS' },
      { id: 11, key: 'FILTERING_ITEMS_GAMBLING' },
      { id: 33, key: 'FAMILY_SETTINGS_APP_FILTER_GAMES' },
      { id: 58, key: 'FILTERING_ITEMS_SHOPPING' },
    ]
  },

  WEB_THREAT_CATEGORY : {
     2: 'SECURITY_LOG_CATEGORY_ILLEGAL',
    28: 'SECURITY_LOG_CATEGORY_INSECURE_IOT_CONNECTION',
    39: 'SECURITY_LOG_CATEGORY_PROXY_AVOIDANCE',
    73: 'SECURITY_LOG_CATEGORY_MALICIOUS_SOFTWARE',
    74: 'SECURITY_LOG_CATEGORY_SPYWARE',
    75: 'SECURITY_LOG_CATEGORY_PHISHING',
    76: 'SECURITY_LOG_CATEGORY_SPAM',
    77: 'SECURITY_LOG_CATEGORY_ADWARE',
    78: 'SECURITY_LOG_CATEGORY_VIRUS_MALWARE',
    79: 'SECURITY_LOG_CATEGORY_DISEASE_VECTOR',
    80: 'SECURITY_LOG_CATEGORY_COOKIES',
    81: 'SECURITY_LOG_CATEGORY_DIALERS',
    82: 'SECURITY_LOG_CATEGORY_COIN_MINER',
    83: 'SECURITY_LOG_CATEGORY_JOKE',
    84: 'SECURITY_LOG_CATEGORY_PASSWORD_CRACKING',
    85: 'SECURITY_LOG_CATEGORY_REMOTE_ACCESS',
    86: 'SECURITY_LOG_CATEGORY_ADSENSE',
    88: 'SECURITY_LOG_CATEGORY_WEB_ADVERTISEMENT',
    92: 'SECURITY_LOG_CATEGORY_MALICIOUS_DOMAIN',
    91: 'SECURITY_LOG_CATEGORY_C_C_SERVER',
    94: 'SECURITY_LOG_CATEGORY_SCAM',
  },

  APP_TYPE: {
    GAME: 0,
    ADULT: 1,
    SOCIAL: 2,
    SHOPPING: 3,
    P2P: 4,
    DATING: 5,
    REMOTE_ACCESS: 6
  },

  TIMELINE_STATUS:{
    PROTECTED: 'protected',
    ACTIONREQUIRED: 'actionrequired',
    SCAN: 'scan',
    NOISSUE: 'noissue',
    ISSUEFOUND: 'issuefound',
    UNPROTECTED: 'unprotected',
    DISCONNECT: 'disconnect',
    EOL: 'eol',
    FIRSTTIMELOADING: 'firsttimeloading',
    EXPIRED: 'expired'
  },

  // for scan , show scan status
  SCAN_STATUS: [
    "SCAN_SCANNING_PORTS",
    "SCAN_LOOKING_WEAK_PASSWORD",
    "SCAN_IDENTIFYING_DEVICES",
  ],

  ERROR_TYPE: {
    INTERNAL : 'InternalError',
    NETWORK : 'NetworkError',
    SERVER : 'ServerError',
    SERVER_CUSTOM : 'ServerCustomError',
  },

  ERROR_CODE: {
    //internal error
    INT_LOAD_TOKEN_FAILED : -1,

    INT_UNKNOWN_ERROR : 1,
    INT_BAD_PARAMETER : 2,
    INT_PARSING_ERROR : 3,
    INT_PERMISSION_DENIED : 4,
    INT_NOT_SUPPORT : 5,

    NETWORK_ERROR : 10,
    NETWORK_TIMEOUT : 11,
    NETWORK_ERROR_SSL_HANDSHAKE : 12,

    //nebula error
    BOX : 100,
    UNPAIRED : 101,
    BOX_NOT_ONLINE : 103,
    PAIRING_CONFLICT : 104,
    PAIRING_CMD_NOT_ACTIVATE: 105,
    PAIRING_CMD_EXPIRE: 106,
    PAIRING_CMD_BACKOFF: 107,
    UNABLE_TO_CONTINUE: 110,
    TOKEN_INVALID : 200,
    PERMISSION_DENIED : 201,
    TOKEN_EXPIRED : 202,
    TOKEN_INVALID_PUG : 203,
    LICENSE : 300,
    INVALID_HARDWARE_KEY : 301,
    INCORRECT_PAIRING_CODE : 302,
    OMEGA_MAINTENANCE : 303,
    LICENSE_EOL : 304,
    LICENSE_EOS : 305,
    LICENSE_EXPIRED : 308,
    RMA : 309,
    OVERSEAT : 310,
    WSE_ERROR : 311,
    ACCOUNT_REQUIRED : 312,
    ACCOUNT_OR_PASSWORD_INVALID : 313,
    ACCOUNT_PARAMETER_INVALID : 314,
    ACCOUNT_EXIST : 315,
    PARING_CODE_MALFORMED : 316,
    PARING_CODE_PREGENERATED : 317,
    PARING_CODE_REFUNDED : 318,
    BOX_NOT_ACTIVATED : 319,
    INVALID_PURCHASE : 321,
    SIGNIN_REQUIRED: 326,
    BAD_REQUEST : 400,
    OUT_OF_RANGE : 402,
    TIME_LIMIT_RULE_CONFLICT: 403,
    WTP_BLACK_CONFLICT: 404,
    BLACK_WHITE_CONFLICT: 405,
    BLACK_WTP_CONFLICT: 406,
  },

  ACCOUNT_REQUIRED: {
    NONE: 0,
    ALL: 1,
    SIGNIN: 2
  },

  PAIRING_BACKOFF_DURATION: 10000,

  PERSISTOR_WHITELIST: ['devices', 'event', 'deviceEventDetail', 'family', 'inappropriateAppList', 'profile', 'whatsNew', 'dashboard', 'timecontrol', 'helpPage'],
  PERSISTOR_DEBOUNCE: 1000,
  PERSISTOR_EVENT_LIMIT: 100,

  EXCEPTION_MEMBER_LIMIT: 31,
  EXCEPTION_URL_LIMIT: 1024,

  WTP_TUTORIAL_COOLDOWN: 1209600000,
  RENEW_CAMPAIGN_ID_TIMEOUT: 86400000, //24 hrs
  LICENSE_GOING_TO_EXPIRE_THRESHOLD: 6048000000, //70 days 70* 60 * 60 * 24 * 1000

  SKU: {
    // ANZ
    GLOBAL_731D_NORMAL: '1',
    GLOBAL_31D_NORMAL: '5',
    // JP
    JP_366D_EOM: '2',
    JP_1Y_EOM: '4',
    // Others
    BBSS: '3',
    NABU: '6',
    AMAZON: '7',
  },

  PRODUCT_ID: {
    LICENSE_1_YEAR: 'hns_license_1_year',
    TEST_LICENSE_1_YEAR: 'hns_test_license_1_year'
  },

  //App download link
  APP_DOWNLOAD_LINK:{
    PROD: {
      ios: 'https://itunes.apple.com/app/id1097019859',
      android: 'https://play.google.com/store/apps/details?id=com.trendmicro.homenetworksecurity',
    },
    PUG: {
      ios: 'https://incubation.azurewebsites.net/diamondapp/index.html?pug=true&os=ios',
      android: 'https://incubation.azurewebsites.net/diamondapp/index.html?pug=true&os=android',  
    }
  },

  TM_SSO_LINK: "https://sso1.trendmicro.com/signin/module.php/myaccount/loginuserpass.php",
  TM_PPH_LINK: "https://www.trendmicro.com/ja_jp/about/legal/privacy-policy/handling.html",

  DIALOG_ID: {
    ANDROID_PERMISSION_REQUIRED: 'ANDROID_PERMISSION_REQUIRED',
    GDPR: 'GDPR',
    STATION_OFFLINE : 'STATION_OFFLINE',
    NO_INTERNET : 'NO_INTERNET',
    ANOTHER_ARP : 'ANOTHER_ARP',
    FIRST_SCAN : 'FIRST_SCAN',
    DEVICE_DELETE : 'DEVICE_DELETE',
    DEVICE_BLOCK : 'DEVICE_BLOCK',
    MEMBER_DELETE : 'MEMBER_DELETE',
    MEMBER_REASSIGN_DEVICE : 'MEMBER_REASSIGN_DEVICE',
    MEMBER_CHANGE_PHOTO : 'MEMBER_CHANGE_PHOTO',
    MEMBER_NO_DEVICES_ASSIGNED : 'MEMBER_NO_DEVICES_ASSIGNED',
    MEMBER_STICKER_UNSUPPORTED_FILE: 'STICKER_UNSUPPORTED_FILE',
    NET_CONTROL_SAME_TIME : 'NET_CONTROL_SAME_TIME',
    TIME_CONTROL_DAY_NEEDED: 'TIME_CONTROL_DAY_NEEDED',
    TIME_CONTROL_DELETE_RULE: 'TIME_CONTROL_DELETE_RULE',
    TIME_CONTROL_ACCESS_UNCHANGED: 'TIME_CONTROL_ACCESS_UNCHANGED',
    TIME_CONTROL_PERIOD_NOT_ALLOWED: 'TIME_CONTROL_PERIOD_NOT_ALLOWED',
    TIME_CONTROL_TIME_OVERLAY_PERIOD: 'TIME_CONTROL_TIME_OVERLAY_PERIOD',
    TIME_CONTROL_DAY_CONFLICT: 'TIME_CONTROL_DAY_CONFLICT',
    TIME_CONTROL_EVERYDAY_HAS_RULE: 'TIME_CONTROL_EVERYDAY_HAS_RULE',
    TIME_CONTROL_RULE_HAS_BEEN_CANCELED: 'TIME_CONTROL_RULE_HAS_BEEN_CANCELED',
    CANCEL_TIME_LIMITS: 'CANCEL_TIME_LIMITS',
    WEB_THREAT_ALLOW : 'WEB_THREAT_ALLOW',
    RAP_DEVICE_ALLOW : 'RAP_DEVICE_ALLOW',
    UD_SETTING_CHANGED : 'UD_SETTING_CHANGED',
    WEB_FILTER_NO_SELECT : 'WEB_FILTER_NO_SELECT',
    EXCEPTIONS_LIMIT_URL : 'EXCEPTIONS_LIMIT_URL',
    EXCEPTIONS_LIMIT_MEMBER : 'EXCEPTIONS_LIMIT_MEMBER',
    EXCEPTIONS_CONFLICT_WTP_BLACK: 'EXCEPTIONS_CONFLICT_WTP_BLACK',
    EXCEPTIONS_CONFLICT_WHITE_BLACK: 'EXCEPTIONS_CONFLICT_WHITE_BLACK',
    EXCEPTIONS_CONFLICT_BLACK_WHITE: 'EXCEPTIONS_CONFLICT_BLACK_WHITE',
    EXCEPTIONS_CONFLICT_BLACK_WTP: 'EXCEPTIONS_CONFLICT_BLACK_WTP',
    EXCEPTIONS_INVALID_FORMAT: 'EXCEPTIONS_INVALID_FORMAT',
    APP_FILTER_NO_SELECT : 'APP_FILTER_NO_SELECT',
    CONNECT_HOME_NO_SELECT: 'CONNECT_HOME_NO_SELECT',
    CONNECT_HOME_NO_DEVICE: 'CONNECT_HOME_NO_DEVICE',
    DISCONNECT_STATION : 'DISCONNECT_STATION',
    RESET_STATION : 'RESET_STATION',

    ERROR_BOX_OFFLINE : 'ERROR_BOX_OFFLINE',
    ERROR_INCORRECT_STATION_CODE : 'ERROR_INCORRECT_STATION_CODE',
    ERROR_OVERSEAT : 'ERROR_OVERSEAT',
    ERROR_MAINTENENCE : 'ERROR_MAINTENENCE',
    ERROR_MAINTENENCE_UNKNOWN : 'ERROR_MAINTENENCE_UNKNOWN',
    ERROR_INCORRECT_PAIRING_CODE : 'ERROR_INCORRECT_PAIRING_CODE',
    ERROR_RETURNED_PAIRING_CODE : "ERROR_RETURNED_PAIRING_CODE",
    ERROR_SIGNIN_FAILED : "ERROR_SIGNIN_FAILED",
    ERROR_NO_MAIL_ACCOUNT : "ERROR_NO_MAIL_ACCOUNT",
    ERROR_CAMERAROLL_UNAVAILABLE: "ERROR_CAMERAROLL_UNAVAILABLE",
 
    BOX_STATUS_ERROR : "BOX_STATUS_ERROR",
    BOX_STATUS_OFFLINE : "BOX_STATUS_OFFLINE",
    BOX_STATUS_NO_INTERNET : "BOX_STATUS_NO_INTERNET",

    PAIRING_NO_INTERNET : 'PAIRING_NO_INTERNET',
    PAIRING_NOT_SAME_WIFI : 'PAIRING_NOT_SAME_WIFI',
    CAMERA_UNAVAILABLE : 'CAMERA_UNAVAILABLE',
    ERROR_GENERAL : 'ERROR_GENERAL',
    TIMELINE_POPOVER_SURVEY: 'TIMELINE_POPOVER_SURVEY',
    TIMELINE_POPOVER_WHATSNEW: 'TIMELINE_POPOVER_WHATSNEW',
    TIMELINE_TIMEZONE_HELP: 'TIMELINE_TIMEZONE_HELP',
    UBM_AGREEMENT : 'UBM_AGREEMENT',
    DHCP_HELP: 'DHCP_HELP',
    COMPATIBILITY: 'COMPATIBILITY',
    DISCOVER_DEVICE : 'DISCOVER_DEVICE',
    TUTORIAL_CONNECT_TO_TEST : 'TUTORIAL_CONNECT_TO_TEST',
    MINI_SURVEY : 'MINI_SURVEY',
    INTRANET_PROTECT: 'INTRANET_PROTECT',
    LICENSE_EXPIRED: 'LICENSE_EXPIRED',
    LICENSE_EXPIRED_RENEW: 'LICENSE_EXPIRED_RENEW',
    REQUEST_CALL_FROM_SUPPORT: 'REQUEST_CALL_FROM_SUPPORT',
    REQUEST_SUPPORT_CALL_SENT: 'REQUEST_SUPPORT_CALL_SENT',
    REQUEST_SUPPORT_CALL_REQUESTED: 'REQUEST_SUPPORT_CALL_REQUESTED',
    REQUEST_SUPPORT_CALL_CONFIRMATION: 'REQUEST_SUPPORT_CALL_CONFIRMATION',
    CANCEL_DAILY_TIME_LIMIT: 'CANCEL_DAILY_TIME_LIMIT',
    NEW_DEVICE_NOTIFICATION: 'NEW_DEVICE_NOTIFICATION',
  },

  TOAST_ID: {
    SAVED: 'SAVED',
    REMOVED_FROM_APPROVED_LIST: 'REMOVED_FROM_APPROVED_LIST',
    THANKS_FEEDBACK: 'THANKS_FEEDBACK',
    CACHE_CLEARED: 'CACHE_CLEARED',
    LICENSE_EXPIRE: 'LICENSE_EXPIRE',
    LICENSE_EXPIRE_JP: 'LICENSE_EXPIRE_JP',
    LICENSE_EXPIRE_RENEW: 'LICENSE_EXPIRE_RENEW',
    LICENSE_EXPIRE_RENEW_JP: 'LICENSE_EXPIRE_RENEW_JP',
    LICENSE_EXPIRE_RENEW_ANZ: 'LICENSE_EXPIRE_RENEW_ANZ',
    ONE_RULE_PER_DAY:'ONE_RULE_PER_DAY',
    ENABLE_ONLINE_ACTIVITY_REPORT: 'ENABLE_ONLINE_ACTIVITY_REPORT',
    DEVICE_SETTING_SAVED: 'DEVICE_SETTING_SAVED',
    DEVICE_BLOCKED: 'DEVICE_BLOCKED',
  },
  
  APP_ID: {
    YouTube: 262256,
  }
};
