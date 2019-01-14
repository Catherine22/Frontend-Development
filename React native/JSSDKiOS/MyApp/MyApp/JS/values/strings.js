'use strict';

import LocalizedStrings from 'react-native-localization';
import RNLanguages from 'react-native-languages';

var TAG = 'Strings';
var Locale;

var strings = new LocalizedStrings({
  en: require('./wording/en'),
  ja: require('./wording/ja'),
});

console.log(TAG, 'Available languages:' + strings.getAvailableLanguages());
console.log(TAG, 'Current language:' + strings.getLanguage() + ', interface:' + strings.getInterfaceLanguage());

function updateLocale(){
  let language = strings.getLanguage();
  var locale = 'en_US';
  switch(language){
    case 'ja':
      locale = 'ja_JP';
      break;
    case 'en':
      locale = 'en_US';
      break;
  }
  console.log(TAG, 'getLocale lang:' + language, 'locale:' + locale);
  Locale = locale;
}

strings.getLocale = function(){
  if (!Locale){
    updateLocale();
  }
  return Locale;
};

strings.getCountry = function(){
  // console.log(TAG, 'getCountry lang:' + strings.getInterfaceLanguage());
  // if (strings.getInterfaceLanguage()){
  //   let segments = strings.getInterfaceLanguage().split('-');
  console.log(TAG, 'getCountry lang:' + RNLanguages.language);
  if (RNLanguages.language){
    let segments = RNLanguages.language.split('-');
    if (segments[1]){
      return segments[1];
    } else if (segments[0]){
      switch(segments[0]){
        case 'ja':
          return 'JP';
        case 'en':
          return 'US';
      }
    }
  }
  return null;
};

strings.getLanguage = function(){
  let segments = RNLanguages.language.split('-');
  return segments[0] ? segments[0] : 'en';
}

strings.updateLocale = updateLocale;

strings.setLanguage(strings.getLanguage());

module.exports = strings;