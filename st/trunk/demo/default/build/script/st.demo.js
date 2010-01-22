(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"st.demo.Application","qx.theme":"st.theme.blue.Theme","qx.version":"1.0"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"st":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"st.demo":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":{},"en":{}};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["st.demo:st.demo.js"]],
  urisBefore : [],
  packageHashes : {"0":"0161212d3271"},
  boot : "boot",
  bootIsInline : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
}

qx.$$loader.signalStartup = function () {
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash]);
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['0161212d3271']={"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-61,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-43,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-30,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-15,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-53,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-35,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-44,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-24,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-12,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-8],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-46,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-22,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/table/descending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-54,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-36,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Oxygen/16/actions/folder-new.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/system-search.png":[16,16,"png","qx"],"qx/icon/Oxygen/22/actions/address-book-new.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/appointment-new.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/bookmark-new.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/check-spelling.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/contact-new.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/dialog-apply.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/dialog-cancel.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/dialog-close.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/dialog-ok.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/document-new.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/document-open-recent.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/document-open.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/document-print-preview.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/document-print.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/document-properties.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/document-revert.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/document-save-as.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/document-save.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/document-send.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/edit-copy.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/edit-cut.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/edit-delete.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/edit-find.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/edit-paste.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/edit-select-all.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/edit-undo.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/folder-new.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-indent-less.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-indent-more.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-justify-center.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-justify-fill.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-justify-left.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-justify-right.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-text-bold.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-text-direction-ltr.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-text-direction-rtl.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-text-italic.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-text-strikethrough.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/format-text-underline.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/go-bottom.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/go-down.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/go-first.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/go-home.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/go-last.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/go-top.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/go-up.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/help-about.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/help-contents.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/help-faq.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/insert-image.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/insert-link.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/insert-text.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/list-add.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/list-remove.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/mail-forward.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/mail-mark-important.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/mail-mark-junk.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/mail-mark-read.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/mail-mark-unread.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/mail-message-new.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/mail-receive.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/mail-reply-all.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/mail-reply-sender.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/mail-send.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/media-eject.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/media-playback-pause.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/media-record.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/media-seek-backward.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/media-seek-forward.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/media-skip-backward.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/media-skip-forward.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/object-flip-horizontal.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/object-flip-vertical.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/object-rotate-left.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/object-rotate-right.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/process-stop.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/system-log-out.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/system-run.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/system-search.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/system-shutdown.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/view-fullscreen.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/view-refresh.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/view-restore.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/view-sort-ascending.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/view-sort-descending.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/window-close.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/window-new.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/zoom-fit-best.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/zoom-in.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/zoom-original.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/actions/zoom-out.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Oxygen/22/places/user-home.png":[22,22,"png","qx"],"qx/icon/Oxygen/32/apps/internet-blog.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/internet-download-manager.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/internet-feed-reader.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/internet-mail.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/internet-messenger.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/internet-telephony.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/internet-transfer.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/internet-web-browser.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/media-audio-player.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/media-photo-album.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/media-video-player.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-address-book.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-calendar.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-chart.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-database.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-draw.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-graphics.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-layout.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-presentation.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-project.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-spreadsheet.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-web.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/office-writer.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-accessibility.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-clock.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-display.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-font.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-keyboard.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-locale.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-network.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-security.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-sound.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-theme.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-users.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/preferences-wallpaper.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-archiver.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-calculator.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-character-map.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-color-chooser.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-dictionary.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-graphics-viewer.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-help.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-keyring.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-log-viewer.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-network-manager.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-notes.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-statistics.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-system-monitor.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-terminal.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/apps/utilities-text-editor.png":[32,32,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"st/decoration/Blue/arrows/down-invert.png":[8,5,"png","st"],"st/decoration/Blue/arrows/down-small-invert.png":[5,3,"png","st"],"st/decoration/Blue/arrows/down-small.png":[5,3,"png","st"],"st/decoration/Blue/arrows/down.png":[8,5,"png","st"],"st/decoration/Blue/arrows/forward.png":[10,8,"png","st"],"st/decoration/Blue/arrows/left-invert.png":[5,8,"png","st"],"st/decoration/Blue/arrows/left.png":[5,8,"png","st"],"st/decoration/Blue/arrows/rewind.png":[10,8,"png","st"],"st/decoration/Blue/arrows/right-invert.png":[5,8,"png","st"],"st/decoration/Blue/arrows/right.png":[5,8,"png","st"],"st/decoration/Blue/arrows/up-invert.png":[8,5,"png","st"],"st/decoration/Blue/arrows/up-small.png":[5,3,"png","st"],"st/decoration/Blue/arrows/up.png":[8,5,"png","st"],"st/decoration/Blue/bigPicture.cfg":"st","st/decoration/Blue/bigPicture.html":"st","st/decoration/Blue/bigPicture.png":[200,2726,"png","st"],"st/decoration/Blue/colorselector/brightness-field.png":[19,256,"png","st"],"st/decoration/Blue/colorselector/brightness-handle.gif":[35,11,"gif","st"],"st/decoration/Blue/colorselector/huesaturation-field.jpg":[256,256,"jpeg","st"],"st/decoration/Blue/colorselector/huesaturation-handle.gif":[11,11,"gif","st"],"st/decoration/Blue/cursors/alias.gif":[19,15,"gif","st"],"st/decoration/Blue/cursors/copy.gif":[19,15,"gif","st"],"st/decoration/Blue/cursors/move.gif":[13,9,"gif","st"],"st/decoration/Blue/cursors/nodrop.gif":[20,20,"gif","st"],"st/decoration/Blue/form/button-b.png":[4,4,"png","st"],"st/decoration/Blue/form/button-bl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-br.png":[4,4,"png","st"],"st/decoration/Blue/form/button-c.png":[40,52,"png","st"],"st/decoration/Blue/form/button-checked-b.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-bl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-br.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-c.png":[40,52,"png","st"],"st/decoration/Blue/form/button-checked-focused-b.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-focused-bl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-focused-br.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-focused-c.png":[40,52,"png","st"],"st/decoration/Blue/form/button-checked-focused-l.png":[4,52,"png","st"],"st/decoration/Blue/form/button-checked-focused-r.png":[4,52,"png","st"],"st/decoration/Blue/form/button-checked-focused-t.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-focused-tl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-focused-tr.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-l.png":[4,52,"png","st"],"st/decoration/Blue/form/button-checked-r.png":[4,52,"png","st"],"st/decoration/Blue/form/button-checked-t.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-tl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-checked-tr.png":[4,4,"png","st"],"st/decoration/Blue/form/button-disabled-b.png":[4,4,"png","st"],"st/decoration/Blue/form/button-disabled-bl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-disabled-br.png":[4,4,"png","st"],"st/decoration/Blue/form/button-disabled-c.png":[40,52,"png","st"],"st/decoration/Blue/form/button-disabled-l.png":[4,52,"png","st"],"st/decoration/Blue/form/button-disabled-r.png":[4,52,"png","st"],"st/decoration/Blue/form/button-disabled-t.png":[4,4,"png","st"],"st/decoration/Blue/form/button-disabled-tl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-disabled-tr.png":[4,4,"png","st"],"st/decoration/Blue/form/button-focused-b.png":[4,4,"png","st"],"st/decoration/Blue/form/button-focused-bl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-focused-br.png":[4,4,"png","st"],"st/decoration/Blue/form/button-focused-c.png":[40,52,"png","st"],"st/decoration/Blue/form/button-focused-l.png":[4,52,"png","st"],"st/decoration/Blue/form/button-focused-r.png":[4,52,"png","st"],"st/decoration/Blue/form/button-focused-t.png":[4,4,"png","st"],"st/decoration/Blue/form/button-focused-tl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-focused-tr.png":[4,4,"png","st"],"st/decoration/Blue/form/button-hovered-b.png":[4,4,"png","st"],"st/decoration/Blue/form/button-hovered-bl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-hovered-br.png":[4,4,"png","st"],"st/decoration/Blue/form/button-hovered-c.png":[40,52,"png","st"],"st/decoration/Blue/form/button-hovered-l.png":[4,52,"png","st"],"st/decoration/Blue/form/button-hovered-r.png":[4,52,"png","st"],"st/decoration/Blue/form/button-hovered-t.png":[4,4,"png","st"],"st/decoration/Blue/form/button-hovered-tl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-hovered-tr.png":[4,4,"png","st"],"st/decoration/Blue/form/button-l.png":[4,52,"png","st"],"st/decoration/Blue/form/button-preselected-b.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-bl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-br.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-c.png":[40,52,"png","st"],"st/decoration/Blue/form/button-preselected-focused-b.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-focused-bl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-focused-br.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-focused-c.png":[40,52,"png","st"],"st/decoration/Blue/form/button-preselected-focused-l.png":[4,52,"png","st"],"st/decoration/Blue/form/button-preselected-focused-r.png":[4,52,"png","st"],"st/decoration/Blue/form/button-preselected-focused-t.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-focused-tl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-focused-tr.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-l.png":[4,52,"png","st"],"st/decoration/Blue/form/button-preselected-r.png":[4,52,"png","st"],"st/decoration/Blue/form/button-preselected-t.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-tl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-preselected-tr.png":[4,4,"png","st"],"st/decoration/Blue/form/button-pressed-b.png":[4,4,"png","st"],"st/decoration/Blue/form/button-pressed-bl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-pressed-br.png":[4,4,"png","st"],"st/decoration/Blue/form/button-pressed-c.png":[40,52,"png","st"],"st/decoration/Blue/form/button-pressed-l.png":[4,52,"png","st"],"st/decoration/Blue/form/button-pressed-r.png":[4,52,"png","st"],"st/decoration/Blue/form/button-pressed-t.png":[4,4,"png","st"],"st/decoration/Blue/form/button-pressed-tl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-pressed-tr.png":[4,4,"png","st"],"st/decoration/Blue/form/button-r.png":[4,52,"png","st"],"st/decoration/Blue/form/button-t.png":[4,4,"png","st"],"st/decoration/Blue/form/button-tl.png":[4,4,"png","st"],"st/decoration/Blue/form/button-tr.png":[4,4,"png","st"],"st/decoration/Blue/form/checkbox-checked-disabled.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-checked-focused-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-checked-focused.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-checked-hovered-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-checked-hovered.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-checked-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-checked-pressed-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-checked-pressed.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-checked.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-disabled.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-focused-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-focused.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-hovered-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-hovered.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-pressed-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox-pressed.png":[14,14,"png","st"],"st/decoration/Blue/form/checkbox.png":[14,14,"png","st"],"st/decoration/Blue/form/input-focused.png":[40,12,"png","st"],"st/decoration/Blue/form/input.png":[84,12,"png","st"],"st/decoration/Blue/form/radiobutton-checked-disabled.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-checked-focused-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-checked-focused.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-checked-hovered.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-checked-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-checked-pressed.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-checked.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-disabled.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-focused-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-focused.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-hovered-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-hovered.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-pressed-invalid.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton-pressed.png":[14,14,"png","st"],"st/decoration/Blue/form/radiobutton.png":[14,14,"png","st"],"st/decoration/Blue/form/tooltip-error-arrow.png":[11,14,"png","st"],"st/decoration/Blue/form/tooltip-error-b.png":[6,6,"png","st"],"st/decoration/Blue/form/tooltip-error-bl.png":[6,6,"png","st"],"st/decoration/Blue/form/tooltip-error-br.png":[6,6,"png","st"],"st/decoration/Blue/form/tooltip-error-c.png":[40,18,"png","st"],"st/decoration/Blue/form/tooltip-error-l.png":[6,18,"png","st"],"st/decoration/Blue/form/tooltip-error-r.png":[6,18,"png","st"],"st/decoration/Blue/form/tooltip-error-t.png":[6,6,"png","st"],"st/decoration/Blue/form/tooltip-error-tl.png":[6,6,"png","st"],"st/decoration/Blue/form/tooltip-error-tr.png":[6,6,"png","st"],"st/decoration/Blue/groupbox/groupbox-b.png":[4,4,"png","st"],"st/decoration/Blue/groupbox/groupbox-bl.png":[4,4,"png","st"],"st/decoration/Blue/groupbox/groupbox-br.png":[4,4,"png","st"],"st/decoration/Blue/groupbox/groupbox-c.png":[40,51,"png","st"],"st/decoration/Blue/groupbox/groupbox-l.png":[4,51,"png","st"],"st/decoration/Blue/groupbox/groupbox-r.png":[4,51,"png","st"],"st/decoration/Blue/groupbox/groupbox-t.png":[4,4,"png","st"],"st/decoration/Blue/groupbox/groupbox-tl.png":[4,4,"png","st"],"st/decoration/Blue/groupbox/groupbox-tr.png":[4,4,"png","st"],"st/decoration/Blue/menu/background.png":[40,49,"png","st"],"st/decoration/Blue/menu/bar-background.png":[40,20,"png","st"],"st/decoration/Blue/menu/checkbox-invert.gif":[16,7,"gif","st"],"st/decoration/Blue/menu/checkbox.gif":[16,7,"gif","st"],"st/decoration/Blue/menu/radiobutton-invert.gif":[16,5,"gif","st"],"st/decoration/Blue/menu/radiobutton.gif":[16,5,"gif","st"],"st/decoration/Blue/pane/pane-b.png":[6,6,"png","st"],"st/decoration/Blue/pane/pane-bl.png":[6,6,"png","st"],"st/decoration/Blue/pane/pane-br.png":[6,6,"png","st"],"st/decoration/Blue/pane/pane-c.png":[40,238,"png","st"],"st/decoration/Blue/pane/pane-l.png":[6,238,"png","st"],"st/decoration/Blue/pane/pane-r.png":[6,238,"png","st"],"st/decoration/Blue/pane/pane-t.png":[6,6,"png","st"],"st/decoration/Blue/pane/pane-tl.png":[6,6,"png","st"],"st/decoration/Blue/pane/pane-tr.png":[6,6,"png","st"],"st/decoration/Blue/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","st"],"st/decoration/Blue/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","st"],"st/decoration/Blue/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","st"],"st/decoration/Blue/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","st"],"st/decoration/Blue/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","st"],"st/decoration/Blue/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","st"],"st/decoration/Blue/scrollbar/scrollbar-down.png":[6,4,"png","st"],"st/decoration/Blue/scrollbar/scrollbar-left.png":[4,6,"png","st"],"st/decoration/Blue/scrollbar/scrollbar-right.png":[4,6,"png","st"],"st/decoration/Blue/scrollbar/scrollbar-up.png":[6,4,"png","st"],"st/decoration/Blue/scrollbar/slider-knob-background.png":[12,10,"png","st"],"st/decoration/Blue/selection.png":[110,20,"png","st"],"st/decoration/Blue/shadow/shadow-b.png":[15,15,"png","st"],"st/decoration/Blue/shadow/shadow-bl.png":[15,15,"png","st"],"st/decoration/Blue/shadow/shadow-br.png":[15,15,"png","st"],"st/decoration/Blue/shadow/shadow-c.png":[40,382,"png","st"],"st/decoration/Blue/shadow/shadow-l.png":[15,382,"png","st"],"st/decoration/Blue/shadow/shadow-r.png":[15,382,"png","st"],"st/decoration/Blue/shadow/shadow-small-b.png":[5,5,"png","st"],"st/decoration/Blue/shadow/shadow-small-bl.png":[5,5,"png","st"],"st/decoration/Blue/shadow/shadow-small-br.png":[5,5,"png","st"],"st/decoration/Blue/shadow/shadow-small-c.png":[40,136,"png","st"],"st/decoration/Blue/shadow/shadow-small-l.png":[5,136,"png","st"],"st/decoration/Blue/shadow/shadow-small-r.png":[5,136,"png","st"],"st/decoration/Blue/shadow/shadow-small-t.png":[5,5,"png","st"],"st/decoration/Blue/shadow/shadow-small-tl.png":[5,5,"png","st"],"st/decoration/Blue/shadow/shadow-small-tr.png":[5,5,"png","st"],"st/decoration/Blue/shadow/shadow-t.png":[15,15,"png","st"],"st/decoration/Blue/shadow/shadow-tl.png":[15,15,"png","st"],"st/decoration/Blue/shadow/shadow-tr.png":[15,15,"png","st"],"st/decoration/Blue/splitpane/knob-horizontal.png":[1,8,"png","st"],"st/decoration/Blue/splitpane/knob-vertical.png":[8,1,"png","st"],"st/decoration/Blue/table/ascending.gif":[7,4,"gif","st"],"st/decoration/Blue/table/ascending.png":[8,5,"png","st"],"st/decoration/Blue/table/boolean-false.png":[14,14,"png","st"],"st/decoration/Blue/table/boolean-true.png":[14,14,"png","st"],"st/decoration/Blue/table/descending.gif":[7,4,"gif","st"],"st/decoration/Blue/table/descending.png":[8,5,"png","st"],"st/decoration/Blue/table/header-cell.png":[40,18,"png","st"],"st/decoration/Blue/table/select-column-order.png":[10,9,"png","st"],"st/decoration/Blue/tabview/.picasa.ini":"st","st/decoration/Blue/tabview/tab-button-bottom-active-b.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-active-bl.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-active-br.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-active-c.png":[40,14,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-active-l.png":[5,14,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-active-r.png":[5,14,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-active-t.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-active-tl.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-active-tr.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-left-active-b.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-left-active-bl.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-left-active-br.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-left-active-c.png":[40,37,"png","st"],"st/decoration/Blue/tabview/tab-button-left-active-l.png":[5,37,"png","st"],"st/decoration/Blue/tabview/tab-button-left-active-r.png":[5,37,"png","st"],"st/decoration/Blue/tabview/tab-button-left-active-t.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-left-active-tl.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-left-active-tr.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-left-inactive-b.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-left-inactive-bl.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-left-inactive-br.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-left-inactive-c.png":[40,39,"png","st"],"st/decoration/Blue/tabview/tab-button-left-inactive-l.png":[3,39,"png","st"],"st/decoration/Blue/tabview/tab-button-left-inactive-r.png":[3,39,"png","st"],"st/decoration/Blue/tabview/tab-button-left-inactive-t.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-left-inactive-tl.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-left-inactive-tr.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-right-active-b.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-right-active-bl.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-right-active-br.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-right-active-c.png":[40,37,"png","st"],"st/decoration/Blue/tabview/tab-button-right-active-l.png":[5,37,"png","st"],"st/decoration/Blue/tabview/tab-button-right-active-r.png":[5,37,"png","st"],"st/decoration/Blue/tabview/tab-button-right-active-t.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-right-active-tl.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-right-active-tr.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-right-inactive-b.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-right-inactive-bl.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-right-inactive-br.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-right-inactive-c.png":[40,39,"png","st"],"st/decoration/Blue/tabview/tab-button-right-inactive-l.png":[3,39,"png","st"],"st/decoration/Blue/tabview/tab-button-right-inactive-r.png":[3,39,"png","st"],"st/decoration/Blue/tabview/tab-button-right-inactive-t.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-right-inactive-tl.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-right-inactive-tr.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-top-active-b.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-top-active-bl.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-top-active-br.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-top-active-c.png":[40,14,"png","st"],"st/decoration/Blue/tabview/tab-button-top-active-l.png":[5,12,"png","st"],"st/decoration/Blue/tabview/tab-button-top-active-r.png":[5,12,"png","st"],"st/decoration/Blue/tabview/tab-button-top-active-t.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-top-active-tl.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-top-active-tr.png":[5,5,"png","st"],"st/decoration/Blue/tabview/tab-button-top-inactive-b.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-top-inactive-bl.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-top-inactive-br.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-top-inactive-c.png":[40,15,"png","st"],"st/decoration/Blue/tabview/tab-button-top-inactive-l.png":[3,15,"png","st"],"st/decoration/Blue/tabview/tab-button-top-inactive-r.png":[3,15,"png","st"],"st/decoration/Blue/tabview/tab-button-top-inactive-t.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-top-inactive-tl.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tab-button-top-inactive-tr.png":[3,3,"png","st"],"st/decoration/Blue/tabview/tabview-pane-b.png":[30,30,"png","st"],"st/decoration/Blue/tabview/tabview-pane-bl.png":[30,30,"png","st"],"st/decoration/Blue/tabview/tabview-pane-br.png":[30,30,"png","st"],"st/decoration/Blue/tabview/tabview-pane-c.png":[40,120,"png","st"],"st/decoration/Blue/tabview/tabview-pane-l.png":[30,2,"png","st"],"st/decoration/Blue/tabview/tabview-pane-r.png":[30,2,"png","st"],"st/decoration/Blue/tabview/tabview-pane-t.png":[30,30,"png","st"],"st/decoration/Blue/tabview/tabview-pane-tl.png":[30,30,"png","st"],"st/decoration/Blue/tabview/tabview-pane-tr.png":[30,30,"png","st"],"st/decoration/Blue/toolbar/toolbar-gradient-blue.png":[40,130,"png","st"],"st/decoration/Blue/toolbar/toolbar-gradient.png":[40,130,"png","st"],"st/decoration/Blue/toolbar/toolbar-handle-knob.gif":[1,8,"gif","st"],"st/decoration/Blue/toolbar/toolbar-part.gif":[7,1,"gif","st"],"st/decoration/Blue/tree/closed-selected.png":[8,8,"png","st"],"st/decoration/Blue/tree/closed.png":[8,8,"png","st"],"st/decoration/Blue/tree/open-selected.png":[8,8,"png","st"],"st/decoration/Blue/tree/open.png":[8,8,"png","st"],"st/decoration/Blue/window/captionbar-active-b.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-active-bl.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-active-br.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-active-c.png":[40,9,"png","st"],"st/decoration/Blue/window/captionbar-active-l.png":[6,9,"png","st"],"st/decoration/Blue/window/captionbar-active-r.png":[6,9,"png","st"],"st/decoration/Blue/window/captionbar-active-t.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-active-tl.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-active-tr.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-inactive-b.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-inactive-bl.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-inactive-br.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-inactive-c.png":[40,9,"png","st"],"st/decoration/Blue/window/captionbar-inactive-l.png":[6,9,"png","st"],"st/decoration/Blue/window/captionbar-inactive-r.png":[6,9,"png","st"],"st/decoration/Blue/window/captionbar-inactive-t.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-inactive-tl.png":[6,6,"png","st"],"st/decoration/Blue/window/captionbar-inactive-tr.png":[6,6,"png","st"],"st/decoration/Blue/window/close-active-hovered.png":[9,9,"png","st"],"st/decoration/Blue/window/close-active.png":[9,9,"png","st"],"st/decoration/Blue/window/close-inactive.png":[9,9,"png","st"],"st/decoration/Blue/window/maximize-active-hovered.png":[9,9,"png","st"],"st/decoration/Blue/window/maximize-active.png":[9,9,"png","st"],"st/decoration/Blue/window/maximize-inactive.png":[9,9,"png","st"],"st/decoration/Blue/window/minimize-active-hovered.png":[9,9,"png","st"],"st/decoration/Blue/window/minimize-active.png":[9,9,"png","st"],"st/decoration/Blue/window/minimize-inactive.png":[9,9,"png","st"],"st/decoration/Blue/window/restore-active-hovered.png":[9,8,"png","st"],"st/decoration/Blue/window/restore-active.png":[9,8,"png","st"],"st/decoration/Blue/window/restore-inactive.png":[9,8,"png","st"],"st/decoration/Blue/window/statusbar-b.png":[4,4,"png","st"],"st/decoration/Blue/window/statusbar-bl.png":[4,4,"png","st"],"st/decoration/Blue/window/statusbar-br.png":[4,4,"png","st"],"st/decoration/Blue/window/statusbar-c.png":[40,7,"png","st"],"st/decoration/Blue/window/statusbar-l.png":[4,7,"png","st"],"st/decoration/Blue/window/statusbar-r.png":[4,7,"png","st"],"st/decoration/Blue/window/statusbar-t.png":[4,4,"png","st"],"st/decoration/Blue/window/statusbar-tl.png":[4,4,"png","st"],"st/decoration/Blue/window/statusbar-tr.png":[4,4,"png","st"],"st/icon/catalog/icon.png":[22,22,"png","st"],"st/icon/catalog/list.png":[22,22,"png","st"],"st/icon/catalog/tile.png":[22,22,"png","st"],"st/openlayers/OpenLayers.js":"st","st/openlayers/img/blank.gif":[1,1,"gif","st"],"st/openlayers/img/cloud-popup-relative.png":[676,736,"png","st"],"st/openlayers/img/drag-rectangle-off.png":[27,27,"png","st"],"st/openlayers/img/drag-rectangle-on.png":[28,28,"png","st"],"st/openlayers/img/east-mini.png":[18,18,"png","st"],"st/openlayers/img/layer-switcher-maximize.png":[18,18,"png","st"],"st/openlayers/img/layer-switcher-minimize.png":[18,18,"png","st"],"st/openlayers/img/marker-blue.png":[21,25,"png","st"],"st/openlayers/img/marker-gold.png":[21,25,"png","st"],"st/openlayers/img/marker-green.png":[21,25,"png","st"],"st/openlayers/img/marker.png":[21,25,"png","st"],"st/openlayers/img/measuring-stick-off.png":[28,28,"png","st"],"st/openlayers/img/measuring-stick-on.png":[28,28,"png","st"],"st/openlayers/img/north-mini.png":[18,18,"png","st"],"st/openlayers/img/panning-hand-off.png":[28,28,"png","st"],"st/openlayers/img/panning-hand-on.png":[28,28,"png","st"],"st/openlayers/img/slider.png":[20,9,"png","st"],"st/openlayers/img/south-mini.png":[18,18,"png","st"],"st/openlayers/img/west-mini.png":[18,18,"png","st"],"st/openlayers/img/zoom-minus-mini.png":[18,18,"png","st"],"st/openlayers/img/zoom-plus-mini.png":[18,18,"png","st"],"st/openlayers/img/zoom-world-mini.png":[18,18,"png","st"],"st/openlayers/img/zoombar.png":[18,264,"png","st"],"st/openlayers/theme/default/framedCloud.css":"st","st/openlayers/theme/default/ie6-style.css":"st","st/openlayers/theme/default/img/add_point_off.png":[24,22,"png","st"],"st/openlayers/theme/default/img/add_point_on.png":[24,22,"png","st"],"st/openlayers/theme/default/img/blank.gif":[1,1,"gif","st"],"st/openlayers/theme/default/img/close.gif":[17,17,"gif","st"],"st/openlayers/theme/default/img/drag-rectangle-off.png":[27,27,"png","st"],"st/openlayers/theme/default/img/drag-rectangle-on.png":[28,28,"png","st"],"st/openlayers/theme/default/img/draw_line_off.png":[24,22,"png","st"],"st/openlayers/theme/default/img/draw_line_on.png":[24,22,"png","st"],"st/openlayers/theme/default/img/draw_point_off.png":[24,22,"png","st"],"st/openlayers/theme/default/img/draw_point_on.png":[24,22,"png","st"],"st/openlayers/theme/default/img/draw_polygon_off.png":[24,22,"png","st"],"st/openlayers/theme/default/img/draw_polygon_on.png":[24,22,"png","st"],"st/openlayers/theme/default/img/editing_tool_bar.png":[128,47,"png","st"],"st/openlayers/theme/default/img/move_feature_off.png":[24,22,"png","st"],"st/openlayers/theme/default/img/move_feature_on.png":[24,22,"png","st"],"st/openlayers/theme/default/img/navigation_history.png":[48,48,"png","st"],"st/openlayers/theme/default/img/overview_replacement.gif":[15,15,"gif","st"],"st/openlayers/theme/default/img/pan-panel-NOALPHA.png":[36,36,"png","st"],"st/openlayers/theme/default/img/pan-panel.png":[36,36,"png","st"],"st/openlayers/theme/default/img/pan_off.png":[24,22,"png","st"],"st/openlayers/theme/default/img/pan_on.png":[24,22,"png","st"],"st/openlayers/theme/default/img/panning-hand-off.png":[28,28,"png","st"],"st/openlayers/theme/default/img/panning-hand-on.png":[28,28,"png","st"],"st/openlayers/theme/default/img/remove_point_off.png":[24,22,"png","st"],"st/openlayers/theme/default/img/remove_point_on.png":[24,22,"png","st"],"st/openlayers/theme/default/img/save_features_off.png":[24,22,"png","st"],"st/openlayers/theme/default/img/save_features_on.png":[24,22,"png","st"],"st/openlayers/theme/default/img/view_next_off.png":[24,24,"png","st"],"st/openlayers/theme/default/img/view_next_on.png":[24,24,"png","st"],"st/openlayers/theme/default/img/view_previous_off.png":[24,24,"png","st"],"st/openlayers/theme/default/img/view_previous_on.png":[24,24,"png","st"],"st/openlayers/theme/default/img/zoom-panel-NOALPHA.png":[18,54,"png","st"],"st/openlayers/theme/default/img/zoom-panel.png":[18,54,"png","st"],"st/openlayers/theme/default/style.css":"st"}};
(function(){var h=".",g="()",f="[Class ",e=".prototype",d="toString",c="qx.Bootstrap",b="]",a="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return f+this.classname+b;
},createNamespace:function(name,v){var x=name.split(h);
var parent=window;
var w=x[0];

for(var i=0,y=x.length-1;i<y;i++,w=x[i]){if(!parent[w]){parent=parent[w]={};
}else{parent=parent[w];
}}parent[w]=v;
return w;
},setDisplayName:function(t,u,name){t.displayName=u+h+name+g;
},setDisplayNames:function(j,k){for(var name in j){var l=j[name];

if(l instanceof Function){l.displayName=k+h+name+g;
}}},define:function(name,m){if(!m){var m={statics:{}};
}var r;
var p=null;
qx.Bootstrap.setDisplayNames(m.statics,name);

if(m.members){qx.Bootstrap.setDisplayNames(m.members,name+e);
r=m.construct||new Function;
var n=m.statics;

for(var o in n){r[o]=n[o];
}p=r.prototype;
var s=m.members;

for(var o in s){p[o]=s[o];
}}else{r=m.statics||{};
}var q=this.createNamespace(name,r);
r.name=r.classname=name;
r.basename=q;
r.$$type=a;
if(!r.hasOwnProperty(d)){r.toString=this.genericToString;
}if(m.defer){m.defer(r,p);
}qx.Bootstrap.$$registry[name]=m.statics;
return r;
}};
qx.Bootstrap.define(c,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var l="qx.allowUrlSettings",k="&",j="qx.core.Setting",h="qx.allowUrlVariants",g="qx.propertyDebugLevel",f="qxsetting",e=":",d=".";
qx.Bootstrap.define(j,{statics:{__a:{},define:function(m,n){if(n===undefined){throw new Error('Default value of setting "'+m+'" must be defined!');
}
if(!this.__a[m]){this.__a[m]={};
}else if(this.__a[m].defaultValue!==undefined){throw new Error('Setting "'+m+'" is already defined!');
}this.__a[m].defaultValue=n;
},get:function(b){var c=this.__a[b];

if(c===undefined){throw new Error('Setting "'+b+'" is not defined.');
}
if(c.value!==undefined){return c.value;
}return c.defaultValue;
},set:function(o,p){if((o.split(d)).length<2){throw new Error('Malformed settings key "'+o+'". Must be following the schema "namespace.key".');
}
if(!this.__a[o]){this.__a[o]={};
}this.__a[o].value=p;
},__b:function(){if(window.qxsettings){for(var a in window.qxsettings){this.set(a,window.qxsettings[a]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(t){}this.__c();
}},__c:function(){if(this.get(l)!=true){return;
}var s=document.location.search.slice(1).split(k);

for(var i=0;i<s.length;i++){var r=s[i].split(e);

if(r.length!=3||r[0]!=f){continue;
}this.set(r[1],decodeURIComponent(r[2]));
}}},defer:function(q){q.define(l,false);
q.define(h,false);
q.define(g,0);
q.__b();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__d:function(){var t=d;
var x=e;
var w=window.navigator.userAgent;
var z=false;
var v=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){t=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(w)){x=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){x+=q+RegExp.$3;
}}else{v=true;
x=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){t=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(w)){x=RegExp.$1;
var y=RegExp(n).exec(x);

if(y){x=x.slice(0,y.index);
}}else{v=true;
x=m;
}}else if(window.controllers&&window.navigator.product===c){t=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(w)){x=RegExp.$1;
}else{v=true;
x=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(w)){t=k;
x=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(x<8&&/Trident\/([^\);]+)(\)|;)/.test(w)){if(RegExp.$1===g){x=h;
}}this.MSHTML=true;
}else{var u=window.qxFail;

if(u&&typeof u===o){var t=u();

if(t.NAME&&t.FULLVERSION){t=t.NAME;
this[t.toUpperCase()]=true;
x=t.FULLVERSION;
}}else{z=true;
v=true;
x=r;
t=s;
this.GECKO=true;
window.alert("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__d();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(w,x,y){{};

if(!this.__e[w]){this.__e[w]={};
}else{}this.__e[w].allowedValues=x;
this.__e[w].defaultValue=y;
},get:function(A){var B=this.__e[A];
{};

if(B.value!==undefined){return B.value;
}return B.defaultValue;
},__g:function(){if(window.qxvariants){for(var z in qxvariants){{};

if(!this.__e[z]){this.__e[z]={};
}this.__e[z].value=qxvariants[z];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(N){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(m)!=true){return;
}var F=document.location.search.slice(1).split(p);

for(var i=0;i<F.length;i++){var G=F[i].split(f);

if(G.length!=3||G[0]!=c){continue;
}var H=G[1];

if(!this.__e[H]){this.__e[H]={};
}this.__e[H].value=decodeURIComponent(G[2]);
}},select:function(C,D){{};

for(var E in D){if(this.isSet(C,E)){return D[E];
}}
if(D[r]!==undefined){return D[r];
}{};
},isSet:function(I,J){var K=I+n+J;

if(this.__f[K]!==undefined){return this.__f[K];
}var M=false;
if(J.indexOf(s)<0){M=this.get(I)===J;
}else{var L=J.split(s);

for(var i=0,l=L.length;i<l;i++){if(this.get(I)===L[i]){M=true;
break;
}}}this.__f[K]=M;
return M;
},__i:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__k:function(O,P){for(var i=0,l=O.length;i<l;i++){if(O[i]==P){return true;
}}return false;
}},defer:function(Q){Q.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
Q.define(k,[u,t],u);
Q.define(o,[u,t],t);
Q.define(j,[u,t],u);
Q.__g();
}});
})();
(function(){var m="qx.client",k='"',j="valueOf",h="toLocaleString",g="isPrototypeOf",f="",e="toString",d="qx.lang.Object",c='\", "',b="hasOwnProperty";
qx.Bootstrap.define(d,{statics:{empty:function(W){{};

for(var X in W){if(W.hasOwnProperty(X)){delete W[X];
}}},isEmpty:qx.core.Variant.select(m,{"gecko":function(be){{};
return be.__count__===0;
},"default":function(G){{};

for(var H in G){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(m,{"gecko":function(n,o){{};
return n.__count__>=o;
},"default":function(bb,bc){{};

if(bc<=0){return true;
}var length=0;

for(var bd in bb){if((++length)>=bc){return true;
}}return false;
}}),getLength:qx.core.Variant.select(m,{"gecko":function(A){{};
return A.__count__;
},"default":function(E){{};
var length=0;

for(var F in E){length++;
}return length;
}}),_shadowedKeys:[g,b,h,e,j],getKeys:qx.core.Variant.select(m,{"mshtml":function(bh){var bi=[];

for(var bk in bh){bi.push(bk);
}var bj=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(bj.call(bh,a[i])){bi.push(a[i]);
}}return bi;
},"default":function(R){var S=[];

for(var T in R){S.push(T);
}return S;
}}),getKeysAsString:function(bf){{};
var bg=qx.lang.Object.getKeys(bf);

if(bg.length==0){return f;
}return k+bg.join(c)+k;
},getValues:function(I){{};
var K=[];
var J=this.getKeys(I);

for(var i=0,l=J.length;i<l;i++){K.push(I[J[i]]);
}return K;
},mergeWith:function(t,u,v){{};

if(v===undefined){v=true;
}
for(var w in u){if(v||t[w]===undefined){t[w]=u[w];
}}return t;
},carefullyMergeWith:function(r,s){{};
return qx.lang.Object.mergeWith(r,s,false);
},merge:function(B,C){{};
var D=arguments.length;

for(var i=1;i<D;i++){qx.lang.Object.mergeWith(B,arguments[i]);
}return B;
},clone:function(L){{};
var M={};

for(var N in L){M[N]=L[N];
}return M;
},invert:function(O){{};
var P={};

for(var Q in O){P[O[Q].toString()]=Q;
}return P;
},getKeyFromValue:function(x,y){{};

for(var z in x){if(x.hasOwnProperty(z)&&x[z]===y){return z;
}}return null;
},contains:function(U,V){{};
return this.getKeyFromValue(U,V)!==null;
},select:function(p,q){{};
return q[p];
},fromArray:function(Y){{};
var ba={};

for(var i=0,l=Y.length;i<l;i++){{};
ba[Y[i].toString()]=true;
}return ba;
}}});
})();
(function(){var t="Function",s="Boolean",r="Error",q="Number",p="Array",o="Date",n="RegExp",m="String",l="Object",k="qx.lang.Type",j="string";
qx.Bootstrap.define(k,{statics:{__l:{"[object String]":m,"[object Array]":p,"[object Object]":l,"[object RegExp]":n,"[object Number]":q,"[object Boolean]":s,"[object Date]":o,"[object Function]":t,"[object Error]":r},getClass:function(g){var h=Object.prototype.toString.call(g);
return (this.__l[h]||h.slice(8,-1));
},isString:function(a){return (a!==null&&(typeof a===j||this.getClass(a)==m||a instanceof String||(!!a&&!!a.$$isString)));
},isArray:function(i){return (i!==null&&(i instanceof Array||(i&&qx.Class.hasInterface(i.constructor,qx.data.IListData))||this.getClass(i)==p||(!!i&&!!i.$$isArray)));
},isObject:function(c){return (c!==undefined&&c!==null&&this.getClass(c)==l);
},isRegExp:function(e){return this.getClass(e)==n;
},isNumber:function(d){return (d!==null&&(this.getClass(d)==q||d instanceof Number));
},isBoolean:function(f){return (f!==null&&(this.getClass(f)==s||f instanceof Boolean));
},isDate:function(u){return (u!==null&&(this.getClass(u)==o||u instanceof Date));
},isError:function(v){return (v!==null&&(this.getClass(v)==r||v instanceof Error));
},isFunction:function(b){return this.getClass(b)==t;
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__m:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__m;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var q=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,q);
}return q;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(n,o,p,name){this.__m.push({fcn:n,pos:o===c?-1:1,type:p,name:name});
}}});
})();
(function(){var z="qx.aspects",y="on",x=".",w="static",v="[Class ",u="]",t="toString",s="constructor",r="member",q="$$init_",j=".prototype",p="destructor",n="extend",h="destruct",g="Class",m="off",k="qx.Class",o="qx.event.type.Data";
qx.Bootstrap.define(k,{statics:{define:function(name,bG){if(!bG){var bG={};
}if(bG.include&&!(bG.include instanceof Array)){bG.include=[bG.include];
}if(bG.implement&&!(bG.implement instanceof Array)){bG.implement=[bG.implement];
}if(!bG.hasOwnProperty(n)&&!bG.type){bG.type=w;
}{};
var bI=this.__r(name,bG.type,bG.extend,bG.statics,bG.construct,bG.destruct);
if(bG.extend){if(bG.properties){this.__t(bI,bG.properties,true);
}if(bG.members){this.__v(bI,bG.members,true,true,false);
}if(bG.events){this.__s(bI,bG.events,true);
}if(bG.include){for(var i=0,l=bG.include.length;i<l;i++){this.__y(bI,bG.include[i],false);
}}}if(bG.settings){for(var bH in bG.settings){qx.core.Setting.define(bH,bG.settings[bH]);
}}if(bG.variants){for(var bH in bG.variants){qx.core.Variant.define(bH,bG.variants[bH].allowedValues,bG.variants[bH].defaultValue);
}}if(bG.implement){for(var i=0,l=bG.implement.length;i<l;i++){this.__x(bI,bG.implement[i]);
}}{};
if(bG.defer){bG.defer.self=bI;
bG.defer(bI,bI.prototype,{add:function(name,bg){var bh={};
bh[name]=bg;
qx.Class.__t(bI,bh,true);
}});
}return bI;
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bO,bP){{};
qx.Class.__y(bO,bP,false);
},patch:function(K,L){{};
qx.Class.__y(K,L,true);
},isSubClassOf:function(bn,bo){if(!bn){return false;
}
if(bn==bo){return true;
}
if(bn.prototype instanceof bo){return true;
}return false;
},getPropertyDefinition:function(bV,name){while(bV){if(bV.$$properties&&bV.$$properties[name]){return bV.$$properties[name];
}bV=bV.superclass;
}return null;
},getProperties:function(e){var f=[];

while(e){if(e.$$properties){f.push.apply(f,qx.lang.Object.getKeys(e.$$properties));
}e=e.superclass;
}return f;
},getByProperty:function(cd,name){while(cd){if(cd.$$properties&&cd.$$properties[name]){return cd;
}cd=cd.superclass;
}return null;
},hasProperty:function(bN,name){return !!this.getPropertyDefinition(bN,name);
},getEventType:function(ce,name){var ce=ce.constructor;

while(ce.superclass){if(ce.$$events&&ce.$$events[name]!==undefined){return ce.$$events[name];
}ce=ce.superclass;
}return null;
},supportsEvent:function(bf,name){return !!this.getEventType(bf,name);
},hasOwnMixin:function(bs,bt){return bs.$$includes&&bs.$$includes.indexOf(bt)!==-1;
},getByMixin:function(P,Q){var R,i,l;

while(P){if(P.$$includes){R=P.$$flatIncludes;

for(i=0,l=R.length;i<l;i++){if(R[i]===Q){return P;
}}}P=P.superclass;
}return null;
},getMixins:function(bQ){var bR=[];

while(bQ){if(bQ.$$includes){bR.push.apply(bR,bQ.$$flatIncludes);
}bQ=bQ.superclass;
}return bR;
},hasMixin:function(cb,cc){return !!this.getByMixin(cb,cc);
},hasOwnInterface:function(bY,ca){return bY.$$implements&&bY.$$implements.indexOf(ca)!==-1;
},getByInterface:function(b,c){var d,i,l;

while(b){if(b.$$implements){d=b.$$flatImplements;

for(i=0,l=d.length;i<l;i++){if(d[i]===c){return b;
}}}b=b.superclass;
}return null;
},getInterfaces:function(ck){var cl=[];

while(ck){if(ck.$$implements){cl.push.apply(cl,ck.$$flatImplements);
}ck=ck.superclass;
}return cl;
},hasInterface:function(bp,bq){return !!this.getByInterface(bp,bq);
},implementsInterface:function(bS,bT){var bU=bS.constructor;

if(this.hasInterface(bU,bT)){return true;
}
try{qx.Interface.assertObject(bS,bT);
return true;
}catch(D){}
try{qx.Interface.assert(bU,bT,false);
return true;
}catch(be){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return v+this.classname+u;
},$$registry:qx.Bootstrap.$$registry,__n:null,__o:null,__p:function(){},__q:function(){},__r:function(name,bu,bv,bw,bx,by){var bD;

if(!bv&&qx.core.Variant.isSet(z,m)){bD=bw||{};
qx.Bootstrap.setDisplayNames(bD,name);
}else{bD={};

if(bv){if(!bx){bx=this.__z();
}bD=this.__B(bx,name,bu);
qx.Bootstrap.setDisplayName(bx,name,s);
}if(bw){qx.Bootstrap.setDisplayNames(bw,name);
var bE;

for(var i=0,a=qx.lang.Object.getKeys(bw),l=a.length;i<l;i++){bE=a[i];
var bA=bw[bE];

if(qx.core.Variant.isSet(z,y)){if(bA instanceof Function){bA=qx.core.Aspect.wrap(name+x+bE,bA,w);
}bD[bE]=bA;
}else{bD[bE]=bA;
}}}}var bC=qx.Bootstrap.createNamespace(name,bD,false);
bD.name=bD.classname=name;
bD.basename=bC;
bD.$$type=g;

if(bu){bD.$$classtype=bu;
}if(!bD.hasOwnProperty(t)){bD.toString=this.genericToString;
}
if(bv){var bF=bv.prototype;
var bz=this.__A();
bz.prototype=bF;
var bB=new bz;
bD.prototype=bB;
bB.name=bB.classname=name;
bB.basename=bC;
bx.base=bD.superclass=bv;
bx.self=bD.constructor=bB.constructor=bD;
if(by){if(qx.core.Variant.isSet(z,y)){by=qx.core.Aspect.wrap(name,by,p);
}bD.$$destructor=by;
qx.Bootstrap.setDisplayName(by,name,h);
}}this.$$registry[name]=bD;
return bD;
},__s:function(bJ,bK,bL){var bM,bM;
{};

if(bJ.$$events){for(var bM in bK){bJ.$$events[bM]=bK[bM];
}}else{bJ.$$events=bK;
}},__t:function(bi,bj,bk){var bm;

if(bk===undefined){bk=false;
}var bl=!!bi.$$propertiesAttached;

for(var name in bj){bm=bj[name];
{};
bm.name=name;
if(!bm.refine){if(bi.$$properties===undefined){bi.$$properties={};
}bi.$$properties[name]=bm;
}if(bm.init!==undefined){bi.prototype[q+name]=bm.init;
}if(bm.event!==undefined){var event={};
event[bm.event]=o;
this.__s(bi,event,bk);
}if(bm.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(bl){qx.core.Property.attachMethods(bi,name,bm);
}}},__u:null,__v:function(V,W,X,Y,ba){var bb=V.prototype;
var bd,bc;
qx.Bootstrap.setDisplayNames(W,V.classname+j);

for(var i=0,a=qx.lang.Object.getKeys(W),l=a.length;i<l;i++){bd=a[i];
bc=W[bd];
{};
if(Y!==false&&bc instanceof Function&&bc.$$type==null){if(ba==true){bc=this.__w(bc,bb[bd]);
}else{if(bb[bd]){bc.base=bb[bd];
}bc.self=V;
}
if(qx.core.Variant.isSet(z,y)){bc=qx.core.Aspect.wrap(V.classname+x+bd,bc,r);
}}bb[bd]=bc;
}},__w:function(I,J){if(J){return function(){var bX=I.base;
I.base=J;
var bW=I.apply(this,arguments);
I.base=bX;
return bW;
};
}else{return I;
}},__x:function(M,N){{};
var O=qx.Interface.flatten([N]);

if(M.$$implements){M.$$implements.push(N);
M.$$flatImplements.push.apply(M.$$flatImplements,O);
}else{M.$$implements=[N];
M.$$flatImplements=O;
}},__y:function(cf,cg,ch){{};

if(this.hasMixin(cf,cg)){return;
}var cj=qx.Mixin.flatten([cg]);
var ci;

for(var i=0,l=cj.length;i<l;i++){ci=cj[i];
if(ci.$$events){this.__s(cf,ci.$$events,ch);
}if(ci.$$properties){this.__t(cf,ci.$$properties,ch);
}if(ci.$$members){this.__v(cf,ci.$$members,ch,ch,ch);
}}if(cf.$$includes){cf.$$includes.push(cg);
cf.$$flatIncludes.push.apply(cf.$$flatIncludes,cj);
}else{cf.$$includes=[cg];
cf.$$flatIncludes=cj;
}},__z:function(){function br(){arguments.callee.base.apply(this,arguments);
}return br;
},__A:function(){return function(){};
},__B:function(E,name,F){var H=function(){var U=arguments.callee.constructor;
{};
if(!U.$$propertiesAttached){qx.core.Property.attach(U);
}var T=U.$$original.apply(this,arguments);
if(U.$$includes){var S=U.$$flatIncludes;

for(var i=0,l=S.length;i<l;i++){if(S[i].$$constructor){S[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return T;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var G=qx.core.Aspect.wrap(name,H,"constructor");
H.$$original=E;
H.constructor=G;
H=G;
}if(F==="singleton"){H.getInstance=this.getInstance;
}H.$$original=E;
E.wrapper=H;
return H;
}},defer:function(A){if(qx.core.Variant.isSet(z,y)){for(var B in qx.Bootstrap.$$registry){var A=qx.Bootstrap.$$registry[B];

for(var C in A){if(A[C] instanceof Function){A[C]=qx.core.Aspect.wrap(B+x+C,A[C],w);
}}}}}});
})();
(function(){var I="other",H="widgets",G="fonts",F="appearances",E="qx.Theme",D="]",C="[Theme ",B="colors",A="decorations",z="Theme",w="meta",y="borders",x="icons";
qx.Class.define(E,{statics:{define:function(name,b){if(!b){var b={};
}b.include=this.__do(b.include);
b.patch=this.__do(b.patch);
{};
var c={$$type:z,name:name,title:b.title,toString:this.genericToString};
if(b.extend){c.supertheme=b.extend;
}c.basename=qx.Bootstrap.createNamespace(name,c);
this.__dr(c,b);
this.__dp(c,b);
this.$$registry[name]=c;
for(var i=0,a=b.include,l=a.length;i<l;i++){this.include(c,a[i]);
}
for(var i=0,a=b.patch,l=a.length;i<l;i++){this.patch(c,a[i]);
}},__do:function(Q){if(!Q){return [];
}
if(qx.lang.Type.isArray(Q)){return Q;
}else{return [Q];
}},__dp:function(d,e){var f=e.aliases||{};

if(e.extend&&e.extend.aliases){qx.lang.Object.mergeWith(f,e.extend.aliases,false);
}d.aliases=f;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return C+this.name+D;
},__dq:function(g){for(var i=0,h=this.__ds,l=h.length;i<l;i++){if(g[h[i]]){return h[i];
}}},__dr:function(J,K){var N=this.__dq(K);
if(K.extend&&!N){N=K.extend.type;
}J.type=N||I;
if(!N){return;
}var P=function(){};
if(K.extend){P.prototype=new K.extend.$$clazz;
}var O=P.prototype;
var M=K[N];
for(var L in M){O[L]=M[L];
if(O[L].base){{};
O[L].base=K.extend;
}}J.$$clazz=P;
J[N]=new P;
},$$registry:{},__ds:[B,y,A,G,x,H,F,w],__dt:null,__du:null,__dv:function(){},patch:function(j,k){var n=this.__dq(k);

if(n!==this.__dq(j)){throw new Error("The mixins '"+j.name+"' are not compatible '"+k.name+"'!");
}var m=k[n];
var o=j.$$clazz.prototype;

for(var p in m){o[p]=m[p];
}},include:function(q,r){var t=r.type;

if(t!==q.type){throw new Error("The mixins '"+q.name+"' are not compatible '"+r.name+"'!");
}var s=r[t];
var u=q.$$clazz.prototype;

for(var v in s){if(u[v]!==undefined){continue;
}u[v]=s[v];
}}}});
})();
(function(){var j="#487A9F",i="#B4D3E8",h="#CCCCCC",g="#E4E4E4",f="gray",e="#fffefe",d="white",c="#4a4a4a",b="#FF0000",a="#1a1a1a",I="#CFDEEF",H="#C72B2B",G="#ffffdd",F="#CBC8CD",E="#99C3FE",D="#808080",C="#F4F4F4",B="#B6B6B6",A="#001533",z="st.theme.blue.Color",q="#F3F3F3",r="#FFFFFF",o="#314a6e",p="#8BBADF",m="#C8DCEA",n="#000000",k="#FF9999",l="#7B7A7E",s="#404955",t="#990000",v="#F1F6F8",u="#AFAFAF",x="#26364D",w="#2222FF",y="#AAAAAA";
qx.Theme.define(z,{colors:{"background-application":m,"background-pane":v,"background-light":r,"background-medium":p,"background-splitpane":u,"background-tip":G,"background-tip-error":H,"background-odd":g,"text-light":b,"text-gray":c,"text-label":w,"text-title":o,"text-input":n,"text-hovered":A,"text-disabled":l,"text-selected":e,"text-active":x,"text-inactive":s,"text-placeholder":F,"border-main":j,"border-separator":D,"border-input":j,"border-disabled":B,"border-pane":j,"border-button":j,"border-column":j,"border-focused":E,"invalid":t,"border-focused-invalid":k,"table-pane":I,"table-focus-indicator":i,"table-row-background-focused-selected":i,"table-row-background-focused":i,"table-row-background-selected":i,"table-row-background-even":q,"table-row-background-odd":g,"table-row-selected":e,"table-row":a,"table-row-line":h,"table-column-line":h,"progressive-table-header":y,"progressive-table-row-background-even":C,"progressive-table-row-background-odd":g,"progressive-progressbar-background":f,"progressive-progressbar-indicator-done":h,"progressive-progressbar-indicator-undone":d,"progressive-progressbar-percent-background":f,"progressive-progressbar-percent-text":d}});
})();
(function(){var p=';',o='computed=this.',n='=value;',m='this.',k='if(this.',j='delete this.',h='!==undefined)',g='}',f="init",e="set",bG="setRuntime",bF="setThemed",bE='else if(this.',bD='return this.',bC="boolean",bB='!==undefined){',bA="string",bz="resetThemed",by='=true;',bx="reset",w='old=this.',x="refresh",u="resetRuntime",v='if(old===undefined)old=null;',s='else ',t=' of an instance of ',q='if(old===undefined)old=this.',r='if(old===computed)return value;',E='old=computed=this.',F=";",Y=' is not (yet) ready!");',U='!==inherit){',bh=")}",bc="': ",bt=" of class ",bn='if(computed===undefined)computed=null;',N='return value;',bw='===value)return value;',bv='else{',bu='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',L='return init;',Q='var init=this.',S="')){",W="if(reg.hasListener(this, '",ba='else this.',bd="Error in property ",bj='if((computed===undefined||computed===inherit)&&',bp='if(init==qx.core.Property.$$inherit)init=null;',y="reg.fireEvent(this, '",z=';}',P='===undefined)return;',bg='if(a[i].',bf="', qx.event.type.Data, [computed, old]",be='");',bl='var computed, old=this.',bk=" in method ",bb='throw new Error("Property ',bi='(backup);',b='var inherit=prop.$$inherit;',bo='return null;',A="var reg=qx.event.Registration;",B='(computed, old, "',V='computed=value;',c='if(computed===undefined||computed==inherit)computed=null;',d=')a[i].',K='computed=undefined;delete this.',C='if(computed===inherit){',D="inherit",J='var pa=this.getLayoutParent();if(pa)computed=pa.',X=" with incoming value '",br='){',bq='!==undefined&&',R='else if(computed===undefined)',bs='var computed, old;',M='if(computed===undefined||computed===inherit){',bm='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',G='var backup=computed;',I='}else{',O='=computed;',T="object",H="qx.core.Property";
qx.Bootstrap.define(H,{statics:{__Q:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__R:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:D,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bA,dispose:bC,inheritable:bC,nullable:bC,themeable:bC,refine:bC,init:null,apply:bA,event:bA,check:null,transform:bA,deferredInit:bC,validate:null},$$allowedGroupKeys:{name:bA,group:T,mode:bA,themeable:bC},$$inheritable:{},refresh:function(cd){var parent=cd.getLayoutParent();

if(parent){var cg=cd.constructor;
var ci=this.$$store.inherit;
var ch=this.$$store.init;
var cf=this.$$method.refresh;
var cj;
var ce;
{};

while(cg){cj=cg.$$properties;

if(cj){for(var name in this.$$inheritable){if(cj[name]&&cd[cf[name]]){ce=parent[ci[name]];

if(ce===undefined){ce=parent[ch[name]];
}{};
cd[cf[name]](ce);
}}}cg=cg.superclass;
}}},attach:function(cX){var cY=cX.$$properties;

if(cY){for(var name in cY){this.attachMethods(cX,name,cY[name]);
}}cX.$$propertiesAttached=true;
},attachMethods:function(cz,name,cA){cA.group?this.__S(cz,cA,name):this.__T(cz,cA,name);
},__S:function(cG,cH,name){var cO=qx.lang.String.firstUp(name);
var cN=cG.prototype;
var cP=cH.themeable===true;
{};
var cQ=[];
var cK=[];

if(cP){var cI=[];
var cM=[];
}var cL="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
cQ.push(cL);

if(cP){cI.push(cL);
}
if(cH.mode=="shorthand"){var cJ="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
cQ.push(cJ);

if(cP){cI.push(cJ);
}}
for(var i=0,a=cH.group,l=a.length;i<l;i++){{};
cQ.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
cK.push("this.",this.$$method.reset[a[i]],"();");

if(cP){{};
cI.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
cM.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+cO;
cN[this.$$method.set[name]]=new Function(cQ.join(""));
this.$$method.reset[name]="reset"+cO;
cN[this.$$method.reset[name]]=new Function(cK.join(""));

if(cP){this.$$method.setThemed[name]="setThemed"+cO;
cN[this.$$method.setThemed[name]]=new Function(cI.join(""));
this.$$method.resetThemed[name]="resetThemed"+cO;
cN[this.$$method.resetThemed[name]]=new Function(cM.join(""));
}},__T:function(cm,cn,name){var cp=qx.lang.String.firstUp(name);
var cr=cm.prototype;
{};
if(cn.dispose===undefined&&typeof cn.check==="string"){cn.dispose=this.__R[cn.check]||qx.Class.isDefined(cn.check)||qx.Interface.isDefined(cn.check);
}var cq=this.$$method;
var co=this.$$store;
co.runtime[name]="$$runtime_"+name;
co.user[name]="$$user_"+name;
co.theme[name]="$$theme_"+name;
co.init[name]="$$init_"+name;
co.inherit[name]="$$inherit_"+name;
co.useinit[name]="$$useinit_"+name;
cq.get[name]="get"+cp;
cr[cq.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cm,name,"get");
};
cq.set[name]="set"+cp;
cr[cq.set[name]]=function(cF){return qx.core.Property.executeOptimizedSetter(this,cm,name,"set",arguments);
};
cq.reset[name]="reset"+cp;
cr[cq.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cm,name,"reset");
};

if(cn.inheritable||cn.apply||cn.event||cn.deferredInit){cq.init[name]="init"+cp;
cr[cq.init[name]]=function(ck){return qx.core.Property.executeOptimizedSetter(this,cm,name,"init",arguments);
};
}
if(cn.inheritable){cq.refresh[name]="refresh"+cp;
cr[cq.refresh[name]]=function(cl){return qx.core.Property.executeOptimizedSetter(this,cm,name,"refresh",arguments);
};
}cq.setRuntime[name]="setRuntime"+cp;
cr[cq.setRuntime[name]]=function(cD){return qx.core.Property.executeOptimizedSetter(this,cm,name,"setRuntime",arguments);
};
cq.resetRuntime[name]="resetRuntime"+cp;
cr[cq.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cm,name,"resetRuntime");
};

if(cn.themeable){cq.setThemed[name]="setThemed"+cp;
cr[cq.setThemed[name]]=function(cE){return qx.core.Property.executeOptimizedSetter(this,cm,name,"setThemed",arguments);
};
cq.resetThemed[name]="resetThemed"+cp;
cr[cq.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cm,name,"resetThemed");
};
}
if(cn.check==="Boolean"){cr["toggle"+cp]=new Function("return this."+cq.set[name]+"(!this."+cq.get[name]+"())");
cr["is"+cp]=new Function("return this."+cq.get[name]+"()");
}},__U:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(dm,dn,dp,dq,dr){var ds=dm.constructor.classname;
var dt=bd+dp+bt+ds+bk+this.$$method[dq][dp]+X+dr+bc;
throw new Error(dt+(this.__U[dn]||"Unknown reason: "+dn));
},__V:function(bH,bI,name,bJ,bK,bL){var bM=this.$$method[bJ][name];
{bI[bM]=new Function("value",bK.join(""));
};
if(qx.core.Variant.isSet("qx.aspects","on")){bI[bM]=qx.core.Aspect.wrap(bH.classname+"."+bM,bI[bM],"property");
}qx.Bootstrap.setDisplayName(bI[bM],bH.classname+".prototype",bM);
if(bL===undefined){return bH[bM]();
}else{return bH[bM](bL[0]);
}},executeOptimizedGetter:function(cs,ct,name,cu){var cw=ct.$$properties[name];
var cy=ct.prototype;
var cv=[];
var cx=this.$$store;
cv.push(k,cx.runtime[name],h);
cv.push(bD,cx.runtime[name],p);

if(cw.inheritable){cv.push(bE,cx.inherit[name],h);
cv.push(bD,cx.inherit[name],p);
cv.push(s);
}cv.push(k,cx.user[name],h);
cv.push(bD,cx.user[name],p);

if(cw.themeable){cv.push(bE,cx.theme[name],h);
cv.push(bD,cx.theme[name],p);
}
if(cw.deferredInit&&cw.init===undefined){cv.push(bE,cx.init[name],h);
cv.push(bD,cx.init[name],p);
}cv.push(s);

if(cw.init!==undefined){if(cw.inheritable){cv.push(Q,cx.init[name],p);

if(cw.nullable){cv.push(bp);
}else if(cw.init!==undefined){cv.push(bD,cx.init[name],p);
}else{cv.push(bu,name,t,ct.classname,Y);
}cv.push(L);
}else{cv.push(bD,cx.init[name],p);
}}else if(cw.inheritable||cw.nullable){cv.push(bo);
}else{cv.push(bb,name,t,ct.classname,Y);
}return this.__V(cs,cy,name,cu,cv);
},executeOptimizedSetter:function(da,db,name,dc,dd){var di=db.$$properties[name];
var dh=db.prototype;
var df=[];
var de=dc===e||dc===bF||dc===bG||(dc===f&&di.init===undefined);
var dg=di.apply||di.event||di.inheritable;
var dj=this.__W(dc,name);
this.__X(df,di,name,dc,de);

if(de){this.__Y(df,db,di,name);
}
if(dg){this.__ba(df,de,dj,dc);
}
if(di.inheritable){df.push(b);
}{};

if(!dg){this.__bc(df,name,dc,de);
}else{this.__bd(df,di,name,dc,de);
}
if(di.inheritable){this.__be(df,di,name,dc);
}else if(dg){this.__bf(df,di,name,dc);
}
if(dg){this.__bg(df,di,name);
if(di.inheritable&&dh._getChildren){this.__bh(df,name);
}}if(de){df.push(N);
}return this.__V(da,dh,name,dc,df,dd);
},__W:function(cB,name){if(cB==="setRuntime"||cB==="resetRuntime"){var cC=this.$$store.runtime[name];
}else if(cB==="setThemed"||cB==="resetThemed"){cC=this.$$store.theme[name];
}else if(cB==="init"){cC=this.$$store.init[name];
}else{cC=this.$$store.user[name];
}return cC;
},__X:function(bY,ca,name,cb,cc){{if(!ca.nullable||ca.check||ca.inheritable){bY.push('var prop=qx.core.Property;');
}if(cb==="set"){bY.push('if(value===undefined)prop.error(this,2,"',name,'","',cb,'",value);');
}};
},__Y:function(cR,cS,cT,name){if(cT.transform){cR.push('value=this.',cT.transform,'(value);');
}if(cT.validate){if(typeof cT.validate==="string"){cR.push('this.',cT.validate,'(value);');
}else if(cT.validate instanceof Function){cR.push(cS.classname,'.$$properties.',name);
cR.push('.validate.call(this, value);');
}}},__ba:function(du,dv,dw,dx){var dy=(dx===bx||dx===bz||dx===u);

if(dv){du.push(k,dw,bw);
}else if(dy){du.push(k,dw,P);
}},__bb:undefined,__bc:function(bN,name,bO,bP){if(bO===bG){bN.push(m,this.$$store.runtime[name],n);
}else if(bO===u){bN.push(k,this.$$store.runtime[name],h);
bN.push(j,this.$$store.runtime[name],p);
}else if(bO===e){bN.push(m,this.$$store.user[name],n);
}else if(bO===bx){bN.push(k,this.$$store.user[name],h);
bN.push(j,this.$$store.user[name],p);
}else if(bO===bF){bN.push(m,this.$$store.theme[name],n);
}else if(bO===bz){bN.push(k,this.$$store.theme[name],h);
bN.push(j,this.$$store.theme[name],p);
}else if(bO===f&&bP){bN.push(m,this.$$store.init[name],n);
}},__bd:function(bQ,bR,name,bS,bT){if(bR.inheritable){bQ.push(bl,this.$$store.inherit[name],p);
}else{bQ.push(bs);
}bQ.push(k,this.$$store.runtime[name],bB);

if(bS===bG){bQ.push(o,this.$$store.runtime[name],n);
}else if(bS===u){bQ.push(j,this.$$store.runtime[name],p);
bQ.push(k,this.$$store.user[name],h);
bQ.push(o,this.$$store.user[name],p);
bQ.push(bE,this.$$store.theme[name],h);
bQ.push(o,this.$$store.theme[name],p);
bQ.push(bE,this.$$store.init[name],bB);
bQ.push(o,this.$$store.init[name],p);
bQ.push(m,this.$$store.useinit[name],by);
bQ.push(g);
}else{bQ.push(E,this.$$store.runtime[name],p);
if(bS===e){bQ.push(m,this.$$store.user[name],n);
}else if(bS===bx){bQ.push(j,this.$$store.user[name],p);
}else if(bS===bF){bQ.push(m,this.$$store.theme[name],n);
}else if(bS===bz){bQ.push(j,this.$$store.theme[name],p);
}else if(bS===f&&bT){bQ.push(m,this.$$store.init[name],n);
}}bQ.push(g);
bQ.push(bE,this.$$store.user[name],bB);

if(bS===e){if(!bR.inheritable){bQ.push(w,this.$$store.user[name],p);
}bQ.push(o,this.$$store.user[name],n);
}else if(bS===bx){if(!bR.inheritable){bQ.push(w,this.$$store.user[name],p);
}bQ.push(j,this.$$store.user[name],p);
bQ.push(k,this.$$store.runtime[name],h);
bQ.push(o,this.$$store.runtime[name],p);
bQ.push(k,this.$$store.theme[name],h);
bQ.push(o,this.$$store.theme[name],p);
bQ.push(bE,this.$$store.init[name],bB);
bQ.push(o,this.$$store.init[name],p);
bQ.push(m,this.$$store.useinit[name],by);
bQ.push(g);
}else{if(bS===bG){bQ.push(o,this.$$store.runtime[name],n);
}else if(bR.inheritable){bQ.push(o,this.$$store.user[name],p);
}else{bQ.push(E,this.$$store.user[name],p);
}if(bS===bF){bQ.push(m,this.$$store.theme[name],n);
}else if(bS===bz){bQ.push(j,this.$$store.theme[name],p);
}else if(bS===f&&bT){bQ.push(m,this.$$store.init[name],n);
}}bQ.push(g);
if(bR.themeable){bQ.push(bE,this.$$store.theme[name],bB);

if(!bR.inheritable){bQ.push(w,this.$$store.theme[name],p);
}
if(bS===bG){bQ.push(o,this.$$store.runtime[name],n);
}else if(bS===e){bQ.push(o,this.$$store.user[name],n);
}else if(bS===bF){bQ.push(o,this.$$store.theme[name],n);
}else if(bS===bz){bQ.push(j,this.$$store.theme[name],p);
bQ.push(k,this.$$store.init[name],bB);
bQ.push(o,this.$$store.init[name],p);
bQ.push(m,this.$$store.useinit[name],by);
bQ.push(g);
}else if(bS===f){if(bT){bQ.push(m,this.$$store.init[name],n);
}bQ.push(o,this.$$store.theme[name],p);
}else if(bS===x){bQ.push(o,this.$$store.theme[name],p);
}bQ.push(g);
}bQ.push(bE,this.$$store.useinit[name],br);

if(!bR.inheritable){bQ.push(w,this.$$store.init[name],p);
}
if(bS===f){if(bT){bQ.push(o,this.$$store.init[name],n);
}else{bQ.push(o,this.$$store.init[name],p);
}}else if(bS===e||bS===bG||bS===bF||bS===x){bQ.push(j,this.$$store.useinit[name],p);

if(bS===bG){bQ.push(o,this.$$store.runtime[name],n);
}else if(bS===e){bQ.push(o,this.$$store.user[name],n);
}else if(bS===bF){bQ.push(o,this.$$store.theme[name],n);
}else if(bS===x){bQ.push(o,this.$$store.init[name],p);
}}bQ.push(g);
if(bS===e||bS===bG||bS===bF||bS===f){bQ.push(bv);

if(bS===bG){bQ.push(o,this.$$store.runtime[name],n);
}else if(bS===e){bQ.push(o,this.$$store.user[name],n);
}else if(bS===bF){bQ.push(o,this.$$store.theme[name],n);
}else if(bS===f){if(bT){bQ.push(o,this.$$store.init[name],n);
}else{bQ.push(o,this.$$store.init[name],p);
}bQ.push(m,this.$$store.useinit[name],by);
}bQ.push(g);
}},__be:function(bV,bW,name,bX){bV.push(M);

if(bX===x){bV.push(V);
}else{bV.push(J,this.$$store.inherit[name],p);
}bV.push(bj);
bV.push(m,this.$$store.init[name],bq);
bV.push(m,this.$$store.init[name],U);
bV.push(o,this.$$store.init[name],p);
bV.push(m,this.$$store.useinit[name],by);
bV.push(I);
bV.push(j,this.$$store.useinit[name],z);
bV.push(g);
bV.push(r);
bV.push(C);
bV.push(K,this.$$store.inherit[name],p);
bV.push(g);
bV.push(R);
bV.push(j,this.$$store.inherit[name],p);
bV.push(ba,this.$$store.inherit[name],O);
bV.push(G);
if(bW.init!==undefined&&bX!==f){bV.push(q,this.$$store.init[name],F);
}else{bV.push(v);
}bV.push(c);
},__bf:function(cU,cV,name,cW){if(cW!==e&&cW!==bG&&cW!==bF){cU.push(bn);
}cU.push(r);
if(cV.init!==undefined&&cW!==f){cU.push(q,this.$$store.init[name],F);
}else{cU.push(v);
}},__bg:function(dk,dl,name){if(dl.apply){dk.push(m,dl.apply,B,name,be);
}if(dl.event){dk.push(A,W,dl.event,S,y,dl.event,bf,bh);
}},__bh:function(bU,name){bU.push(bm);
bU.push(bg,this.$$method.refresh[name],d,this.$$method.refresh[name],bi);
bU.push(g);
}}});
})();
(function(){var s="$$hash",r="qx.core.ObjectRegistry";
qx.Bootstrap.define(r,{statics:{inShutDown:false,__bi:{},__bj:0,__bk:[],register:function(d){var g=this.__bi;

if(!g){return;
}var f=d.$$hash;

if(f==null){var e=this.__bk;

if(e.length>0){f=e.pop();
}else{f=(this.__bj++).toString(36);
}d.$$hash=f;
}{};
g[f]=d;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__bi;

if(n&&n[m]){delete n[m];
this.__bk.push(m);
}try{delete k.$$hash;
}catch(t){if(k.removeAttribute){k.removeAttribute(s);
}}},toHashCode:function(o){{};
var q=o.$$hash;

if(q!=null){return q;
}var p=this.__bk;

if(p.length>0){q=p.pop();
}else{q=(this.__bj++).toString(36);
}return o.$$hash=q;
},clearHashCode:function(h){{};
var j=h.$$hash;

if(j!=null){this.__bk.push(j);
try{delete h.$$hash;
}catch(c){if(h.removeAttribute){h.removeAttribute(s);
}}}},fromHashCode:function(u){return this.__bi[u]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__bi;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(v){qx.log.Logger.error(this,"Could not dispose object "+w.toString()+": "+v);

if(i!==l){i++;
continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__bi;
},getRegistry:function(){return this.__bi;
}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,t){if(t){if(t.include&&!(t.include instanceof Array)){t.include=[t.include];
}{};
var v=t.statics?t.statics:{};
qx.Bootstrap.setDisplayNames(v,name);

for(var u in v){if(v[u] instanceof Function){v[u].$$mixin=v;
}}if(t.construct){v.$$constructor=t.construct;
qx.Bootstrap.setDisplayName(t.construct,name,e);
}
if(t.include){v.$$includes=t.include;
}
if(t.properties){v.$$properties=t.properties;
}
if(t.members){v.$$members=t.members;
qx.Bootstrap.setDisplayNames(t.members,name+f);
}
for(var u in v.$$members){if(v.$$members[u] instanceof Function){v.$$members[u].$$mixin=v;
}}
if(t.events){v.$$events=t.events;
}
if(t.destruct){v.$$destructor=t.destruct;
qx.Bootstrap.setDisplayName(t.destruct,name,b);
}}else{var v={};
}v.$$type=a;
v.name=name;
v.toString=this.genericToString;
v.basename=qx.Bootstrap.createNamespace(name,v);
this.$$registry[name]=v;
return v;
},checkCompatibility:function(h){var m=this.flatten(h);
var n=m.length;

if(n<2){return true;
}var q={};
var p={};
var o={};
var k;

for(var i=0;i<n;i++){k=m[i];

for(var j in k.events){if(o[j]){throw new Error('Conflict between mixin "'+k.name+'" and "'+o[j]+'" in member "'+j+'"!');
}o[j]=k.name;
}
for(var j in k.properties){if(q[j]){throw new Error('Conflict between mixin "'+k.name+'" and "'+q[j]+'" in property "'+j+'"!');
}q[j]=k.name;
}
for(var j in k.members){if(p[j]){throw new Error('Conflict between mixin "'+k.name+'" and "'+p[j]+'" in member "'+j+'"!');
}p[j]=k.name;
}}return true;
},isCompatible:function(w,x){var y=qx.Class.getMixins(x);
y.push(w);
return qx.Mixin.checkCompatibility(y);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(r){if(!r){return [];
}var s=r.concat();

for(var i=0,l=r.length;i<l;i++){if(r[i].$$includes){s.push.apply(s,this.flatten(r[i].$$includes));
}}return s;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__bp:null,__bq:function(){}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var s="qx.client",r="on",q="function",p="mousedown",o="qx.bom.Event",n="return;",m="mouseover",l="HTMLEvents";
qx.Bootstrap.define(o,{statics:{addNativeListener:qx.core.Variant.select(s,{"mshtml":function(d,f,g){d.attachEvent(r+f,g);
},"default":function(i,j,k){i.addEventListener(j,k,false);
}}),removeNativeListener:qx.core.Variant.select(s,{"mshtml":function(a,b,c){try{a.detachEvent(r+b,c);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(u,v,w){u.removeEventListener(v,w,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(s,{"mshtml":function(e){if(e.type===m){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(s,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==p&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(t){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(h){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(z,A){if(document.createEventObject){var B=document.createEventObject();
return z.fireEvent(r+A,B);
}else{var B=document.createEvent(l);
B.initEvent(A,true,true);
return !z.dispatchEvent(B);
}},supportsEvent:qx.core.Variant.select(s,{"webkit":function(x,y){return x.hasOwnProperty(r+y);
},"default":function(C,D){var E=r+D;
var F=(E in C);

if(!F){F=typeof C[E]==q;

if(!F&&C.setAttribute){C.setAttribute(E,n);
F=typeof C[E]==q;
C.removeAttribute(E);
}}return F;
}})}});
})();
(function(){var bv="|bubble",bu="|capture",bt="|",bs="_",br="unload",bq="UNKNOWN_",bp="DOM_",bo="__H",bn="c",bm="__G",bj="WIN_",bl="capture",bk="qx.event.Manager",bi="QX_";
qx.Bootstrap.define(bk,{construct:function(P,Q){this.__C=P;
this.__D=qx.core.ObjectRegistry.toHashCode(P);
this.__E=Q;
if(P.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(P,br,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(P,br,arguments.callee);
self.dispose();
}));
}this.__F={};
this.__G={};
this.__H={};
this.__I={};
},statics:{__J:0,getNextUniqueId:function(){return (this.__J++).toString(36);
}},members:{__E:null,__F:null,__H:null,__K:null,__G:null,__I:null,__C:null,__D:null,getWindow:function(){return this.__C;
},getWindowId:function(){return this.__D;
},getHandler:function(L){var M=this.__G[L.classname];

if(M){return M;
}return this.__G[L.classname]=new L(this);
},getDispatcher:function(N){var O=this.__H[N.classname];

if(O){return O;
}return this.__H[N.classname]=new N(this,this.__E);
},getListeners:function(bF,bG,bH){var bI=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);
var bK=this.__F[bI];

if(!bK){return null;
}var bL=bG+(bH?bu:bv);
var bJ=bK[bL];
return bJ?bJ.concat():null;
},serializeListeners:function(cn){var cu=cn.$$hash||qx.core.ObjectRegistry.toHashCode(cn);
var cw=this.__F[cu];
var cs=[];

if(cw){var cq,cv,co,cr,ct;

for(var cp in cw){cq=cp.indexOf(bt);
cv=cp.substring(0,cq);
co=cp.charAt(cq+1)==bn;
cr=cw[cp];

for(var i=0,l=cr.length;i<l;i++){ct=cr[i];
cs.push({self:ct.context,handler:ct.handler,type:cv,capture:co});
}}}return cs;
},toggleAttachedEvents:function(Y,ba){var bf=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var bh=this.__F[bf];

if(bh){var bc,bg,bb,bd;

for(var be in bh){bc=be.indexOf(bt);
bg=be.substring(0,bc);
bb=be.charCodeAt(bc+1)===99;
bd=bh[be];

if(ba){this.__L(Y,bg,bb);
}else{this.__M(Y,bg,bb);
}}}},hasListener:function(R,S,T){{};
var U=R.$$hash||qx.core.ObjectRegistry.toHashCode(R);
var W=this.__F[U];

if(!W){return false;
}var X=S+(T?bu:bv);
var V=W[X];
return V&&V.length>0;
},importListeners:function(bw,bx){{};
var bD=bw.$$hash||qx.core.ObjectRegistry.toHashCode(bw);
var bE=this.__F[bD]={};
var bA=qx.event.Manager;

for(var by in bx){var bB=bx[by];
var bC=bB.type+(bB.capture?bu:bv);
var bz=bE[bC];

if(!bz){bz=bE[bC]=[];
this.__L(bw,bB.type,bB.capture);
}bz.push({handler:bB.listener,context:bB.self,unique:bB.unique||(bA.__J++).toString(36)});
}},addListener:function(w,x,y,self,z){var D;
{};
var E=w.$$hash||qx.core.ObjectRegistry.toHashCode(w);
var G=this.__F[E];

if(!G){G=this.__F[E]={};
}var C=x+(z?bu:bv);
var B=G[C];

if(!B){B=G[C]=[];
}if(B.length===0){this.__L(w,x,z);
}var F=(qx.event.Manager.__J++).toString(36);
var A={handler:y,context:self,unique:F};
B.push(A);
return C+bt+F;
},findHandler:function(h,j){var u=false,n=false,v=false;
var t;

if(h.nodeType===1){u=true;
t=bp+h.tagName.toLowerCase()+bs+j;
}else if(h==this.__C){n=true;
t=bj+j;
}else if(h.classname){v=true;
t=bi+h.classname+bs+j;
}else{t=bq+h+bs+j;
}var p=this.__I;

if(p[t]){return p[t];
}var s=this.__E.getHandlers();
var o=qx.event.IEventHandler;
var q,r,m,k;

for(var i=0,l=s.length;i<l;i++){q=s[i];
m=q.SUPPORTED_TYPES;

if(m&&!m[j]){continue;
}k=q.TARGET_CHECK;

if(k){if(!u&&k===o.TARGET_DOMNODE){continue;
}else if(!n&&k===o.TARGET_WINDOW){continue;
}else if(!v&&k===o.TARGET_OBJECT){continue;
}}r=this.getHandler(s[i]);

if(q.IGNORE_CAN_HANDLE||r.canHandleEvent(h,j)){p[t]=r;
return r;
}}return null;
},__L:function(cj,ck,cl){var cm=this.findHandler(cj,ck);

if(cm){cm.registerEvent(cj,ck,cl);
return;
}{};
},removeListener:function(bM,bN,bO,self,bP){var bT;
{};
var bU=bM.$$hash||qx.core.ObjectRegistry.toHashCode(bM);
var bV=this.__F[bU];

if(!bV){return false;
}var bQ=bN+(bP?bu:bv);
var bR=bV[bQ];

if(!bR){return false;
}var bS;

for(var i=0,l=bR.length;i<l;i++){bS=bR[i];

if(bS.handler===bO&&bS.context===self){qx.lang.Array.removeAt(bR,i);

if(bR.length==0){this.__M(bM,bN,bP);
}return true;
}}return false;
},removeListenerById:function(bW,bX){var ce;
{};
var cc=bX.split(bt);
var ch=cc[0];
var bY=cc[1].charCodeAt(0)==99;
var cg=cc[2];
var cf=bW.$$hash||qx.core.ObjectRegistry.toHashCode(bW);
var ci=this.__F[cf];

if(!ci){return false;
}var cd=ch+(bY?bu:bv);
var cb=ci[cd];

if(!cb){return false;
}var ca;

for(var i=0,l=cb.length;i<l;i++){ca=cb[i];

if(ca.unique===cg){qx.lang.Array.removeAt(cb,i);

if(cb.length==0){this.__M(bW,ch,bY);
}return true;
}}return false;
},removeAllListeners:function(a){var e=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var g=this.__F[e];

if(!g){return false;
}var c,f,b;

for(var d in g){if(g[d].length>0){c=d.split(bt);
f=c[0];
b=c[1]===bl;
this.__M(a,f,b);
}}delete this.__F[e];
return true;
},__M:function(H,I,J){var K=this.findHandler(H,I);

if(K){K.unregisterEvent(H,I,J);
return;
}{};
},dispatchEvent:function(cx,event){var cC;
{};
var cD=event.getType();

if(!event.getBubbles()&&!this.hasListener(cx,cD)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cx);
}var cB=this.__E.getDispatchers();
var cA;
var cz=false;

for(var i=0,l=cB.length;i<l;i++){cA=this.getDispatcher(cB[i]);
if(cA.canDispatchEvent(cx,event,cD)){cA.dispatchEvent(cx,event,cD);
cz=true;
break;
}}
if(!cz){qx.log.Logger.error(this,"No dispatcher can handle event of type "+cD+" on "+cx);
return true;
}var cy=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cy;
},dispose:function(){this.__E.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bm);
qx.util.DisposeUtil.disposeMap(this,bo);
this.__F=this.__C=this.__K=null;
this.__E=this.__I=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Bootstrap.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(m){return m.nodeType===
this.DOCUMENT?m:
m.ownerDocument||m.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(r){if(r.nodeType==null){return r;
}if(r.nodeType!==this.DOCUMENT){r=r.ownerDocument;
}return r.parentWindow;
},"default":function(e){if(e.nodeType==null){return e;
}if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;
}return e.defaultView;
}}),getDocumentElement:function(s){return this.getDocument(s).documentElement;
},getBodyElement:function(t){return this.getDocument(t).body;
},isNode:function(l){return !!(l&&l.nodeType!=null);
},isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);
},isDocument:function(o){return !!(o&&o.nodeType===this.DOCUMENT);
},isText:function(k){return !!(k&&k.nodeType===this.TEXT);
},isWindow:function(h){return !!(h&&h.history&&h.location&&h.document);
},isNodeName:function(f,g){if(!g||!f||!f.nodeName){return false;
}return g.toLowerCase()==qx.dom.Node.getName(f);
},getName:function(n){if(!n||!n.nodeName){return null;
}return n.nodeName.toLowerCase();
},getText:function(p){if(!p||!p.nodeType){return null;
}
switch(p.nodeType){case 1:var i,a=[],q=p.childNodes,length=q.length;

for(i=0;i<length;i++){a[i]=this.getText(q[i]);
}return a.join(b);
case 2:return p.nodeValue;
break;
case 3:return p.nodeValue;
break;
}return null;
}}});
})();
(function(){var t="mshtml",s="qx.client",r="[object Array]",q="qx.lang.Array",p="qx",o="number",n="string";
qx.Bootstrap.define(q,{statics:{toArray:function(N,O){return this.cast(N,Array,O);
},cast:function(v,w,x){if(v.constructor===w){return v;
}
if(qx.Class.hasInterface(v,qx.data.IListData)){var v=v.toArray();
}var y=new w;
if(qx.core.Variant.isSet(s,t)){if(v.item){for(var i=x||0,l=v.length;i<l;i++){y.push(v[i]);
}return y;
}}if(Object.prototype.toString.call(v)===r&&x==null){y.push.apply(y,v);
}else{y.push.apply(y,Array.prototype.slice.call(v,x||0));
}return y;
},fromArguments:function(V,W){return Array.prototype.slice.call(V,W||0);
},fromCollection:function(bp){if(qx.core.Variant.isSet(s,t)){if(bp.item){var bq=[];

for(var i=0,l=bp.length;i<l;i++){bq[i]=bp[i];
}return bq;
}}return Array.prototype.slice.call(bp,0);
},fromShortHand:function(d){var f=d.length;
var e=qx.lang.Array.clone(d);
switch(f){case 1:e[1]=e[2]=e[3]=e[0];
break;
case 2:e[2]=e[0];
case 3:e[3]=e[1];
}return e;
},clone:function(j){return j.concat();
},insertAt:function(k,m,i){k.splice(i,0,m);
return k;
},insertBefore:function(S,T,U){var i=S.indexOf(U);

if(i==-1){S.push(T);
}else{S.splice(i,0,T);
}return S;
},insertAfter:function(P,Q,R){var i=P.indexOf(R);

if(i==-1||i==(P.length-1)){P.push(Q);
}else{P.splice(i+1,0,Q);
}return P;
},removeAt:function(M,i){return M.splice(i,1)[0];
},removeAll:function(h){h.length=0;
return this;
},append:function(I,J){{};
Array.prototype.push.apply(I,J);
return I;
},exclude:function(B,C){{};

for(var i=0,E=C.length,D;i<E;i++){D=B.indexOf(C[i]);

if(D!=-1){B.splice(D,1);
}}return B;
},remove:function(z,A){var i=z.indexOf(A);

if(i!=-1){z.splice(i,1);
return A;
}},contains:function(K,L){return K.indexOf(L)!==-1;
},equals:function(ba,bb){var length=ba.length;

if(length!==bb.length){return false;
}
for(var i=0;i<length;i++){if(ba[i]!==bb[i]){return false;
}}return true;
},sum:function(X){var Y=0;

for(var i=0,l=X.length;i<l;i++){Y+=X[i];
}return Y;
},max:function(F){{};
var i,H=F.length,G=F[0];

for(i=1;i<H;i++){if(F[i]>G){G=F[i];
}}return G===undefined?null:G;
},min:function(a){{};
var i,c=a.length,b=a[0];

for(i=1;i<c;i++){if(a[i]<b){b=a[i];
}}return b===undefined?null:b;
},unique:function(bc){var bm=[],be={},bh={},bj={};
var bi,bd=0;
var bn=p+qx.lang.Date.now();
var bf=false,bl=false,bo=false;
for(var i=0,bk=bc.length;i<bk;i++){bi=bc[i];
if(bi===null){if(!bf){bf=true;
bm.push(bi);
}}else if(bi===undefined){}else if(bi===false){if(!bl){bl=true;
bm.push(bi);
}}else if(bi===true){if(!bo){bo=true;
bm.push(bi);
}}else if(typeof bi===n){if(!be[bi]){be[bi]=1;
bm.push(bi);
}}else if(typeof bi===o){if(!bh[bi]){bh[bi]=1;
bm.push(bi);
}}else{bg=bi[bn];

if(bg==null){bg=bi[bn]=bd++;
}
if(!bj[bg]){bj[bg]=bi;
bm.push(bi);
}}}for(var bg in bj){try{delete bj[bg][bn];
}catch(g){try{bj[bg][bn]=null;
}catch(u){throw new Error("Cannot clean-up map entry doneObjects["+bg+"]["+bn+"]");
}}}return bm;
}}});
})();
(function(){var v="()",u=".",t=".prototype.",s='anonymous()',r="qx.lang.Function",q=".constructor()";
qx.Bootstrap.define(r,{statics:{getCaller:function(n){return n.caller?n.caller.callee:n.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+q;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+t+j+v;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+u+j+v;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+t+j+v;
}}for(var j in k){if(k[j]==h){return k.classname+u+j+v;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+v;
}return s;
},globalEval:function(w){if(window.execScript){return window.execScript(w);
}else{return eval.call(window,w);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(o,p){{};
if(!p){return o;
}if(!(p.self||p.args||p.delay!=null||p.periodical!=null||p.attempt)){return o;
}return function(event){{};
var y=qx.lang.Array.fromArguments(arguments);
if(p.args){y=p.args.concat(y);
}
if(p.delay||p.periodical){var x=qx.event.GlobalError.observeMethod(function(){return o.apply(p.self||this,y);
});

if(p.delay){return window.setTimeout(x,p.delay);
}
if(p.periodical){return window.setInterval(x,p.periodical);
}}else if(p.attempt){var z=false;

try{z=o.apply(p.self||this,y);
}catch(a){}return z;
}else{return o.apply(p.self||this,y);
}};
},bind:function(c,self,d){return this.create(c,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(l,m){return this.create(l,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(e,self,f){if(arguments.length<3){return function(event){return e.call(self||this,event||window.event);
};
}else{var g=qx.lang.Array.fromArguments(arguments,2);
return function(event){var b=[event||window.event];
b.push.apply(b,g);
e.apply(self||this,b);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var H="qx.event.Registration";
qx.Bootstrap.define(H,{statics:{__N:{},getManager:function(y){if(y==null){{};
y=window;
}else if(y.nodeType){y=qx.dom.Node.getWindow(y);
}else if(!qx.dom.Node.isWindow(y)){y=window;
}var A=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var z=this.__N[A];

if(!z){z=new qx.event.Manager(y,this);
this.__N[A]=z;
}return z;
},removeManager:function(c){var d=c.getWindowId();
delete this.__N[d];
},addListener:function(o,p,q,self,r){return this.getManager(o).addListener(o,p,q,self,r);
},removeListener:function(t,u,v,self,w){return this.getManager(t).removeListener(t,u,v,self,w);
},removeListenerById:function(B,C){return this.getManager(B).removeListenerById(B,C);
},removeAllListeners:function(D){return this.getManager(D).removeAllListeners(D);
},hasListener:function(E,F,G){return this.getManager(E).hasListener(E,F,G);
},serializeListeners:function(K){return this.getManager(K).serializeListeners(K);
},createEvent:function(e,f,g){{};
if(f==null){f=qx.event.type.Event;
}var h=qx.event.Pool.getInstance().getObject(f);

if(!h){return;
}g?h.init.apply(h,g):h.init();
if(e){h.setType(e);
}return h;
},dispatchEvent:function(s,event){return this.getManager(s).dispatchEvent(s,event);
},fireEvent:function(i,j,k,l){var m;
{};
var n=this.createEvent(j,k||null,l);
return this.getManager(i).dispatchEvent(i,n);
},fireNonBubblingEvent:function(L,M,N,O){{};
var P=this.getManager(L);

if(!P.hasListener(L,M,false)){return true;
}var Q=this.createEvent(M,N||null,O);
return P.dispatchEvent(L,Q);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__O:[],addHandler:function(x){{};
this.__O.push(x);
this.__O.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__O;
},__P:[],addDispatcher:function(I,J){{};
this.__P.push(I);
this.__P.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__P;
}}});
})();
(function(){var g="qx.log.appender.RingBuffer";
qx.Bootstrap.define(g,{construct:function(f){this.__br=[];
this.setMaxMessages(f||50);
},members:{__bs:0,__br:null,__bt:50,setMaxMessages:function(a){this.__bt=a;
this.clearHistory();
},getMaxMessages:function(){return this.__bt;
},process:function(h){var i=this.getMaxMessages();

if(this.__br.length<i){this.__br.push(h);
}else{this.__br[this.__bs++]=h;

if(this.__bs>=i){this.__bs=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(b){if(b>this.__br.length){b=this.__br.length;
}
if(this.__br.length==this.getMaxMessages()){var d=this.__bs-1;
}else{d=this.__br.length-1;
}var c=d-b+1;

if(c<0){c+=this.__br.length;
}var e;

if(c<=d){e=this.__br.slice(c,d+1);
}else{e=this.__br.slice(c,this.__br.length).concat(this.__br.slice(0,d+1));
}return e;
},clearHistory:function(){this.__br=[];
this.__bs=0;
}}});
})();
(function(){var S="node",R="error",Q="...(+",P="array",O=")",N="info",M="instance",L="string",K="null",J="class",bo="number",bn="stringify",bm="]",bl="unknown",bk="function",bj="boolean",bi="debug",bh="map",bg="undefined",bf="qx.log.Logger",ba=")}",bb="#",X="warn",Y="document",V="{...(",W="[",T="text[",U="[...(",bc="\n",bd=")]",be="object";
qx.Bootstrap.define(bf,{statics:{__bu:bi,setLevel:function(a){this.__bu=a;
},getLevel:function(){return this.__bu;
},setTreshold:function(bz){this.__bx.setMaxMessages(bz);
},getTreshold:function(){return this.__bx.getMaxMessages();
},__bv:{},__bw:0,register:function(bp){if(bp.$$id){return;
}var bq=this.__bw++;
this.__bv[bq]=bp;
bp.$$id=bq;
var br=this.__bx.getAllLogEvents();

for(var i=0,l=br.length;i<l;i++){bp.process(br[i]);
}},unregister:function(bs){var bt=bs.$$id;

if(bt==null){return;
}delete this.__bv[bt];
delete bs.$$id;
},debug:function(d,e){this.__bz(bi,arguments);
},info:function(b,c){this.__bz(N,arguments);
},warn:function(k,m){this.__bz(X,arguments);
},error:function(bx,by){this.__bz(R,arguments);
},trace:function(F){this.__bz(N,[F,qx.dev.StackTrace.getStackTrace().join(bc)]);
},deprecatedMethodWarning:function(bu,bv){var bw;
{};
},deprecatedClassWarning:function(n,o){var p;
{};
},deprecatedEventWarning:function(G,event,H){var I;
{};
},deprecatedMixinWarning:function(q,r){var s;
{};
},deprecatedConstantWarning:function(f,g,h){var self,j;
{};
},clear:function(){this.__bx.clearHistory();
},__bx:new qx.log.appender.RingBuffer(50),__by:{debug:0,info:1,warn:2,error:3},__bz:function(t,u){var z=this.__by;

if(z[t]<z[this.__bu]){return;
}var w=u.length<2?null:u[0];
var y=w?1:0;
var v=[];

for(var i=y,l=u.length;i<l;i++){v.push(this.__bB(u[i],true));
}var A=new Date;
var B={time:A,offset:A-qx.Bootstrap.LOADSTART,level:t,items:v,win:window};
if(w){if(w instanceof qx.core.Object){B.object=w.$$hash;
}else if(w.$$type){B.clazz=w;
}}this.__bx.process(B);
var C=this.__bv;

for(var x in C){C[x].process(B);
}},__bA:function(D){if(D===undefined){return bg;
}else if(D===null){return K;
}
if(D.$$type){return J;
}var E=typeof D;

if(E===bk||E==L||E===bo||E===bj){return E;
}else if(E===be){if(D.nodeType){return S;
}else if(D.classname){return M;
}else if(D instanceof Array){return P;
}else if(D instanceof Error){return R;
}else{return bh;
}}
if(D.toString){return bn;
}return bl;
},__bB:function(bA,bB){var bI=this.__bA(bA);
var bE=bl;
var bD=[];

switch(bI){case K:case bg:bE=bI;
break;
case L:case bo:case bj:bE=bA;
break;
case S:if(bA.nodeType===9){bE=Y;
}else if(bA.nodeType===3){bE=T+bA.nodeValue+bm;
}else if(bA.nodeType===1){bE=bA.nodeName.toLowerCase();

if(bA.id){bE+=bb+bA.id;
}}else{bE=S;
}break;
case bk:bE=qx.lang.Function.getName(bA)||bI;
break;
case M:bE=bA.basename+W+bA.$$hash+bm;
break;
case J:case bn:bE=bA.toString();
break;
case R:bD=qx.dev.StackTrace.getStackTraceFromError(bA);
bE=bA.toString();
break;
case P:if(bB){bE=[];

for(var i=0,l=bA.length;i<l;i++){if(bE.length>20){bE.push(Q+(l-i)+O);
break;
}bE.push(this.__bB(bA[i],false));
}}else{bE=U+bA.length+bd;
}break;
case bh:if(bB){var bC;
var bH=[];

for(var bG in bA){bH.push(bG);
}bH.sort();
bE=[];

for(var i=0,l=bH.length;i<l;i++){if(bE.length>20){bE.push(Q+(l-i)+O);
break;
}bG=bH[i];
bC=this.__bB(bA[bG],false);
bC.key=bG;
bE.push(bC);
}}else{var bF=0;

for(var bG in bA){bF++;
}bE=V+bF+ba;
}break;
}return {type:bI,text:bE,trace:bD};
}}});
})();
(function(){var R="set",Q="get",P="reset",O="qx.core.Object",N="]",M="[",L="$$user_",K="Don't use '_disposeFields' - instead assign directly to 'null'",J="Object";
qx.Class.define(O,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:J},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+M+this.$$hash+N;
},base:function(bu,bv){{};

if(arguments.length===1){return bu.callee.base.call(this);
}else{return bu.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bt){return bt.callee.self;
},clone:function(){var bk=this.constructor;
var bj=new bk;
var bm=qx.Class.getProperties(bk);
var bl=qx.core.Property.$$store.user;
var bn=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bm.length;i<l;i++){name=bm[i];

if(this.hasOwnProperty(bl[name])){bj[bn[name]](this[bl[name]]);
}}return bj;
},set:function(S,T){var V=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(S)){if(!this[V[S]]){if(this[R+qx.lang.String.firstUp(S)]!=undefined){this[R+qx.lang.String.firstUp(S)](T);
return;
}{};
}return this[V[S]](T);
}else{for(var U in S){if(!this[V[U]]){if(this[R+qx.lang.String.firstUp(U)]!=undefined){this[R+qx.lang.String.firstUp(U)](S[U]);
continue;
}{};
}this[V[U]](S[U]);
}return this;
}},get:function(F){var G=qx.core.Property.$$method.get;

if(!this[G[F]]){if(this[Q+qx.lang.String.firstUp(F)]!=undefined){return this[Q+qx.lang.String.firstUp(F)]();
}{};
}return this[G[F]]();
},reset:function(ba){var bb=qx.core.Property.$$method.reset;

if(!this[bb[ba]]){if(this[P+qx.lang.String.firstUp(ba)]!=undefined){this[P+qx.lang.String.firstUp(ba)]();
return;
}{};
}this[bb[ba]]();
},__bC:qx.event.Registration,addListener:function(p,q,self,r){if(!this.$$disposed){return this.__bC.addListener(this,p,q,self,r);
}return null;
},addListenerOnce:function(a,b,self,c){var d=function(e){b.call(self||this,e);
this.removeListener(a,d,this,c);
};
return this.addListener(a,d,this,c);
},removeListener:function(bq,br,self,bs){if(!this.$$disposed){return this.__bC.removeListener(this,bq,br,self,bs);
}return false;
},removeListenerById:function(E){if(!this.$$disposed){return this.__bC.removeListenerById(this,E);
}return false;
},hasListener:function(H,I){return this.__bC.hasListener(this,H,I);
},dispatchEvent:function(x){if(!this.$$disposed){return this.__bC.dispatchEvent(this,x);
}return true;
},fireEvent:function(be,bf,bg){if(!this.$$disposed){return this.__bC.fireEvent(this,be,bf,bg);
}return true;
},fireNonBubblingEvent:function(t,u,v){if(!this.$$disposed){return this.__bC.fireNonBubblingEvent(this,t,u,v);
}return true;
},fireDataEvent:function(bw,bx,by,bz){if(!this.$$disposed){if(by===undefined){by=null;
}return this.__bC.fireNonBubblingEvent(this,bw,qx.event.type.Data,[bx,by,!!bz]);
}return true;
},__bD:null,setUserData:function(bh,bi){if(!this.__bD){this.__bD={};
}this.__bD[bh]=bi;
},getUserData:function(bc){if(!this.__bD){return null;
}var bd=this.__bD[bc];
return bd===undefined?null:bd;
},__bE:qx.log.Logger,debug:function(W){this.__bE.debug(this,W);
},info:function(w){this.__bE.info(this,w);
},warn:function(bA){this.__bE.warn(this,bA);
},error:function(y){this.__bE.error(this,y);
},trace:function(){this.__bE.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var C,A;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var B=this.constructor;
var z;

while(B.superclass){if(B.$$destructor){B.$$destructor.call(this);
}if(B.$$includes){z=B.$$flatIncludes;

for(var i=0,l=z.length;i<l;i++){if(z[i].$$destructor){z[i].$$destructor.call(this);
}}}B=B.superclass;
}var D=qx.Class.getProperties(this.constructor);

for(var i=0,l=D.length;i<l;i++){delete this[L+D[i]];
}{};
},_disposeFields:function(bp){qx.log.Logger.deprecatedMethodWarning(arguments.callee,K);
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bo){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(X){qx.util.DisposeUtil.disposeArray(this,X);
},_disposeMap:function(s){qx.util.DisposeUtil.disposeMap(this,s);
}},settings:{"qx.disposerDebugLevel":0},defer:function(Y){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bD=null;
var h=this.constructor;
var n;
var o=qx.core.Property.$$store;
var k=o.user;
var m=o.theme;
var f=o.inherit;
var j=o.useinit;
var g=o.init;

while(h){n=h.$$properties;

if(n){for(var name in n){if(n[name].dispose){this[k[name]]=this[m[name]]=this[f[name]]=this[j[name]]=this[g[name]]=undefined;
}}}h=h.superclass;
}}});
})();
(function(){var k="",j="g",h="0",g='\\$1',f="%",e='-',d="qx.lang.String",c=' ',b='\n',a="undefined";
qx.Bootstrap.define(d,{statics:{camelCase:function(E){return E.replace(/\-([a-z])/g,function(C,D){return D.toUpperCase();
});
},hyphenate:function(L){return L.replace(/[A-Z]/g,function(t){return (e+t.charAt(0).toLowerCase());
});
},capitalize:function(R){return R.replace(/\b[a-z]/g,function(Q){return Q.toUpperCase();
});
},clean:function(u){return this.trim(u.replace(/\s+/g,c));
},trimLeft:function(H){return H.replace(/^\s+/,k);
},trimRight:function(v){return v.replace(/\s+$/,k);
},trim:function(l){return l.replace(/^\s+|\s+$/g,k);
},startsWith:function(w,x){return w.indexOf(x)===0;
},endsWith:function(z,A){return z.substring(z.length-A.length,z.length)===A;
},repeat:function(F,G){return F.length>=0?new Array(G+1).join(F):k;
},pad:function(I,length,J){var K=length-I.length;

if(K>0){if(typeof J===a){J=h;
}return this.repeat(J,K)+I;
}else{return I;
}},firstUp:function(S){return S.charAt(0).toUpperCase()+S.substr(1);
},firstLow:function(y){return y.charAt(0).toLowerCase()+y.substr(1);
},contains:function(r,s){return r.indexOf(s)!=-1;
},format:function(N,O){var P=N;

for(var i=0;i<O.length;i++){P=P.replace(new RegExp(f+(i+1),j),O[i]);
}return P;
},escapeRegexpChars:function(B){return B.replace(/([.*+?^${}()|[\]\/\\])/g,g);
},toArray:function(q){return q.split(/\B|\b/g);
},stripTags:function(M){return M.replace(/<\/?[^>]+>/gi,k);
},stripScripts:function(m,n){var p=k;
var o=m.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){p+=arguments[1]+b;
return k;
});

if(n===true){qx.lang.Function.globalEval(p);
}return o;
}}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,H){if(H){if(H.extend&&!(H.extend instanceof Array)){H.extend=[H.extend];
}{};
var I=H.statics?H.statics:{};
if(H.extend){I.$$extends=H.extend;
}
if(H.properties){I.$$properties=H.properties;
}
if(H.members){I.$$members=H.members;
}
if(H.events){I.$$events=H.events;
}}else{var I={};
}I.$$type=c;
I.name=name;
I.toString=this.genericToString;
I.basename=qx.Bootstrap.createNamespace(name,I);
qx.Interface.$$registry[name]=I;
return I;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(C){if(!C){return [];
}var D=C.concat();

for(var i=0,l=C.length;i<l;i++){if(C[i].$$extends){D.push.apply(D,this.flatten(C[i].$$extends));
}}return D;
},__bF:function(t,u,v,w){var A=v.$$members;

if(A){for(var z in A){if(qx.lang.Type.isFunction(A[z])){var y=this.__bG(u,z);
var x=y||qx.lang.Type.isFunction(t[z]);

if(!x){throw new Error('Implementation of method "'+z+'" is missing in class "'+u.classname+'" required by interface "'+v.name+'"');
}var B=w===true&&!y&&!qx.Class.hasInterface(u,v);

if(B){t[z]=this.__bJ(v,t[z],z,A[z]);
}}else{if(typeof t[z]===undefined){if(typeof t[z]!==h){throw new Error('Implementation of member "'+z+'" is missing in class "'+u.classname+'" required by interface "'+v.name+'"');
}}}}}},__bG:function(n,o){var s=o.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!s){return false;
}var p=qx.lang.String.firstLow(s[2]);
var q=qx.Class.hasProperty(n,p);

if(!q){return false;
}var r=s[0]==b||s[0]==d;

if(r){return qx.Class.getPropertyDefinition(n,p).check==g;
}return true;
},__bH:function(E,F){if(F.$$properties){for(var G in F.$$properties){if(!qx.Class.hasProperty(E,G)){throw new Error('The property "'+G+'" is not supported by Class "'+E.classname+'"!');
}}}},__bI:function(j,k){if(k.$$events){for(var m in k.$$events){if(!qx.Class.supportsEvent(j,m)){throw new Error('The event "'+m+'" is not supported by Class "'+j.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__bF(J,M,K,false);
this.__bH(M,K);
this.__bI(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__bF(N.prototype,N,O,P);
this.__bH(N,O);
this.__bI(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__bJ:function(){},__bK:null,__bL:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__lq:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__lq=null;
},getInsets:function(){if(this.__lq){return this.__lq;
}var j=this._getDefaultInsets();
return this.__lq={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__lq=null;
}},destruct:function(){this.__lq=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){{};
var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var o="_applyStyle",n="Color",m="px",l="solid",k="dotted",j="double",i="dashed",h="",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(q,r,s){arguments.callee.base.call(this);
if(q!=null){this.setWidth(q);
}
if(r!=null){this.setStyle(r);
}
if(s!=null){this.setColor(s);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[l,k,i,j],init:l,apply:o},color:{nullable:true,check:n,apply:o},backgroundColor:{check:n,nullable:true,apply:o}},members:{__nH:null,_getDefaultInsets:function(){var p=this.getWidth();
return {top:p,right:p,bottom:p,left:p};
},_isInitialized:function(){return !!this.__nH;
},getMarkup:function(){if(this.__nH){return this.__nH;
}var t={position:a,top:0,left:0};
var u=this.getWidth();
{};
var w=qx.theme.manager.Color.getInstance();
t.border=u+c+this.getStyle()+e+w.resolve(this.getColor());
var v=this._generateBackgroundMarkup(t);
return this.__nH=v;
},resize:function(x,y,z){var B=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(B||qx.bom.client.Feature.CONTENT_BOX){var A=this.getWidth()*2;
y-=A;
z-=A;
if(y<0){y=0;
}
if(z<0){z=0;
}}x.style.width=y+m;
x.style.height=z+m;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||h;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__nH=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(l){arguments.callee.base.call(this);

if(l!=null){this.setBackgroundColor(l);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__lr:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lr;
},getMarkup:function(){if(this.__lr){return this.__lr;
}var j={position:a,top:0,left:0};
var k=this._generateBackgroundMarkup(j);
return this.__lr=k;
},resize:function(m,n,o){m.style.width=n+f;
m.style.height=o+f;
},tint:function(g,h){var i=qx.theme.manager.Color.getInstance();

if(h==null){h=this.getBackgroundColor();
}g.style.backgroundColor=i.resolve(h)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__lr=null;
}});
})();
(function(){var z="_applyStyle",y="solid",x="Color",w="double",v="px ",u="dotted",t="_applyWidth",s="dashed",r="Number",q=" ",V="shorthand",U="px",T="widthTop",S="styleRight",R="styleLeft",Q="widthLeft",P="widthBottom",O="styleTop",N="colorBottom",M="styleBottom",G="widthRight",H="colorLeft",E="colorRight",F="colorTop",C="scale",D="border-top",A="border-left",B="border-right",I="qx.ui.decoration.Single",J="",L="border-bottom",K="absolute";
qx.Class.define(I,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(f,g,h){arguments.callee.base.call(this);
if(f!=null){this.setWidth(f);
}
if(g!=null){this.setStyle(g);
}
if(h!=null){this.setColor(h);
}},properties:{widthTop:{check:r,init:0,apply:t},widthRight:{check:r,init:0,apply:t},widthBottom:{check:r,init:0,apply:t},widthLeft:{check:r,init:0,apply:t},styleTop:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleRight:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleBottom:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleLeft:{nullable:true,check:[y,u,s,w],init:y,apply:z},colorTop:{nullable:true,check:x,apply:z},colorRight:{nullable:true,check:x,apply:z},colorBottom:{nullable:true,check:x,apply:z},colorLeft:{nullable:true,check:x,apply:z},backgroundColor:{check:x,nullable:true,apply:z},left:{group:[Q,R,H]},right:{group:[G,S,E]},top:{group:[T,O,F]},bottom:{group:[P,M,N]},width:{group:[T,G,P,Q],mode:V},style:{group:[O,S,M,R],mode:V},color:{group:[F,E,N,H],mode:V}},members:{__nI:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__nI;
},getMarkup:function(a){if(this.__nI){return this.__nI;
}var b=qx.theme.manager.Color.getInstance();
var c={};
var e=this.getWidthTop();

if(e>0){c[D]=e+v+this.getStyleTop()+q+b.resolve(this.getColorTop());
}var e=this.getWidthRight();

if(e>0){c[B]=e+v+this.getStyleRight()+q+b.resolve(this.getColorRight());
}var e=this.getWidthBottom();

if(e>0){c[L]=e+v+this.getStyleBottom()+q+b.resolve(this.getColorBottom());
}var e=this.getWidthLeft();

if(e>0){c[A]=e+v+this.getStyleLeft()+q+b.resolve(this.getColorLeft());
}{};
c.position=K;
c.top=0;
c.left=0;
var d=this._generateBackgroundMarkup(c);
return this.__nI=d;
},resize:function(i,j,k){var m=this.getBackgroundImage()&&this.getBackgroundRepeat()==C;

if(m||qx.bom.client.Feature.CONTENT_BOX){var l=this.getInsets();
j-=l.left+l.right;
k-=l.top+l.bottom;
if(j<0){j=0;
}
if(k<0){k=0;
}}i.style.width=j+U;
i.style.height=k+U;
},tint:function(n,o){var p=qx.theme.manager.Color.getInstance();

if(o==null){o=this.getBackgroundColor();
}n.style.backgroundColor=p.resolve(o)||J;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__nI=null;
}});
})();
(function(){var o="px",n="0px",m="-1px",l="no-repeat",k="scale-x",j="scale-y",i="-tr",h="-l",g='</div>',f="scale",C="qx.client",B="-br",A="-t",z="-tl",y="-r",x='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',w="_applyBaseImage",v="-b",u="String",t="",r="-bl",s="-c",p="mshtml",q="qx.ui.decoration.Grid";
qx.Class.define(q,{extend:qx.ui.decoration.Abstract,construct:function(L,M){arguments.callee.base.call(this);
if(L!=null){this.setBaseImage(L);
}
if(M!=null){this.setInsets(M);
}},properties:{baseImage:{check:u,nullable:true,apply:w}},members:{__nJ:null,__nK:null,__nL:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nJ;
},getMarkup:function(){if(this.__nJ){return this.__nJ;
}var a=qx.bom.element.Decoration;
var b=this.__nK;
var c=this.__nL;
var d=[];
d.push(x);
d.push(a.create(b.tl,l,{top:0,left:0}));
d.push(a.create(b.t,k,{top:0,left:c.left+o}));
d.push(a.create(b.tr,l,{top:0,right:0}));
d.push(a.create(b.bl,l,{bottom:0,left:0}));
d.push(a.create(b.b,k,{bottom:0,left:c.left+o}));
d.push(a.create(b.br,l,{bottom:0,right:0}));
d.push(a.create(b.l,j,{top:c.top+o,left:0}));
d.push(a.create(b.c,f,{top:c.top+o,left:c.left+o}));
d.push(a.create(b.r,j,{top:c.top+o,right:0}));
d.push(g);
return this.__nJ=d.join(t);
},resize:function(H,I,J){var K=this.__nL;
var innerWidth=I-K.left-K.right;
var innerHeight=J-K.top-K.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}H.style.width=I+o;
H.style.height=J+o;
H.childNodes[1].style.width=innerWidth+o;
H.childNodes[4].style.width=innerWidth+o;
H.childNodes[7].style.width=innerWidth+o;
H.childNodes[6].style.height=innerHeight+o;
H.childNodes[7].style.height=innerHeight+o;
H.childNodes[8].style.height=innerHeight+o;

if(qx.core.Variant.isSet(C,p)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(I%2==1){H.childNodes[2].style.marginRight=m;
H.childNodes[5].style.marginRight=m;
H.childNodes[8].style.marginRight=m;
}else{H.childNodes[2].style.marginRight=n;
H.childNodes[5].style.marginRight=n;
H.childNodes[8].style.marginRight=n;
}
if(J%2==1){H.childNodes[3].style.marginBottom=m;
H.childNodes[4].style.marginBottom=m;
H.childNodes[5].style.marginBottom=m;
}else{H.childNodes[3].style.marginBottom=n;
H.childNodes[4].style.marginBottom=n;
H.childNodes[5].style.marginBottom=n;
}}}},tint:function(D,E){},_applyBaseImage:function(N,O){{};

if(N){var S=this._resolveImageUrl(N);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var R=T[1];
var Q=T[2];
var P=this.__nK={tl:R+z+Q,t:R+A+Q,tr:R+i+Q,bl:R+r+Q,b:R+v+Q,br:R+B+Q,l:R+h+Q,c:R+s+Q,r:R+y+Q};
this.__nL=this._computeEdgeSizes(P);
}},_resolveImageUrl:function(e){return qx.util.AliasManager.getInstance().resolve(e);
},_computeEdgeSizes:function(F){var G=qx.util.ResourceManager.getInstance();
return {top:G.getImageHeight(F.t),bottom:G.getImageHeight(F.b),left:G.getImageWidth(F.l),right:G.getImageWidth(F.r)};
}},destruct:function(){this.__nJ=this.__nK=this.__nL=null;
}});
})();
(function(){var u="_applyStyle",t='"></div>',s="Color",r="1px",q='<div style="',p='border:',o="1px solid ",n="",m=";",l="px",G='</div>',F="qx.ui.decoration.Beveled",E='<div style="position:absolute;top:1px;left:1px;',D='border-bottom:',C='border-right:',B='border-left:',A='border-top:',z="Number",y='<div style="position:absolute;top:1px;left:0px;',x='position:absolute;top:0px;left:1px;',v='<div style="overflow:hidden;font-size:0;line-height:0;">',w="absolute";
qx.Class.define(F,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setOuterColor(a);
}
if(b!=null){this.setInnerColor(b);
}
if(c!=null){this.setInnerOpacity(c);
}},properties:{innerColor:{check:s,nullable:true,apply:u},innerOpacity:{check:z,init:1,apply:u},outerColor:{check:s,nullable:true,apply:u},backgroundColor:{check:s,nullable:true,apply:u}},members:{__nM:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__nM;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__nM){return this.__nM;
}var g=qx.theme.manager.Color.getInstance();
var h=[];
var k=o+g.resolve(this.getOuterColor())+m;
var j=o+g.resolve(this.getInnerColor())+m;
h.push(v);
h.push(q);
h.push(p,k);
h.push(qx.bom.element.Opacity.compile(0.35));
h.push(t);
h.push(y);
h.push(B,k);
h.push(C,k);
h.push(t);
h.push(q);
h.push(x);
h.push(A,k);
h.push(D,k);
h.push(t);
var i={position:w,top:r,left:r};
h.push(this._generateBackgroundMarkup(i));
h.push(E);
h.push(p,j);
h.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
h.push(t);
h.push(G);
return this.__nM=h.join(n);
},resize:function(H,I,J){if(I<4){I=4;
}
if(J<4){J=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=I-2;
var outerHeight=J-2;
var P=outerWidth;
var O=outerHeight;
var innerWidth=I-4;
var innerHeight=J-4;
}else{var outerWidth=I;
var outerHeight=J;
var P=I-2;
var O=J-2;
var innerWidth=P;
var innerHeight=O;
}var R=l;
var N=H.childNodes[0].style;
N.width=outerWidth+R;
N.height=outerHeight+R;
var M=H.childNodes[1].style;
M.width=outerWidth+R;
M.height=O+R;
var L=H.childNodes[2].style;
L.width=P+R;
L.height=outerHeight+R;
var K=H.childNodes[3].style;
K.width=P+R;
K.height=O+R;
var Q=H.childNodes[4].style;
Q.width=innerWidth+R;
Q.height=innerHeight+R;
},tint:function(d,e){var f=qx.theme.manager.Color.getInstance();

if(e==null){e=this.getBackgroundColor();
}d.childNodes[3].style.backgroundColor=f.resolve(e)||n;
}},destruct:function(){this.__nM=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="decoration/table/header-cell.png",bq="border-disabled",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="decoration/selection.png",bk="background-pane",bj="repeat-y",bi="decoration/form/input-focused.png",bh="#33508D",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="st.theme.blue.Decoration",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",M="#FAFAFA",J="decoration/pane/pane.png",U="decoration/menu/background.png",P="decoration/toolbar/toolbar-part.gif",bd="decoration/tabview/tab-button-top-inactive.png",ba="decoration/menu/bar-background.png",F="center",bg="decoration/tabview/tab-button-bottom-active.png",bf="decoration/form/button-hovered.png",be="decoration/form/tooltip-error-arrow.png",E="decoration/window/captionbar-inactive.png",H="decoration/window/statusbar.png",I="border-focused",L="decoration/form/tooltip-error.png",N="table-focus-indicator",Q="#F2F2F2",W="decoration/form/button-checked-c.png",bc="decoration/scrollbar/scrollbar-bg-horizontal.png",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="#b8b8b8",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="st/decoration/Blue",x="decoration/window/captionbar-active.png",y="decoration/tabview/tab-button-left-active.png",K="background-splitpane",b="decoration/form/button-checked-focused.png",c="#C5C5C5",D="decoration/toolbar/toolbar-gradient.png",z="decoration/tabview/tab-button-right-inactive.png",A="decoration/shadow/shadow.png";
qx.Theme.define(o,{aliases:{decoration:bb},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bl,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bl,backgroundRepeat:l,bottom:[2,m,bh]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bh]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:J,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:L,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:be,backgroundPositionY:F,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bc,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bj}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:bq,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:bq,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:b,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bi,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bi,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bq,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:D,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:W,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:S,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:P,backgroundRepeat:bj}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:z}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bk,width:3,color:K,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bk,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:E}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:d,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:d,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:N,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:d,backgroundRepeat:l,widthRight:1,colorRight:Q,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:U,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:c,widthBottom:1,colorBottom:M}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:ba,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__cT:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__cT();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__cU:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cV:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__cU){J.push(I);
}var L=new RegExp(l+J.join(C).replace(/\./g,r)+H,u);

if(!L.test(K)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__cU[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__cV();
}});
})();
(function(){var n="Liberation Sans",m="Lucida Grande",l="sans-serif",k="Tahoma",j="Candara",i="Segoe UI",h="Arial",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="st.theme.blue.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[m]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[i,j]:[k,n,h,l]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[m]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[i,j]:[k,n,h,l],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[m]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[i,j]:[k,n,h,l]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var gm="button-frame",gl="atom",gk="widget",gj="main",gi="button",gh="text-selected",gg="image",gf="bold",ge="middle",gd="background-light",eO="text-disabled",eN="groupbox",eM="decoration/arrows/down.png",eL="cell",eK="selected",eJ="border-invalid",eI="input",eH="input-disabled",eG="menu-button",eF="input-focused-invalid",gt="toolbar-button",gu="spinner",gr="input-focused",gs="popup",gp="tooltip",gq="list",gn="tree-item",go="treevirtual-contract",gv="scrollbar",gw="datechooser/nav-button",fK="text-hovered",fJ="center",fM="treevirtual-expand",fL="textfield",fO="label",fN="decoration/arrows/right.png",fQ="background-application",fP="radiobutton",fI="invalid",fH="combobox",cJ="right-top",cK=".png",cL="checkbox",cM="text-title",cN="qx/static/blank.gif",cO="scrollbar/button",cP="right",cQ="combobox/button",cR="icon/16/places/folder.png",cS="text-label",gK="decoration/tree/closed.png",gJ="scrollbar-slider-horizontal",gI="white",gH="decoration/arrows/left.png",gO="button-focused",gN="text-light",gM="menu-slidebar-button",gL="text-input",gQ="slidebar/button-forward",gP="background-splitpane",dM="decoration/tree/open.png",dN="default",dK="decoration/arrows/down-small.png",dL="datechooser",dQ="slidebar/button-backward",dR="selectbox",dO="treevirtual-folder",dP="shadow-popup",dI="icon/16/mimetypes/office-document.png",dJ="background-medium",dn=".gif",dm="table",dq="decoration/arrows/up.png",dp="decoration/form/",dj="",di="-invalid",dl="icon/16/places/folder-open.png",dk="button-checked",dh="black",dg="decoration/window/maximize-active-hovered.png",dX="radiobutton-hovered",dY="decoration/cursors/",ea="slidebar",eb="tooltip-error-arrow",dT="table-scroller-focus-indicator",dU="move-frame",dV="nodrop",dW="decoration/table/boolean-true.png",ec="table-header-cell",ed="menu",dB="app-header",dA="row-layer",dz="text-inactive",dy="move",dx="radiobutton-checked-focused",dw="decoration/window/restore-active-hovered.png",dv="shadow-window",du="table-column-button",dF="right.png",dE="tabview-page-button-bottom-inactive",ee="tooltip-error",ef="window-statusbar",eg="button-hovered",eh="decoration/scrollbar/scrollbar-",ei="background-tip",ej="scrollbar-slider-horizontal-disabled",ek="table-scroller-header",el="radiobutton-disabled",em="button-pressed",en="table-pane",eW="decoration/window/close-active.png",eV="native",eU="checkbox-hovered",eT="button-invalid-shadow",fb="checkbox-checked",fa="decoration/window/minimize-active-hovered.png",eY="menubar",eX="icon/16/actions/dialog-cancel.png",ff="tabview-page-button-top-inactive",fe="tabview-page-button-left-inactive",fC="menu-slidebar",fD="toolbar-button-checked",fA="decoration/tree/open-selected.png",fB="radiobutton-checked",fy="decoration/window/minimize-inactive.png",fz="icon/16/apps/office-calendar.png",fw="group",fx="tabview-page-button-right-inactive",fE="decoration/window/minimize-active.png",fF="decoration/window/restore-inactive.png",fU="checkbox-checked-focused",fT="splitpane",fW="combobox/textfield",fV="button-preselected-focused",fY="decoration/window/close-active-hovered.png",fX="qx/icon/Tango/16/actions/window-close.png",gb="checkbox-pressed",ga="button-disabled",fS="selected-dragover",fR="border-separator",gD="decoration/window/maximize-inactive.png",gE="dragover",gF="scrollarea",gG="scrollbar-vertical",gz="decoration/menu/checkbox-invert.gif",gA="decoration/toolbar/toolbar-handle-knob.gif",gB="icon/22/mimetypes/office-document.png",gC="button-preselected",gx="button-checked-focused",gy="up.png",cI="best-fit",cH="decoration/tree/closed-selected.png",cG="text-active",cF="checkbox-disabled",cE="toolbar-button-hovered",cD="progressive-table-header",cC="decoration/table/select-column-order.png",cB="decoration/menu/radiobutton.gif",cA="decoration/arrows/forward.png",cz="decoration/table/descending",cV="window-captionbar-active",cW="checkbox-checked-hovered",cT="scrollbar-slider-vertical",cU="toolbar",da="alias",db="decoration/window/restore-active.png",cX="decoration/table/boolean-false.png",cY="checkbox-checked-disabled",dd="icon/32/mimetypes/office-document.png",de="st.theme.blue.Appearance",fj="radiobutton-checked-disabled",fd="tabview-pane",fq="decoration/arrows/rewind.png",fm="checkbox-focused",eR="top",eP="#EEE",ds="icon/16/actions/dialog-ok.png",eS="radiobutton-checked-hovered",dD="table-header-cell-hovered",dC="window",ex="text-gray",ey="decoration/menu/radiobutton-invert.gif",ez="text-placeholder",eA="slider",eB="keep-align",eC="down.png",eD="tabview-page-button-top-active",eE="icon/32/places/folder-open.png",eu="icon/22/places/folder.png",ev="decoration/window/maximize-active.png",eQ="checkbox-checked-pressed",fp="decoration/window/close-inactive.png",fo="tabview-page-button-left-active",fn="toolbar-part",fu="decoration/splitpane/knob-vertical.png",ft="icon/22/places/folder-open.png",fs="radiobutton-checked-pressed",fr="table-statusbar",fl="radiobutton-pressed",fk="window-captionbar-inactive",dc="copy",dH="radiobutton-focused",dG="decoration/arrows/down-invert.png",fc="decoration/menu/checkbox.gif",dS="decoration/splitpane/knob-horizontal.png",fi="decoration/table/ascending",fh="icon/32/places/folder.png",fg="toolbar-separator",dr="tabview-page-button-bottom-active",fv="decoration/arrows/up-small.png",df="decoration/arrows/up-invert.png",dt="small",eo="tabview-page-button-right-active",ep="-disabled",eq="scrollbar-horizontal",er="progressive-table-header-cell",es="menu-separator",et="pane",fG="decoration/arrows/right-invert.png",ew="left.png",gc="icon/16/actions/view-refresh.png";
qx.Theme.define(de,{appearances:{"widget":{},"root":{style:function(bt){return {backgroundColor:fQ,textColor:cS,font:dN};
}},"label":{style:function(cx){return {textColor:cx.disabled?eO:undefined};
}},"move-frame":{style:function(bm){return {decorator:gj};
}},"resize-frame":dU,"dragdrop-cursor":{style:function(bM){var bN=dV;

if(bM.copy){bN=dc;
}else if(bM.move){bN=dy;
}else if(bM.alias){bN=da;
}return {source:dY+bN+dn,position:cJ,offset:[2,16,2,6]};
}},"image":{style:function(gW){return {opacity:!gW.replacement&&gW.disabled?0.3:1};
}},"atom":{},"atom/label":fO,"atom/icon":gg,"popup":{style:function(bh){return {decorator:gj,backgroundColor:gd,shadow:dP};
}},"button-frame":{alias:gl,style:function(W){var Y,X;

if(W.checked&&W.focused&&!W.inner){Y=gx;
X=undefined;
}else if(W.disabled){Y=ga;
X=undefined;
}else if(W.pressed){Y=em;
X=fK;
}else if(W.checked){Y=dk;
X=undefined;
}else if(W.hovered){Y=eg;
X=fK;
}else if(W.preselected&&W.focused&&!W.inner){Y=fV;
X=fK;
}else if(W.preselected){Y=gC;
X=fK;
}else if(W.focused&&!W.inner){Y=gO;
X=undefined;
}else{Y=gi;
X=undefined;
}return {decorator:Y,textColor:X,shadow:W.invalid&&!W.disabled?eT:undefined};
}},"button-frame/image":{style:function(cy){return {opacity:!cy.replacement&&cy.disabled?0.5:1};
}},"button":{alias:gm,include:gm,style:function(bQ){return {padding:[2,8],center:true};
}},"hover-button":{alias:gl,include:gl,style:function(bD){return {decorator:bD.hovered?eK:undefined,textColor:bD.hovered?gh:undefined};
}},"splitbutton":{},"splitbutton/button":gi,"splitbutton/arrow":{alias:gi,include:gi,style:function(E){return {icon:eM,padding:2,marginLeft:1};
}},"checkbox":{alias:gl,style:function(bc){var be;

if(bc.checked&&bc.focused){be=fU;
}else if(bc.checked&&bc.disabled){be=cY;
}else if(bc.checked&&bc.pressed){be=eQ;
}else if(bc.checked&&bc.hovered){be=cW;
}else if(bc.checked){be=fb;
}else if(bc.disabled){be=cF;
}else if(bc.focused){be=fm;
}else if(bc.pressed){be=gb;
}else if(bc.hovered){be=eU;
}else{be=cL;
}var bd=bc.invalid&&!bc.disabled?di:dj;
return {icon:dp+be+bd+cK,gap:6};
}},"radiobutton":{alias:gl,style:function(L){var N;

if(L.checked&&L.focused){N=dx;
}else if(L.checked&&L.disabled){N=fj;
}else if(L.checked&&L.pressed){N=fs;
}else if(L.checked&&L.hovered){N=eS;
}else if(L.checked){N=fB;
}else if(L.disabled){N=el;
}else if(L.focused){N=dH;
}else if(L.pressed){N=fl;
}else if(L.hovered){N=dX;
}else{N=fP;
}var M=L.invalid&&!L.disabled?di:dj;
return {icon:dp+N+M+cK,gap:6};
}},"textfield":{style:function(e){var j;
var h=!!e.focused;
var i=!!e.invalid;
var f=!!e.disabled;

if(h&&i&&!f){j=eF;
}else if(h&&!i&&!f){j=gr;
}else if(f){j=eH;
}else if(!h&&i&&!f){j=eJ;
}else{j=eI;
}var g;

if(e.disabled){g=eO;
}else if(e.showingPlaceholder){g=ez;
}else{g=gL;
}return {decorator:j,padding:[2,4,1],textColor:g};
}},"textarea":{include:fL,style:function(hr){return {padding:4};
}},"spinner":{style:function(bF){var bJ;
var bH=!!bF.focused;
var bI=!!bF.invalid;
var bG=!!bF.disabled;

if(bH&&bI&&!bG){bJ=eF;
}else if(bH&&!bI&&!bG){bJ=gr;
}else if(bG){bJ=eH;
}else if(!bH&&bI&&!bG){bJ=eJ;
}else{bJ=eI;
}return {decorator:bJ};
}},"spinner/textfield":{style:function(hA){return {marginRight:2,padding:[2,4,1],textColor:hA.disabled?eO:gL};
}},"spinner/upbutton":{alias:gm,include:gm,style:function(ib){return {icon:fv,padding:ib.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gm,include:gm,style:function(ic){return {icon:dK,padding:ic.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":fH,"datefield/button":{alias:cQ,include:cQ,style:function(hL){return {icon:fz,padding:[0,3],decorator:undefined};
}},"datefield/textfield":fW,"datefield/list":{alias:dL,include:dL,style:function(hp){return {decorator:undefined};
}},"groupbox":{style:function(hC){return {legendPosition:eR};
}},"groupbox/legend":{alias:gl,style:function(bw){return {padding:[1,0,1,4],textColor:bw.invalid?fI:cM,font:gf};
}},"groupbox/frame":{style:function(hq){return {padding:12,decorator:fw};
}},"check-groupbox":eN,"check-groupbox/legend":{alias:cL,include:cL,style:function(G){return {padding:[1,0,1,4],textColor:G.invalid?fI:cM,font:gf};
}},"radio-groupbox":eN,"radio-groupbox/legend":{alias:fP,include:fP,style:function(hu){return {padding:[1,0,1,4],textColor:hu.invalid?fI:cM,font:gf};
}},"scrollarea":{style:function(gX){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(hP){return {backgroundColor:fQ};
}},"scrollarea/pane":gk,"scrollarea/scrollbar-x":gv,"scrollarea/scrollbar-y":gv,"scrollbar":{style:function(ho){if(ho[eV]){return {};
}return {width:ho.horizontal?undefined:16,height:ho.horizontal?16:undefined,decorator:ho.horizontal?eq:gG,padding:1};
}},"scrollbar/slider":{alias:eA,style:function(J){return {padding:J.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gm,style:function(hk){var hl=hk.horizontal?gJ:cT;

if(hk.disabled){hl+=ep;
}return {decorator:hl,minHeight:hk.horizontal?undefined:9,minWidth:hk.horizontal?9:undefined};
}},"scrollbar/button":{alias:gm,include:gm,style:function(cd){var ce=eh;

if(cd.left){ce+=ew;
}else if(cd.right){ce+=dF;
}else if(cd.up){ce+=gy;
}else{ce+=eC;
}
if(cd.left||cd.right){return {padding:[0,0,0,cd.left?3:4],icon:ce,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:ce,width:14,height:15};
}}},"scrollbar/button-begin":cO,"scrollbar/button-end":cO,"slider":{style:function(hV){var ia;
var hX=!!hV.focused;
var hY=!!hV.invalid;
var hW=!!hV.disabled;

if(hX&&hY&&!hW){ia=eF;
}else if(hX&&!hY&&!hW){ia=gr;
}else if(hW){ia=eH;
}else if(!hX&&hY&&!hW){ia=eJ;
}else{ia=eI;
}return {decorator:ia};
}},"slider/knob":{include:gm,style:function(co){return {decorator:co.disabled?ej:gJ,shadow:undefined,height:14,width:14};
}},"list":{alias:gF,style:function(m){var q;
var o=!!m.focused;
var p=!!m.invalid;
var n=!!m.disabled;

if(o&&p&&!n){q=eF;
}else if(o&&!p&&!n){q=gr;
}else if(n){q=eH;
}else if(!o&&p&&!n){q=eJ;
}else{q=eI;
}return {backgroundColor:gd,decorator:q};
}},"list/pane":gk,"listitem":{alias:gl,style:function(x){var y;

if(x.dragover){y=x.selected?fS:gE;
}else{y=x.selected?eK:undefined;
}return {padding:x.dragover?[4,4,2,4]:4,textColor:x.selected?gh:undefined,decorator:y};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gm,include:gm,style:function(bB){return {padding:5,center:true,icon:bB.vertical?eM:fN};
}},"slidebar/button-backward":{alias:gm,include:gm,style:function(hM){return {padding:5,center:true,icon:hM.vertical?dq:gH};
}},"tabview":{style:function(ig){return {contentPadding:16};
}},"tabview/bar":{alias:ea,style:function(bp){var bq={marginBottom:bp.barTop?-1:0,marginTop:bp.barBottom?-4:0,marginLeft:bp.barRight?-3:0,marginRight:bp.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(bp.barTop||bp.barBottom){bq.paddingLeft=5;
bq.paddingRight=7;
}else{bq.paddingTop=5;
bq.paddingBottom=7;
}return bq;
}},"tabview/bar/button-forward":{include:gQ,alias:gQ,style:function(hU){if(hU.barTop||hU.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dQ,alias:dQ,style:function(hT){if(hT.barTop||hT.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(hd){return {decorator:fd,minHeight:100,marginBottom:hd.barBottom?-1:0,marginTop:hd.barTop?-1:0,marginLeft:hd.barLeft?-1:0,marginRight:hd.barRight?-1:0};
}},"tabview-page":gk,"tabview-page/button":{alias:gl,style:function(bR){var bX,bT=0;
var bW=0,bS=0,bU=0,bV=0;

if(bR.checked){if(bR.barTop){bX=eD;
bT=[6,14];
bU=bR.firstTab?0:-5;
bV=bR.lastTab?0:-5;
}else if(bR.barBottom){bX=dr;
bT=[6,14];
bU=bR.firstTab?0:-5;
bV=bR.lastTab?0:-5;
}else if(bR.barRight){bX=eo;
bT=[6,13];
bW=bR.firstTab?0:-5;
bS=bR.lastTab?0:-5;
}else{bX=fo;
bT=[6,13];
bW=bR.firstTab?0:-5;
bS=bR.lastTab?0:-5;
}}else{if(bR.barTop){bX=ff;
bT=[4,10];
bW=4;
bU=bR.firstTab?5:1;
bV=1;
}else if(bR.barBottom){bX=dE;
bT=[4,10];
bS=4;
bU=bR.firstTab?5:1;
bV=1;
}else if(bR.barRight){bX=fx;
bT=[4,10];
bV=5;
bW=bR.firstTab?5:1;
bS=1;
bU=1;
}else{bX=fe;
bT=[4,10];
bU=5;
bW=bR.firstTab?5:1;
bS=1;
bV=1;
}}return {zIndex:bR.checked?10:5,decorator:bX,padding:bT,marginTop:bW,marginBottom:bS,marginLeft:bU,marginRight:bV,textColor:bR.checked?cG:dz};
}},"tabview-page/button/close-button":{alias:gl,style:function(hH){return {icon:fX};
}},"toolbar":{style:function(ci){return {decorator:cU,spacing:2};
}},"toolbar/part":{style:function(hK){return {decorator:fn,spacing:2};
}},"toolbar/part/container":{style:function(bA){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hx){return {source:gA,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gl,style:function(gR){return {marginTop:2,marginBottom:2,padding:(gR.pressed||gR.checked||gR.hovered)&&!gR.disabled||(gR.disabled&&gR.checked)?3:5,decorator:gR.pressed||(gR.checked&&!gR.hovered)||(gR.checked&&gR.disabled)?fD:gR.hovered&&!gR.disabled?cE:undefined};
}},"toolbar-menubutton":{alias:gt,include:gt,style:function(cm){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gg,include:gg,style:function(hF){return {source:dK};
}},"toolbar-splitbutton":{style:function(hf){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gt,include:gt,style:function(hE){return {icon:eM,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gt,include:gt,style:function(bk){return {padding:bk.pressed||bk.checked?1:bk.hovered?1:3,icon:eM,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hj){return {decorator:fg,margin:7};
}},"tree":gq,"tree-item":{style:function(hB){return {padding:[2,6],textColor:hB.selected?gh:undefined,decorator:hB.selected?eK:undefined};
}},"tree-item/icon":{include:gg,style:function(hQ){return {paddingRight:5};
}},"tree-item/label":fO,"tree-item/open":{include:gg,style:function(bO){var bP;

if(bO.selected&&bO.opened){bP=fA;
}else if(bO.selected&&!bO.opened){bP=cH;
}else if(bO.opened){bP=dM;
}else{bP=gK;
}return {padding:[0,5,0,2],source:bP};
}},"tree-folder":{include:gn,alias:gn,style:function(R){var S;

if(R.small){S=R.opened?dl:cR;
}else if(R.large){S=R.opened?eE:fh;
}else{S=R.opened?ft:eu;
}return {icon:S};
}},"tree-file":{include:gn,alias:gn,style:function(hO){return {icon:hO.small?dI:hO.large?dd:gB};
}},"treevirtual":dm,"treevirtual-folder":{style:function(bf){return {icon:bf.opened?dl:cR};
}},"treevirtual-file":{include:dO,alias:dO,style:function(cb){return {icon:dI};
}},"treevirtual-line":{style:function(bE){return {icon:cN};
}},"treevirtual-contract":{style:function(k){return {icon:dM,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(bY){return {icon:gK,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":go,"treevirtual-only-expand":fM,"treevirtual-start-contract":go,"treevirtual-start-expand":fM,"treevirtual-end-contract":go,"treevirtual-end-expand":fM,"treevirtual-cross-contract":go,"treevirtual-cross-expand":fM,"treevirtual-end":{style:function(bj){return {icon:cN};
}},"treevirtual-cross":{style:function(bx){return {icon:cN};
}},"tooltip":{include:gs,style:function(ha){return {backgroundColor:ei,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gl,"tooltip-error":{include:gp,style:function(cp){return {textColor:gh,placeMethod:gk,offset:[0,0,0,14],marginTop:-2,position:cJ,showTimeout:100,hideTimeout:10000,decorator:ee,shadow:eb,font:gf};
}},"tooltip-error/atom":gl,"window":{style:function(ck){return {shadow:dv,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(bC){return {decorator:dC};
}},"window/captionbar":{style:function(a){return {decorator:a.active?cV:fk,textColor:a.active?dh:ex,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(Q){return {margin:[5,0,3,6]};
}},"window/title":{style:function(gY){return {alignY:ge,font:gf,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gl,style:function(l){return {icon:l.active?l.hovered?fa:fE:fy,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gl,style:function(hs){return {icon:hs.active?hs.hovered?dw:db:fF,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gl,style:function(cw){return {icon:cw.active?cw.hovered?dg:ev:gD,margin:[4,8,2,0]};
}},"window/close-button":{alias:gl,style:function(ii){return {icon:ii.active?ii.hovered?fY:eW:fp,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(O){return {padding:[2,6],decorator:ef,minHeight:18};
}},"window/statusbar-text":{style:function(gU){return {font:dt};
}},"iframe":{style:function(F){return {decorator:gj};
}},"resizer":{style:function(U){return {decorator:et};
}},"splitpane":{style:function(hI){return {decorator:fT};
}},"splitpane/splitter":{style:function(ba){return {width:ba.horizontal?3:undefined,height:ba.vertical?3:undefined,backgroundColor:gP};
}},"splitpane/splitter/knob":{style:function(hh){return {source:hh.horizontal?dS:fu};
}},"splitpane/slider":{style:function(ch){return {width:ch.horizontal?3:undefined,height:ch.vertical?3:undefined,backgroundColor:gP};
}},"selectbox":{alias:gm,include:gm,style:function(cg){return {padding:[2,8]};
}},"selectbox/atom":gl,"selectbox/popup":gs,"selectbox/list":{alias:gq},"selectbox/arrow":{include:gg,style:function(ih){return {source:eM,paddingLeft:5};
}},"datechooser":{style:function(r){var v;
var t=!!r.focused;
var u=!!r.invalid;
var s=!!r.disabled;

if(t&&u&&!s){v=eF;
}else if(t&&!u&&!s){v=gr;
}else if(s){v=eH;
}else if(!t&&u&&!s){v=eJ;
}else{v=eI;
}return {padding:2,decorator:v,backgroundColor:gd};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gm,alias:gm,style:function(hy){var hz={padding:[2,4],shadow:undefined};

if(hy.lastYear){hz.icon=fq;
hz.marginRight=1;
}else if(hy.lastMonth){hz.icon=gH;
}else if(hy.nextYear){hz.icon=cA;
hz.marginLeft=1;
}else if(hy.nextMonth){hz.icon=fN;
}return hz;
}},"datechooser/last-year-button-tooltip":gp,"datechooser/last-month-button-tooltip":gp,"datechooser/next-year-button-tooltip":gp,"datechooser/next-month-button-tooltip":gp,"datechooser/last-year-button":gw,"datechooser/last-month-button":gw,"datechooser/next-month-button":gw,"datechooser/next-year-button":gw,"datechooser/month-year-label":{style:function(cq){return {font:gf,textAlign:fJ,textColor:cq.disabled?eO:undefined};
}},"datechooser/date-pane":{style:function(bo){return {textColor:bo.disabled?eO:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(hc){return {textColor:hc.disabled?eO:hc.weekend?gN:undefined,textAlign:fJ,paddingTop:2,backgroundColor:dJ};
}},"datechooser/week":{style:function(hb){return {textAlign:fJ,padding:[2,4],backgroundColor:dJ};
}},"datechooser/day":{style:function(cj){return {textAlign:fJ,decorator:cj.disabled?undefined:cj.selected?eK:undefined,textColor:cj.disabled?eO:cj.selected?gh:cj.otherMonth?gN:undefined,font:cj.today?gf:undefined,padding:[2,4]};
}},"combobox":{style:function(cr){var cv;
var ct=!!cr.focused;
var cu=!!cr.invalid;
var cs=!!cr.disabled;

if(ct&&cu&&!cs){cv=eF;
}else if(ct&&!cu&&!cs){cv=gr;
}else if(cs){cv=eH;
}else if(!ct&&cu&&!cs){cv=eJ;
}else{cv=eI;
}return {decorator:cv};
}},"combobox/popup":gs,"combobox/list":{alias:gq},"combobox/button":{include:gm,alias:gm,style:function(c){var d={icon:eM,padding:2};

if(c.selected){d.decorator=gO;
}return d;
}},"combobox/textfield":{include:fL,style:function(by){return {decorator:undefined};
}},"menu":{style:function(hR){var hS={decorator:ed,shadow:dP,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:hR.submenu||hR.contextmenu?cI:eB};

if(hR.submenu){hS.position=cJ;
hS.offset=[-2,-3];
}return hS;
}},"menu/slidebar":fC,"menu-slidebar":gk,"menu-slidebar-button":{style:function(cl){return {decorator:cl.hovered?eK:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gM,style:function(cf){return {icon:cf.hovered?df:dq};
}},"menu-slidebar/button-forward":{include:gM,style:function(gV){return {icon:gV.hovered?dG:eM};
}},"menu-separator":{style:function(hN){return {height:0,decorator:es,margin:[4,2]};
}},"menu-button":{alias:gl,style:function(H){return {decorator:H.selected?eK:undefined,textColor:H.selected?gh:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gg,style:function(ca){return {alignY:ge};
}},"menu-button/label":{include:fO,style:function(b){return {alignY:ge,padding:1};
}},"menu-button/shortcut":{include:fO,style:function(cn){return {alignY:ge,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:gg,style:function(he){return {source:he.selected?fG:fN,alignY:ge};
}},"menu-checkbox":{alias:eG,include:eG,style:function(V){return {icon:!V.checked?undefined:V.selected?gz:fc};
}},"menu-radiobutton":{alias:eG,include:eG,style:function(hn){return {icon:!hn.checked?undefined:hn.selected?ey:cB};
}},"menubar":{style:function(bs){return {decorator:eY};
}},"menubar-button":{alias:gl,style:function(w){return {decorator:w.pressed||w.hovered?eK:undefined,textColor:w.pressed||w.hovered?gh:undefined,padding:[3,8]};
}},"colorselector":gk,"colorselector/control-bar":gk,"colorselector/control-pane":gk,"colorselector/visual-pane":eN,"colorselector/preset-grid":gk,"colorselector/colorbucket":{style:function(D){return {decorator:gj,width:16,height:16};
}},"colorselector/preset-field-set":eN,"colorselector/input-field-set":eN,"colorselector/preview-field-set":eN,"colorselector/hex-field-composite":gk,"colorselector/hex-field":fL,"colorselector/rgb-spinner-composite":gk,"colorselector/rgb-spinner-red":gu,"colorselector/rgb-spinner-green":gu,"colorselector/rgb-spinner-blue":gu,"colorselector/hsb-spinner-composite":gk,"colorselector/hsb-spinner-hue":gu,"colorselector/hsb-spinner-saturation":gu,"colorselector/hsb-spinner-brightness":gu,"colorselector/preview-content-old":{style:function(gT){return {decorator:gj,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(ie){return {decorator:gj,backgroundColor:gd,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(bK){return {decorator:gj,margin:5};
}},"colorselector/brightness-field":{style:function(T){return {decorator:gj,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gk,"colorselector/hue-saturation-handle":gk,"colorselector/brightness-pane":gk,"colorselector/brightness-handle":gk,"colorpopup":{alias:gs,include:gs,style:function(bg){return {padding:5,backgroundColor:fQ};
}},"colorpopup/field":{style:function(P){return {decorator:gj,margin:2,width:14,height:14,backgroundColor:gd};
}},"colorpopup/selector-button":gi,"colorpopup/auto-button":gi,"colorpopup/preview-pane":eN,"colorpopup/current-preview":{style:function(bL){return {height:20,padding:4,marginLeft:4,decorator:gj,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hD){return {height:20,padding:4,marginRight:4,decorator:gj,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gi,include:gi,style:function(cc){return {icon:ds};
}},"colorpopup/colorselector-cancelbutton":{alias:gi,include:gi,style:function(id){return {icon:eX};
}},"table":{alias:gk,style:function(hG){return {decorator:dm};
}},"table-header":{},"table/statusbar":{style:function(gS){return {decorator:fr,padding:[0,2]};
}},"table/column-button":{alias:gm,style:function(hm){return {decorator:du,padding:3,icon:cC};
}},"table-column-reset-button":{include:eG,alias:eG,style:function(){return {icon:gc};
}},"table-scroller":gk,"table-scroller/scrollbar-x":gv,"table-scroller/scrollbar-y":gv,"table-scroller/header":{style:function(bb){return {decorator:ek};
}},"table-scroller/pane":{style:function(B){return {backgroundColor:en};
}},"table-scroller/focus-indicator":{style:function(I){return {decorator:dT};
}},"table-scroller/resize-line":{style:function(bv){return {backgroundColor:fR,width:2};
}},"table-header-cell":{alias:gl,style:function(z){var A=qx.bom.client.Engine.MSHTML?dn:cK;
return {minWidth:13,minHeight:20,padding:z.hovered?[3,4,2,4]:[3,4],decorator:z.hovered?dD:ec,sortIcon:z.sorted?(z.sortedAscending?fi+A:cz+A):undefined};
}},"table-header-cell/label":{style:function(bu){return {minWidth:0,alignY:ge,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(hg){return {alignY:ge,alignX:cP};
}},"table-header-cell/icon":{style:function(hJ){return {minWidth:0,alignY:ge,paddingRight:5};
}},"table-editor-textfield":{include:fL,style:function(ht){return {decorator:undefined,padding:[2,2],backgroundColor:gd};
}},"table-editor-selectbox":{include:dR,alias:dR,style:function(C){return {padding:[0,2],backgroundColor:gd};
}},"table-editor-combobox":{include:fH,alias:fH,style:function(hv){return {decorator:undefined,backgroundColor:gd};
}},"progressive-table-header":{alias:gk,style:function(K){return {decorator:cD};
}},"progressive-table-header-cell":{alias:gl,style:function(hi){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:er};
}},"app-header":{style:function(bl){return {font:gf,textColor:gh,padding:[8,12],decorator:dB};
}},"virtual-list":gq,"virtual-list/row-layer":dA,"row-layer":{style:function(bz){return {colorEven:gI,colorOdd:eP};
}},"column-layer":gk,"cell":{style:function(bi){return {textColor:bi.selected?gh:cS,padding:[3,6],font:dN};
}},"cell-string":eL,"cell-number":{include:eL,style:function(hw){return {textAlign:cP};
}},"cell-image":eL,"cell-boolean":{include:eL,style:function(br){return {iconTrue:dW,iconFalse:cX};
}},"cell-atom":eL,"cell-date":eL,"cell-html":eL,"htmlarea":{"include":gk,style:function(bn){return {backgroundColor:gI};
}}}});
})();
(function(){var a="st.theme.blue.Theme";
qx.Theme.define(a,{meta:{color:st.theme.blue.Color,decoration:st.theme.blue.Decoration,font:st.theme.blue.Font,appearance:st.theme.blue.Appearance}});
})();
(function(){var s="emulated",r="native",q='"',p="qx.lang.Core",o="\\\\",n="\\\"",m="[object Error]";
qx.Bootstrap.define(p,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==m)?s:r,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?r:s,{"native":Array.prototype.indexOf,"emulated":function(t,u){if(u==null){u=0;
}else if(u<0){u=Math.max(0,this.length+u);
}
for(var i=u;i<this.length;i++){if(this[i]===t){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?r:s,{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?r:s,{"native":Array.prototype.forEach,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){a.call(b||window,c,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?r:s,{"native":Array.prototype.filter,"emulated":function(y,z){var A=[];
var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){if(y.call(z||window,B,i,this)){A.push(this[i]);
}}}return A;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?r:s,{"native":Array.prototype.map,"emulated":function(g,h){var j=[];
var l=this.length;

for(var i=0;i<l;i++){var k=this[i];

if(k!==undefined){j[i]=g.call(h||window,k,i,this);
}}return j;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?r:s,{"native":Array.prototype.some,"emulated":function(v,w){var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){if(v.call(w||window,x,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?r:s,{"native":Array.prototype.every,"emulated":function(d,e){var l=this.length;

for(var i=0;i<l;i++){var f=this[i];

if(f!==undefined){if(!d.call(e||window,f,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?r:s,{"native":String.prototype.quote,"emulated":function(){return q+this.replace(/\\/g,o).replace(/\"/g,n)+q;
}})}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Bootstrap.define(G,{statics:{__cc:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cd:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ce:function(){var M=qx.lang.Generics.__cc;

for(var Q in M){var O=window[Q];
var N=M[Q];

for(var i=0,l=N.length;i<l;i++){var P=N[i];

if(!O[P]){O[P]=qx.lang.Generics.__cd(O,P);
}}}}},defer:function(L){L.__ce();
}});
})();
(function(){var g="qx.event.type.Data",f="qx.event.type.Event",e="qx.data.IListData";
qx.Interface.define(e,{events:{"change":g,"changeLength":f},members:{getItem:function(c){},setItem:function(a,b){},splice:function(h,i,j){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(k,l){this.__bM=k||null;
this.__bN=l||window;

if(qx.core.Setting.get(c)===b){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__bO,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__bO:function(e,f,g){if(this.__bM){this.handleError(new qx.core.WindowError(e,f,g));
return true;
}},observeMethod:function(h){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__bM){return h.apply(this,arguments);
}
try{return h.apply(this,arguments);
}catch(d){self.handleError(d);
}};
}else{return h;
}},handleError:function(j){if(this.__bM){this.__bM.call(this.__bN,j);
}}},defer:function(i){qx.core.Setting.define(c,b);
i.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cg=c;
this.__ch=d||b;
this.__ci=e===undefined?-1:e;
},members:{__cg:null,__ch:null,__ci:null,toString:function(){return this.__cg;
},getUri:function(){return this.__ch;
},getLineNumber:function(){return this.__ci;
}}});
})();
(function(){var g="qx.event.type.Event";
qx.Class.define(g,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(a,b){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!a;
this._cancelable=!!b;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(e){if(e){var f=e;
}else{var f=qx.event.Pool.getInstance().getObject(this.constructor);
}f._type=this._type;
f._target=this._target;
f._currentTarget=this._currentTarget;
f._relatedTarget=this._relatedTarget;
f._originalTarget=this._originalTarget;
f._stopPropagation=this._stopPropagation;
f._bubbles=this._bubbles;
f._preventDefault=this._preventDefault;
f._cancelable=this._cancelable;
return f;
},stop:function(){this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(j){this._type=j;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(l){this._eventPhase=l;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(k){this._target=k;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(m){this._relatedTarget=m;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(h){this._originalTarget=h;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(d){this._bubbles=d;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(c){this._cancelable=c;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var f="qx.event.type.Data";
qx.Class.define(f,{extend:qx.event.type.Event,members:{__cj:null,__ck:null,init:function(c,d,e){arguments.callee.base.call(this,false,e);
this.__cj=c;
this.__ck=d;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
b.__cj=this.__cj;
b.__ck=this.__ck;
return b;
},getData:function(){return this.__cj;
},getOldData:function(){return this.__ck;
}},destruct:function(){this.__cj=this.__ck=null;
}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var v="ready",u="qx.client",t="mshtml",s="load",r="unload",q="qx.event.handler.Application",p="complete",o="gecko|opera|webkit",n="left",m="DOMContentLoaded",l="shutdown";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){arguments.callee.base.call(this);
this._window=d.getWindow();
this.__bP=false;
this.__bQ=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bR:false,onScriptLoaded:function(){this.__bR=true;
var z=qx.event.handler.Application.$$instance;

if(z){z.__bU();
}}},members:{canHandleEvent:function(j,k){},registerEvent:function(w,x,y){},unregisterEvent:function(a,b,c){},__bS:null,__bP:null,__bQ:null,__bT:null,__bU:function(){var i=qx.event.handler.Application;
if(!this.__bS&&this.__bP&&i.__bR){if(qx.core.Variant.isSet(u,t)){if(qx.event.Registration.hasListener(this._window,v)){this.__bS=true;
qx.event.Registration.fireEvent(this._window,v);
}}else{this.__bS=true;
qx.event.Registration.fireEvent(this._window,v);
}}},isApplicationReady:function(){return this.__bS;
},_initObserver:function(){if(qx.$$domReady||document.readyState==p){this.__bP=true;
this.__bU();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(u,o)){qx.bom.Event.addNativeListener(this._window,m,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(u,t)){var self=this;
var h=function(){try{document.documentElement.doScroll(n);

if(document.body){self._onNativeLoadWrapped();
}}catch(g){window.setTimeout(h,100);
}};
h();
}qx.bom.Event.addNativeListener(this._window,s,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,r,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,s,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,r,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__bP=true;
this.__bU();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__bT){this.__bT=true;

try{qx.event.Registration.fireEvent(this._window,l);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var y=":",x="qx.client",w="anonymous",v="...",u="qx.dev.StackTrace",t="",s="\n",r="/source/class/",q=".";
qx.Bootstrap.define(u,{statics:{getStackTrace:qx.core.Variant.select(x,{"gecko":function(){try{throw new Error();
}catch(bc){var O=this.getStackTraceFromError(bc);
qx.lang.Array.removeAt(O,0);
var M=this.getStackTraceFromCaller(arguments);
var K=M.length>O.length?M:O;

for(var i=0;i<Math.min(M.length,O.length);i++){var L=M[i];

if(L.indexOf(w)>=0){continue;
}var S=L.split(y);

if(S.length!=2){continue;
}var Q=S[0];
var J=S[1];
var I=O[i];
var T=I.split(y);
var P=T[0];
var H=T[1];

if(qx.Class.getByName(P)){var N=P;
}else{N=Q;
}var R=N+y;

if(J){R+=J+y;
}R+=H;
K[i]=R;
}return K;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var a;

try{a.bar();
}catch(c){var b=this.getStackTraceFromError(c);
qx.lang.Array.removeAt(b,0);
return b;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(x,{"opera":function(e){return [];
},"default":function(k){var p=[];
var o=qx.lang.Function.getCaller(k);
var l={};

while(o){var m=qx.lang.Function.getName(o);
p.push(m);

try{o=o.caller;
}catch(G){break;
}
if(!o){break;
}var n=qx.core.ObjectRegistry.toHashCode(o);

if(l[n]){p.push(v);
break;
}l[n]=o;
}return p;
}}),getStackTraceFromError:qx.core.Variant.select(x,{"gecko":function(U){if(!U.stack){return [];
}var bb=/@(.+):(\d+)$/gm;
var V;
var W=[];

while((V=bb.exec(U.stack))!=null){var X=V[1];
var ba=V[2];
var Y=this.__cf(X);
W.push(Y+y+ba);
}return W;
},"webkit":function(d){if(d.sourceURL&&d.line){return [this.__cf(d.sourceURL)+y+d.line];
}else{return [];
}},"opera":function(z){if(z.message.indexOf("Backtrace:")<0){return [];
}var B=[];
var C=qx.lang.String.trim(z.message.split("Backtrace:")[1]);
var D=C.split(s);

for(var i=0;i<D.length;i++){var A=D[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(A&&A.length>=2){var F=A[1];
var E=this.__cf(A[2]);
B.push(E+y+F);
}}return B;
},"default":function(){return [];
}}),__cf:function(f){var j=r;
var g=f.indexOf(j);
var h=(g==-1)?f:f.substring(g+j.length).replace(/\//g,q).replace(/\.js$/,t);
return h;
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(f){arguments.callee.base.call(this);
this.__cC={};

if(f!=null){this.setSize(f);
}},properties:{size:{check:a,init:Infinity}},members:{__cC:null,getObject:function(k){if(this.$$disposed){return;
}
if(!k){throw new Error("Class needs to be defined!");
}var m=null;
var n=this.__cC[k.classname];

if(n){m=n.pop();
}
if(m){m.$$pooled=false;
}else{m=new k;
}return m;
},poolObject:function(c){if(!this.__cC){return;
}var d=c.classname;
var e=this.__cC[d];

if(c.$$pooled){throw new Error("Object is already pooled: "+c);
}
if(!e){this.__cC[d]=e=[];
}if(e.length>this.getSize()){if(c.destroy){c.destroy();
}else{c.dispose();
}return;
}c.$$pooled=true;
e.push(c);
}},destruct:function(){var j=this.__cC;
var g,h,i,l;

for(g in j){h=j[g];

for(i=0,l=h.length;i<l;i++){h[i].dispose();
}}delete this.__cC;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var b="Don't use 'disposeFields' - instead assign directly to 'null'",a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeFields:function(p,q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
var name;

for(var i=0,l=q.length;i<l;i++){var name=q[i];

if(p[name]==null||!p.hasOwnProperty(name)){continue;
}p[name]=null;
}},disposeObjects:function(d,e){var name;

for(var i=0,l=e.length;i<l;i++){name=e[i];

if(d[name]==null||!d.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(d[name].dispose){d[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}d[name]=null;
}},disposeArray:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var i=o.length-1;i>=0;i--){n=o[i];

if(n){n.dispose();
}}}catch(c){throw new Error("The array field: "+m+" of object: "+k+" has non disposable entries: "+c);
}o.length=0;
k[m]=null;
},disposeMap:function(f,g){var h=f[g];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){f[g]=null;
return;
}try{for(var j in h){if(h.hasOwnProperty(j)){h[j].dispose();
}}}catch(u){throw new Error("The map field: "+g+" of object: "+f+" has non disposable entries: "+u);
}f[g]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var k="qx.event.dispatch.Direct";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(a,event,b){return !event.getBubbles();
},dispatchEvent:function(c,event,d){var g,e;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(c,d,false);

if(h){for(var i=0,l=h.length;i<l;i++){var f=h[i].context||c;
h[i].handler.call(f,event);
}}}},defer:function(j){qx.event.Registration.addDispatcher(j);
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",B="deepBinding",A="item",z="reset",y="' (",x="Boolean",w=").",v=") to the object '",u="Integer",t="qx.data.SingleValueBinding",s="No event could be found for the property",q="PositiveNumber",r="Binding from '",o="PositiveInteger",p="Binding does not exist!",n="Date";
qx.Class.define(t,{statics:{DEBUG_ON:false,__cl:{},bind:function(cx,cy,cz,cA,cB){var cL=this.__cn(cx,cy,cz,cA,cB);
var cG=cy.split(d);
var cD=this.__cu(cG);
var cK=[];
var cH=[];
var cI=[];
var cE=[];
var cF=cx;
for(var i=0;i<cG.length;i++){if(cD[i]!==l){cE.push(g);
}else{cE.push(this.__cp(cF,cG[i]));
}cK[i]=cF;
if(i==cG.length-1){if(cD[i]!==l){var cO=cD[i]===h?cF.length-1:cD[i];
var cC=cF.getItem(cO);
this.__ct(cC,cz,cA,cB,cx);
cI[i]=this.__cv(cF,cE[i],cz,cA,cB,cD[i]);
}else{if(cG[i]!=null&&cF[m+qx.lang.String.firstUp(cG[i])]!=null){var cC=cF[m+qx.lang.String.firstUp(cG[i])]();
this.__ct(cC,cz,cA,cB,cx);
}cI[i]=this.__cv(cF,cE[i],cz,cA,cB);
}}else{var cM={index:i,propertyNames:cG,sources:cK,listenerIds:cI,arrayIndexValues:cD,targetObject:cz,targetPropertyChain:cA,options:cB,listeners:cH};
var cJ=qx.lang.Function.bind(this.__cm,this,cM);
cH.push(cJ);
cI[i]=cF.addListener(cE[i],cJ);
}if(cF[m+qx.lang.String.firstUp(cG[i])]==null){cF=null;
}else if(cD[i]!==l){cF=cF[m+qx.lang.String.firstUp(cG[i])](cD[i]);
}else{cF=cF[m+qx.lang.String.firstUp(cG[i])]();
}
if(!cF){break;
}}var cN={type:B,listenerIds:cI,sources:cK,targetListenerIds:cL.listenerIds,targets:cL.targets};
this.__cw(cN,cx,cy,cz,cA);
return cN;
},__cm:function(ca){if(ca.options&&ca.options.onUpdate){ca.options.onUpdate(ca.sources[ca.index],ca.targetObject);
}for(var j=ca.index+1;j<ca.propertyNames.length;j++){var ce=ca.sources[j];
ca.sources[j]=null;

if(!ce){continue;
}ce.removeListenerById(ca.listenerIds[j]);
}var ce=ca.sources[ca.index];
for(var j=ca.index+1;j<ca.propertyNames.length;j++){if(ca.arrayIndexValues[j-1]!==l){ce=ce[m+qx.lang.String.firstUp(ca.propertyNames[j-1])](ca.arrayIndexValues[j-1]);
}else{ce=ce[m+qx.lang.String.firstUp(ca.propertyNames[j-1])]();
}ca.sources[j]=ce;
if(!ce){this.__cq(ca.targetObject,ca.targetPropertyChain);
break;
}if(j==ca.propertyNames.length-1){if(qx.Class.implementsInterface(ce,qx.data.IListData)){var cf=ca.arrayIndexValues[j]===h?ce.length-1:ca.arrayIndexValues[j];
var cc=ce.getItem(cf);
this.__ct(cc,ca.targetObject,ca.targetPropertyChain,ca.options,ca.sources[ca.index]);
ca.listenerIds[j]=this.__cv(ce,g,ca.targetObject,ca.targetPropertyChain,ca.options,ca.arrayIndexValues[j]);
}else{if(ca.propertyNames[j]!=null&&ce[m+qx.lang.String.firstUp(ca.propertyNames[j])]!=null){var cc=ce[m+qx.lang.String.firstUp(ca.propertyNames[j])]();
this.__ct(cc,ca.targetObject,ca.targetPropertyChain,ca.options,ca.sources[ca.index]);
}var cd=this.__cp(ce,ca.propertyNames[j]);
ca.listenerIds[j]=this.__cv(ce,cd,ca.targetObject,ca.targetPropertyChain,ca.options);
}}else{if(ca.listeners[j]==null){var cb=qx.lang.Function.bind(this.__cm,this,ca);
ca.listeners.push(cb);
}if(qx.Class.implementsInterface(ce,qx.data.IListData)){var cd=g;
}else{var cd=this.__cp(ce,ca.propertyNames[j]);
}ca.listenerIds[j]=ce.addListener(cd,ca.listeners[j]);
}}},__cn:function(cP,cQ,cR,cS,cT){var cX=cS.split(d);
var cV=this.__cu(cX);
var dd=[];
var dc=[];
var da=[];
var cY=[];
var cW=cR;
for(var i=0;i<cX.length-1;i++){if(cV[i]!==l){cY.push(g);
}else{try{cY.push(this.__cp(cW,cX[i]));
}catch(e){break;
}}dd[i]=cW;
var db=function(){for(var j=i+1;j<cX.length-1;j++){var by=dd[j];
dd[j]=null;

if(!by){continue;
}by.removeListenerById(da[j]);
}var by=dd[i];
for(var j=i+1;j<cX.length-1;j++){var bw=qx.lang.String.firstUp(cX[j-1]);
if(cV[j-1]!==l){var bz=cV[j-1]===h?by.getLength()-1:cV[j-1];
by=by[m+bw](bz);
}else{by=by[m+bw]();
}dd[j]=by;
if(dc[j]==null){dc.push(db);
}if(qx.Class.implementsInterface(by,qx.data.IListData)){var bx=g;
}else{try{var bx=qx.data.SingleValueBinding.__cp(by,cX[j]);
}catch(e){break;
}}da[j]=by.addListener(bx,dc[j]);
}qx.data.SingleValueBinding.__co(cP,cQ,cR,cS);
};
dc.push(db);
da[i]=cW.addListener(cY[i],db);
var cU=qx.lang.String.firstUp(cX[i]);
if(cW[m+cU]==null){cW=null;
}else if(cV[i]!==l){cW=cW[m+cU](cV[i]);
}else{cW=cW[m+cU]();
}
if(!cW){break;
}}return {listenerIds:da,targets:dd};
},__co:function(P,Q,R,S){var W=this.__cs(P,Q);

if(W!=null){var Y=Q.substring(Q.lastIndexOf(d)+1,Q.length);
if(Y.charAt(Y.length-1)==f){var T=Y.substring(Y.lastIndexOf(k)+1,Y.length-1);
var V=Y.substring(0,Y.lastIndexOf(k));
var X=W[m+qx.lang.String.firstUp(V)]();

if(T==h){T=X.length-1;
}
if(X!=null){var U=X.getItem(T);
}}else{var U=W[m+qx.lang.String.firstUp(Y)]();
}}this.__cr(R,S,U);
},__cp:function(ba,bb){var bc=this.__cy(ba,bb);
if(bc==null){if(qx.Class.supportsEvent(ba.constructor,bb)){bc=bb;
}else if(qx.Class.supportsEvent(ba.constructor,g+qx.lang.String.firstUp(bb))){bc=g+qx.lang.String.firstUp(bb);
}else{throw new qx.core.AssertionError(s,bb);
}}return bc;
},__cq:function(cl,cm){var cn=this.__cs(cl,cm);

if(cn!=null){var co=cm.substring(cm.lastIndexOf(d)+1,cm.length);
if(co.charAt(co.length-1)==f){this.__cr(cl,cm,null);
return;
}if(cn[z+qx.lang.String.firstUp(co)]!=undefined){cn[z+qx.lang.String.firstUp(co)]();
}else{cn[a+qx.lang.String.firstUp(co)](null);
}}},__cr:function(C,D,E){var I=this.__cs(C,D);

if(I!=null){var J=D.substring(D.lastIndexOf(d)+1,D.length);
if(J.charAt(J.length-1)==f){var F=J.substring(J.lastIndexOf(k)+1,J.length-1);
var H=J.substring(0,J.lastIndexOf(k));
var G=I[m+qx.lang.String.firstUp(H)]();

if(F==h){F=G.length-1;
}
if(G!=null){G.setItem(F,E);
}}else{I[a+qx.lang.String.firstUp(J)](E);
}}},__cs:function(bd,be){var bh=be.split(d);
var bi=bd;
for(var i=0;i<bh.length-1;i++){try{var bg=bh[i];
if(bg.indexOf(f)==bg.length-1){var bf=bg.substring(bg.indexOf(k)+1,bg.length-1);
bg=bg.substring(0,bg.indexOf(k));
}bi=bi[m+qx.lang.String.firstUp(bg)]();

if(bf!=null){if(bf==h){bf=bi.length-1;
}bi=bi.getItem(bf);
bf=null;
}}catch(bl){return null;
}}return bi;
},__ct:function(K,L,M,N,O){K=this.__cx(K,L,M,N);
if(K==null){this.__cq(L,M);
}if(K!=undefined){try{this.__cr(L,M,K);
if(N&&N.onUpdate){N.onUpdate(O,L,K);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(N&&N.onSetFail){N.onSetFail(e);
}else{this.warn("Failed so set value "+K+" on "+L+". Error message: "+e);
}}}},__cu:function(bQ){var bR=[];
for(var i=0;i<bQ.length;i++){var name=bQ[i];
if(qx.lang.String.endsWith(name,f)){var bS=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bS!==h){if(bS==l||isNaN(parseInt(bS))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){bQ[i]=name.substring(0,name.indexOf(k));
bR[i]=l;
bR[i+1]=bS;
bQ.splice(i+1,0,A);
i++;
}else{bR[i]=bS;
bQ.splice(i,1,A);
}}else{bR[i]=l;
}}return bR;
},__cv:function(bn,bo,bp,bq,br,bs){var bt;
{};
var bv=function(bA,e){if(bA!==l){if(bA===h){bA=bn.length-1;
}var bD=bn.getItem(bA);
if(bD==undefined){qx.data.SingleValueBinding.__cq(bp,bq);
}var bB=e.getData().start;
var bC=e.getData().end;

if(bA<bB||bA>bC){return;
}}else{var bD=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bn+" by "+bo+" to "+bp+" ("+bq+")");
qx.log.Logger.debug("Data before conversion: "+bD);
}bD=qx.data.SingleValueBinding.__cx(bD,bp,bq,br);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bD);
}try{if(bD!=undefined){qx.data.SingleValueBinding.__cr(bp,bq,bD);
}else{qx.data.SingleValueBinding.__cq(bp,bq);
}if(br&&br.onUpdate){br.onUpdate(bn,bp,bD);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(br&&br.onSetFail){br.onSetFail(e);
}else{this.warn("Failed so set value "+bD+" on "+bp+". Error message: "+e);
}}};
if(!bs){bs=l;
}bv=qx.lang.Function.bind(bv,bn,bs);
var bu=bn.addListener(bo,bv);
return bu;
},__cw:function(cg,ch,ci,cj,ck){if(this.__cl[ch.toHashCode()]===undefined){this.__cl[ch.toHashCode()]=[];
}this.__cl[ch.toHashCode()].push([cg,ch,ci,cj,ck]);
},__cx:function(bE,bF,bG,bH){if(bH&&bH.converter){var bJ;

if(bF.getModel){bJ=bF.getModel();
}return bH.converter(bE,bJ);
}else{var bL=this.__cs(bF,bG);
var bM=bG.substring(bG.lastIndexOf(d)+1,bG.length);
if(bL==null){return bE;
}var bK=qx.Class.getPropertyDefinition(bL.constructor,bM);
var bI=bK==null?l:bK.check;
return this.__cz(bE,bI);
}},__cy:function(cu,cv){var cw=qx.Class.getPropertyDefinition(cu.constructor,cv);

if(cw==null){return null;
}return cw.event;
},__cz:function(cr,cs){var ct=qx.lang.Type.getClass(cr);
if((ct==c||ct==b)&&(cs==u||cs==o)){cr=parseInt(cr);
}if((ct==x||ct==c||ct==n)&&cs==b){cr=cr+l;
}if((ct==c||ct==b)&&(cs==c||cs==q)){cr=parseFloat(cr);
}return cr;
},removeBindingFromObject:function(bN,bO){if(bO.type==B){for(var i=0;i<bO.sources.length;i++){if(bO.sources[i]){bO.sources[i].removeListenerById(bO.listenerIds[i]);
}}for(var i=0;i<bO.targets.length;i++){if(bO.targets[i]){bO.targets[i].removeListenerById(bO.targetListenerIds[i]);
}}}else{bN.removeListenerById(bO);
}var bP=this.__cl[bN.toHashCode()];
if(bP!=undefined){for(var i=0;i<bP.length;i++){if(bP[i][0]==bO){qx.lang.Array.remove(bP,bP[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cp){{};
var cq=this.__cl[cp.toHashCode()];

if(cq!=undefined){for(var i=cq.length-1;i>=0;i--){this.removeBindingFromObject(cp,cq[i][0]);
}}},getAllBindingsForObject:function(bm){if(this.__cl[bm.toHashCode()]===undefined){this.__cl[bm.toHashCode()]=[];
}return this.__cl[bm.toHashCode()];
},removeAllBindings:function(){for(var bk in this.__cl){var bj=qx.core.ObjectRegistry.fromHashCode(bk);
if(bj==null){delete this.__cl[bk];
continue;
}this.removeAllBindingsForObject(bj);
}this.__cl={};
},getAllBindings:function(){return this.__cl;
},showBindingInLog:function(bV,bW){var bY;
for(var i=0;i<this.__cl[bV.toHashCode()].length;i++){if(this.__cl[bV.toHashCode()][i][0]==bW){bY=this.__cl[bV.toHashCode()][i];
break;
}}
if(bY===undefined){var bX=p;
}else{var bX=r+bY[1]+y+bY[2]+v+bY[3]+y+bY[4]+w;
}qx.log.Logger.debug(bX);
},showAllBindingsInLog:function(){for(var bU in this.__cl){var bT=qx.core.ObjectRegistry.fromHashCode(bU);

for(var i=0;i<this.__cl[bU].length;i++){this.showBindingInLog(bT,this.__cl[bU][i][0]);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cA=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cA:null,message:null,getComment:function(){return this.__cA;
},toString:function(){return this.__cA+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cB=qx.dev.StackTrace.getStackTrace();
},members:{__cB:null,getStackTrace:function(){return this.__cB;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var j="qx.event.handler.Object";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(h,i){return qx.Class.supportsEvent(h.constructor,i);
},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var n="/",m="0",l="qx/static",k="http://",j="https://",i="file://",h="qx.util.AliasManager",g="singleton",f=".",e="static";
qx.Class.define(h,{type:g,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__dc={};
this.add(e,l);
},members:{__dc:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===n||r.charAt(0)===f||r.indexOf(k)===0||r.indexOf(j)===m||r.indexOf(i)===0){u[r]=false;
return r;
}
if(this.__dc[r]){return this.__dc[r];
}var t=r.substring(0,r.indexOf(n));
var s=this.__dc[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(a,b){this.__dc[a]=b;
var d=this._getDynamic();
for(var c in d){if(c.substring(0,c.indexOf(n))===a){d[c]=b+c.substring(a.length);
}}},remove:function(q){delete this.__dc[q];
},resolve:function(o){var p=this._getDynamic();

if(o!==null){o=this._preprocess(o);
}return p[o]||o;
}},destruct:function(){this.__dc=null;
}});
})();
(function(){var x="px",w="qx.client",v="div",u="img",t="",s="scale-x",r="mshtml",q="no-repeat",p="scale",o="scale-y",R="qx/icon",Q="repeat",P=".png",O="crop",N="webkit",M="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",L='<div style="',K="repeat-y",J='<img src="',I="qx.bom.element.Decoration",E="', sizingMethod='",F="png",C="')",D='"/>',A='" style="',B="none",y=" ",z="repeat-x",G='"></div>',H="absolute";
qx.Class.define(I,{statics:{DEBUG:false,__hY:{},__ia:qx.core.Variant.isSet(w,r),__ib:qx.core.Variant.select(w,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__ic:{"scale-x":u,"scale-y":u,"scale":u,"repeat":v,"no-repeat":v,"repeat-x":v,"repeat-y":v},update:function(bi,bj,bk,bl){var bn=this.getTagName(bk,bj);

if(bn!=bi.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bo=this.getAttributes(bj,bk,bl);

if(bn===u){bi.src=bo.src;
}if(bi.style.backgroundPosition!=t&&bo.style.backgroundPosition===undefined){bo.style.backgroundPosition=null;
}if(bi.style.clip!=t&&bo.style.clip===undefined){bo.style.clip=null;
}var bm=qx.bom.element.Style;
bm.setStyles(bi,bo.style);
},create:function(bb,bc,bd){var be=this.getTagName(bc,bb);
var bh=this.getAttributes(bb,bc,bd);
var bf=qx.bom.element.Style.compile(bh.style);

if(be===u){return J+bh.src+A+bf+D;
}else{return L+bf+G;
}},getTagName:function(bN,bO){if(qx.core.Variant.isSet(w,r)){if(bO&&this.__ia&&this.__ib[bN]&&qx.lang.String.endsWith(bO,P)){return v;
}}return this.__ic[bN];
},getAttributes:function(j,k,l){if(!l){l={};
}
if(!l.position){l.position=H;
}
if(qx.core.Variant.isSet(w,r)){l.fontSize=0;
l.lineHeight=0;
}else if(qx.core.Variant.isSet(w,N)){l.WebkitUserDrag=B;
}var n=qx.util.ResourceManager.getInstance().getImageFormat(j)||qx.io.ImageLoader.getFormat(j);
{};
var m;
if(this.__ia&&this.__ib[k]&&n===F){m=this.__if(l,k,j);
}else{if(k===p){m=this.__ig(l,k,j);
}else if(k===s||k===o){m=this.__ih(l,k,j);
}else{m=this.__ik(l,k,j);
}}return m;
},__id:function(bK,bL,bM){if(bK.width==null&&bL!=null){bK.width=bL+x;
}
if(bK.height==null&&bM!=null){bK.height=bM+x;
}return bK;
},__ie:function(a){var b=qx.util.ResourceManager.getInstance().getImageWidth(a)||qx.io.ImageLoader.getWidth(a);
var c=qx.util.ResourceManager.getInstance().getImageHeight(a)||qx.io.ImageLoader.getHeight(a);
return {width:b,height:c};
},__if:function(d,e,f){var i=this.__ie(f);
d=this.__id(d,i.width,i.height);
var h=e==q?O:p;
var g=M+qx.util.ResourceManager.getInstance().toUri(f)+E+h+C;
d.filter=g;
d.backgroundImage=d.backgroundRepeat=t;
return {style:d};
},__ig:function(bx,by,bz){var bA=qx.util.ResourceManager.getInstance().toUri(bz);
var bB=this.__ie(bz);
bx=this.__id(bx,bB.width,bB.height);
return {src:bA,style:bx};
},__ih:function(bp,bq,br){var bv=qx.util.ResourceManager.getInstance();
var bu=bv.isClippedImage(br);
var bw=this.__ie(br);

if(bu){var bt=bv.getData(br);
var bs=bv.toUri(bt[4]);

if(bq===s){bp=this.__ii(bp,bt,bw.height);
}else{bp=this.__ij(bp,bt,bw.width);
}return {src:bs,style:bp};
}else{{};

if(bq==s){bp.height=bw.height==null?null:bw.height+x;
}else if(bq==o){bp.width=bw.width==null?null:bw.width+x;
}var bs=bv.toUri(br);
return {src:bs,style:bp};
}},__ii:function(bT,bU,bV){var bW=qx.util.ResourceManager.getInstance().getImageHeight(bU[4]);
bT.clip={top:-bU[6],height:bV};
bT.height=bW+x;
if(bT.top!=null){bT.top=(parseInt(bT.top,10)+bU[6])+x;
}else if(bT.bottom!=null){bT.bottom=(parseInt(bT.bottom,10)+bV-bW-bU[6])+x;
}return bT;
},__ij:function(bP,bQ,bR){var bS=qx.util.ResourceManager.getInstance().getImageWidth(bQ[4]);
bP.clip={left:-bQ[5],width:bR};
bP.width=bS+x;
if(bP.left!=null){bP.left=(parseInt(bP.left,10)+bQ[5])+x;
}else if(bP.right!=null){bP.right=(parseInt(bP.right,10)+bR-bS-bQ[5])+x;
}return bP;
},__ik:function(bC,bD,bE){var bJ=qx.util.ResourceManager.getInstance().isClippedImage(bE);
var bI=this.__ie(bE);
if(bJ&&bD!==Q){var bH=qx.util.ResourceManager.getInstance().getData(bE);
var bG=qx.bom.element.Background.getStyles(bH[4],bD,bH[5],bH[6]);

for(var bF in bG){bC[bF]=bG[bF];
}
if(bI.width!=null&&bC.width==null&&(bD==K||bD===q)){bC.width=bI.width+x;
}
if(bI.height!=null&&bC.height==null&&(bD==z||bD===q)){bC.height=bI.height+x;
}return {style:bC};
}else{{};
bC=this.__id(bC,bI.width,bI.height);
bC=this.__il(bC,bE,bD);
return {style:bC};
}},__il:function(T,U,V){var top=null;
var ba=null;

if(T.backgroundPosition){var W=T.backgroundPosition.split(y);
ba=parseInt(W[0]);

if(isNaN(ba)){ba=W[0];
}top=parseInt(W[1]);

if(isNaN(top)){top=W[1];
}}var Y=qx.bom.element.Background.getStyles(U,V,ba,top);

for(var X in Y){T[X]=Y[X];
}if(T.filter){T.filter=t;
}return T;
},__im:function(S){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(S)&&S.indexOf(R)==-1){if(!this.__hY[S]){qx.log.Logger.debug("Potential clipped image candidate: "+S);
this.__hY[S]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(w,{"mshtml":function(){return qx.bom.element.Decoration.__ia;
},"default":function(){return false;
}})}});
})();
(function(){var K="auto",J="px",I=",",H="clip:auto;",G="rect(",F=");",E="",D=")",C="qx.bom.element.Clip",B="string",y="rect(auto)",A="clip:rect(",z="clip",x="rect(auto,auto,auto,auto)";
qx.Class.define(C,{statics:{compile:function(k){if(!k){return H;
}var p=k.left;
var top=k.top;
var o=k.width;
var n=k.height;
var l,m;

if(p==null){l=(o==null?K:o+J);
p=K;
}else{l=(o==null?K:p+o+J);
p=p+J;
}
if(top==null){m=(n==null?K:n+J);
top=K;
}else{m=(n==null?K:top+n+J);
top=top+J;
}return A+top+I+l+I+m+I+p+F;
},get:function(a,b){var d=qx.bom.element.Style.get(a,z,b,false);
var i,top,g,f;
var c,e;

if(typeof d===B&&d!==K&&d!==E){d=qx.lang.String.trim(d);
if(/\((.*)\)/.test(d)){var h=RegExp.$1.split(I);
top=qx.lang.String.trim(h[0]);
c=qx.lang.String.trim(h[1]);
e=qx.lang.String.trim(h[2]);
i=qx.lang.String.trim(h[3]);
if(i===K){i=null;
}
if(top===K){top=null;
}
if(c===K){c=null;
}
if(e===K){e=null;
}if(top!=null){top=parseInt(top,10);
}
if(c!=null){c=parseInt(c,10);
}
if(e!=null){e=parseInt(e,10);
}
if(i!=null){i=parseInt(i,10);
}if(c!=null&&i!=null){g=c-i;
}else if(c!=null){g=c;
}
if(e!=null&&top!=null){f=e-top;
}else if(e!=null){f=e;
}}else{throw new Error("Could not parse clip string: "+d);
}}return {left:i||null,top:top||null,width:g||null,height:f||null};
},set:function(q,r){if(!r){q.style.clip=x;
return;
}var w=r.left;
var top=r.top;
var v=r.width;
var u=r.height;
var s,t;

if(w==null){s=(v==null?K:v+J);
w=K;
}else{s=(v==null?K:w+v+J);
w=w+J;
}
if(top==null){t=(u==null?K:u+J);
top=K;
}else{t=(u==null?K:top+u+J);
top=top+J;
}q.style.clip=G+top+I+s+I+t+I+w+D;
},reset:function(j){j.style.clip=qx.bom.client.Engine.MSHTML?y:K;
}}});
})();
(function(){var n="n-resize",m="e-resize",l="nw-resize",k="ne-resize",j="",i="cursor:",h="qx.client",g=";",f="qx.bom.element.Cursor",e="cursor",d="hand";
qx.Class.define(f,{statics:{__hj:qx.core.Variant.select(h,{"mshtml":{"cursor":d,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"opera":{"col-resize":m,"row-resize":n,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"default":{}}),compile:function(c){return i+(this.__hj[c]||c)+g;
},get:function(p,q){return qx.bom.element.Style.get(p,e,q,false);
},set:function(a,b){a.style.cursor=this.__hj[b]||b;
},reset:function(o){o.style.cursor=j;
}}});
})();
(function(){var v="",u="qx.client",t=";",s="filter",r="opacity:",q="opacity",p="MozOpacity",o=");",n=")",m="zoom:1;filter:alpha(opacity=",j="qx.bom.element.Opacity",l="alpha(opacity=",k="-moz-opacity:";
qx.Class.define(j,{statics:{compile:qx.core.Variant.select(u,{"mshtml":function(w){if(w>=1){return v;
}
if(w<0.00001){w=0;
}return m+(w*100)+o;
},"gecko":function(a){if(a==1){a=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return k+a+t;
}else{return r+a+t;
}},"default":function(b){if(b==1){return v;
}return r+b+t;
}}),set:qx.core.Variant.select(u,{"mshtml":function(x,y){var z=qx.bom.element.Style.get(x,s,qx.bom.element.Style.COMPUTED_MODE,false);
if(y>=1){x.style.filter=z.replace(/alpha\([^\)]*\)/gi,v);
return;
}
if(y<0.00001){y=0;
}if(!x.currentStyle||!x.currentStyle.hasLayout){x.style.zoom=1;
}x.style.filter=z.replace(/alpha\([^\)]*\)/gi,v)+l+y*100+n;
},"gecko":function(B,C){if(C==1){C=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){B.style.MozOpacity=C;
}else{B.style.opacity=C;
}},"default":function(J,K){if(K==1){K=v;
}J.style.opacity=K;
}}),reset:qx.core.Variant.select(u,{"mshtml":function(c){var d=qx.bom.element.Style.get(c,s,qx.bom.element.Style.COMPUTED_MODE,false);
c.style.filter=d.replace(/alpha\([^\)]*\)/gi,v);
},"gecko":function(A){if(qx.bom.client.Engine.VERSION<1.7){A.style.MozOpacity=v;
}else{A.style.opacity=v;
}},"default":function(i){i.style.opacity=v;
}}),get:qx.core.Variant.select(u,{"mshtml":function(e,f){var g=qx.bom.element.Style.get(e,s,f,false);

if(g){var h=g.match(/alpha\(opacity=(.*)\)/);

if(h&&h[1]){return parseFloat(h[1])/100;
}}return 1.0;
},"gecko":function(D,E){var F=qx.bom.element.Style.get(D,qx.bom.client.Engine.VERSION<1.7?p:q,E,false);

if(F==0.999999){F=1.0;
}
if(F!=null){return parseFloat(F);
}return 1.0;
},"default":function(G,H){var I=qx.bom.element.Style.get(G,q,H,false);

if(I!=null){return parseFloat(I);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__hk:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__hl:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__hm:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__hn:function(r){var s=this.__hm;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(A){{};
},"default":function(t){var v=this.__hl;
var u=p;

if(v){for(var i=0,l=v.length;i<l;i++){u+=v[i]+m+t+c;
}}return u;
}}),get:qx.core.Variant.select(q,{"mshtml":function(w){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(w))){if(!this.__hn(w)){return d;
}}return k;
},"default":function(E){var G=this.__hk;
var F;

if(G){for(var i=0,l=G.length;i<l;i++){F=qx.bom.element.Style.get(E,G[i],null,false);

if(F!=null&&F!==p){return F;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(B,C){{};
},"default":function(x,y){var z=this.__hk;

if(z){for(var i=0,l=z.length;i<l;i++){x.style[z[i]]=y;
}}}}),reset:function(D){this.set(D,p);
}}});
})();
(function(){var bq="",bp="qx.client",bo="hidden",bn="-moz-scrollbars-none",bm="overflow",bl=";",bk="overflowY",bj=":",bi="overflowX",bh="overflow:",bC="none",bB="scroll",bA="borderLeftStyle",bz="borderRightStyle",by="div",bx="borderRightWidth",bw="overflow-y",bv="borderLeftWidth",bu="-moz-scrollbars-vertical",bt="100px",br="qx.bom.element.Overflow",bs="overflow-x";
qx.Class.define(br,{statics:{__hi:null,getScrollbarWidth:function(){if(this.__hi!==null){return this.__hi;
}var bW=qx.bom.element.Style;
var bY=function(bH,bI){return parseInt(bW.get(bH,bI))||0;
};
var ca=function(D){return (bW.get(D,bz)==bC?0:bY(D,bx));
};
var bX=function(bU){return (bW.get(bU,bA)==bC?0:bY(bU,bv));
};
var cc=qx.core.Variant.select(bp,{"mshtml":function(a){if(bW.get(a,bk)==bo||a.clientWidth==0){return ca(a);
}return Math.max(0,a.offsetWidth-a.clientLeft-a.clientWidth);
},"default":function(bR){if(bR.clientWidth==0){var bS=bW.get(bR,bm);
var bT=(bS==bB||bS==bu?16:0);
return Math.max(0,ca(bR)+bT);
}return Math.max(0,(bR.offsetWidth-bR.clientWidth-bX(bR)));
}});
var cb=function(G){return cc(G)-ca(G);
};
var t=document.createElement(by);
var s=t.style;
s.height=s.width=bt;
s.overflow=bB;
document.body.appendChild(t);
var c=cb(t);
this.__hi=c?c:16;
document.body.removeChild(t);
return this.__hi;
},_compile:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(e,f){if(f==bo){f=bn;
}return bh+f+bl;
}:
function(bN,bO){return bN+bj+bO+bl;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bb,bc){return bh+bc+bl;
}:
function(X,Y){return X+bj+Y+bl;
},"default":function(E,F){return E+bj+F+bl;
}}),compileX:function(b){return this._compile(bs,b);
},compileY:function(o){return this._compile(bw,o);
},getX:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(y,z){var A=qx.bom.element.Style.get(y,bm,z,false);

if(A===bn){A=bo;
}return A;
}:
function(bJ,bK){return qx.bom.element.Style.get(bJ,bi,bK,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(k,l){return qx.bom.element.Style.get(k,bm,l,false);
}:
function(i,j){return qx.bom.element.Style.get(i,bi,j,false);
},"default":function(Q,R){return qx.bom.element.Style.get(Q,bi,R,false);
}}),setX:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bL,bM){if(bM==bo){bM=bn;
}bL.style.overflow=bM;
}:
function(B,C){B.style.overflowX=C;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,N){M.style.overflow=N;
}:
function(bD,bE){bD.style.overflowX=bE;
},"default":function(m,n){m.style.overflowX=n;
}}),resetX:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(S){S.style.overflow=bq;
}:
function(ba){ba.style.overflowX=bq;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bF,bG){bF.style.overflow=bq;
}:
function(g,h){g.style.overflowX=bq;
},"default":function(bV){bV.style.overflowX=bq;
}}),getY:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cd,ce){var cf=qx.bom.element.Style.get(cd,bm,ce,false);

if(cf===bn){cf=bo;
}return cf;
}:
function(K,L){return qx.bom.element.Style.get(K,bk,L,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(q,r){return qx.bom.element.Style.get(q,bm,r,false);
}:
function(bP,bQ){return qx.bom.element.Style.get(bP,bk,bQ,false);
},"default":function(bf,bg){return qx.bom.element.Style.get(bf,bk,bg,false);
}}),setY:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(V,W){if(W===bo){W=bn;
}V.style.overflow=W;
}:
function(w,x){w.style.overflowY=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(u,v){u.style.overflow=v;
}:
function(I,J){I.style.overflowY=J;
},"default":function(O,P){O.style.overflowY=P;
}}),resetY:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(d){d.style.overflow=bq;
}:
function(p){p.style.overflowY=bq;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(T,U){T.style.overflow=bq;
}:
function(bd,be){bd.style.overflowY=bq;
},"default":function(H){H.style.overflowY=bq;
}})}});
})();
(function(){var I="",H="qx.client",G="user-select",F="userSelect",E="appearance",D="style",C="MozUserModify",B="px",A="-webkit-appearance",z="styleFloat",bf="-webkit-user-select",be="-moz-appearance",bd="pixelHeight",bc="MozAppearance",bb=":",ba="pixelTop",Y="pixelLeft",X="text-overflow",W="-moz-user-select",V="MozUserSelect",P="qx.bom.element.Style",Q="-moz-user-modify",N="-webkit-user-modify",O="WebkitUserSelect",L="-o-text-overflow",M="pixelRight",J="cssFloat",K="pixelWidth",R="pixelBottom",S=";",U="WebkitUserModify",T="WebkitAppearance";
qx.Class.define(P,{statics:{__ho:{styleNames:{"float":qx.core.Variant.select(H,{"mshtml":z,"default":J}),"appearance":qx.core.Variant.select(H,{"gecko":bc,"webkit":T,"default":E}),"userSelect":qx.core.Variant.select(H,{"gecko":V,"webkit":O,"default":F}),"userModify":qx.core.Variant.select(H,{"gecko":C,"webkit":U,"default":F})},cssNames:{"appearance":qx.core.Variant.select(H,{"gecko":be,"webkit":A,"default":E}),"userSelect":qx.core.Variant.select(H,{"gecko":W,"webkit":bf,"default":G}),"userModify":qx.core.Variant.select(H,{"gecko":Q,"webkit":N,"default":G}),"textOverflow":qx.core.Variant.select(H,{"opera":L,"default":X})},mshtmlPixel:{width:K,height:bd,left:Y,right:M,top:ba,bottom:R},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__hp:{},compile:function(bg){var bk=[];
var bo=this.__ho;
var bn=bo.special;
var bl=bo.cssNames;
var bj=this.__hp;
var bm=qx.lang.String;
var name,bi,bh;

for(name in bg){bh=bg[name];

if(bh==null){continue;
}name=bl[name]||name;
if(bn[name]){bk.push(bn[name].compile(bh));
}else{bi=bj[name];

if(!bi){bi=bj[name]=bm.hyphenate(name);
}bk.push(bi,bb,bh,S);
}}return bk.join(I);
},setCss:qx.core.Variant.select(H,{"mshtml":function(b,c){b.style.cssText=c;
},"default":function(bx,by){bx.setAttribute(D,by);
}}),getCss:qx.core.Variant.select(H,{"mshtml":function(a){return a.style.cssText.toLowerCase();
},"default":function(bz){return bz.getAttribute(D);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(d,name,e,f){{};
var g=this.__ho;
name=g.styleNames[name]||name;
if(f!==false&&g.special[name]){return g.special[name].set(d,e);
}else{d.style[name]=e!==null?e:I;
}},setStyles:function(k,l,m){{};
var s=this.__ho;
var p=s.styleNames;
var r=s.special;
var n=k.style;

for(var q in l){var o=l[q];
var name=p[q]||q;

if(o===undefined){if(m!==false&&r[name]){r[name].reset(k);
}else{n[name]=I;
}}else{if(m!==false&&r[name]){r[name].set(k,o);
}else{n[name]=o!==null?o:I;
}}}},reset:function(h,name,i){var j=this.__ho;
name=j.styleNames[name]||name;
if(i!==false&&j.special[name]){return j.special[name].reset(h);
}else{h.style[name]=I;
}},get:qx.core.Variant.select(H,{"mshtml":function(bp,name,bq,br){var bw=this.__ho;
name=bw.styleNames[name]||name;
if(br!==false&&bw.special[name]){return bw.special[name].get(bp,bq);
}if(!bp.currentStyle){return bp.style[name]||I;
}switch(bq){case this.LOCAL_MODE:return bp.style[name]||I;
case this.CASCADED_MODE:return bp.currentStyle[name]||I;
default:var bv=bp.currentStyle[name]||I;
if(/^-?[\.\d]+(px)?$/i.test(bv)){return bv;
}var bu=bw.mshtmlPixel[name];

if(bu){var bs=bp.style[name];
bp.style[name]=bv||0;
var bt=bp.style[bu]+B;
bp.style[name]=bs;
return bt;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bv)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bv;
}},"default":function(t,name,u,v){var y=this.__ho;
name=y.styleNames[name]||name;
if(v!==false&&y.special[name]){return y.special[name].get(t,u);
}switch(u){case this.LOCAL_MODE:return t.style[name]||I;
case this.CASCADED_MODE:if(t.currentStyle){return t.currentStyle[name]||I;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var w=qx.dom.Node.getDocument(t);
var x=w.defaultView.getComputedStyle(t,null);
return x?x[name]:I;
}}})}});
})();
(function(){var i="CSS1Compat",h="position:absolute;width:0;height:0;width:1",g="qx.bom.Document",f="1px",e="qx.client",d="div";
qx.Class.define(g,{statics:{isQuirksMode:qx.core.Variant.select(e,{"mshtml":function(l){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (l||window).document.compatMode!==i;
}},"webkit":function(j){if(document.compatMode===undefined){var k=(j||window).document.createElement(d);
k.style.cssText=h;
return k.style.width===f?true:false;
}else{return (j||window).document.compatMode!==i;
}},"default":function(n){return (n||window).document.compatMode!==i;
}}),isStandardMode:function(m){return !this.isQuirksMode(m);
},getWidth:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getWidth(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollWidth:p.body.scrollWidth;
return Math.max(scroll,q);
},getHeight:function(a){var b=(a||window).document;
var c=qx.bom.Viewport.getHeight(a);
var scroll=this.isStandardMode(a)?b.documentElement.scrollHeight:b.body.scrollHeight;
return Math.max(scroll,c);
}}});
})();
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(o){if(qx.bom.client.Engine.VERSION<9.5){return (o||window).document.body.clientWidth;
}else{var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientWidth:p.body.clientWidth;
}},"webkit":function(c){if(qx.bom.client.Engine.VERSION<523.15){return (c||window).innerWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},"default":function(e){var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(i){if(qx.bom.client.Engine.VERSION<9.5){return (i||window).document.body.clientHeight;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientHeight:j.body.clientHeight;
}},"webkit":function(q){if(qx.bom.client.Engine.VERSION<523.15){return (q||window).innerHeight;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientHeight:r.body.clientHeight;
}},"default":function(k){var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(m){var n=(m||window).document;
return n.documentElement.scrollLeft||n.body.scrollLeft;
},"default":function(s){return (s||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(g){var h=(g||window).document;
return h.documentElement.scrollTop||h.body.scrollTop;
},"default":function(t){return (t||window).pageYOffset;
}})}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Bootstrap.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__hw:function(){this.QUIRKS_MODE=this.__hx();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__hx:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__hw();
}});
})();
(function(){var o="/",n="mshtml",m="qx.client",l="",k="?",j="string",i="qx.util.ResourceManager",h="singleton",g="qx.isSource";
qx.Class.define(i,{extend:qx.core.Object,type:h,statics:{__hM:qx.$$resources||{},__hN:{}},members:{has:function(b){return !!arguments.callee.self.__hM[b];
},getData:function(a){return arguments.callee.self.__hM[a]||null;
},getImageWidth:function(p){var q=arguments.callee.self.__hM[p];
return q?q[0]:null;
},getImageHeight:function(c){var d=arguments.callee.self.__hM[c];
return d?d[1]:null;
},getImageFormat:function(x){var y=arguments.callee.self.__hM[x];
return y?y[2]:null;
},isClippedImage:function(e){var f=arguments.callee.self.__hM[e];
return f&&f.length>4;
},toUri:function(z){if(z==null){return z;
}var A=arguments.callee.self.__hM[z];

if(!A){return z;
}
if(typeof A===j){var C=A;
}else{var C=A[3];
if(!C){return z;
}}var B=l;

if(qx.core.Variant.isSet(m,n)&&qx.bom.client.Feature.SSL){B=arguments.callee.self.__hN[C];
}return B+qx.$$libraries[C].resourceUri+o+z;
}},defer:function(r){if(qx.core.Variant.isSet(m,n)){if(qx.bom.client.Feature.SSL){for(var v in qx.$$libraries){var t=qx.$$libraries[v].resourceUri;
if(t.match(/^\/\//)!=null){r.__hN[v]=window.location.protocol;
}else if(t.match(/^\.\//)!=null&&qx.core.Setting.get(g)){var s=document.URL;
r.__hN[v]=s.substring(0,s.lastIndexOf(o));
}else if(t.match(/^http/)!=null){}else{var w=window.location.href.indexOf(k);
var u;

if(w==-1){u=window.location.href;
}else{u=window.location.href.substring(0,w);
}r.__hN[v]=u.substring(0,u.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var r="qx.client",q="load",p="qx.io.ImageLoader";
qx.Bootstrap.define(p,{statics:{__in:{},__io:{width:null,height:null},__ip:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(G){var H=this.__in[G];
return !!(H&&H.loaded);
},isFailed:function(E){var F=this.__in[E];
return !!(F&&F.failed);
},isLoading:function(f){var g=this.__in[f];
return !!(g&&g.loading);
},getFormat:function(a){var b=this.__in[a];
return b?b.format:null;
},getSize:function(w){var x=this.__in[w];
return x?
{width:x.width,height:x.height}:this.__io;
},getWidth:function(u){var v=this.__in[u];
return v?v.width:null;
},getHeight:function(s){var t=this.__in[s];
return t?t.height:null;
},load:function(y,z,A){var B=this.__in[y];

if(!B){B=this.__in[y]={};
}if(z&&!A){A=window;
}if(B.loaded||B.loading||B.failed){if(z){if(B.loading){B.callbacks.push(z,A);
}else{z.call(A,y,B);
}}}else{B.loading=true;
B.callbacks=[];

if(z){B.callbacks.push(z,A);
}var D=new Image();
var C=qx.lang.Function.listener(this.__iq,this,D,y);
D.onload=C;
D.onerror=C;
D.src=y;
}},__iq:qx.event.GlobalError.observeMethod(function(event,h,j){var k=this.__in[j];
if(event.type===q){k.loaded=true;
k.width=this.__ir(h);
k.height=this.__is(h);
var m=this.__ip.exec(j);

if(m!=null){k.format=m[1];
}}else{k.failed=true;
}h.onload=h.onerror=null;
var n=k.callbacks;
delete k.loading;
delete k.callbacks;
for(var i=0,l=n.length;i<l;i+=2){n[i].call(n[i+1],j,k);
}}),__ir:qx.core.Variant.select(r,{"gecko":function(o){return o.naturalWidth;
},"default":function(d){return d.width;
}}),__is:qx.core.Variant.select(r,{"gecko":function(c){return c.naturalHeight;
},"default":function(e){return e.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__it:[i,null,h,b,null,j,e,null,j],__iu:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__iv:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(x,y,z,top){var A=this.__iv(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C=this.__it;
C[1]=B;
C[4]=A;
C[7]=y;
return C.join(g);
},getStyles:function(D,E,F,top){if(!D){return this.__iu;
}var G=this.__iv(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:c+H+f};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(r,s,t,u,top){var v=this.getStyles(s,t,u,top);

for(var w in v){r.style[w]=v[w];
}}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(j){var k={};

if(j){var l=j.colors;
var m=qx.util.ColorUtil;
var n;

for(var o in l){n=l[o];

if(typeof n===b){if(!m.isCssString(n)){throw new Error("Could not parse color: "+n);
}}else if(n instanceof Array){n=m.rgbToRgbString(n);
}else{throw new Error("Could not parse color: "+n);
}k[o]=n;
}}this._setDynamic(k);
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.colors[p]){return s[p]=r.colors[p];
}return p;
},isDynamic:function(g){var i=this._dynamic;

if(g&&(i[g]!==undefined)){return true;
}var h=this.getTheme();

if(h!==null&&g&&(h.colors[g]!==undefined)){i[g]=h.colors[g];
return true;
}return false;
}}});
})();
(function(){var E=",",D="rgb(",C=")",B="qx.theme.manager.Color",A="qx.util.ColorUtil";
qx.Class.define(A,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(X){return this.NAMED[X]!==undefined;
},isSystemColor:function(Q){return this.SYSTEM[Q]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(B);
},isThemedColor:function(Y){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(Y);
},stringToRgb:function(e){if(this.supportsThemes()&&this.isThemedColor(e)){var e=qx.theme.manager.Color.getInstance().resolveDynamic(e);
}
if(this.isNamedColor(e)){return this.NAMED[e];
}else if(this.isSystemColor(e)){throw new Error("Could not convert system colors to RGB: "+e);
}else if(this.isRgbString(e)){return this.__cW();
}else if(this.isHex3String(e)){return this.__cY();
}else if(this.isHex6String(e)){return this.__da();
}throw new Error("Could not parse color: "+e);
},cssStringToRgb:function(a){if(this.isNamedColor(a)){return this.NAMED[a];
}else if(this.isSystemColor(a)){throw new Error("Could not convert system colors to RGB: "+a);
}else if(this.isRgbString(a)){return this.__cW();
}else if(this.isRgbaString(a)){return this.__cX();
}else if(this.isHex3String(a)){return this.__cY();
}else if(this.isHex6String(a)){return this.__da();
}throw new Error("Could not parse color: "+a);
},stringToRgbString:function(d){return this.rgbToRgbString(this.stringToRgb(d));
},rgbToRgbString:function(h){return D+h[0]+E+h[1]+E+h[2]+C;
},rgbToHexString:function(L){return (qx.lang.String.pad(L[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(L[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(L[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(z){return this.isThemedColor(z)||this.isNamedColor(z)||this.isHex3String(z)||this.isHex6String(z)||this.isRgbString(z);
},isCssString:function(bh){return this.isSystemColor(bh)||this.isNamedColor(bh)||this.isHex3String(bh)||this.isHex6String(bh)||this.isRgbString(bh);
},isHex3String:function(ba){return this.REGEXP.hex3.test(ba);
},isHex6String:function(c){return this.REGEXP.hex6.test(c);
},isRgbString:function(P){return this.REGEXP.rgb.test(P);
},isRgbaString:function(G){return this.REGEXP.rgba.test(G);
},__cW:function(){var K=parseInt(RegExp.$1,10);
var J=parseInt(RegExp.$2,10);
var I=parseInt(RegExp.$3,10);
return [K,J,I];
},__cX:function(){var O=parseInt(RegExp.$1,10);
var N=parseInt(RegExp.$2,10);
var M=parseInt(RegExp.$3,10);
return [O,N,M];
},__cY:function(){var bd=parseInt(RegExp.$1,16)*17;
var bc=parseInt(RegExp.$2,16)*17;
var bb=parseInt(RegExp.$3,16)*17;
return [bd,bc,bb];
},__da:function(){var bg=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var bf=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var be=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bg,bf,be];
},hex3StringToRgb:function(H){if(this.isHex3String(H)){return this.__cY(H);
}throw new Error("Invalid hex3 value: "+H);
},hex6StringToRgb:function(F){if(this.isHex6String(F)){return this.__da(F);
}throw new Error("Invalid hex6 value: "+F);
},hexStringToRgb:function(bi){if(this.isHex3String(bi)){return this.__cY(bi);
}
if(this.isHex6String(bi)){return this.__da(bi);
}throw new Error("Invalid hex value: "+bi);
},rgbToHsb:function(j){var l,m,o;
var y=j[0];
var v=j[1];
var k=j[2];
var x=(y>v)?y:v;

if(k>x){x=k;
}var n=(y<v)?y:v;

if(k<n){n=k;
}o=x/255.0;

if(x!=0){m=(x-n)/x;
}else{m=0;
}
if(m==0){l=0;
}else{var u=(x-y)/(x-n);
var w=(x-v)/(x-n);
var s=(x-k)/(x-n);

if(y==x){l=s-w;
}else if(v==x){l=2.0+u-s;
}else{l=4.0+w-u;
}l=l/6.0;

if(l<0){l=l+1.0;
}}return [Math.round(l*360),Math.round(m*100),Math.round(o*100)];
},hsbToRgb:function(R){var i,f,p,q,t;
var S=R[0]/360;
var T=R[1]/100;
var U=R[2]/100;

if(S>=1.0){S%=1.0;
}
if(T>1.0){T=1.0;
}
if(U>1.0){U=1.0;
}var V=Math.floor(255*U);
var W={};

if(T==0.0){W.red=W.green=W.blue=V;
}else{S*=6.0;
i=Math.floor(S);
f=S-i;
p=Math.floor(V*(1.0-T));
q=Math.floor(V*(1.0-(T*f)));
t=Math.floor(V*(1.0-(T*(1.0-f))));

switch(i){case 0:W.red=V;
W.green=t;
W.blue=p;
break;
case 1:W.red=q;
W.green=V;
W.blue=p;
break;
case 2:W.red=p;
W.green=V;
W.blue=t;
break;
case 3:W.red=p;
W.green=q;
W.blue=V;
break;
case 4:W.red=t;
W.green=p;
W.blue=V;
break;
case 5:W.red=V;
W.green=p;
W.blue=q;
break;
}}return [W.red,W.green,W.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var b="qx.event.handler.Window";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){arguments.callee.base.call(this);
this._manager=f;
this._window=f.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(i,j,k){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var d=qx.event.handler.Window.SUPPORTED_TYPES;

for(var c in d){qx.bom.Event.addNativeListener(this._window,c,this._onNativeWrapper);
}},_stopWindowObserver:function(){var h=qx.event.handler.Window.SUPPORTED_TYPES;

for(var g in h){qx.bom.Event.removeNativeListener(this._window,g,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var m=this._window;

try{var p=m.document;
}catch(e){return ;
}var n=p.documentElement;
var l=e.target||e.srcElement;

if(l==null||l===m||l===p||l===n){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,m]);
qx.event.Registration.dispatchEvent(m,event);
var o=event.getReturnValue();

if(o!=null){e.returnValue=o;
return o;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var j="ready",i="qx.application",h="beforeunload",g="qx.core.Init",f="shutdown";
qx.Class.define(g,{statics:{getApplication:function(){return this.__bW||null;
},__bV:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var b=qx.core.Setting.get(i);
var c=qx.Class.getByName(b);

if(c){this.__bW=new c;
var a=new Date;
this.__bW.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-a)+"ms");
var a=new Date;
this.__bW.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-a)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+b);
}},__bX:function(e){var k=this.__bW;

if(k){e.setReturnValue(k.close());
}},__bY:function(){var l=this.__bW;

if(l){l.terminate();
}}},defer:function(d){qx.event.Registration.addListener(window,j,d.__bV,d);
qx.event.Registration.addListener(window,f,d.__bY,d);
qx.event.Registration.addListener(window,h,d.__bX,d);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(e,f,g,h){var i=qx.locale.Manager;

if(i){return i.trn.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(l,m,n){var o=qx.locale.Manager;

if(o){return o.trc.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(j){var k=qx.locale.Manager;

if(k){return k.marktr.apply(k,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var c="abstract",b="qx.application.AbstractGui";
qx.Class.define(b,{type:c,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__ca:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__ca;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__ca=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this.__ca=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var i="Gallery (HTML -divs)",g="st.widget.FileManager",f="st.demo.Application",d="center",c="st.widget.Tree",b="move",a="st.widget.Map";
qx.Class.define(f,{extend:qx.application.Standalone,members:{main:function(){qx.Theme.include(st.theme.blue.Appearance,st.theme.Appearance);
arguments.callee.base.call(this);
{};
var l=st.Utils.createForm();
this.getRoot().add(l);
var r=new st.widget.HtmlGallery(i);
r.set({width:100,height:100});
this.getRoot().add(r,{left:600,top:200});
{var p=new st.widget.Map();
var n=this._createWin(a,p);
n.addListener(b,function(e){p.update();
});
n.moveTo(10,510);
n.open();
};
{var o=new st.widget.Tree();
var m=this._createWin(c,o,250,300);
m.moveTo(230,510);
m.open();
};
{var q=new st.widget.FileManager();
var m=this._createWin(g,q,400,300);
m.moveTo(610,10);
m.open();
};
},_createWin:function(name,j,w,h){if(!w){w=200;
h=200;
}var k=new qx.ui.window.Window(name).set({width:w,height:h,showClose:false,showMinimize:false,contentPadding:0,layout:new qx.ui.layout.Dock()});
k.add(j,{edge:d});
return k;
}}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(c,d,e,f,g){arguments.callee.base.call(this,f,g);
this._target=d||qx.bom.Event.getTarget(c);
this._relatedTarget=e||qx.bom.Event.getRelatedTarget(c);

if(c.timeStamp){this._timeStamp=c.timeStamp;
}this._native=c;
this._returnValue=null;
return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
var j={};
i._native=this._cloneNativeEvent(this._native,j);
i._returnValue=this._returnValue;
return i;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(b){this._returnValue=b;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
})();
(function(){var q="object",p="_applyTheme",o="__db",n="qx.theme.manager.Decoration",m="Theme",l="string",k="singleton";
qx.Class.define(n,{type:k,extend:qx.core.Object,properties:{theme:{check:m,nullable:true,apply:p}},members:{__db:null,resolve:function(a){if(!a){return null;
}
if(typeof a===q){return a;
}var d=this.getTheme();

if(!d){return null;
}var d=this.getTheme();

if(!d){return null;
}var e=this.__db;

if(!e){e=this.__db={};
}var b=e[a];

if(b){return b;
}var c=d.decorations[a];

if(!c){return null;
}var f=c.decorator;

if(f==null){throw new Error("Missing definition of which decorator to use in entry: "+a+"!");
}return e[a]=(new f).set(c.style);
},isValidPropertyValue:function(t){if(typeof t===l){return this.isDynamic(t);
}else if(typeof t===q){var u=t.constructor;
return qx.Class.hasInterface(u,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(r){if(!r){return false;
}var s=this.getTheme();

if(!s){return false;
}return !!s.decorations[r];
},_applyTheme:function(g,h){var j=qx.util.AliasManager.getInstance();

if(h){for(var i in h.aliases){j.remove(i);
}}
if(g){for(var i in g.aliases){j.add(i,g.aliases[i]);
}}
if(!g){this.__db={};
}}},destruct:function(){this._disposeMap(o);
}});
})();
(function(){var q="qx.theme.manager.Font",p="Theme",o="changeTheme",n="_applyTheme",m="singleton";
qx.Class.define(q,{type:m,extend:qx.util.ValueManager,properties:{theme:{check:p,nullable:true,apply:n,event:o}},members:{resolveDynamic:function(r){var s=this._dynamic;
return r instanceof qx.bom.Font?r:s[r];
},resolve:function(i){var l=this._dynamic;
var j=l[i];

if(j){return j;
}var k=this.getTheme();

if(k!==null&&k.fonts[i]){return l[i]=(new qx.bom.Font).set(k.fonts[i]);
}return i;
},isDynamic:function(a){var c=this._dynamic;

if(a&&(a instanceof qx.bom.Font||c[a]!==undefined)){return true;
}var b=this.getTheme();

if(b!==null&&a&&b.fonts[a]){c[a]=(new qx.bom.Font).set(b.fonts[a]);
return true;
}return false;
},_applyTheme:function(d){var e=this._getDynamic();

for(var h in e){if(e[h].themed){e[h].dispose();
delete e[h];
}}
if(d){var f=d.fonts;
var g=qx.bom.Font;

for(var h in f){e[h]=(new g).set(f[h]);
e[h].themed=true;
}}this._setDynamic(e);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(L,M){arguments.callee.base.call(this);

if(L!==undefined){this.setSize(L);
}
if(M!==undefined){this.setFamily(M);
}},statics:{fromString:function(E){var I=new qx.bom.Font();
var G=E.split(/\s+/);
var name=[];
var H;

for(var i=0;i<G.length;i++){switch(H=G[i]){case c:I.setBold(true);
break;
case e:I.setItalic(true);
break;
case j:I.setDecoration(j);
break;
default:var F=parseInt(H,10);

if(F==H||qx.lang.String.contains(H,g)){I.setSize(F);
}else{name.push(H);
}break;
}}
if(name.length>0){I.setFamily(name);
}return I;
},fromConfig:function(N){var O=new qx.bom.Font;
O.set(N);
return O;
},__dd:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__dd;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__de:null,__df:null,__dg:null,__dh:null,__di:null,__dj:null,_applySize:function(P,Q){this.__de=P===null?null:P+g;
},_applyLineHeight:function(y,z){this.__dj=y===null?null:y;
},_applyFamily:function(R,S){var T=k;

for(var i=0,l=R.length;i<l;i++){if(R[i].indexOf(o)>0){T+=f+R[i]+f;
}else{T+=R[i];
}
if(i!==l-1){T+=n;
}}this.__df=T;
},_applyBold:function(J,K){this.__dg=J===null?null:J?c:d;
},_applyItalic:function(C,D){this.__dh=C===null?null:C?e:d;
},_applyDecoration:function(A,B){this.__di=A===null?null:A;
},getStyles:function(){return {fontFamily:this.__df,fontSize:this.__de,fontWeight:this.__dg,fontStyle:this.__dh,textDecoration:this.__di,lineHeight:this.__dj};
}}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var A="string",z="_applyTheme",y="qx.theme.manager.Appearance",x=":",w="Theme",v="changeTheme",u="/",t="singleton";
qx.Class.define(y,{type:t,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__dk={};
this.__dl={};
},properties:{theme:{check:w,nullable:true,event:v,apply:z}},members:{__dm:{},__dk:null,__dl:null,_applyTheme:function(a,b){this.__dl={};
this.__dk={};
},__dn:function(B,C,D){var H=C.appearances;
var K=H[B];

if(!K){var L=u;
var E=[];
var J=B.split(L);
var I;

while(!K&&J.length>0){E.unshift(J.pop());
var F=J.join(L);
K=H[F];

if(K){I=K.alias||K;

if(typeof I===A){var G=I+L+E.join(L);
return this.__dn(G,C,D);
}}}if(D!=null){return this.__dn(D,C);
}return null;
}else if(typeof K===A){return this.__dn(K,C,D);
}else if(K.include&&!K.style){return this.__dn(K.include,C,D);
}return B;
},styleFrom:function(c,d,e,f){if(!e){e=this.getTheme();
}var l=this.__dl;
var g=l[c];

if(!g){g=l[c]=this.__dn(c,e,f);
}var q=e.appearances[g];

if(!q){this.warn("Missing appearance: "+c);
return null;
}if(!q.style){return null;
}var r=g;

if(d){var s=q.$$bits;

if(!s){s=q.$$bits={};
q.$$length=0;
}var j=0;

for(var m in d){if(!d[m]){continue;
}
if(s[m]==null){s[m]=1<<q.$$length++;
}j+=s[m];
}if(j>0){r+=x+j;
}}var k=this.__dk;

if(k[r]!==undefined){return k[r];
}if(!d){d=this.__dm;
}var o;
if(q.include||q.base){var i=q.style(d);
var h;

if(q.include){h=this.styleFrom(q.include,d,e,f);
}o={};
if(q.base){var n=this.styleFrom(g,d,q.base,f);

if(q.include){for(var p in n){if(!h.hasOwnProperty(p)&&!i.hasOwnProperty(p)){o[p]=n[p];
}}}else{for(var p in n){if(!i.hasOwnProperty(p)){o[p]=n[p];
}}}}if(q.include){for(var p in h){if(!i.hasOwnProperty(p)){o[p]=h[p];
}}}for(var p in i){o[p]=i[p];
}}else{o=q.style(d);
}return k[r]=o||null;
}},destruct:function(){this.__dk=this.__dl=null;
}});
})();
(function(){var A="focusout",z="interval",y="mouseover",x="mouseout",w="mousemove",v="widget",u="qx.ui.tooltip.ToolTip",t="Boolean",s="__dx",r="_applyCurrent",o="__dz",q="qx.ui.tooltip.Manager",p="__dw",n="tooltip-error",m="singleton";
qx.Class.define(q,{type:m,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,y,this.__dG,this,true);
this.__dw=new qx.event.Timer();
this.__dw.addListener(z,this.__dD,this);
this.__dx=new qx.event.Timer();
this.__dx.addListener(z,this.__dE,this);
this.__dy={left:0,top:0};
},properties:{current:{check:u,nullable:true,apply:r},showInvalidTooltips:{check:t,init:true}},members:{__dy:null,__dx:null,__dw:null,__dz:null,__dA:null,__dB:function(){if(!this.__dz){this.__dz=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__dz;
},__dC:function(){if(!this.__dA){this.__dA=new qx.ui.tooltip.ToolTip().set({appearance:n});
this.__dA.syncAppearance();
}return this.__dA;
},_applyCurrent:function(B,C){if(C&&qx.ui.core.Widget.contains(C,B)){return;
}if(C){if(!C.isDisposed()){C.exclude();
}this.__dw.stop();
this.__dx.stop();
}var E=qx.event.Registration;
var D=document.body;
if(B){this.__dw.startWith(B.getShowTimeout());
E.addListener(D,x,this.__dH,this,true);
E.addListener(D,A,this.__dI,this,true);
E.addListener(D,w,this.__dF,this,true);
}else{E.removeListener(D,x,this.__dH,this,true);
E.removeListener(D,A,this.__dI,this,true);
E.removeListener(D,w,this.__dF,this,true);
}},__dD:function(e){var a=this.getCurrent();

if(a&&!a.isDisposed()){this.__dx.startWith(a.getHideTimeout());

if(a.getPlaceMethod()==v){a.placeToWidget(a.getOpener());
}else{a.placeToPoint(this.__dy);
}a.show();
}this.__dw.stop();
},__dE:function(e){var F=this.getCurrent();

if(F&&!F.isDisposed()){F.exclude();
}this.__dx.stop();
this.resetCurrent();
},__dF:function(e){var G=this.__dy;
G.left=e.getDocumentLeft();
G.top=e.getDocumentTop();
},__dG:function(e){var j=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!j){return;
}var k;
while(j!=null){var k=j.getToolTip();
var l=j.getToolTipText()||null;
var i=j.getToolTipIcon()||null;

if(qx.Class.hasInterface(j.constructor,qx.ui.form.IForm)&&!j.isValid()){var h=j.getInvalidMessage();
}
if(k||l||i||h){break;
}j=j.getLayoutParent();
}
if(!j){return;
}
if(j.isBlockToolTip()){return;
}if(h&&j.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var k=this.__dC().set({label:h});
}else if(!k){var k=this.__dB().set({label:l,icon:i});
}this.setCurrent(k);
k.setOpener(j);
},__dH:function(e){var d=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!d){return;
}var f=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!f){return;
}var g=this.getCurrent();
if(g&&(f==g||qx.ui.core.Widget.contains(g,f))){return;
}if(f&&d&&qx.ui.core.Widget.contains(d,f)){return;
}if(g&&!f){this.setCurrent(null);
}else{this.resetCurrent();
}},__dI:function(e){var b=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!b){return;
}var c=this.getCurrent();
if(c&&c==b.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,y,this.__dG,this,true);
this._disposeObjects(p,s,o);
this.__dy=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(o){arguments.callee.base.call(this);
this.setEnabled(false);

if(o!=null){this.setInterval(o);
}var self=this;
this.__dJ=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(i,j,k){var l=new qx.event.Timer(k);
l.addListener(h,function(e){l.stop();
i.call(j,e);
l.dispose();
j=null;
},j);
l.start();
return l;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__dK:null,__dJ:null,_applyInterval:function(r,s){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(m,n){if(n){window.clearInterval(this.__dK);
this.__dK=null;
}else if(m){this.__dK=window.setInterval(this.__dJ,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(p){this.setInterval(p);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(q){this.stop();
this.startWith(q);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__dK){window.clearInterval(this.__dK);
}this.__dK=this.__dJ=null;
}});
})();
(function(){var c="qx.ui.core.MChildrenHandling";
qx.Mixin.define(c,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(a){return this._indexOf(a);
},add:function(k,l){this._add(k,l);
},addAt:function(h,i,j){this._addAt(h,i,j);
},addBefore:function(m,n,o){this._addBefore(m,n,o);
},addAfter:function(d,e,f){this._addAfter(d,e,f);
},remove:function(b){this._remove(b);
},removeAt:function(p){return this._removeAt(p);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(g){g.getChildren=g._getChildren;
g.hasChildren=g._hasChildren;
g.indexOf=g._indexOf;
g.add=g._add;
g.addAt=g._addAt;
g.addBefore=g._addBefore;
g.addAfter=g._addAfter;
g.remove=g._remove;
g.removeAt=g._removeAt;
g.removeAll=g._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var H="Integer",G="_applyDimension",F="Boolean",E="_applyStretching",D="_applyMargin",C="shorthand",B="_applyAlign",A="allowShrinkY",z="bottom",y="baseline",V="marginBottom",U="qx.ui.core.LayoutItem",T="center",S="marginTop",R="allowGrowX",Q="middle",P="marginLeft",O="allowShrinkX",N="top",M="right",K="marginRight",L="abstract",I="allowGrowY",J="left";
qx.Class.define(U,{type:L,extend:qx.core.Object,properties:{minWidth:{check:H,nullable:true,apply:G,init:null,themeable:true},width:{check:H,nullable:true,apply:G,init:null,themeable:true},maxWidth:{check:H,nullable:true,apply:G,init:null,themeable:true},minHeight:{check:H,nullable:true,apply:G,init:null,themeable:true},height:{check:H,nullable:true,apply:G,init:null,themeable:true},maxHeight:{check:H,nullable:true,apply:G,init:null,themeable:true},allowGrowX:{check:F,apply:E,init:true,themeable:true},allowShrinkX:{check:F,apply:E,init:true,themeable:true},allowGrowY:{check:F,apply:E,init:true,themeable:true},allowShrinkY:{check:F,apply:E,init:true,themeable:true},allowStretchX:{group:[R,O],mode:C,themeable:true},allowStretchY:{group:[I,A],mode:C,themeable:true},marginTop:{check:H,init:0,apply:D,themeable:true},marginRight:{check:H,init:0,apply:D,themeable:true},marginBottom:{check:H,init:0,apply:D,themeable:true},marginLeft:{check:H,init:0,apply:D,themeable:true},margin:{group:[S,K,V,P],mode:C,themeable:true},alignX:{check:[J,T,M],nullable:true,apply:B,themeable:true},alignY:{check:[N,Q,z,y],nullable:true,apply:B,themeable:true}},members:{__dL:null,__dM:null,__dN:null,__dO:null,__dP:null,__dQ:null,__dR:null,getBounds:function(){return this.__dQ||this.__dM||null;
},clearSeparators:function(){},renderSeparator:function(m,n){},renderLayout:function(W,top,X,Y){var ba;
{};
var bb=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bb=this._getHeightForWidth(X);
}
if(bb!=null&&bb!==this.__dL){this.__dL=bb;
qx.ui.core.queue.Layout.add(this);
return null;
}var bd=this.__dM;

if(!bd){bd=this.__dM={};
}var bc={};

if(W!==bd.left||top!==bd.top){bc.position=true;
bd.left=W;
bd.top=top;
}
if(X!==bd.width||Y!==bd.height){bc.size=true;
bd.width=X;
bd.height=Y;
}if(this.__dN){bc.local=true;
delete this.__dN;
}
if(this.__dP){bc.margin=true;
delete this.__dP;
}return bc;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__dN;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__dN=true;
this.__dO=null;
},getSizeHint:function(u){var v=this.__dO;

if(v){return v;
}
if(u===false){return null;
}v=this.__dO=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__dL&&this.getHeight()==null){v.height=this.__dL;
}if(v.minWidth>v.width){v.width=v.minWidth;
}
if(v.maxWidth<v.width){v.width=v.maxWidth;
}
if(!this.getAllowGrowX()){v.maxWidth=v.width;
}
if(!this.getAllowShrinkX()){v.minWidth=v.width;
}if(v.minHeight>v.height){v.height=v.minHeight;
}
if(v.maxHeight<v.height){v.height=v.maxHeight;
}
if(!this.getAllowGrowY()){v.maxHeight=v.height;
}
if(!this.getAllowShrinkY()){v.minHeight=v.height;
}return v;
},_computeSizeHint:function(){var e=this.getMinWidth()||0;
var b=this.getMinHeight()||0;
var f=this.getWidth()||e;
var d=this.getHeight()||b;
var a=this.getMaxWidth()||Infinity;
var c=this.getMaxHeight()||Infinity;
return {minWidth:e,width:f,maxWidth:a,minHeight:b,height:d,maxHeight:c};
},_hasHeightForWidth:function(){var t=this._getLayout();

if(t){return t.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(r){var s=this._getLayout();

if(s&&s.hasHeightForWidth()){return s.getHeightForWidth(r);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__dP=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__dQ;
},setUserBounds:function(g,top,h,i){this.__dQ={left:g,top:top,width:h,height:i};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__dQ;
qx.ui.core.queue.Layout.add(this);
},__dS:{},setLayoutProperties:function(o){if(o==null){return;
}var p=this.__dR;

if(!p){p=this.__dR={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(o);
}for(var q in o){if(o[q]==null){delete p[q];
}else{p[q]=o[q];
}}},getLayoutProperties:function(){return this.__dR||this.__dS;
},clearLayoutProperties:function(){delete this.__dR;
},updateLayoutProperties:function(j){var k=this._getLayout();

if(k){var l;
{};
k.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var w=arguments.callee.base.call(this);
var x=this.__dR;

if(x){w.__dR=qx.lang.Object.clone(x);
}return w;
}},destruct:function(){this.$$parent=this.$$subparent=this.__dR=this.__dM=this.__dQ=this.__dO=null;
}});
})();
(function(){var f="qx.ui.core.DecoratorFactory",e="$$nopool$$";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__dT={};
},statics:{MAX_SIZE:15,__dU:e},members:{__dT:null,getDecoratorElement:function(i){var n=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(i)){var l=i;
var k=qx.theme.manager.Decoration.getInstance().resolve(i);
}else{var l=n.__dU;
k=i;
}var m=this.__dT;

if(m[l]&&m[l].length>0){var j=m[l].pop();
}else{var j=this._createDecoratorElement(k,l);
}j.$$pooled=false;
return j;
},poolDecorator:function(a){if(!a||a.$$pooled){return;
}var d=qx.ui.core.DecoratorFactory;
var b=a.getId();

if(b==d.__dU){a.dispose();
return;
}var c=this.__dT;

if(!c[b]){c[b]=[];
}
if(c[b].length>d.MAX_SIZE){a.dispose();
}else{a.$$pooled=true;
c[b].push(a);
}},_createDecoratorElement:function(o,p){var q=new qx.html.Decorator(o,p);
{};
return q;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var h=this.__dT;

for(var g in h){qx.util.DisposeUtil.disposeArray(h,g);
}}this.__dT=null;
}});
})();
(function(){var cX="px",cW="Boolean",cV="qx.event.type.Mouse",cU="qx.event.type.Drag",cT="visible",cS="qx.event.type.Focus",cR="on",cQ="Integer",cP="excluded",cO="qx.event.type.Data",cA="_applyPadding",cz="qx.event.type.Event",cy="hidden",cx="contextmenu",cw="String",cv="tabIndex",cu="backgroundColor",ct="focused",cs="changeVisibility",cr="mshtml",df="hovered",dg="qx.event.type.KeySequence",dd="qx.client",de="absolute",db="drag",dc="div",cY="disabled",da="move",dh="dragstart",di="qx.dynlocale",cH="dragchange",cG="dragend",cJ="resize",cI="Decorator",cL="zIndex",cK="$$widget",cN="opacity",cM="default",cF="Color",cE="changeToolTipText",bi="beforeContextmenuOpen",bj="_applyNativeContextMenu",bk="__ef",bl="_applyBackgroundColor",bm="_applyFocusable",bn="changeShadow",bo="__ej",bp="__ec",bq="qx.event.type.KeyInput",br="createChildControl",dm="__eb",dl="Font",dk="_applyShadow",dj="_applyEnabled",dr="_applySelectable",dq="Number",dp="_applyKeepActive",dn="__ea",dt="_applyVisibility",ds="repeat",bQ="qxDraggable",bR="syncAppearance",bO="paddingLeft",bP="_applyDroppable",bU="__eh",bV="#",bS="qx.event.type.MouseWheel",bT="_applyCursor",bM="_applyDraggable",bN="changeTextColor",bz="changeContextMenu",by="paddingTop",bB="changeSelectable",bA="hideFocus",bv="none",bu="outline",bx="_applyAppearance",bw="_applyOpacity",bt="url(",bs=")",cb="qx.ui.core.Widget",cc="_applyFont",cd="cursor",ce="qxDroppable",bW="changeZIndex",bX="changeEnabled",bY="changeFont",ca="_applyDecorator",cf="_applyZIndex",cg="_applyTextColor",bJ="qx.ui.menu.Menu",bI="_applyToolTipText",bH="true",bG="widget",bF="changeDecorator",bE="__dV",bD="_applyTabIndex",bC="changeAppearance",bL="shorthand",bK="/",ch="",ci="_applyContextMenu",cj="paddingBottom",ck="__dW",cl="changeNativeContextMenu",cm="qx.ui.tooltip.ToolTip",cn="qxKeepActive",co="_applyKeepFocus",cp="paddingRight",cq="changeBackgroundColor",cD="changeLocale",cC="qxKeepFocus",cB="qx/static/blank.gif";
qx.Class.define(cb,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__dV=this._createContainerElement();
this.__dW=this.__ei();
this.__dV.add(this.__dW);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:cz,disappear:cz,createChildControl:cO,resize:cO,move:cO,syncAppearance:cO,mousemove:cV,mouseover:cV,mouseout:cV,mousedown:cV,mouseup:cV,click:cV,dblclick:cV,contextmenu:cV,beforeContextmenuOpen:cV,mousewheel:bS,keyup:dg,keydown:dg,keypress:dg,keyinput:bq,focus:cS,blur:cS,focusin:cS,focusout:cS,activate:cS,deactivate:cS,capture:cz,losecapture:cz,drop:cU,dragleave:cU,dragover:cU,drag:cU,dragstart:cU,dragend:cU,dragchange:cU,droprequest:cU},properties:{paddingTop:{check:cQ,init:0,apply:cA,themeable:true},paddingRight:{check:cQ,init:0,apply:cA,themeable:true},paddingBottom:{check:cQ,init:0,apply:cA,themeable:true},paddingLeft:{check:cQ,init:0,apply:cA,themeable:true},padding:{group:[by,cp,cj,bO],mode:bL,themeable:true},zIndex:{nullable:true,init:null,apply:cf,event:bW,check:cQ,themeable:true},decorator:{nullable:true,init:null,apply:ca,event:bF,check:cI,themeable:true},shadow:{nullable:true,init:null,apply:dk,event:bn,check:cI,themeable:true},backgroundColor:{nullable:true,check:cF,apply:bl,event:cq,themeable:true},textColor:{nullable:true,check:cF,apply:cg,event:bN,themeable:true,inheritable:true},font:{nullable:true,apply:cc,check:dl,event:bY,themeable:true,inheritable:true,dispose:true},opacity:{check:dq,apply:bw,themeable:true,nullable:true,init:null},cursor:{check:cw,apply:bT,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:cm,nullable:true},toolTipText:{check:cw,nullable:true,event:cE,apply:bI},toolTipIcon:{check:cw,nullable:true,event:cE},blockToolTip:{check:cW,init:false},visibility:{check:[cT,cy,cP],init:cT,apply:dt,event:cs},enabled:{init:true,check:cW,inheritable:true,apply:dj,event:bX},anonymous:{init:false,check:cW},tabIndex:{check:cQ,nullable:true,apply:bD},focusable:{check:cW,init:false,apply:bm},keepFocus:{check:cW,init:false,apply:co},keepActive:{check:cW,init:false,apply:dp},draggable:{check:cW,init:false,apply:bM},droppable:{check:cW,init:false,apply:bP},selectable:{check:cW,init:false,event:bB,apply:dr},contextMenu:{check:bJ,apply:ci,nullable:true,event:bz},nativeContextMenu:{check:cW,init:false,themeable:true,event:cl,apply:bj},appearance:{check:cw,init:bG,apply:bx,event:bC}},statics:{DEBUG:false,getWidgetByElement:function(be){while(be){var bf=be.$$widget;
if(bf!=null){return qx.core.ObjectRegistry.fromHashCode(bf);
}be=be.parentNode;
}return null;
},contains:function(parent,fX){while(fX){if(parent==fX){return true;
}fX=fX.getLayoutParent();
}return false;
},__dX:new qx.ui.core.DecoratorFactory(),__dY:new qx.ui.core.DecoratorFactory()},members:{__dV:null,__dW:null,__ea:null,__eb:null,__ec:null,__ed:null,__ee:null,__ef:null,_getLayout:function(){return this.__ef;
},_setLayout:function(gC){{};

if(this.__ef){this.__ef.connectToWidget(null);
}
if(gC){gC.connectToWidget(this);
}this.__ef=gC;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var eg=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(eg);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(eg);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__eg:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var fj=qx.theme.manager.Decoration.getInstance();
var fl=fj.resolve(a).getInsets();
var fk=fj.resolve(b).getInsets();

if(fl.top!=fk.top||fl.right!=fk.right||fl.bottom!=fk.bottom||fl.left!=fk.left){return true;
}return false;
},renderLayout:function(fy,top,fz,fA){var fJ=arguments.callee.base.call(this,fy,top,fz,fA);
if(!fJ){return;
}var fC=this.getContainerElement();
var content=this.getContentElement();
var fG=fJ.size||this._updateInsets;
var fK=cX;
var fH={};
if(fJ.position){fH.left=fy+fK;
fH.top=top+fK;
}if(fJ.size){fH.width=fz+fK;
fH.height=fA+fK;
}
if(fJ.position||fJ.size){fC.setStyles(fH);
}
if(fG||fJ.local||fJ.margin){var fB=this.getInsets();
var innerWidth=fz-fB.left-fB.right;
var innerHeight=fA-fB.top-fB.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var fE={};

if(this._updateInsets){fE.left=fB.left+fK;
fE.top=fB.top+fK;
}
if(fG){fE.width=innerWidth+fK;
fE.height=innerHeight+fK;
}
if(fG||this._updateInsets){content.setStyles(fE);
}
if(fJ.size){var fI=this.__ec;

if(fI){fI.setStyles({width:fz+cX,height:fA+cX});
}}
if(fJ.size||this._updateInsets){if(this.__ea){this.__ea.resize(fz,fA);
}}
if(fJ.size){if(this.__eb){var fB=this.__eb.getInsets();
var fF=fz+fB.left+fB.right;
var fD=fA+fB.top+fB.bottom;
this.__eb.resize(fF,fD);
}}
if(fG||fJ.local||fJ.margin){if(this.__ef&&this.hasLayoutChildren()){this.__ef.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(fJ.position&&this.hasListener(da)){this.fireDataEvent(da,this.getBounds());
}
if(fJ.size&&this.hasListener(cJ)){this.fireDataEvent(cJ,this.getBounds());
}delete this._updateInsets;
return fJ;
},__eh:null,clearSeparators:function(){var v=this.__eh;

if(!v){return;
}var w=qx.ui.core.Widget.__dX;
var content=this.getContentElement();
var u;

for(var i=0,l=v.length;i<l;i++){u=v[i];
w.poolDecorator(u);
content.remove(u);
}v.length=0;
},renderSeparator:function(E,F){var G=qx.ui.core.Widget.__dX.getDecoratorElement(E);
this.getContentElement().add(G);
G.resize(F.width,F.height);
G.setStyles({left:F.left+cX,top:F.top+cX});
if(!this.__eh){this.__eh=[G];
}else{this.__eh.push(G);
}},_computeSizeHint:function(){var gN=this.getWidth();
var gM=this.getMinWidth();
var gI=this.getMaxWidth();
var gL=this.getHeight();
var gJ=this.getMinHeight();
var gK=this.getMaxHeight();
{};
var gO=this._getContentHint();
var gH=this.getInsets();
var gQ=gH.left+gH.right;
var gP=gH.top+gH.bottom;

if(gN==null){gN=gO.width+gQ;
}
if(gL==null){gL=gO.height+gP;
}
if(gM==null){gM=gQ;

if(gO.minWidth!=null){gM+=gO.minWidth;
}}
if(gJ==null){gJ=gP;

if(gO.minHeight!=null){gJ+=gO.minHeight;
}}
if(gI==null){if(gO.maxWidth==null){gI=Infinity;
}else{gI=gO.maxWidth+gQ;
}}
if(gK==null){if(gO.maxHeight==null){gK=Infinity;
}else{gK=gO.maxHeight+gP;
}}return {width:gN,minWidth:gM,maxWidth:gI,height:gL,minHeight:gJ,maxHeight:gK};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__ef){this.__ef.invalidateLayoutCache();
}},_getContentHint:function(){var dI=this.__ef;

if(dI){if(this.hasLayoutChildren()){var dH;
var dJ=dI.getSizeHint();
{};
return dJ;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(gh){var gl=this.getInsets();
var go=gl.left+gl.right;
var gn=gl.top+gl.bottom;
var gm=gh-go;
var gj=this._getLayout();

if(gj&&gj.hasHeightForWidth()){var gi=gj.getHeightForWidth(gh);
}else{gi=this._getContentHeightForWidth(gm);
}var gk=gi+gn;
return gk;
},_getContentHeightForWidth:function(p){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var j=this.getPaddingRight();
var m=this.getPaddingBottom();
var k=this.getPaddingLeft();

if(this.__ea){var h=this.__ea.getInsets();
{};
top+=h.top;
j+=h.right;
m+=h.bottom;
k+=h.left;
}return {"top":top,"right":j,"bottom":m,"left":k};
},getInnerSize:function(){var K=this.getBounds();

if(!K){return null;
}var J=this.getInsets();
return {width:K.width-J.left-J.right,height:K.height-J.top-J.bottom};
},show:function(){this.setVisibility(cT);
},hide:function(){this.setVisibility(cy);
},exclude:function(){this.setVisibility(cP);
},isVisible:function(){return this.getVisibility()===cT;
},isHidden:function(){return this.getVisibility()!==cT;
},isExcluded:function(){return this.getVisibility()===cP;
},isSeeable:function(){var gc=this.getContainerElement().getDomElement();

if(gc){return gc.offsetWidth>0;
}var gb=this;

do{if(!gb.isVisible()){return false;
}
if(gb.isRootWidget()){return true;
}gb=gb.getLayoutParent();
}while(gb);
return false;
},_createContainerElement:function(){var q=new qx.html.Element(dc);
{};
q.setStyles({"position":de,"zIndex":0});
q.setAttribute(cK,this.toHashCode());
{};
return q;
},__ei:function(){var fL=this._createContentElement();
{};
fL.setStyles({"position":de,"zIndex":10});
return fL;
},_createContentElement:function(){var ff=new qx.html.Element(dc);
ff.setStyles({"overflowX":cy,"overflowY":cy});
return ff;
},getContainerElement:function(){return this.__dV;
},getContentElement:function(){return this.__dW;
},getDecoratorElement:function(){return this.__ea||null;
},getShadowElement:function(){return this.__eb||null;
},__ej:null,getLayoutChildren:function(){var dR=this.__ej;

if(!dR){return this.__ek;
}var dS;

for(var i=0,l=dR.length;i<l;i++){var dQ=dR[i];

if(dQ.hasUserBounds()||dQ.isExcluded()){if(dS==null){dS=dR.concat();
}qx.lang.Array.remove(dS,dQ);
}}return dS||dR;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var fm=this.__ef;

if(fm){fm.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var gf=this.__ej;

if(!gf){return false;
}var gg;

for(var i=0,l=gf.length;i<l;i++){gg=gf[i];

if(!gg.hasUserBounds()&&!gg.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__ek:[],_getChildren:function(){return this.__ej||this.__ek;
},_indexOf:function(gv){var gw=this.__ej;

if(!gw){return -1;
}return gw.indexOf(gv);
},_hasChildren:function(){var dX=this.__ej;
return dX!=null&&(!!dX[0]);
},addChildrenToQueue:function(eK){var eL=this.__ej;

if(!eL){return;
}var eM;

for(var i=0,l=eL.length;i<l;i++){eM=eL[i];
eK[eM.$$hash]=eM;
eM.addChildrenToQueue(eK);
}},_add:function(ej,ek){if(ej.getLayoutParent()==this){qx.lang.Array.remove(this.__ej,ej);
}
if(this.__ej){this.__ej.push(ej);
}else{this.__ej=[ej];
}this.__el(ej,ek);
},_addAt:function(gD,gE,gF){if(!this.__ej){this.__ej=[];
}if(gD.getLayoutParent()==this){qx.lang.Array.remove(this.__ej,gD);
}var gG=this.__ej[gE];

if(gG===gD){return gD.setLayoutProperties(gF);
}
if(gG){qx.lang.Array.insertBefore(this.__ej,gD,gG);
}else{this.__ej.push(gD);
}this.__el(gD,gF);
},_addBefore:function(ed,ee,ef){{};

if(ed==ee){return;
}
if(!this.__ej){this.__ej=[];
}if(ed.getLayoutParent()==this){qx.lang.Array.remove(this.__ej,ed);
}qx.lang.Array.insertBefore(this.__ej,ed,ee);
this.__el(ed,ef);
},_addAfter:function(gR,gS,gT){{};

if(gR==gS){return;
}
if(!this.__ej){this.__ej=[];
}if(gR.getLayoutParent()==this){qx.lang.Array.remove(this.__ej,gR);
}qx.lang.Array.insertAfter(this.__ej,gR,gS);
this.__el(gR,gT);
},_remove:function(ec){if(!this.__ej){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__ej,ec);
this.__em(ec);
},_removeAt:function(c){if(!this.__ej){throw new Error("This widget has no children!");
}var d=this.__ej[c];
qx.lang.Array.removeAt(this.__ej,c);
this.__em(d);
return d;
},_removeAll:function(){if(!this.__ej){return;
}var fx=this.__ej.concat();
this.__ej.length=0;

for(var i=fx.length-1;i>=0;i--){this.__em(fx[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__el:function(gU,gV){{};
var parent=gU.getLayoutParent();

if(parent&&parent!=this){parent._remove(gU);
}gU.setLayoutParent(this);
if(gV){gU.setLayoutProperties(gV);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gU);
}},__em:function(x){{};

if(x.getLayoutParent()!==this){throw new Error("Remove Error: "+x+" is not a child of this widget!");
}x.setLayoutParent(null);
if(this.__ef){this.__ef.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(x);
}},capture:function(fM){this.getContainerElement().capture(fM);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(dK,dL,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__ec){return;
}var P=this.__ec=new qx.html.Element;
{};
P.setStyles({position:de,top:0,left:0,zIndex:7});
var Q=this.getBounds();

if(Q){this.__ec.setStyles({width:Q.width+cX,height:Q.height+cX});
}if(qx.core.Variant.isSet(dd,cr)){P.setStyles({backgroundImage:bt+qx.util.ResourceManager.getInstance().toUri(cB)+bs,backgroundRepeat:ds});
}this.getContainerElement().add(P);
},_applyDecorator:function(dv,dw){{};
var dA=qx.ui.core.Widget.__dX;
var dy=this.getContainerElement();
if(!this.__ec&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(dw){dy.remove(this.__ea);
dA.poolDecorator(this.__ea);
}if(dv){var dz=this.__ea=dA.getDecoratorElement(dv);
dz.setStyle(cL,5);
var dx=this.getBackgroundColor();
dz.tint(dx);
dy.add(dz);
}else{delete this.__ea;
this._applyBackgroundColor(this.getBackgroundColor());
}if(dv&&!dw&&dx){this.getContainerElement().setStyle(cu,null);
}if(this.__eg(dw,dv)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(dv){var dB=this.getBounds();

if(dB){dz.resize(dB.width,dB.height);
this.__ec&&
this.__ec.setStyles({width:dB.width+cX,height:dB.height+cX});
}}},_applyShadow:function(er,es){var ez=qx.ui.core.Widget.__dY;
var eu=this.getContainerElement();
if(es){eu.remove(this.__eb);
ez.poolDecorator(this.__eb);
}if(er){var ew=this.__eb=ez.getDecoratorElement(er);
eu.add(ew);
var ey=ew.getInsets();
ew.setStyles({left:(-ey.left)+cX,top:(-ey.top)+cX});
var ex=this.getBounds();

if(ex){var ev=ex.width+ey.left+ey.right;
var et=ex.height+ey.top+ey.bottom;
ew.resize(ev,et);
}ew.tint(null);
}else{delete this.__eb;
}},_applyToolTipText:function(fq,fr){if(qx.core.Variant.isSet(di,cR)){if(this.__ee){return;
}var fs=qx.locale.Manager.getInstance();
this.__ee=fs.addListener(cD,function(){if(fq&&fq.translate){this.setToolTipText(fq.translate());
}},this);
}},_applyTextColor:function(gW,gX){},_applyZIndex:function(bc,bd){this.getContainerElement().setStyle(cL,bc==null?0:bc);
},_applyVisibility:function(dY,ea){var eb=this.getContainerElement();

if(dY===cT){eb.show();
}else{eb.hide();
}var parent=this.$$parent;

if(parent&&(ea==null||dY==null||ea===cP||dY===cP)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(X,Y){this.getContainerElement().setStyle(cN,X==1?null:X);
if(qx.core.Variant.isSet(dd,cr)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var ba=(X==1||X==null)?null:0.99;
this.getContentElement().setStyle(cN,ba);
}}},_applyCursor:function(fP,fQ){if(fP==null&&!this.isSelectable()){fP=cM;
}this.getContainerElement().setStyle(cd,fP,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(gx,gy){var gz=this.getBackgroundColor();
var gB=this.getContainerElement();

if(this.__ea){this.__ea.tint(gz);
gB.setStyle(cu,null);
}else{var gA=qx.theme.manager.Color.getInstance().resolve(gz);
gB.setStyle(cu,gA);
}},_applyFont:function(dV,dW){},__en:null,$$stateChanges:null,_forwardStates:null,hasState:function(n){var o=this.__en;
return o&&o[n];
},addState:function(eC){var eD=this.__en;

if(!eD){eD=this.__en={};
}
if(eD[eC]){return;
}this.__en[eC]=true;
if(eC===df){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var eG=this.__eq;

if(forward&&forward[eC]&&eG){var eE;

for(var eF in eG){eE=eG[eF];

if(eE instanceof qx.ui.core.Widget){eG[eF].addState(eC);
}}}},removeState:function(y){var z=this.__en;

if(!z||!z[y]){return;
}delete this.__en[y];
if(y===df){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var C=this.__eq;

if(forward&&forward[y]&&C){for(var B in C){var A=C[B];

if(A instanceof qx.ui.core.Widget){A.removeState(y);
}}}},replaceState:function(gp,gq){var gr=this.__en;

if(!gr){gr=this.__en={};
}
if(!gr[gq]){gr[gq]=true;
}
if(gr[gp]){delete gr[gp];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gu=this.__eq;

if(forward&&forward[gq]&&gu){for(var gt in gu){var gs=gu[gt];

if(gs instanceof qx.ui.core.Widget){gs.replaceState(gp,gq);
}}}},__eo:null,__ep:null,syncAppearance:function(){var eW=this.__en;
var eV=this.__eo;
var eX=qx.theme.manager.Appearance.getInstance();
var eT=qx.core.Property.$$method.setThemed;
var fc=qx.core.Property.$$method.resetThemed;
if(this.__ep){delete this.__ep;
if(eV){var eS=eX.styleFrom(eV,eW,null,this.getAppearance());
if(eS){eV=null;
}}}if(!eV){var eU=this;
var fb=[];

do{fb.push(eU.$$subcontrol||eU.getAppearance());
}while(eU=eU.$$subparent);
eV=this.__eo=fb.reverse().join(bK).replace(/#[0-9]+/g,ch);
}var eY=eX.styleFrom(eV,eW,null,this.getAppearance());

if(eY){var fa;

if(eS){for(var fa in eS){if(eY[fa]===undefined){this[fc[fa]]();
}}}{};
for(var fa in eY){eY[fa]===undefined?this[fc[fa]]():this[eT[fa]](eY[fa]);
}}else if(eS){for(var fa in eS){this[fc[fa]]();
}}this.fireDataEvent(bR,this.__en);
},_applyAppearance:function(f,g){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__ed){qx.ui.core.queue.Appearance.add(this);
this.__ed=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ep=true;
qx.ui.core.queue.Appearance.add(this);
var fi=this.__eq;

if(fi){var fg;

for(var fh in fi){fg=fi[fh];

if(fg instanceof qx.ui.core.Widget){fg.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fn=this;

while(fn.getAnonymous()){fn=fn.getLayoutParent();

if(!fn){return null;
}}return fn;
},getFocusTarget:function(){var du=this;

if(!du.getEnabled()){return null;
}
while(du.getAnonymous()||!du.getFocusable()){du=du.getLayoutParent();

if(!du||!du.getEnabled()){return null;
}}return du;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(dC,dD){var dE=this.getFocusElement();
if(dC){var dF=this.getTabIndex();

if(dF==null){dF=1;
}dE.setAttribute(cv,dF);
if(qx.core.Variant.isSet(dd,cr)){dE.setAttribute(bA,bH);
}else{dE.setStyle(bu,bv);
}}else{if(dE.isNativelyFocusable()){dE.setAttribute(cv,-1);
}else if(dD){dE.setAttribute(cv,null);
}}},_applyKeepFocus:function(gd){var ge=this.getFocusElement();
ge.setAttribute(cC,gd?cR:null);
},_applyKeepActive:function(L){var M=this.getContainerElement();
M.setAttribute(cn,L?cR:null);
},_applyTabIndex:function(bb){if(bb==null){bb=1;
}else if(bb<1||bb>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&bb!=null){this.getFocusElement().setAttribute(cv,bb);
}},_applySelectable:function(U){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(U);
this.getContentElement().setSelectable(U);
},_applyEnabled:function(fY,ga){if(fY===false){this.addState(cY);
this.removeState(df);
if(this.isFocusable()){this.removeState(ct);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cY);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(H,I,name){},_applyContextMenu:function(dO,dP){if(dP){dP.removeState(cx);

if(dP.getOpener()==this){dP.resetOpener();
}
if(!dO){this.removeListener(cx,this._onContextMenuOpen);
dP.removeListener(cs,this._onBeforeContextMenuOpen,this);
}}
if(dO){dO.setOpener(this);
dO.addState(cx);

if(!dP){this.addListener(cx,this._onContextMenuOpen);
dO.addListener(cs,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==cT&&this.hasListener(bi)){this.fireDataEvent(bi,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(V,W){if(!this.isEnabled()&&V===true){V=false;
}qx.ui.core.DragDropCursor.getInstance();
if(V){this.addListener(dh,this._onDragStart);
this.addListener(db,this._onDrag);
this.addListener(cG,this._onDragEnd);
this.addListener(cH,this._onDragChange);
}else{this.removeListener(dh,this._onDragStart);
this.removeListener(db,this._onDrag);
this.removeListener(cG,this._onDragEnd);
this.removeListener(cH,this._onDragChange);
}this.getContainerElement().setAttribute(bQ,V?cR:null);
},_applyDroppable:function(dT,dU){if(!this.isEnabled()&&dT===true){dT=false;
}this.getContainerElement().setAttribute(ce,dT?cR:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(cM);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var fN=qx.ui.core.DragDropCursor.getInstance();
var fO=e.getCurrentAction();
fO?fN.setAction(fO):fN.resetAction();
},visualizeFocus:function(){this.addState(ct);
},visualizeBlur:function(){this.removeState(ct);
},scrollChildIntoView:function(ft,fu,fv,fw){this.scrollChildIntoViewX(ft,fu,fw);
this.scrollChildIntoViewY(ft,fv,fw);
},scrollChildIntoViewX:function(eH,eI,eJ){this.getContentElement().scrollChildIntoViewX(eH.getContainerElement(),eI,eJ);
},scrollChildIntoViewY:function(r,s,t){this.getContentElement().scrollChildIntoViewY(r.getContainerElement(),s,t);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(R){if(!this.__eq){return false;
}return !!this.__eq[R];
},__eq:null,_getCreatedChildControls:function(){return this.__eq;
},getChildControl:function(eN,eO){if(!this.__eq){if(eO){return null;
}this.__eq={};
}var eP=this.__eq[eN];

if(eP){return eP;
}
if(eO===true){return null;
}return this._createChildControl(eN);
},_showChildControl:function(dM){var dN=this.getChildControl(dM);
dN.show();
return dN;
},_excludeChildControl:function(eh){var ei=this.getChildControl(eh,true);

if(ei){ei.exclude();
}},_isChildControlVisible:function(fo){var fp=this.getChildControl(fo,true);

if(fp){return fp.isVisible();
}return false;
},_createChildControl:function(em){if(!this.__eq){this.__eq={};
}else if(this.__eq[em]){throw new Error("Child control '"+em+"' already created!");
}var eq=em.indexOf(bV);

if(eq==-1){var en=this._createChildControlImpl(em);
}else{var en=this._createChildControlImpl(em.substring(0,eq));
}
if(!en){throw new Error("Unsupported control: "+em);
}en.$$subcontrol=em;
en.$$subparent=this;
var eo=this.__en;
var forward=this._forwardStates;

if(eo&&forward&&en instanceof qx.ui.core.Widget){for(var ep in eo){if(forward[ep]){en.addState(ep);
}}}this.fireDataEvent(br,en);
return this.__eq[em]=en;
},_createChildControlImpl:function(dG){return null;
},_disposeChildControls:function(){var fW=this.__eq;

if(!fW){return;
}var fU=qx.ui.core.Widget;

for(var fV in fW){var fT=fW[fV];

if(!fU.contains(this,fT)){fT.destroy();
}else{fT.dispose();
}}delete this.__eq;
},_findTopControl:function(){var D=this;

while(D){if(!D.$$subparent){return D;
}D=D.$$subparent;
}return null;
},getContainerLocation:function(N){var O=this.getContainerElement().getDomElement();
return O?qx.bom.element.Location.get(O,N):null;
},getContentLocation:function(eA){var eB=this.getContentElement().getDomElement();
return eB?qx.bom.element.Location.get(eB,eA):null;
},setDomLeft:function(bg){var bh=this.getContainerElement().getDomElement();

if(bh){bh.style.left=bg+cX;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(S){var T=this.getContainerElement().getDomElement();

if(T){T.style.top=S+cX;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(fR,top){var fS=this.getContainerElement().getDomElement();

if(fS){fS.style.left=fR+cX;
fS.style.top=top+cX;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fd=arguments.callee.base.call(this);

if(this.getChildren){var fe=this.getChildren();

for(var i=0,l=fe.length;i<l;i++){fd.add(fe[i].clone());
}}return fd;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(di,cR)){if(this.__ee){qx.locale.Manager.getInstance().removeListenerById(this.__ee);
}}this.getContainerElement().setAttribute(cK,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var eR=qx.ui.core.Widget;
var eQ=this.getContainerElement();

if(this.__ea){eQ.remove(this.__ea);
eR.__dX.poolDecorator(this.__ea);
}
if(this.__eb){eQ.remove(this.__eb);
eR.__dY.poolDecorator(this.__eb);
}this.clearSeparators();
this.__ea=this.__eb=this.__eh=null;
}else{this._disposeArray(bU);
this._disposeObjects(dn,dm);
}this._disposeArray(bo);
this.__en=this.__eq=null;
this._disposeObjects(bk,bE,ck,bp);
}});
})();
(function(){var g="qx.event.type.Data",f="qx.ui.container.Composite",e="addChildWidget",d="removeChildWidget";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this._setLayout(a);
}},events:{addChildWidget:g,removeChildWidget:g},members:{_afterAddChild:function(i){this.fireNonBubblingEvent(e,qx.event.type.Data,[i]);
},_afterRemoveChild:function(h){this.fireNonBubblingEvent(d,qx.event.type.Data,[h]);
}},defer:function(b,c){qx.ui.core.MChildrenHandling.remap(c);
qx.ui.core.MLayoutHandling.remap(c);
}});
})();
(function(){var t="keep-align",s="interval",r="Integer",q="direct",p="best-fit",o="mouse",n="bottom-left",m="disappear",l="Boolean",k="bottom-right",H="widget",G="qx.ui.core.MPlacement",F="left-top",E="offsetRight",D="shorthand",C="offsetLeft",B="top-left",A="appear",z="offsetBottom",y="top-right",w="offsetTop",x="right-bottom",u="right-top",v="left-bottom";
qx.Mixin.define(G,{properties:{position:{check:[B,y,n,k,F,v,u,x],init:n,themeable:true},placeMethod:{check:[H,o],init:o,themeable:true},domMove:{check:l,init:false},placementModeX:{check:[q,t,p],init:t,themeable:true},placementModeY:{check:[q,t,p],init:t,themeable:true},offsetLeft:{check:r,init:0,themeable:true},offsetTop:{check:r,init:0,themeable:true},offsetRight:{check:r,init:0,themeable:true},offsetBottom:{check:r,init:0,themeable:true},offset:{group:[w,E,z,C],mode:D,themeable:true}},members:{__er:null,getLayoutLocation:function(a){var d,c,e,top;
c=a.getBounds();
e=c.left;
top=c.top;
var f=c;
a=a.getLayoutParent();

while(a&&!a.isRootWidget()){c=a.getBounds();
e+=c.left;
top+=c.top;
d=a.getInsets();
e+=d.left;
top+=d.top;
a=a.getLayoutParent();
}if(a.isRootWidget()){var b=a.getContainerLocation();

if(b){e+=b.left;
top+=b.top;
}}return {left:e,top:top,right:e+f.width,bottom:top+f.height};
},moveTo:function(g,top){if(this.getDomMove()){this.setDomPosition(g,top);
}else{this.setLayoutProperties({left:g,top:top});
}},placeToWidget:function(P,Q){if(Q){this.__er=qx.lang.Function.bind(this.placeToWidget,this,P,false);
qx.event.Idle.getInstance().addListener(s,this.__er);
this.addListener(m,function(){if(this.__er){qx.event.Idle.getInstance().removeListener(s,this.__er);
this.__er=null;
}},this);
}var R=P.getContainerLocation()||this.getLayoutLocation(P);
this.__et(R);
},placeToMouse:function(event){var j=event.getDocumentLeft();
var top=event.getDocumentTop();
var i={left:j,top:top,right:j,bottom:top};
this.__et(i);
},placeToElement:function(K,L){var location=qx.bom.element.Location.get(K);
var M={left:location.left,top:location.top,right:location.left+K.offsetWidth,bottom:location.top+K.offsetHeight};
if(L){this.__er=qx.lang.Function.bind(this.placeToElement,this,K,false);
qx.event.Idle.getInstance().addListener(s,this.__er);
this.addListener(m,function(){if(this.__er){qx.event.Idle.getInstance().removeListener(s,this.__er);
this.__er=null;
}},this);
}this.__et(M);
},placeToPoint:function(S){var T={left:S.left,top:S.top,right:S.left,bottom:S.top};
this.__et(T);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__es:function(U){var V=null;

if(this._computePlacementSize){var V=this._computePlacementSize();
}else if(this.isVisible()){var V=this.getBounds();
}
if(V==null){this.addListenerOnce(A,function(){this.__es(U);
},this);
}else{U.call(this,V);
}},__et:function(h){this.__es(function(N){var O=qx.util.placement.Placement.compute(N,this.getLayoutParent().getBounds(),h,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(O.left,O.top);
});
},setSmart:function(W){{};
var X=W?t:q;
this.set({placementModeX:X,placementModeY:X});
},getSmart:function(){{};
var I=this.getPlacementModeX()==t?true:false;
var J=this.getPlacementModeY()==t?true:false;
return I&&J;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__er){qx.event.Idle.getInstance().removeListener(s,this.__er);
}}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(i){arguments.callee.base.call(this,i);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(f,g){arguments.callee.base.call(this,f,g);
var h=qx.ui.popup.Manager.getInstance();
f===d?h.add(this):h.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(r,s){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(r!=null){this.setLabel(r);
}
if(s!=null){this.setIcon(s);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(m){var n;

switch(m){case l:n=new qx.ui.basic.Atom;
this._add(n);
break;
}return n||arguments.callee.base.call(this,m);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(w,x){var y=this.getChildControl(l);
w==null?y.resetIcon:y.setIcon(w);
},_applyLabel:function(t,u){var v=this.getChildControl(l);
t==null?v.resetLabel():v.setLabel(t);
},_applyRich:function(o,p){var q=this.getChildControl(l);
q.setRich(o);
}}});
})();
(function(){var w="qx.ui.core.queue.Layout",v="layout";
qx.Class.define(w,{statics:{__eu:{},remove:function(l){delete this.__eu[l.$$hash];
},add:function(m){this.__eu[m.$$hash]=m;
qx.ui.core.queue.Manager.scheduleFlush(v);
},flush:function(){var a=this.__ex();
for(var i=a.length-1;i>=0;i--){var b=a[i];
if(b.hasValidLayout()){continue;
}if(b.isRootWidget()&&!b.hasUserBounds()){var d=b.getSizeHint();
b.renderLayout(0,0,d.width,d.height);
}else{var c=b.getBounds();
b.renderLayout(c.left,c.top,c.width,c.height);
}}},getNestingLevel:function(x){var y=this.__ew;
var A=0;
var parent=x;
while(true){if(y[parent.$$hash]!=null){A+=y[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
A+=1;
}var z=A;

while(x&&x!==parent){y[x.$$hash]=z--;
x=x.$$parent;
}return A;
},__ev:function(){var k=qx.ui.core.queue.Visibility;
this.__ew={};
var j=[];
var h=this.__eu;
var e,g;

for(var f in h){e=h[f];

if(k.isVisible(e)){g=this.getNestingLevel(e);
if(!j[g]){j[g]={};
}j[g][f]=e;
delete h[f];
}}return j;
},__ex:function(){var q=[];
var s=this.__ev();

for(var p=s.length-1;p>=0;p--){if(!s[p]){continue;
}
for(var o in s[p]){var n=s[p][o];
if(p==0||n.isRootWidget()||n.hasUserBounds()){q.push(n);
n.invalidateLayoutCache();
continue;
}var u=n.getSizeHint(false);

if(u){n.invalidateLayoutCache();
var r=n.getSizeHint();
var t=(!n.getBounds()||u.minWidth!==r.minWidth||u.width!==r.width||u.maxWidth!==r.maxWidth||u.minHeight!==r.minHeight||u.height!==r.height||u.maxHeight!==r.maxHeight);
}else{t=true;
}
if(t){var parent=n.getLayoutParent();

if(!s[p-1]){s[p-1]={};
}s[p-1][parent.$$hash]=parent;
}else{q.push(n);
}}}return q;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this.__ey=k;
this.__ez=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__ey:null,__ez:null,canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(c,d,e){}},destruct:function(){this.__ey=this.__ez=null;
},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__eA={};
this.__eB=qx.lang.Function.bind(this.__eF,this);
this.__eC=false;
},members:{__eD:null,__eE:null,__eA:null,__eC:null,__eB:null,schedule:function(e){if(this.__eD==null){this.__eD=window.setTimeout(this.__eB,0);
}var f=e.toHashCode();
if(this.__eE&&this.__eE[f]){return;
}this.__eA[f]=e;
this.__eC=true;
},cancel:function(c){var d=c.toHashCode();
if(this.__eE&&this.__eE[d]){this.__eE[d]=null;
return;
}delete this.__eA[d];
if(qx.lang.Object.isEmpty(this.__eA)&&this.__eD!=null){window.clearTimeout(this.__eD);
this.__eD=null;
}},__eF:qx.event.GlobalError.observeMethod(function(){this.__eD=null;
while(this.__eC){this.__eE=qx.lang.Object.clone(this.__eA);
this.__eA={};
this.__eC=false;

for(var h in this.__eE){var g=this.__eE[h];

if(g){this.__eE[h]=null;
g.call();
}}}this.__eE=null;
})},destruct:function(){if(this.__eD!=null){window.clearTimeout(this.__eD);
}this.__eB=this.__eA=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){arguments.callee.base.call(this);
this.__eG=b;
this.__eH=c||null;
this.__eI=qx.util.DeferredCallManager.getInstance();
},members:{__eG:null,__eH:null,__eI:null,cancel:function(){this.__eI.cancel(this);
},schedule:function(){this.__eI.schedule(this);
},call:function(){this.__eH?this.__eG.apply(this.__eH):this.__eG();
}},destruct:function(d,e){this.cancel();
this.__eH=this.__eG=this.__eI=null;
}});
})();
(function(){var bT="element",bS="qx.client",bR="div",bQ="",bP="mshtml",bO="none",bN="scroll",bM="qx.html.Element",bL="|capture|",bK="activate",ck="blur",cj="deactivate",ci="userSelect",ch="capture",cg="visible",cf="releaseCapture",ce="|bubble|",cd="qxSelectable",cc="tabIndex",cb="off",bY="focus",ca="normal",bW="webkit",bX="hidden",bU="on",bV="__fg";
qx.Class.define(bM,{extend:qx.core.Object,construct:function(w){arguments.callee.base.call(this);
this.__eJ=w||bR;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__eK:{},_scheduleFlush:function(cm){qx.html.Element.__fs.schedule();
},flush:function(){var cO;
{};
var cG=this.__eL();
var cF=cG.getFocus();

if(cF&&this.__eP(cF)){cG.blur(cF);
}var cV=cG.getActive();

if(cV&&this.__eP(cV)){qx.bom.Element.deactivate(cV);
}var cJ=this.__eN();

if(cJ&&this.__eP(cJ)){qx.bom.Element.releaseCapture(cJ);
}var cP=[];
var cQ=this._modified;

for(var cN in cQ){cO=cQ[cN];
if(cO.__fk()){if(cO.__eQ&&qx.dom.Hierarchy.isRendered(cO.__eQ)){cP.push(cO);
}else{{};
cO.__fj();
}delete cQ[cN];
}}
for(var i=0,l=cP.length;i<l;i++){cO=cP[i];
{};
cO.__fj();
}var cL=this._visibility;

for(var cN in cL){cO=cL[cN];
{};
cO.__eQ.style.display=cO.__eT?bQ:bO;
if(qx.core.Variant.isSet(bS,bP)){if(!(document.documentMode>=8)){cO.__eQ.style.visibility=cO.__eT?cg:bX;
}}delete cL[cN];
}var scroll=this._scroll;

for(var cN in scroll){cO=scroll[cN];
var cW=cO.__eQ;

if(cW&&cW.offsetWidth){var cI=true;
if(cO.__eW!=null){cO.__eQ.scrollLeft=cO.__eW;
delete cO.__eW;
}if(cO.__eX!=null){cO.__eQ.scrollTop=cO.__eX;
delete cO.__eX;
}var cS=cO.__eU;

if(cS!=null){var cM=cS.element.getDomElement();

if(cM&&cM.offsetWidth){qx.bom.element.Scroll.intoViewX(cM,cW,cS.align);
delete cO.__eU;
}else{cI=false;
}}var cT=cO.__eV;

if(cT!=null){var cM=cT.element.getDomElement();

if(cM&&cM.offsetWidth){qx.bom.element.Scroll.intoViewY(cM,cW,cT.align);
delete cO.__eV;
}else{cI=false;
}}if(cI){delete scroll[cN];
}}}var cH={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var cU=this._actions[i];
var cR=cU.element.__eQ;

if(!cR||!cH[cU.type]&&!cU.element.__fk()){continue;
}var cK=cU.args;
cK.unshift(cR);
qx.bom.Element[cU.type].apply(qx.bom.Element,cK);
}this._actions=[];
for(var cN in this.__eK){var cE=this.__eK[cN];
var cW=cE.element.__eQ;

if(cW){qx.bom.Selection.set(cW,cE.start,cE.end);
delete this.__eK[cN];
}}qx.event.handler.Appear.refresh();
},__eL:function(){if(!this.__eM){var bJ=qx.event.Registration.getManager(window);
this.__eM=bJ.getHandler(qx.event.handler.Focus);
}return this.__eM;
},__eN:function(){if(!this.__eO){var di=qx.event.Registration.getManager(window);
this.__eO=di.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__eO.getCaptureElement();
},__eP:function(dJ){var dK=qx.core.ObjectRegistry.fromHashCode(dJ.$$element);
return dK&&!dK.__fk();
}},members:{__eJ:null,__eQ:null,__eR:false,__eS:true,__eT:true,__eU:null,__eV:null,__eW:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:null,__fd:null,__fe:null,__ff:null,__fg:null,__fh:null,__fi:null,_scheduleChildrenUpdate:function(){if(this.__fh){return;
}this.__fh=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
},_createDomElement:function(){return qx.bom.Element.create(this.__eJ);
},__fj:function(){{};
var bk=this.__fg;

if(bk){var length=bk.length;
var bl;

for(var i=0;i<length;i++){bl=bk[i];

if(bl.__eT&&bl.__eS&&!bl.__eQ){bl.__fj();
}}}
if(!this.__eQ){this.__eQ=this._createDomElement();
this.__eQ.$$element=this.$$hash;
this._copyData(false);

if(bk&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__fh){this._syncChildren();
}}delete this.__fh;
},_insertChildren:function(){var L=this.__fg;
var length=L.length;
var N;

if(length>2){var M=document.createDocumentFragment();

for(var i=0;i<length;i++){N=L[i];

if(N.__eQ&&N.__eS){M.appendChild(N.__eQ);
}}this.__eQ.appendChild(M);
}else{var M=this.__eQ;

for(var i=0;i<length;i++){N=L[i];

if(N.__eQ&&N.__eS){M.appendChild(N.__eQ);
}}}},_syncChildren:function(){var f;
var m=qx.core.ObjectRegistry;
var a=this.__fg;
var j=a.length;
var b;
var g;
var d=this.__eQ;
var h=d.childNodes;
var c=0;
var k;
{};
for(var i=h.length-1;i>=0;i--){k=h[i];
g=m.fromHashCode(k.$$element);

if(!g||!g.__eS||g.__fi!==this){d.removeChild(k);
{};
}}for(var i=0;i<j;i++){b=a[i];
if(b.__eS){g=b.__eQ;
k=h[c];

if(!g){continue;
}if(g!=k){if(k){d.insertBefore(g,k);
}else{d.appendChild(g);
}{};
}c++;
}}{};
},_copyData:function(cx){var cB=this.__eQ;
var cA=this.__fd;

if(cA){var cy=qx.bom.element.Attribute;

for(var cC in cA){cy.set(cB,cC,cA[cC]);
}}var cA=this.__fc;

if(cA){var cz=qx.bom.element.Style;

if(cx){cz.setStyles(cB,cA);
}else{cz.setCss(cB,cz.compile(cA));
}}var cA=this.__fe;

if(cA){for(var cC in cA){this._applyProperty(cC,cA[cC]);
}}var cA=this.__ff;

if(cA){qx.event.Registration.getManager(cB).importListeners(cB,cA);
delete this.__ff;
}},_syncData:function(){var dD=this.__eQ;
var dC=qx.bom.element.Attribute;
var dA=qx.bom.element.Style;
var dB=this.__fa;

if(dB){var dG=this.__fd;

if(dG){var dE;

for(var dF in dB){dE=dG[dF];

if(dE!==undefined){dC.set(dD,dF,dE);
}else{dC.reset(dD,dF);
}}}this.__fa=null;
}var dB=this.__eY;

if(dB){var dG=this.__fc;

if(dG){var dz={};

for(var dF in dB){dz[dF]=dG[dF];
}dA.setStyles(dD,dz);
}this.__eY=null;
}var dB=this.__fb;

if(dB){var dG=this.__fe;

if(dG){var dE;

for(var dF in dB){this._applyProperty(dF,dG[dF]);
}}this.__fb=null;
}},__fk:function(){var H=this;
while(H){if(H.__eR){return true;
}
if(!H.__eS||!H.__eT){return false;
}H=H.__fi;
}return false;
},__fl:function(Q){if(Q.__fi===this){throw new Error("Child is already in: "+Q);
}
if(Q.__eR){throw new Error("Root elements could not be inserted into other ones.");
}if(Q.__fi){Q.__fi.remove(Q);
}Q.__fi=this;
if(!this.__fg){this.__fg=[];
}if(this.__eQ){this._scheduleChildrenUpdate();
}},__fm:function(bH){if(bH.__fi!==this){throw new Error("Has no child: "+bH);
}if(this.__eQ){this._scheduleChildrenUpdate();
}delete bH.__fi;
},__fn:function(cD){if(cD.__fi!==this){throw new Error("Has no child: "+cD);
}if(this.__eQ){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__fg||null;
},getChild:function(bh){var bi=this.__fg;
return bi&&bi[bh]||null;
},hasChildren:function(){var dh=this.__fg;
return dh&&dh[0]!==undefined;
},indexOf:function(A){var B=this.__fg;
return B?B.indexOf(A):-1;
},hasChild:function(bw){var bx=this.__fg;
return bx&&bx.indexOf(bw)!==-1;
},add:function(v){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__fl(arguments[i]);
}this.__fg.push.apply(this.__fg,arguments);
}else{this.__fl(v);
this.__fg.push(v);
}return this;
},addAt:function(p,q){this.__fl(p);
qx.lang.Array.insertAt(this.__fg,p,q);
return this;
},remove:function(bt){var bu=this.__fg;

if(!bu){return;
}
if(arguments[1]){var bv;

for(var i=0,l=arguments.length;i<l;i++){bv=arguments[i];
this.__fm(bv);
qx.lang.Array.remove(bu,bv);
}}else{this.__fm(bt);
qx.lang.Array.remove(bu,bt);
}return this;
},removeAt:function(cX){var cY=this.__fg;

if(!cY){throw new Error("Has no children!");
}var da=cY[cX];

if(!da){throw new Error("Has no child at this position!");
}this.__fm(da);
qx.lang.Array.removeAt(this.__fg,cX);
return this;
},removeAll:function(){var u=this.__fg;

if(u){for(var i=0,l=u.length;i<l;i++){this.__fm(u[i]);
}u.length=0;
}return this;
},getParent:function(){return this.__fi||null;
},insertInto:function(parent,bG){parent.__fl(this);

if(bG==null){parent.__fg.push(this);
}else{qx.lang.Array.insertAt(this.__fg,this,bG);
}return this;
},insertBefore:function(o){var parent=o.__fi;
parent.__fl(this);
qx.lang.Array.insertBefore(parent.__fg,this,o);
return this;
},insertAfter:function(z){var parent=z.__fi;
parent.__fl(this);
qx.lang.Array.insertAfter(parent.__fg,this,z);
return this;
},moveTo:function(dH){var parent=this.__fi;
parent.__fn(this);
var dI=parent.__fg.indexOf(this);

if(dI===dH){throw new Error("Could not move to same index!");
}else if(dI<dH){dH--;
}qx.lang.Array.removeAt(parent.__fg,dI);
qx.lang.Array.insertAt(parent.__fg,this,dH);
return this;
},moveBefore:function(bm){var parent=this.__fi;
return this.moveTo(parent.__fg.indexOf(bm));
},moveAfter:function(cq){var parent=this.__fi;
return this.moveTo(parent.__fg.indexOf(cq)+1);
},free:function(){var parent=this.__fi;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__fg){return;
}parent.__fm(this);
qx.lang.Array.remove(parent.__fg,this);
return this;
},getDomElement:function(){return this.__eQ||null;
},getNodeName:function(){return this.__eJ;
},setNodeName:function(name){this.__eJ=name;
},setRoot:function(dL){this.__eR=dL;
},useMarkup:function(F){if(this.__eQ){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bS,bP)){var G=document.createElement(bR);
}else{var G=qx.html.Element.__fo;

if(!G){G=qx.html.Element.__fo=document.createElement(bR);
}}G.innerHTML=F;
this.__eQ=G.firstChild;
this.__eQ.$$element=this.$$hash;
this._copyData(true);
return this.__eQ;
},useElement:function(K){if(this.__eQ){throw new Error("Could not overwrite existing element!");
}this.__eQ=K;
this.__eQ.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cv=this.getAttribute(cc);

if(cv>=1){return true;
}var cu=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cv>=0&&cu[this.__eJ]){return true;
}return false;
},setSelectable:function(bA){this.setAttribute(cd,bA?bU:cb);
if(qx.core.Variant.isSet(bS,bW)){this.setStyle(ci,bA?ca:bO);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__eJ];
},include:function(){if(this.__eS){return;
}delete this.__eS;

if(this.__fi){this.__fi._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__eS){return;
}this.__eS=false;

if(this.__fi){this.__fi._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__eS===true;
},show:function(){if(this.__eT){return;
}
if(this.__eQ){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
}if(this.__fi){this.__fi._scheduleChildrenUpdate();
}delete this.__eT;
},hide:function(){if(!this.__eT){return;
}
if(this.__eQ){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
}this.__eT=false;
},isVisible:function(){return this.__eT===true;
},scrollChildIntoViewX:function(dp,dq,dr){var ds=this.__eQ;
var dt=dp.getDomElement();

if(dr!==false&&ds&&ds.offsetWidth&&dt&&dt.offsetWidth){qx.bom.element.Scroll.intoViewX(dt,ds,dq);
}else{this.__eU={element:dp,align:dq};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
}delete this.__eW;
},scrollChildIntoViewY:function(du,dv,dw){var dx=this.__eQ;
var dy=du.getDomElement();

if(dw!==false&&dx&&dx.offsetWidth&&dy&&dy.offsetWidth){qx.bom.element.Scroll.intoViewY(dy,dx,dv);
}else{this.__eV={element:du,align:dv};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
}delete this.__eX;
},scrollToX:function(x,co){var cp=this.__eQ;

if(co!==true&&cp&&cp.offsetWidth){cp.scrollLeft=x;
}else{this.__eW=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
}delete this.__eU;
},getScrollX:function(){var dd=this.__eQ;

if(dd){return dd.scrollLeft;
}return this.__eW||0;
},scrollToY:function(y,bB){var bC=this.__eQ;

if(bB!==true&&bC&&bC.offsetWidth){bC.scrollTop=y;
}else{this.__eX=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
}delete this.__eV;
},getScrollY:function(){var cw=this.__eQ;

if(cw){return cw.scrollTop;
}return this.__eX||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(bN,this.__fq,this);
},enableScrolling:function(){this.removeListener(bN,this.__fq,this);
},__fp:null,__fq:function(e){if(!this.__fp){this.__fp=true;
this.__eQ.scrollTop=0;
this.__eQ.scrollLeft=0;
delete this.__fp;
}},getTextSelection:function(){var dN=this.__eQ;

if(dN){return qx.bom.Selection.get(dN);
}return null;
},getTextSelectionLength:function(){var n=this.__eQ;

if(n){return qx.bom.Selection.getLength(n);
}return null;
},getTextSelectionStart:function(){var cl=this.__eQ;

if(cl){return qx.bom.Selection.getStart(cl);
}return null;
},getTextSelectionEnd:function(){var dT=this.__eQ;

if(dT){return qx.bom.Selection.getEnd(dT);
}return null;
},setTextSelection:function(U,V){var W=this.__eQ;

if(W){qx.bom.Selection.set(W,U,V);
return;
}qx.html.Element.__eK[this.toHashCode()]={element:this,start:U,end:V};
qx.html.Element._scheduleFlush(bT);
},clearTextSelection:function(){var dc=this.__eQ;

if(dc){qx.bom.Selection.clear(dc);
}delete qx.html.Element.__eK[this.toHashCode()];
},__fr:function(cr,cs){var ct=qx.html.Element._actions;
ct.push({type:cr,element:this,args:cs||[]});
qx.html.Element._scheduleFlush(bT);
},focus:function(){this.__fr(bY);
},blur:function(){this.__fr(ck);
},activate:function(){this.__fr(bK);
},deactivate:function(){this.__fr(cj);
},capture:function(Y){this.__fr(ch,[Y!==false]);
},releaseCapture:function(){this.__fr(cf);
},setStyle:function(bD,bE,bF){if(!this.__fc){this.__fc={};
}
if(this.__fc[bD]==bE){return;
}
if(bE==null){delete this.__fc[bD];
}else{this.__fc[bD]=bE;
}if(this.__eQ){if(bF){qx.bom.element.Style.set(this.__eQ,bD,bE);
return this;
}if(!this.__eY){this.__eY={};
}this.__eY[bD]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
}return this;
},setStyles:function(dO,dP){var dQ=qx.bom.element.Style;

if(!this.__fc){this.__fc={};
}
if(this.__eQ){if(!this.__eY){this.__eY={};
}
for(var dS in dO){var dR=dO[dS];

if(this.__fc[dS]==dR){continue;
}
if(dR==null){delete this.__fc[dS];
}else{this.__fc[dS]=dR;
}if(dP){dQ.set(this.__eQ,dS,dR);
continue;
}this.__eY[dS]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
}else{for(var dS in dO){var dR=dO[dS];

if(this.__fc[dS]==dR){continue;
}
if(dR==null){delete this.__fc[dS];
}else{this.__fc[dS]=dR;
}}}return this;
},removeStyle:function(by,bz){this.setStyle(by,null,bz);
},getStyle:function(dU){return this.__fc?this.__fc[dU]:null;
},getAllStyles:function(){return this.__fc||null;
},setAttribute:function(C,D,E){if(!this.__fd){this.__fd={};
}
if(this.__fd[C]==D){return;
}
if(D==null){delete this.__fd[C];
}else{this.__fd[C]=D;
}if(this.__eQ){if(E){qx.bom.element.Attribute.set(this.__eQ,C,D);
return this;
}if(!this.__fa){this.__fa={};
}this.__fa[C]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
}return this;
},setAttributes:function(r,s){for(var t in r){this.setAttribute(t,r[t],s);
}return this;
},removeAttribute:function(I,J){this.setAttribute(I,null,J);
},getAttribute:function(dM){return this.__fd?this.__fd[dM]:null;
},_applyProperty:function(name,X){},_setProperty:function(R,S,T){if(!this.__fe){this.__fe={};
}
if(this.__fe[R]==S){return;
}
if(S==null){delete this.__fe[R];
}else{this.__fe[R]=S;
}if(this.__eQ){if(T){this._applyProperty(R,S);
return this;
}if(!this.__fb){this.__fb={};
}this.__fb[R]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bT);
}return this;
},_removeProperty:function(O,P){this._setProperty(O,null,P);
},_getProperty:function(de){var df=this.__fe;

if(!df){return null;
}var dg=df[de];
return dg==null?null:dg;
},addListener:function(bn,bo,self,bp){var bq;

if(this.$$disposed){return null;
}{};

if(this.__eQ){return qx.event.Registration.addListener(this.__eQ,bn,bo,self,bp);
}
if(!this.__ff){this.__ff={};
}
if(bp==null){bp=false;
}var br=qx.event.Manager.getNextUniqueId();
var bs=bn+(bp?bL:ce)+br;
this.__ff[bs]={type:bn,listener:bo,self:self,capture:bp,unique:br};
return bs;
},removeListener:function(ba,bb,self,bc){var bd;

if(this.$$disposed){return null;
}{};

if(this.__eQ){qx.event.Registration.removeListener(this.__eQ,ba,bb,self,bc);
}else{var bf=this.__ff;
var be;

if(bc==null){bc=false;
}
for(var bg in bf){be=bf[bg];
if(be.listener===bb&&be.self===self&&be.capture===bc&&be.type===ba){delete bf[bg];
break;
}}}return this;
},removeListenerById:function(bI){if(this.$$disposed){return null;
}
if(this.__eQ){qx.event.Registration.removeListenerById(this.__eQ,bI);
}else{delete this.__ff[bI];
}return this;
},hasListener:function(dj,dk){if(this.$$disposed){return false;
}
if(this.__eQ){return qx.event.Registration.hasListener(this.__eQ,dj,dk);
}var dm=this.__ff;
var dl;

if(dk==null){dk=false;
}
for(var dn in dm){dl=dm[dn];
if(dl.capture===dk&&dl.type===dj){return true;
}}return false;
}},defer:function(bj){bj.__fs=new qx.util.DeferredCall(bj.flush,bj);
},destruct:function(){var cn=this.__eQ;

if(cn){qx.event.Registration.getManager(cn).removeAllListeners(cn);
cn.$$element=bQ;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fi;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bV);
this.__fd=this.__fc=this.__ff=this.__fe=this.__fa=this.__eY=this.__fb=this.__eQ=this.__fi=this.__eU=this.__eV=null;
}});
})();
(function(){var d="qx.ui.core.queue.Manager",c="useraction";
qx.Class.define(d,{statics:{__ft:false,__fu:{},__fv:0,MAX_RETRIES:10,scheduleFlush:function(f){var self=qx.ui.core.queue.Manager;
self.__fu[f]=true;

if(!self.__ft){self.__fy.schedule();
self.__ft=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__fw){return;
}self.__fw=true;
self.__fy.cancel();
var h=self.__fu;
self.__fx(function(){while(h.visibility||h.widget||h.appearance||h.layout||h.element){if(h.widget){delete h.widget;
qx.ui.core.queue.Widget.flush();
}
if(h.visibility){delete h.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(h.appearance){delete h.appearance;
qx.ui.core.queue.Appearance.flush();
}if(h.widget||h.visibility||h.appearance){continue;
}
if(h.layout){delete h.layout;
qx.ui.core.queue.Layout.flush();
}if(h.widget||h.visibility||h.appearance||h.layout){continue;
}
if(h.element){delete h.element;
qx.html.Element.flush();
}}},function(){self.__ft=false;
});
self.__fx(function(){if(h.dispose){delete h.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__fw=false;
});
self.__fv=0;
},__fx:function(a,b){var self=qx.ui.core.queue.Manager;

try{a();
}catch(e){{};
self.__ft=false;
self.__fw=false;
self.__fv+=1;

if(self.__fv<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__fv-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{b();
}}},defer:function(g){g.__fy=new qx.util.DeferredCall(g.flush);
qx.html.Element._scheduleFlush=g.scheduleFlush;
qx.event.Registration.addListener(window,c,g.flush);
}});
})();
(function(){var c="abstract",b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:c,construct:function(a){this._manager=a;
},members:{_getParent:function(f){throw new Error("Missing implementation");
},canDispatchEvent:function(d,event,e){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var C="keydown",B="qx.client",A="keypress",z="NumLock",y="keyup",x="Enter",w="0",v="9",u="-",t="PageUp",bJ="+",bI="PrintScreen",bH="gecko",bG="A",bF="Z",bE="Left",bD="F5",bC="Down",bB="Up",bA="F11",J="F6",K="useraction",H="F3",I="keyinput",F="Insert",G="F8",D="End",E="/",R="Delete",S="*",bf="F1",bb="F4",bn="Home",bi="F2",bw="F12",bs="PageDown",W="F7",bz="F9",by="F10",bx="Right",V="text",Y="Escape",ba="webkit",bd="5",bg="3",bj="Meta",bp="7",bu="CapsLock",L="input",M="Control",X="Space",bm="Tab",bl="Shift",bk="Pause",br="Unidentified",bq="qx.event.handler.Keyboard",bh="mshtml",bo="mshtml|webkit",q="6",bt="off",N="Apps",O="4",bc="Alt",r="2",s="Scroll",U="1",P="8",Q="Win",T="autoComplete",be=",",bv="Backspace";
qx.Class.define(bq,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cD){arguments.callee.base.call(this);
this.__fz=cD;
this.__fA=cD.getWindow();
if(qx.core.Variant.isSet(B,bH)){this.__fB=this.__fA;
}else{this.__fB=this.__fA.document.documentElement;
}this.__fC={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cp){if(this._identifierToKeyCodeMap[cp]){return true;
}
if(cp.length!=1){return false;
}
if(cp>=w&&cp<=v){return true;
}
if(cp>=bG&&cp<=bF){return true;
}
switch(cp){case bJ:case u:case S:case E:return true;
default:return false;
}}},members:{__fD:null,__fz:null,__fA:null,__fB:null,__fC:null,__fE:null,__fF:null,__fG:null,canHandleEvent:function(cn,co){},registerEvent:function(cq,cr,cs){},unregisterEvent:function(k,l,m){},_fireInputEvent:function(n,o){var p=this.__fH();
if(p&&p.offsetWidth!=0){var event=qx.event.Registration.createEvent(I,qx.event.type.KeyInput,[n,p,o]);
this.__fz.dispatchEvent(p,event);
}if(this.__fA){qx.event.Registration.fireEvent(this.__fA,K,qx.event.type.Data,[I]);
}},_fireSequenceEvent:function(bV,bW,bX){var bY=this.__fH();
var ca=bV.keyCode;
var event=qx.event.Registration.createEvent(bW,qx.event.type.KeySequence,[bV,bY,bX]);
this.__fz.dispatchEvent(bY,event);
if(qx.core.Variant.isSet(B,bo)){if(bW==C&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(ca)&&!this._emulateKeyPress[ca]){this._fireSequenceEvent(bV,A,bX);
}}}if(this.__fA){qx.event.Registration.fireEvent(this.__fA,K,qx.event.type.Data,[bW]);
}},__fH:function(){var c=this.__fz.getHandler(qx.event.handler.Focus);
var d=c.getActive();
if(!d||d.offsetWidth==0){d=c.getFocus();
}if(!d||d.offsetWidth==0){d=this.__fz.getWindow().document.body;
}return d;
},_initKeyObserver:function(){this.__fD=qx.lang.Function.listener(this.__fI,this);
this.__fG=qx.lang.Function.listener(this.__fK,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fB,y,this.__fD);
Event.addNativeListener(this.__fB,C,this.__fD);
Event.addNativeListener(this.__fB,A,this.__fG);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fB,y,this.__fD);
Event.removeNativeListener(this.__fB,C,this.__fD);
Event.removeNativeListener(this.__fB,A,this.__fG);

for(var b in (this.__fF||{})){var a=this.__fF[b];
Event.removeNativeListener(a.target,A,a.callback);
}delete (this.__fF);
},__fI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(B,{"mshtml":function(g){g=window.event||g;
var j=g.keyCode;
var h=0;
var i=g.type;
if(!(this.__fC[j]==C&&i==C)){this._idealKeyHandler(j,h,i,g);
}if(i==C){if(this._isNonPrintableKeyCode(j)||this._emulateKeyPress[j]){this._idealKeyHandler(j,h,A,g);
}}this.__fC[j]=i;
},"gecko":function(ci){var cm=this._keyCodeFix[ci.keyCode]||ci.keyCode;
var ck=0;
var cl=ci.type;
if(qx.bom.client.Platform.WIN){var cj=cm?this._keyCodeToIdentifier(cm):this._charCodeToIdentifier(ck);

if(!(this.__fC[cj]==C&&cl==C)){this._idealKeyHandler(cm,ck,cl,ci);
}this.__fC[cj]=cl;
}else{this._idealKeyHandler(cm,ck,cl,ci);
}this.__fJ(ci.target,cl,cm);
},"webkit":function(cI){var cL=0;
var cJ=0;
var cK=cI.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cK==y||cK==C){cL=this._charCode2KeyCode[cI.charCode]||cI.keyCode;
}else{if(this._charCode2KeyCode[cI.charCode]){cL=this._charCode2KeyCode[cI.charCode];
}else{cJ=cI.charCode;
}}this._idealKeyHandler(cL,cJ,cK,cI);
}else{cL=cI.keyCode;
if(!(this.__fC[cL]==C&&cK==C)){this._idealKeyHandler(cL,cJ,cK,cI);
}if(cK==C){if(this._isNonPrintableKeyCode(cL)||this._emulateKeyPress[cL]){this._idealKeyHandler(cL,cJ,A,cI);
}}this.__fC[cL]=cK;
}},"opera":function(e){this.__fE=e.keyCode;
this._idealKeyHandler(e.keyCode,0,e.type,e);
}})),__fJ:qx.core.Variant.select(B,{"gecko":function(bP,bQ,bR){if(bQ===C&&(bR==33||bR==34||bR==38||bR==40)&&bP.type==V&&bP.tagName.toLowerCase()===L&&bP.getAttribute(T)!==bt){if(!this.__fF){this.__fF={};
}var bT=qx.core.ObjectRegistry.toHashCode(bP);

if(this.__fF[bT]){return;
}var self=this;
this.__fF[bT]={target:bP,callback:function(bK){qx.bom.Event.stopPropagation(bK);
self.__fK(bK);
}};
var bS=qx.event.GlobalError.observeMethod(this.__fF[bT].callback);
qx.bom.Event.addNativeListener(bP,A,bS);
}},"default":null}),__fK:qx.event.GlobalError.observeMethod(qx.core.Variant.select(B,{"mshtml":function(bU){bU=window.event||bU;

if(this._charCode2KeyCode[bU.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bU.keyCode],0,bU.type,bU);
}else{this._idealKeyHandler(0,bU.keyCode,bU.type,bU);
}},"gecko":function(ct){var cw=this._keyCodeFix[ct.keyCode]||ct.keyCode;
var cu=ct.charCode;
var cv=ct.type;
this._idealKeyHandler(cw,cu,cv,ct);
},"webkit":function(cx){if(qx.bom.client.Engine.VERSION<525.13){var cA=0;
var cy=0;
var cz=cx.type;

if(cz==y||cz==C){cA=this._charCode2KeyCode[cx.charCode]||cx.keyCode;
}else{if(this._charCode2KeyCode[cx.charCode]){cA=this._charCode2KeyCode[cx.charCode];
}else{cy=cx.charCode;
}}this._idealKeyHandler(cA,cy,cz,cx);
}else{if(this._charCode2KeyCode[cx.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cx.keyCode],0,cx.type,cx);
}else{this._idealKeyHandler(0,cx.keyCode,cx.type,cx);
}}},"opera":function(cE){var cG=cE.keyCode;
var cF=cE.type;
if(cG!=this.__fE){this._idealKeyHandler(0,this.__fE,cF,cE);
}else{if(this._keyCodeToIdentifierMap[cE.keyCode]){this._idealKeyHandler(cE.keyCode,0,cE.type,cE);
}else{this._idealKeyHandler(0,cE.keyCode,cE.type,cE);
}}}})),_idealKeyHandler:function(cd,ce,cf,cg){var ch;
if(cd||(!cd&&!ce)){ch=this._keyCodeToIdentifier(cd);
this._fireSequenceEvent(cg,cf,ch);
}else{ch=this._charCodeToIdentifier(ce);
this._fireSequenceEvent(cg,A,ch);
this._fireInputEvent(cg,ce);
}},_specialCharCodeMap:{8:bv,9:bm,13:x,27:Y,32:X},_emulateKeyPress:qx.core.Variant.select(B,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bl,17:M,18:bc,20:bu,224:bj,37:bE,38:bB,39:bx,40:bC,33:t,34:bs,35:D,36:bn,45:F,46:R,112:bf,113:bi,114:H,115:bb,116:bD,117:J,118:W,119:G,120:bz,121:by,122:bA,123:bw,144:z,44:bI,145:s,19:bk,91:Q,93:N},_numpadToCharCode:{96:w.charCodeAt(0),97:U.charCodeAt(0),98:r.charCodeAt(0),99:bg.charCodeAt(0),100:O.charCodeAt(0),101:bd.charCodeAt(0),102:q.charCodeAt(0),103:bp.charCodeAt(0),104:P.charCodeAt(0),105:v.charCodeAt(0),106:S.charCodeAt(0),107:bJ.charCodeAt(0),109:u.charCodeAt(0),110:be.charCodeAt(0),111:E.charCodeAt(0)},_charCodeA:bG.charCodeAt(0),_charCodeZ:bF.charCodeAt(0),_charCode0:w.charCodeAt(0),_charCode9:v.charCodeAt(0),_isNonPrintableKeyCode:function(cH){return this._keyCodeToIdentifierMap[cH]?true:false;
},_isIdentifiableKeyCode:function(f){if(f>=this._charCodeA&&f<=this._charCodeZ){return true;
}if(f>=this._charCode0&&f<=this._charCode9){return true;
}if(this._specialCharCodeMap[f]){return true;
}if(this._numpadToCharCode[f]){return true;
}if(this._isNonPrintableKeyCode(f)){return true;
}return false;
},_keyCodeToIdentifier:function(cb){if(this._isIdentifiableKeyCode(cb)){var cc=this._numpadToCharCode[cb];

if(cc){return String.fromCharCode(cc);
}return (this._keyCodeToIdentifierMap[cb]||this._specialCharCodeMap[cb]||String.fromCharCode(cb));
}else{return br;
}},_charCodeToIdentifier:function(cC){return this._specialCharCodeMap[cC]||String.fromCharCode(cC).toUpperCase();
},_identifierToKeyCode:function(cB){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cB]||cB.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fE=this.__fz=this.__fA=this.__fB=this.__fC=null;
},defer:function(bL,bM,bN){qx.event.Registration.addHandler(bL);
if(!bL._identifierToKeyCodeMap){bL._identifierToKeyCodeMap={};

for(var bO in bM._keyCodeToIdentifierMap){bL._identifierToKeyCodeMap[bM._keyCodeToIdentifierMap[bO]]=parseInt(bO,10);
}
for(var bO in bM._specialCharCodeMap){bL._identifierToKeyCodeMap[bM._specialCharCodeMap[bO]]=parseInt(bO,10);
}}
if(qx.core.Variant.isSet(B,bh)){bM._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(B,bH)){bM._keyCodeFix={12:bM._identifierToKeyCode(z)};
}else if(qx.core.Variant.isSet(B,ba)){if(qx.bom.client.Engine.VERSION<525.13){bM._charCode2KeyCode={63289:bM._identifierToKeyCode(z),63276:bM._identifierToKeyCode(t),63277:bM._identifierToKeyCode(bs),63275:bM._identifierToKeyCode(D),63273:bM._identifierToKeyCode(bn),63234:bM._identifierToKeyCode(bE),63232:bM._identifierToKeyCode(bB),63235:bM._identifierToKeyCode(bx),63233:bM._identifierToKeyCode(bC),63272:bM._identifierToKeyCode(R),63302:bM._identifierToKeyCode(F),63236:bM._identifierToKeyCode(bf),63237:bM._identifierToKeyCode(bi),63238:bM._identifierToKeyCode(H),63239:bM._identifierToKeyCode(bb),63240:bM._identifierToKeyCode(bD),63241:bM._identifierToKeyCode(J),63242:bM._identifierToKeyCode(W),63243:bM._identifierToKeyCode(G),63244:bM._identifierToKeyCode(bz),63245:bM._identifierToKeyCode(by),63246:bM._identifierToKeyCode(bA),63247:bM._identifierToKeyCode(bw),63248:bM._identifierToKeyCode(bI),3:bM._identifierToKeyCode(x),12:bM._identifierToKeyCode(z),13:bM._identifierToKeyCode(x)};
}else{bM._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var W="qx.client",V="mouseup",U="click",T="mousedown",S="contextmenu",R="mousewheel",Q="dblclick",P="mshtml",O="mouseover",N="mouseout",I="DOMMouseScroll",M="mousemove",L="on",H="mshtml|webkit|opera",G="useraction",K="gecko|webkit",J="qx.event.handler.Mouse";
qx.Class.define(J,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__fL=g;
this.__fM=g.getWindow();
this.__fN=this.__fM.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__fO:null,__fP:null,__fQ:null,__fR:null,__fS:null,__fL:null,__fM:null,__fN:null,canHandleEvent:function(k,l){},registerEvent:qx.bom.client.System.IPHONE?
function(q,r,s){q[L+r]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(X,Y,ba){X[L+Y]=undefined;
}:qx.lang.Function.returnNull,__fT:function(h,i,j){if(!j){j=h.target||h.srcElement;
}if(j&&j.nodeType){qx.event.Registration.fireEvent(j,i||h.type,i==R?qx.event.type.MouseWheel:qx.event.type.Mouse,[h,j,null,true,true]);
}qx.event.Registration.fireEvent(this.__fM,G,qx.event.type.Data,[i||h.type]);
},_initButtonObserver:function(){this.__fO=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,T,this.__fO);
Event.addNativeListener(this.__fN,V,this.__fO);
Event.addNativeListener(this.__fN,U,this.__fO);
Event.addNativeListener(this.__fN,Q,this.__fO);
Event.addNativeListener(this.__fN,S,this.__fO);
},_initMoveObserver:function(){this.__fP=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,M,this.__fP);
Event.addNativeListener(this.__fN,O,this.__fP);
Event.addNativeListener(this.__fN,N,this.__fP);
},_initWheelObserver:function(){this.__fQ=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var A=qx.core.Variant.isSet(W,H)?R:I;
var B=qx.core.Variant.isSet(W,P)?this.__fN:this.__fM;
Event.addNativeListener(B,A,this.__fQ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,T,this.__fO);
Event.removeNativeListener(this.__fN,V,this.__fO);
Event.removeNativeListener(this.__fN,U,this.__fO);
Event.removeNativeListener(this.__fN,Q,this.__fO);
Event.removeNativeListener(this.__fN,S,this.__fO);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,M,this.__fP);
Event.removeNativeListener(this.__fN,O,this.__fP);
Event.removeNativeListener(this.__fN,N,this.__fP);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var E=qx.core.Variant.isSet(W,H)?R:I;
var F=qx.core.Variant.isSet(W,P)?this.__fN:this.__fM;
Event.removeNativeListener(F,E,this.__fQ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(C){this.__fT(C);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(t){var u=t.type;
var v=t.target||t.srcElement;
if(qx.core.Variant.isSet(W,K)){if(v&&v.nodeType==3){v=v.parentNode;
}}
if(this.__fU){this.__fU(t,u,v);
}
if(this.__fW){this.__fW(t,u,v);
}this.__fT(t,u,v);

if(this.__fV){this.__fV(t,u,v);
}
if(this.__fX){this.__fX(t,u,v);
}this.__fR=u;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(D){this.__fT(D,R);
}),__fU:qx.core.Variant.select(W,{"webkit":function(a,b,c){if(qx.bom.client.Engine.VERSION<530){if(b==S){this.__fT(a,V,c);
}}},"default":null}),__fV:qx.core.Variant.select(W,{"opera":function(x,y,z){if(y==V&&x.button==2){this.__fT(x,S,z);
}},"default":null}),__fW:qx.core.Variant.select(W,{"mshtml":function(d,e,f){if(e==V&&this.__fR==U){this.__fT(d,T,f);
}else if(e==Q){this.__fT(d,U,f);
}},"default":null}),__fX:qx.core.Variant.select(W,{"mshtml":null,"default":function(m,n,o){switch(n){case T:this.__fS=o;
break;
case V:if(o!==this.__fS){var p=qx.dom.Hierarchy.getCommonParent(o,this.__fS);
this.__fT(m,U,p);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__fL=this.__fM=this.__fN=this.__fS=null;
},defer:function(w){qx.event.Registration.addHandler(w);
}});
})();
(function(){var e="qx.event.handler.Capture";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,g){},registerEvent:function(a,b,c){},unregisterEvent:function(h,i,j){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(M){arguments.callee.base.call(this);
this.__fY=M;
this.__ga=M.getWindow().document.documentElement;
this.__fY.addListener(this.__ga,v,this._onMouseDown,this);
this.__gm();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__fY:null,__ga:null,__gb:null,__gc:null,__gd:null,__ge:null,__gf:null,__gg:null,__gh:null,__gi:null,__gj:false,__gk:0,__gl:0,canHandleEvent:function(S,T){},registerEvent:function(N,O,P){},unregisterEvent:function(Y,ba,bb){},addType:function(G){this.__gd[G]=true;
},addAction:function(B){this.__ge[B]=true;
},supportsType:function(L){return !!this.__gd[L];
},supportsAction:function(bm){return !!this.__ge[bm];
},getData:function(H){if(!this.__gt||!this.__gb){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gd[H]){throw new Error("Unsupported data type: "+H+"!");
}
if(!this.__gg[H]){this.__gh=H;
this.__go(q,this.__gc,this.__gb,false);
}
if(!this.__gg[H]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gg[H]||null;
},getCurrentAction:function(){return this.__gi;
},addData:function(E,F){this.__gg[E]=F;
},getCurrentType:function(){return this.__gh;
},__gm:function(){this.__gd={};
this.__ge={};
this.__gf={};
this.__gg={};
},__gn:function(){var K=this.__ge;
var I=this.__gf;
var J=null;

if(this.__gt){if(I.Shift&&I.Ctrl&&K.alias){J=k;
}else if(I.Shift&&I.Alt&&K.copy){J=j;
}else if(I.Shift&&K.move){J=b;
}else if(I.Alt&&K.alias){J=k;
}else if(I.Ctrl&&K.copy){J=j;
}else if(K.move){J=b;
}else if(K.copy){J=j;
}else if(K.alias){J=k;
}}
if(J!=this.__gi){this.__gi=J;
this.__go(o,this.__gc,this.__gb,false);
}},__go:function(bd,be,bf,bg,bh){var bj=qx.event.Registration;
var bi=bj.createEvent(bd,qx.event.type.Drag,[bg,bh]);

if(be!==bf){bi.setRelatedTarget(bf);
}return bj.dispatchEvent(be,bi);
},__gp:function(C){while(C&&C.nodeType==1){if(C.getAttribute(u)==w){return C;
}C=C.parentNode;
}return null;
},__gq:function(X){while(X&&X.nodeType==1){if(X.getAttribute(r)==w){return X;
}X=X.parentNode;
}return null;
},__gr:function(){this.__gc=null;
this.__fY.removeListener(this.__ga,c,this._onMouseMove,this,true);
this.__fY.removeListener(this.__ga,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__gm();
},__gs:function(){if(this.__gj){this.__fY.removeListener(this.__ga,a,this._onMouseOver,this,true);
this.__fY.removeListener(this.__ga,h,this._onMouseOut,this,true);
this.__fY.removeListener(this.__ga,g,this._onKeyDown,this,true);
this.__fY.removeListener(this.__ga,z,this._onKeyUp,this,true);
this.__go(x,this.__gc,this.__gb,false);
this.__gj=false;
}this.__gt=false;
this.__gb=null;
this.__gr();
},__gt:false,_onWindowBlur:function(e){this.__gs();
},_onKeyDown:function(e){var U=e.getKeyIdentifier();

switch(U){case A:case f:case d:if(!this.__gf[U]){this.__gf[U]=true;
this.__gn();
}}},_onKeyUp:function(e){var D=e.getKeyIdentifier();

switch(D){case A:case f:case d:if(this.__gf[D]){this.__gf[D]=false;
this.__gn();
}}},_onMouseDown:function(e){if(this.__gj){return;
}var bc=this.__gp(e.getTarget());

if(bc){this.__gk=e.getDocumentLeft();
this.__gl=e.getDocumentTop();
this.__gc=bc;
this.__fY.addListener(this.__ga,c,this._onMouseMove,this,true);
this.__fY.addListener(this.__ga,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gt){this.__go(s,this.__gb,this.__gc,false,e);
}if(this.__gj){e.stopPropagation();
}this.__gs();
},_onMouseMove:function(e){if(this.__gj){if(!this.__go(t,this.__gc,this.__gb,true,e)){this.__gs();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gk)>3||Math.abs(e.getDocumentTop()-this.__gl)>3){if(this.__go(n,this.__gc,this.__gb,true,e)){this.__gj=true;
this.__fY.addListener(this.__ga,a,this._onMouseOver,this,true);
this.__fY.addListener(this.__ga,h,this._onMouseOut,this,true);
this.__fY.addListener(this.__ga,g,this._onKeyDown,this,true);
this.__fY.addListener(this.__ga,z,this._onKeyUp,this,true);
var W=this.__gf;
W.Ctrl=e.isCtrlPressed();
W.Shift=e.isShiftPressed();
W.Alt=e.isAltPressed();
this.__gn();
}else{this.__go(x,this.__gc,this.__gb,false);
this.__gr();
}}}},_onMouseOver:function(e){var Q=e.getTarget();
var R=this.__gq(Q);

if(R&&R!=this.__gb){this.__gt=this.__go(m,R,this.__gc,true,e);
this.__gb=R;
this.__gn();
}},_onMouseOut:function(e){var bl=this.__gq(e.getTarget());
var bk=this.__gq(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__gb){this.__go(l,this.__gb,bk,false,e);
this.__gb=null;
this.__gt=false;
qx.event.Timer.once(this.__gn,this,0);
}}},destruct:function(){this.__gc=this.__gb=this.__fY=this.__ga=this.__gd=this.__ge=this.__gf=this.__gg=null;
},defer:function(V){qx.event.Registration.addHandler(V);
}});
})();
(function(){var z="-",y="qx.event.handler.Element";
qx.Class.define(y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){arguments.callee.base.call(this);
this._manager=f;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,e){},registerEvent:function(r,s,t){var w=qx.core.ObjectRegistry.toHashCode(r);
var u=w+z+s;
var v=qx.lang.Function.listener(this._onNative,this,u);
qx.bom.Event.addNativeListener(r,s,v);
this._registeredEvents[u]={element:r,type:s,listener:v};
},unregisterEvent:function(k,l,m){var p=this._registeredEvents;

if(!p){return;
}var q=qx.core.ObjectRegistry.toHashCode(k);
var n=q+z+l;
var o=this._registeredEvents[n];
qx.bom.Event.removeNativeListener(k,l,o.listener);
delete this._registeredEvents[n];
},_onNative:qx.event.GlobalError.observeMethod(function(g,h){var j=this._registeredEvents;

if(!j){return;
}var i=j[h];
qx.event.Registration.fireNonBubblingEvent(i.element,i.type,qx.event.type.Native,[g]);
})},destruct:function(){var a;
var b=this._registeredEvents;

for(var c in b){a=b[c];
qx.bom.Event.removeNativeListener(a.element,a.type,a.listener);
}this._manager=this._registeredEvents=null;
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(x){arguments.callee.base.call(this);
this.__gu=x;
this.__gv={};
qx.event.handler.Appear.__gw[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gw:{},refresh:function(){var d=this.__gw;

for(var e in d){d[e].refresh();
}}},members:{__gu:null,__gv:null,canHandleEvent:function(f,g){},registerEvent:function(m,n,o){var p=qx.core.ObjectRegistry.toHashCode(m)+n;
var q=this.__gv;

if(q&&!q[p]){q[p]=m;
m.$$displayed=m.offsetWidth>0;
}},unregisterEvent:function(h,i,j){var k=qx.core.ObjectRegistry.toHashCode(h)+i;
var l=this.__gv;

if(!l){return;
}
if(l[k]){delete l[k];
}},refresh:function(){var v=this.__gv;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__gu.dispatchEvent(w,t);
}}}},destruct:function(){this.__gu=this.__gv=null;
delete qx.event.handler.Appear.__gw[this.$$hash];
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var q="mshtml",p="",o="qx.client",n=">",m="<",k=" ",h="='",g="qx.bom.Element",f="div",e="' ",d="></";
qx.Class.define(g,{statics:{__gx:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,P,Q){if(!Q){Q=window;
}
if(!name){throw new Error("The tag name is missing!");
}var S=this.__gx;
var R=p;

for(var U in P){if(S[U]){R+=U+h+P[U]+e;
}}var V;
if(R!=p){if(qx.bom.client.Engine.MSHTML){V=Q.document.createElement(m+name+k+R+n);
}else{var T=Q.document.createElement(f);
T.innerHTML=m+name+k+R+d+name+n;
V=T.firstChild;
}}else{V=Q.document.createElement(name);
}
for(var U in P){if(!S[U]){qx.bom.element.Attribute.set(V,U,P[U]);
}}return V;
},empty:function(W){return W.innerHTML=p;
},addListener:function(u,v,w,self,x){return qx.event.Registration.addListener(u,v,w,self,x);
},removeListener:function(z,A,B,self,C){return qx.event.Registration.removeListener(z,A,B,self,C);
},removeListenerById:function(s,t){return qx.event.Registration.removeListenerById(s,t);
},hasListener:function(a,b,c){return qx.event.Registration.hasListener(a,b,c);
},focus:function(r){qx.event.Registration.getManager(r).getHandler(qx.event.handler.Focus).focus(r);
},blur:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).blur(bc);
},activate:function(y){qx.event.Registration.getManager(y).getHandler(qx.event.handler.Focus).activate(y);
},deactivate:function(ba){qx.event.Registration.getManager(ba).getHandler(qx.event.handler.Focus).deactivate(ba);
},capture:function(X,Y){qx.event.Registration.getManager(X).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(X,Y);
},releaseCapture:function(bb){qx.event.Registration.getManager(bb).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bb);
},clone:function(D,E){var H;

if(E||(qx.core.Variant.isSet(o,q)&&!qx.xml.Document.isXmlDocument(D))){var L=qx.event.Registration.getManager(D);
var F=qx.dom.Hierarchy.getDescendants(D);
F.push(D);
}if(qx.core.Variant.isSet(o,q)){for(var i=0,l=F.length;i<l;i++){L.toggleAttachedEvents(F[i],false);
}}var H=D.cloneNode(true);
if(qx.core.Variant.isSet(o,q)){for(var i=0,l=F.length;i<l;i++){L.toggleAttachedEvents(F[i],true);
}}if(E===true){var O=qx.dom.Hierarchy.getDescendants(H);
O.push(H);
var G,J,N,I;

for(var i=0,M=F.length;i<M;i++){N=F[i];
G=L.serializeListeners(N);

if(G.length>0){J=O[i];

for(var j=0,K=G.length;j<K;j++){I=G[j];
L.addListener(J,I.type,I.handler,I.self,I.capture);
}}}}return H;
}}});
})();
(function(){var e="qx.event.type.Dom";
qx.Class.define(e,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(a,b){var b=arguments.callee.base.call(this,a,b);
b.shiftKey=a.shiftKey;
b.ctrlKey=a.ctrlKey;
b.altKey=a.altKey;
b.metaKey=a.metaKey;
return b;
},getModifiers:function(){var d=0;
var c=this._native;

if(c.shiftKey){d|=qx.event.type.Dom.SHIFT_MASK;
}
if(c.ctrlKey){d|=qx.event.type.Dom.CTRL_MASK;
}
if(c.altKey){d|=qx.event.type.Dom.ALT_MASK;
}
if(c.metaKey){d|=qx.event.type.Dom.META_MASK;
}return d;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var G="qx.client",F="blur",E="focus",D="mousedown",C="on",B="mouseup",A="DOMFocusOut",z="DOMFocusIn",y="selectstart",x="onmousedown",bd="onfocusout",bc="onfocusin",bb="onmouseup",ba="onselectstart",Y="draggesture",X="gecko",W="qx.event.handler.Focus",V="_applyFocus",U="deactivate",T="textarea",N="qxIsRootPage",O="_applyActive",L="input",M="focusin",J="qxSelectable",K="tabIndex",H="off",I="activate",P="1",Q="focusout",S="qxKeepFocus",R="qxKeepActive";
qx.Class.define(W,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bn){arguments.callee.base.call(this);
this._manager=bn;
this._window=bn.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:O,nullable:true},focus:{apply:V,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gy:null,__gz:null,__gA:null,__gB:null,__gC:null,__gD:null,__gE:null,__gF:null,__gG:null,__gH:null,canHandleEvent:function(bv,bw){},registerEvent:function(bo,bp,bq){},unregisterEvent:function(bk,bl,bm){},focus:function(bj){try{bj.focus();
}catch(q){}this.setFocus(bj);
this.setActive(bj);
},activate:function(bA){this.setActive(bA);
},blur:function(bB){try{bB.blur();
}catch(h){}
if(this.getActive()===bB){this.resetActive();
}
if(this.getFocus()===bB){this.resetFocus();
}},deactivate:function(bO){if(this.getActive()===bO){this.resetActive();
}},tryActivate:function(u){var v=this.__gW(u);

if(v){this.setActive(v);
}},__gI:function(a,b,c,d){var g=qx.event.Registration;
var f=g.createEvent(c,qx.event.type.Focus,[a,b,d]);
g.dispatchEvent(a,f);
},_windowFocused:true,__gJ:function(){if(this._windowFocused){this._windowFocused=false;
this.__gI(this._window,null,F,false);
}},__gK:function(){if(!this._windowFocused){this._windowFocused=true;
this.__gI(this._window,null,E,false);
}},_initObserver:qx.core.Variant.select(G,{"gecko":function(){this.__gy=qx.lang.Function.listener(this.__gQ,this);
this.__gz=qx.lang.Function.listener(this.__gR,this);
this.__gA=qx.lang.Function.listener(this.__gP,this);
this.__gB=qx.lang.Function.listener(this.__gO,this);
this.__gC=qx.lang.Function.listener(this.__gL,this);
this._document.addEventListener(D,this.__gy,true);
this._document.addEventListener(B,this.__gz,true);
this._window.addEventListener(E,this.__gA,true);
this._window.addEventListener(F,this.__gB,true);
this._window.addEventListener(Y,this.__gC,true);
},"mshtml":function(){this.__gy=qx.lang.Function.listener(this.__gQ,this);
this.__gz=qx.lang.Function.listener(this.__gR,this);
this.__gE=qx.lang.Function.listener(this.__gM,this);
this.__gF=qx.lang.Function.listener(this.__gN,this);
this.__gD=qx.lang.Function.listener(this.__gT,this);
this._document.attachEvent(x,this.__gy);
this._document.attachEvent(bb,this.__gz);
this._document.attachEvent(bc,this.__gE);
this._document.attachEvent(bd,this.__gF);
this._document.attachEvent(ba,this.__gD);
},"webkit":function(){this.__gy=qx.lang.Function.listener(this.__gQ,this);
this.__gz=qx.lang.Function.listener(this.__gR,this);
this.__gF=qx.lang.Function.listener(this.__gN,this);
this.__gA=qx.lang.Function.listener(this.__gP,this);
this.__gB=qx.lang.Function.listener(this.__gO,this);
this.__gD=qx.lang.Function.listener(this.__gT,this);
this._document.addEventListener(D,this.__gy,true);
this._document.addEventListener(B,this.__gz,true);
this._document.addEventListener(y,this.__gD,false);
this._window.addEventListener(A,this.__gF,true);
this._window.addEventListener(E,this.__gA,true);
this._window.addEventListener(F,this.__gB,true);
},"opera":function(){this.__gy=qx.lang.Function.listener(this.__gQ,this);
this.__gz=qx.lang.Function.listener(this.__gR,this);
this.__gE=qx.lang.Function.listener(this.__gM,this);
this.__gF=qx.lang.Function.listener(this.__gN,this);
this._document.addEventListener(D,this.__gy,true);
this._document.addEventListener(B,this.__gz,true);
this._window.addEventListener(z,this.__gE,true);
this._window.addEventListener(A,this.__gF,true);
}}),_stopObserver:qx.core.Variant.select(G,{"gecko":function(){this._document.removeEventListener(D,this.__gy,true);
this._document.removeEventListener(B,this.__gz,true);
this._window.removeEventListener(E,this.__gA,true);
this._window.removeEventListener(F,this.__gB,true);
this._window.removeEventListener(Y,this.__gC,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,x,this.__gy);
qx.bom.Event.removeNativeListener(this._document,bb,this.__gz);
qx.bom.Event.removeNativeListener(this._document,bc,this.__gE);
qx.bom.Event.removeNativeListener(this._document,bd,this.__gF);
qx.bom.Event.removeNativeListener(this._document,ba,this.__gD);
},"webkit":function(){this._document.removeEventListener(D,this.__gy,true);
this._document.removeEventListener(y,this.__gD,false);
this._window.removeEventListener(z,this.__gE,true);
this._window.removeEventListener(A,this.__gF,true);
this._window.removeEventListener(E,this.__gA,true);
this._window.removeEventListener(F,this.__gB,true);
},"opera":function(){this._document.removeEventListener(D,this.__gy,true);
this._window.removeEventListener(z,this.__gE,true);
this._window.removeEventListener(A,this.__gF,true);
this._window.removeEventListener(E,this.__gA,true);
this._window.removeEventListener(F,this.__gB,true);
}}),__gL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"gecko":function(e){if(!this.__gX(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gM:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"mshtml":function(e){this.__gK();
var bD=e.srcElement;
var bC=this.__gV(bD);

if(bC){this.setFocus(bC);
}this.tryActivate(bD);
},"opera":function(e){var p=e.target;

if(p==this._document||p==this._window){this.__gK();

if(this.__gG){this.setFocus(this.__gG);
delete this.__gG;
}
if(this.__gH){this.setActive(this.__gH);
delete this.__gH;
}}else{this.setFocus(p);
this.tryActivate(p);
if(!this.__gX(p)){p.selectionStart=0;
p.selectionEnd=0;
}}},"default":null})),__gN:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"mshtml":function(e){if(!e.toElement){this.__gJ();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bz=e.target;

if(bz===this.getFocus()){this.resetFocus();
}
if(bz===this.getActive()){this.resetActive();
}},"opera":function(e){var k=e.target;

if(k==this._document){this.__gJ();
this.__gG=this.getFocus();
this.__gH=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(k===this.getFocus()){this.resetFocus();
}
if(k===this.getActive()){this.resetActive();
}}},"default":null})),__gO:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__gJ();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__gJ();
this.__gG=this.getFocus();
this.__gH=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__gP:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"gecko":function(e){var w=e.target;

if(w===this._window||w===this._document){this.__gK();
w=this._body;
}this.setFocus(w);
this.tryActivate(w);
},"webkit":function(e){var bN=e.target;

if(bN===this._window||bN===this._document){this.__gK();

if(this.__gG){this.setFocus(this.__gG);
delete this.__gG;
}
if(this.__gH){this.setActive(this.__gH);
delete this.__gH;
}}else{this.setFocus(bN);
this.tryActivate(bN);
}},"default":null})),__gQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"gecko":function(e){var n=e.target;
var l=this.__gV(n);
var m=this.__gX(n);

if(!m){qx.bom.Event.preventDefault(e);
if(l){if(qx.core.Variant.isSet(G,X)){var o=qx.bom.element.Attribute.get(l,N)===P;

if(!o){l.focus();
}}else{l.focus();
}}}else if(!l){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var by=e.srcElement;
var bx=this.__gV(by);

if(bx){if(!this.__gX(by)){by.unselectable=C;
try{document.selection.empty();
}catch(e){}try{bx.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__gX(by)){by.unselectable=C;
}}},"webkit":function(e){var bu=e.target;
var bt=this.__gV(bu);

if(bt){this.setFocus(bt);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bJ=e.target;
var bH=this.__gV(bJ);

if(!this.__gX(bJ)){qx.bom.Event.preventDefault(e);
if(bH){var bI=this.getFocus();

if(bI&&bI.selectionEnd){bI.selectionStart=0;
bI.selectionEnd=0;
bI.blur();
}if(bH){this.setFocus(bH);
}}}else if(bH){this.setFocus(bH);
}},"default":null})),__gR:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"mshtml":function(e){var bM=e.srcElement;

if(bM.unselectable){bM.unselectable=H;
}this.tryActivate(this.__gS(bM));
},"gecko":function(e){var bg=e.target;

while(bg&&bg.offsetWidth===undefined){bg=bg.parentNode;
}
if(bg){this.tryActivate(bg);
}},"webkit|opera":function(e){this.tryActivate(this.__gS(e.target));
},"default":null})),__gS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"mshtml|webkit":function(bh){var bi=this.getFocus();

if(bi&&bh!=bi&&(bi.nodeName.toLowerCase()===L||bi.nodeName.toLowerCase()===T)){bh=bi;
}return bh;
},"default":function(bL){return bL;
}})),__gT:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"mshtml|webkit":function(e){var bK=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__gX(bK)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gU:function(bE){var bF=qx.bom.element.Attribute.get(bE,K);

if(bF>=1){return true;
}var bG=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bF>=0&&bG[bE.tagName]){return true;
}return false;
},__gV:function(t){while(t&&t.nodeType===1){if(t.getAttribute(S)==C){return null;
}
if(this.__gU(t)){return t;
}t=t.parentNode;
}return this._body;
},__gW:function(be){var bf=be;

while(be&&be.nodeType===1){if(be.getAttribute(R)==C){return null;
}be=be.parentNode;
}return bf;
},__gX:function(i){while(i&&i.nodeType===1){var j=i.getAttribute(J);

if(j!=null){return j===C;
}i=i.parentNode;
}return true;
},_applyActive:function(r,s){if(s){this.__gI(s,r,U,true);
}
if(r){this.__gI(r,s,I,true);
}},_applyFocus:function(br,bs){if(bs){this.__gI(bs,br,Q,true);
}
if(br){this.__gI(br,bs,M,true);
}if(bs){this.__gI(bs,br,F,false);
}
if(br){this.__gI(br,bs,E,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__gY=null;
},defer:function(bP){qx.event.Registration.addHandler(bP);
var bQ=bP.FOCUSABLE_ELEMENTS;

for(var bR in bQ){bQ[bR.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var x="",w="qx.client",v="readOnly",u="accessKey",t="qx.bom.element.Attribute",s="rowSpan",r="vAlign",q="className",p="textContent",o="'",L="htmlFor",K="longDesc",J="cellSpacing",I="frameBorder",H="='",G="useMap",F="innerText",E="innerHTML",D="tabIndex",C="dateTime",A="maxLength",B="mshtml",y="cellPadding",z="colSpan";
qx.Class.define(t,{statics:{__ha:{names:{"class":q,"for":L,html:E,text:qx.core.Variant.isSet(w,B)?F:p,colspan:z,rowspan:s,valign:r,datetime:C,accesskey:u,tabindex:D,maxlength:A,readonly:v,longdesc:K,cellpadding:y,cellspacing:J,frameborder:I,usemap:G},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:x,maxLength:10000000,className:x,innerHTML:x,innerText:x,textContent:x,htmlFor:x,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(h){var i=[];
var k=this.__ha.runtime;

for(var j in h){if(!k[j]){i.push(j,H,h[j],o);
}}return i.join(x);
},get:qx.core.Variant.select(w,{"mshtml":function(b,name){var d=this.__ha;
var c;
name=d.names[name]||name;
if(d.original[name]){c=b.getAttribute(name,2);
}else if(d.property[name]){if(d.propertyDefault[name]&&c==d.propertyDefault[name]){return null;
}c=b[name];
}else{c=b.getAttribute(name);
}if(d.bools[name]){return !!c;
}return c;
},"default":function(e,name){var g=this.__ha;
var f;
name=g.names[name]||name;
if(g.property[name]){if(g.propertyDefault[name]&&f==g.propertyDefault[name]){return null;
}f=e[name];

if(f==null){f=e.getAttribute(name);
}}else{f=e.getAttribute(name);
}if(g.bools[name]){return !!f;
}return f;
}}),set:function(l,name,m){var n=this.__ha;
name=n.names[name]||name;
if(n.bools[name]){m=!!m;
}if(n.property[name]){if(m==null){m=n.propertyDefault[name];

if(m===undefined){m=null;
}}l[name]=m;
}else{if(m===true){l.setAttribute(name,name);
}else if(m===false||m===null){l.removeAttribute(name);
}else{l.setAttribute(name,m);
}}},reset:function(a,name){this.set(a,name,null);
}}});
})();
(function(){var p="left",o="right",n="middle",m="qx.client",l="dblclick",k="click",j="none",i="contextmenu",h="qx.event.type.Mouse";
qx.Class.define(h,{extend:qx.event.type.Dom,members:{init:function(a,b,c,d,e){arguments.callee.base.call(this,a,b,c,d,e);

if(!c){this._relatedTarget=qx.bom.Event.getRelatedTarget(a);
}return this;
},_cloneNativeEvent:function(f,g){var g=arguments.callee.base.call(this,f,g);
g.button=f.button;
g.clientX=f.clientX;
g.clientY=f.clientY;
g.pageX=f.pageX;
g.pageY=f.pageY;
g.screenX=f.screenX;
g.screenY=f.screenY;
g.wheelDelta=f.wheelDelta;
g.detail=f.detail;
g.srcElement=f.srcElement;
return g;
},__hb:qx.core.Variant.select(m,{"mshtml":{1:p,2:o,4:n},"default":{0:p,2:o,1:n}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case k:case l:return p;
case i:return o;
default:return this.__hb[this._native.button]||j;
}},isLeftPressed:function(){return this.getButton()===p;
},isMiddlePressed:function(){return this.getButton()===n;
},isRightPressed:function(){return this.getButton()===o;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(m,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(m,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(q);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var s="qx.client",r="ie",q="msie",p="android",o="operamini",n="mobile chrome",m=")(/| )([0-9]+\.[0-9])",l="iemobile",k="opera mobi",j="Mobile Safari",G="operamobile",F="mobile safari",E="IEMobile|Maxthon|MSIE",D="qx.bom.client.Browser",C="opera mini",B="(",A="opera",z="mshtml",y="Opera Mini|Opera Mobi|Opera",x="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",v="webkit",w="5.0",t="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",u="Mobile/";
qx.Bootstrap.define(D,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__hc:function(d){var e=navigator.userAgent;
var g=new RegExp(B+d+m);
var h=e.match(g);

if(!h){return;
}var name=h[1].toLowerCase();
var f=h[3];
if(e.match(/Version(\/| )([0-9]+\.[0-9])/)){f=RegExp.$2;
}
if(qx.core.Variant.isSet(s,v)){if(name===p){name=n;
}else if(e.indexOf(j)!==-1||e.indexOf(u)!==-1){name=F;
}}else if(qx.core.Variant.isSet(s,z)){if(name===q){name=r;
if(qx.bom.client.System.WINCE&&name===r){name=l;
f=w;
}}}else if(qx.core.Variant.isSet(s,A)){if(name===k){name=G;
}else if(name===C){name=o;
}}this.NAME=name;
this.FULLVERSION=f;
this.VERSION=parseFloat(f,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(s,{"webkit":function(b){b.__hc(x);
},"gecko":function(i){i.__hc(t);
},"mshtml":function(c){c.__hc(E);
},"opera":function(a){a.__hc(y);
}})});
})();
(function(){var j="qx.client",i="qx.dom.Hierarchy",h="previousSibling",g="*",f="nextSibling",e="parentNode";
qx.Class.define(i,{statics:{getNodeIndex:function(q){var r=0;

while(q&&(q=q.previousSibling)){r++;
}return r;
},getElementIndex:function(x){var y=0;
var z=qx.dom.Node.ELEMENT;

while(x&&(x=x.previousSibling)){if(x.nodeType==z){y++;
}}return y;
},getNextElementSibling:function(n){while(n&&(n=n.nextSibling)&&!qx.dom.Node.isElement(n)){continue;
}return n||null;
},getPreviousElementSibling:function(R){while(R&&(R=R.previousSibling)&&!qx.dom.Node.isElement(R)){continue;
}return R||null;
},contains:qx.core.Variant.select(j,{"webkit|mshtml|opera":function(M,N){if(qx.dom.Node.isDocument(M)){var O=qx.dom.Node.getDocument(N);
return M&&O==M;
}else if(qx.dom.Node.isDocument(N)){return false;
}else{return M.contains(N);
}},"gecko":function(v,w){return !!(v.compareDocumentPosition(w)&16);
},"default":function(C,D){while(D){if(C==D){return true;
}D=D.parentNode;
}return false;
}}),isRendered:function(c){if(!c.offsetParent){return false;
}var d=c.ownerDocument||c.document;
if(d.body.contains){return d.body.contains(c);
}if(d.compareDocumentPosition){return !!(d.compareDocumentPosition(c)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Variant.select(j,{"mshtml|opera":function(S,T){if(S===T){return S;
}
while(S&&qx.dom.Node.isElement(S)){if(S.contains(T)){return S;
}S=S.parentNode;
}return null;
},"default":function(E,F){if(E===F){return E;
}var G={};
var J=qx.core.ObjectRegistry;
var I,H;

while(E||F){if(E){I=J.toHashCode(E);

if(G[I]){return G[I];
}G[I]=E;
E=E.parentNode;
}
if(F){H=J.toHashCode(F);

if(G[H]){return G[H];
}G[H]=F;
F=F.parentNode;
}}return null;
}}),getAncestors:function(b){return this._recursivelyCollect(b,e);
},getChildElements:function(U){U=U.firstChild;

if(!U){return [];
}var V=this.getNextSiblings(U);

if(U.nodeType===1){V.unshift(U);
}return V;
},getDescendants:function(o){return qx.lang.Array.fromCollection(o.getElementsByTagName(g));
},getFirstDescendant:function(p){p=p.firstChild;

while(p&&p.nodeType!=1){p=p.nextSibling;
}return p;
},getLastDescendant:function(L){L=L.lastChild;

while(L&&L.nodeType!=1){L=L.previousSibling;
}return L;
},getPreviousSiblings:function(Q){return this._recursivelyCollect(Q,h);
},getNextSiblings:function(a){return this._recursivelyCollect(a,f);
},_recursivelyCollect:function(k,l){var m=[];

while(k=k[l]){if(k.nodeType==1){m.push(k);
}}return m;
},getSiblings:function(P){return this.getPreviousSiblings(P).reverse().concat(this.getNextSiblings(P));
},isEmpty:function(K){K=K.firstChild;

while(K){if(K.nodeType===qx.dom.Node.ELEMENT||K.nodeType===qx.dom.Node.TEXT){return false;
}K=K.nextSibling;
}return true;
},cleanWhitespace:function(s){var t=s.firstChild;

while(t){var u=t.nextSibling;

if(t.nodeType==3&&!/\S/.test(t.nodeValue)){s.removeChild(t);
}t=u;
}}}});
})();
(function(){var f="qx.client",e="qx.event.type.Drag";
qx.Class.define(e,{extend:qx.event.type.Event,members:{init:function(a,b){arguments.callee.base.call(this,true,a);

if(b){this._native=b.getNativeEvent()||null;
this._originalTarget=b.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
i._native=this._native;
return i;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(m);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(k){this.getManager().addType(k);
},addAction:function(j){this.getManager().addAction(j);
},supportsType:function(g){return this.getManager().supportsType(g);
},supportsAction:function(c){return this.getManager().supportsAction(c);
},addData:function(n,o){this.getManager().addData(n,o);
},getData:function(d){return this.getManager().getData(d);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var q="losecapture",p="qx.client",o="blur",n="focus",m="click",l="qx.event.dispatch.MouseCapture",k="capture",j="scroll";
qx.Class.define(l,{extend:qx.event.dispatch.AbstractBubbling,construct:function(f,g){arguments.callee.base.call(this,f);
this.__hd=f.getWindow();
this.__he=g;
f.addListener(this.__hd,o,this.releaseCapture,this);
f.addListener(this.__hd,n,this.releaseCapture,this);
f.addListener(this.__hd,j,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__he:null,__hf:null,__hg:true,__hd:null,_getParent:function(r){return r.parentNode;
},canDispatchEvent:function(t,event,u){return (this.__hf&&this.__hh[u]);
},dispatchEvent:function(h,event,i){if(i==m){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hg||!qx.dom.Hierarchy.contains(this.__hf,h)){h=this.__hf;
}arguments.callee.base.call(this,h,event,i);
},__hh:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(a,b){var b=b!==false;

if(this.__hf===a&&this.__hg==b){return;
}
if(this.__hf){this.releaseCapture();
}this.nativeSetCapture(a,b);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(a,q,function(){qx.bom.Event.removeNativeListener(a,q,arguments.callee);
self.releaseCapture();
});
}this.__hg=b;
this.__hf=a;
this.__he.fireEvent(a,k,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hf;
},releaseCapture:function(){var s=this.__hf;

if(!s){return;
}this.__hf=null;
this.__he.fireEvent(s,q,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(p,{"mshtml":function(d,e){d.setCapture(e!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(p,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hf=this.__hd=this.__he=null;
},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Bootstrap.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(x){if(x.nodeType===9){return x.documentElement.nodeName!==d;
}else if(x.ownerDocument){return this.isXmlDocument(x.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(y,z){var A=new ActiveXObject(this.DOMDOC);
A.setProperty(n,b);

if(z){var B=h;
B+=z;

if(y){B+=f+y+o;
}B+=k;
A.loadXML(B);
}return A;
},"default":function(s,t){return document.implementation.createDocument(s||q,t||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(C){var D=qx.xml.Document.create();
D.loadXML(C);
return D;
},"default":function(E){var F=new DOMParser();
return F.parseFromString(E,e);
}})},defer:function(u){if(qx.core.Variant.isSet(r,p)){var v=[a,j];
var w=[c,g];

for(var i=0,l=v.length;i<l;i++){try{new ActiveXObject(v[i]);
new ActiveXObject(w[i]);
}catch(G){continue;
}u.DOMDOC=v[i];
u.XMLHTTP=w[i];
break;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(K,stop,L){var parent=K.parentNode;
var Q=qx.dom.Node.getDocument(K);
var M=Q.body;
var Y,W,T;
var bb,R,bc;
var U,bd,bg;
var be,O,X,N;
var S,bf,V;
var P=L===g;
var ba=L===c;
stop=stop?stop.parentNode:Q;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){W=parent.scrollLeft;
T=W+qx.bom.Viewport.getWidth();
bb=qx.bom.Viewport.getWidth();
R=parent.clientWidth;
bc=parent.scrollWidth;
U=0;
bd=0;
bg=0;
}else{Y=qx.bom.element.Location.get(parent);
W=Y.left;
T=Y.right;
bb=parent.offsetWidth;
R=parent.clientWidth;
bc=parent.scrollWidth;
U=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
bd=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
bg=bb-R-U-bd;
}be=qx.bom.element.Location.get(K);
O=be.left;
X=be.right;
N=K.offsetWidth;
S=O-W-U;
bf=X-T+bd;
V=0;
if(P){V=S;
}else if(ba){V=bf+bg;
}else if(S<0||N>R){V=S;
}else if(bf>0){V=bf+bg;
}parent.scrollLeft+=V;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoViewY:function(o,stop,p){var parent=o.parentNode;
var v=qx.dom.Node.getDocument(o);
var q=v.body;
var D,r,z;
var F,C,x;
var t,u,s;
var H,I,E,y;
var B,w,J;
var G=p===d;
var A=p===e;
stop=stop?stop.parentNode:v;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===q||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===q){r=parent.scrollTop;
z=r+qx.bom.Viewport.getHeight();
F=qx.bom.Viewport.getHeight();
C=parent.clientHeight;
x=parent.scrollHeight;
t=0;
u=0;
s=0;
}else{D=qx.bom.element.Location.get(parent);
r=D.top;
z=D.bottom;
F=parent.offsetHeight;
C=parent.clientHeight;
x=parent.scrollHeight;
t=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
u=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
s=F-C-t-u;
}H=qx.bom.element.Location.get(o);
I=H.top;
E=H.bottom;
y=o.offsetHeight;
B=I-r-t;
w=E-z+u;
J=0;
if(G){J=B;
}else if(A){J=w+s;
}else if(B<0||y>C){J=B;
}else if(w>0){J=w+s;
}parent.scrollTop+=J;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===q){break;
}parent=parent.parentNode;
}},intoView:function(l,stop,m,n){this.intoViewX(l,stop,m);
this.intoViewY(l,stop,n);
}}});
})();
(function(){var I="borderTopWidth",H="borderLeftWidth",G="marginTop",F="marginLeft",E="scroll",D="qx.client",C="border-box",B="borderBottomWidth",A="borderRightWidth",z="auto",X="padding",W="qx.bom.element.Location",V="paddingLeft",U="static",T="marginBottom",S="visible",R="BODY",Q="paddingBottom",P="paddingTop",O="marginRight",M="position",N="margin",K="overflow",L="paddingRight",J="border";
qx.Class.define(W,{statics:{__hq:function(br,bs){return qx.bom.element.Style.get(br,bs,qx.bom.element.Style.COMPUTED_MODE,false);
},__hr:function(x,y){return parseInt(qx.bom.element.Style.get(x,y,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hs:function(l){var o=0,top=0;
if(l.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var n=qx.dom.Node.getWindow(l);
o-=qx.bom.Viewport.getScrollLeft(n);
top-=qx.bom.Viewport.getScrollTop(n);
}else{var m=qx.dom.Node.getDocument(l).body;
l=l.parentNode;
while(l&&l!=m){o+=l.scrollLeft;
top+=l.scrollTop;
l=l.parentNode;
}}return {left:o,top:top};
},__ht:qx.core.Variant.select(D,{"mshtml":function(bD){var bF=qx.dom.Node.getDocument(bD);
var bE=bF.body;
var bG=0;
var top=0;
bG-=bE.clientLeft+bF.documentElement.clientLeft;
top-=bE.clientTop+bF.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bG+=this.__hr(bE,H);
top+=this.__hr(bE,I);
}return {left:bG,top:top};
},"webkit":function(bM){var bO=qx.dom.Node.getDocument(bM);
var bN=bO.body;
var bP=bN.offsetLeft;
var top=bN.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bP+=this.__hr(bN,H);
top+=this.__hr(bN,I);
}return {left:bP,top:top};
},"gecko":function(bf){var bg=qx.dom.Node.getDocument(bf).body;
var bh=bg.offsetLeft;
var top=bg.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bh+=this.__hr(bg,F);
top+=this.__hr(bg,G);
}if(qx.bom.element.BoxSizing.get(bg)!==C){bh+=this.__hr(bg,H);
top+=this.__hr(bg,I);
}return {left:bh,top:top};
},"default":function(bo){var bp=qx.dom.Node.getDocument(bo).body;
var bq=bp.offsetLeft;
var top=bp.offsetTop;
return {left:bq,top:top};
}}),__hu:qx.core.Variant.select(D,{"mshtml|webkit":function(bH){var bJ=qx.dom.Node.getDocument(bH);
if(bH.getBoundingClientRect){var bK=bH.getBoundingClientRect();
var bL=bK.left;
var top=bK.top;
}else{var bL=bH.offsetLeft;
var top=bH.offsetTop;
bH=bH.offsetParent;
var bI=bJ.body;
while(bH&&bH!=bI){bL+=bH.offsetLeft;
top+=bH.offsetTop;
bL+=this.__hr(bH,H);
top+=this.__hr(bH,I);
bH=bH.offsetParent;
}}return {left:bL,top:top};
},"gecko":function(bi){if(bi.getBoundingClientRect){var bl=bi.getBoundingClientRect();
var bm=Math.round(bl.left);
var top=Math.round(bl.top);
}else{var bm=0;
var top=0;
var bj=qx.dom.Node.getDocument(bi).body;
var bk=qx.bom.element.BoxSizing;

if(bk.get(bi)!==C){bm-=this.__hr(bi,H);
top-=this.__hr(bi,I);
}
while(bi&&bi!==bj){bm+=bi.offsetLeft;
top+=bi.offsetTop;
if(bk.get(bi)!==C){bm+=this.__hr(bi,H);
top+=this.__hr(bi,I);
}if(bi.parentNode&&this.__hq(bi.parentNode,K)!=S){bm+=this.__hr(bi.parentNode,H);
top+=this.__hr(bi.parentNode,I);
}bi=bi.offsetParent;
}}return {left:bm,top:top};
},"default":function(bc){var be=0;
var top=0;
var bd=qx.dom.Node.getDocument(bc).body;
while(bc&&bc!==bd){be+=bc.offsetLeft;
top+=bc.offsetTop;
bc=bc.offsetParent;
}return {left:be,top:top};
}}),get:function(c,d){if(c.tagName==R){var location=this.__hv(c);
var k=location.left;
var top=location.top;
}else{var e=this.__ht(c);
var j=this.__hu(c);
var scroll=this.__hs(c);
var k=j.left+e.left-scroll.left;
var top=j.top+e.top-scroll.top;
}var f=k+c.offsetWidth;
var g=top+c.offsetHeight;

if(d){if(d==X||d==E){var h=qx.bom.element.Overflow.getX(c);

if(h==E||h==z){f+=c.scrollWidth-c.offsetWidth+this.__hr(c,H)+this.__hr(c,A);
}var i=qx.bom.element.Overflow.getY(c);

if(i==E||i==z){g+=c.scrollHeight-c.offsetHeight+this.__hr(c,I)+this.__hr(c,B);
}}
switch(d){case X:k+=this.__hr(c,V);
top+=this.__hr(c,P);
f-=this.__hr(c,L);
g-=this.__hr(c,Q);
case E:k-=c.scrollLeft;
top-=c.scrollTop;
f-=c.scrollLeft;
g-=c.scrollTop;
case J:k+=this.__hr(c,H);
top+=this.__hr(c,I);
f-=this.__hr(c,A);
g-=this.__hr(c,B);
break;
case N:k-=this.__hr(c,F);
top-=this.__hr(c,G);
f+=this.__hr(c,O);
g+=this.__hr(c,T);
break;
}}return {left:k,top:top,right:f,bottom:g};
},__hv:qx.core.Variant.select(D,{"default":function(bv){var top=bv.offsetTop+this.__hr(bv,G);
var bw=bv.offsetLeft+this.__hr(bv,F);
return {left:bw,top:top};
},"mshtml":function(bB){var top=bB.offsetTop;
var bC=bB.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hr(bB,G);
bC+=this.__hr(bB,F);
}return {left:bC,top:top};
},"gecko":function(bx){var top=bx.offsetTop+this.__hr(bx,G)+this.__hr(bx,H);
var by=bx.offsetLeft+this.__hr(bx,F)+this.__hr(bx,I);
return {left:by,top:top};
}}),getLeft:function(a,b){return this.get(a,b).left;
},getTop:function(p,q){return this.get(p,q).top;
},getRight:function(bz,bA){return this.get(bz,bA).right;
},getBottom:function(bt,bu){return this.get(bt,bu).bottom;
},getRelative:function(r,s,t,u){var w=this.get(r,t);
var v=this.get(s,u);
return {left:w.left-v.left,top:w.top-v.top,right:w.right-v.right,bottom:w.bottom-v.bottom};
},getPosition:function(bn){return this.getRelative(bn,this.getOffsetParent(bn));
},getOffsetParent:function(Y){var bb=Y.offsetParent||document.body;
var ba=qx.bom.element.Style;

while(bb&&(!/^body|html$/i.test(bb.tagName)&&ba.get(bb,M)===U)){bb=bb.offsetParent;
}return bb;
}}});
})();
(function(){var u="qx.client",t="character",s="EndToEnd",r="input",q="textarea",p="StartToStart",o='character',n="qx.bom.Selection",m="button",l="#text",k="body";
qx.Class.define(n,{statics:{getSelectionObject:qx.core.Variant.select(u,{"mshtml":function(bg){return bg.selection;
},"default":function(a){return qx.dom.Node.getWindow(a).getSelection();
}}),get:qx.core.Variant.select(u,{"mshtml":function(L){var M=qx.bom.Range.get(qx.dom.Node.getDocument(L));
return M.text;
},"default":function(i){if(this.__hy(i)){return i.value.substring(i.selectionStart,i.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(i)).toString();
}}}),getLength:qx.core.Variant.select(u,{"mshtml":function(b){var d=this.get(b);
var c=qx.util.StringSplit.split(d,/\r\n/);
return d.length-(c.length-1);
},"opera":function(bm){var br,bp,bn;

if(this.__hy(bm)){var bq=bm.selectionStart;
var bo=bm.selectionEnd;
br=bm.value.substring(bq,bo);
bp=bo-bq;
}else{br=qx.bom.Selection.get(bm);
bp=br.length;
}bn=qx.util.StringSplit.split(br,/\r\n/);
return bp-(bn.length-1);
},"default":function(bs){if(this.__hy(bs)){return bs.selectionEnd-bs.selectionStart;
}else{return this.get(bs).length;
}}}),getStart:qx.core.Variant.select(u,{"mshtml":function(N){if(this.__hy(N)){var S=qx.bom.Range.get();
if(!N.contains(S.parentElement())){return -1;
}var T=qx.bom.Range.get(N);
var R=N.value.length;
T.moveToBookmark(S.getBookmark());
T.moveEnd(o,R);
return R-T.text.length;
}else{var T=qx.bom.Range.get(N);
var P=T.parentElement();
var U=qx.bom.Range.get();
U.moveToElementText(P);
var O=qx.bom.Range.get(qx.dom.Node.getBodyElement(N));
O.setEndPoint(p,T);
O.setEndPoint(s,U);
if(U.compareEndPoints(p,O)==0){return 0;
}var Q;
var V=0;

while(true){Q=O.moveStart(t,-1);
if(U.compareEndPoints(p,O)==0){break;
}if(Q==0){break;
}else{V++;
}}return ++V;
}},"gecko|webkit":function(f){if(this.__hy(f)){return f.selectionStart;
}else{var h=qx.dom.Node.getDocument(f);
var g=this.getSelectionObject(h);
if(g.anchorOffset<g.focusOffset){return g.anchorOffset;
}else{return g.focusOffset;
}}},"default":function(bf){if(this.__hy(bf)){return bf.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bf)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(u,{"mshtml":function(C){if(this.__hy(C)){var H=qx.bom.Range.get();
if(!C.contains(H.parentElement())){return -1;
}var I=qx.bom.Range.get(C);
var G=C.value.length;
I.moveToBookmark(H.getBookmark());
I.moveStart(o,-G);
return I.text.length;
}else{var I=qx.bom.Range.get(C);
var E=I.parentElement();
var J=qx.bom.Range.get();
J.moveToElementText(E);
var G=J.text.length;
var D=qx.bom.Range.get(qx.dom.Node.getBodyElement(C));
D.setEndPoint(s,I);
D.setEndPoint(p,J);
if(J.compareEndPoints(s,D)==0){return G-1;
}var F;
var K=0;

while(true){F=D.moveEnd(t,1);
if(J.compareEndPoints(s,D)==0){break;
}if(F==0){break;
}else{K++;
}}return G-(++K);
}},"gecko|webkit":function(bc){if(this.__hy(bc)){return bc.selectionEnd;
}else{var be=qx.dom.Node.getDocument(bc);
var bd=this.getSelectionObject(be);
if(bd.focusOffset>bd.anchorOffset){return bd.focusOffset;
}else{return bd.anchorOffset;
}}},"default":function(j){if(this.__hy(j)){return j.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(j)).focusOffset;
}}}),__hy:function(bl){return qx.dom.Node.isElement(bl)&&(bl.nodeName.toLowerCase()==r||bl.nodeName.toLowerCase()==q);
},set:qx.core.Variant.select(u,{"mshtml":function(W,X,Y){var ba;
if(qx.dom.Node.isDocument(W)){W=W.body;
}
if(qx.dom.Node.isElement(W)||qx.dom.Node.isText(W)){switch(W.nodeName.toLowerCase()){case r:case q:case m:if(Y===undefined){Y=W.value.length;
}
if(X>=0&&X<=W.value.length&&Y>=0&&Y<=W.value.length){ba=qx.bom.Range.get(W);
ba.collapse(true);
ba.moveStart(t,X);
ba.moveEnd(t,Y-X);
ba.select();
return true;
}break;
case l:if(Y===undefined){Y=W.nodeValue.length;
}
if(X>=0&&X<=W.nodeValue.length&&Y>=0&&Y<=W.nodeValue.length){ba=qx.bom.Range.get(qx.dom.Node.getBodyElement(W));
ba.moveToElementText(W.parentNode);
ba.collapse(true);
ba.moveStart(t,X);
ba.moveEnd(t,Y-X);
ba.select();
return true;
}break;
default:if(Y===undefined){Y=W.childNodes.length-1;
}if(W.childNodes[X]&&W.childNodes[Y]){ba=qx.bom.Range.get(qx.dom.Node.getBodyElement(W));
ba.moveToElementText(W.childNodes[X]);
ba.collapse(true);
var bb=qx.bom.Range.get(qx.dom.Node.getBodyElement(W));
bb.moveToElementText(W.childNodes[Y]);
ba.setEndPoint(s,bb);
ba.select();
return true;
}}}return false;
},"default":function(v,w,x){var B=v.nodeName.toLowerCase();

if(qx.dom.Node.isElement(v)&&(B==r||B==q)){if(x===undefined){x=v.value.length;
}if(w>=0&&w<=v.value.length&&x>=0&&x<=v.value.length){v.focus();
v.select();
v.setSelectionRange(w,x);
return true;
}}else{var z=false;
var A=qx.dom.Node.getWindow(v).getSelection();
var y=qx.bom.Range.get(v);
if(qx.dom.Node.isText(v)){if(x===undefined){x=v.length;
}
if(w>=0&&w<v.length&&x>=0&&x<=v.length){z=true;
}}else if(qx.dom.Node.isElement(v)){if(x===undefined){x=v.childNodes.length-1;
}
if(w>=0&&v.childNodes[w]&&x>=0&&v.childNodes[x]){z=true;
}}else if(qx.dom.Node.isDocument(v)){v=v.body;

if(x===undefined){x=v.childNodes.length-1;
}
if(w>=0&&v.childNodes[w]&&x>=0&&v.childNodes[x]){z=true;
}}
if(z){if(!A.isCollapsed){A.collapseToStart();
}y.setStart(v,w);
if(qx.dom.Node.isText(v)){y.setEnd(v,x);
}else{y.setEndAfter(v.childNodes[x]);
}if(A.rangeCount>0){A.removeAllRanges();
}A.addRange(y);
return true;
}}return false;
}}),setAll:function(e){return qx.bom.Selection.set(e,0);
},clear:qx.core.Variant.select(u,{"mshtml":function(bh){var bi=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bh));
var bj=qx.bom.Range.get(bh);
var parent=bj.parentElement();
var bk=qx.bom.Range.get(qx.dom.Node.getDocument(bh));
if(parent==bk.parentElement()&&parent==bh){bi.empty();
}},"default":function(bt){var bv=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bt));
var bx=bt.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bt)&&(bx==r||bx==q)){bt.setSelectionRange(0,0);
qx.bom.Element.blur(bt);
}else if(qx.dom.Node.isDocument(bt)||bx==k){bv.collapse(bt.body?bt.body:bt,0);
}else{var bw=qx.bom.Range.get(bt);

if(!bw.collapsed){var by;
var bu=bw.commonAncestorContainer;
if(qx.dom.Node.isElement(bt)&&qx.dom.Node.isText(bu)){by=bu.parentNode;
}else{by=bu;
}
if(by==bt){bv.collapse(bt,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Bootstrap.define(c,{statics:{split:function(g,h,k){var n=f;
if(h===undefined){return [g.toString()];
}else if(h===null||h.constructor!==RegExp){h=new RegExp(String(h).replace(/[.*+?^${}()|[\]\/\\]/g,b),e);
}else{n=h.toString().replace(/^[\S\s]+\//,f);

if(!h.global){h=new RegExp(h.source,e+n);
}}var m=new RegExp(a+h.source+d,n);
if(k===undefined||+k<0){k=false;
}else{k=Math.floor(+k);

if(!k){return [];
}}var p,o=[],l=0,i=0;

while((k?i++<=k:true)&&(p=h.exec(g))){if((p[0].length===0)&&(h.lastIndex>p.index)){h.lastIndex--;
}
if(h.lastIndex>l){if(p.length>1){p[0].replace(m,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){p[j]=undefined;
}}});
}o=o.concat(g.substring(l,p.index),(p.index===g.length?[]:p.slice(1)));
l=h.lastIndex;
}
if(p[0].length===0){h.lastIndex++;
}}return (l===g.length)?(h.test(f)?o:o.concat(f)):(k?o:o.concat(g.substring(l)));
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hz:{},remove:function(f){delete this.__hz[f.$$hash];
},add:function(g){var h=this.__hz;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__hz;
var e;

for(var d in c){e=c[d];
delete c[d];
e.syncWidget();
}for(var d in c){return;
}this.__hz={};
}}});
})();
(function(){var j="qx.ui.core.queue.Visibility",i="visibility";
qx.Class.define(j,{statics:{__hA:{},__hB:{},remove:function(g){var h=g.$$hash;
delete this.__hB[h];
delete this.__hA[h];
},isVisible:function(p){return this.__hB[p.$$hash]||false;
},__hC:function(c){var e=this.__hB;
var d=c.$$hash;
var f;
if(c.isExcluded()){f=false;
}else{var parent=c.$$parent;

if(parent){f=this.__hC(parent);
}else{f=c.isRootWidget();
}}return e[d]=f;
},add:function(a){var b=this.__hA;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(i);
},flush:function(){var k=this.__hA;
var o=this.__hB;
for(var l in k){if(o[l]!=null){k[l].addChildrenToQueue(k);
}}var n={};

for(var l in k){n[l]=o[l];
o[l]=null;
}for(var l in k){var m=k[l];
delete k[l];
if(o[l]==null){this.__hC(m);
}if(o[l]&&o[l]!=n[l]){m.checkAppearanceNeeds();
}}this.__hA={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__hD:{},remove:function(j){delete this.__hD[j.$$hash];
},add:function(d){var e=this.__hD;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(c){return !!this.__hD[c.$$hash];
},flush:function(){var i=qx.ui.core.queue.Visibility;
var f=this.__hD;
var h;

for(var g in f){h=f[g];
delete f[g];
if(i.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__hE:{},add:function(f){var g=this.__hE;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__hE;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__hE={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(f,g){arguments.callee.base.call(this);
this.__hF=f;
this.__hG=g||f.toHashCode();
this.useMarkup(f.getMarkup());
var h={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){h.pointerEvents=c;
}this.setStyles(h);
},members:{__hG:null,__hF:null,getId:function(){return this.__hG;
},getDecorator:function(){return this.__hF;
},resize:function(d,e){this.__hF.resize(this.getDomElement(),d,e);
},tint:function(i){this.__hF.tint(this.getDomElement(),i);
},getInsets:function(){return this.__hF.getInsets();
}},destruct:function(){this.__hF=null;
}});
})();
(function(){var g="blur",f="focus",e="input",d="load",c="qx.ui.core.EventHandler",b="activate";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__hH=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__hH:null,__hI:{focusin:1,focusout:1,focus:1,blur:1},__hJ:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(h,j){return h instanceof qx.ui.core.Widget;
},_dispatchEvent:function(k){var q=k.getTarget();
var p=qx.ui.core.Widget.getWidgetByElement(q);
var r=false;

while(p&&p.isAnonymous()){var r=true;
p=p.getLayoutParent();
}if(p&&r&&k.getType()==b){p.getContainerElement().activate();
}if(this.__hI[k.getType()]){p=p&&p.getFocusTarget();
if(!p){return;
}}if(k.getRelatedTarget){var y=k.getRelatedTarget();
var x=qx.ui.core.Widget.getWidgetByElement(y);

while(x&&x.isAnonymous()){x=x.getLayoutParent();
}
if(x){if(this.__hI[k.getType()]){x=x.getFocusTarget();
}if(x===p){return;
}}}var t=k.getCurrentTarget();
var v=qx.ui.core.Widget.getWidgetByElement(t);

if(!v||v.isAnonymous()){return;
}if(this.__hI[k.getType()]){v=v.getFocusTarget();
}var w=k.getType();

if(!v||!(v.isEnabled()||this.__hJ[w])){return;
}var m=k.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var s=this.__hH.getListeners(v,w,m);

if(!s||s.length===0){return;
}var n=qx.event.Pool.getInstance().getObject(k.constructor);
k.clone(n);
n.setTarget(p);
n.setRelatedTarget(x||null);
n.setCurrentTarget(v);
var z=k.getOriginalTarget();

if(z){var o=qx.ui.core.Widget.getWidgetByElement(z);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}n.setOriginalTarget(o);
}else{n.setOriginalTarget(q);
}for(var i=0,l=s.length;i<l;i++){var u=s[i].context||v;
s[i].handler.call(u,n);
}if(n.getPropagationStopped()){k.stopPropagation();
}
if(n.getDefaultPrevented()){k.preventDefault();
}qx.event.Pool.getInstance().poolObject(n);
},registerEvent:function(A,B,C){var D;

if(B===f||B===g){D=A.getFocusElement();
}else if(B===d||B===e){D=A.getContentElement();
}else{D=A.getContainerElement();
}
if(D){D.addListener(B,this._dispatchEvent,this,C);
}},unregisterEvent:function(E,F,G){var H;

if(F===f||F===g){H=E.getFocusElement();
}else if(F===d||F===e){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.removeListener(F,this._dispatchEvent,this,G);
}}},destruct:function(){this.__hH=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Bootstrap.define(c,{statics:{LOCALE:"",VARIANT:"",__hO:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__hO();
}});
})();
(function(){var w="",v='indexOf',u='slice',t='concat',s='toLocaleLowerCase',r="qx.type.BaseString",q='match',p='toLocaleUpperCase',o='search',n='replace',f='toLowerCase',m='charCodeAt',j='split',e='substring',d='lastIndexOf',h='substr',g='toUpperCase',k='charAt';
qx.Class.define(r,{extend:Object,construct:function(a){var a=a||w;
this.__hP=a;
this.length=a.length;
},members:{$$isString:true,length:0,__hP:null,toString:function(){return this.__hP;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(b,c){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){{};
var z=[k,m,t,v,d,q,n,o,u,j,h,e,f,g,s,p];
y.valueOf=y.toString;

if(new x(w).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__hQ=c;
this.__hR=d;
},members:{__hQ:null,__hR:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hQ,this.__hR);
}}});
})();
(function(){var k="_",j="",h="qx.dynlocale",g="on",f="_applyLocale",e="changeLocale",d="C",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hS=qx.$$translations||{};
this.__hT=qx.$$locales||{};
var K=qx.bom.client.Locale;
var I=K.LOCALE;
var J=K.VARIANT;

if(J!==j){I+=k+J;
}this.setLocale(I||this.__hU);
},statics:{tr:function(l,m){var n=qx.lang.Array.fromArguments(arguments);
n.splice(0,1);
return qx.locale.Manager.getInstance().translate(l,n);
},trn:function(v,w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,3);
if(x!=1){return qx.locale.Manager.getInstance().translate(w,z);
}else{return qx.locale.Manager.getInstance().translate(v,z);
}},trc:function(L,M,N){var O=qx.lang.Array.fromArguments(arguments);
O.splice(0,2);
return qx.locale.Manager.getInstance().translate(M,O);
},marktr:function(u){return u;
}},properties:{locale:{check:b,nullable:true,apply:f,event:e}},members:{__hU:d,__hV:null,__hW:null,__hS:null,__hT:null,getLanguage:function(){return this.__hW;
},getTerritory:function(){return this.getLocale().split(k)[1]||j;
},getAvailableLocales:function(){var t=[];

for(var s in this.__hT){if(s!=this.__hU){t.push(s);
}}return t;
},__hX:function(T){var V;
var U=T.indexOf(k);

if(U==-1){V=T;
}else{V=T.substring(0,U);
}return V;
},_applyLocale:function(W,X){this.__hV=W;
this.__hW=this.__hX(W);
},addTranslation:function(P,Q){var R=this.__hS;

if(R[P]){for(var S in Q){R[P][S]=Q[S];
}}else{R[P]=Q;
}},addLocale:function(o,p){var q=this.__hT;

if(q[o]){for(var r in p){q[o][r]=p[r];
}}else{q[o]=p;
}},translate:function(A,B,C){var H;
var F=this.__hS;

if(!F){return A;
}
if(C){var E=this.__hX(C);
}else{C=this.__hV;
E=this.__hW;
}
if(!H&&F[C]){H=F[C][A];
}
if(!H&&F[E]){H=F[E][A];
}
if(!H&&F[this.__hU]){H=F[this.__hU][A];
}
if(!H){H=A;
}
if(B.length>0){var D=[];

for(var i=0;i<B.length;i++){var G=B[i];

if(G&&G.translate){D[i]=G.translate();
}else{D[i]=G;
}}H=qx.lang.String.format(H,D);
}
if(qx.core.Variant.isSet(h,g)){H=new qx.locale.LocalizedString(H,A,B);
}return H;
},localize:function(Y,ba,bb){var bg;
var be=this.__hT;

if(!be){return Y;
}
if(bb){var bd=this.__hX(bb);
}else{bb=this.__hV;
bd=this.__hW;
}
if(!bg&&be[bb]){bg=be[bb][Y];
}
if(!bg&&be[bd]){bg=be[bd][Y];
}
if(!bg&&be[this.__hU]){bg=be[this.__hU][Y];
}
if(!bg){bg=Y;
}
if(ba.length>0){var bc=[];

for(var i=0;i<ba.length;i++){var bf=ba[i];

if(bf.translate){bc[i]=bf.translate();
}else{bc[i]=bf;
}}bg=qx.lang.String.format(bg,bc);
}
if(qx.core.Variant.isSet(h,g)){bg=new qx.locale.LocalizedString(bg,Y,ba);
}return bg;
}},destruct:function(){this.__hS=this.__hT=null;
}});
})();
(function(){var p="source",o="scale",n="no-repeat",m="mshtml",l="qx.client",k="qx.html.Image";
qx.Class.define(k,{extend:qx.html.Element,members:{_applyProperty:function(name,a){arguments.callee.base.call(this,name,a);

if(name===p){var e=this.getDomElement();
var b=this.getAllStyles();
var c=this._getProperty(p);
var d=this._getProperty(o);
var f=d?o:n;
qx.bom.element.Decoration.update(e,c,f,b);
}},_createDomElement:function(){var h=this._getProperty(o);
var i=h?o:n;

if(qx.core.Variant.isSet(l,m)){var g=this._getProperty(p);
this.setNodeName(qx.bom.element.Decoration.getTagName(i,g));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(i));
}return arguments.callee.base.call(this);
},_copyData:function(r){return arguments.callee.base.call(this,true);
},setSource:function(q){this._setProperty(p,q);
return this;
},getSource:function(){return this._getProperty(p);
},resetSource:function(){this._removeProperty(p);
return this;
},setScale:function(j){this._setProperty(o,j);
return this;
},getScale:function(){return this._getProperty(o);
}}});
})();
(function(){var A="nonScaled",z="scaled",y="alphaScaled",x=".png",w="replacement",v="hidden",u="div",t="Boolean",s="_applyScale",r="px",l="__iw",q="_applySource",o="-disabled.$1",k="img",j="changeSource",n="qx.client",m="String",p="image",i="qx.ui.basic.Image";
qx.Class.define(i,{extend:qx.ui.core.Widget,construct:function(Q){this.__iw={};
arguments.callee.base.call(this);

if(Q){this.setSource(Q);
}},properties:{source:{check:m,init:null,nullable:true,event:j,apply:q,themeable:true},scale:{check:t,init:false,themeable:true,apply:s},appearance:{refine:true,init:p},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__ix:null,__iy:null,__iz:null,__iw:null,getContentElement:function(){return this.__iD();
},_createContentElement:function(){return this.__iD();
},_getContentHint:function(){return {width:this.__ix||0,height:this.__iy||0};
},_applyEnabled:function(b,c){arguments.callee.base.call(this,b,c);

if(this.getSource()){this._styleSource();
}},_applySource:function(B){this._styleSource();
},_applyScale:function(bi){this._styleSource();
},__iA:function(H){this.__iz=H;
},__iB:function(){if(this.__iz==null){var P=this.getSource();
var O=false;

if(P!=null){O=qx.lang.String.endsWith(P,x);
}
if(this.getScale()&&O&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__iz=y;
}else if(this.getScale()){this.__iz=z;
}else{this.__iz=A;
}}return this.__iz;
},__iC:function(C){var D;
var E;

if(C==y){D=true;
E=u;
}else if(C==A){D=false;
E=u;
}else{D=true;
E=k;
}var F=new qx.html.Image(E);
F.setScale(D);
F.setStyles({"overflowX":v,"overflowY":v});
return F;
},__iD:function(){var G=this.__iB();

if(this.__iw[G]==null){this.__iw[G]=this.__iC(G);
}return this.__iw[G];
},_styleSource:function(){var a=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!a){this.getContentElement().resetSource();
return;
}this.__iE(a);
if(qx.util.ResourceManager.getInstance().has(a)){this.__iG(this.getContentElement(),a);
}else if(qx.io.ImageLoader.isLoaded(a)){this.__iH(this.getContentElement(),a);
}else{this.__iI(this.getContentElement(),a);
}},__iE:qx.core.Variant.select(n,{"mshtml":function(U){var W=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var V=qx.lang.String.endsWith(U,x);

if(W&&V){if(this.getScale()&&this.__iB()!=y){this.__iA(y);
}else if(!this.getScale()&&this.__iB()!=A){this.__iA(A);
}}else{if(this.getScale()&&this.__iB()!=z){this.__iA(z);
}else if(!this.getScale()&&this.__iB()!=A){this.__iA(A);
}}this.__iF(this.__iD());
},"default":function(T){if(this.getScale()&&this.__iB()!=z){this.__iA(z);
}else if(!this.getScale()&&this.__iB(A)){this.__iA(A);
}this.__iF(this.__iD());
}}),__iF:function(bb){var be=this.getContainerElement();
var bf=be.getChild(0);

if(bf!=bb){if(bf!=null){var bh=r;
var bc={};
var bd=this.getInnerSize();

if(bd!=null){bc.width=bd.width+bh;
bc.height=bd.height+bh;
}var bg=this.getInsets();
bc.left=bg.left+bh;
bc.top=bg.top+bh;
bb.setStyles(bc,true);
bb.setSelectable(this.getSelectable());
}be.removeAt(0);
be.addAt(bb,0);
}},__iG:function(K,L){var N=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var M=L.replace(/\.([a-z]+)$/,o);

if(N.has(M)){L=M;
this.addState(w);
}else{this.removeState(w);
}}if(K.getSource()===L){return;
}K.setSource(L);
this.__iL(N.getImageWidth(L),N.getImageHeight(L));
},__iH:function(d,e){var g=qx.io.ImageLoader;
d.setSource(e);
var f=g.getWidth(e);
var h=g.getHeight(e);
this.__iL(f,h);
},__iI:function(X,Y){var self;
var ba=qx.io.ImageLoader;
{};
if(!ba.isFailed(Y)){ba.load(Y,this.__iK,this);
}else{if(X!=null){X.resetSource();
}}},__iK:function(I,J){if(I!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(J.failed){this.warn("Image could not be loaded: "+I);
}this._styleSource();
},__iL:function(R,S){if(R!==this.__ix||S!==this.__iy){this.__ix=R;
this.__iy=S;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(l);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var h="interval",g="Number",f="_applyTimeoutInterval",e="qx.event.type.Event",d="qx.event.Idle",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){arguments.callee.base.call(this);
var a=new qx.event.Timer(this.getTimeoutInterval());
a.addListener(h,this._onInterval,this);
a.start();
this.__iM=a;
},events:{"interval":e},properties:{timeoutInterval:{check:g,init:100,apply:f}},members:{__iM:null,_applyTimeoutInterval:function(b){this.__iM.setInterval(b);
},_onInterval:function(){this.fireEvent(h);
}},destruct:function(){if(this.__iM){this.__iM.stop();
}this.__iM=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b='__iN',a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iN=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__iO:null,compute:function(B,C,D,E,F,G,H){this.__iO=this.__iO||new qx.util.placement.Placement();
var K=F.split(f);
var J=K[0];
var I=K[1];
this.__iO.set({axisX:this.__iS(G),axisY:this.__iS(H),edge:J,align:I});
return this.__iO.compute(B,C,D,E);
},__iP:null,__iQ:null,__iR:null,__iS:function(r){switch(r){case a:this.__iP=this.__iP||new qx.util.placement.DirectAxis();
return this.__iP;
case d:this.__iQ=this.__iQ||new qx.util.placement.KeepAlignAxis();
return this.__iQ;
case c:this.__iR=this.__iR||new qx.util.placement.BestFitAxis();
return this.__iR;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__iN:null,compute:function(u,v,w,x){{};
var y=this.getAxisX()||this.__iN;
var A=y.computeStart(u.width,{start:w.left,end:w.right},{start:x.left,end:x.right},v.width,this.__iT());
var z=this.getAxisY()||this.__iN;
var top=z.computeStart(u.height,{start:w.top,end:w.bottom},{start:x.top,end:x.bottom},v.height,this.__iU());
return {left:A,top:top};
},__iT:function(){var q=this.getEdge();
var p=this.getAlign();

if(q==l){return i;
}else if(q==n){return g;
}else if(p==l){return k;
}else if(p==n){return h;
}},__iU:function(){var t=this.getEdge();
var s=this.getAlign();

if(t==o){return i;
}else if(t==m){return g;
}else if(s==o){return k;
}else if(s==m){return h;
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case e:return o.start-p.end-n;
case b:return o.end+p.start;
case d:return o.start+p.start;
case c:return o.end-p.end-n;
}},_isInRange:function(k,l,m){return k>=0&&k+l<=m;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var o="mousedown",n="__iV",m="blur",l="singleton",k="qx.ui.popup.Manager";
qx.Class.define(k,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iV={};
qx.event.Registration.addListener(document.documentElement,o,this.__iX,this,true);
qx.bom.Element.addListener(window,m,this.hideAll,this);
},members:{__iV:null,add:function(a){{};
this.__iV[a.$$hash]=a;
this.__iW();
},remove:function(b){{};
var c=this.__iV;

if(c){delete c[b.$$hash];
this.__iW();
}},hideAll:function(){var f=this.__iV;

if(f){for(var d in f){f[d].exclude();
}}},__iW:function(){var r=1e7;
var q=this.__iV;

for(var p in q){q[p].setZIndex(r++);
}},__iX:function(e){var i=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var j=this.__iV;

for(var h in j){var g=j[h];

if(!g.getAutoHide()||i==g||qx.ui.core.Widget.contains(g,i)){continue;
}g.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,o,this.__iX,this,true);
this._disposeMap(n);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__hK:null,_invalidChildrenCache:null,__hL:null,invalidateLayoutCache:function(){this.__hK=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hK){return this.__hK;
}return this.__hK=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(i){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var h=this.__hL;

if(h instanceof qx.ui.core.LayoutItem){h.clearSeparators();
}},_renderSeparator:function(f,g){this.__hL.renderSeparator(f,g);
},connectToWidget:function(e){if(e&&this.__hL){throw new Error("It is not possible to manually set the connected widget.");
}this.__hL=e;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__hL;
},_applyLayoutChange:function(){if(this.__hL){this.__hL.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__hL.getLayoutChildren();
}},destruct:function(){this.__hL=this.__hK=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(m,n){var r=this._getLayoutChildren();
var q,s,p,o;
for(var i=0,l=r.length;i<l;i++){q=r[i];
s=q.getSizeHint();
p=m;

if(p<s.minWidth){p=s.minWidth;
}else if(p>s.maxWidth){p=s.maxWidth;
}o=n;

if(o<s.minHeight){o=s.minHeight;
}else if(o>s.maxHeight){o=s.maxHeight;
}q.renderLayout(0,0,p,o);
}},_computeSizeHint:function(){var h=this._getLayoutChildren();
var f,k;
var j=0,g=0;
var e=0,c=0;
var b=Infinity,d=Infinity;
for(var i=0,l=h.length;i<l;i++){f=h[i];
k=f.getSizeHint();
j=Math.max(j,k.width);
g=Math.max(g,k.height);
e=Math.max(e,k.minWidth);
c=Math.max(c,k.minHeight);
b=Math.min(b,k.maxWidth);
d=Math.min(d,k.maxHeight);
}return {width:j,height:g,minWidth:e,minHeight:c,maxWidth:b,maxHeight:d};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",w="changeIcon",v="qx.ui.basic.Atom",u="changeLabel",t="Integer",s="_applyIconPosition",r="top",q="right",p="_applyRich",o="_applyIcon",n="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(Q,R){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(Q!=null){this.setLabel(Q);
}
if(R!=null){this.setIcon(R);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:u},rich:{check:h,init:false,apply:p},icon:{check:f,apply:o,nullable:true,themeable:true,event:w},gap:{check:t,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[r,q,b,e],themeable:true,apply:s},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(A){var B;

switch(A){case j:B=new qx.ui.basic.Label(this.getLabel());
B.setAnonymous(true);
B.setRich(this.getRich());
this._add(B);

if(this.getLabel()==null||this.getShow()===i){B.exclude();
}break;
case i:B=new qx.ui.basic.Image(this.getIcon());
B.setAnonymous(true);
this._addAt(B,0);

if(this.getIcon()==null||this.getShow()===j){B.exclude();
}break;
}return B||arguments.callee.base.call(this,A);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(x,y){var z=this.getChildControl(j,true);

if(z){z.setValue(x);
}this._handleLabel();
},_applyRich:function(E,F){var G=this.getChildControl(j,true);

if(G){G.setRich(E);
}},_applyIcon:function(J,K){var L=this.getChildControl(i,true);

if(L){L.setSource(J);
}this._handleIcon();
},_applyGap:function(H,I){this._getLayout().setGap(H);
},_applyShow:function(C,D){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(O,P){this._getLayout().setIconPosition(O);
},_applyCenter:function(M,N){this._getLayout().setCenter(M);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var v=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,E,p;
var A,u;
var y=this.getGap();
var D=this.getCenter();
if(o===k||o===f){var w=length-1;
var s=-1;
var q=-1;
}else{var w=0;
var s=length;
var q=1;
}if(o==h||o==k){if(D){var z=0;

for(var i=w;i!=s;i+=q){p=r[i].getSizeHint().height;

if(p>0){z+=p;

if(i!=w){z+=y;
}}}top=Math.round((m-z)/2);
}else{top=0;
}
for(var i=w;i!=s;i+=q){A=r[i];
u=A.getSizeHint();
E=Math.min(u.maxWidth,Math.max(l,u.minWidth));
p=u.height;
F=v.computeHorizontalAlignOffset(d,E,l);
A.renderLayout(F,top,E,p);
if(p>0){top+=p+y;
}}}else{var t=l;
var n=null;
var C=0;

for(var i=w;i!=s;i+=q){A=r[i];
E=A.getSizeHint().width;

if(E>0){if(!n&&A instanceof qx.ui.basic.Label){n=A;
}else{t-=E;
}C++;
}}
if(C>1){var B=(C-1)*y;
t-=B;
}
if(n){var u=n.getSizeHint();
var x=Math.max(u.minWidth,Math.min(t,u.maxWidth));
t-=x;
}
if(D&&t>0){F=Math.round(t/2);
}else{F=0;
}
for(var i=w;i!=s;i+=q){A=r[i];
u=A.getSizeHint();
p=Math.min(u.maxHeight,Math.max(m,u.minHeight));

if(A===n){E=x;
}else{E=u.width;
}top=v.computeVerticalAlignOffset(e,u.height,m);
A.renderLayout(F,top,E,p);
if(E>0){F+=E+y;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===h||K===k){var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
N=Math.max(N,I.width);
M=Math.max(M,I.minWidth);
if(I.height>0){L+=I.height;
J+=I.minHeight;
G++;
}}
if(G>1){var H=(G-1)*P;
L+=H;
J+=H;
}}else{var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
L=Math.max(L,I.height);
J=Math.max(J,I.minHeight);
if(I.width>0){N+=I.width;
M+=I.minWidth;
G++;
}}
if(G>1){var H=(G-1)*P;
N+=H;
M+=H;
}}O={minWidth:M,width:N,minHeight:J,height:L};
}return O;
}}});
})();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(h,j,k){var n,r,m,s;
var o=j>k;
var t=Math.abs(j-k);
var u,p;
var q={};

for(r in h){n=h[r];
q[r]={potential:o?n.max-n.value:n.value-n.min,flex:o?n.flex:1/n.flex,offset:0};
}while(t!=0){s=Infinity;
m=0;

for(r in q){n=q[r];

if(n.potential>0){m+=n.flex;
s=Math.min(s,n.potential/n.flex);
}}if(m==0){break;
}s=Math.min(t,s*m)/m;
u=0;

for(r in q){n=q[r];

if(n.potential>0){p=Math.min(t,n.potential,Math.ceil(s*n.flex));
u+=p-s*n.flex;

if(u>=1){u-=1;
p-=1;
}n.potential-=p;

if(o){n.offset+=p;
}else{n.offset-=p;
}t-=p;
}}}return q;
},computeHorizontalAlignOffset:function(H,I,J,K,L){if(K==null){K=0;
}
if(L==null){L=0;
}var M=0;

switch(H){case e:M=K;
break;
case a:M=J-I-L;
break;
case d:M=Math.round((J-I)/2);
if(M<K){M=K;
}else if(M<L){M=Math.max(K,J-I-L);
}break;
}return M;
},computeVerticalAlignOffset:function(N,O,P,Q,R){if(Q==null){Q=0;
}
if(R==null){R=0;
}var S=0;

switch(N){case c:S=Q;
break;
case b:S=P-O-R;
break;
case g:S=Math.round((P-O)/2);
if(S<Q){S=Q;
}else if(S<R){S=Math.max(Q,P-O-R);
}break;
}return S;
},collapseMargins:function(T){var U=0,W=0;

for(var i=0,l=arguments.length;i<l;i++){var V=arguments[i];

if(V<0){W=Math.min(W,V);
}else if(V>0){U=Math.max(U,V);
}}return U+W;
},computeHorizontalGaps:function(bg,bh,bi){if(bh==null){bh=0;
}var bj=0;

if(bi){bj+=bg[0].getMarginLeft();

for(var i=1,l=bg.length;i<l;i+=1){bj+=this.collapseMargins(bh,bg[i-1].getMarginRight(),bg[i].getMarginLeft());
}bj+=bg[l-1].getMarginRight();
}else{for(var i=1,l=bg.length;i<l;i+=1){bj+=bg[i].getMarginLeft()+bg[i].getMarginRight();
}bj+=(bh*(l-1));
}return bj;
},computeVerticalGaps:function(v,w,x){if(w==null){w=0;
}var y=0;

if(x){y+=v[0].getMarginTop();

for(var i=1,l=v.length;i<l;i+=1){y+=this.collapseMargins(w,v[i-1].getMarginBottom(),v[i].getMarginTop());
}y+=v[l-1].getMarginBottom();
}else{for(var i=1,l=v.length;i<l;i+=1){y+=v[i].getMarginTop()+v[i].getMarginBottom();
}y+=(w*(l-1));
}return y;
},computeHorizontalSeparatorGaps:function(X,Y,ba){var bd=qx.theme.manager.Decoration.getInstance().resolve(ba);
var bc=bd.getInsets();
var bb=bc.left+bc.right;
var be=0;

for(var i=0,l=X.length;i<l;i++){var bf=X[i];
be+=bf.getMarginLeft()+bf.getMarginRight();
}be+=(Y+bb+Y)*(l-1);
return be;
},computeVerticalSeparatorGaps:function(z,A,B){var E=qx.theme.manager.Decoration.getInstance().resolve(B);
var D=E.getInsets();
var C=D.top+D.bottom;
var F=0;

for(var i=0,l=z.length;i<l;i++){var G=z[i];
F+=G.getMarginTop()+G.getMarginBottom();
}F+=(A+C+A)*(l-1);
return F;
},arrangeIdeals:function(bk,bl,bm,bn,bo,bp){if(bl<bk||bo<bn){if(bl<bk&&bo<bn){bl=bk;
bo=bn;
}else if(bl<bk){bo-=(bk-bl);
bl=bk;
if(bo<bn){bo=bn;
}}else if(bo<bn){bl-=(bn-bo);
bo=bn;
if(bl<bk){bl=bk;
}}}
if(bl>bm||bo>bp){if(bl>bm&&bo>bp){bl=bm;
bo=bp;
}else if(bl>bm){bo+=(bl-bm);
bl=bm;
if(bo>bp){bo=bp;
}}else if(bo>bp){bl+=(bo-bp);
bo=bp;
if(bl>bm){bl=bm;
}}}return {begin:bl,end:bo};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var v="qx.dynlocale",u="text",t="Boolean",s="qx.client",r="color",q="userSelect",p="changeLocale",o="enabled",n="none",m="on",Q="_applyTextAlign",P="qx.ui.core.Widget",O="gecko",N="changeTextAlign",M="_applyWrap",L="changeValue",K="changeContent",J="qx.ui.basic.Label",I="A",H="_applyValue",C="center",D="_applyBuddy",A="String",B="textAlign",y="right",z="changeRich",w="_applyRich",x="click",E="label",F="webkit",G="left";
qx.Class.define(J,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(R){arguments.callee.base.call(this);

if(R!=null){this.setValue(R);
}
if(qx.core.Variant.isSet(v,m)){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}},properties:{rich:{check:t,init:false,event:z,apply:w},wrap:{check:t,init:true,apply:M},value:{check:A,apply:H,event:L,nullable:true},buddy:{check:P,apply:D,nullable:true,init:null},textAlign:{check:[G,C,y],nullable:true,themeable:true,apply:Q,event:N},appearance:{refine:true,init:E},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iY:null,__ja:null,__jb:null,__jc:null,_getContentHint:function(){if(this.__ja){this.__jd=this.__je();
delete this.__ja;
}return {width:this.__jd.width,height:this.__jd.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(a){if(qx.core.Variant.isSet(s,O)){if(a&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,a);
if(qx.core.Variant.isSet(s,F)){this.getContainerElement().setStyle(q,a?u:n);
this.getContentElement().setStyle(q,a?u:n);
}},_getContentHeightForWidth:function(h){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__je(h).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(S,T){this.getContentElement().setStyle(B,S);
},_applyTextColor:function(k,l){if(k){this.getContentElement().setStyle(r,qx.theme.manager.Color.getInstance().resolve(k));
}else{this.getContentElement().removeStyle(r);
}},__jd:{width:0,height:0},_applyFont:function(U,V){var W;

if(U){this.__iY=qx.theme.manager.Font.getInstance().resolve(U);
W=this.__iY.getStyles();
}else{this.__iY=null;
W=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(W);
this.__ja=true;
qx.ui.core.queue.Layout.add(this);
},__je:function(b){var g=qx.bom.Label;
var d=this.getFont();
var c=d?this.__iY.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||I;
var f=this.getRich();
return f?g.getHtmlSize(content,c,b):g.getTextSize(content,c);
},_applyBuddy:function(i,j){if(j!=null){j.removeBinding(this.__jb);
this.__jb=null;
this.removeListenerById(this.__jc);
this.__jc=null;
}
if(i!=null){this.__jb=i.bind(o,this,o);
this.__jc=this.addListener(x,i.focus,i);
}},_applyRich:function(ba){this.getContentElement().setRich(ba);
this.__ja=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(bc,bd){if(bc&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(v,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(X,Y){this.getContentElement().setValue(X);
this.__ja=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(K,X,Y);
}},destruct:function(){if(qx.core.Variant.isSet(v,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}if(this.__jb!=null){var bb=this.getBuddy();

if(bb!=null&&!bb.isDisposed()){bb.removeBinding(this.__jb);
}}this.__iY=this.__jb=null;
}});
})();
(function(){var m="value",l="Please use the getValue() method instead.",k="qx.html.Label",j="Please use the setValue() method instead.";
qx.Class.define(k,{extend:qx.html.Element,members:{__jf:null,_applyProperty:function(name,c){arguments.callee.base.call(this,name,c);

if(name==m){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var b=this.__jf;
var a=qx.bom.Label.create(this._content,b);
return a;
},_copyData:function(h){return arguments.callee.base.call(this,true);
},setRich:function(e){var f=this.getDomElement();

if(f){throw new Error("The label mode cannot be modified after initial creation");
}e=!!e;

if(this.__jf==e){return;
}this.__jf=e;
return this;
},setValue:function(g){this._setProperty(m,g);
return this;
},getValue:function(){return this._getProperty(m);
},setContent:function(i){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.setValue(i);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return this.getValue();
}}});
})();
(function(){var N="qx.client",M="gecko",L="div",K="inherit",J="text",I="value",H="",G="hidden",F="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",E="nowrap",bf="auto",be="ellipsis",bd="normal",bc="label",bb="px",ba="crop",Y="end",X="100%",W="visible",V="qx.bom.Label",T="Please use the setValue() method instead.",U="opera",R="Please use the getValue() method instead.",S="block",P="none",Q="-1000px",O="absolute";
qx.Class.define(V,{statics:{__jg:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jh:function(){var r=this.__jj(false);
document.body.insertBefore(r,document.body.firstChild);
return this._textElement=r;
},__ji:function(){var v=this.__jj(true);
document.body.insertBefore(v,document.body.firstChild);
return this._htmlElement=v;
},__jj:function(b){var c=qx.bom.Element.create(L);
var d=c.style;
d.width=d.height=bf;
d.left=d.top=Q;
d.visibility=G;
d.position=O;
d.overflow=W;

if(b){d.whiteSpace=bd;
}else{d.whiteSpace=E;

if(qx.core.Variant.isSet(N,M)){var e=document.createElementNS(F,bc);
for(var f in this.__jg){e.style[f]=K;
}c.appendChild(e);
}}return c;
},__jk:function(i){var j={};

if(i){j.whiteSpace=bd;
}else if(qx.core.Variant.isSet(N,M)){j.display=S;
}else{j.overflow=G;
j.whiteSpace=E;
j.textOverflow=be;
j.userSelect=P;
if(qx.core.Variant.isSet(N,U)){j.OTextOverflow=be;
}}return j;
},create:function(content,w,x){if(!x){x=window;
}
if(w){var y=x.document.createElement(L);
y.useHtml=true;
}else if(qx.core.Variant.isSet(N,M)){var y=x.document.createElement(L);
var z=x.document.createElementNS(F,bc);
z.style.cursor=K;
z.style.color=K;
z.style.overflow=G;
z.style.maxWidth=X;
for(var A in this.__jg){z.style[A]=K;
}z.setAttribute(ba,Y);
y.appendChild(z);
}else{var y=x.document.createElement(L);
qx.bom.element.Style.setStyles(y,this.__jk(w));
}
if(content){this.setValue(y,content);
}return y;
},setValue:function(g,h){h=h||H;

if(g.useHtml){g.innerHTML=h;
}else if(qx.core.Variant.isSet(N,M)){g.firstChild.setAttribute(I,h);
}else{qx.bom.element.Attribute.set(g,J,h);
}},getValue:function(a){if(a.useHtml){return a.innerHTML;
}else if(qx.core.Variant.isSet(N,M)){return a.firstChild.getAttribute(I)||H;
}else{return qx.bom.element.Attribute.get(a,J);
}},getHtmlSize:function(content,B,C){var D=this._htmlElement||this.__ji();
D.style.width=C!==undefined?C+bb:bf;
D.innerHTML=content;
return this.__jl(D,B);
},getTextSize:function(s,t){var u=this._textElement||this.__jh();

if(qx.core.Variant.isSet(N,M)){u.firstChild.setAttribute(I,s);
}else{qx.bom.element.Attribute.set(u,J,s);
}return this.__jl(u,t);
},__jl:function(m,n){var o=this.__jg;

if(!n){n={};
}
for(var p in o){m.style[p]=n[p]||H;
}var q=qx.bom.element.Dimension.getSize(m);

if(qx.core.Variant.isSet(N,M)){if(!qx.bom.client.Platform.WIN){q.width++;
}}return q;
},setContent:function(k,l){qx.log.Logger.deprecatedMethodWarning(arguments.callee,T);
this.setValue(k,l);
},getContent:function(bg){qx.log.Logger.deprecatedMethodWarning(arguments.callee,R);
return this.getValue(bg);
}}});
})();
(function(){var h="mshtml",g="qx.client",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="paddingTop",b="paddingBottom";
qx.Class.define(f,{statics:{getWidth:qx.core.Variant.select(g,{"gecko":function(q){if(q.getBoundingClientRect){var r=q.getBoundingClientRect();
return Math.round(r.right)-Math.round(r.left);
}else{return q.offsetWidth;
}},"default":function(v){return v.offsetWidth;
}}),getHeight:qx.core.Variant.select(g,{"gecko":function(t){if(t.getBoundingClientRect){var u=t.getBoundingClientRect();
return Math.round(u.bottom)-Math.round(u.top);
}else{return t.offsetHeight;
}},"default":function(a){return a.offsetHeight;
}}),getSize:function(s){return {width:this.getWidth(s),height:this.getHeight(s)};
},__jm:{visible:true,hidden:true},getContentWidth:function(w){var y=qx.bom.element.Style;
var z=qx.bom.element.Overflow.getX(w);
var A=parseInt(y.get(w,d),10);
var C=parseInt(y.get(w,e),10);

if(this.__jm[z]){return w.clientWidth-A-C;
}else{if(w.clientWidth>=w.scrollWidth){return Math.max(w.clientWidth,w.scrollWidth)-A-C;
}else{var B=w.scrollWidth-A;
var x=qx.bom.client.Engine;

if(x.NAME===h&&x.VERSION==6){B-=C;
}return B;
}}},getContentHeight:function(j){var l=qx.bom.element.Style;
var n=qx.bom.element.Overflow.getY(j);
var o=parseInt(l.get(j,c),10);
var m=parseInt(l.get(j,b),10);

if(this.__jm[n]){return j.clientHeight-o-m;
}else{if(j.clientHeight>=j.scrollHeight){return Math.max(j.clientHeight,j.scrollHeight)-o-m;
}else{var p=j.scrollHeight-o;
var k=qx.bom.client.Engine;

if(k.NAME===h&&k.VERSION==6){p-=m;
}return p;
}}},getContentSize:function(i){return {width:this.getContentWidth(i),height:this.getContentHeight(i)};
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.form.IForm";
qx.Interface.define(c,{events:{"changeEnabled":d,"changeValid":d,"changeInvalidMessage":d,"changeRequired":d},members:{setEnabled:function(e){return arguments.length==1;
},getEnabled:function(){},setRequired:function(a){return arguments.length==1;
},getRequired:function(){},setValid:function(f){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(b){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="__jn",g="Use 'getBlocker().getContentBlockerElement()' instead.",f="Use 'getBlocker().getBlockerElement()' instead.",e="_applyBlockerColor",d="Number",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__jn=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:e,themeable:true},blockerOpacity:{check:d,init:1,apply:b,themeable:true}},members:{__jn:null,_applyBlockerColor:function(i,j){this.__jn.setColor(i);
},_applyBlockerOpacity:function(k,l){this.__jn.setOpacity(k);
},block:function(){this.__jn.block();
},isBlocked:function(){return this.__jn.isBlocked();
},unblock:function(){this.__jn.unblock();
},forceUnblock:function(){this.__jn.forceUnblock();
},blockContent:function(m){this.__jn.blockContent(m);
},isContentBlocked:function(){return this.__jn.isContentBlocked();
},unblockContent:function(){this.__jn.unblockContent();
},forceUnblockContent:function(){this.__jn.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__jn.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.__jn.getBlockerElement();
},getBlocker:function(){return this.__jn;
}},destruct:function(){this._disposeObjects(h);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__jo",b="__jp",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__jo:null,__jp:null,getWindowManager:function(){if(!this.__jp){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__jp;
},supportsMaximize:function(){return true;
},setWindowManager:function(o){if(this.__jp){this.__jp.setDesktop(null);
}o.setDesktop(this);
this.__jp=o;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);

if(k){k.setActive(true);
}
if(l){l.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(n){if(qx.Class.isDefined(i)&&n instanceof qx.ui.window.Window){this._addWindow(n);
}},_addWindow:function(m){if(!qx.lang.Array.contains(this.getWindows(),m)){this.getWindows().push(m);
m.addListener(f,this._onChangeActive,this);
m.addListener(h,this._onChangeModal,this);
m.addListener(g,this._onChangeVisibility,this);
}
if(m.getActive()){this.setActiveWindow(m);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(j){if(qx.Class.isDefined(i)&&j instanceof qx.ui.window.Window){this._removeWindow(j);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(f,this._onChangeActive,this);
p.removeListener(h,this._onChangeModal,this);
p.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__jo){this.__jo=[];
}return this.__jo;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(b);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__jq:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(u,v){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__jq;

if(!z){this.__jq=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(s,t){if(s){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(A,B){if(B===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(A===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__jq=null;
},defer:function(q,r){qx.ui.core.MChildrenHandling.remap(r);
}});
})();
(function(){var s="resize",r="position",q="0px",p="webkit",o="paddingLeft",n="$$widget",m="qx.ui.root.Application",l="hidden",k="qx.client",j="div",g="paddingTop",i="100%",h="absolute";
qx.Class.define(m,{extend:qx.ui.root.Abstract,construct:function(a){this.__jr=qx.dom.Node.getWindow(a);
this.__js=a;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__jr,s,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__jr:null,__js:null,_createContainerElement:function(){var t=this.__js;

if(qx.core.Variant.isSet(k,p)){if(!t.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var x=t.documentElement.style;
var u=t.body.style;
x.overflow=u.overflow=l;
x.padding=x.margin=u.padding=u.margin=q;
x.width=x.height=u.width=u.height=i;
var w=t.createElement(j);
t.body.appendChild(w);
var v=new qx.html.Root(w);
v.setStyle(r,h);
v.setAttribute(n,this.toHashCode());
return v;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var d=qx.bom.Viewport.getWidth(this.__jr);
var f=qx.bom.Viewport.getHeight(this.__jr);
return {minWidth:d,width:d,maxWidth:d,minHeight:f,height:f,maxHeight:f};
},_applyPadding:function(b,c,name){if(b&&(name==g||name==o)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,b,c,name);
},_applyDecorator:function(y,z){arguments.callee.base.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__jr=this.__js=null;
}});
})();
(function(){var s="zIndex",r="px",q="keydown",p="deactivate",o="This method is not needed anymore.",n="resize",m="keyup",l="keypress",k="backgroundColor",j="_applyOpacity",F="Use 'getBlockerElement' instead.",E="opacity",D="interval",C="Tab",B="__jy",A="Color",z="qx.ui.root.Page",y="__jB",x="__jw",w="Use 'getContentBlockerElement' instead.",u="Number",v="qx.ui.core.Blocker",t="_applyColor";
qx.Class.define(v,{extend:qx.core.Object,construct:function(d){arguments.callee.base.call(this);
this._widget=d;
this._isPageRoot=(qx.Class.isDefined(z)&&d instanceof qx.ui.root.Page);

if(this._isPageRoot){d.addListener(n,this.__jC,this);
}this.__jt=[];
this.__ju=[];
this.__jv=[];
},properties:{color:{check:A,init:null,nullable:true,apply:t,themeable:true},opacity:{check:u,init:1,apply:j,themeable:true}},members:{__jw:null,__jx:0,__jy:null,__jv:null,__jt:null,__ju:null,__jz:null,__jA:0,__jB:null,_isPageRoot:false,_widget:null,__jC:function(e){var G=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:G.width,height:G.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:G.width,height:G.height});
}},_applyColor:function(O,P){var Q=qx.theme.manager.Color.getInstance().resolve(O);
this.__jD(k,Q);
},_applyOpacity:function(b,c){this.__jD(E,b);
},__jD:function(L,M){var N=[];
this.__jw&&N.push(this.__jw);
this.__jy&&N.push(this.__jy);

for(var i=0;i<N.length;i++){N[i].setStyle(L,M);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
this.__jA+=1;

if(this.__jA==1){this.__jz=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
this.__jA-=1;

if(this.__jA==0){this._widget.setAnonymous(this.__jz);
}},_backupActiveWidget:function(){var T=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__jt.push(T.getActive());
this.__ju.push(T.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var J=this.__jt.length;

if(J>0){var I=this.__jt[J-1];

if(I){qx.bom.Element.activate(I);
}this.__jt.pop();
}var H=this.__ju.length;

if(H>0){var I=this.__ju[H-1];

if(I){qx.bom.Element.focus(this.__ju[H-1]);
}this.__ju.pop();
}},__jE:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__jw){this.__jw=this.__jE();
this.__jw.setStyle(s,15);
this._widget.getContainerElement().add(this.__jw);
this.__jw.exclude();
}return this.__jw;
},block:function(){this.__jx++;

if(this.__jx<2){this._backupActiveWidget();
var a=this.getBlockerElement();
a.include();
a.activate();
a.addListener(p,this.__jJ,this);
a.addListener(l,this.__jI,this);
a.addListener(q,this.__jI,this);
a.addListener(m,this.__jI,this);
}},isBlocked:function(){return this.__jx>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__jx--;

if(this.__jx<1){this.__jF();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__jx=0;
this.__jF();
},__jF:function(){this._restoreActiveWidget();
var K=this.getBlockerElement();
K.removeListener(p,this.__jJ,this);
K.removeListener(l,this.__jI,this);
K.removeListener(q,this.__jI,this);
K.removeListener(m,this.__jI,this);
K.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__jy){this.__jy=this.__jE();
this._widget.getContentElement().add(this.__jy);
this.__jy.exclude();
}return this.__jy;
},blockContent:function(U){var V=this.getContentBlockerElement();
V.setStyle(s,U);
this.__jv.push(U);

if(this.__jv.length<2){V.include();

if(this._isPageRoot){if(!this.__jB){this.__jB=new qx.event.Timer(300);
this.__jB.addListener(D,this.__jH,this);
}this.__jB.start();
this.__jH();
}}},isContentBlocked:function(){return this.__jv.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jv.pop();
var f=this.__jv[this.__jv.length-1];
var g=this.getContentBlockerElement();
g.setStyle(s,f);

if(this.__jv.length<1){this.__jG();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jv=[];
var h=this.getContentBlockerElement();
h.setStyle(s,null);
this.__jG();
},__jG:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__jB.stop();
}},__jH:function(){var R=this._widget.getContainerElement().getDomElement();
var S=qx.dom.Node.getDocument(R);
this.getContentBlockerElement().setStyles({height:S.documentElement.scrollHeight+r,width:S.documentElement.scrollWidth+r});
},__jI:function(e){if(e.getKeyIdentifier()==C){e.stop();
}},__jJ:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(n,this.__jC,this);
}this._disposeObjects(B,x,y);
this.__jz=this.__jt=this.__ju=this._widget=this.__jv=null;
}});
})();
(function(){var v="cursor",u="100%",t="dblclick",s="mshtml",r="mouseup",q="mousedown",p="disappear",o="appear",n="contextmenu",m="mousewheel",f=")",l="mouseover",i="mouseout",c="qx.html.Blocker",b="click",h="repeat",g="mousemove",j="url(",a="qx.client",k="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(x,y){arguments.callee.base.call(this);
var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
this.setStyles({position:d,width:u,height:u,opacity:y||0,backgroundColor:x});
this.addListener(q,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(g,this._stopPropagation,this);
this.addListener(l,this._stopPropagation,this);
this.addListener(i,this._stopPropagation,this);
this.addListener(m,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
if(qx.core.Variant.isSet(a,s)){this.setStyles({backgroundImage:j+qx.util.ResourceManager.getInstance().toUri(k)+f,backgroundRepeat:h});
}this.addListener(o,this.__jK,this);
this.addListener(p,this.__jK,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__jK:function(){var w=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,w,true);
}}});
})();
(function(){var V="keypress",U="focusout",T="__jL",S="activate",R="Tab",Q="singleton",P="deactivate",O="focusin",N="qx.ui.core.FocusHandler";
qx.Class.define(N,{extend:qx.core.Object,type:Q,construct:function(){arguments.callee.base.call(this);
this.__jL={};
},members:{__jL:null,__jM:null,__jN:null,__jO:null,connectTo:function(r){r.addListener(V,this.__jP,this);
r.addListener(O,this._onFocusIn,this,true);
r.addListener(U,this._onFocusOut,this,true);
r.addListener(S,this._onActivate,this,true);
r.addListener(P,this._onDeactivate,this,true);
},addRoot:function(B){this.__jL[B.$$hash]=B;
},removeRoot:function(A){delete this.__jL[A.$$hash];
},getActiveWidget:function(){return this.__jM;
},isActive:function(b){return this.__jM==b;
},getFocusedWidget:function(){return this.__jN;
},isFocused:function(a){return this.__jN==a;
},isFocusRoot:function(m){return !!this.__jL[m.$$hash];
},_onActivate:function(e){var f=e.getTarget();
this.__jM=f;
var d=this.__jQ(f);

if(d!=this.__jO){this.__jO=d;
}},_onDeactivate:function(e){var bg=e.getTarget();

if(this.__jM==bg){this.__jM=null;
}},_onFocusIn:function(e){var q=e.getTarget();

if(q!=this.__jN){this.__jN=q;
q.visualizeFocus();
}},_onFocusOut:function(e){var c=e.getTarget();

if(c==this.__jN){this.__jN=null;
c.visualizeBlur();
}},__jP:function(e){if(e.getKeyIdentifier()!=R){return;
}
if(!this.__jO){return;
}e.stopPropagation();
e.preventDefault();
var bh=this.__jN;

if(!e.isShiftPressed()){var bi=bh?this.__jU(bh):this.__jS();
}else{var bi=bh?this.__jV(bh):this.__jT();
}if(bi){bi.tabFocus();
}},__jQ:function(W){var X=this.__jL;

while(W){if(X[W.$$hash]){return W;
}W=W.getLayoutParent();
}return null;
},__jR:function(C,D){if(C===D){return 0;
}var F=C.getTabIndex()||0;
var E=D.getTabIndex()||0;

if(F!=E){return F-E;
}var K=C.getContainerElement().getDomElement();
var J=D.getContainerElement().getDomElement();
var I=qx.bom.element.Location;
var H=I.get(K);
var G=I.get(J);
if(H.top!=G.top){return H.top-G.top;
}if(H.left!=G.left){return H.left-G.left;
}var L=C.getZIndex();
var M=D.getZIndex();

if(L!=M){return L-M;
}return 0;
},__jS:function(){return this.__jY(this.__jO,null);
},__jT:function(){return this.__ka(this.__jO,null);
},__jU:function(Y){var ba=this.__jO;

if(ba==Y){return this.__jS();
}
while(Y&&Y.getAnonymous()){Y=Y.getLayoutParent();
}
if(Y==null){return [];
}var bb=[];
this.__jW(ba,Y,bb);
bb.sort(this.__jR);
var bc=bb.length;
return bc>0?bb[0]:this.__jS();
},__jV:function(g){var h=this.__jO;

if(h==g){return this.__jT();
}
while(g&&g.getAnonymous()){g=g.getLayoutParent();
}
if(g==null){return [];
}var j=[];
this.__jX(h,g,j);
j.sort(this.__jR);
var k=j.length;
return k>0?j[k-1]:this.__jT();
},__jW:function(parent,w,x){var y=parent.getLayoutChildren();
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];
if(!(z instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(z)&&z.isEnabled()&&z.isVisible()){if(z.isTabable()&&this.__jR(w,z)<0){x.push(z);
}this.__jW(z,w,x);
}}},__jX:function(parent,s,t){var u=parent.getLayoutChildren();
var v;

for(var i=0,l=u.length;i<l;i++){v=u[i];
if(!(v instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(v)&&v.isEnabled()&&v.isVisible()){if(v.isTabable()&&this.__jR(s,v)>0){t.push(v);
}this.__jX(v,s,t);
}}},__jY:function(parent,n){var o=parent.getLayoutChildren();
var p;

for(var i=0,l=o.length;i<l;i++){p=o[i];
if(!(p instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(p)&&p.isEnabled()&&p.isVisible()){if(p.isTabable()){if(n==null||this.__jR(p,n)<0){n=p;
}}n=this.__jY(p,n);
}}return n;
},__ka:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__jR(bf,bd)>0){bd=bf;
}}bd=this.__ka(bf,bd);
}}return bd;
}},destruct:function(){this._disposeMap(T);
this.__jN=this.__jM=this.__jO=null;
}});
})();
(function(){var l="qx.client",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(G,H){if(!H){H=document;
}var I=H.createElement(b);
I.type=j;
I.rel=h;
I.href=qx.util.ResourceManager.getInstance().toUri(G);
var J=H.getElementsByTagName(k)[0];
J.appendChild(I);
},createElement:qx.core.Variant.select(l,{"mshtml":function(C){var D=document.createStyleSheet();

if(C){D.cssText=C;
}return D;
},"default":function(E){var F=document.createElement(a);
F.type=j;

if(E){F.appendChild(document.createTextNode(E));
}document.getElementsByTagName(k)[0].appendChild(F);
return F.sheet;
}}),addRule:qx.core.Variant.select(l,{"mshtml":function(N,O,P){N.addRule(O,P);
},"default":function(K,L,M){K.insertRule(L+e+M+g,K.cssRules.length);
}}),removeRule:qx.core.Variant.select(l,{"mshtml":function(m,n){var o=m.rules;
var p=o.length;

for(var i=p-1;i>=0;--i){if(o[i].selectorText==n){m.removeRule(i);
}}},"default":function(Y,ba){var bb=Y.cssRules;
var bc=bb.length;

for(var i=bc-1;i>=0;--i){if(bb[i].selectorText==ba){Y.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(l,{"mshtml":function(q){var r=q.rules;
var s=r.length;

for(var i=s-1;i>=0;i--){q.removeRule(i);
}},"default":function(Q){var R=Q.cssRules;
var S=R.length;

for(var i=S-1;i>=0;i--){Q.deleteRule(i);
}}}),addImport:qx.core.Variant.select(l,{"mshtml":function(T,U){T.addImport(U);
},"default":function(t,u){t.insertRule(f+u+d,t.cssRules.length);
}}),removeImport:qx.core.Variant.select(l,{"mshtml":function(bd,be){var bf=bd.imports;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.removeImport(i);
}}},"default":function(y,z){var A=y.cssRules;
var B=A.length;

for(var i=B-1;i>=0;i--){if(A[i].href==z){y.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(l,{"mshtml":function(V){var W=V.imports;
var X=W.length;

for(var i=X-1;i>=0;i--){V.removeImport(i);
}},"default":function(v){var w=v.cssRules;
var x=w.length;

for(var i=x-1;i>=0;i--){if(w[i].type==w[i].IMPORT_RULE){v.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var t=0,s=0;
var q=0,o=0;
var m,k;
var j,g;
var c=this._getLayoutChildren();
var f,r,e;
var u,top,d,h;

for(var i=0,l=c.length;i<l;i++){f=c[i];
r=f.getLayoutProperties();
e=f.getSizeHint();
var p=f.getMarginLeft()+f.getMarginRight();
var n=f.getMarginTop()+f.getMarginBottom();
m=e.width+p;
k=e.minWidth+p;
u=r.left!=null?r.left:r.edge;

if(u&&typeof u===b){m+=u;
k+=u;
}d=r.right!=null?r.right:r.edge;

if(d&&typeof d===b){m+=d;
k+=d;
}t=Math.max(t,m);
s=Math.max(s,k);
j=e.height+n;
g=e.minHeight+n;
top=r.top!=null?r.top:r.edge;

if(top&&typeof top===b){j+=top;
g+=top;
}h=r.bottom!=null?r.bottom:r.edge;

if(h&&typeof h===b){j+=h;
g+=h;
}q=Math.max(q,j);
o=Math.max(o,g);
}return {width:t,minWidth:s,height:q,minHeight:o};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){arguments.callee.base.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){arguments.callee.base.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var e="tree",d="textfield",c="st.theme.Appearance",b="toolbar",a="menu";
qx.Theme.define(c,{appearances:{"sMap":{},"sFileManager":{},"sFileManager/tree/tree":e,"sFileManager/toolbar":b,"sSearchInput":d,"sTree":{},"sTree/tree":e,"sTree/menu":a}});
})();
(function(){var I="placeholder",H="Trash",G="",F="Button",E="Windows (C:)",D="CheckBox:",C="Documents (D:)",B="Boolean",A="RadioButton 1",z="New",bT="RepeatButton:",bS="Spinner:",bR="st.Utils",bQ='',bP="Inbox",bO="Desktop",bN="Selection",bM="icon/16/apps/office-calendar.png",bL="crystal/22x22/actions/editcopy.png",bK="Website 2",P="Text",Q="ToggleButton",N="Size",O="RadioButton 3",L="Presets",M="Network",J="ComboBox:",K="ToggleButton:",X="Options",Y="execute",bn="RadioButton",bj="Sent",bv="0",bq="/",bG="Delete",bA="Files",be="PasswordField:",bJ="SplitButton",bI="crystal/22x22/actions/editcut.png",bH="RadioButtons:",bc="Cut",bg="dd.mm.YYYY",bi="crystal/22x22/actions/editpaste.png",bl="Workspace",bo="List:",br="Buttons",bx="Option",bC="Type",R="password",S="Button:",bf="Website 1",bu="Junk #",bt="Paste",bs="DateField:",bz="SplitButton:",by="MenuButton:",bp="Copy",bw="Name",w="Data",bB="crystal/22x22/actions/trash.png",T="RadioButton 2",U="CheckBox",bk="SelectBox:",x="crystal/22x22/actions/edit_add.png",y="A date",bb="MenuButton",V="TextArea:",W="Modified",ba="Number",bm="Slider:",bE="TextField:",bD="Item ",bh="Website 3",bF="Edit",bd="RadioButtonGroup:";
qx.Class.define(bR,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},statics:{createMenu:function(){var q=new qx.ui.menu.Menu();
var u=new qx.ui.menu.Button(z,x);
q.add(u);
var v=new qx.ui.menu.Button(bc,bI);
q.add(v);
var t=new qx.ui.menu.Button(bp,bL);
q.add(t);
var r=new qx.ui.menu.Button(bt,bi);
q.add(r);
var s=new qx.ui.menu.Button(bG,bB);
q.add(s);
return q;
},createDummyTree:function(){var k=new qx.ui.tree.Tree().set({width:200});
k.setDecorator(null);
var p=new qx.ui.tree.TreeFolder(bq);
p.setOpen(true);
k.setRoot(p);
var n=new qx.ui.tree.TreeFolder(bO);
n.setOpen(true);
p.add(n);
var e=new qx.ui.tree.TreeFolder(bA);
var c=new qx.ui.tree.TreeFolder(bl);
var d=new qx.ui.tree.TreeFolder(M);
var b=new qx.ui.tree.TreeFolder(H);
n.add(e,c,d,b);
var l=new qx.ui.tree.TreeFile(E);
var a=new qx.ui.tree.TreeFile(C);
c.add(l,a);
var o=new qx.ui.tree.TreeFolder(bP);
var f=new qx.ui.tree.TreeFolder(L);
var j=new qx.ui.tree.TreeFolder(bj);
var h=new qx.ui.tree.TreeFolder(H);

for(var i=0;i<100;i++){h.add(new qx.ui.tree.TreeFile(bu+i));
}var m=new qx.ui.tree.TreeFolder(w);
var g=new qx.ui.tree.TreeFolder(bF);
o.add(f,j,h,m,g);
p.add(o);
return k;
},createDummyTable:function(){var ck=[];
var cn=new Date().getTime();
var ch=400*24*60*60*1000;

for(var co=0;co<30;co++){var cl=new Date(cn+Math.random()*ch-ch/2);
ck.push([bQ,co,cl,Math.random()*10000,(Math.random()>0.5)]);
}var cj=this._tableModel=new qx.ui.table.model.Simple();
cj.setColumns([G,bw,W,bC,N]);
cj.setData(ck);
cj.setColumnEditable(1,true);
cj.setColumnEditable(2,true);
cj.setColumnSortable(3,false);
var cm=new qx.ui.table.Table(cj);
cm.set({decorator:null});
cm.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var ci=cm.getTableColumnModel();
ci.setDataCellRenderer(4,new qx.ui.table.cellrenderer.Boolean());
ci.setHeaderCellRenderer(2,new qx.ui.table.headerrenderer.Icon(bM,y));
return cm;
},createForm:function(){var cG=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var ct=new qx.ui.groupbox.GroupBox(P);
ct.setLayout(new qx.ui.layout.Grid(8,8));
ct.setWidth(290);
cG.add(ct,{left:20,top:10});
var cQ=new qx.ui.form.TextField();
cQ.setRequired(true);
cQ.setPlaceholder(I);
var cB=new qx.ui.basic.Label(bE);
cB.setBuddy(cQ);
ct.add(cB,{row:0,column:0});
ct.add(cQ,{row:0,column:1});
var cz=new qx.ui.form.PasswordField();
cz.setPlaceholder(R);
cB=new qx.ui.basic.Label(be);
cB.setBuddy(cz);
ct.add(cB,{row:1,column:0});
ct.add(cz,{row:1,column:1});
var cu=new qx.ui.form.TextArea();
cu.setPlaceholder(I);
cB=new qx.ui.basic.Label(V);
cB.setBuddy(cu);
ct.add(cB,{row:2,column:0});
ct.add(cu,{row:2,column:1});
var cv=new qx.ui.form.ComboBox();
cv.setPlaceholder(I);
cB=new qx.ui.basic.Label(J);
cB.setBuddy(cv);
ct.add(cB,{row:3,column:0});
ct.add(cv,{row:3,column:1});
st.Utils.createItems(cv);
var cJ=new qx.ui.form.DateField();
cJ.setPlaceholder(bg);
cB=new qx.ui.basic.Label(bs);
cB.setBuddy(cJ);
ct.add(cB,{row:4,column:0});
ct.add(cJ,{row:4,column:1});
var cA=new qx.ui.groupbox.GroupBox(bN);
cA.setLayout(new qx.ui.layout.Grid(8,8));
cA.setWidth(290);
cG.add(cA,{left:20,top:260});
var cK=new qx.ui.form.SelectBox();
cB=new qx.ui.basic.Label(bk);
cB.setBuddy(cK);
cA.add(cB,{row:0,column:0});
cA.add(cK,{row:0,column:1});
this.createItems(cK);
var cP=new qx.ui.form.List();
cP.setHeight(60);
cP.setWidth(155);
cB=new qx.ui.basic.Label(bo);
cB.setBuddy(cP);
cA.add(cB,{row:1,column:0});
cA.add(cP,{row:1,column:1});
st.Utils.createItems(cP);
var cI=new qx.ui.form.RadioButtonGroup();
cI.add(new qx.ui.form.RadioButton(A));
cI.add(new qx.ui.form.RadioButton(T));
cI.add(new qx.ui.form.RadioButton(O));
cB=new qx.ui.basic.Label(bd);
cB.setBuddy(cI);
cA.add(cB,{row:2,column:0});
cA.add(cI,{row:2,column:1});
var cN=new qx.ui.groupbox.GroupBox(br);
cN.setLayout(new qx.ui.layout.Grid(8,8));
cN.setWidth(210);
cG.add(cN,{left:330,top:10});
var cO=new qx.ui.form.Button(F);
cB=new qx.ui.basic.Label(S);
cB.setBuddy(cO);
cN.add(cB,{row:0,column:0});
cN.add(cO,{row:0,column:1});
var cx=new qx.ui.form.ToggleButton(Q);
cB=new qx.ui.basic.Label(K);
cB.setBuddy(cx);
cN.add(cB,{row:1,column:0});
cN.add(cx,{row:1,column:1});
var cE=new qx.ui.form.RepeatButton(bv);
cB=new qx.ui.basic.Label(bT);
cB.setBuddy(cE);
cN.add(cB,{row:2,column:0});
cN.add(cE,{row:2,column:1});
var cF=new qx.ui.form.MenuButton(bb,null,st.Utils.createMenuForMenuButton());
cB=new qx.ui.basic.Label(by);
cB.setBuddy(cF);
cN.add(cB,{row:3,column:0});
cN.add(cF,{row:3,column:1});
var cy=new qx.ui.form.SplitButton(bJ,null,st.Utils.createMenuForSplitButton());
cB=new qx.ui.basic.Label(bz);
cB.setBuddy(cy);
cN.add(cB,{row:4,column:0});
cN.add(cy,{row:4,column:1});
cE.addListener(Y,function(){var cg=parseInt(cE.getLabel())+1;
cE.setLabel(cg.toString());
});
var cw=new qx.ui.groupbox.GroupBox(B);
cw.setLayout(new qx.ui.layout.Grid(8,8));
cw.setWidth(210);
cG.add(cw,{left:330,top:210});
var cL=new qx.ui.form.CheckBox(U);
cB=new qx.ui.basic.Label(D);
cB.setBuddy(cL);
cw.add(cB,{row:0,column:0});
cw.add(cL,{row:0,column:1});
var cD=new qx.ui.form.RadioButton(bn);
cw.add(new qx.ui.basic.Label(bH),{row:1,column:0});
cw.add(cD,{row:1,column:1});
var cM=new qx.ui.groupbox.GroupBox(ba);
cM.setLayout(new qx.ui.layout.Grid(8,8));
cM.setWidth(210);
cG.add(cM,{left:330,top:310});
var cC=new qx.ui.form.Spinner(0,50,100);
cB=new qx.ui.basic.Label(bS);
cB.setBuddy(cC);
cM.add(cB,{row:0,column:0});
cM.add(cC,{row:0,column:1});
var cH=new qx.ui.form.Slider();
cH.setWidth(130);
cB=new qx.ui.basic.Label(bm);
cB.setBuddy(cH);
cM.add(cB,{row:1,column:0});
cM.add(cH,{row:1,column:1});
return cG;
},createItems:function(bY){for(var i=0;i<5;i++){var ca=new qx.ui.form.ListItem(bD+i);
bY.add(ca);
}},createMenuForMenuButton:function(){var cb=new qx.ui.menu.Menu;

for(var i=0;i<3;i++){cb.add(new qx.ui.menu.RadioButton(bx+i));
}var ce=new qx.ui.form.RadioGroup;
ce.add.apply(ce,cb.getChildren());
var cd=new qx.ui.menu.Menu();

for(var i=0;i<3;i++){var cf=new qx.ui.menu.Button(F+i);
cd.add(cf);
}var cc=new qx.ui.menu.Button(X,G,null,cb);
cd.addSeparator();
cd.add(cc);
return cd;
},createMenuForSplitButton:function(){var cp=new qx.ui.menu.Menu;
var cs=new qx.ui.menu.Button(bf);
var cq=new qx.ui.menu.Button(bK);
var cr=new qx.ui.menu.Button(bh);
cp.add(cs);
cp.add(cq);
cp.add(cr);
return cp;
},getChildByAttribute:function(bU,bV,bW){if(bU.children!=null){for(var i=0;i<bU.children.length;i++){var bX=bU.children[i];

if(bX.attributes&&bX.attributes[bV]==bW){return bX;
}}}return null;
}}});
})();
(function(){var D="slidebar",C="Integer",B="resize",A="qx.ui.core.Widget",z="selected",y="visible",x="Boolean",w="mouseout",v="excluded",u="menu",S="_applySelectedButton",R="_applySpacingY",Q="_blocker",P="_applyCloseInterval",O="_applyBlockerColor",N="_applyIconColumnWidth",M="mouseover",L="_applyArrowColumnWidth",K="qx.ui.menu.Menu",J="Color",H="Number",I="_applyOpenInterval",F="_applySpacingX",G="_applyBlockerOpacity",E="_applyOpenedButton";
qx.Class.define(K,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var l=this.getApplicationRoot();
l.add(this);
this.addListener(M,this._onMouseOver);
this.addListener(w,this._onMouseOut);
this.addListener(B,this._onResize,this);
l.addListener(B,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(l);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:u},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:v},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:C,apply:F,init:0,themeable:true},spacingY:{check:C,apply:R,init:0,themeable:true},iconColumnWidth:{check:C,init:0,themeable:true,apply:N},arrowColumnWidth:{check:C,init:0,themeable:true,apply:L},blockerColor:{check:J,init:null,nullable:true,apply:O,themeable:true},blockerOpacity:{check:H,init:1,apply:G,themeable:true},selectedButton:{check:A,nullable:true,apply:S},openedButton:{check:A,nullable:true,apply:E},opener:{check:A,nullable:true},openInterval:{check:C,themeable:true,init:250,apply:I},closeInterval:{check:C,themeable:true,init:250,apply:P},blockBackground:{check:x,themeable:true,init:false}},members:{__lE:null,__lF:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__lH();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__lH();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(o){this.placeToPoint(o);
this.__lH();
this.show();
this._placementTarget=o;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var m=[];
var n=this.getChildren();

for(var i=0;i<n.length;i++){if(n[i].isEnabled()){m.push(n[i]);
}}return m;
},_applyIconColumnWidth:function(bq,br){this._getMenuLayout().setIconColumnWidth(bq);
},_applyArrowColumnWidth:function(p,q){this._getMenuLayout().setArrowColumnWidth(p);
},_applySpacingX:function(bl,bm){this._getMenuLayout().setColumnSpacing(bl);
},_applySpacingY:function(bd,be){this._getMenuLayout().setSpacing(bd);
},_applyVisibility:function(a,b){arguments.callee.base.call(this,a,b);
var c=qx.ui.menu.Manager.getInstance();

if(a===y){c.add(this);
var d=this.getParentMenu();

if(d){d.setOpenedButton(this.getOpener());
}}else if(b===y){c.remove(this);
var d=this.getParentMenu();

if(d&&d.getOpenedButton()==this.getOpener()){d.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__lG();
},__lG:function(){if(this.isVisible()){if(this.getBlockBackground()){var T=this.getZIndex();
this._blocker.blockContent(T-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var U=this.getOpener();

if(!U||!(U instanceof qx.ui.menu.AbstractButton)){return null;
}
while(U&&!(U instanceof qx.ui.menu.Menu)){U=U.getLayoutParent();
}return U;
},_applySelectedButton:function(r,s){if(s){s.removeState(z);
}
if(r){r.addState(z);
}},_applyOpenedButton:function(j,k){if(k){k.getMenu().exclude();
}
if(j){j.getMenu().open();
}},_applyBlockerColor:function(bn,bo){this._blocker.setColor(bn);
},_applyBlockerOpacity:function(bb,bc){this._blocker.setOpacity(bb);
},_createChildControlImpl:function(V){var W;

switch(V){case D:var W=new qx.ui.menu.MenuSlideBar();
var Y=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var X=W.getLayout();
W.setLayout(Y);
X.dispose();
var ba=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<ba.length;i++){W.add(ba[i]);
}this.removeListener(B,this._onResize,this);
W.getChildrenContainer().addListener(B,this._onResize,this);
this.add(W);
break;
}return W||arguments.callee.base.call(this,V);
},_getMenuLayout:function(){if(this.hasChildControl(D)){return this.getChildControl(D).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(D)){return this.getChildControl(D).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__lH:function(){var g=this._getMenuBounds();

if(!g){this.addListenerOnce(B,this.__lH,this);
return;
}var f=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var h=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(g.height+top);
this.moveTo(h,0);
});
}else if(top+g.height>f){this._assertSlideBar(function(){this.setHeight(f-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bp){if(this.hasChildControl(D)){return bp.call(this);
}this.__lF=bp;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(D);

if(this.__lF){this.__lF.call(this);
delete this.__lF;
}},_onResize:function(){if(this.isVisible()){var t=this._placementTarget;

if(!t){return;
}else if(t instanceof qx.ui.core.Widget){this.placeToWidget(t);
}else if(t.top!==undefined){this.placeToPoint(t);
}else{throw new Error("Unknown target: "+t);
}this.__lH();
}},_onMouseOver:function(e){var bg=qx.ui.menu.Manager.getInstance();
bg.cancelClose(this);
var bh=e.getTarget();

if(bh.isEnabled()&&bh instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bh);
var bf=bh.getMenu&&bh.getMenu();

if(bf){bf.setOpener(bh);
bg.scheduleOpen(bf);
this.__lE=bf;
}else{var bi=this.getOpenedButton();

if(bi){bg.scheduleClose(bi.getMenu());
}
if(this.__lE){bg.cancelOpen(this.__lE);
this.__lE=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bj=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bk=this.getOpenedButton();
bk?this.setSelectedButton(bk):this.resetSelectedButton();
if(bk){bj.cancelClose(bk.getMenu());
}if(this.__lE){bj.cancelOpen(this.__lE);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(B,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(Q);
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(bi,bj,bk){arguments.callee.base.call(this);

if(bi){this.setSpacing(bi);
}
if(bj){this.setAlignY(bj);
}
if(bk){this.setSeparator(bk);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__kL:null,__kM:null,__kN:null,__kO:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kP:function(){var bh=this._getLayoutChildren();
var length=bh.length;
var bd=false;
var bc=this.__kL&&this.__kL.length!=length&&this.__kM&&this.__kL;
var bf;
var be=bc?this.__kL:new Array(length);
var bg=bc?this.__kM:new Array(length);
if(this.getReversed()){bh=bh.concat().reverse();
}for(var i=0;i<length;i++){bf=bh[i].getLayoutProperties();

if(bf.height!=null){be[i]=parseFloat(bf.height)/100;
}
if(bf.flex!=null){bg[i]=bf.flex;
bd=true;
}else{bg[i]=0;
}}if(!bc){this.__kL=be;
this.__kM=bg;
}this.__kN=bd;
this.__kO=bh;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(o,p){if(this._invalidChildrenCache){this.__kP();
}var w=this.__kO;
var length=w.length;
var G=qx.ui.layout.Util;
var F=this.getSpacing();
var J=this.getSeparator();

if(J){var t=G.computeVerticalSeparatorGaps(w,F,J);
}else{var t=G.computeVerticalGaps(w,F,true);
}var i,r,s,A;
var B=[];
var H=t;

for(i=0;i<length;i+=1){A=this.__kL[i];
s=A!=null?Math.floor((p-t)*A):w[i].getSizeHint().height;
B.push(s);
H+=s;
}if(this.__kN&&H!=p){var y={};
var E,I;

for(i=0;i<length;i+=1){E=this.__kM[i];

if(E>0){x=w[i].getSizeHint();
y[i]={min:x.minHeight,value:B[i],max:x.maxHeight,flex:E};
}}var u=G.computeFlexOffsets(y,p,H);

for(i in u){I=u[i].offset;
B[i]+=I;
H+=I;
}}var top=w[0].getMarginTop();
if(H<p&&this.getAlignY()!=m){top=p-H;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var x,L,C,s,z,D,v;
this._clearSeparators();
if(J){var K=qx.theme.manager.Decoration.getInstance().resolve(J).getInsets();
var q=K.top+K.bottom;
}for(i=0;i<length;i+=1){r=w[i];
s=B[i];
x=r.getSizeHint();
D=r.getMarginLeft();
v=r.getMarginRight();
C=Math.max(x.minWidth,Math.min(o-D-v,x.maxWidth));
L=G.computeHorizontalAlignOffset(r.getAlignX()||this.getAlignX(),C,o,D,v);
if(i>0){if(J){top+=z+F;
this._renderSeparator(J,{top:top,left:0,height:q,width:o});
top+=q+F+r.getMarginTop();
}else{top+=G.collapseMargins(F,z,r.getMarginTop());
}}r.renderLayout(L,top,C,s);
top+=s;
z=r.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kP();
}var S=qx.ui.layout.Util;
var bb=this.__kO;
var O=0,R=0,Q=0;
var M=0,T=0;
var X,N,ba;
for(var i=0,l=bb.length;i<l;i+=1){X=bb[i];
N=X.getSizeHint();
R+=N.height;
var W=this.__kM[i];
var P=this.__kL[i];

if(W){O+=N.minHeight;
}else if(P){Q=Math.max(Q,Math.round(N.minHeight/P));
}else{O+=N.height;
}ba=X.getMarginLeft()+X.getMarginRight();
if((N.width+ba)>T){T=N.width+ba;
}if((N.minWidth+ba)>M){M=N.minWidth+ba;
}}O+=Q;
var V=this.getSpacing();
var Y=this.getSeparator();

if(Y){var U=S.computeVerticalSeparatorGaps(bb,V,Y);
}else{var U=S.computeVerticalGaps(bb,V,true);
}return {minHeight:O+U,height:R+U,minWidth:M,width:T};
}},destruct:function(){this.__kL=this.__kM=this.__kO=null;
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__lI:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__lI=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=arguments.callee.base.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__lI||null;
}},destruct:function(){this.__lI=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var bw="keypress",bv="interval",bu="keydown",bt="mousedown",bs="keyup",br="blur",bq="Enter",bp="__ly",bo="Up",bn="Escape",bh="qx.ui.menu.Manager",bm="Left",bk="__lz",bg="Down",bf="Right",bj="__lx",bi="singleton",bl="Space";
qx.Class.define(bh,{type:bi,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lx=[];
var bA=document.body;
var bB=qx.event.Registration;
bB.addListener(window.document.documentElement,bt,this._onMouseDown,this,true);
bB.addListener(bA,bu,this._onKeyUpDown,this,true);
bB.addListener(bA,bs,this._onKeyUpDown,this,true);
bB.addListener(bA,bw,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,br,this.hideAll,this);
this.__ly=new qx.event.Timer;
this.__ly.addListener(bv,this._onOpenInterval,this);
this.__lz=new qx.event.Timer;
this.__lz.addListener(bv,this._onCloseInterval,this);
},members:{__lA:null,__lB:null,__ly:null,__lz:null,__lx:null,_getChild:function(z,A,B,C){var D=z.getChildren();
var length=D.length;
var E;

for(var i=A;i<length&&i>=0;i+=B){E=D[i];

if(E.isEnabled()&&!E.isAnonymous()){return E;
}}
if(C){i=i==length?0:length-1;

for(;i!=A;i+=B){E=D[i];

if(E.isEnabled()&&!E.isAnonymous()){return E;
}}}return null;
},_isInMenu:function(bD){while(bD){if(bD instanceof qx.ui.menu.Menu){return true;
}bD=bD.getLayoutParent();
}return false;
},_getMenuButton:function(W){while(W){if(W instanceof qx.ui.menu.AbstractButton){return W;
}W=W.getLayoutParent();
}return null;
},add:function(t){{};
var u=this.__lx;
u.push(t);
t.setZIndex(1e6+u.length);
},remove:function(N){{};
var O=this.__lx;

if(O){qx.lang.Array.remove(O,N);
}},hideAll:function(){var V=this.__lx;

if(V){for(var i=V.length-1;i>=0;i--){V[i].exclude();
}}},getActiveMenu:function(){var bC=this.__lx;
return bC.length>0?bC[bC.length-1]:null;
},scheduleOpen:function(bx){this.cancelClose(bx);
if(bx.isVisible()){if(this.__lA){this.cancelOpen(this.__lA);
}}else if(this.__lA!=bx){this.__lA=bx;
this.__ly.restartWith(bx.getOpenInterval());
}},scheduleClose:function(v){this.cancelOpen(v);
if(!v.isVisible()){if(this.__lB){this.cancelClose(this.__lB);
}}else if(this.__lB!=v){this.__lB=v;
this.__lz.restartWith(v.getCloseInterval());
}},cancelOpen:function(y){if(this.__lA==y){this.__ly.stop();
this.__lA=null;
}},cancelClose:function(F){if(this.__lB==F){this.__lz.stop();
this.__lB=null;
}},_onOpenInterval:function(e){this.__ly.stop();
this.__lA.open();
this.__lA=null;
},_onCloseInterval:function(e){this.__lz.stop();
this.__lB.exclude();
this.__lB=null;
},_onMouseDown:function(e){var P=e.getTarget();
P=qx.ui.core.Widget.getWidgetByElement(P);
if(P==null){this.hideAll();
return;
}if(P.getMenu&&P.getMenu()&&P.getMenu().isVisible()){return;
}if(this.__lx.length>0&&!this._isInMenu(P)){this.hideAll();
}},__lC:{"Enter":1,"Space":1},__lD:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var by=this.getActiveMenu();

if(!by){return;
}var bz=e.getKeyIdentifier();

if(this.__lD[bz]||(this.__lC[bz]&&by.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var Q=this.getActiveMenu();

if(!Q){return;
}var R=e.getKeyIdentifier();
var T=this.__lD[R];
var S=this.__lC[R];

if(T){switch(R){case bo:this._onKeyPressUp(Q);
break;
case bg:this._onKeyPressDown(Q);
break;
case bm:this._onKeyPressLeft(Q);
break;
case bf:this._onKeyPressRight(Q);
break;
case bn:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(S){var U=Q.getSelectedButton();

if(U){switch(R){case bq:this._onKeyPressEnter(Q,U,e);
break;
case bl:this._onKeyPressSpace(Q,U,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(l){var m=l.getSelectedButton();
var n=l.getChildren();
var p=m?l.indexOf(m)-1:n.length-1;
var o=this._getChild(l,p,-1,true);
if(o){l.setSelectedButton(o);
}else{l.resetSelectedButton();
}},_onKeyPressDown:function(X){var Y=X.getSelectedButton();
var bb=Y?X.indexOf(Y)+1:0;
var ba=this._getChild(X,bb,1,true);
if(ba){X.setSelectedButton(ba);
}else{X.resetSelectedButton();
}},_onKeyPressLeft:function(G){var L=G.getOpener();

if(!L){return;
}if(L instanceof qx.ui.menu.Button){var I=L.getLayoutParent();
I.resetOpenedButton();
I.setSelectedButton(L);
}else if(L instanceof qx.ui.menubar.Button){var K=L.getMenuBar().getMenuButtons();
var H=K.indexOf(L);
if(H===-1){return;
}var M=null;
var length=K.length;

for(var i=1;i<=length;i++){var J=K[(H-i+length)%length];

if(J.isEnabled()){M=J;
break;
}}
if(M&&M!=L){M.open(true);
}}},_onKeyPressRight:function(a){var c=a.getSelectedButton();
if(c){var b=c.getMenu();

if(b){a.setOpenedButton(c);
var k=this._getChild(b,0,1);

if(k){b.setSelectedButton(k);
}return;
}}else if(!a.getOpenedButton()){var k=this._getChild(a,0,1);

if(k){a.setSelectedButton(k);

if(k.getMenu()){a.setOpenedButton(k);
}return;
}}var h=a.getOpener();
if(h instanceof qx.ui.menu.Button&&c){while(h){h=h.getLayoutParent();

if(h instanceof qx.ui.menu.Menu){h=h.getOpener();

if(h instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!h){return;
}}if(h instanceof qx.ui.menubar.Button){var g=h.getMenuBar().getMenuButtons();
var d=g.indexOf(h);
if(d===-1){return;
}var j=null;
var length=g.length;

for(var i=1;i<=length;i++){var f=g[(d+i)%length];

if(f.isEnabled()){j=f;
break;
}}
if(j&&j!=h){j.open(true);
}}},_onKeyPressEnter:function(q,r,e){if(r.hasListener(bw)){var s=e.clone();
s.setBubbles(false);
s.setTarget(r);
r.dispatchEvent(s);
}this.hideAll();
},_onKeyPressSpace:function(bc,bd,e){if(bd.hasListener(bw)){var be=e.clone();
be.setBubbles(false);
be.setTarget(bd);
bd.dispatchEvent(be);
}}},destruct:function(){var x=qx.event.Registration;
var w=document.body;
x.removeListener(window.document.documentElement,bt,this._onMouseDown,this,true);
x.removeListener(w,bu,this._onKeyUpDown,this,true);
x.removeListener(w,bs,this._onKeyUpDown,this,true);
x.removeListener(w,bw,this._onKeyPress,this,true);
this._disposeObjects(bp,bk);
this._disposeArray(bj);
}});
})();
(function(){var u="execute",t="toolTipText",s="icon",r="label",q="qx.ui.core.MExecutable",p="value",o="qx.event.type.Event",n="_applyCommand",m="enabled",l="menu",j="changeCommand",k="qx.ui.core.Command";
qx.Mixin.define(q,{events:{"execute":o},properties:{command:{check:k,apply:n,event:j,nullable:true}},members:{__lt:null,__lu:false,__lv:null,_bindableProperties:[m,r,s,t,p,l],execute:function(){var a=this.getCommand();

if(a){if(this.__lu){this.__lu=false;
}else{this.__lu=true;
a.execute(this);
}}this.fireEvent(u);
},__lw:function(e){if(this.__lu){this.__lu=false;
return;
}this.__lu=true;
this.execute();
},_applyCommand:function(b,c){if(c!=null){c.removeListenerById(this.__lv);
}
if(b!=null){this.__lv=b.addListener(u,this.__lw,this);
}var g=this.__lt;

if(g==null){this.__lt=g={};
}
for(var i=0;i<this._bindableProperties.length;i++){var f=this._bindableProperties[i];
if(c!=null&&g[f]!=null){c.removeBinding(g[f]);
g[f]=null;
}if(b!=null&&qx.Class.hasProperty(this.constructor,f)){var d=b.get(f);

if(d==null){var h=this.get(f);
}g[f]=b.bind(f,this,f);
if(h){this.set(f,h);
}}}}},destruct:function(){this.__lt=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var x="icon",w="label",v="arrow",u="shortcut",t="changeLocale",s="qx.dynlocale",r="submenu",q="on",p="String",o="qx.ui.menu.Menu",i="qx.ui.menu.AbstractButton",n="keypress",l="",h="_applyIcon",g="mouseup",k="abstract",j="_applyLabel",m="_applyMenu",f="changeCommand";
qx.Class.define(i,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:k,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(g,this._onMouseUp);
this.addListener(n,this._onKeyPress);
this.addListener(f,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:p,apply:j,nullable:true},menu:{check:o,apply:m,nullable:true},icon:{check:p,apply:h,themeable:true,nullable:true}},members:{_createChildControlImpl:function(I){var J;

switch(I){case x:J=new qx.ui.basic.Image;
J.setAnonymous(true);
this._add(J,{column:0});
break;
case w:J=new qx.ui.basic.Label;
J.setAnonymous(true);
this._add(J,{column:1});
break;
case u:J=new qx.ui.basic.Label;
J.setAnonymous(true);
this._add(J,{column:2});
break;
case v:J=new qx.ui.basic.Image;
J.setAnonymous(true);
this._add(J,{column:3});
break;
}return J||arguments.callee.base.call(this,I);
},_forwardStates:{selected:1},getChildrenSizes:function(){var y=0,z=0,A=0,E=0;

if(this._isChildControlVisible(x)){var F=this.getChildControl(x);
y=F.getMarginLeft()+F.getSizeHint().width+F.getMarginRight();
}
if(this._isChildControlVisible(w)){var C=this.getChildControl(w);
z=C.getMarginLeft()+C.getSizeHint().width+C.getMarginRight();
}
if(this._isChildControlVisible(u)){var B=this.getChildControl(u);
A=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}
if(this._isChildControlVisible(v)){var D=this.getChildControl(v);
E=D.getMarginLeft()+D.getSizeHint().width+D.getMarginRight();
}return [y,z,A,E];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var c=e.getData();

if(qx.core.Variant.isSet(s,q)){var a=e.getOldData();

if(!a){qx.locale.Manager.getInstance().addListener(t,this._onChangeLocale,this);
}
if(!c){qx.locale.Manager.getInstance().removeListener(t,this._onChangeLocale,this);
}}var b=c!=null?c.toString():l;
this.getChildControl(u).setValue(b);
},_onChangeLocale:qx.core.Variant.select(s,{"on":function(e){var d=this.getCommand();

if(d!=null){this.getChildControl(u).setValue(d.toString());
}},"off":null}),_applyIcon:function(K,L){if(K){this._showChildControl(x).setSource(K);
}else{this._excludeChildControl(x);
}},_applyLabel:function(M,N){if(M){this._showChildControl(w).setValue(M);
}else{this._excludeChildControl(w);
}},_applyMenu:function(G,H){if(H){H.resetOpener();
H.removeState(r);
}
if(G){this._showChildControl(v);
G.setOpener(this);
G.addState(r);
}else{this._excludeChildControl(v);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(s,q)){qx.locale.Manager.getInstance().removeListener(t,this._onChangeLocale,this);
}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(j,k){var v=this._getLayoutChildren();
var u;
var n;
var o=[];

for(var i=0,l=v.length;i<l;i++){u=v[i];
n=u.getLayoutProperties().column;
o[n]=u;
}var t=this.__lJ(v[0]);
var w=t.getColumnSizes();
var q=t.getSpacingX();
var p=qx.lang.Array.sum(w)+q*(w.length-1);

if(p<j){w[1]+=j-p;
}var x=0,top=0;
var r=qx.ui.layout.Util;

for(var i=0,l=w.length;i<l;i++){u=o[i];

if(u){var m=u.getSizeHint();
var top=r.computeVerticalAlignOffset(u.getAlignY()||c,m.height,k,0,0);
var s=r.computeHorizontalAlignOffset(u.getAlignX()||a,m.width,w[i],u.getMarginLeft(),u.getMarginRight());
u.renderLayout(x+s,top,m.width,m.height);
}x+=w[i]+q;
}},__lJ:function(h){while(!(h instanceof qx.ui.menu.Menu)){h=h.getLayoutParent();
}return h;
},_computeSizeHint:function(){var f=this._getLayoutChildren();
var e=0;
var g=0;

for(var i=0,l=f.length;i<l;i++){var d=f[i].getSizeHint();
g+=d.width;
e=Math.max(e,d.height);
}return {width:g,height:e};
}}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){arguments.callee.base.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var r="pressed",q="abandoned",p="hovered",o="Enter",n="Space",m="dblclick",l="qx.ui.form.Button",k="mouseup",j="mousedown",i="mouseover",f="mouseout",h="keydown",g="button",d="keyup";
qx.Class.define(l,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(a,b,c){arguments.callee.base.call(this,a,b);

if(c!=null){this.setCommand(c);
}this.addListener(i,this._onMouseOver);
this.addListener(f,this._onMouseOut);
this.addListener(j,this._onMouseDown);
this.addListener(k,this._onMouseUp);
this.addListener(h,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(m,this._onStopEvent);
},properties:{appearance:{refine:true,init:g},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(q)){return;
}this.addState(r);
},release:function(){if(this.hasState(r)){this.removeState(r);
}},reset:function(){this.removeState(r);
this.removeState(q);
this.removeState(p);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(q)){this.removeState(q);
this.addState(r);
}this.addState(p);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(p);

if(this.hasState(r)){this.removeState(r);
this.addState(q);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(q);
this.addState(r);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(r);
var t=this.hasState(q);

if(s){this.removeState(r);
}
if(t){this.removeState(q);
}else{this.addState(p);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case o:case n:this.removeState(q);
this.addState(r);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case o:case n:if(this.hasState(r)){this.removeState(q);
this.removeState(r);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(p,q,r){arguments.callee.base.call(this,p,q);
if(r!=null){this.setMenu(r);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(s,t){if(t){t.removeListener(j,this._onMenuChange,this);
t.resetOpener();
}
if(s){s.addListener(j,this._onMenuChange,this);
s.setOpener(this);
s.removeState(h);
s.removeState(f);
}},open:function(u){var v=this.getMenu();

if(v){qx.ui.menu.Manager.getInstance().hideAll();
v.setOpener(this);
v.open();
if(u){var w=v.getSelectables()[0];

if(w){v.setSelectedButton(w);
}}}},_onMenuChange:function(e){var n=this.getMenu();

if(n.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){var o=this.getMenu();

if(o){if(!o.isVisible()){this.open();
}else{o.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var m=this.getMenu();

if(m){if(!m.isVisible()){this.open();
}else{m.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){arguments.callee.base.call(this,k,l,m);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(i){arguments.callee.base.call(this,i);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var n=this.getMenu();
var menubar=this.getMenuBar();

if(n.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(n);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==n){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var j=this.getMenu();

if(j&&j.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var t="both",s="qx.ui.menu.Menu",r="_applySpacing",q="icon",p="label",o="changeShow",n="Integer",m="qx.ui.toolbar.ToolBar",k="toolbar",j="changeOpenMenu";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:k},openMenu:{check:s,event:j,nullable:true},show:{init:t,check:[t,p,q],inheritable:true,event:o},spacing:{nullable:true,check:n,themeable:true,apply:r}},members:{__ls:false,_setAllowMenuOpenHover:function(g){this.__ls=g;
},_isAllowMenuOpenHover:function(){return this.__ls;
},_applySpacing:function(a,b){var c=this._getLayout();
a==null?c.resetSpacing():c.setSpacing(a);
},addSpacer:function(){var h=new qx.ui.core.Spacer;
this._add(h,{flex:1});
return h;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var e=this.getChildren();
var d=[];
var f;

for(var i=0,l=e.length;i<l;i++){f=e[i];

if(f instanceof qx.ui.menubar.Button){d.push(f);
}else if(f instanceof qx.ui.toolbar.Part){d.push.apply(d,f.getMenuButtons());
}}return d;
}}});
})();
(function(){var U="_applyLayoutChange",T="left",S="center",R="top",Q="Decorator",P="middle",O="_applyReversed",N="bottom",M="Boolean",L="right",J="Integer",K="qx.ui.layout.HBox";
qx.Class.define(K,{extend:qx.ui.layout.Abstract,construct:function(G,H,I){arguments.callee.base.call(this);

if(G){this.setSpacing(G);
}
if(H){this.setAlignX(H);
}
if(I){this.setSeparator(I);
}},properties:{alignX:{check:[T,S,L],init:T,apply:U},alignY:{check:[R,P,N],init:R,apply:U},spacing:{check:J,init:0,apply:U},separator:{check:Q,nullable:true,apply:U},reversed:{check:M,init:false,apply:O}},members:{__ll:null,__lm:null,__ln:null,__lo:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lp:function(){var F=this._getLayoutChildren();
var length=F.length;
var C=false;
var A=this.__ll&&this.__ll.length!=length&&this.__lm&&this.__ll;
var D;
var B=A?this.__ll:new Array(length);
var E=A?this.__lm:new Array(length);
if(this.getReversed()){F=F.concat().reverse();
}for(var i=0;i<length;i++){D=F[i].getLayoutProperties();

if(D.width!=null){B[i]=parseFloat(D.width)/100;
}
if(D.flex!=null){E[i]=D.flex;
C=true;
}else{E[i]=0;
}}if(!A){this.__ll=B;
this.__lm=E;
}this.__ln=C;
this.__lo=F;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(a,b){if(this._invalidChildrenCache){this.__lp();
}var h=this.__lo;
var length=h.length;
var s=qx.ui.layout.Util;
var r=this.getSpacing();
var v=this.getSeparator();

if(v){var e=s.computeHorizontalSeparatorGaps(h,r,v);
}else{var e=s.computeHorizontalGaps(h,r,true);
}var i,c,p,o;
var u=[];
var j=e;

for(i=0;i<length;i+=1){o=this.__ll[i];
p=o!=null?Math.floor((a-e)*o):h[i].getSizeHint().width;
u.push(p);
j+=p;
}if(this.__ln&&j!=a){var m={};
var q,t;

for(i=0;i<length;i+=1){q=this.__lm[i];

if(q>0){k=h[i].getSizeHint();
m[i]={min:k.minWidth,value:u[i],max:k.maxWidth,flex:q};
}}var f=s.computeFlexOffsets(m,a,j);

for(i in f){t=f[i].offset;
u[i]+=t;
j+=t;
}}var z=h[0].getMarginLeft();
if(j<a&&this.getAlignX()!=T){z=a-j;

if(this.getAlignX()===S){z=Math.round(z/2);
}}var k,top,d,p,g,x,n;
var r=this.getSpacing();
this._clearSeparators();
if(v){var w=qx.theme.manager.Decoration.getInstance().resolve(v).getInsets();
var y=w.left+w.right;
}for(i=0;i<length;i+=1){c=h[i];
p=u[i];
k=c.getSizeHint();
x=c.getMarginTop();
n=c.getMarginBottom();
d=Math.max(k.minHeight,Math.min(b-x-n,k.maxHeight));
top=s.computeVerticalAlignOffset(c.getAlignY()||this.getAlignY(),d,b,x,n);
if(i>0){if(v){z+=g+r;
this._renderSeparator(v,{left:z,top:0,width:y,height:b});
z+=y+r+c.getMarginLeft();
}else{z+=s.collapseMargins(r,g,c.getMarginLeft());
}}c.renderLayout(z,top,p,d);
z+=p;
g=c.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lp();
}var bc=qx.ui.layout.Util;
var bk=this.__lo;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__lm[i];
var X=this.__ll[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__ll=this.__lm=this.__lo=null;
}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){arguments.callee.base.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var a="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(b,c){return this.getChildrenContainer().add(b,c);
},remove:function(d){return this.getChildrenContainer().remove(d);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(h){return this.getChildrenContainer().indexOf(h);
},addAt:function(j,k,l){this.getChildrenContainer().addAt(j,k,l);
},addBefore:function(m,n,o){this.getChildrenContainer().addBefore(m,n,o);
},addAfter:function(e,f,g){this.getChildrenContainer().addAfter(e,f,g);
},removeAt:function(i){this.getChildrenContainer().removeAt(i);
}}});
})();
(function(){var r="container",q="handle",p="both",o="Integer",n="middle",m="qx.ui.toolbar.Part",k="icon",j="label",h="changeShow",g="_applySpacing",f="toolbar/part";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(q);
},properties:{appearance:{refine:true,init:f},show:{init:p,check:[p,j,k],inheritable:true,event:h},spacing:{nullable:true,check:o,themeable:true,apply:g}},members:{_createChildControlImpl:function(d){var e;

switch(d){case q:e=new qx.ui.basic.Image();
e.setAlignY(n);
this._add(e);
break;
case r:e=new qx.ui.toolbar.PartContainer;
this._add(e);
break;
}return e||arguments.callee.base.call(this,d);
},getChildrenContainer:function(){return this.getChildControl(r);
},_applySpacing:function(a,b){var c=this.getChildControl(r).getLayout();
a==null?c.resetSpacing():c.setSpacing(a);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var t=this.getChildren();
var s=[];
var u;

for(var i=0,l=t.length;i<l;i++){u=t[i];

if(u instanceof qx.ui.menubar.Button){s.push(u);
}}return s;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var E="horizontal",D="scrollpane",C="vertical",B="button-backward",A="button-forward",z="content",y="execute",x="qx.ui.container.SlideBar",w="scrollY",v="removeChildWidget",r="scrollX",u="_applyOrientation",t="mousewheel",q="Integer",p="slidebar",s="update";
qx.Class.define(x,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(c){arguments.callee.base.call(this);
var d=this.getChildControl(D);
this._add(d,{flex:1});

if(c!=null){this.setOrientation(c);
}else{this.initOrientation();
}this.addListener(t,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:p},orientation:{check:[E,C],init:E,apply:u},scrollStep:{check:q,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(z);
},_createChildControlImpl:function(f){var g;

switch(f){case A:g=new qx.ui.form.RepeatButton;
g.addListener(y,this._onExecuteForward,this);
g.setFocusable(false);
this._addAt(g,2);
break;
case B:g=new qx.ui.form.RepeatButton;
g.addListener(y,this._onExecuteBackward,this);
g.setFocusable(false);
this._addAt(g,0);
break;
case z:g=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){g.addListener(v,this._onRemoveChild,this);
}this.getChildControl(D).add(g);
break;
case D:g=new qx.ui.core.scroll.ScrollPane();
g.addListener(s,this._onResize,this);
g.addListener(r,this._onScroll,this);
g.addListener(w,this._onScroll,this);
break;
}return g||arguments.callee.base.call(this,f);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(a){var b=this.getChildControl(D);

if(this.getOrientation()===E){b.scrollByX(a);
}else{b.scrollByY(a);
}},scrollTo:function(I){var J=this.getChildControl(D);

if(this.getOrientation()===E){J.scrollToX(I);
}else{J.scrollToY(I);
}},_applyOrientation:function(h,i){var l=[this.getLayout(),this._getLayout()];
var k=this.getChildControl(A);
var j=this.getChildControl(B);
if(i==C){k.removeState(C);
j.removeState(C);
k.addState(E);
j.addState(E);
}else if(i==E){k.removeState(E);
j.removeState(E);
k.addState(C);
j.addState(C);
}
if(h==E){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(l[0]){l[0].dispose();
}
if(l[1]){l[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(D).getChildren()[0];

if(!content){return;
}var m=this.getInnerSize();
var o=content.getBounds();
var n=(this.getOrientation()===E)?o.width>m.width:o.height>m.height;

if(n){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(D).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var G=this.getChildControl(D);

if(this.getOrientation()===E){var F=G.getScrollX();
var H=G.getScrollMaxX();
}else{var F=G.getScrollY();
var H=G.getScrollMaxY();
}this.getChildControl(B).setEnabled(F>0);
this.getChildControl(A).setEnabled(F<H);
},_showArrows:function(){this._showChildControl(A);
this._showChildControl(B);
},_hideArrows:function(){this._excludeChildControl(A);
this._excludeChildControl(B);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){arguments.callee.base.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||arguments.callee.base.call(this,g);
}}});
})();
(function(){var s="pressed",r="abandoned",q="Integer",p="hovered",o="qx.event.type.Event",n="Enter",m="Space",l="press",k="qx.ui.form.RepeatButton",j="release",g="interval",i="execute",h="__lK";
qx.Class.define(k,{extend:qx.ui.form.Button,construct:function(a,b){arguments.callee.base.call(this,a,b);
this.__lK=new qx.event.AcceleratingTimer();
this.__lK.addListener(g,this._onInterval,this);
},events:{"execute":o,"press":o,"release":o},properties:{interval:{check:q,init:100},firstInterval:{check:q,init:500},minTimer:{check:q,init:20},timerDecrease:{check:q,init:2}},members:{__lL:null,__lK:null,press:function(){if(this.isEnabled()){if(!this.hasState(s)){this.__lM();
}this.removeState(r);
this.addState(s);
}},release:function(f){if(!this.isEnabled()){return;
}if(this.hasState(s)){if(!this.__lL){this.execute();
}}this.removeState(s);
this.removeState(r);
this.__lN();
},_applyEnabled:function(c,d){arguments.callee.base.call(this,c,d);

if(!c){this.removeState(s);
this.removeState(r);
this.__lN();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(r)){this.removeState(r);
this.addState(s);
this.__lK.start();
}this.addState(p);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(p);

if(this.hasState(s)){this.removeState(s);
this.addState(r);
this.__lK.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__lM();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(r)){this.addState(p);

if(this.hasState(s)&&!this.__lL){this.execute();
}}this.__lN();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case n:case m:if(this.hasState(s)){if(!this.__lL){this.execute();
}this.removeState(s);
this.removeState(r);
e.stopPropagation();
this.__lN();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case n:case m:this.removeState(r);
this.addState(s);
e.stopPropagation();
this.__lM();
}},_onInterval:function(e){this.__lL=true;
this.fireEvent(i);
},__lM:function(){this.fireEvent(l);
this.__lL=false;
this.__lK.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(r);
this.addState(s);
},__lN:function(){this.fireEvent(j);
this.__lK.stop();
this.removeState(r);
this.removeState(s);
}},destruct:function(){this._disposeObjects(h);
}});
})();
(function(){var e="Integer",d="interval",c="__lO",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lO=new qx.event.Timer(this.getInterval());
this.__lO.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__lO:null,__lP:null,start:function(){this.__lO.setInterval(this.getFirstInterval());
this.__lO.start();
},stop:function(){this.__lO.stop();
this.__lP=null;
},_onInterval:function(){this.__lO.stop();

if(this.__lP==null){this.__lP=this.getInterval();
}this.__lP=Math.max(this.getMinimum(),this.__lP-this.getDecrease());
this.__lO.setInterval(this.__lP);
this.__lO.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var L="resize",K="scrollY",J="update",I="scrollX",H="_applyScrollX",G="_applyScrollY",F="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",E="appear",D="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",C="qx.event.type.Event",A="qx.ui.core.scroll.ScrollPane",B="scroll";
qx.Class.define(A,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(L,this._onUpdate);
var c=this.getContentElement();
c.addListener(B,this._onScroll,this);
c.addListener(E,this._onAppear,this);
},events:{update:C},properties:{scrollX:{check:F,apply:H,event:I,init:0},scrollY:{check:D,apply:G,event:K,init:0}},members:{add:function(v){var w=this._getChildren()[0];

if(w){this._remove(w);
w.removeListener(L,this._onUpdate,this);
}
if(v){this._add(v);
v.addListener(L,this._onUpdate,this);
}},remove:function(f){if(f){this._remove(f);
f.removeListener(L,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(J);
},_onScroll:function(e){var l=this.getContentElement();
this.setScrollX(l.getScrollX());
this.setScrollY(l.getScrollY());
},_onAppear:function(e){var t=this.getContentElement();
var q=this.getScrollX();
var r=t.getScrollX();

if(q!=r){t.scrollToX(q);
}var u=this.getScrollY();
var s=t.getScrollY();

if(u!=s){t.scrollToY(u);
}},getItemTop:function(h){var top=0;

do{top+=h.getBounds().top;
h=h.getLayoutParent();
}while(h&&h!==this);
return top;
},getItemBottom:function(k){return this.getItemTop(k)+k.getBounds().height;
},getItemLeft:function(i){var j=0;
var parent;

do{j+=i.getBounds().left;
parent=i.getLayoutParent();

if(parent){j+=parent.getInsets().left;
}i=parent;
}while(i&&i!==this);
return j;
},getItemRight:function(z){return this.getItemLeft(z)+z.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var p=this.getInnerSize();
var o=this.getScrollSize();

if(p&&o){return Math.max(0,o.width-p.width);
}return 0;
},getScrollMaxY:function(){var n=this.getInnerSize();
var m=this.getScrollSize();

if(n&&m){return Math.max(0,m.height-n.height);
}return 0;
},scrollToX:function(M){var N=this.getScrollMaxX();

if(M<0){M=0;
}else if(M>N){M=N;
}this.setScrollX(M);
},scrollToY:function(a){var b=this.getScrollMaxY();

if(a<0){a=0;
}else if(a>b){a=b;
}this.setScrollY(a);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(d){this.getContentElement().scrollToX(d);
},_applyScrollY:function(g){this.getContentElement().scrollToY(g);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__lQ",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){arguments.callee.base.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__lQ=new qx.event.AcceleratingTimer();
this.__lQ.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__lQ:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__lQ.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__lQ.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__lQ.stop();
}}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var U="scrollbar-y",T="scrollbar-x",S="pane",R="auto",Q="corner",P="on",O="changeVisibility",N="scroll",M="_computeScrollbars",L="off",E="scrollY",K="qx.ui.core.scroll.AbstractScrollArea",H="abstract",C="update",B="scrollX",G="mousewheel",F="scrollbarY",I="scrollbarX",A="horizontal",J="scrollarea",D="vertical";
qx.Class.define(K,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:H,construct:function(){arguments.callee.base.call(this);
var y=new qx.ui.layout.Grid();
y.setColumnFlex(0,1);
y.setRowFlex(0,1);
this._setLayout(y);
this.addListener(G,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:J},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[R,P,L],init:R,themeable:true,apply:M},scrollbarY:{check:[R,P,L],init:R,themeable:true,apply:M},scrollbar:{group:[I,F]}},members:{_createChildControlImpl:function(f){var g;

switch(f){case S:g=new qx.ui.core.scroll.ScrollPane();
g.addListener(C,this._computeScrollbars,this);
g.addListener(B,this._onScrollPaneX,this);
g.addListener(E,this._onScrollPaneY,this);
this._add(g,{row:0,column:0});
break;
case T:g=this._createScrollBar(A);
g.setMinWidth(0);
g.exclude();
g.addListener(N,this._onScrollBarX,this);
g.addListener(O,this._onChangeScrollbarXVisibility,this);
this._add(g,{row:1,column:0});
break;
case U:g=this._createScrollBar(D);
g.setMinHeight(0);
g.exclude();
g.addListener(N,this._onScrollBarY,this);
g.addListener(O,this._onChangeScrollbarYVisibility,this);
this._add(g,{row:0,column:1});
break;
case Q:g=new qx.ui.core.Widget();
g.setWidth(0);
g.setHeight(0);
g.exclude();
this._add(g,{row:1,column:1});
break;
}return g||arguments.callee.base.call(this,f);
},getPaneSize:function(){return this.getChildControl(S).getInnerSize();
},getItemTop:function(h){return this.getChildControl(S).getItemTop(h);
},getItemBottom:function(bb){return this.getChildControl(S).getItemBottom(bb);
},getItemLeft:function(b){return this.getChildControl(S).getItemLeft(b);
},getItemRight:function(V){return this.getChildControl(S).getItemRight(V);
},scrollToX:function(ba){qx.ui.core.queue.Manager.flush();
this.getChildControl(T).scrollTo(ba);
},scrollByX:function(t){qx.ui.core.queue.Manager.flush();
this.getChildControl(T).scrollBy(t);
},getScrollX:function(){var a=this.getChildControl(T,true);
return a?a.getPosition():0;
},scrollToY:function(u){qx.ui.core.queue.Manager.flush();
this.getChildControl(U).scrollTo(u);
},scrollByY:function(z){qx.ui.core.queue.Manager.flush();
this.getChildControl(U).scrollBy(z);
},getScrollY:function(){var Y=this.getChildControl(U,true);
return Y?Y.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(S).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(S).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var w=this._isChildControlVisible(T);
var x=this._isChildControlVisible(U);
var v=(x)?this.getChildControl(U,true):(w?this.getChildControl(T,true):null);

if(v){v.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var W=this._isChildControlVisible(T);
var X=this._isChildControlVisible(U);

if(!W){this.scrollToX(0);
}W&&X?this._showChildControl(Q):this._excludeChildControl(Q);
},_onChangeScrollbarYVisibility:function(e){var c=this._isChildControlVisible(T);
var d=this._isChildControlVisible(U);

if(!d){this.scrollToY(0);
}c&&d?this._showChildControl(Q):this._excludeChildControl(Q);
},_computeScrollbars:function(){var o=this.getChildControl(S);
var content=o.getChildren()[0];

if(!content){this._excludeChildControl(T);
this._excludeChildControl(U);
return;
}var i=this.getInnerSize();
var n=o.getInnerSize();
var l=o.getScrollSize();
if(!n||!l){return;
}var q=this.getScrollbarX();
var r=this.getScrollbarY();

if(q===R&&r===R){var m=l.width>i.width;
var s=l.height>i.height;
if((m||s)&&!(m&&s)){if(m){s=l.height>n.height;
}else if(s){m=l.width>n.width;
}}}else{var m=q===P;
var s=r===P;
if(l.width>(m?n.width:i.width)&&q===R){m=true;
}
if(l.height>(m?n.height:i.height)&&r===R){s=true;
}}if(m){var k=this.getChildControl(T);
k.show();
var p=Math.max(0,l.width-n.width);
k.setMaximum(p);
k.setKnobFactor(p>0?n.width/l.width:0);
}else{this._excludeChildControl(T);
}
if(s){var j=this.getChildControl(U);
j.show();
var p=Math.max(0,l.height-n.height);
j.setMaximum(p);
j.setKnobFactor(p>0?n.height/l.height:0);
}else{this._excludeChildControl(U);
}}}});
})();
(function(){var c="qx.ui.core.ISingleSelection",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeSelection":b},members:{getSelection:function(){return true;
},setSelection:function(d){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(a){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var y="single",x="Boolean",w="one",v="changeSelection",u="mouseup",t="mousedown",s="__mr",r="losecapture",q="multi",p="_applyQuickSelection",h="mouseover",o="_applySelectionMode",l="_applyDragSelection",g="qx.ui.core.MMultiSelectionHandling",f="removeItem",k="keypress",j="qx.event.type.Data",m="addItem",d="additive",n="mousemove";
qx.Mixin.define(g,{construct:function(){var c=this.SELECTION_MANAGER;
var b=this.__mr=new c(this);
this.addListener(t,b.handleMouseDown,b);
this.addListener(u,b.handleMouseUp,b);
this.addListener(h,b.handleMouseOver,b);
this.addListener(n,b.handleMouseMove,b);
this.addListener(r,b.handleLoseCapture,b);
this.addListener(k,b.handleKeyPress,b);
this.addListener(m,b.handleAddItem,b);
this.addListener(f,b.handleRemoveItem,b);
b.addListener(v,this._onSelectionChange,this);
},events:{"changeSelection":j},properties:{selectionMode:{check:[y,q,d,w],init:y,apply:o},dragSelection:{check:x,init:false,apply:l},quickSelection:{check:x,init:false,apply:p}},members:{__mr:null,selectAll:function(){this.__mr.selectAll();
},isSelected:function(a){if(!qx.ui.core.Widget.contains(this,a)){throw new Error("Could not test if "+a+" is selected, because it is not a child element!");
}return this.__mr.isItemSelected(a);
},addToSelection:function(L){if(!qx.ui.core.Widget.contains(this,L)){throw new Error("Could not add + "+L+" to selection, because it is not a child element!");
}this.__mr.addItem(L);
},removeFromSelection:function(I){if(!qx.ui.core.Widget.contains(this,I)){throw new Error("Could not remove "+I+" from selection, because it is not a child element!");
}this.__mr.removeItem(I);
},selectRange:function(E,F){this.__mr.selectItemRange(E,F);
},resetSelection:function(){this.__mr.clearSelection();
},setSelection:function(C){for(var i=0;i<C.length;i++){if(!qx.ui.core.Widget.contains(this,C[i])){throw new Error("Could not select "+C[i]+", because it is not a child element!");
}}
if(C.length===0){this.resetSelection();
}else{var D=this.getSelection();

if(!qx.lang.Array.equals(D,C)){this.__mr.replaceSelection(C);
}}},getSelection:function(){return this.__mr.getSelection();
},getSortedSelection:function(){return this.__mr.getSortedSelection();
},isSelectionEmpty:function(){return this.__mr.isSelectionEmpty();
},getSelectionContext:function(){return this.__mr.getSelectionContext();
},_getManager:function(){return this.__mr;
},getSelectables:function(){return this.__mr.getSelectables();
},invertSelection:function(){this.__mr.invertSelection();
},_getLeadItem:function(){var z=this.__mr.getMode();

if(z===y||z===w){return this.__mr.getSelectedItem();
}else{return this.__mr.getLeadItem();
}},_applySelectionMode:function(J,K){this.__mr.setMode(J);
},_applyDragSelection:function(G,H){this.__mr.setDrag(G);
},_applyQuickSelection:function(A,B){this.__mr.setQuick(A);
},_onSelectionChange:function(e){this.fireDataEvent(v,e.getData());
}},destruct:function(){this._disposeObjects(s);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ms:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__mt:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__mt[name];
s[t]();
}else{var u=this.__ms[name];
s[u](q);
}}}});
})();
(function(){var m="change",l="qx.event.type.Data",k="qx.ui.form.MModelSelection",h="__mu",g="changeSelection";
qx.Mixin.define(k,{construct:function(){this.__mu=new qx.data.Array();
this.__mu.addListener(m,this.__mx,this);
this.addListener(g,this.__mw,this);
},events:{changeModelSelection:l},members:{__mu:null,__mv:false,__mw:function(){if(this.__mv){return;
}var e=this.getSelection();
var c=[];

for(var i=0;i<e.length;i++){var f=e[i];
var d=f.getModel?f.getModel():null;

if(d!==null){c.push(d);
}}this.setModelSelection(c);
},__mx:function(){this.__mv=true;
var o=this.getSelectables();
var q=[];
var p=this.__mu.toArray();

for(var i=0;i<p.length;i++){var s=p[i];

for(var j=0;j<o.length;j++){var t=o[j];
var n=t.getModel?t.getModel():null;

if(s===n){q.push(t);
break;
}}}this.setSelection(q);
this.__mv=false;
var r=this.getSelection();

if(!qx.lang.Array.equals(r,q)){this.__mw();
}},getModelSelection:function(){return this.__mu;
},setModelSelection:function(a){if(!a){this.__mu.removeAll();
return;
}{};
a.unshift(this.__mu.getLength());
a.unshift(0);
var b=this.__mu.splice.apply(this.__mu,a);
b.dispose();
}},destruct:function(){this._disposeObjects(h);
}});
})();
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="PageUp",g="under",f="Left",d="lead",c="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",E="click",D="above",v="left",w="Escape",t="A",u="Space",r="_applyMode",s="interval",p="changeSelection",q="qx.event.type.Data",x="quick",y="key",A="__mB",z="abstract",C="drag",B="qx.ui.core.selection.Abstract";
qx.Class.define(B,{type:z,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__my={};
},events:{"changeSelection":q},properties:{mode:{check:[n,j,k,o],init:n,apply:r},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__mz:0,__mA:0,__mB:null,__mC:null,__mD:null,__mE:null,__mF:null,__mG:null,__mH:null,__mI:null,__mJ:null,__mK:null,__mL:null,__mM:null,__mN:null,__mO:null,__mP:null,__my:null,__mQ:null,__mR:null,getSelectionContext:function(){return this.__mO;
},selectAll:function(){var N=this.getMode();

if(N==n||N==o){throw new Error("Can not select all items in selection mode: "+N);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cD){this._setSelectedItem(cD);
var cE=this.getMode();

if(cE!==n&&cE!==o){this._setLeadItem(cD);
this._setAnchorItem(cD);
}this._scrollItemIntoView(cD);
this._fireChange();
},addItem:function(ca){var cb=this.getMode();

if(cb===n||cb===o){this._setSelectedItem(ca);
}else{if(!this._getAnchorItem()){this._setAnchorItem(ca);
}this._setLeadItem(ca);
this._addToSelection(ca);
}this._scrollItemIntoView(ca);
this._fireChange();
},removeItem:function(cF){this._removeFromSelection(cF);

if(this.getMode()===o&&this.isSelectionEmpty()){var cG=this._getFirstSelectable();

if(cG){this.addItem(cG);
}if(cG==cF){return;
}}
if(this.getLeadItem()==cF){this._setLeadItem(null);
}
if(this._getAnchorItem()==cF){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(cc,cd){var ce=this.getMode();

if(ce==n||ce==o){throw new Error("Can not select multiple items in selection mode: "+ce);
}this._selectItemRange(cc,cd);
this._setAnchorItem(cc);
this._setLeadItem(cd);
this._scrollItemIntoView(cd);
this._fireChange();
},clearSelection:function(){if(this.getMode()==o){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bB){var bC=this.getMode();

if(bC==o||bC===n){if(bB.length>1){throw new Error("Could not select more than one items in mode: "+bC+"!");
}
if(bB.length==1){this.selectItem(bB[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bB);
}},getSelectedItem:function(){var bE=this.getMode();

if(bE===n||bE===o){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__my);
},getSortedSelection:function(){var bn=this.getSelectables();
var bm=qx.lang.Object.getValues(this.__my);
bm.sort(function(a,b){return bn.indexOf(a)-bn.indexOf(b);
});
return bm;
},isItemSelected:function(P){var Q=this._selectableToHashCode(P);
return this.__my[Q]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__my);
},invertSelection:function(){var bU=this.getMode();

if(bU===n||bU===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bT=this.getSelectables();

for(var i=0;i<bT.length;i++){this._toggleInSelection(bT[i]);
}this._fireChange();
},_setLeadItem:function(bg){var bh=this.__mP;

if(bh!==null){this._styleSelectable(bh,d,false);
}
if(bg!==null){this._styleSelectable(bg,d,true);
}this.__mP=bg;
},_getLeadItem:function(){{};
return this.getLeadItem();
},getLeadItem:function(){return this.__mP!==null?this.__mP:null;
},_setAnchorItem:function(bN){var bO=this.__mQ;

if(bO){this._styleSelectable(bO,J,false);
}
if(bN){this._styleSelectable(bN,J,true);
}this.__mQ=bN;
},_getAnchorItem:function(){return this.__mQ!==null?this.__mQ:null;
},_isSelectable:function(bR){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bo=event.getTarget();
return this._isSelectable(bo)?bo:null;
},_selectableToHashCode:function(cf){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(R,S,T){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bM){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cH){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bk,bl){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bA){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(cL,cM){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bP,bQ){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(cg,ch){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bu,bv){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bu===o){var bw=this._getFirstSelectable();

if(bw){this._setSelectedItem(bw);
this._scrollItemIntoView(bw);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var bY=this.getMode();

if(bY!==o&&bY!==n){return;
}var bX=this._getSelectableFromMouseEvent(event);

if(bX===null){return;
}this._setSelectedItem(bX);
this._fireChange(x);
},handleMouseDown:function(event){var bq=this._getSelectableFromMouseEvent(event);

if(bq===null){return;
}var bs=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bp=event.isShiftPressed();
if(this.isItemSelected(bq)&&!bp&&!bs&&!this.getDrag()){this.__mR=bq;
return;
}else{this.__mR=null;
}this._scrollItemIntoView(bq);
switch(this.getMode()){case n:case o:this._setSelectedItem(bq);
break;
case k:this._setLeadItem(bq);
this._setAnchorItem(bq);
this._toggleInSelection(bq);
break;
case j:this._setLeadItem(bq);
if(bp){var br=this._getAnchorItem();

if(br===null){br=this._getFirstSelectable();
this._setAnchorItem(br);
}this._selectItemRange(br,bq,bs);
}else if(bs){this._setAnchorItem(bq);
this._toggleInSelection(bq);
}else{this._setAnchorItem(bq);
this._setSelectedItem(bq);
}break;
}var bt=this.getMode();

if(this.getDrag()&&bt!==n&&bt!==o&&!bp&&!bs){this.__mF=this._getLocation();
this.__mC=this._getScroll();
this.__mG=event.getDocumentLeft()+this.__mC.left;
this.__mH=event.getDocumentTop()+this.__mC.top;
this.__mI=true;
this._capture();
}this._fireChange(E);
},handleMouseUp:function(event){var ba=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var W=event.isShiftPressed();

if(!ba&&!W&&this.__mR){var X=this._getSelectableFromMouseEvent(event);

if(X===null||!this.isItemSelected(X)){return;
}var Y=this.getMode();

if(Y===k){this._removeFromSelection(X);
}else{this._setSelectedItem(X);

if(this.getMode()===j){this._setLeadItem(X);
this._setAnchorItem(X);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__mI){return;
}this.__mJ=event.getDocumentLeft();
this.__mK=event.getDocumentTop();
var bW=this.__mJ+this.__mC.left;

if(bW>this.__mG){this.__mL=1;
}else if(bW<this.__mG){this.__mL=-1;
}else{this.__mL=0;
}var bV=this.__mK+this.__mC.top;

if(bV>this.__mH){this.__mM=1;
}else if(bV<this.__mH){this.__mM=-1;
}else{this.__mM=0;
}var location=this.__mF;

if(this.__mJ<location.left){this.__mz=this.__mJ-location.left;
}else if(this.__mJ>location.right){this.__mz=this.__mJ-location.right;
}else{this.__mz=0;
}
if(this.__mK<location.top){this.__mA=this.__mK-location.top;
}else if(this.__mK>location.bottom){this.__mA=this.__mK-location.bottom;
}else{this.__mA=0;
}if(!this.__mB){this.__mB=new qx.event.Timer(100);
this.__mB.addListener(s,this._onInterval,this);
}this.__mB.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var O=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(O);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__mI){return;
}if(this.__mN){this._fireChange(E);
}delete this.__mI;
delete this.__mD;
delete this.__mE;
this._releaseCapture();
if(this.__mB){this.__mB.stop();
}},_onInterval:function(e){this._scrollBy(this.__mz,this.__mA);
this.__mC=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cz=this._getDimension();
var cs=Math.max(0,Math.min(this.__mJ-this.__mF.left,cz.width))+this.__mC.left;
var cr=Math.max(0,Math.min(this.__mK-this.__mF.top,cz.height))+this.__mC.top;
if(this.__mD===cs&&this.__mE===cr){return;
}this.__mD=cs;
this.__mE=cr;
var cB=this._getAnchorItem();
var cu=cB;
var cx=this.__mL;
var cA,ct;

while(cx!==0){cA=cx>0?this._getRelatedSelectable(cu,F):this._getRelatedSelectable(cu,v);
if(cA!==null){ct=this._getSelectableLocationX(cA);
if((cx>0&&ct.left<=cs)||(cx<0&&ct.right>=cs)){cu=cA;
continue;
}}break;
}var cy=this.__mM;
var cw,cv;

while(cy!==0){cw=cy>0?this._getRelatedSelectable(cu,g):this._getRelatedSelectable(cu,D);
if(cw!==null){cv=this._getSelectableLocationY(cw);
if((cy>0&&cv.top<=cr)||(cy<0&&cv.bottom>=cr)){cu=cw;
continue;
}}break;
}var cC=this.getMode();

if(cC===j){this._selectItemRange(cB,cu);
}else if(cC===k){if(this.isItemSelected(cB)){this._selectItemRange(cB,cu,true);
}else{this._deselectItemRange(cB,cu);
}this._setAnchorItem(cu);
}this._fireChange(C);
},__mS:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var cn,cm;
var cp=event.getKeyIdentifier();
var co=this.getMode();
var cj=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var ck=event.isShiftPressed();
var cl=false;

if(cp===t&&cj){if(co!==n&&co!==o){this._selectAllItems();
cl=true;
}}else if(cp===w){if(co!==n&&co!==o){this._clearSelection();
cl=true;
}}else if(cp===u){var ci=this.getLeadItem();

if(ci&&!ck){if(cj||co===k){this._toggleInSelection(ci);
}else{this._setSelectedItem(ci);
}cl=true;
}}else if(this.__mS[cp]){cl=true;

if(co===n||co==o){cn=this._getSelectedItem();
}else{cn=this.getLeadItem();
}
if(cn!==null){switch(cp){case H:cm=this._getFirstSelectable();
break;
case I:cm=this._getLastSelectable();
break;
case M:cm=this._getRelatedSelectable(cn,D);
break;
case c:cm=this._getRelatedSelectable(cn,g);
break;
case f:cm=this._getRelatedSelectable(cn,v);
break;
case G:cm=this._getRelatedSelectable(cn,F);
break;
case h:cm=this._getPage(cn,true);
break;
case K:cm=this._getPage(cn,false);
break;
}}else{switch(cp){case H:case c:case G:case K:cm=this._getFirstSelectable();
break;
case I:case M:case f:case h:cm=this._getLastSelectable();
break;
}}if(cm!==null){switch(co){case n:case o:this._setSelectedItem(cm);
break;
case k:this._setLeadItem(cm);
break;
case j:if(ck){var cq=this._getAnchorItem();

if(cq===null){this._setAnchorItem(cq=this._getFirstSelectable());
}this._setLeadItem(cm);
this._selectItemRange(cq,cm,cj);
}else{this._setAnchorItem(cm);
this._setLeadItem(cm);

if(!cj){this._setSelectedItem(cm);
}}break;
}this._scrollItemIntoView(cm);
}}
if(cl){event.stop();
this._fireChange(y);
}},_selectAllItems:function(){var bS=this.getSelectables();

for(var i=0,l=bS.length;i<l;i++){this._addToSelection(bS[i]);
}},_clearSelection:function(){var be=this.__my;

for(var bf in be){this._removeFromSelection(be[bf]);
}this.__my={};
},_selectItemRange:function(bF,bG,bH){var bK=this._getSelectableRange(bF,bG);
if(!bH){var bJ=this.__my;
var bL=this.__mT(bK);

for(var bI in bJ){if(!bL[bI]){this._removeFromSelection(bJ[bI]);
}}}for(var i=0,l=bK.length;i<l;i++){this._addToSelection(bK[i]);
}},_deselectItemRange:function(bx,by){var bz=this._getSelectableRange(bx,by);

for(var i=0,l=bz.length;i<l;i++){this._removeFromSelection(bz[i]);
}},__mT:function(bb){var bd={};
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
bd[this._selectableToHashCode(bc)]=bc;
}return bd;
},_getSelectedItem:function(){for(var cI in this.__my){return this.__my[cI];
}return null;
},_setSelectedItem:function(cU){if(this._isSelectable(cU)){var cV=this.__my;
var cW=this._selectableToHashCode(cU);

if(!cV[cW]||qx.lang.Object.hasMinLength(cV,2)){this._clearSelection();
this._addToSelection(cU);
}}},_addToSelection:function(U){var V=this._selectableToHashCode(U);

if(!this.__my[V]&&this._isSelectable(U)){this.__my[V]=U;
this._styleSelectable(U,m,true);
this.__mN=true;
}},_toggleInSelection:function(bi){var bj=this._selectableToHashCode(bi);

if(!this.__my[bj]){this.__my[bj]=bi;
this._styleSelectable(bi,m,true);
}else{delete this.__my[bj];
this._styleSelectable(bi,m,false);
}this.__mN=true;
},_removeFromSelection:function(cJ){var cK=this._selectableToHashCode(cJ);

if(this.__my[cK]!=null){delete this.__my[cK];
this._styleSelectable(cJ,m,false);
this.__mN=true;
}},_replaceMultiSelection:function(cN){var cQ=false;
var cT,cS;
var cO={};

for(var i=0,l=cN.length;i<l;i++){cT=cN[i];

if(this._isSelectable(cT)){cS=this._selectableToHashCode(cT);
cO[cS]=cT;
}}var cP=cT;
var cR=this.__my;

for(var cS in cR){if(cO[cS]){delete cO[cS];
}else{cT=cR[cS];
delete cR[cS];
this._styleSelectable(cT,m,false);
cQ=true;
}}for(var cS in cO){cT=cR[cS]=cO[cS];
this._styleSelectable(cT,m,true);
cQ=true;
}if(!cQ){return false;
}this._scrollItemIntoView(cP);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__mN=true;
this._fireChange();
},_fireChange:function(bD){if(this.__mN){this.__mO=bD||null;
this.fireDataEvent(p,this.getSelection());
delete this.__mN;
}}},destruct:function(){this._disposeObjects(A);
this.__my=this.__mR=this.__mQ=null;
this.__mP=null;
}});
})();
(function(){var f="vertical",e="under",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(A){arguments.callee.base.call(this);
this.__mU=A;
},members:{__mU:null,_isSelectable:function(u){return u.isEnabled()&&u.isVisible()&&u.getLayoutParent()===this.__mU;
},_selectableToHashCode:function(x){return x.$$hash;
},_styleSelectable:function(o,p,q){q?o.addState(p):o.removeState(p);
},_capture:function(){this.__mU.capture();
},_releaseCapture:function(){this.__mU.releaseCapture();
},_getWidget:function(){return this.__mU;
},_getLocation:function(){var B=this.__mU.getContentElement().getDomElement();
return B?qx.bom.element.Location.get(B):null;
},_getDimension:function(){return this.__mU.getInnerSize();
},_getSelectableLocationX:function(m){var n=m.getBounds();

if(n){return {left:n.left,right:n.left+n.width};
}},_getSelectableLocationY:function(s){var t=s.getBounds();

if(t){return {top:t.top,bottom:t.top+t.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(y,z){},_scrollItemIntoView:function(k){this.__mU.scrollChildIntoView(k);
},getSelectables:function(){var h=this.__mU.getChildren();
var j=[];
var g;

for(var i=0,l=h.length;i<l;i++){g=h[i];

if(g.isEnabled()&&g.isVisible()){j.push(g);
}}return j;
},_getSelectableRange:function(I,J){if(I===J){return [I];
}var N=this.__mU.getChildren();
var K=[];
var M=false;
var L;

for(var i=0,l=N.length;i<l;i++){L=N[i];

if(L===I||L===J){if(M){K.push(L);
break;
}else{M=true;
}}
if(M&&L.isEnabled()&&L.isVisible()){K.push(L);
}}return K;
},_getFirstSelectable:function(){var r=this.__mU.getChildren();

for(var i=0,l=r.length;i<l;i++){if(r[i].isEnabled()&&r[i].isVisible()){return r[i];
}}return null;
},_getLastSelectable:function(){var O=this.__mU.getChildren();

for(var i=O.length-1;i>0;i--){if(O[i].isEnabled()&&O[i].isVisible()){return O[i];
}}return null;
},_getRelatedSelectable:function(C,D){var G=this.__mU.getOrientation()===f;
var F=this.__mU.getChildren();
var E=F.indexOf(C);
var H;

if((G&&D===d)||(!G&&D===b)){for(var i=E-1;i>=0;i--){H=F[i];

if(H.isEnabled()&&H.isVisible()){return H;
}}}else if((G&&D===e)||(!G&&D===a)){for(var i=E+1;i<F.length;i++){H=F[i];

if(H.isEnabled()&&H.isVisible()){return H;
}}}return null;
},_getPage:function(v,w){if(w){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__mU=null;
}});
})();
(function(){var r="qx.ui.core.selection.ScrollArea";
qx.Class.define(r,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(q){return (q.isEnabled()&&q.isVisible()&&q.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var s=this._getWidget();
return {left:s.getScrollX(),top:s.getScrollY()};
},_scrollBy:function(n,o){var p=this._getWidget();
p.scrollByX(n);
p.scrollByY(o);
},_getPage:function(a,b){var f=this.getSelectables();
var length=f.length;
var j=f.indexOf(a);
if(j===-1){throw new Error("Invalid lead item: "+a);
}var c=this._getWidget();
var l=c.getScrollY();
var innerHeight=c.getInnerSize().height;
var top,e,k;

if(b){var h=l;
var i=j;
while(1){for(;i>=0;i--){top=c.getItemTop(f[i]);
if(top<h){k=i+1;
break;
}}if(k==null){var m=this._getFirstSelectable();
return m==a?null:m;
}if(k>=j){h-=innerHeight+l-c.getItemBottom(a);
k=null;
continue;
}return f[k];
}}else{var g=innerHeight+l;
var i=j;
while(1){for(;i<length;i++){e=c.getItemBottom(f[i]);
if(e>g){k=i-1;
break;
}}if(k==null){var d=this._getLastSelectable();
return d==a?null:d;
}if(k<=j){g+=c.getItemTop(a)-l;
k=null;
continue;
}return f[k];
}}}}});
})();
(function(){var v="right",u="above",t="left",s="under",r="qx.ui.tree.SelectionManager";
qx.Class.define(r,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(o){var p=o.getBounds();

if(p){var top=this._getWidget().getItemTop(o);
return {top:top,bottom:top+p.height};
}},_isSelectable:function(a){return a instanceof qx.ui.tree.AbstractTreeItem&&a.isEnabled()&&a.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var m=this._getWidget();
var n=[];

if(m.getRoot()!=null){var l=m.getRoot().getItems(true,false,m.getHideRoot());

for(var i=0;i<l.length;i++){if(this._isSelectable(l[i])){n.push(l[i]);
}}}return n;
},_getSelectableRange:function(b,c){if(b===c){return [b];
}var d=this.getSelectables();
var e=d.indexOf(b);
var f=d.indexOf(c);

if(e<0||f<0){return [];
}
if(e<f){return d.slice(e,f+1);
}else{return d.slice(f,e+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var q=this.getSelectables();

if(q.length>0){return q[q.length-1];
}else{return null;
}},_getRelatedSelectable:function(g,h){var j=this._getWidget();
var k=null;

switch(h){case u:k=j.getPreviousSiblingOf(g,false);
break;
case s:k=j.getNextSiblingOf(g,false);
break;
case t:case v:break;
}
if(!k){return null;
}
if(this._isSelectable(k)){return k;
}else{return this._getRelatedSelectable(k,h);
}}}});
})();
(function(){var t="dblclick",s="click",r="Boolean",q="excluded",p="visible",o="qx.event.type.Data",n="_applyOpenMode",m="Space",l="Left",k="Enter",H="changeOpenMode",G="_applyRootOpenClose",F="__mV",E="changeSelection",D="qx.ui.tree.Tree",C="tree",B="_applyHideRoot",A="changeRoot",z="_applyRoot",y="keypress",w="none",x="pane",u="Right",v="qx.ui.tree.AbstractTreeItem";
qx.Class.define(D,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__mV=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(x).add(this.__mV);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(E,this._onChangeSelection,this);
this.addListener(y,this._onKeyPress,this);
},events:{addItem:o,removeItem:o},properties:{openMode:{check:[s,t,w],init:t,apply:n,event:H,themeable:true},root:{check:v,init:null,nullable:true,event:A,apply:z},hideRoot:{check:r,init:false,apply:B},rootOpenClose:{check:r,init:false,apply:G},appearance:{refine:true,init:C},focusable:{refine:true,init:true}},members:{__mV:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__mV;
},_applyRoot:function(a,b){var c=this.getChildrenContainer();

if(b){c.remove(b);

if(b.hasChildren()){c.remove(b.getChildrenContainer());
}}
if(a){c.add(a);

if(a.hasChildren()){c.add(a.getChildrenContainer());
}a.setVisibility(this.getHideRoot()?q:p);
a.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(I,J){var K=this.getRoot();

if(!K){return;
}K.setVisibility(I?q:p);
K.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(S,T){var U=this.getRoot();

if(!U){return;
}U.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__mV;
},getNextSiblingOf:function(N,O,P){if((O!==false||N.isOpen())&&!(P==true)&&N.hasChildren()){return N.getChildren()[0];
}
while(N){var parent=N.getParent();

if(!parent){return null;
}var R=parent.getChildren();
var Q=R.indexOf(N);

if(Q>-1&&Q<R.length-1){return R[Q+1];
}N=parent;
}return null;
},getPreviousSiblingOf:function(W,X,Y){var parent=W.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==W){return null;
}}}else{if(W==this.getRoot()){return null;
}}var bc=parent.getChildren();
var ba=bc.indexOf(W);

if(ba>0){var bb=bc[ba-1];

while((X!==false||bb.isOpen())&&!(Y==true)&&bb.hasChildren()){var bd=bb.getChildren();
bb=bd[bd.length-1];
}return bb;
}else{return parent;
}},getItems:function(L,M){if(this.getRoot()!=null){return this.getRoot().getItems(L,M,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(V){while(V){if(V==this){return null;
}
if(V instanceof qx.ui.tree.AbstractTreeItem){return V;
}V=V.getLayoutParent();
}return null;
},_applyOpenMode:function(d,f){if(f==s){this.removeListener(s,this._onOpen,this);
}else if(f==t){this.removeListener(t,this._onOpen,this);
}
if(d==s){this.addListener(s,this._onOpen,this);
}else if(d==t){this.addListener(t,this._onOpen,this);
}},_onOpen:function(e){var g=this.getTreeItem(e.getTarget());

if(!g||!g.isOpenable()){return;
}g.setOpen(!g.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var j=e.getData();
for(var i=0;i<j.length;i++){var h=j[i];
while(h.getParent()!=null){h=h.getParent();
h.setOpen(true);
}}},_onKeyPress:function(e){var be=this._getLeadItem();

if(be!==null){switch(e.getKeyIdentifier()){case l:if(be.isOpenable()&&be.isOpen()){be.setOpen(false);
}break;
case u:if(be.isOpenable()&&!be.isOpen()){be.setOpen(true);
}break;
case k:case m:if(be.isOpenable()){be.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(F);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(e){this.assertNumber(e);
},scrollBySteps:function(d){this.assertNumber(d);
}}});
})();
(function(){var u="horizontal",t="px",s="scroll",r="vertical",q="-1px",p="qx.client",o="0",n="hidden",m="mousedown",l="qx.ui.core.scroll.NativeScrollBar",J="PositiveNumber",I="Integer",H="__mX",G="mousemove",F="_applyMaximum",E="_applyOrientation",D="appear",C="opera",B="PositiveInteger",A="mshtml",y="mouseup",z="Number",w="_applyPosition",x="scrollbar",v="native";
qx.Class.define(l,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(a){arguments.callee.base.call(this);
this.addState(v);
this.getContentElement().addListener(s,this._onScroll,this);
this.addListener(m,this._stopPropagation,this);
this.addListener(y,this._stopPropagation,this);
this.addListener(G,this._stopPropagation,this);

if(qx.core.Variant.isSet(p,C)){this.addListener(D,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(a!=null){this.setOrientation(a);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:x},orientation:{check:[u,r],init:u,apply:E},maximum:{check:B,apply:F,init:100},position:{check:z,init:0,apply:w,event:s},singleStep:{check:I,init:20},knobFactor:{check:J,nullable:true}},members:{__mW:null,__mX:null,_getScrollPaneElement:function(){if(!this.__mX){this.__mX=new qx.html.Element();
}return this.__mX;
},renderLayout:function(N,top,O,P){var Q=arguments.callee.base.call(this,N,top,O,P);
this._updateScrollBar();
return Q;
},_getContentHint:function(){var K=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__mW?100:K,maxWidth:this.__mW?null:K,minWidth:this.__mW?null:K,height:this.__mW?K:100,maxHeight:this.__mW?K:null,minHeight:this.__mW?K:null};
},_applyEnabled:function(g,h){arguments.callee.base.call(this,g,h);
this._updateScrollBar();
},_applyMaximum:function(b){this._updateScrollBar();
},_applyPosition:function(M){var content=this.getContentElement();

if(this.__mW){content.scrollToX(M);
}else{content.scrollToY(M);
}},_applyOrientation:function(c,d){var f=this.__mW=c===u;
this.set({allowGrowX:f,allowShrinkX:f,allowGrowY:!f,allowShrinkY:!f});

if(f){this.replaceState(r,u);
}else{this.replaceState(u,r);
}this.getContentElement().setStyles({overflowX:f?s:n,overflowY:f?n:s});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var U=this.__mW;
var V=this.getBounds();

if(!V){return;
}
if(this.isEnabled()){var W=U?V.width:V.height;
var T=this.getMaximum()+W;
}else{T=0;
}if(qx.core.Variant.isSet(p,A)){var V=this.getBounds();
this.getContentElement().setStyles({left:U?o:q,top:U?q:o,width:(U?V.width:V.width+1)+t,height:(U?V.height+1:V.height)+t});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(U?T:1)+t,height:(U?1:T)+t});
this.scrollTo(this.getPosition());
},scrollTo:function(L){this.setPosition(Math.max(0,Math.min(this.getMaximum(),L)));
},scrollBy:function(i){this.scrollTo(this.getPosition()+i);
},scrollBySteps:function(R){var S=this.getSingleStep();
this.scrollBy(R*S);
},_onScroll:function(e){var k=this.getContentElement();
var j=this.__mW?k.getScrollX():k.getScrollY();
this.setPosition(j);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(H);
}});
})();
(function(){var o="slider",n="horizontal",m="button-begin",l="vertical",k="button-end",j="Integer",i="execute",h="right",g="left",f="down",D="up",C="PositiveNumber",B="changeValue",A="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",z="_applyKnobFactor",y="knob",x="qx.ui.core.scroll.ScrollBar",w="resize",v="_applyOrientation",u="_applyPageStep",s="PositiveInteger",t="scroll",q="_applyPosition",r="scrollbar",p="_applyMaximum";
qx.Class.define(x,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(a){arguments.callee.base.call(this);
this._createChildControl(m);
this._createChildControl(o).addListener(w,this._onResizeSlider,this);
this._createChildControl(k);
if(a!=null){this.setOrientation(a);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:r},orientation:{check:[n,l],init:n,apply:v},maximum:{check:s,apply:p,init:100},position:{check:A,init:0,apply:q,event:t},singleStep:{check:j,init:20},pageStep:{check:j,init:10,apply:u},knobFactor:{check:C,apply:z,nullable:true}},members:{__mY:2,_createChildControlImpl:function(E){var F;

switch(E){case o:F=new qx.ui.core.scroll.ScrollSlider();
F.setPageStep(100);
F.setFocusable(false);
F.addListener(B,this._onChangeSliderValue,this);
this._add(F,{flex:1});
break;
case m:F=new qx.ui.form.RepeatButton();
F.setFocusable(false);
F.addListener(i,this._onExecuteBegin,this);
this._add(F);
break;
case k:F=new qx.ui.form.RepeatButton();
F.setFocusable(false);
F.addListener(i,this._onExecuteEnd,this);
this._add(F);
break;
}return F||arguments.callee.base.call(this,E);
},_applyMaximum:function(O){this.getChildControl(o).setMaximum(O);
},_applyPosition:function(J){this.getChildControl(o).setValue(J);
},_applyKnobFactor:function(b){this.getChildControl(o).setKnobFactor(b);
},_applyPageStep:function(d){this.getChildControl(o).setPageStep(d);
},_applyOrientation:function(P,Q){var R=this._getLayout();

if(R){R.dispose();
}if(P===n){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(l,n);
this.getChildControl(m).replaceState(D,g);
this.getChildControl(k).replaceState(f,h);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(n,l);
this.getChildControl(m).replaceState(g,D);
this.getChildControl(k).replaceState(h,f);
}this.getChildControl(o).setOrientation(P);
},scrollTo:function(c){this.getChildControl(o).slideTo(c);
},scrollBy:function(I){this.getChildControl(o).slideBy(I);
},scrollBySteps:function(G){var H=this.getSingleStep();
this.getChildControl(o).slideBy(G*H);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var K=this.getChildControl(o).getChildControl(y);
var N=K.getSizeHint();
var L=false;
var M=this.getChildControl(o).getInnerSize();

if(this.getOrientation()==l){if(M.height<N.minHeight+this.__mY){L=true;
}}else{if(M.width<N.minWidth+this.__mY){L=true;
}}
if(L){K.exclude();
}else{K.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(d){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(b){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(c){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var U="knob",T="horizontal",S="vertical",R="Integer",Q="px",P="mousemove",O="resize",N="left",M="top",L="mouseup",bz="slider",by="PageUp",bx="mousedown",bw="height",bv="changeValue",bu="Left",bt="Down",bs="Up",br="dblclick",bq="qx.ui.form.Slider",bc="PageDown",bd="mousewheel",ba="interval",bb="_applyValue",X="_applyKnobFactor",Y="End",V="width",W="_applyOrientation",be="Home",bf="floor",bi="_applyMinimum",bh="click",bk="Right",bj="keypress",bm="ceil",bl="losecapture",bg="contextmenu",bp="_applyMaximum",bo="Number",bn="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bq,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(v){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bj,this._onKeyPress);
this.addListener(bd,this._onMouseWheel);
this.addListener(bx,this._onMouseDown);
this.addListener(L,this._onMouseUp);
this.addListener(bl,this._onMouseUp);
this.addListener(O,this._onUpdate);
this.addListener(bg,this._onStopEvent);
this.addListener(bh,this._onStopEvent);
this.addListener(br,this._onStopEvent);
if(v!=null){this.setOrientation(v);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bz},focusable:{refine:true,init:true},orientation:{check:[T,S],init:T,apply:W},value:{check:bn,init:0,apply:bb,event:bv,nullable:true},minimum:{check:R,init:0,apply:bi},maximum:{check:R,init:100,apply:bp},singleStep:{check:R,init:1},pageStep:{check:R,init:10},knobFactor:{check:bo,apply:X,nullable:true}},members:{__na:null,__nb:null,__nc:null,__nd:null,__ne:null,__nf:null,__ng:null,__nh:null,__ni:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bS){var bT;

switch(bS){case U:bT=new qx.ui.core.Widget();
bT.addListener(O,this._onUpdate,this);
this._add(bT);
break;
}return bT||arguments.callee.base.call(this,bS);
},_onMouseWheel:function(e){var G=e.getWheelDelta()>0?1:-1;
this.slideBy(G*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bB=this.getOrientation()===T;
var bA=bB?bu:bs;
var forward=bB?bk:bt;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bA:this.slideBack();
break;
case bc:this.slidePageForward();
break;
case by:this.slidePageBack();
break;
case be:this.slideToBegin();
break;
case Y:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__nd){return;
}var bI=this.__nk;
var bG=this.getChildControl(U);
var bH=bI?N:M;
var bK=bI?e.getDocumentLeft():e.getDocumentTop();
var bL=this.__na=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bH];
var bJ=this.__nb=qx.bom.element.Location.get(bG.getContainerElement().getDomElement())[bH];

if(e.getTarget()===bG){this.__nd=true;
this.__ne=bK+bL-bJ;
}else{this.__nf=true;
this.__ng=bK<=bJ?-1:1;
this.__nl(e);
this._onInterval();
if(!this.__ni){this.__ni=new qx.event.Timer(100);
this.__ni.addListener(ba,this._onInterval,this);
}this.__ni.start();
}this.addListener(P,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__nd){this.releaseCapture();
delete this.__nd;
delete this.__ne;
}else if(this.__nf){this.__ni.stop();
this.releaseCapture();
delete this.__nf;
delete this.__ng;
delete this.__nh;
}this.removeListener(P,this._onMouseMove);
if(e.getType()===L){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__nd){var C=this.__nk?e.getDocumentLeft():e.getDocumentTop();
var B=C-this.__ne;
this.slideTo(this._positionToValue(B));
}else if(this.__nf){this.__nl(e);
}e.stopPropagation();
},_onInterval:function(e){var bM=this.getValue()+(this.__ng*this.getPageStep());
if(bM<this.getMinimum()){bM=this.getMinimum();
}else if(bM>this.getMaximum()){bM=this.getMaximum();
}var bN=this.__ng==-1;

if((bN&&bM<=this.__nh)||(!bN&&bM>=this.__nh)){bM=this.__nh;
}this.slideTo(bM);
},_onUpdate:function(e){var E=this.getInnerSize();
var F=this.getChildControl(U).getBounds();
var D=this.__nk?V:bw;
this._updateKnobSize();
this.__nj=E[D]-F[D];
this.__nc=F[D];
this._updateKnobPosition();
},__nk:false,__nj:0,__nl:function(e){var h=this.__nk;
var o=h?e.getDocumentLeft():e.getDocumentTop();
var q=this.__na;
var i=this.__nb;
var s=this.__nc;
var p=o-q;

if(o>=i){p-=s;
}var m=this._positionToValue(p);
var j=this.getMinimum();
var k=this.getMaximum();

if(m<j){m=j;
}else if(m>k){m=k;
}else{var n=this.getValue();
var l=this.getPageStep();
var r=this.__ng<0?bf:bm;
m=n+(Math[r]((m-n)/l)*l);
}if(this.__nh==null||(this.__ng==-1&&m<=this.__nh)||(this.__ng==1&&m>=this.__nh)){this.__nh=m;
}},_positionToValue:function(x){var y=this.__nj;
if(y==null||y==0){return 0;
}var A=x/y;

if(A<0){A=0;
}else if(A>1){A=1;
}var z=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(z*A);
},_valueToPosition:function(c){var d=this.__nj;

if(d==null){return 0;
}var f=this.getMaximum()-this.getMinimum();
if(f==0){return 0;
}var c=c-this.getMinimum();
var g=c/f;

if(g<0){g=0;
}else if(g>1){g=1;
}return Math.round(d*g);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bC){var bD=this.getChildControl(U).getContainerElement();

if(this.__nk){bD.setStyle(N,bC+Q,true);
}else{bD.setStyle(M,bC+Q,true);
}},_updateKnobSize:function(){var b=this.getKnobFactor();

if(b==null){return;
}var a=this.getInnerSize();

if(a==null){return;
}if(this.__nk){this.getChildControl(U).setWidth(Math.round(b*a.width));
}else{this.getChildControl(U).setHeight(Math.round(b*a.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bR){this.slideTo(this.getValue()+bR);
},slideTo:function(w){if(w<this.getMinimum()){w=this.getMinimum();
}else if(w>this.getMaximum()){w=this.getMaximum();
}else{w=this.getMinimum()+Math.round((w-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(w);
},_applyOrientation:function(bO,bP){var bQ=this.getChildControl(U);
this.__nk=bO===T;
if(this.__nk){this.removeState(S);
bQ.removeState(S);
this.addState(T);
bQ.addState(T);
bQ.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(T);
bQ.removeState(T);
this.addState(S);
bQ.addState(S);
bQ.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(J,K){if(J!=null){this._updateKnobSize();
}else{if(this.__nk){this.getChildControl(U).resetWidth();
}else{this.getChildControl(U).resetHeight();
}}},_applyValue:function(H,I){if(H!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(t,u){if(this.getValue()<t){this.setValue(t);
}this._updateKnobPosition();
},_applyMaximum:function(bE,bF){if(this.getValue()>bE){this.setValue(bE);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var U="left",T="top",S="_applyLayoutChange",R="hAlign",Q="flex",P="vAlign",O="Integer",N="minWidth",M="width",L="minHeight",I="qx.ui.layout.Grid",K="height",J="maxHeight",H="maxWidth";
qx.Class.define(I,{extend:qx.ui.layout.Abstract,construct:function(ct,cu){arguments.callee.base.call(this);
this.__nm=[];
this.__nn=[];

if(ct){this.setSpacingX(ct);
}
if(cu){this.setSpacingY(cu);
}},properties:{spacingX:{check:O,init:0,apply:S},spacingY:{check:O,init:0,apply:S}},members:{__no:null,__nm:null,__nn:null,__np:null,__nq:null,__nr:null,__ns:null,__nt:null,__nu:null,verifyLayoutProperty:null,__nv:function(){var bz=[];
var by=[];
var bA=[];
var bw=-1;
var bv=-1;
var bC=this._getLayoutChildren();

for(var i=0,l=bC.length;i<l;i++){var bx=bC[i];
var bB=bx.getLayoutProperties();
var bD=bB.row;
var bu=bB.column;
bB.colSpan=bB.colSpan||1;
bB.rowSpan=bB.rowSpan||1;
if(bD==null||bu==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+bx+"' must be defined!");
}
if(bz[bD]&&bz[bD][bu]){throw new Error("Cannot add widget '"+bx+"'!. "+"There is already a widget '"+bz[bD][bu]+"' in this cell ("+bD+", "+bu+")");
}
for(var x=bu;x<bu+bB.colSpan;x++){for(var y=bD;y<bD+bB.rowSpan;y++){if(bz[y]==undefined){bz[y]=[];
}bz[y][x]=bx;
bv=Math.max(bv,x);
bw=Math.max(bw,y);
}}
if(bB.rowSpan>1){bA.push(bx);
}
if(bB.colSpan>1){by.push(bx);
}}for(var y=0;y<=bw;y++){if(bz[y]==undefined){bz[y]=[];
}}this.__no=bz;
this.__np=by;
this.__nq=bA;
this.__nr=bw;
this.__ns=bv;
this.__nt=null;
this.__nu=null;
delete this._invalidChildrenCache;
},_setRowData:function(bq,br,bs){var bt=this.__nm[bq];

if(!bt){this.__nm[bq]={};
this.__nm[bq][br]=bs;
}else{bt[br]=bs;
}},_setColumnData:function(cE,cF,cG){var cH=this.__nn[cE];

if(!cH){this.__nn[cE]={};
this.__nn[cE][cF]=cG;
}else{cH[cF]=cG;
}},setSpacing:function(co){this.setSpacingY(co);
this.setSpacingX(co);
return this;
},setColumnAlign:function(c,d,e){{};
this._setColumnData(c,R,d);
this._setColumnData(c,P,e);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bd){var be=this.__nn[bd]||{};
return {vAlign:be.vAlign||T,hAlign:be.hAlign||U};
},setRowAlign:function(dN,dO,dP){{};
this._setRowData(dN,R,dO);
this._setRowData(dN,P,dP);
this._applyLayoutChange();
return this;
},getRowAlign:function(X){var Y=this.__nm[X]||{};
return {vAlign:Y.vAlign||T,hAlign:Y.hAlign||U};
},getCellWidget:function(dH,dI){if(this._invalidChildrenCache){this.__nv();
}var dH=this.__no[dH]||{};
return dH[dI]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__nv();
}return this.__nr+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__nv();
}return this.__ns+1;
},getCellAlign:function(dS,dT){var ea=T;
var dX=U;
var dY=this.__nm[dS];
var dV=this.__nn[dT];
var dU=this.__no[dS][dT];

if(dU){var dW={vAlign:dU.getAlignY(),hAlign:dU.getAlignX()};
}else{dW={};
}if(dW.vAlign){ea=dW.vAlign;
}else if(dY&&dY.vAlign){ea=dY.vAlign;
}else if(dV&&dV.vAlign){ea=dV.vAlign;
}if(dW.hAlign){dX=dW.hAlign;
}else if(dV&&dV.hAlign){dX=dV.hAlign;
}else if(dY&&dY.hAlign){dX=dY.hAlign;
}return {vAlign:ea,hAlign:dX};
},setColumnFlex:function(bE,bF){this._setColumnData(bE,Q,bF);
this._applyLayoutChange();
return this;
},getColumnFlex:function(ci){var cj=this.__nn[ci]||{};
return cj.flex!==undefined?cj.flex:0;
},setRowFlex:function(dL,dM){this._setRowData(dL,Q,dM);
this._applyLayoutChange();
return this;
},getRowFlex:function(ba){var bb=this.__nm[ba]||{};
var bc=bb.flex!==undefined?bb.flex:0;
return bc;
},setColumnMaxWidth:function(a,b){this._setColumnData(a,H,b);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(cm){var cn=this.__nn[cm]||{};
return cn.maxWidth!==undefined?cn.maxWidth:Infinity;
},setColumnWidth:function(cg,ch){this._setColumnData(cg,M,ch);
this._applyLayoutChange();
return this;
},getColumnWidth:function(cv){var cw=this.__nn[cv]||{};
return cw.width!==undefined?cw.width:null;
},setColumnMinWidth:function(ck,cl){this._setColumnData(ck,N,cl);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(dQ){var dR=this.__nn[dQ]||{};
return dR.minWidth||0;
},setRowMaxHeight:function(V,W){this._setRowData(V,J,W);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(cK){var cL=this.__nm[cK]||{};
return cL.maxHeight||Infinity;
},setRowHeight:function(dJ,dK){this._setRowData(dJ,K,dK);
this._applyLayoutChange();
return this;
},getRowHeight:function(cI){var cJ=this.__nm[cI]||{};
return cJ.height!==undefined?cJ.height:null;
},setRowMinHeight:function(cp,cq){this._setRowData(cp,L,cq);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cr){var cs=this.__nm[cr]||{};
return cs.minHeight||0;
},__nw:function(f){var m=f.getSizeHint();
var k=f.getMarginLeft()+f.getMarginRight();
var h=f.getMarginTop()+f.getMarginBottom();
var g={height:m.height+h,width:m.width+k,minHeight:m.minHeight+h,minWidth:m.minWidth+k,maxHeight:m.maxHeight+h,maxWidth:m.maxWidth+k};
return g;
},_fixHeightsRowSpan:function(bR){var cd=this.getSpacingY();

for(var i=0,l=this.__nq.length;i<l;i++){var bU=this.__nq[i];
var bW=this.__nw(bU);
var bX=bU.getLayoutProperties();
var bT=bX.row;
var cb=cd*(bX.rowSpan-1);
var bS=cb;
var ca={};

for(var j=0;j<bX.rowSpan;j++){var cf=bX.row+j;
var bV=bR[cf];
var ce=this.getRowFlex(cf);

if(ce>0){ca[cf]={min:bV.minHeight,value:bV.height,max:bV.maxHeight,flex:ce};
}cb+=bV.height;
bS+=bV.minHeight;
}if(cb<bW.height){var cc=qx.ui.layout.Util.computeFlexOffsets(ca,bW.height,cb);

for(var j=0;j<bX.rowSpan;j++){var bY=cc[bT+j]?cc[bT+j].offset:0;
bR[bT+j].height+=bY;
}}if(bS<bW.minHeight){var cc=qx.ui.layout.Util.computeFlexOffsets(ca,bW.minHeight,bS);

for(var j=0;j<bX.rowSpan;j++){var bY=cc[bT+j]?cc[bT+j].offset:0;
bR[bT+j].minHeight+=bY;
}}}},_fixWidthsColSpan:function(dt){var dx=this.getSpacingX();

for(var i=0,l=this.__np.length;i<l;i++){var du=this.__np[i];
var dw=this.__nw(du);
var dz=du.getLayoutProperties();
var dv=dz.column;
var dF=dx*(dz.colSpan-1);
var dy=dF;
var dA={};
var dC;

for(var j=0;j<dz.colSpan;j++){var dG=dz.column+j;
var dE=dt[dG];
var dD=this.getColumnFlex(dG);
if(dD>0){dA[dG]={min:dE.minWidth,value:dE.width,max:dE.maxWidth,flex:dD};
}dF+=dE.width;
dy+=dE.minWidth;
}if(dF<dw.width){var dB=qx.ui.layout.Util.computeFlexOffsets(dA,dw.width,dF);

for(var j=0;j<dz.colSpan;j++){dC=dB[dv+j]?dB[dv+j].offset:0;
dt[dv+j].width+=dC;
}}if(dy<dw.minWidth){var dB=qx.ui.layout.Util.computeFlexOffsets(dA,dw.minWidth,dy);

for(var j=0;j<dz.colSpan;j++){dC=dB[dv+j]?dB[dv+j].offset:0;
dt[dv+j].minWidth+=dC;
}}}},_getRowHeights:function(){if(this.__nt!=null){return this.__nt;
}var bo=[];
var bh=this.__nr;
var bg=this.__ns;

for(var bp=0;bp<=bh;bp++){var bi=0;
var bk=0;
var bj=0;

for(var bn=0;bn<=bg;bn++){var bf=this.__no[bp][bn];

if(!bf){continue;
}var bl=bf.getLayoutProperties().rowSpan||0;

if(bl>1){continue;
}var bm=this.__nw(bf);

if(this.getRowFlex(bp)>0){bi=Math.max(bi,bm.minHeight);
}else{bi=Math.max(bi,bm.height);
}bk=Math.max(bk,bm.height);
}var bi=Math.max(bi,this.getRowMinHeight(bp));
var bj=this.getRowMaxHeight(bp);

if(this.getRowHeight(bp)!==null){var bk=this.getRowHeight(bp);
}else{var bk=Math.max(bi,Math.min(bk,bj));
}bo[bp]={minHeight:bi,height:bk,maxHeight:bj};
}
if(this.__nq.length>0){this._fixHeightsRowSpan(bo);
}this.__nt=bo;
return bo;
},_getColWidths:function(){if(this.__nu!=null){return this.__nu;
}var bK=[];
var bH=this.__ns;
var bJ=this.__nr;

for(var bP=0;bP<=bH;bP++){var bN=0;
var bM=0;
var bI=Infinity;

for(var bQ=0;bQ<=bJ;bQ++){var bG=this.__no[bQ][bP];

if(!bG){continue;
}var bL=bG.getLayoutProperties().colSpan||0;

if(bL>1){continue;
}var bO=this.__nw(bG);

if(this.getColumnFlex(bP)>0){bM=Math.max(bM,bO.minWidth);
}else{bM=Math.max(bM,bO.width);
}bN=Math.max(bN,bO.width);
}var bM=Math.max(bM,this.getColumnMinWidth(bP));
var bI=this.getColumnMaxWidth(bP);

if(this.getColumnWidth(bP)!==null){var bN=this.getColumnWidth(bP);
}else{var bN=Math.max(bM,Math.min(bN,bI));
}bK[bP]={minWidth:bM,width:bN,maxWidth:bI};
}
if(this.__np.length>0){this._fixWidthsColSpan(bK);
}this.__nu=bK;
return bK;
},_getColumnFlexOffsets:function(A){var B=this.getSizeHint();
var F=A-B.width;

if(F==0){return {};
}var D=this._getColWidths();
var C={};

for(var i=0,l=D.length;i<l;i++){var G=D[i];
var E=this.getColumnFlex(i);

if((E<=0)||(G.width==G.maxWidth&&F>0)||(G.width==G.minWidth&&F<0)){continue;
}C[i]={min:G.minWidth,value:G.width,max:G.maxWidth,flex:E};
}return qx.ui.layout.Util.computeFlexOffsets(C,A,B.width);
},_getRowFlexOffsets:function(cx){var cy=this.getSizeHint();
var cB=cx-cy.height;

if(cB==0){return {};
}var cC=this._getRowHeights();
var cz={};

for(var i=0,l=cC.length;i<l;i++){var cD=cC[i];
var cA=this.getRowFlex(i);

if((cA<=0)||(cD.height==cD.maxHeight&&cB>0)||(cD.height==cD.minHeight&&cB<0)){continue;
}cz[i]={min:cD.minHeight,value:cD.height,max:cD.maxHeight,flex:cA};
}return qx.ui.layout.Util.computeFlexOffsets(cz,cx,cy.height);
},renderLayout:function(cM,cN){if(this._invalidChildrenCache){this.__nv();
}var dc=qx.ui.layout.Util;
var cP=this.getSpacingX();
var cV=this.getSpacingY();
var dh=this._getColWidths();
var dg=this._getColumnFlexOffsets(cM);
var cQ=[];
var dj=this.__ns;
var cO=this.__nr;
var di;

for(var dk=0;dk<=dj;dk++){di=dg[dk]?dg[dk].offset:0;
cQ[dk]=dh[dk].width+di;
}var cY=this._getRowHeights();
var db=this._getRowFlexOffsets(cN);
var dr=[];

for(var cW=0;cW<=cO;cW++){di=db[cW]?db[cW].offset:0;
dr[cW]=cY[cW].height+di;
}var ds=0;

for(var dk=0;dk<=dj;dk++){var top=0;

for(var cW=0;cW<=cO;cW++){var de=this.__no[cW][dk];
if(!de){top+=dr[cW]+cV;
continue;
}var cR=de.getLayoutProperties();
if(cR.row!==cW||cR.column!==dk){top+=dr[cW]+cV;
continue;
}var dq=cP*(cR.colSpan-1);

for(var i=0;i<cR.colSpan;i++){dq+=cQ[dk+i];
}var df=cV*(cR.rowSpan-1);

for(var i=0;i<cR.rowSpan;i++){df+=dr[cW+i];
}var cS=de.getSizeHint();
var dn=de.getMarginTop();
var dd=de.getMarginLeft();
var da=de.getMarginBottom();
var cU=de.getMarginRight();
var cX=Math.max(cS.minWidth,Math.min(dq-dd-cU,cS.maxWidth));
var dp=Math.max(cS.minHeight,Math.min(df-dn-da,cS.maxHeight));
var dl=this.getCellAlign(cW,dk);
var dm=ds+dc.computeHorizontalAlignOffset(dl.hAlign,cX,dq,dd,cU);
var cT=top+dc.computeVerticalAlignOffset(dl.vAlign,dp,df,dn,da);
de.renderLayout(dm,cT,cX,dp);
top+=dr[cW]+cV;
}ds+=cQ[dk]+cP;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__nu=null;
this.__nt=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__nv();
}var r=this._getColWidths();
var t=0,u=0;

for(var i=0,l=r.length;i<l;i++){var v=r[i];

if(this.getColumnFlex(i)>0){t+=v.minWidth;
}else{t+=v.width;
}u+=v.width;
}var w=this._getRowHeights();
var p=0,s=0;

for(var i=0,l=w.length;i<l;i++){var z=w[i];

if(this.getRowFlex(i)>0){p+=z.minHeight;
}else{p+=z.height;
}s+=z.height;
}var o=this.getSpacingX()*(r.length-1);
var n=this.getSpacingY()*(w.length-1);
var q={minWidth:t+o,width:u+o,minHeight:p+n,height:s+n};
return q;
}},destruct:function(){this.__no=this.__nm=this.__nn=this.__np=this.__nq=this.__nu=this.__nt=null;
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(u,v,name){this.fireDataEvent(c,{value:u,name:name,old:v});
this._registerEventChaining(u,v,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__nx,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__nx:function(name,e){var t=e.getData();
var p=t.value;
var n=t.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(t.name.indexOf){var s=t.name.indexOf(f)!=-1?t.name.indexOf(f):t.name.length;
var q=t.name.indexOf(h)!=-1?t.name.indexOf(h):t.name.length;

if(s<q){var m=t.name.substring(0,s);
var r=t.name.substring(s+1,t.name.length);

if(r[0]!=h){r=f+r;
}var o=name+h+m+g+r;
}else if(q<s){var m=t.name.substring(0,q);
var r=t.name.substring(q,t.name.length);
var o=name+h+m+g+r;
}else{var o=name+h+t.name+g;
}}else{var o=name+h+t.name+g;
}}else{var o=name+f+t.name;
}this.fireDataEvent(c,{value:p,name:o,old:n});
}}});
})();
(function(){var E="change",D="add",C="remove",B="order",A="",z="qx.data.Array",y="?",x="changeBubble",w="qx.event.type.Event",v="number",t="changeLength",u="qx.event.type.Data";
qx.Class.define(z,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(ba){arguments.callee.base.call(this);
if(ba==undefined){this.__ny=[];
}else if(arguments.length>1){this.__ny=[];

for(var i=0;i<arguments.length;i++){this.__ny.push(arguments[i]);
}}else if(typeof ba==v){this.__ny=new Array(ba);
}else if(ba instanceof Array){this.__ny=qx.lang.Array.clone(ba);
}else{this.__ny=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__ny.length;i++){this._applyEventPropagation(this.__ny[i],null,i);
}this.__nz();
},events:{"change":u,"changeLength":w},members:{__ny:null,concat:function(G){if(G){var H=this.__ny.concat(G);
}else{var H=this.__ny.concat();
}return new qx.data.Array(H);
},join:function(h){return this.__ny.join(h);
},pop:function(){var M=this.__ny.pop();
this.__nz();
this._applyEventPropagation(null,M,this.length-1);
this.fireDataEvent(E,{start:this.length-1,end:this.length-1,type:C,items:[M]},null);
return M;
},push:function(c){for(var i=0;i<arguments.length;i++){this.__ny.push(arguments[i]);
this.__nz();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(E,{start:this.length-1,end:this.length-1,type:D,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__ny.reverse();
this.fireDataEvent(E,{start:0,end:this.length-1,type:B,items:null},null);
},shift:function(){var L=this.__ny.shift();
this.__nz();
this._applyEventPropagation(null,L);
this.fireDataEvent(E,{start:0,end:this.length-1,type:C,items:[L]},null);
return L;
},slice:function(Q,R){return new qx.data.Array(this.__ny.slice(Q,R));
},splice:function(k,l,m){var s=this.__ny.length;
var p=this.__ny.splice.apply(this.__ny,arguments);
if(this.__ny.length!=s){this.__nz();
}var q=l>0;
var n=arguments.length>2;
var o=null;

if(q||n){if(this.__ny.length>s){var r=D;
}else if(this.__ny.length<s){var r=C;
o=p;
}else{var r=B;
}this.fireDataEvent(E,{start:k,end:this.length-1,type:r,items:o},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,k+i);
}this.fireDataEvent(x,{value:this,name:y,old:p});
for(var i=0;i<p.length;i++){this._applyEventPropagation(null,p[i],i);
}return (new qx.data.Array(p));
},sort:function(bg){this.__ny.sort.apply(this.__ny,arguments);
this.fireDataEvent(E,{start:0,end:this.length-1,type:B,items:null},null);
},unshift:function(bf){for(var i=arguments.length-1;i>=0;i--){this.__ny.unshift(arguments[i]);
this.__nz();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(E,{start:0,end:this.length-1,type:D,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__ny;
},getItem:function(a){return this.__ny[a];
},setItem:function(e,f){var g=this.__ny[e];
this.__ny[e]=f;
this._applyEventPropagation(f,g,e);
if(this.length!=this.__ny.length){this.__nz();
}this.fireDataEvent(E,{start:e,end:e,type:D,items:[f]},null);
},getLength:function(){return this.length;
},indexOf:function(b){return this.__ny.indexOf(b);
},toString:function(){if(this.__ny!=null){return this.__ny.toString();
}return A;
},contains:function(F){return this.__ny.indexOf(F)!==-1;
},copy:function(){return this.concat();
},insertAt:function(I,J){this.splice(I,0,J);
},insertBefore:function(bc,bd){var be=this.indexOf(bc);

if(be==-1){this.push(bd);
}else{this.splice(be,0,bd);
}},insertAfter:function(U,V){var W=this.indexOf(U);

if(W==-1||W==(this.length-1)){this.push(V);
}else{this.splice(W+1,0,V);
}},removeAt:function(N){return this.splice(N,1)[0];
},removeAll:function(){for(var i=0;i<this.__ny.length;i++){this._applyEventPropagation(null,this.__ny[i],i);
}var T=this.getLength();
var S=this.__ny.concat();
this.__ny.length=0;
this.__nz();
this.fireDataEvent(E,{start:0,end:T-1,type:C,items:S},null);
},append:function(d){{};
for(var i=0;i<d.length;i++){this._applyEventPropagation(d[i],null,this.__ny.length+i);
}Array.prototype.push.apply(this.__ny,d);
this.__nz();
},remove:function(O){var P=this.indexOf(O);

if(P!=-1){this.splice(P,1);
return O;
}},equals:function(j){if(this.length!==j.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==j.getItem(i)){return false;
}}return true;
},sum:function(){var K=0;

for(var i=0;i<this.length;i++){K+=this.getItem(i);
}return K;
},max:function(){var bh=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bh){bh=this.getItem(i);
}}return bh===undefined?null:bh;
},min:function(){var bb=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bb){bb=this.getItem(i);
}}return bb===undefined?null:bb;
},forEach:function(X,Y){for(var i=0;i<this.__ny.length;i++){X.call(Y,this.__ny[i]);
}},__nz:function(){this.length=this.__ny.length;
this.fireEvent(t,qx.event.type.Event);
}},destruct:function(){this.__ny=null;
}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var bq="open",bp="auto",bo="middle",bn="icon",bm="label",bl="changeOpen",bk="excluded",bj="visible",bi="String",bh="opened",bJ="always",bI="qx.ui.tree.AbstractTreeItem",bH="addItem",bG="Boolean",bF="__nB",bE="Integer",bD="_applyIndent",bC="__nA",bB="changeOpenSymbolMode",bA="_applyOpenSymbolMode",bx="resize",by="",bv="removeItem",bw="__nE",bt="abstract",bu="never",br="_applyIcon",bs="_applyOpen",bz="_applyLabel";
qx.Class.define(bI,{extend:qx.ui.core.Widget,type:bt,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__nA=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bG,init:false,event:bl,apply:bs},openSymbolMode:{check:[bJ,bu,bp],init:bp,event:bB,apply:bA},indent:{check:bE,init:19,apply:bD,themeable:true},parent:{check:bI,nullable:true},icon:{check:bi,apply:br,nullable:true,themeable:true},label:{check:bi,apply:bz,init:by}},members:{__nA:null,__nB:null,__nC:null,__nD:null,__nE:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(Y){var ba;

switch(Y){case bm:ba=new qx.ui.basic.Label().set({alignY:bo,value:this.getLabel()});
break;
case bn:ba=new qx.ui.basic.Image().set({alignY:bo,source:this.getIcon()});
break;
case bq:ba=new qx.ui.tree.FolderOpenButton().set({alignY:bo});
ba.addListener(bl,this._onChangeOpen,this);
ba.addListener(bx,this._updateIndent,this);
break;
}return ba||arguments.callee.base.call(this,Y);
},getTree:function(){var b=this;

while(b.getParent()){b=b.getParent();
}var a=b.getLayoutParent()?b.getLayoutParent().getLayoutParent():0;

if(a&&a instanceof qx.ui.core.scroll.ScrollPane){return a.getLayoutParent();
}return null;
},addWidget:function(bb,bc){this._add(bb,bc);
},addSpacer:function(){if(!this.__nE){this.__nE=new qx.ui.core.Spacer();
}else{this._remove(this.__nE);
}this._add(this.__nE);
},addOpenButton:function(){this._add(this.getChildControl(bq));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var X=this.getChildControl(bn);

if(this.__nD){this._remove(X);
}this._add(X);
this.__nD=true;
},addLabel:function(p){var q=this.getChildControl(bm);

if(this.__nC){this._remove(q);
}
if(p){this.setLabel(p);
}else{q.setValue(this.getLabel());
}this._add(q);
this.__nC=true;
},addState:function(w){arguments.callee.base.call(this,w);
var y=this._getChildren();

for(var i=0,l=y.length;i<l;i++){var x=y[i];

if(x.addState){y[i].addState(w);
}}},removeState:function(bd){arguments.callee.base.call(this,bd);
var bf=this._getChildren();

for(var i=0,l=bf.length;i<l;i++){var be=bf[i];

if(be.addState){bf[i].removeState(bd);
}}},_applyIcon:function(T,U){var V=this.getChildControl(bn,true);

if(V){V.setSource(T);
}},_applyLabel:function(O,P){var Q=this.getChildControl(bm,true);

if(Q){Q.setValue(O);
}},_applyOpen:function(c,d){if(this.hasChildren()){this.getChildrenContainer().setVisibility(c?bj:bk);
}var open=this.getChildControl(bq,true);

if(open){open.setOpen(c);
}c?this.addState(bh):this.removeState(bh);
},isOpenable:function(){var bg=this.getOpenSymbolMode();
return (bg===bJ||bg===bp&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bq,true);

if(!open){return false;
}var bT=this.getTree();

if(!bT.getRootOpenClose()){if(bT.getHideRoot()){if(bT.getRoot()==this.getParent()){return false;
}}else{if(bT.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(F,G){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bS=0;
var open=this.getChildControl(bq,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bR=open.getBounds();

if(bR){bS=bR.width;
}else{return;
}}else{open.exclude();
}}
if(this.__nE){this.__nE.setWidth((this.getLevel()+1)*this.getIndent()-bS);
}},_applyIndent:function(R,S){this._updateIndent();
},getLevel:function(){var bO=this.getTree();

if(!bO){return;
}var bP=this;
var bQ=-1;

while(bP){bP=bP.getParent();
bQ+=1;
}if(bO.getHideRoot()){bQ-=1;
}
if(!bO.getRootOpenClose()){bQ-=1;
}return bQ;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__nB){this.__nB=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?bj:bk});
}return this.__nB;
},hasChildrenContainer:function(){return this.__nB;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__nA;
},hasChildren:function(){return this.__nA?this.__nA.length>0:false;
},getItems:function(H,I,J){if(J!==false){var K=[];
}else{var K=[this];
}var N=this.hasChildren()&&(I!==false||this.isOpen());

if(N){var M=this.getChildren();

if(H===false){K=K.concat(M);
}else{for(var i=0,L=M.length;i<L;i++){K=K.concat(M[i].getItems(H,I,false));
}}}return K;
},recursiveAddToWidgetQueue:function(){var bU=this.getItems(true,true,false);

for(var i=0,l=bU.length;i<l;i++){qx.ui.core.queue.Widget.add(bU[i]);
}},__nF:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(z){var A=this.getChildrenContainer();
var D=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var E=arguments[i];
var C=E.getParent();

if(C){C.remove(E);
}E.setParent(this);
var B=this.hasChildren();
A.add(E);

if(E.hasChildren()){A.add(E.getChildrenContainer());
}this.__nA.push(E);

if(!B){this.__nF();
}
if(D){E.recursiveAddToWidgetQueue();
D.fireNonBubblingEvent(bH,qx.event.type.Data,[E]);
}}
if(D){qx.ui.core.queue.Widget.add(this);
}},addAt:function(h,j){{};

if(j==this.__nA.length){this.add(h);
return;
}var o=h.getParent();

if(o){o.remove(h);
}var m=this.getChildrenContainer();
h.setParent(this);
var n=this.hasChildren();
var k=this.__nA[j];
m.addBefore(h,k);

if(h.hasChildren()){m.addAfter(h.getChildrenContainer(),h);
}qx.lang.Array.insertAt(this.__nA,h,j);

if(!n){this.__nF();
}
if(this.getTree()){h.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bK,bL){{};
this.addAt(bK,this.__nA.indexOf(bL));
},addAfter:function(f,g){{};
this.addAt(f,this.__nA.indexOf(g)+1);
},addAtBegin:function(W){this.addAt(W,0);
},remove:function(r){for(var i=0,l=arguments.length;i<l;i++){var v=arguments[i];

if(this.__nA.indexOf(v)==-1){this.warn("Cannot remove treeitem '"+v+"'. It is not a child of this tree item.");
return;
}var s=this.getChildrenContainer();

if(v.hasChildrenContainer()){var u=v.getChildrenContainer();

if(s.getChildren().indexOf(u)>=0){s.remove(u);
}}qx.lang.Array.remove(this.__nA,v);
v.setParent(null);
s.remove(v);
}var t=this.getTree();

if(t){t.fireNonBubblingEvent(bv,qx.event.type.Data,[v]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bM){var bN=this.__nA[bM];

if(bN){this.remove(bN);
}},removeAll:function(){for(var i=this.__nA.length-1;i>=0;i--){this.remove(this.__nA[i]);
}}},destruct:function(){this._disposeArray(bC);
this._disposeObjects(bw,bF);
}});
})();
(function(){var k="opened",j="click",i="changeOpen",h="Boolean",g="qx.ui.tree.FolderOpenButton",f="_applyOpen",d="mouseup",c="mousedown";
qx.Class.define(g,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
this.initOpen();
this.addListener(j,this._onClick);
this.addListener(c,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
},properties:{open:{check:h,init:false,event:i,apply:f}},members:{_applyOpen:function(a,b){a?this.addState(k):this.removeState(k);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){arguments.callee.base.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){arguments.callee.base.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var u="qx.event.type.Data",t="EVENT_TYPE_DATA_CHANGED",s="qx.ui.table.ITableModel",r="New code should not use this. Instead, use the text string 'dataChanged' literally.",q="New code should not use this. Instead, use the text string 'metaDataChanged' literally.",p="qx.event.type.Event",o="EVENT_TYPE_META_DATA_CHANGED";
qx.Interface.define(s,{events:{"dataChanged":u,"metaDataChanged":p,"sorted":u},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(n){},getColumnCount:function(){},getColumnId:function(a){},getColumnIndexById:function(b){},getColumnName:function(A){},isColumnEditable:function(z){},isColumnSortable:function(m){},sortByColumn:function(v,w){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(x,y){},getValue:function(h,i){},getValueById:function(c,d){},setValue:function(e,f,g){},setValueById:function(j,k,l){}}});
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,t,r);
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,o,q);
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){arguments.callee.base.call(this);
this.__nR=[];
this.__nS=[];
this.__nT={};
},members:{__nR:null,__nS:null,__nT:null,__nU:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(x){return null;
},isColumnEditable:function(B){return false;
},isColumnSortable:function(u){return false;
},sortByColumn:function(n,o){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(v,w){},getValue:function(l,m){throw new Error("getValue is abstract");
},getValueById:function(g,h){return this.getValue(this.getColumnIndexById(g),h);
},setValue:function(C,D,E){throw new Error("setValue is abstract");
},setValueById:function(y,z,A){this.setValue(this.getColumnIndexById(y),z,A);
},getColumnCount:function(){return this.__nR.length;
},getColumnIndexById:function(k){return this.__nT[k];
},getColumnId:function(p){return this.__nR[p];
},getColumnName:function(F){return this.__nS[F];
},setColumnIds:function(j){this.__nR=j;
this.__nT={};

for(var i=0;i<j.length;i++){this.__nT[j[i]]=i;
}this.__nS=new Array(j.length);
if(!this.__nU){this.fireEvent(e);
}},setColumnNamesByIndex:function(f){if(this.__nR.length!=f.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__nR.length+" != "+f.length);
}this.__nS=f;
this.fireEvent(e);
},setColumnNamesById:function(t){this.__nS=new Array(this.__nR.length);

for(var i=0;i<this.__nR.length;++i){this.__nS[i]=t[this.__nR[i]];
}},setColumns:function(q,r){var s=this.__nR.length==0||r;

if(r==null){if(this.__nR.length==0){r=q;
}else{r=this.__nR;
}}
if(r.length!=q.length){throw new Error("columnIdArr and columnNameArr have different length: "+r.length+" != "+q.length);
}
if(s){this.__nU=true;
this.setColumnIds(r);
this.__nU=false;
}this.setColumnNamesByIndex(q);
}},destruct:function(){this.__nR=this.__nS=this.__nT=null;
}});
})();
(function(){var bg="dataChanged",bf="metaDataChanged",be="qx.ui.table.model.Simple",bd="Boolean",bc="sorted";
qx.Class.define(be,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__nV=[];
this.__nW=-1;
this.__nX=[];
this.__nY=null;
},properties:{caseSensitiveSorting:{check:bd,init:true}},statics:{_defaultSortComparatorAscending:function(b,c){var d=b[arguments.callee.columnIndex];
var e=c[arguments.callee.columnIndex];
return (d>e)?1:((d==e)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(bq,br){var bs=(isNaN(bq[arguments.callee.columnIndex])?bq[arguments.callee.columnIndex].toLowerCase():bq[arguments.callee.columnIndex]);
var bt=(isNaN(br[arguments.callee.columnIndex])?br[arguments.callee.columnIndex].toLowerCase():br[arguments.callee.columnIndex]);
return (bs>bt)?1:((bs==bt)?0:-1);
},_defaultSortComparatorDescending:function(T,U){var V=T[arguments.callee.columnIndex];
var W=U[arguments.callee.columnIndex];
return (V<W)?1:((V==W)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bv,bw){var bx=(isNaN(bv[arguments.callee.columnIndex])?bv[arguments.callee.columnIndex].toLowerCase():bv[arguments.callee.columnIndex]);
var by=(isNaN(bw[arguments.callee.columnIndex])?bw[arguments.callee.columnIndex].toLowerCase():bw[arguments.callee.columnIndex]);
return (bx<by)?1:((bx==by)?0:-1);
}},members:{__nV:null,__nY:null,__oa:null,__nX:null,__nW:null,__ob:null,getRowData:function(bD){var bE=this.__nV[bD];

if(bE==null||bE.originalData==null){return bE;
}else{return bE.originalData;
}},getRowDataAsMap:function(bF){var bH=this.__nV[bF];
var bG={};

for(var bI=0;bI<this.getColumnCount();bI++){bG[this.getColumnId(bI)]=bH[bI];
}return bG;
},getDataAsMapArray:function(){var m=this.getRowCount();
var l=[];

for(var i=0;i<m;i++){l.push(this.getRowDataAsMap(i));
}return l;
},setEditable:function(p){this.__nY=[];

for(var q=0;q<this.getColumnCount();q++){this.__nY[q]=p;
}this.fireEvent(bf);
},setColumnEditable:function(bJ,bK){if(bK!=this.isColumnEditable(bJ)){if(this.__nY==null){this.__nY=[];
}this.__nY[bJ]=bK;
this.fireEvent(bf);
}},isColumnEditable:function(bu){return this.__nY?(this.__nY[bu]==true):false;
},setColumnSortable:function(n,o){if(o!=this.isColumnSortable(n)){if(this.__oa==null){this.__oa=[];
}this.__oa[n]=o;
this.fireEvent(bf);
}},isColumnSortable:function(a){return (this.__oa?(this.__oa[a]!==false):true);
},sortByColumn:function(B,C){var F;
var E=this.__nX[B];

if(E){F=(C?E.ascending:E.descending);
}else{if(this.getCaseSensitiveSorting()){F=(C?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{F=(C?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}F.columnIndex=B;
this.__nV.sort(F);
this.__nW=B;
this.__ob=C;
var D={columnIndex:B,ascending:C};
this.fireDataEvent(bc,D);
this.fireEvent(bf);
},setSortMethods:function(bh,bi){var bj;

if(qx.lang.Type.isFunction(bi)){bj={ascending:bi,descending:function(N,O){return bi(O,N);
}};
}else{bj=bi;
}this.__nX[bh]=bj;
},getSortMethods:function(t){return this.__nX[t];
},clearSorting:function(){if(this.__nW!=-1){this.__nW=-1;
this.__ob=true;
this.fireEvent(bf);
}},getSortColumnIndex:function(){return this.__nW;
},isSortAscending:function(){return this.__ob;
},getRowCount:function(){return this.__nV.length;
},getValue:function(r,s){if(s<0||s>=this.__nV.length){throw new Error("this.__rowArr out of bounds: "+s+" (0.."+this.__nV.length+")");
}return this.__nV[s][r];
},setValue:function(X,Y,ba){if(this.__nV[Y][X]!=ba){this.__nV[Y][X]=ba;
if(this.hasListener(bg)){var bb={firstRow:Y,lastRow:Y,firstColumn:X,lastColumn:X};
this.fireDataEvent(bg,bb);
}
if(X==this.__nW){this.clearSorting();
}}},setData:function(y,z){this.__nV=y;
if(this.hasListener(bg)){var A={firstRow:0,lastRow:y.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bg,A);
}
if(z!==false){this.clearSorting();
}},getData:function(){return this.__nV;
},setDataAsMapArray:function(K,L,M){this.setData(this._mapArray2RowArr(K,L),M);
},addRows:function(bz,bA,bB){if(bA==null){bA=this.__nV.length;
}bz.splice(0,0,bA,0);
Array.prototype.splice.apply(this.__nV,bz);
var bC={firstRow:bA,lastRow:this.__nV.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bg,bC);

if(bB!==false){this.clearSorting();
}},addRowsAsMapArray:function(u,v,w,x){this.addRows(this._mapArray2RowArr(u,w),v,x);
},setRows:function(f,g,h){if(g==null){g=0;
}f.splice(0,0,g,f.length);
Array.prototype.splice.apply(this.__nV,f);
var k={firstRow:g,lastRow:this.__nV.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bg,k);

if(h!==false){this.clearSorting();
}},setRowsAsMapArray:function(G,H,I,J){this.setRows(this._mapArray2RowArr(G,I),H,J);
},removeRows:function(P,Q,R){this.__nV.splice(P,Q);
var S={firstRow:P,lastRow:this.__nV.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:P,removeCount:Q};
this.fireDataEvent(bg,S);

if(R!==false){this.clearSorting();
}},_mapArray2RowArr:function(bk,bl){var bp=bk.length;
var bm=this.getColumnCount();
var bo=new Array(bp);
var bn;

for(var i=0;i<bp;++i){bn=[];

if(bl){bn.originalData=bk[i];
}
for(var j=0;j<bm;++j){bn[j]=bk[i][this.getColumnId(j)];
}bo[i]=bn;
}return bo;
}},destruct:function(){this.__nV=this.__nY=this.__nX=this.__oa=null;
}});
})();
(function(){var o="Function",n="Boolean",m="column-button",k="qx.event.type.Data",j="statusbar",h="qx.ui.table.pane.CellEvent",g="PageUp",f="changeLocale",e="changeSelection",d="qx.dynlocale",bB="Enter",bA="metaDataChanged",bz="dataChanged",by="__om",bx="on",bw="_applyStatusBarVisible",bv="columnVisibilityMenuCreateStart",bu="blur",bt="qx.ui.table.Table",bs="columnVisibilityMenuCreateEnd",v="Use 'resetSelection' instead.",w="verticalScrollBarChanged",t="_applyMetaColumnCounts",u="one of one row",r="focus",s="changeDataRowRenderer",p="changeHeaderCellHeight",q="Escape",E="A",F="changeSelectionModel",T="Left",P="Down",bc="Integer",W="_applyHeaderCellHeight",bo="visibilityChanged",bi="qx.ui.table.ITableModel",K="orderChanged",br="_applySelectionModel",bq="menu",bp="_applyAdditionalStatusBarText",I="_applyFocusCellOnMouseMove",M="table",O="_applyColumnVisibilityButtonVisible",R="changeTableModel",U="qx.event.type.Event",X="tableWidthChanged",be="End",bk="Object",y="_applyShowCellFocusIndicator",z="resize",L="__oc",bb="changeScrollY",ba="_applyTableModel",Y="menu-button",bg="_applyKeepFirstVisibleRowComplete",bf="widthChanged",V="Home",bd="_applyRowHeight",a="F2",bj="appear",A="Up",B="%1 rows",Q="qx.ui.table.selection.Model",b="one row",c="PageDown",H="%1 of %2 rows",C="__ol",D="keypress",G="changeRowHeight",S="Number",bm="changeVisible",bl="__ok",N="__od",bn="qx.ui.table.IRowRenderer",J="Right",bh="Space";
qx.Class.define(bt,{extend:qx.ui.core.Widget,construct:function(et,eu){arguments.callee.base.call(this);
if(!eu){eu={};
}
if(eu.selectionManager){this.setNewSelectionManager(eu.selectionManager);
}
if(eu.selectionModel){this.setNewSelectionModel(eu.selectionModel);
}
if(eu.tableColumnModel){this.setNewTableColumnModel(eu.tableColumnModel);
}
if(eu.tablePane){this.setNewTablePane(eu.tablePane);
}
if(eu.tablePaneHeader){this.setNewTablePaneHeader(eu.tablePaneHeader);
}
if(eu.tablePaneScroller){this.setNewTablePaneScroller(eu.tablePaneScroller);
}
if(eu.tablePaneModel){this.setNewTablePaneModel(eu.tablePaneModel);
}
if(eu.columnMenu){this.setNewColumnMenu(eu.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__oc=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__oc,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__od=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(et||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(D,this._onKeyPress);
this.addListener(r,this._onFocusChanged);
this.addListener(bu,this._onFocusChanged);
var ev=new qx.ui.core.Widget().set({height:0});
this._add(ev);
ev.addListener(z,this._onResize,this);
this.__oe=null;
this.__of=null;
if(qx.core.Variant.isSet(d,bx)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":k,"columnVisibilityMenuCreateEnd":k,"tableWidthChanged":U,"verticalScrollBarChanged":k,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"dataEdited":k},statics:{__og:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:M},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:Q,apply:br,event:F},tableModel:{check:bi,apply:ba,event:R},rowHeight:{check:S,init:20,apply:bd,event:G},forceLineHeight:{check:n,init:true},headerCellHeight:{check:bc,init:16,apply:W,event:p,nullable:true},statusBarVisible:{check:n,init:true,apply:bw},additionalStatusBarText:{nullable:true,init:null,apply:bp},columnVisibilityButtonVisible:{check:n,init:true,apply:O},metaColumnCounts:{check:bk,apply:t},focusCellOnMouseMove:{check:n,init:false,apply:I},rowFocusChangeModifiesSelection:{check:n,init:true},showCellFocusIndicator:{check:n,init:true,apply:y},keepFirstVisibleRowComplete:{check:n,init:true,apply:bg},alwaysUpdateCells:{check:n,init:false},dataRowRenderer:{check:bn,init:null,nullable:true,event:s},modalCellEditorPreOpenFunction:{check:o,init:null,nullable:true},newColumnMenu:{check:o,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:o,init:function(dg){return new qx.ui.table.selection.Manager(dg);
}},newSelectionModel:{check:o,init:function(eE){return new qx.ui.table.selection.Model(eE);
}},newTableColumnModel:{check:o,init:function(bW){return new qx.ui.table.columnmodel.Basic(bW);
}},newTablePane:{check:o,init:function(cU){return new qx.ui.table.pane.Pane(cU);
}},newTablePaneHeader:{check:o,init:function(cA){return new qx.ui.table.pane.Header(cA);
}},newTablePaneScroller:{check:o,init:function(dp){return new qx.ui.table.pane.Scroller(dp);
}},newTablePaneModel:{check:o,init:function(eD){return new qx.ui.table.pane.Model(eD);
}}},members:{__oe:null,__of:null,__oc:null,__od:null,__oh:null,__oi:null,__oj:null,__ok:null,__ol:null,__om:null,_createChildControlImpl:function(bC){var bD;

switch(bC){case j:bD=new qx.ui.basic.Label();
bD.set({allowGrowX:true});
this._add(bD);
break;
case m:bD=this.getNewColumnMenu()();
bD.set({focusable:false});
var bE=bD.factory(bq,{table:this});
bE.addListener(bj,this._initColumnMenu,this);
break;
}return bD||arguments.callee.base.call(this,bC);
},_applySelectionModel:function(eh,ei){this.__od.setSelectionModel(eh);

if(ei!=null){ei.removeListener(e,this._onSelectionChanged,this);
}eh.addListener(e,this._onSelectionChanged,this);
},_applyRowHeight:function(eb,ec){var ed=this._getPaneScrollerArr();

for(var i=0;i<ed.length;i++){ed[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(cF,cG){var cH=this._getPaneScrollerArr();

for(var i=0;i<cH.length;i++){cH[i].getHeader().setHeight(cF);
}},getEmptyTableModel:function(){if(!this.__om){this.__om=new qx.ui.table.model.Simple();
this.__om.setColumns([]);
this.__om.setData([]);
}return this.__om;
},_applyTableModel:function(eF,eG){this.getTableColumnModel().init(eF.getColumnCount(),this);

if(eG!=null){eG.removeListener(bA,this._onTableModelMetaDataChanged,this);
eG.removeListener(bz,this._onTableModelDataChanged,this);
}eF.addListener(bA,this._onTableModelMetaDataChanged,this);
eF.addListener(bz,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,eF.getRowCount(),0,eF.getColumnCount());
this._onTableModelMetaDataChanged();
},getTableColumnModel:function(){if(!this.__ol){var dD=this.__ol=this.getNewTableColumnModel()(this);
dD.addListener(bo,this._onColVisibilityChanged,this);
dD.addListener(bf,this._onColWidthChanged,this);
dD.addListener(K,this._onColOrderChanged,this);
var dC=this.getTableModel();
dD.init(dC.getColumnCount(),this);
var dA=this._getPaneScrollerArr();

for(var i=0;i<dA.length;i++){var dB=dA[i];
var dE=dB.getTablePaneModel();
dE.setTableColumnModel(dD);
}}return this.__ol;
},_applyStatusBarVisible:function(dq,dr){if(dq){this._showChildControl(j);
}else{this._excludeChildControl(j);
}
if(dq){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cB,cC){this.__oh=cB;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(dy,dz){if(dy){this._showChildControl(m);
}else{this._excludeChildControl(m);
}},_applyMetaColumnCounts:function(ch,ci){var cp=ch;
var cj=this._getPaneScrollerArr();
var cn={};

if(ch>ci){var cr=qx.event.Registration.getManager(cj[0]);

for(var cs in qx.ui.table.Table.__og){cn[cs]={};
cn[cs].capture=cr.getListeners(cj[0],cs,true);
cn[cs].bubble=cr.getListeners(cj[0],cs,false);
}}this._cleanUpMetaColumns(cp.length);
var co=0;

for(var i=0;i<cj.length;i++){var ct=cj[i];
var cq=ct.getTablePaneModel();
cq.setFirstColumnX(co);
cq.setMaxColumnCount(cp[i]);
co+=cp[i];
}if(cp.length>cj.length){var cm=this.getTableColumnModel();

for(var i=cj.length;i<cp.length;i++){var cq=this.getNewTablePaneModel()(cm);
cq.setFirstColumnX(co);
cq.setMaxColumnCount(cp[i]);
co+=cp[i];
var ct=this.getNewTablePaneScroller()(this);
ct.setTablePaneModel(cq);
ct.addListener(bb,this._onScrollY,this);
for(cs in qx.ui.table.Table.__og){if(!cn[cs]){break;
}
if(cn[cs].capture&&cn[cs].capture.length>0){var ck=cn[cs].capture;

for(var i=0;i<ck.length;i++){var cl=ck[i].context;

if(!cl){cl=this;
}else if(cl==cj[0]){cl=ct;
}ct.addListener(cs,ck[i].handler,cl,true);
}}
if(cn[cs].bubble&&cn[cs].bubble.length>0){var cv=cn[cs].bubble;

for(var i=0;i<cv.length;i++){var cl=cv[i].context;

if(!cl){cl=this;
}else if(cl==cj[0]){cl=ct;
}ct.addListener(cs,cv[i].handler,cl,false);
}}}var cu=(i==cp.length-1)?1:0;
this.__oc.add(ct,{flex:cu});
cj=this._getPaneScrollerArr();
}}for(var i=0;i<cj.length;i++){var ct=cj[i];
var cw=(i==(cj.length-1));
ct.getHeader().setHeight(this.getHeaderCellHeight());
ct.setTopRightWidget(cw?this.getChildControl(m):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(m);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(dV,dW){var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].setFocusCellOnMouseMove(dV);
}},_applyShowCellFocusIndicator:function(cN,cO){var cP=this._getPaneScrollerArr();

for(var i=0;i<cP.length;i++){cP[i].setShowCellFocusIndicator(cN);
}},_applyKeepFirstVisibleRowComplete:function(dF,dG){var dH=this._getPaneScrollerArr();

for(var i=0;i<dH.length;i++){dH[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__od;
},_getPaneScrollerArr:function(){return this.__oc.getChildren();
},getPaneScroller:function(bF){return this._getPaneScrollerArr()[bF];
},_cleanUpMetaColumns:function(bU){var bV=this._getPaneScrollerArr();

if(bV!=null){for(var i=bV.length-1;i>=bU;i--){bV[i].destroy();
}}},_onChangeLocale:function(ca){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(eB){var eC=this._getPaneScrollerArr();

for(var i=0;i<eC.length;i++){eC[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dw){var dx=this._getPaneScrollerArr();

for(var i=0;i<dx.length;i++){dx[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(bG){var bH=bG.getData();
this._updateTableData(bH.firstRow,bH.lastRow,bH.firstColumn,bH.lastColumn,bH.removeStart,bH.removeCount);
},_updateTableData:function(bM,bN,bO,bP,bQ,bR){var bS=this._getPaneScrollerArr();
if(bR){this.getSelectionModel().removeSelectionInterval(bQ,bQ+bR);
}
for(var i=0;i<bS.length;i++){bS[i].onTableModelDataChanged(bM,bN,bO,bP);
}var bT=this.getTableModel().getRowCount();

if(bT!=this.__oi){this.__oi=bT;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(bJ){if(!this.__oj){this.__oj=true;
var bK=this._getPaneScrollerArr();

for(var i=0;i<bK.length;i++){bK[i].setScrollY(bJ.getData());
}this.__oj=false;
}},_onKeyPress:function(eJ){if(!this.getEnabled()){return;
}var eQ=this.__of;
var eN=true;
var eR=eJ.getKeyIdentifier();

if(this.isEditing()){if(eJ.getModifiers()==0){switch(eR){case bB:this.stopEditing();
var eQ=this.__of;
this.moveFocusedCell(0,1);

if(this.__of!=eQ){eN=this.startEditing();
}break;
case q:this.cancelEditing();
this.focus();
break;
default:eN=false;
break;
}}return;
}else{if(eJ.isCtrlPressed()){eN=true;

switch(eR){case E:var eO=this.getTableModel().getRowCount();

if(eO>0){this.getSelectionModel().setSelectionInterval(0,eO-1);
}break;
default:eN=false;
break;
}}else{switch(eR){case bh:this.__od.handleSelectKeyDown(this.__of,eJ);
break;
case a:case bB:eN=this.startEditing();
break;
case V:this.setFocusedCell(this.__oe,0,true);
break;
case be:var eO=this.getTableModel().getRowCount();
this.setFocusedCell(this.__oe,eO-1,true);
break;
case T:this.moveFocusedCell(-1,0);
break;
case J:this.moveFocusedCell(1,0);
break;
case A:this.moveFocusedCell(0,-1);
break;
case P:this.moveFocusedCell(0,1);
break;
case g:case c:var eM=this.getPaneScroller(0);
var eP=eM.getTablePane();
var eO=eP.getVisibleRowCount()-1;
var eL=this.getRowHeight();
var eK=(eR==g)?-1:1;
eM.setScrollY(eM.getScrollY()+eK*eO*eL);
this.moveFocusedCell(0,eK*eO);
break;
default:eN=false;
}}}
if(eQ!=this.__of&&this.getRowFocusChangeModifiesSelection()){this.__od.handleMoveKeyDown(this.__of,eJ);
}
if(eN){eJ.preventDefault();
eJ.stopPropagation();
}},_onFocusChanged:function(cb){var cc=this._getPaneScrollerArr();

for(var i=0;i<cc.length;i++){cc[i].onFocusChanged();
}},_onColVisibilityChanged:function(cx){var cy=this._getPaneScrollerArr();

for(var i=0;i<cy.length;i++){cy[i].onColVisibilityChanged();
}var cz=cx.getData();

if(this.__ok!=null&&cz.col!=null&&cz.visible!=null){this.__ok[cz.col].setVisible(cz.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dS){var dT=this._getPaneScrollerArr();

for(var i=0;i<dT.length;i++){var dU=dS.getData();
dT[i].setColumnWidth(dU.col,dU.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(ej){var ek=this._getPaneScrollerArr();

for(var i=0;i<ek.length;i++){ek[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(dY){var ea=this._getMetaColumnAtPageX(dY);
return (ea!=-1)?this.getPaneScroller(ea):null;
},setFocusedCell:function(el,em,en){if(!this.isEditing()&&(el!=this.__oe||em!=this.__of)){if(el===null){el=0;
}this.__oe=el;
this.__of=em;
var eo=this._getPaneScrollerArr();

for(var i=0;i<eo.length;i++){eo[i].setFocusedCell(el,em);
}
if(el!==null&&en){this.scrollCellVisible(el,em);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,v);
this.resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__oe;
},getFocusedRow:function(){return this.__of;
},highlightFocusedRow:function(ee){this.getDataRowRenderer().setHighlightFocusRow(ee);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var bI=this._getPaneScrollerArr();

for(var i=0;i<bI.length;i++){bI[i].onFocusChanged();
}},moveFocusedCell:function(dh,di){var dm=this.__oe;
var dn=this.__of;

if(dm===null||dn===null){return;
}
if(dh!=0){var dl=this.getTableColumnModel();
var x=dl.getVisibleX(dm);
var dk=dl.getVisibleColumnCount();
x=qx.lang.Number.limit(x+dh,0,dk-1);
dm=dl.getVisibleColumnAtX(x);
}
if(di!=0){var dj=this.getTableModel();
dn=qx.lang.Number.limit(dn+di,0,dj.getRowCount()-1);
}this.setFocusedCell(dm,dn,true);
},scrollCellVisible:function(cQ,cR){var cS=this.getTableColumnModel();
var x=cS.getVisibleX(cQ);
var cT=this._getMetaColumnAtColumnX(x);

if(cT!=-1){this.getPaneScroller(cT).scrollCellVisible(cQ,cR);
}},isEditing:function(){if(this.__oe!=null){var x=this.getTableColumnModel().getVisibleX(this.__oe);
var bX=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(bX).isEditing();
}return false;
},startEditing:function(){if(this.__oe!=null){var x=this.getTableColumnModel().getVisibleX(this.__oe);
var eg=this._getMetaColumnAtColumnX(x);
var ef=this.getPaneScroller(eg).startEditing();
return ef;
}return false;
},stopEditing:function(){if(this.__oe!=null){var x=this.getTableColumnModel().getVisibleX(this.__oe);
var bL=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(bL).stopEditing();
}},cancelEditing:function(){if(this.__oe!=null){var x=this.getTableColumnModel().getVisibleX(this.__oe);
var eA=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eA).cancelEditing();
}},updateContent:function(){var cI=this._getPaneScrollerArr();

for(var i=0;i<cI.length;i++){cI[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(dP){var dQ=this._getPaneScrollerArr();

for(var i=0;i<dQ.length;i++){var dR=dQ[i].getContainerLocation();

if(dP>=dR.left&&dP<=dR.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(cJ){var cL=this.getMetaColumnCounts();
var cM=0;

for(var i=0;i<cL.length;i++){var cK=cL[i];
cM+=cK;

if(cK==-1||cJ<cM){return i;
}}return -1;
},_updateStatusBar:function(){var ds=this.getTableModel();

if(this.getStatusBarVisible()){var dt=this.getSelectionModel().getSelectedCount();
var dv=ds.getRowCount();
var du;

if(dv>=0){if(dt==0){du=this.trn(b,B,dv,dv);
}else{du=this.trn(u,H,dv,dt,dv);
}}
if(this.__oh){if(du){du+=this.__oh;
}else{du=this.__oh;
}}
if(du){this.getChildControl(j).setValue(du);
}}},_updateScrollerWidths:function(){var ep=this._getPaneScrollerArr();

for(var i=0;i<ep.length;i++){var er=(i==(ep.length-1));
var es=ep[i].getTablePaneModel().getTotalWidth();
ep[i].setPaneWidth(es);
var eq=er?1:0;
ep[i].setLayoutProperties({flex:eq});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var db=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var de=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var cX=this._getPaneScrollerArr();
var da=false;
var dd=false;

for(var i=0;i<cX.length;i++){var df=(i==(cX.length-1));
var cY=cX[i].getNeededScrollBars(da,!df);

if(cY&db){da=true;
}
if(df&&(cY&de)){dd=true;
}}for(var i=0;i<cX.length;i++){var df=(i==(cX.length-1));
var dc;
cX[i].setHorizontalScrollBarVisible(da);
if(df){dc=cX[i].getVerticalScrollBarVisible();
}cX[i].setVerticalScrollBarVisible(df&&dd);
if(df&&dd!=dc){this.fireDataEvent(w,dd);
}}},_initColumnMenu:function(){var dK=this.getTableModel();
var dL=this.getTableColumnModel();
var dM=this.getChildControl(m);
dM.empty();
var dJ=dM.getMenu();
var dN={table:this,menu:dJ,columnButton:dM};
this.fireDataEvent(bv,dN);
this.__ok={};

for(var dO=0,l=dK.getColumnCount();dO<l;dO++){var dI=dM.factory(Y,{text:dK.getColumnName(dO),column:dO,bVisible:dL.isColumnVisible(dO)});
qx.core.Assert.assertInterface(dI,qx.ui.table.IColumnMenuItem);
dI.addListener(bm,this._createColumnVisibilityCheckBoxHandler(dO),this);
this.__ok[dO]=dI;
}var dN={table:this,menu:dJ,columnButton:dM};
this.fireDataEvent(bs,dN);
},_createColumnVisibilityCheckBoxHandler:function(bY){return function(cD){var cE=this.getTableColumnModel();
cE.setColumnVisible(bY,cD.getData());
};
},setColumnWidth:function(eH,eI){this.getTableColumnModel().setColumnWidth(eH,eI);
},_onResize:function(){this.fireEvent(X);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(cd,ce,self,cf){if(arguments.callee.self.__og[cd]){for(var i=0,cg=this._getPaneScrollerArr();i<cg.length;i++){cg[i].addListener.apply(cg[i],arguments);
}}else{return arguments.callee.base.call(this,cd,ce,self,cf);
}},removeListener:function(ew,ex,self,ey){if(arguments.callee.self.__og[ew]){for(var i=0,ez=this._getPaneScrollerArr();i<ez.length;i++){ez[i].removeListener.apply(ez[i],arguments);
}}else{arguments.callee.base.call(this,ew,ex,self,ey);
}},destroy:function(){this.getChildControl(m).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(d,bx)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}var cW=this.getSelectionModel();

if(cW){cW.dispose();
}var cV=this.getDataRowRenderer();

if(cV){cV.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(N,L,by,by,C);
this._disposeMap(bl);
}});
})();
(function(){var c="qx.ui.table.IRowRenderer";
qx.Interface.define(c,{members:{updateDataRowElement:function(d,e){},getRowHeightStyle:function(f){},createRowStyle:function(b){},getRowClass:function(a){}}});
})();
(function(){var t="",s="table-row-background-even",r="table-row-background-selected",q="table-row",p="background-color:",o="table-row-background-focused",n=';border-bottom: 1px solid ',m=';color:',l="table-row-selected",k="table-row-background-odd",d="default",j="table-row-background-focused-selected",g="qx.ui.table.rowrenderer.Default",c="table-row-line",b="'",f="height:",e=";",h="px;",a="1px solid ",i="Boolean";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__on=t;
this.__on={};
this.__oo={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(d));
var x=qx.theme.manager.Color.getInstance();
this.__oo.bgcolFocusedSelected=x.resolve(j);
this.__oo.bgcolFocused=x.resolve(o);
this.__oo.bgcolSelected=x.resolve(r);
this.__oo.bgcolEven=x.resolve(s);
this.__oo.bgcolOdd=x.resolve(k);
this.__oo.colSelected=x.resolve(l);
this.__oo.colNormal=x.resolve(q);
this.__oo.horLine=x.resolve(c);
},properties:{highlightFocusRow:{check:i,init:true}},members:{__oo:null,__op:null,__on:null,_insetY:1,_renderFont:function(u){if(u){this.__op=u.getStyles();
this.__on=qx.bom.element.Style.compile(this.__op);
this.__on=this.__on.replace(/"/g,b);
}else{this.__on=t;
this.__op=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__op;
var A=z.style;
qx.bom.element.Style.setStyles(z,B);

if(y.focusedRow&&this.getHighlightFocusRow()){A.backgroundColor=y.selected?this.__oo.bgcolFocusedSelected:this.__oo.bgcolFocused;
}else{if(y.selected){A.backgroundColor=this.__oo.bgcolSelected;
}else{A.backgroundColor=(y.row%2==0)?this.__oo.bgcolEven:this.__oo.bgcolOdd;
}}A.color=y.selected?this.__oo.colSelected:this.__oo.colNormal;
A.borderBottom=a+this.__oo.horLine;
},getRowHeightStyle:function(C){if(qx.bom.client.Feature.CONTENT_BOX){C-=this._insetY;
}return f+C+h;
},createRowStyle:function(v){var w=[];
w.push(e);
w.push(this.__on);
w.push(p);

if(v.focusedRow&&this.getHighlightFocusRow()){w.push(v.selected?this.__oo.bgcolFocusedSelected:this.__oo.bgcolFocused);
}else{if(v.selected){w.push(this.__oo.bgcolSelected);
}else{w.push((v.row%2==0)?this.__oo.bgcolEven:this.__oo.bgcolOdd);
}}w.push(m);
w.push(v.selected?this.__oo.colSelected:this.__oo.colNormal);
w.push(n,this.__oo.horLine);
return w.join(t);
},getRowClass:function(D){return t;
}},destruct:function(){this.__oo=this.__op=this.__on=null;
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
},members:{__oq:null,factory:function(j,k){switch(j){case a:var m=new qx.ui.menu.Menu();
this.setMenu(m);
return m;
case f:var o=new qx.ui.table.columnmenu.MenuItem(k.text);
o.setVisible(k.bVisible);
this.getMenu().add(o);
return o;
case c:var n=new qx.ui.menu.Button(k.text);
n.set({appearance:e});
return n;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+j);
}},empty:function(){var g=this.getMenu();
var h=g.getChildren();

for(var i=0,l=h.length;i<l;i++){h[0].destroy();
}}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var l="checked",k="menu-checkbox",j="Boolean",i="_applyValue",h="changeValue",g="qx.ui.menu.CheckBox",f="execute";
qx.Class.define(g,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(a,b){arguments.callee.base.call(this);
if(a!=null){if(a.translate){this.setLabel(a.translate());
}else{this.setLabel(a);
}}
if(b!=null){this.setMenu(b);
}this.addListener(f,this._onExecute,this);
},properties:{appearance:{refine:true,init:k},value:{check:j,init:false,apply:i,event:h,nullable:true}},members:{_applyValue:function(c,d){c?this.addState(l):this.removeState(l);
},_onExecute:function(e){this.toggleValue();
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(i){arguments.callee.base.call(this,i);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__or:false,_applyVisible:function(g,h){if(!this.bInListener){this.setValue(g);
}}}});
})();
(function(){var r="qx.ui.table.selection.Model",q="qx.ui.table.selection.Manager";
qx.Class.define(q,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:r}},members:{__os:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__os=true;
}else{this.__os=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(s,t){if(t.isLeftPressed()&&!this.__os){this._handleSelectEvent(s,t);
}},handleClick:function(a,b){},handleSelectKeyDown:function(o,p){this._handleSelectEvent(o,p);
},handleMoveKeyDown:function(f,g){var i=this.getSelectionModel();

switch(g.getModifiers()){case 0:i.setSelectionInterval(f,f);
break;
case qx.event.type.Dom.SHIFT_MASK:var h=i.getAnchorSelectionIndex();

if(h==-1){i.setSelectionInterval(f,f);
}else{i.setSelectionInterval(h,f);
}break;
}},_handleSelectEvent:function(j,k){var n=this.getSelectionModel();
var l=n.getLeadSelectionIndex();
var m=n.getAnchorSelectionIndex();

if(k.isShiftPressed()){if(j!=l||n.isSelectionEmpty()){if(m==-1){m=j;
}
if(k.isCtrlOrCommandPressed()){n.addSelectionInterval(m,j);
}else{n.setSelectionInterval(m,j);
}}}else if(k.isCtrlOrCommandPressed()){if(n.isSelectedIndex(j)){n.removeSelectionInterval(j,j);
}else{n.addSelectionInterval(j,j);
}}else{n.setSelectionInterval(j,j);
}}}});
})();
(function(){var s="..",r="changeSelection",q="Use 'resetSelection' instead",p=" [",o="]",n="qx.event.type.Event",m="Ranges:",l="qx.ui.table.selection.Model",k="_applySelectionMode",h="Use '_resetSelection' instead.";
qx.Class.define(l,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ot=[];
this.__ou=-1;
this.__ov=-1;
this.hasBatchModeRefCount=0;
this.__ow=false;
},events:{"changeSelection":n},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:k}},members:{__ow:null,__ou:null,__ov:null,__ot:null,_applySelectionMode:function(Q){this.resetSelection();
},setBatchMode:function(g){if(g){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__ow){this.__ow=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__ou;
},_setAnchorSelectionIndex:function(c){this.__ou=c;
},getLeadSelectionIndex:function(){return this.__ov;
},_setLeadSelectionIndex:function(U){this.__ov=U;
},_getSelectedRangeArr:function(){return this.__ot;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.resetSelection();
},isSelectionEmpty:function(){return this.__ot.length==0;
},getSelectedCount:function(){var P=0;

for(var i=0;i<this.__ot.length;i++){var O=this.__ot[i];
P+=O.maxIndex-O.minIndex+1;
}return P;
},isSelectedIndex:function(R){for(var i=0;i<this.__ot.length;i++){var S=this.__ot[i];

if(R>=S.minIndex&&R<=S.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var T=[];

for(var i=0;i<this.__ot.length;i++){T.push({minIndex:this.__ot[i].minIndex,maxIndex:this.__ot[i].maxIndex});
}return T;
},iterateSelection:function(d,f){for(var i=0;i<this.__ot.length;i++){for(var j=this.__ot[i].minIndex;j<=this.__ot[i].maxIndex;j++){d.call(f,j);
}}},setSelectionInterval:function(E,F){var G=arguments.callee.self;

switch(this.getSelectionMode()){case G.NO_SELECTION:return;
case G.SINGLE_SELECTION:if(this.isSelectedIndex(F)){return;
}E=F;
break;
case G.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=E;i<=F;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(E,F);
this._fireChangeSelection();
},addSelectionInterval:function(B,C){var D=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case D.NO_SELECTION:return;
case D.MULTIPLE_INTERVAL_SELECTION:case D.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(B,C);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(B,C);
break;
}},removeSelectionInterval:function(t,u){this.__ou=t;
this.__ov=u;
var v=Math.min(t,u);
var x=Math.max(t,u);
for(var i=0;i<this.__ot.length;i++){var z=this.__ot[i];

if(z.minIndex>x){break;
}else if(z.maxIndex>=v){var A=(z.minIndex>=v)&&(z.minIndex<=x);
var y=(z.maxIndex>=v)&&(z.maxIndex<=x);

if(A&&y){this.__ot.splice(i,1);
i--;
}else if(A){z.minIndex=x+1;
}else if(y){z.maxIndex=v-1;
}else{var w={minIndex:x+1,maxIndex:z.maxIndex};
this.__ot.splice(i+1,0,w);
z.maxIndex=v-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__ot=[];
this.__ou=-1;
this.__ov=-1;
},_clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
this._resetSelection();
},_addSelectionInterval:function(H,I){this.__ou=H;
this.__ov=I;
var J=Math.min(H,I);
var L=Math.max(H,I);
var K=0;

for(;K<this.__ot.length;K++){var M=this.__ot[K];

if(M.minIndex>J){break;
}}this.__ot.splice(K,0,{minIndex:J,maxIndex:L});
var N=this.__ot[0];

for(var i=1;i<this.__ot.length;i++){var M=this.__ot[i];

if(N.maxIndex+1>=M.minIndex){N.maxIndex=Math.max(N.maxIndex,M.maxIndex);
this.__ot.splice(i,1);
i--;
}else{N=M;
}}},_dumpRanges:function(){var a=m;

for(var i=0;i<this.__ot.length;i++){var b=this.__ot[i];
a+=p+b.minIndex+s+b.maxIndex+o;
}this.debug(a);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__ow=true;
}else{this.fireEvent(r);
}}},destruct:function(){this.__ot=null;
}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(g){var h=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(g,h);
return h;
},updateHeaderCell:function(c,d){var e=qx.ui.table.headerrenderer.Default;
if(c.name&&c.name.translate){d.setLabel(c.name.translate());
}else{d.setLabel(c.name);
}var f=d.getToolTip();

if(this.getToolTip()!=null){if(f==null){f=new qx.ui.tooltip.ToolTip(this.getToolTip());
d.setToolTip(f);
qx.util.DisposeUtil.disposeTriggeredBy(f,d);
}else{f.setLabel(this.getToolTip());
}}c.sorted?d.addState(e.STATE_SORTED):d.removeState(e.STATE_SORTED);
c.sortedAscending?d.addState(e.STATE_SORTED_ASCENDING):d.removeState(e.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var o="",n="px;",m=".qooxdoo-table-cell {",l="qooxdoo-table-cell",k='" ',j="nowrap",i="default",h="qx.client",g="}",f="width:",L=".qooxdoo-table-cell-right { text-align:right } ",K="0px 6px",J='<div class="',I="0px",H="height:",G="1px solid ",F=".qooxdoo-table-cell-bold { font-weight:bold } ",E="table-row-line",D='>',C="mshtml",v='</div>',w="ellipsis",t="content-box",u='left:',r="qx.ui.table.cellrenderer.Abstract",s='" style="',p="abstract",q="none",x="hidden",y="} ",A='px;',z=".qooxdoo-table-cell-italic { font-style:italic} ",B="absolute";
qx.Class.define(r,{type:p,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var a=qx.ui.table.cellrenderer.Abstract;

if(!a.__ox){var c=qx.theme.manager.Color.getInstance();
a.__ox=arguments.callee.self;
var b=m+
qx.bom.element.Style.compile({position:B,top:I,overflow:x,whiteSpace:j,borderRight:G+c.resolve(E),padding:K,cursor:i,textOverflow:w,userSelect:q})+y+L+z+F;

if(!qx.core.Variant.isSet(h,C)){b+=m+qx.bom.element.BoxSizing.compile(t)+g;
}a.__ox.stylesheet=qx.bom.Stylesheet.createElement(b);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(N){return l;
},_getCellStyle:function(P){return P.style||o;
},_getCellAttributes:function(M){return o;
},_getContentHtml:function(O){return O.value||o;
},_getCellSizeStyle:function(Q,R,S,T){var U=o;

if(qx.bom.client.Feature.CONTENT_BOX){Q-=S;
R-=T;
}U+=f+Math.max(Q,0)+n;
U+=H+Math.max(R,0)+n;
return U;
},createDataCellHtml:function(d,e){e.push(J,this._getCellClass(d),s,u,d.styleLeft,A,this._getCellSizeStyle(d.styleWidth,d.styleHeight,this._insetX,this._insetY),this._getCellStyle(d),k,this._getCellAttributes(d),D+this._getContentHtml(d),v);
}}});
})();
(function(){var i="",h="number",g="Boolean",f="qx.ui.table.cellrenderer.Default",e=" qooxdoo-table-cell-bold",d=" qooxdoo-table-cell-right",c=" qooxdoo-table-cell-italic",b="string";
qx.Class.define(f,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:g,init:true}},members:{_getStyleFlags:function(a){if(this.getUseAutoAlign()){if(typeof a.value==h){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(j){var k=arguments.callee.base.call(this,j);

if(!k){return i;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=e;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=c;
}return k;
},_getContentHtml:function(p){return qx.bom.String.escape(this._formatValue(p));
},_formatValue:function(m){var o=m.value;

if(o==null){return i;
}
if(typeof o==b){return o;
}else if(typeof o==h){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var n=qx.ui.table.cellrenderer.Default._numberFormat.format(o);
}else if(o instanceof Date){n=qx.util.format.DateFormat.getDateInstance().format(o);
}else{n=o;
}return n;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var i="",h="Function",g="abstract",f="number",e="appear",d="qx.ui.table.celleditor.AbstractField";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:g,properties:{validationFunction:{check:h,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(j){var k=this._createEditor();
k.originalValue=j.value;

if(j.value===null||j.value===undefined){j.value=i;
}k.setValue(i+j.value);
k.addListener(e,function(){k.selectAllText();
});
return k;
},getCellEditorValue:function(a){var c=a.getValue();
var b=this.getValidationFunction();

if(b){c=b(c,a.originalValue);
}
if(typeof a.originalValue==f){c=parseFloat(c);
}return c;
}}});
})();
(function(){var b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{_createEditor:function(){var c=new qx.ui.form.TextField();
c.setAppearance(a);
return c;
}}});
})();
(function(){var u="qx.event.type.Data",t="visibilityChanged",s="orderChanged",r="visibilityChangedPre",q="widthChanged",p="qx.ui.table.columnmodel.Basic",o="__oE",n="__oD",m="__oF";
qx.Class.define(p,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__oy=[];
this.__oz=[];
},events:{"widthChanged":u,"visibilityChangedPre":u,"visibilityChanged":u,"orderChanged":u},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__oA:null,__oB:null,__oz:null,__oy:null,__oC:null,__oD:null,__oE:null,__oF:null,init:function(bd){{};
this.__oC=[];
var bg=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var bh=this.__oD||(this.__oD=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var bf=this.__oE||(this.__oE=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var be=this.__oF||(this.__oF=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__oy=[];
this.__oz=[];

for(var bj=0;bj<bd;bj++){this.__oC[bj]={width:bg,headerRenderer:bh,dataRenderer:bf,editorFactory:be};
this.__oy[bj]=bj;
this.__oz[bj]=bj;
}this.__oB=null;

for(var bj=0;bj<bd;bj++){var bi={col:bj,visible:true};
this.fireDataEvent(r,bi);
this.fireDataEvent(t,bi);
}},getVisibleColumns:function(){return this.__oz!=null?this.__oz:[];
},setColumnWidth:function(h,j){{};
var l=this.__oC[h].width;

if(l!=j){this.__oC[h].width=j;
var k={col:h,newWidth:j,oldWidth:l};
this.fireDataEvent(q,k);
}},getColumnWidth:function(P){{};
return this.__oC[P].width;
},setHeaderCellRenderer:function(A,B){{};
var C=this.__oC[A].headerRenderer;

if(C!==this.__oD){C.dispose();
}this.__oC[A].headerRenderer=B;
},getHeaderCellRenderer:function(D){{};
return this.__oC[D].headerRenderer;
},setDataCellRenderer:function(ba,bb){{};
var bc=this.__oC[ba].headerRenderer;

if(bc!==this.__oE){bc.dispose();
}this.__oC[ba].dataRenderer=bb;
},getDataCellRenderer:function(O){{};
return this.__oC[O].dataRenderer;
},setCellEditorFactory:function(U,V){{};
var W=this.__oC[U].headerRenderer;

if(W!==this.__oF){W.dispose();
}this.__oC[U].editorFactory=V;
},getCellEditorFactory:function(g){{};
return this.__oC[g].editorFactory;
},_getColToXPosMap:function(){if(this.__oB==null){this.__oB={};

for(var z=0;z<this.__oy.length;z++){var y=this.__oy[z];
this.__oB[y]={overX:z};
}
for(var w=0;w<this.__oz.length;w++){var y=this.__oz[w];
this.__oB[y].visX=w;
}}return this.__oB;
},getVisibleColumnCount:function(){return this.__oz!=null?this.__oz.length:0;
},getVisibleColumnAtX:function(v){{};
return this.__oz[v];
},getVisibleX:function(Y){{};
return this._getColToXPosMap()[Y].visX;
},getOverallColumnCount:function(){return this.__oy.length;
},getOverallColumnAtX:function(f){{};
return this.__oy[f];
},getOverallX:function(X){{};
return this._getColToXPosMap()[X].overX;
},isColumnVisible:function(N){{};
return (this._getColToXPosMap()[N].visX!=null);
},setColumnVisible:function(E,F){{};

if(F!=this.isColumnVisible(E)){if(F){var L=this._getColToXPosMap();
var I=L[E].overX;

if(I==null){throw new Error("Showing column failed: "+E+". The column is not added to this TablePaneModel.");
}var J;

for(var x=I+1;x<this.__oy.length;x++){var K=this.__oy[x];
var G=L[K].visX;

if(G!=null){J=G;
break;
}}if(J==null){J=this.__oz.length;
}this.__oz.splice(J,0,E);
}else{var H=this.getVisibleX(E);
this.__oz.splice(H,1);
}this.__oB=null;
if(!this.__oA){var M={col:E,visible:F};
this.fireDataEvent(r,M);
this.fireDataEvent(t,M);
}}},moveColumn:function(a,b){{};
this.__oA=true;
var e=this.__oy[a];
var c=this.isColumnVisible(e);

if(c){this.setColumnVisible(e,false);
}this.__oy.splice(a,1);
this.__oy.splice(b,0,e);
this.__oB=null;

if(c){this.setColumnVisible(e,true);
}this.__oA=false;
var d={col:e,fromOverXPos:a,toOverXPos:b};
this.fireDataEvent(s,d);
},setColumnsOrder:function(Q){{};

if(Q.length==this.__oy.length){this.__oA=true;
var T=new Array(Q.length);

for(var R=0;R<this.__oy.length;R++){var S=this.isColumnVisible(R);
T[R]=S;

if(S){this.setColumnVisible(R,false);
}}this.__oy=qx.lang.Array.clone(Q);
this.__oB=null;
for(var R=0;R<this.__oy.length;R++){if(T[R]){this.setColumnVisible(R,true);
}}this.__oA=false;
this.fireEvent(s);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__oy.length+", got "+Q.length);
}}},destruct:function(){for(var i=0;i<this.__oC.length;i++){this.__oC[i].headerRenderer.dispose();
this.__oC[i].dataRenderer.dispose();
this.__oC[i].editorFactory.dispose();
}this.__oy=this.__oz=this.__oC=this.__oB=null;
this._disposeObjects(n,o,m);
}});
})();
(function(){var p="icon",o="label",n="String",m="sort-icon",l="_applySortIcon",k="_applyIcon",j="table-header-cell",i="qx.ui.table.headerrenderer.HeaderCell",h="_applyLabel";
qx.Class.define(i,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var a=new qx.ui.layout.Grid();
a.setRowFlex(0,1);
a.setColumnFlex(1,1);
a.setColumnFlex(2,1);
this.setLayout(a);
},properties:{appearance:{refine:true,init:j},label:{check:n,init:null,nullable:true,apply:h},sortIcon:{check:n,init:null,nullable:true,apply:l,themeable:true},icon:{check:n,init:null,nullable:true,apply:k}},members:{_applyLabel:function(f,g){if(f){this._showChildControl(o).setValue(f);
}else{this._excludeChildControl(o);
}},_applySortIcon:function(d,e){if(d){this._showChildControl(m).setSource(d);
}else{this._excludeChildControl(m);
}},_applyIcon:function(q,r){if(q){this._showChildControl(p).setSource(q);
}else{this._excludeChildControl(p);
}},_createChildControlImpl:function(b){var c;

switch(b){case o:c=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(c,{row:0,column:1});
break;
case m:c=new qx.ui.basic.Image(this.getSortIcon());
c.setAnonymous(true);
this._add(c,{row:0,column:2});
break;
case p:c=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(c,{row:0,column:0});
break;
}return c||arguments.callee.base.call(this,b);
}}});
})();
(function(){var l="\n",k="",j=" &nbsp;",i="<br>",h=" ",g="qx.bom.String";
qx.Class.define(g,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(p){return qx.util.StringEscape.escape(p,qx.bom.String.FROM_CHARCODE);
},unescape:function(n){return qx.util.StringEscape.unescape(n,qx.bom.String.TO_CHARCODE);
},fromText:function(a){return qx.bom.String.escape(a).replace(/(  |\n)/g,function(b){var c={"  ":j,"\n":i};
return c[b]||b;
});
},toText:function(o){return qx.bom.String.unescape(o.replace(/\s+|<([^>])+>/gi,function(m){if(/\s+/.test(m)){return h;
}else if(/^<BR|^<br/gi.test(m)){return l;
}else{return k;
}}));
}},defer:function(d,e,f){d.FROM_CHARCODE=qx.lang.Object.invert(d.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Bootstrap.define(a,{statics:{escape:function(h,j){var m,o=d;

for(var i=0,l=h.length;i<l;i++){var n=h.charAt(i);
var k=n.charCodeAt(0);

if(j[k]){m=f+j[k]+g;
}else{if(k>0x7F){m=b+k+g;
}else{m=n;
}}o+=m;
}return o;
},unescape:function(s,t){return s.replace(/&[#\w]+;/gi,function(p){var q=p;
var p=p.substring(1,p.length-1);
var r=t[p];

if(r){q=String.fromCharCode(r);
}else{if(p.charAt(0)==c){if(p.charAt(1).toUpperCase()==e){r=p.substring(2);
if(r.match(/^[0-9A-Fa-f]+$/gi)){q=String.fromCharCode(parseInt(r,16));
}}else{r=p.substring(1);
if(r.match(/^\d+$/gi)){q=String.fromCharCode(parseInt(r,10));
}}}}return q;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var O="",N="Number",M="-",L="0",K="String",J="changeNumberFormat",I='(',H="g",G="Boolean",F="$",y="NaN",E='([0-9]{1,3}(?:',B='{0,1}[0-9]{3}){0,})',x='\\d+){0,1}',w="qx.util.format.NumberFormat",A="Infinity",z="^",C=".",v="-Infinity",D='([-+]){0,1}';
qx.Class.define(w,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(P){arguments.callee.base.call(this);
this.__oG=P;
},statics:{getIntegerInstance:function(){var Q=qx.util.format.NumberFormat;

if(Q._integerInstance==null){Q._integerInstance=new Q();
Q._integerInstance.setMaximumFractionDigits(0);
}return Q._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:N,init:0},maximumIntegerDigits:{check:N,nullable:true},minimumFractionDigits:{check:N,init:0},maximumFractionDigits:{check:N,nullable:true},groupingUsed:{check:G,init:true},prefix:{check:K,init:O,event:J},postfix:{check:K,init:O,event:J}},members:{__oG:null,format:function(a){switch(a){case Infinity:return A;
case -Infinity:return v;
case NaN:return y;
}var e=(a<0);

if(e){a=-a;
}
if(this.getMaximumFractionDigits()!=null){var l=Math.pow(10,this.getMaximumFractionDigits());
a=Math.round(a*l)/l;
}var k=String(Math.floor(a)).length;
var b=O+a;
var h=b.substring(0,k);

while(h.length<this.getMinimumIntegerDigits()){h=L+h;
}
if(this.getMaximumIntegerDigits()!=null&&h.length>this.getMaximumIntegerDigits()){h=h.substring(h.length-this.getMaximumIntegerDigits());
}var g=b.substring(k+1);

while(g.length<this.getMinimumFractionDigits()){g+=L;
}
if(this.getMaximumFractionDigits()!=null&&g.length>this.getMaximumFractionDigits()){g=g.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var d=h;
h=O;
var j;

for(j=d.length;j>3;j-=3){h=O+qx.locale.Number.getGroupSeparator(this.__oG)+d.substring(j-3,j)+h;
}h=d.substring(0,j)+h;
}var f=this.getPrefix()?this.getPrefix():O;
var c=this.getPostfix()?this.getPostfix():O;
var i=f+(e?M:O)+h;

if(g.length>0){i+=O+qx.locale.Number.getDecimalSeparator(this.__oG)+g;
}i+=c;
return i;
},parse:function(m){var r=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__oG)+O);
var p=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__oG)+O);
var n=new RegExp(z+qx.lang.String.escapeRegexpChars(this.getPrefix())+D+E+r+B+I+p+x+qx.lang.String.escapeRegexpChars(this.getPostfix())+F);
var q=n.exec(m);

if(q==null){throw new Error("Number string '"+m+"' does not match the number format");
}var s=(q[1]==M);
var u=q[2];
var t=q[3];
u=u.replace(new RegExp(r,H),O);
var o=(s?M:O)+u;

if(t!=null&&t.length!=0){t=t.replace(new RegExp(p),O);
o+=C+t;
}return parseFloat(o);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var cH="(\\d\\d?)",cG="format",cF="",cE="abbreviated",cD="wide",cC="(",cB=")",cA="|",cz="stand-alone",cy="wildcard",cn="default",cm="literal",cl="'",ck="hour",cj="(\\d\\d?\\d?)",ci="ms",ch="narrow",cg="-",cf="quoted_literal",ce='a',cO="HH:mm:ss",cP="+",cM="HHmmss",cN="long",cK='z',cL="0",cI="sec",cJ="day",cQ='Z',cR=" ",cr="min",cq="mm",ct="(\\d+)",cs="h",cv="KK",cu='L',cx="Z",cw="(\\d\\d+)",cp="EEEE",co="^",bf=":",bg='y',bh="K",bi="a",bj="([\\+\\-]\\d\\d:?\\d\\d)",bk="GMT",bl="dd",bm="qx.util.format.DateFormat",bn="yyy",bo="H",cV="YYYY",cU="y",cT="HH",cS="EE",da='h',cY="S",cX='s',cW='A',dc="yyyyyy",db="kk",bN="ss",bO='H',bL='S',bM="MMMM",bR='c',bS="d",bP="([a-zA-Z]+)",bQ='k',bJ="m",bK='Y',bw='D',bv="yyyyy",by='K',bx="hh",bs="SSS",br="MM",bu="yy",bt="(\\d\\d\\d\\d\\d\\d+)",bq="yyyy-MM-dd HH:mm:ss",bp="(\\d\\d\\d\\d\\d+)",bX="short",bY='d',ca="unkown",cb='m',bT="(\\d\\d\\d\\d)",bU="(\\d\\d\\d+)",bV="k",bW='M',cc="(\\d\\d\\d\\d+)",cd="SS",bG="MMM",bF="s",bE="M",bD='w',bC="EEE",bB="$",bA="?",bz='E',bI="z",bH="yyyy";
qx.Class.define(bm,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(e,f){arguments.callee.base.call(this);

if(!f){this.__oH=qx.locale.Manager.getInstance().getLocale();
}else{this.__oH=f;
}
if(e!=null){this.__oI=e.toString();
}else{this.__oI=qx.locale.Date.getDateFormat(cN,this.__oH)+cR+qx.locale.Date.getDateTimeFormat(cM,cO,this.__oH);
}},statics:{getDateTimeInstance:function(){var de=qx.util.format.DateFormat;
var dd=qx.locale.Date.getDateFormat(cN)+cR+qx.locale.Date.getDateTimeFormat(cM,cO);

if(de._dateInstance==null||de._dateInstance.__oI!=dd){de._dateTimeInstance=new de();
}return de._dateTimeInstance;
},getDateInstance:function(){var b=qx.util.format.DateFormat;
var a=qx.locale.Date.getDateFormat(bX)+cF;

if(b._dateInstance==null||b._dateInstance.__oI!=a){b._dateInstance=new b(a);
}return b._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:bq,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__oH:null,__oI:null,__oJ:null,__oK:null,__oL:null,__oM:function(m,n){var o=cF+m;

while(o.length<n){o=cL+o;
}return o;
},__oN:function(W){var X=new Date(W.getTime());
var Y=X.getDate();

while(X.getMonth()!=0){X.setDate(-1);
Y+=X.getDate()+1;
}return Y;
},__oO:function(be){return new Date(be.getTime()+(3-((be.getDay()+6)%7))*86400000);
},__oP:function(h){var k=this.__oO(h);
var l=k.getFullYear();
var j=this.__oO(new Date(l,0,4));
return Math.floor(1.5+(k.getTime()-j.getTime())/86400000/7);
},format:function(dh){if(dh==null){return null;
}var dn=qx.util.format.DateFormat;
var dp=this.__oH;
var dz=dh.getFullYear();
var dt=dh.getMonth();
var dB=dh.getDate();
var di=dh.getDay();
var du=dh.getHours();
var dq=dh.getMinutes();
var dv=dh.getSeconds();
var dx=dh.getMilliseconds();
var dA=dh.getTimezoneOffset();
var dl=dA>0?1:-1;
var dj=Math.floor(Math.abs(dA)/60);
var dr=Math.abs(dA)%60;
this.__oQ();
var dy=cF;

for(var i=0;i<this.__oL.length;i++){var dw=this.__oL[i];

if(dw.type==cm){dy+=dw.text;
}else{var dm=dw.character;
var ds=dw.size;
var dk=bA;

switch(dm){case bg:case bK:if(ds==2){dk=this.__oM(dz%100,2);
}else{dk=dz+cF;

if(ds>dk.length){for(var i=dk.length;i<ds;i++){dk=cL+dk;
}}}break;
case bw:dk=this.__oM(this.__oN(dh),ds);
break;
case bY:dk=this.__oM(dB,ds);
break;
case bD:dk=this.__oM(this.__oP(dh),ds);
break;
case bz:if(ds==2){dk=qx.locale.Date.getDayName(ch,di,dp,cG);
}else if(ds==3){dk=qx.locale.Date.getDayName(cE,di,dp,cG);
}else if(ds==4){dk=qx.locale.Date.getDayName(cD,di,dp,cG);
}break;
case bR:if(ds==2){dk=qx.locale.Date.getDayName(ch,di,dp,cz);
}else if(ds==3){dk=qx.locale.Date.getDayName(cE,di,dp,cz);
}else if(ds==4){dk=qx.locale.Date.getDayName(cD,di,dp,cz);
}break;
case bW:if(ds==1||ds==2){dk=this.__oM(dt+1,ds);
}else if(ds==3){dk=qx.locale.Date.getMonthName(cE,dt,dp,cG);
}else if(ds==4){dk=qx.locale.Date.getMonthName(cD,dt,dp,cG);
}break;
case cu:if(ds==1||ds==2){dk=this.__oM(dt+1,ds);
}else if(ds==3){dk=qx.locale.Date.getMonthName(cE,dt,dp,cz);
}else if(ds==4){dk=qx.locale.Date.getMonthName(cD,dt,dp,cz);
}break;
case ce:dk=(du<12)?qx.locale.Date.getAmMarker(dp):qx.locale.Date.getPmMarker(dp);
break;
case bO:dk=this.__oM(du,ds);
break;
case bQ:dk=this.__oM((du==0)?24:du,ds);
break;
case by:dk=this.__oM(du%12,ds);
break;
case da:dk=this.__oM(((du%12)==0)?12:(du%12),ds);
break;
case cb:dk=this.__oM(dq,ds);
break;
case cX:dk=this.__oM(dv,ds);
break;
case bL:dk=this.__oM(dx,ds);
break;
case cK:if(ds==1){dk=bk+((dl>0)?cg:cP)+this.__oM(Math.abs(dj))+bf+this.__oM(dr,2);
}else if(ds==2){dk=dn.MEDIUM_TIMEZONE_NAMES[dj];
}else if(ds==3){dk=dn.FULL_TIMEZONE_NAMES[dj];
}break;
case cQ:dk=((dl>0)?cg:cP)+this.__oM(Math.abs(dj),2)+this.__oM(dr,2);
break;
}dy+=dk;
}}return dy;
},parse:function(dN){this.__oR();
var dT=this.__oJ.regex.exec(dN);

if(dT==null){throw new Error("Date string '"+dN+"' does not match the date format: "+this.__oI);
}var dO={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var dP=1;

for(var i=0;i<this.__oJ.usedRules.length;i++){var dR=this.__oJ.usedRules[i];
var dQ=dT[dP];

if(dR.field!=null){dO[dR.field]=parseInt(dQ,10);
}else{dR.manipulator(dO,dQ);
}dP+=(dR.groups==null)?1:dR.groups;
}var dS=new Date(dO.year,dO.month,dO.day,(dO.ispm)?(dO.hour+12):dO.hour,dO.min,dO.sec,dO.ms);

if(dO.month!=dS.getMonth()||dO.year!=dS.getFullYear()){throw new Error("Error parsing date '"+dN+"': the value for day or month is too large");
}return dS;
},__oQ:function(){if(this.__oL!=null){return;
}this.__oL=[];
var dK;
var dI=0;
var dM=cF;
var dG=this.__oI;
var dJ=cn;
var i=0;

while(i<dG.length){var dL=dG.charAt(i);

switch(dJ){case cf:if(dL==cl){if(i+1>=dG.length){i++;
break;
}var dH=dG.charAt(i+1);

if(dH==cl){dM+=dL;
i++;
}else{i++;
dJ=ca;
}}else{dM+=dL;
i++;
}break;
case cy:if(dL==dK){dI++;
i++;
}else{this.__oL.push({type:cy,character:dK,size:dI});
dK=null;
dI=0;
dJ=cn;
}break;
default:if((dL>=ce&&dL<=cK)||(dL>=cW&&dL<=cQ)){dK=dL;
dJ=cy;
}else if(dL==cl){if(i+1>=dG.length){dM+=dL;
i++;
break;
}var dH=dG.charAt(i+1);

if(dH==cl){dM+=dL;
i++;
}i++;
dJ=cf;
}else{dJ=cn;
}
if(dJ!=cn){if(dM.length>0){this.__oL.push({type:cm,text:dM});
dM=cF;
}}else{dM+=dL;
i++;
}break;
}}if(dK!=null){this.__oL.push({type:cy,character:dK,size:dI});
}else if(dM.length>0){this.__oL.push({type:cm,text:dM});
}},__oR:function(){if(this.__oJ!=null){return ;
}var N=this.__oI;
this.__oS();
this.__oQ();
var T=[];
var P=co;

for(var L=0;L<this.__oL.length;L++){var U=this.__oL[L];

if(U.type==cm){P+=qx.lang.String.escapeRegexpChars(U.text);
}else{var M=U.character;
var Q=U.size;
var O;

for(var V=0;V<this.__oK.length;V++){var R=this.__oK[V];

if(M==R.pattern.charAt(0)&&Q==R.pattern.length){O=R;
break;
}}if(O==null){var S=cF;

for(var i=0;i<Q;i++){S+=M;
}throw new Error("Malformed date format: "+N+". Wildcard "+S+" is not supported");
}else{T.push(O);
P+=O.regex;
}}}P+=bB;
var K;

try{K=new RegExp(P);
}catch(g){throw new Error("Malformed date format: "+N);
}this.__oJ={regex:K,"usedRules":T,pattern:P};
},__oS:function(){var w=qx.util.format.DateFormat;
var C=qx.lang.String;

if(this.__oK!=null){return ;
}var x=this.__oK=[];
var J=function(dU,dV){dV=parseInt(dV,10);

if(dV<w.ASSUME_YEAR_2000_THRESHOLD){dV+=2000;
}else if(dV<100){dV+=1900;
}dU.year=dV;
};
var D=function(dE,dF){dE.month=parseInt(dF,10)-1;
};
var A=function(bc,bd){bc.ispm=(bd==w.PM_MARKER);
};
var z=function(ba,bb){ba.hour=parseInt(bb,10)%24;
};
var y=function(dW,dX){dW.hour=parseInt(dX,10)%12;
};
var G=function(eb,ec){return;
};
var E=qx.locale.Date.getMonthNames(cE,this.__oH,cG);

for(var i=0;i<E.length;i++){E[i]=C.escapeRegexpChars(E[i].toString());
}var F=function(df,dg){dg=C.escapeRegexpChars(dg);
df.month=E.indexOf(dg);
};
var t=qx.locale.Date.getMonthNames(cD,this.__oH,cG);

for(var i=0;i<t.length;i++){t[i]=C.escapeRegexpChars(t[i].toString());
}var s=function(p,q){q=C.escapeRegexpChars(q);
p.month=t.indexOf(q);
};
var v=qx.locale.Date.getDayNames(ch,this.__oH,cG);

for(var i=0;i<v.length;i++){v[i]=C.escapeRegexpChars(v[i].toString());
}var r=function(c,d){d=C.escapeRegexpChars(d);
c.month=v.indexOf(d);
};
var H=qx.locale.Date.getDayNames(cE,this.__oH,cG);

for(var i=0;i<H.length;i++){H[i]=C.escapeRegexpChars(H[i].toString());
}var B=function(dC,dD){dD=C.escapeRegexpChars(dD);
dC.month=H.indexOf(dD);
};
var I=qx.locale.Date.getDayNames(cD,this.__oH,cG);

for(var i=0;i<I.length;i++){I[i]=C.escapeRegexpChars(I[i].toString());
}var u=function(dY,ea){ea=C.escapeRegexpChars(ea);
dY.month=I.indexOf(ea);
};
x.push({pattern:cV,regex:bT,manipulator:J});
x.push({pattern:cU,regex:ct,manipulator:J});
x.push({pattern:bu,regex:cw,manipulator:J});
x.push({pattern:bn,regex:bU,manipulator:J});
x.push({pattern:bH,regex:cc,manipulator:J});
x.push({pattern:bv,regex:bp,manipulator:J});
x.push({pattern:dc,regex:bt,manipulator:J});
x.push({pattern:bE,regex:cH,manipulator:D});
x.push({pattern:br,regex:cH,manipulator:D});
x.push({pattern:bG,regex:cC+E.join(cA)+cB,manipulator:F});
x.push({pattern:bM,regex:cC+t.join(cA)+cB,manipulator:s});
x.push({pattern:bl,regex:cH,field:cJ});
x.push({pattern:bS,regex:cH,field:cJ});
x.push({pattern:cS,regex:cC+v.join(cA)+cB,manipulator:r});
x.push({pattern:bC,regex:cC+H.join(cA)+cB,manipulator:B});
x.push({pattern:cp,regex:cC+I.join(cA)+cB,manipulator:u});
x.push({pattern:bi,regex:cC+w.AM_MARKER+cA+w.PM_MARKER+cB,manipulator:A});
x.push({pattern:cT,regex:cH,field:ck});
x.push({pattern:bo,regex:cH,field:ck});
x.push({pattern:db,regex:cH,manipulator:z});
x.push({pattern:bV,regex:cH,manipulator:z});
x.push({pattern:cv,regex:cH,field:ck});
x.push({pattern:bh,regex:cH,field:ck});
x.push({pattern:bx,regex:cH,manipulator:y});
x.push({pattern:cs,regex:cH,manipulator:y});
x.push({pattern:cq,regex:cH,field:cr});
x.push({pattern:bJ,regex:cH,field:cr});
x.push({pattern:bN,regex:cH,field:cI});
x.push({pattern:bF,regex:cH,field:cI});
x.push({pattern:bs,regex:cj,field:ci});
x.push({pattern:cd,regex:cj,field:ci});
x.push({pattern:cY,regex:cj,field:ci});
x.push({pattern:cx,regex:bj,manipulator:G});
x.push({pattern:bI,regex:bP,manipulator:G});
}},destruct:function(){this.__oL=this.__oJ=this.__oK=null;
}});
})();
(function(){var N="_",M="format",L="thu",K="sat",J="cldr_day_",I="cldr_month_",H="wed",G="fri",F="tue",E="mon",bf="sun",be="short",bd="HH:mm",bc="HHmmsszz",bb="HHmm",ba="HHmmss",Y="cldr_date_format_",X="HH:mm:ss zz",W="full",V="cldr_pm",T="long",U="medium",R="cldr_am",S="qx.locale.Date",P="cldr_date_time_format_",Q="cldr_time_format_",O="HH:mm:ss";
qx.Class.define(S,{statics:{__oT:qx.locale.Manager.getInstance(),getAmMarker:function(bl){return this.__oT.localize(R,[],bl);
},getPmMarker:function(a){return this.__oT.localize(V,[],a);
},getDayNames:function(length,b,c){var c=c?c:M;
{};
var e=[bf,E,F,H,L,G,K];
var f=[];

for(var i=0;i<e.length;i++){var d=J+c+N+length+N+e[i];
f.push(this.__oT.localize(d,[],b));
}return f;
},getDayName:function(length,bp,bq,br){var br=br?br:M;
{};
var bt=[bf,E,F,H,L,G,K];
var bs=J+br+N+length+N+bt[bp];
return this.__oT.localize(bs,[],bq);
},getMonthNames:function(length,o,p){var p=p?p:M;
{};
var r=[];

for(var i=0;i<12;i++){var q=I+p+N+length+N+(i+1);
r.push(this.__oT.localize(q,[],o));
}return r;
},getMonthName:function(length,A,B,C){var C=C?C:M;
{};
var D=I+C+N+length+N+(A+1);
return this.__oT.localize(D,[],B);
},getDateFormat:function(x,y){{};
var z=Y+x;
return this.__oT.localize(z,[],y);
},getDateTimeFormat:function(bg,bh,bi){var bk=P+bg;
var bj=this.__oT.localize(bk,[],bi);

if(bj==bk){bj=bh;
}return bj;
},getTimeFormat:function(k,l){{};
var n=Q+k;
var m=this.__oT.localize(n,[],l);

if(m!=n){return m;
}
switch(k){case be:case U:return qx.locale.Date.getDateTimeFormat(bb,bd);
case T:return qx.locale.Date.getDateTimeFormat(ba,O);
case W:return qx.locale.Date.getDateTimeFormat(bc,X);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bm){var bn={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bo=qx.locale.Date._getTerritory(bm);
return bn[bo]!=null?bn[bo]:1;
},getWeekendStart:function(s){var u={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var t=qx.locale.Date._getTerritory(s);
return u[t]!=null?u[t]:6;
},getWeekendEnd:function(g){var h={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var j=qx.locale.Date._getTerritory(g);
return h[j]!=null?h[j]:0;
},isWeekend:function(bu,bv){var bx=qx.locale.Date.getWeekendStart(bv);
var bw=qx.locale.Date.getWeekendEnd(bv);

if(bw>bx){return ((bu>=bx)&&(bu<=bw));
}else{return ((bu>=bx)||(bu<=bw));
}},_getTerritory:function(v){if(v){var w=v.split(N)[1]||v;
}else{w=this.__oT.getTerritory()||this.__oT.getLanguage();
}return w.toUpperCase();
}}});
})();
(function(){var k="showingPlaceholder",j="color",i="",h="none",g="qx.client",f="changeValue",d="Boolean",c="qx.event.type.Data",b="readonly",a="input",W="focusin",V="visibility",U="focusout",T="hidden",S="absolute",R="readOnly",Q="text",P="_applyTextAlign",O="px",N="RegExp",r=")",s="syncAppearance",p="gecko",q="A",n="change",o="textAlign",l="focused",m="center",t="visible",u="disabled",B="url(",z="String",F="resize",D="qx.ui.form.AbstractField",J="transparent",H="off",w="spellcheck",M="false",L="right",K="PositiveInteger",v="mshtml",x="abstract",y="block",A="webkit",C="_applyReadOnly",E="_applyPlaceholder",G="left",I="qx/static/blank.gif";
qx.Class.define(D,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:x,construct:function(bd){arguments.callee.base.call(this);

if(bd!=null){this.setValue(bd);
}this.getContentElement().addListener(n,this._onChangeContent,this);
this.addListener(s,this._syncPlaceholder,this);
},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[G,m,L],nullable:true,themeable:true,apply:P},readOnly:{check:d,apply:C,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:K,init:Infinity},liveUpdate:{check:d,init:false},placeholder:{check:z,nullable:true,apply:E},filter:{check:N,nullable:true,init:null}},members:{__lR:true,__lS:null,getFocusElement:function(){var be=this.getContentElement();

if(be){return be;
}},_createInputElement:function(){return new qx.html.Input(Q);
},renderLayout:function(br,top,bs,bt){var bu=this._updateInsets;
var by=arguments.callee.base.call(this,br,top,bs,bt);
if(!by){return;
}var bw=by.size||bu;
var bz=O;

if(bw||by.local||by.margin){var bv=this.getInsets();
var innerWidth=bs-bv.left-bv.right;
var innerHeight=bt-bv.top-bv.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bx=this.getContentElement();

if(bu){this.__lU().setStyles({"left":bv.left+bz,"top":bv.top+bz});
}
if(bw){this.__lU().setStyles({"width":innerWidth+bz,"height":innerHeight+bz});
bx.setStyles({"width":innerWidth+bz,"height":innerHeight+bz});
}},_createContentElement:function(){var bE=this._createInputElement();
bE.setStyles({"border":h,"padding":0,"margin":0,"display":y,"background":J,"outline":h,"appearance":h,"position":S,"autoComplete":H});
bE.setSelectable(this.getSelectable());
bE.setEnabled(this.getEnabled());
bE.addListener(a,this._onHtmlInput,this);
if(qx.core.Variant.isSet(g,p)){bE.setAttribute(w,M);
}if(qx.core.Variant.isSet(g,A)){bE.setStyle(F,h);
}if(qx.core.Variant.isSet(g,v)){bE.setStyles({backgroundImage:B+qx.util.ResourceManager.getInstance().toUri(I)+r});
}return bE;
},_applyEnabled:function(bJ,bK){arguments.callee.base.call(this,bJ,bK);
this.getContentElement().setEnabled(bJ);

if(bJ){this._showPlaceholder();
}else{this._removePlaceholder();
}},__lT:{width:16,height:16},_getContentHint:function(){return {width:this.__lT.width*10,height:this.__lT.height||16};
},_applyFont:function(bA,bB){var bC;

if(bA){var bD=qx.theme.manager.Font.getInstance().resolve(bA);
bC=bD.getStyles();
}else{bC=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bC);
this.__lU().setStyles(bC);
if(bA){this.__lT=qx.bom.Label.getTextSize(q,bC);
}else{delete this.__lT;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bg,bh){if(bg){this.getContentElement().setStyle(j,qx.theme.manager.Color.getInstance().resolve(bg));
this.__lU().setStyle(j,qx.theme.manager.Color.getInstance().resolve(bg));
}else{this.getContentElement().removeStyle(j);
this.__lU().removeStyle(j);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__lT;
},_onHtmlInput:function(e){var bl=e.getData();
var bk=true;
this.__lR=false;
if(this.getFilter()!=null){var bm=i;
var bi=bl.search(this.getFilter());
var bj=bl;

while(bi>=0){bm=bm+(bj.charAt(bi));
bj=bj.substring(bi+1,bj.length);
bi=bj.search(this.getFilter());
}
if(bm!=bl){bk=false;
bl=bm;
this.getContentElement().setValue(bl);
}}if(bl.length>this.getMaxLength()){var bk=false;
this.getContentElement().setValue(bl.substr(0,this.getMaxLength()));
}if(bk){this.fireDataEvent(a,bl);
if(this.getLiveUpdate()){this.fireNonBubblingEvent(f,qx.event.type.Data,[bl]);
}}},setValue:function(bF){if(bF===null){if(this.__lR){return bF;
}bF=i;
this.__lR=true;
}else{this.__lR=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bF)){var bH=this.getContentElement();

if(bF.length>this.getMaxLength()){bF=bF.substr(0,this.getMaxLength());
}
if(bH.getValue()!=bF){var bI=bH.getValue();
bH.setValue(bF);
var bG=this.__lR?null:bF;
this.fireNonBubblingEvent(f,qx.event.type.Data,[bG,bI]);
}this._showPlaceholder();
return bF;
}throw new Error("Invalid value type: "+bF);
},getValue:function(){var bf=this.getContentElement().getValue();
return this.__lR?null:bf;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__lR=e.getData()===null;
this.fireNonBubblingEvent(f,qx.event.type.Data,[e.getData()]);
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bL,bM){this.getContentElement().setTextSelection(bL,bM);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bo=this.getValue()||i;
var bn=this.getPlaceholder();

if(bn!=null&&bo==i&&!this.hasState(l)&&!this.hasState(u)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__lU().setStyle(V,T);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__lU().setStyle(V,t);
}},__lU:function(){if(this.__lS==null){this.__lS=new qx.html.Label();
this.__lS.setStyles({"visibility":T,"zIndex":6,"position":S});
this.getContainerElement().add(this.__lS);
}return this.__lS;
},_applyPlaceholder:function(X,Y){this.__lU().setValue(X);

if(X!=null){this.addListener(W,this._removePlaceholder,this);
this.addListener(U,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(W,this._removePlaceholder,this);
this.removeListener(U,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bp,bq){this.getContentElement().setStyle(o,bp);
},_applyReadOnly:function(ba,bb){var bc=this.getContentElement();
bc.setAttribute(R,ba);

if(ba){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__lS=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var y="none",x="wrap",w="value",v="qx.client",u="textarea",t="off",s="on",r="qxSelectable",q="",p="webkit",l="input",o="qx.html.Input",n="select",k="disabled",j="read-only",m="userSelect";
qx.Class.define(o,{extend:qx.html.Element,construct:function(z){arguments.callee.base.call(this);
this.__lV=z;
if(z===n||z===u){this.setNodeName(z);
}else{this.setNodeName(l);
}},members:{__lV:null,__lW:null,__lX:null,_createDomElement:function(){return qx.bom.Input.create(this.__lV);
},_applyProperty:function(name,f){arguments.callee.base.call(this,name,f);
var g=this.getDomElement();

if(name===w){qx.bom.Input.setValue(g,f);
}else if(name===x){qx.bom.Input.setWrap(g,f);
}},setEnabled:qx.core.Variant.select(v,{"webkit":function(a){this.__lX=a;

if(!a){this.setStyles({"userModify":j,"userSelect":y});
}else{this.setStyles({"userModify":null,"userSelect":this.__lW?null:y});
}},"default":function(h){this.setAttribute(k,h===false);
}}),setSelectable:qx.core.Variant.select(v,{"webkit":function(A){this.__lW=A;
this.setAttribute(r,A?s:t);
if(qx.core.Variant.isSet(v,p)){var B=this.__lX?A?null:y:y;
this.setStyle(m,B);
}},"default":function(e){this.setAttribute(r,e?s:t);
}}),setValue:function(c){var d=this.getDomElement();

if(d){if(d.value!=c){qx.bom.Input.setValue(d,c);
}}else{this._setProperty(w,c);
}return this;
},getValue:function(){var b=this.getDomElement();

if(b){return qx.bom.Input.getValue(b);
}return this._getProperty(w)||q;
},setWrap:function(i){if(this.__lV===u){this._setProperty(x,i);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__lV===u){return this._getProperty(x);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var N="change",M="input",L="checkbox",K="radio",J="textarea",I="qx.client",H="text",G="password",F="keypress",E="propertychange",A="select-multiple",D="checked",C="value",z="select",y="qx.event.handler.Input",B="Enter";
qx.Class.define(y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){var c=a.tagName.toLowerCase();

if(b===M&&(c===M||c===J)){return true;
}
if(b===N&&(c===M||c===J||c===z)){return true;
}return false;
},registerEvent:qx.core.Variant.select(I,{"mshtml":function(j,k,m){if(!j.__lY){var n=j.tagName.toLowerCase();
var p=j.type;

if(p===H||p===G||n===J||p===L||p===K){qx.bom.Event.addNativeListener(j,E,this._onPropertyWrapper);
}
if(p!==L&&p!==K){qx.bom.Event.addNativeListener(j,N,this._onChangeValueWrapper);
}this.__mc(j,p);
j.__lY=true;
}},"default":function(r,s,t){if(s===M){this.__ma(r);
}else if(s===N){if(r.type===K||r.type===L){qx.bom.Event.addNativeListener(r,N,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(r,N,this._onChangeValueWrapper);
}this.__mc(r,r.type);
}}}),__ma:qx.core.Variant.select(I,{"mshtml":null,"webkit":function(U){var V=U.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&V==J){qx.bom.Event.addNativeListener(U,F,this._onInputWrapper);
}qx.bom.Event.addNativeListener(U,M,this._onInputWrapper);
},"default":function(O){qx.bom.Event.addNativeListener(O,M,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(I,{"mshtml":function(Y,ba){if(Y.__lY){var bb=Y.tagName.toLowerCase();
var bc=Y.type;

if(bc===H||bc===G||bb===J||bc===L||bc===K){qx.bom.Event.removeNativeListener(Y,E,this._onPropertyWrapper);
}
if(bc!==L&&bc!==K){qx.bom.Event.removeNativeListener(Y,N,this._onChangeValueWrapper);
}
try{delete Y.__lY;
}catch(P){Y.__lY=null;
}}},"default":function(S,T){if(T===M){this.__ma(S);
}else if(T===N){if(S.type===K||S.type===L){qx.bom.Event.removeNativeListener(S,N,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(S,N,this._onChangeValueWrapper);
}}}}),__mb:qx.core.Variant.select(I,{"mshtml":null,"webkit":function(Q){var R=Q.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&R==J){qx.bom.Event.removeNativeListener(Q,F,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(Q,M,this._onInputWrapper);
},"default":function(q){qx.bom.Event.removeNativeListener(q,M,this._onInputWrapper);
}}),__mc:qx.core.Variant.select(I,{"mshtml|opera":function(u,v){if(v===H||v===G){qx.event.Registration.addListener(u,F,function(e){if(e.getKeyIdentifier()===B){qx.event.Registration.fireEvent(u,N,qx.event.type.Data,[u.value]);
}});
}},"default":function(w,x){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bd=e.target;
qx.event.Registration.fireEvent(bd,M,qx.event.type.Data,[bd.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var f=e.target||e.srcElement;
var d=f.value;

if(f.type===A){var d=[];

for(var i=0,o=f.options,l=o.length;i<l;i++){if(o[i].selected){d.push(o[i].value);
}}}qx.event.Registration.fireEvent(f,N,qx.event.type.Data,[d]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var W=e.target;

if(W.type===K){if(W.checked){qx.event.Registration.fireEvent(W,N,qx.event.type.Data,[W.value]);
}}else{qx.event.Registration.fireEvent(W,N,qx.event.type.Data,[W.checked]);
}}),_onProperty:qx.core.Variant.select(I,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var g=e.target||e.srcElement;
var h=e.propertyName;

if(h===C&&(g.type===H||g.type===G||g.tagName.toLowerCase()===J)){if(!g.__inValueSet){qx.event.Registration.fireEvent(g,M,qx.event.type.Data,[g.value]);
}}else if(h===D){if(g.type===L){qx.event.Registration.fireEvent(g,N,qx.event.type.Data,[g.checked]);
}else if(g.checked){qx.event.Registration.fireEvent(g,N,qx.event.type.Data,[g.value]);
}}}),"default":function(){}})},defer:function(X){qx.event.Registration.addHandler(X);
}});
})();
(function(){var J="",I="select",H="soft",G="off",F="qx.client",E="wrap",D="text",C="mshtml",B="number",A="checkbox",t="select-one",z="input",w="option",s="value",r="radio",v="qx.bom.Input",u="nowrap",x="textarea",q="auto",y="normal";
qx.Class.define(v,{statics:{__md:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(m,n,o){{};
var n=n?qx.lang.Object.clone(n):{};
var p;

if(m===x||m===I){p=m;
}else{p=z;
n.type=m;
}return qx.bom.Element.create(p,n,o);
},setValue:function(S,T){var Y=S.nodeName.toLowerCase();
var V=S.type;
var Array=qx.lang.Array;
var ba=qx.lang.Type;

if(typeof T===B){T+=J;
}
if((V===A||V===r)){if(ba.isArray(T)){S.checked=Array.contains(T,S.value);
}else{S.checked=S.value==T;
}}else if(Y===I){var U=ba.isArray(T);
var bb=S.options;
var W,X;

for(var i=0,l=bb.length;i<l;i++){W=bb[i];
X=W.getAttribute(s);

if(X==null){X=W.text;
}W.selected=U?Array.contains(T,X):T==X;
}
if(U&&T.length==0){S.selectedIndex=-1;
}}else if(V===D&&qx.core.Variant.isSet(F,C)){S.__me=true;
S.value=T;
S.__me=null;
}else{S.value=T;
}},getValue:function(a){var g=a.nodeName.toLowerCase();

if(g===w){return (a.attributes.value||{}).specified?a.value:a.text;
}
if(g===I){var b=a.selectedIndex;
if(b<0){return null;
}var h=[];
var k=a.options;
var j=a.type==t;
var f=qx.bom.Input;
var e;
for(var i=j?b:0,d=j?b+1:k.length;i<d;i++){var c=k[i];

if(c.selected){e=f.getValue(c);
if(j){return e;
}h.push(e);
}}return h;
}else{return (a.value||J).replace(/\r/g,J);
}},setWrap:qx.core.Variant.select(F,{"mshtml":function(Q,R){Q.wrap=R?H:G;
},"gecko|webkit":function(M,N){var P=N?H:G;
var O=N?J:q;
M.setAttribute(E,P);
M.style.overflow=O;
},"default":function(K,L){K.style.whiteSpace=L?y:u;
}})}});
})();
(function(){var bL="",bK="Number",bJ='</div>',bI='" ',bH="paneUpdated",bG='<div>',bF="</div>",bE="overflow: hidden;",bD="qx.event.type.Data",bC="paneReloadsData",ce="div",cd='style="',cc="_applyMaxCacheLines",cb="qx.ui.table.pane.Pane",ca="width: 100%;",bY="qx.event.type.Event",bX="_applyVisibleRowCount",bW='>',bV="line-height: ",bU="appear",bS='class="',bT="width:100%;",bQ="px;",bR='<div ',bO="'>",bP="_applyFirstVisibleRow",bM="<div style='",bN=";position:relative;";
qx.Class.define(cb,{extend:qx.ui.core.Widget,construct:function(cl){arguments.callee.base.call(this);
this.__oU=cl;
this.__oV=0;
this.__oW=0;
this.__oX=[];
},events:{"paneReloadsData":bD,"paneUpdated":bY},properties:{firstVisibleRow:{check:bK,init:0,apply:bP},visibleRowCount:{check:bK,init:0,apply:bX},maxCacheLines:{check:bK,init:1000,apply:cc},allowShrinkX:{refine:true,init:false}},members:{__oW:null,__oV:null,__oU:null,__oY:null,__pa:null,__pb:null,__oX:null,__pc:0,_applyFirstVisibleRow:function(Y,ba){this.updateContent(false,Y-ba);
},_applyVisibleRowCount:function(F,G){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__oU;
},getTable:function(){return this.__oU.getTable();
},setFocusedCell:function(bb,bc,bd){if(bb!=this.__pb||bc!=this.__pa){var be=this.__pa;
this.__pb=bb;
this.__pa=bc;
if(bc!=be&&!bd){if(be!==null){this.updateContent(false,null,be,true);
}
if(bc!==null){this.updateContent(false,null,bc,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(bf,bg){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(cf,cg,ch,ci){this.__pd();
var ck=this.getFirstVisibleRow();
var cj=this.getVisibleRowCount();

if(cg==-1||cg>=ck&&cf<ck+cj){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(bx,by){if(this.__pc>=bx&&bx!==-1){this.__pd();
}},__pd:function(){this.__oX=[];
this.__pc=0;
},__pe:function(bz,bA,bB){if(!bA&&!bB&&this.__oX[bz]){return this.__oX[bz];
}else{return null;
}},__pf:function(bs,bt,bu,bv){var bw=this.getMaxCacheLines();

if(!bu&&!bv&&!this.__oX[bs]&&bw>0){this._applyMaxCacheLines(bw);
this.__oX[bs]=bt;
this.__pc+=1;
}},updateContent:function(U,V,W,X){if(U){this.__pd();
}if(V&&Math.abs(V)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(V);
}else if(X&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(W);
}else{this._updateAllRows();
}},_updateRowStyles:function(bh){var bl=this.getContentElement().getDomElement();

if(!bl||!bl.firstChild){this._updateAllRows();
return;
}var bp=this.getTable();
var bj=bp.getSelectionModel();
var bm=bp.getTableModel();
var bq=bp.getDataRowRenderer();
var bk=bl.firstChild.childNodes;
var bo={table:bp};
var br=this.getFirstVisibleRow();
var y=0;
var bi=bk.length;

if(bh!=null){var bn=bh-br;

if(bn>=0&&bn<bi){br=bh;
y=bn;
bi=bn+1;
}else{return;
}}
for(;y<bi;y++,br++){bo.row=br;
bo.selected=bj.isSelectedIndex(br);
bo.focusedRow=(this.__pa==br);
bo.rowData=bm.getRowData(br);
bq.updateDataRowElement(bo,bk[y]);
}},_getRowsHtml:function(a,b){var h=this.getTable();
var l=h.getSelectionModel();
var e=h.getTableModel();
var f=h.getTableColumnModel();
var B=this.getPaneScroller().getTablePaneModel();
var q=h.getDataRowRenderer();
e.prefetchRows(a,a+b-1);
var w=h.getRowHeight();
var A=B.getColumnCount();
var g=0;
var d=[];
for(var x=0;x<A;x++){var D=B.getColumnAtX(x);
var k=f.getColumnWidth(D);
d.push({col:D,xPos:x,editable:e.isColumnEditable(D),focusedCol:this.__pb==D,styleLeft:g,styleWidth:k});
g+=k;
}var C=[];
var E=false;

for(var j=a;j<a+b;j++){var m=l.isSelectedIndex(j);
var p=(this.__pa==j);
var t=this.__pe(j,m,p);

if(t){C.push(t);
continue;
}var s=[];
var v={table:h};
v.styleHeight=w;
v.row=j;
v.selected=m;
v.focusedRow=p;
v.rowData=e.getRowData(j);

if(!v.rowData){E=true;
}s.push(bR);
var c=q.getRowClass(v);

if(c){s.push(bS,c,bI);
}var r=q.createRowStyle(v);
r+=bN+q.getRowHeightStyle(w)+bT;

if(r){s.push(cd,r,bI);
}s.push(bW);

for(var x=0;x<A;x++){var n=d[x];

for(var z in n){v[z]=n[z];
}var D=v.col;
v.value=e.getValue(D,j);
var o=f.getDataCellRenderer(D);
o.createDataCellHtml(v,s);
}s.push(bJ);
var u=s.join(bL);
this.__pf(j,u,m,p);
C.push(u);
}this.fireDataEvent(bC,E);
return C.join(bL);
},_scrollContent:function(H){var I=this.getContentElement().getDomElement();

if(!(I&&I.firstChild)){this._updateAllRows();
return;
}var R=I.firstChild;
var J=R.childNodes;
var P=this.getVisibleRowCount();
var O=this.getFirstVisibleRow();
var M=this.getTable().getTableModel();
var S=0;
S=M.getRowCount();
if(O+P>S){this._updateAllRows();
return;
}var T=H<0?P+H:0;
var K=H<0?0:P-H;

for(i=Math.abs(H)-1;i>=0;i--){var N=J[T];

try{R.removeChild(N);
}catch(cm){break;
}}if(!this.__oY){this.__oY=document.createElement(ce);
}var Q=bG;
Q+=this._getRowsHtml(O+K,Math.abs(H));
Q+=bJ;
this.__oY.innerHTML=Q;
var L=this.__oY.firstChild.childNodes;
if(H>0){for(var i=L.length-1;i>=0;i--){var N=L[0];
R.appendChild(N);
}}else{for(var i=L.length-1;i>=0;i--){var N=L[L.length-1];
R.insertBefore(N,R.firstChild);
}}if(this.__pa!==null){this._updateRowStyles(this.__pa-H);
this._updateRowStyles(this.__pa);
}this.fireEvent(bH);
},_updateAllRows:function(){var cq=this.getContentElement().getDomElement();

if(!cq){this.addListenerOnce(bU,arguments.callee,this);
return;
}var cw=this.getTable();
var ct=cw.getTableModel();
var cv=this.getPaneScroller().getTablePaneModel();
var cu=cv.getColumnCount();
var cn=cw.getRowHeight();
var cr=this.getFirstVisibleRow();
var co=this.getVisibleRowCount();
var cx=ct.getRowCount();

if(cr+co>cx){co=Math.max(0,cx-cr);
}var cp=cv.getTotalWidth();
var cs;
if(co>0){cs=[bM,ca,(cw.getForceLineHeight()?bV+cn+bQ:bL),bE,bO,this._getRowsHtml(cr,co),bF];
}else{cs=[];
}var cy=cs.join(bL);
cq.innerHTML=cy;
this.setWidth(cp);
this.__oV=cu;
this.__oW=co;
this.fireEvent(bH);
}},destruct:function(){this.__oY=this.__oU=this.__oX=null;
}});
})();
(function(){var c="hovered",b="__pg",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(d){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__pg=d;
},members:{__pg:null,__ph:null,__pi:null,getPaneScroller:function(){return this.__pg;
},getTable:function(){return this.__pg.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(s,t){var u=this.getHeaderWidgetAtColumn(s);

if(u!=null){u.setWidth(t);
}},setMouseOverColumn:function(e){if(e!=this.__pi){if(this.__pi!=null){var f=this.getHeaderWidgetAtColumn(this.__pi);

if(f!=null){f.removeState(c);
}}
if(e!=null){this.getHeaderWidgetAtColumn(e).addState(c);
}this.__pi=e;
}},getHeaderWidgetAtColumn:function(I){var J=this.getPaneScroller().getTablePaneModel().getX(I);
return this._getChildren()[J];
},showColumnMoveFeedback:function(v,x){var A=this.getContainerLocation();

if(this.__ph==null){var w=this.getPaneScroller().getTablePaneModel().getX(v);
var z=this._getChildren()[w];
var B=this.getTable().getTableModel();
var D=this.getTable().getTableColumnModel();
var E={xPos:w,col:v,name:B.getColumnName(v)};
var C=D.getHeaderCellRenderer(v);
var y=C.createHeaderCell(E);
var F=z.getBounds();
y.setWidth(F.width);
y.setHeight(F.height);
y.setZIndex(1000000);
y.setOpacity(0.8);
y.setLayoutProperties({top:A.top});
this.getApplicationRoot().add(y);
this.__ph=y;
}this.__ph.setLayoutProperties({left:A.left+x});
this.__ph.show();
},hideColumnMoveFeedback:function(){if(this.__ph!=null){this.__ph.destroy();
this.__ph=null;
}},isShowingColumnMoveFeedback:function(){return this.__ph!=null;
},_updateContent:function(g){var l=this.getTable().getTableModel();
var o=this.getTable().getTableColumnModel();
var p=this.getPaneScroller().getTablePaneModel();
var r=this._getChildren();
var m=p.getColumnCount();
var h=l.getSortColumnIndex();
if(g){this._cleanUpCells();
}var i={};
i.sortedAscending=l.isSortAscending();

for(var x=0;x<m;x++){var k=p.getColumnAtX(x);

if(k===undefined){continue;
}var q=o.getColumnWidth(k);
var n=o.getHeaderCellRenderer(k);
i.xPos=x;
i.col=k;
i.name=l.getColumnName(k);
i.editable=l.isColumnEditable(k);
i.sorted=(k==h);
var j=r[x];
if(j==null){j=n.createHeaderCell(i);
j.set({width:q});
this._add(j);
}else{n.updateHeaderCell(i,j);
}}},_cleanUpCells:function(){var H=this._getChildren();

for(var x=H.length-1;x>=0;x--){var G=H[x];
G.destroy();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var bw="Boolean",bv="resize-line",bu="mousedown",bt="qx.event.type.Data",bs="mouseup",br="qx.ui.table.pane.CellEvent",bq="scroll",bp="focus-indicator",bo="excluded",bn="scrollbar-y",cu="visible",ct="mousemove",cs="header",cr="editing",cq="click",cp="modelChanged",co="scrollbar-x",cn="cellClick",cm="pane",cl="__pr",bD="__pp",bE="mouseout",bB="changeHorizontalScrollBarVisible",bC="bottom",bz="_applyScrollTimeout",bA="changeScrollX",bx="_applyTablePaneModel",by="Integer",bH="dblclick",bI="dataEdited",bQ="__pl",bO="mousewheel",bY="interval",bT="qx.ui.table.pane.Scroller",ch="_applyShowCellFocusIndicator",ce="__pm",bK="resize",ck="__ps",cj="vertical",ci="changeScrollY",bJ="__pn",bM="appear",bN="table-scroller",bP="beforeSort",bR="cellDblclick",bU="horizontal",cb="__po",cg="losecapture",bF="contextmenu",bG="__pk",bL="col-resize",bX="disappear",bW="_applyVerticalScrollBarVisible",bV="_applyHorizontalScrollBarVisible",cd="cellContextmenu",cc="close",bS="changeTablePaneModel",ca="__pq",bm="qx.ui.table.pane.Model",cf="changeVerticalScrollBarVisible";
qx.Class.define(bT,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(eH){arguments.callee.base.call(this);
this.__pj=eH;
var eI=new qx.ui.layout.Grid();
eI.setColumnFlex(0,1);
eI.setRowFlex(1,1);
this._setLayout(eI);
this.__pk=this._showChildControl(co);
this.__pl=this._showChildControl(bn);
this.__pm=this._showChildControl(cs);
this.__pn=this._showChildControl(cm);
this.__po=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__po,{row:0,column:0,colSpan:2});
this.__pp=new qx.ui.table.pane.Clipper();
this.__pp.add(this.__pm);
this.__pp.addListener(cg,this._onChangeCaptureHeader,this);
this.__pp.addListener(ct,this._onMousemoveHeader,this);
this.__pp.addListener(bu,this._onMousedownHeader,this);
this.__pp.addListener(bs,this._onMouseupHeader,this);
this.__pp.addListener(cq,this._onClickHeader,this);
this.__po.add(this.__pp,{flex:1});
this.__pq=new qx.ui.table.pane.Clipper();
this.__pq.add(this.__pn);
this.__pq.addListener(bO,this._onMousewheel,this);
this.__pq.addListener(ct,this._onMousemovePane,this);
this.__pq.addListener(bu,this._onMousedownPane,this);
this.__pq.addListener(bs,this._onMouseupPane,this);
this.__pq.addListener(cq,this._onClickPane,this);
this.__pq.addListener(bF,this._onContextMenu,this);
this.__pq.addListener(bH,this._onDblclickPane,this);
this.__pq.addListener(bK,this._onResizePane,this);
this._add(this.__pq,{row:1,column:0});
this.__pr=this.getChildControl(bp);
this.getChildControl(bv).hide();
this.addListener(bE,this._onMouseout,this);
this.addListener(bM,this._onAppear,this);
this.addListener(bX,this._onDisappear,this);
this.__ps=new qx.event.Timer();
this.__ps.addListener(bY,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":bt,"changeScrollX":bt,"cellClick":br,"cellDblclick":br,"cellContextmenu":br,"beforeSort":bt},properties:{horizontalScrollBarVisible:{check:bw,init:true,apply:bV,event:bB},verticalScrollBarVisible:{check:bw,init:true,apply:bW,event:cf},tablePaneModel:{check:bm,apply:bx,event:bS},liveResize:{check:bw,init:false},focusCellOnMouseMove:{check:bw,init:false},selectBeforeFocus:{check:bw,init:false},showCellFocusIndicator:{check:bw,init:true,apply:ch},scrollTimeout:{check:by,init:100,apply:bz},appearance:{refine:true,init:bN}},members:{__pt:null,__pj:null,__pu:null,__pv:null,__pw:null,__px:null,__py:null,__pz:null,__pA:null,__pB:null,__pC:null,__pD:null,__pE:null,__pF:null,__pG:null,__pH:null,__pI:null,__pJ:null,__pK:null,__pL:null,__pM:null,__pN:null,__pk:null,__pl:null,__pm:null,__pp:null,__pn:null,__pq:null,__pr:null,__po:null,__ps:null,getPaneInsetRight:function(){var cU=this.getTopRightWidget();
var cV=cU&&cU.isVisible()&&cU.getBounds()?cU.getBounds().width:0;
var cT=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(cV,cT);
},setPaneWidth:function(cC){if(this.isVerticalScrollBarVisible()){cC+=this.getPaneInsetRight();
}this.setWidth(cC);
},_createChildControlImpl:function(F){var G;

switch(F){case cs:G=(this.getTable().getNewTablePaneHeader())(this);
break;
case cm:G=(this.getTable().getNewTablePane())(this);
break;
case bp:G=new qx.ui.table.pane.FocusIndicator(this);
G.setUserBounds(0,0,0,0);
G.setZIndex(1000);
G.addListener(bs,this._onMouseupFocusIndicator,this);
this.__pq.add(G);
G.exclude();
break;
case bv:G=new qx.ui.core.Widget();
G.setUserBounds(0,0,0,0);
G.setZIndex(1000);
this.__pq.add(G);
break;
case co:G=this._createScrollBar(bU).set({minWidth:0,alignY:bC});
G.addListener(bq,this._onScrollX,this);
this._add(G,{row:2,column:0});
break;
case bn:G=this._createScrollBar(cj);
G.addListener(bq,this._onScrollY,this);
this._add(G,{row:1,column:1});
break;
}return G||arguments.callee.base.call(this,F);
},_applyHorizontalScrollBarVisible:function(bf,bg){this.__pk.setVisibility(bf?cu:bo);

if(!bf){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(cA,cB){this.__pl.setVisibility(cA?cu:bo);

if(!cA){this.setScrollX(0);
}},_applyTablePaneModel:function(a,b){if(b!=null){b.removeListener(cp,this._onPaneModelChanged,this);
}a.addListener(cp,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(c,d){if(c){this._updateFocusIndicator();
}else{if(this.__pr){this.__pr.hide();
}}},getScrollY:function(){return this.__pl.getPosition();
},setScrollY:function(scrollY,E){this.__pl.scrollTo(scrollY);

if(E){this._updateContent();
}},getScrollX:function(){return this.__pk.getPosition();
},setScrollX:function(scrollX){this.__pk.scrollTo(scrollX);
},getTable:function(){return this.__pj;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bc,bd){this.__pm.setColumnWidth(bc,bd);
this.__pn.setColumnWidth(bc,bd);
var be=this.getTablePaneModel();
var x=be.getX(bc);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__pm.onColOrderChanged();
this.__pn.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(dx,dy,dz,dA){this.__pn.onTableModelDataChanged(dx,dy,dz,dA);
var dB=this.getTable().getTableModel().getRowCount();

if(dB!=this.__pt){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=dB){if(dB==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),dB-1);
}}this.__pt=dB;
}},onSelectionChanged:function(){this.__pn.onSelectionChanged();
},onFocusChanged:function(){this.__pn.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__pm.onTableModelMetaDataChanged();
this.__pn.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__pm.onPaneModelChanged();
this.__pn.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__pm._updateContent();
this.__pj._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var cy=this.__pq.getInnerSize();

if(!cy){return ;
}var cw=this.getTablePaneModel().getTotalWidth();
var cx=this.__pk;

if(cy.width<cw){var cv=Math.max(0,cw-cy.width);
cx.setMaximum(cv);
cx.setKnobFactor(cy.width/cw);
var cz=cx.getPosition();
cx.setPosition(Math.min(cz,cv));
}else{cx.setMaximum(0);
cx.setKnobFactor(1);
cx.setPosition(0);
}},updateVerScrollBarMaximum:function(){var ey=this.__pq.getInnerSize();

if(!ey){return ;
}var ew=this.getTable().getTableModel();
var es=ew.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){es+=1;
}var er=this.getTable().getRowHeight();
var eu=es*er;
var ex=this.__pl;

if(ey.height<eu){var et=Math.max(0,eu-ey.height);
ex.setMaximum(et);
ex.setKnobFactor(ey.height/eu);
var ev=ex.getPosition();
ex.setPosition(Math.min(ev,et));
}else{ex.setMaximum(0);
ex.setKnobFactor(1);
ex.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var cG=e.getData();
this.fireDataEvent(bA,cG,e.getOldData());
this.__pp.scrollToX(cG);
this.__pq.scrollToX(cG);
},_onScrollY:function(e){this.fireDataEvent(ci,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var cD=this.getTable();

if(!cD.getEnabled()){return;
}var cF=qx.bom.client.Engine.GECKO?1:3;
var cE=this.__pl.getPosition()+((e.getWheelDelta()*cF)*cD.getRowHeight());
this.__pl.scrollTo(cE);
if(this.__pH&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__pH,this.__pI);
}e.stop();
},__pO:function(eU){var fa=this.getTable();
var fb=this.__pm.getHeaderWidgetAtColumn(this.__pC);
var eV=fb.getSizeHint().minWidth;
var eX=Math.max(eV,this.__pE+eU-this.__pD);

if(this.getLiveResize()){var eW=fa.getTableColumnModel();
eW.setColumnWidth(this.__pC,eX);
}else{this.__pm.setColumnWidth(this.__pC,eX);
var eY=this.getTablePaneModel();
this._showResizeLine(eY.getColumnLeft(this.__pC)+eX);
}this.__pD+=eX-this.__pE;
this.__pE=eX;
},__pP:function(cX){var cY=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__pm.isShowingColumnMoveFeedback()||cX>this.__pB+cY||cX<this.__pB-cY){this.__py+=cX-this.__pB;
this.__pm.showColumnMoveFeedback(this.__px,this.__py);
var da=this.__pj.getTablePaneScrollerAtPageX(cX);

if(this.__pA&&this.__pA!=da){this.__pA.hideColumnMoveFeedback();
}
if(da!=null){this.__pz=da.showColumnMoveFeedback(cX);
}else{this.__pz=null;
}this.__pA=da;
this.__pB=cX;
}},_onMousemoveHeader:function(e){var dI=this.getTable();

if(!dI.getEnabled()){return;
}var dJ=false;
var dC=null;
var dG=e.getDocumentLeft();
var dH=e.getDocumentTop();
this.__pH=dG;
this.__pI=dH;

if(this.__pC!=null){this.__pO(dG);
dJ=true;
e.stopPropagation();
}else if(this.__px!=null){this.__pP(dG);
e.stopPropagation();
}else{var dD=this._getResizeColumnForPageX(dG);

if(dD!=-1){dJ=true;
}else{var dF=dI.getTableModel();
var dK=this._getColumnForPageX(dG);

if(dK!=null&&dF.isColumnSortable(dK)){dC=dK;
}}}var dE=dJ?bL:null;
this.getApplicationRoot().setGlobalCursor(dE);
this.setCursor(dE);
this.__pm.setMouseOverColumn(dC);
},_onMousemovePane:function(e){var eQ=this.getTable();

if(!eQ.getEnabled()){return;
}var eS=e.getDocumentLeft();
var eT=e.getDocumentTop();
this.__pH=eS;
this.__pI=eT;
var eR=this._getRowForPagePos(eS,eT);

if(eR!=null&&this._getColumnForPageX(eS)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(eS,eT);
}}this.__pm.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var bk=e.getDocumentLeft();
var bl=this._getResizeColumnForPageX(bk);

if(bl!=-1){this._startResizeHeader(bl,bk);
e.stop();
}else{var bj=this._getColumnForPageX(bk);

if(bj!=null){this._startMoveHeader(bj,bk);
e.stop();
}}},_startResizeHeader:function(eN,eO){var eP=this.getTable().getTableColumnModel();
this.__pC=eN;
this.__pD=eO;
this.__pE=eP.getColumnWidth(this.__pC);
this.__pp.capture();
},_startMoveHeader:function(dv,dw){this.__px=dv;
this.__pB=dw;
this.__py=this.getTablePaneModel().getColumnLeft(dv);
this.__pp.capture();
},_onMousedownPane:function(e){var dW=this.getTable();

if(!dW.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var dT=e.getDocumentLeft();
var dV=e.getDocumentTop();
var dY=this._getRowForPagePos(dT,dV);
var dX=this._getColumnForPageX(dT);

if(dY!==null){this.__pF={row:dY,col:dX};
var dU=this.getSelectBeforeFocus();

if(dU){dW.getSelectionManager().handleMouseDown(dY,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(dT,dV);
}
if(!dU){dW.getSelectionManager().handleMouseDown(dY,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__pF&&this.__pr.getRow()==this.__pF.row&&this.__pr.getColumn()==this.__pF.col){this.__pF={};
this.fireEvent(cn,qx.ui.table.pane.CellEvent,[this,e,this.__pF.row,this.__pF.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__pC!=null){this._stopResizeHeader();
}
if(this.__px!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var eM=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
eM.setColumnWidth(this.__pC,this.__pE);
}this.__pC=null;
this.__pp.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var u=this.getTable().getTableColumnModel();
var v=this.getTablePaneModel();
this.__pm.hideColumnMoveFeedback();

if(this.__pA){this.__pA.hideColumnMoveFeedback();
}
if(this.__pz!=null){var y=v.getFirstColumnX()+v.getX(this.__px);
var t=this.__pz;

if(t!=y&&t!=y+1){var w=u.getVisibleColumnAtX(y);
var s=u.getVisibleColumnAtX(t);
var r=u.getOverallX(w);
var q=(s!=null)?u.getOverallX(s):u.getOverallColumnCount();

if(q>r){q--;
}u.moveColumn(r,q);
}}this.__px=null;
this.__pz=null;
this.__pp.releaseCapture();
},_onMouseupPane:function(e){var g=this.getTable();

if(!g.getEnabled()){return;
}var h=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(h!=-1&&h!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){g.getSelectionManager().handleMouseUp(h,e);
}},_onMouseupHeader:function(e){var cH=this.getTable();

if(!cH.getEnabled()){return;
}
if(this.__pC!=null){this._stopResizeHeader();
this.__pG=true;
e.stop();
}else if(this.__px!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__pG){this.__pG=false;
return;
}var eD=this.getTable();

if(!eD.getEnabled()){return;
}var eB=eD.getTableModel();
var eC=e.getDocumentLeft();
var eA=this._getResizeColumnForPageX(eC);

if(eA==-1){var eG=this._getColumnForPageX(eC);

if(eG!=null&&eB.isColumnSortable(eG)){var ez=eB.getSortColumnIndex();
var eE=(eG!=ez)?true:!eB.isSortAscending();
var eF={column:eG,ascending:eE};

if(this.fireDataEvent(bP,eF)){eB.sortByColumn(eG,eE);
eD.getSelectionModel().resetSelection();
}}}e.stop();
},_onClickPane:function(e){var W=this.getTable();

if(!W.getEnabled()){return;
}var ba=e.getDocumentLeft();
var bb=e.getDocumentTop();
var X=this._getRowForPagePos(ba,bb);
var Y=this._getColumnForPageX(ba);

if(X!=null&&Y!=null){W.getSelectionManager().handleClick(X,e);

if(this.__pr.isHidden()||(this.__pF&&X==this.__pF.row&&Y==this.__pF.col)){this.__pF={};
this.fireEvent(cn,qx.ui.table.pane.CellEvent,[this,e,X,Y],true);
}}},_onContextMenu:function(e){var ff=e.getDocumentLeft();
var fg=e.getDocumentTop();
var fd=this._getRowForPagePos(ff,fg);
var fe=this._getColumnForPageX(ff);

if(this.__pr.isHidden()||(this.__pF&&fd==this.__pF.row&&fe==this.__pF.col)){this.__pF={};
this.fireEvent(cd,qx.ui.table.pane.CellEvent,[this,e,fd,fe],true);
var fc=this.getTable().getContextMenu();

if(fc){if(fc.getChildren().length>0){fc.openAtMouse(e);
}else{fc.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dq=e.getDocumentLeft();
var dr=e.getDocumentTop();
this._focusCellAtPagePos(dq,dr);
this.startEditing();
var dp=this._getRowForPagePos(dq,dr);

if(dp!=-1&&dp!=null){this.fireEvent(bR,qx.ui.table.pane.CellEvent,[this,e,dp],true);
}},_onMouseout:function(e){var fv=this.getTable();

if(!fv.getEnabled()){return;
}if(this.__pC==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__pm.setMouseOverColumn(null);
},_showResizeLine:function(x){var dt=this._showChildControl(bv);
var ds=dt.getWidth();
var du=this.__pq.getBounds();
dt.setUserBounds(x-Math.round(ds/2),0,ds,du.height);
},_hideResizeLine:function(){this._excludeChildControl(bv);
},showColumnMoveFeedback:function(db){var dk=this.getTablePaneModel();
var dj=this.getTable().getTableColumnModel();
var de=this.__pn.getContainerLocation().left;
var di=dk.getColumnCount();
var df=0;
var dd=0;
var dn=de;

for(var dc=0;dc<di;dc++){var dg=dk.getColumnAtX(dc);
var dl=dj.getColumnWidth(dg);

if(db<dn+dl/2){break;
}dn+=dl;
df=dc+1;
dd=dn-de;
}var dh=this.__pq.getContainerLocation().left;
var dm=this.__pq.getBounds().width;
var scrollX=dh-de;
dd=qx.lang.Number.limit(dd,scrollX+2,scrollX+dm-1);
this._showResizeLine(dd);
return dk.getFirstColumnX()+df;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(A,B){var D=this._getRowForPagePos(A,B);

if(D!=-1&&D!=null){var C=this._getColumnForPageX(A);
this.__pj.setFocusedCell(C,D);
}},setFocusedCell:function(bh,bi){if(!this.isEditing()){this.__pn.setFocusedCell(bh,bi,this.__pv);
this.__pJ=bh;
this.__pK=bi;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__pJ;
},getFocusedRow:function(){return this.__pK;
},scrollCellVisible:function(fh,fi){var fs=this.getTablePaneModel();
var fj=fs.getX(fh);

if(fj!=-1){var fp=this.__pq.getInnerSize();

if(!fp){return;
}var fq=this.getTable().getTableColumnModel();
var fm=fs.getColumnLeft(fh);
var ft=fq.getColumnWidth(fh);
var fk=this.getTable().getRowHeight();
var fu=fi*fk;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var fr=Math.min(fm,fm+ft-fp.width);
var fo=fm;
this.setScrollX(Math.max(fr,Math.min(fo,scrollX)));
var fl=fu+fk-fp.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){fl+=fk;
}var fn=fu;
this.setScrollY(Math.max(fl,Math.min(fn,scrollY)),true);
}},isEditing:function(){return this.__pL!=null;
},startEditing:function(){var m=this.getTable();
var k=m.getTableModel();
var o=this.__pJ;

if(!this.isEditing()&&(o!=null)&&k.isColumnEditable(o)){var p=this.__pK;
var i=this.getTablePaneModel().getX(o);
var j=k.getValue(o,p);
this.__pM=m.getTableColumnModel().getCellEditorFactory(o);
var l={col:o,row:p,xPos:i,value:j,table:m};
this.__pL=this.__pM.createCellEditor(l);
if(this.__pL===null){return false;
}else if(this.__pL instanceof qx.ui.window.Window){this.__pL.setModal(true);
this.__pL.setShowClose(false);
this.__pL.addListener(cc,this._onCellEditorModalWindowClose,this);
var f=m.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__pL,l);
}this.__pL.open();
}else{var n=this.__pr.getInnerSize();
this.__pL.setUserBounds(0,0,n.width,n.height);
this.__pr.addListener(bu,function(e){e.stopPropagation();
});
this.__pr.add(this.__pL);
this.__pr.addState(cr);
this.__pr.setKeepActive(false);
this.__pL.focus();
this.__pL.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var eb=this.__pM.getCellEditorValue(this.__pL);
var ea=this.getTable().getTableModel().getValue(this.__pJ,this.__pK);
this.getTable().getTableModel().setValue(this.__pJ,this.__pK,eb);
this.__pj.focus();
this.__pj.fireDataEvent(bI,{row:this.__pK,col:this.__pJ,oldValue:ea,value:eb});
}},cancelEditing:function(){if(this.isEditing()&&!this.__pL.pendingDispose){if(this._cellEditorIsModalWindow){this.__pL.destroy();
this.__pL=null;
this.__pM=null;
this.__pL.pendingDispose=true;
}else{this.__pr.removeState(cr);
this.__pr.setKeepActive(true);
this.__pL.destroy();
this.__pL=null;
this.__pM=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(ec){var ef=this.getTable().getTableColumnModel();
var eg=this.getTablePaneModel();
var ee=eg.getColumnCount();
var ei=this.__pm.getContainerLocation().left;

for(var x=0;x<ee;x++){var ed=eg.getColumnAtX(x);
var eh=ef.getColumnWidth(ed);
ei+=eh;

if(ec<ei){return ed;
}}return null;
},_getResizeColumnForPageX:function(dL){var dP=this.getTable().getTableColumnModel();
var dQ=this.getTablePaneModel();
var dO=dQ.getColumnCount();
var dS=this.__pm.getContainerLocation().left;
var dM=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<dO;x++){var dN=dQ.getColumnAtX(x);
var dR=dP.getColumnWidth(dN);
dS+=dR;

if(dL>=(dS-dM)&&dL<=(dS+dM)){return dN;
}}return -1;
},_getRowForPagePos:function(cK,cL){var cM=this.__pn.getContentLocation();

if(cK<cM.left||cK>cM.right){return null;
}
if(cL>=cM.top&&cL<=cM.bottom){var cN=this.getTable().getRowHeight();
var scrollY=this.__pl.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/cN)*cN;
}var cQ=scrollY+cL-cM.top;
var cS=Math.floor(cQ/cN);
var cR=this.getTable().getTableModel();
var cO=cR.getRowCount();
return (cS<cO)?cS:null;
}var cP=this.__pm.getContainerLocation();

if(cL>=cP.top&&cL<=cP.bottom&&cK<=cP.right){return -1;
}return null;
},setTopRightWidget:function(cI){var cJ=this.__pN;

if(cJ!=null){this.__po.remove(cJ);
}
if(cI!=null){this.__po.add(cI);
}this.__pN=cI;
},getTopRightWidget:function(){return this.__pN;
},getHeader:function(){return this.__pm;
},getTablePane:function(){return this.__pn;
},getVerticalScrollBarWidth:function(){var H=this.__pl;
return H.isVisible()?(H.getSizeHint().width||0):0;
},getNeededScrollBars:function(I,J){var P=this.__pl.getSizeHint().width;
var Q=this.__pq.getInnerSize();
var K=Q?Q.width:0;

if(this.getVerticalScrollBarVisible()){K+=P;
}var T=Q?Q.height:0;

if(this.getHorizontalScrollBarVisible()){T+=P;
}var N=this.getTable().getTableModel();
var R=N.getRowCount();
var U=this.getTablePaneModel().getTotalWidth();
var S=this.getTable().getRowHeight()*R;
var M=false;
var V=false;

if(U>K){M=true;

if(S>T-P){V=true;
}}else if(S>T){V=true;

if(!J&&(U>K-P)){M=true;
}}var O=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var L=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((I||M)?O:0)|((J||!V)?0:L);
},_applyScrollTimeout:function(eK,eL){this._startInterval(eK);
},_startInterval:function(cW){this.__ps.setInterval(cW);
this.__ps.start();
},_stopInterval:function(){this.__ps.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__pv&&!this.__pn._layoutPending){this.__pv=false;
this._updateContent();
}}),_updateContent:function(){var en=this.__pq.getInnerSize();

if(!en){return;
}var eq=en.height;
var scrollX=this.__pk.getPosition();
var scrollY=this.__pl.getPosition();
var ek=this.getTable().getRowHeight();
var el=Math.floor(scrollY/ek);
var ep=this.__pn.getFirstVisibleRow();
this.__pn.setFirstVisibleRow(el);
var em=Math.ceil(eq/ek);
var ej=0;
var eo=this.getTable().getKeepFirstVisibleRowComplete();

if(!eo){em++;
ej=scrollY%ek;
}this.__pn.setVisibleRowCount(em);

if(el!=ep){this._updateFocusIndicator();
}this.__pq.scrollToX(scrollX);
if(!eo){this.__pq.scrollToY(ej);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var z=this.getTable();

if(!z.getEnabled()){return;
}this.__pr.moveToCell(this.__pJ,this.__pK);
}},destruct:function(){this._stopInterval();
var eJ=this.getTablePaneModel();

if(eJ){eJ.dispose();
}this.__pF=this.__pN=this.__pj=null;
this._disposeObjects(bG,bQ,bD,ca,cl,ce,bJ,cb,ck);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(b){this.getContentElement().scrollToY(b,true);
}}});
})();
(function(){var q="Integer",p="Escape",o="keypress",n="Enter",m="excluded",l="qx.ui.table.pane.FocusIndicator";
qx.Class.define(l,{extend:qx.ui.container.Composite,construct:function(a){arguments.callee.base.call(this);
this.__pQ=a;
this.setKeepActive(true);
this.addListener(o,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:m},row:{check:q,nullable:true},column:{check:q,nullable:true}},members:{__pQ:null,_onKeyPress:function(e){var k=e.getKeyIdentifier();

if(k!==p&&k!==n){e.stopPropagation();
}},moveToCell:function(b,c){if(b==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var d=this.__pQ.getTablePaneModel().getX(b);

if(d==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var j=this.__pQ.getTable();
var h=j.getTableColumnModel();
var i=this.__pQ.getTablePaneModel();
var g=this.__pQ.getTablePane().getFirstVisibleRow();
var f=j.getRowHeight();
this.setUserBounds(i.getColumnLeft(b)-2,(c-g)*f-2,h.getColumnWidth(b)+3,f+3);
this.show();
this.setRow(c);
this.setColumn(b);
}}}},destruct:function(){this.__pQ=null;
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(e,f,g,h){f.clone(this);
this.setBubbles(false);

if(g!=null){this.setRow(g);
}else{this.setRow(e._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(h!=null){this.setColumn(h);
}else{this.setColumn(e._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(c){var d=arguments.callee.base.call(this,c);
d.set({row:this.getRow(),column:this.getColumn()});
return d;
}}});
})();
(function(){var a="qx.lang.Number";
qx.Bootstrap.define(a,{statics:{isInRange:function(h,i,j){return h>=i&&h<=j;
},isBetweenRange:function(e,f,g){return e>f&&e<g;
},limit:function(b,c,d){if(d!=null&&b>d){return d;
}else if(c!=null&&b<c){return c;
}else{return b;
}}}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){this.addListener(i,this.__qc,this,true);
this.addListener(q,this.__qd,this);
this.addListener(x,this.__qf,this);
this.addListener(s,this.__qg,this);
this.addListener(o,this.__qe,this);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__pR:null,__pS:null,__pT:null,__pU:null,__pV:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__pW:function(){var H=this.__pR;

if(!H){H=this.__pR=new qx.ui.core.Widget();
H.setAppearance(p);
H.exclude();
qx.core.Init.getApplication().getRoot().add(H);
}return H;
},__pX:function(){var J=this.__pV;
var I=this.__pW();
I.setUserBounds(J.left,J.top,J.width,J.height);
I.show();
I.setZIndex(this.getZIndex()+1);
},__pY:function(e){var L=this.__pS;
var M=this.getSizeHint();
var O=this.__pV;
var K=O.width;
var N=O.height;
var Q=O.left;
var top=O.top;
var P;

if((L&this.RESIZE_TOP)||(L&this.RESIZE_BOTTOM)){P=e.getDocumentTop()-this.__pU;

if(L&this.RESIZE_TOP){N-=P;
}else{N+=P;
}
if(N<M.minHeight){N=M.minHeight;
}else if(N>M.maxHeight){N=M.maxHeight;
}
if(L&this.RESIZE_TOP){top+=O.height-N;
}}
if((L&this.RESIZE_LEFT)||(L&this.RESIZE_RIGHT)){P=e.getDocumentLeft()-this.__pT;

if(L&this.RESIZE_LEFT){K-=P;
}else{K+=P;
}
if(K<M.minWidth){K=M.minWidth;
}else if(K>M.maxWidth){K=M.maxWidth;
}
if(L&this.RESIZE_LEFT){Q+=O.width-K;
}}return {viewportLeft:Q,viewportTop:top,parentLeft:O.bounds.left+Q-O.left,parentTop:O.bounds.top+top-O.top,width:K,height:N};
},__qa:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__qb:function(e){var C=this.getContentLocation();
var A=this.getResizeSensitivity();
var E=e.getDocumentLeft();
var D=e.getDocumentTop();
var B=0;

if(this.getResizableTop()&&Math.abs(C.top-D)<A){B+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(C.bottom-D)<A){B+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(C.left-E)<A){B+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(C.right-E)<A){B+=this.RESIZE_RIGHT;
}this.__pS=B;
},__qc:function(e){if(!this.__pS){return;
}this.addState(j);
this.__pT=e.getDocumentLeft();
this.__pU=e.getDocumentTop();
var location=this.getContainerLocation();
var G=this.getBounds();
this.__pV={top:location.top,left:location.left,width:G.width,height:G.height,bounds:qx.lang.Object.clone(G)};
if(this.getUseResizeFrame()){this.__pX();
}this.capture();
e.stop();
},__qd:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this.__pW().exclude();
}var F=this.__pY(e);
this.setWidth(F.width);
this.setHeight(F.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:F.parentLeft,top:F.parentTop});
}this.__pS=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__qe:function(e){if(!this.__pS){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this.__pW().exclude();
}},__qf:function(e){if(this.hasState(j)){var U=this.__pY(e);
if(this.getUseResizeFrame()){var S=this.__pW();
S.setUserBounds(U.viewportLeft,U.viewportTop,U.width,U.height);
}else{this.setWidth(U.width);
this.setHeight(U.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:U.parentLeft,top:U.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)){this.__qb(e);
var V=this.__pS;
var T=this.getApplicationRoot();

if(V){var R=this.__qa[V];
this.setCursor(R);
T.setGlobalCursor(R);
}else if(this.getCursor()){this.resetCursor();
T.resetGlobalCursor();
}}},__qg:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__pR!=null&&!qx.core.ObjectRegistry.inShutDown){this.__pR.destroy();
this.__pR=null;
}}});
})();
(function(){var w="move",v="Boolean",u="mouseup",t="mousedown",s="losecapture",r="__qh",q="qx.ui.core.MMovable",p="__qi",o="mousemove",n="maximized",m="move-frame";
qx.Mixin.define(q,{properties:{movable:{check:v,init:true},useMoveFrame:{check:v,init:false}},members:{__qh:null,__qi:null,__qj:null,__qk:null,__ql:null,__qm:null,__qn:null,__qo:false,__qp:null,__qq:0,_activateMoveHandle:function(z){if(this.__qh){throw new Error("The move handle could not be redefined!");
}this.__qh=z;
z.addListener(t,this._onMoveMouseDown,this);
z.addListener(u,this._onMoveMouseUp,this);
z.addListener(o,this._onMoveMouseMove,this);
z.addListener(s,this.__qu,this);
},__qr:function(){var g=this.__qi;

if(!g){g=this.__qi=new qx.ui.core.Widget();
g.setAppearance(m);
g.exclude();
qx.core.Init.getApplication().getRoot().add(g);
}return g;
},__qs:function(){var location=this.getContainerLocation();
var y=this.getBounds();
var x=this.__qr();
x.setUserBounds(location.left,location.top,y.width,y.height);
x.show();
x.setZIndex(this.getZIndex()+1);
},__qt:function(e){var i=this.__qj;
var l=Math.max(i.left,Math.min(i.right,e.getDocumentLeft()));
var k=Math.max(i.top,Math.min(i.bottom,e.getDocumentTop()));
var h=this.__qk+l;
var j=this.__ql+k;
return {viewportLeft:h,viewportTop:j,parentLeft:h-this.__qm,parentTop:j-this.__qn};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(n)){return;
}var parent=this.getLayoutParent();
var b=parent.getContentLocation();
var c=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__qo=true;
this.__qp=parent.getBlockerColor();
this.__qq=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__qj={left:b.left,top:b.top,right:b.left+c.width,bottom:b.top+c.height};
var a=this.getContainerLocation();
this.__qm=b.left;
this.__qn=b.top;
this.__qk=a.left-e.getDocumentLeft();
this.__ql=a.top-e.getDocumentTop();
this.addState(w);
this.__qh.capture();
if(this.getUseMoveFrame()){this.__qs();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(w)){return;
}var d=this.__qt(e);

if(this.getUseMoveFrame()){this.__qr().setDomPosition(d.viewportLeft,d.viewportTop);
}else{this.setDomPosition(d.parentLeft,d.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(w)){return;
}this.removeState(w);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__qo){parent.unblockContent();
parent.setBlockerColor(this.__qp);
parent.setBlockerOpacity(this.__qq);
this.__qp=null;
this.__qq=0;
}}this.__qh.releaseCapture();
var f=this.__qt(e);
this.setLayoutProperties({left:f.parentLeft,top:f.parentTop});
if(this.getUseMoveFrame()){this.__qr().exclude();
}e.stopPropagation();
},__qu:function(e){if(!this.hasState(w)){return;
}this.removeState(w);
if(this.getUseMoveFrame()){this.__qr().exclude();
}}},destruct:function(){this._disposeObjects(p,r);
this.__qj=null;
}});
})();
(function(){var b="qx.ui.window.IWindowManager";
qx.Interface.define(b,{members:{setDesktop:function(f){this.assertInterface(f,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(a){this.assertInstance(a,qx.ui.window.Window);
},sendToBack:function(e){this.assertInstance(e,qx.ui.window.Window);
}}});
})();
(function(){var d="qx.ui.window.Manager",c="__qv";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__qv:null,setDesktop:function(h){this.__qv=h;
this.updateStack();
},getDesktop:function(){return this.__qv;
},changeActiveWindow:function(a,b){if(a){this.bringToFront(a);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__qv.forceUnblockContent();
var k=this.__qv.getWindows();
var o=this._minZIndex-1;
var n=false;
var m,j=null;

for(var i=0,l=k.length;i<l;i++){m=k[i];

if(!m.isVisible()){continue;
}o+=2;
m.setZIndex(o);
if(m.getModal()){this.__qv.blockContent(o-1);
}n=n||m.isActive();
j=m;
}
if(!n){this.__qv.setActiveWindow(j);
}},bringToFront:function(e){var f=this.__qv.getWindows();
var g=qx.lang.Array.remove(f,e);

if(g){f.push(e);
this.updateStack();
}},sendToBack:function(p){var q=this.__qv.getWindows();
var r=qx.lang.Array.remove(q,p);

if(r){q.unshift(p);
this.updateStack();
}}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var p="Boolean",o="qx.event.type.Event",n="captionbar",m="maximize-button",l="_applyCaptionBarChange",k="restore-button",j="minimize-button",i="close-button",h="maximized",g="execute",W="pane",V="title",U="icon",T="statusbar-text",S="statusbar",R="normal",Q="String",P="active",O="beforeClose",N="beforeMinimize",w="mousedown",x="changeStatus",u="changeIcon",v="excluded",s="_applyCaption",t="_applyActive",q="beforeRestore",r="minimize",y="dblclick",z="changeModal",F="_applyShowStatusbar",E="_applyStatus",H="qx.ui.window.Window",G="changeCaption",J="_applyIcon",I="focusout",B="beforeMaximize",M="maximize",L="restore",K="window",A="close",C="changeActive",D="minimized";
qx.Class.define(H,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(X,Y){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(n);
this._createChildControl(W);
if(Y!=null){this.setIcon(Y);
}
if(X!=null){this.setCaption(X);
}this._updateCaptionBar();
this.addListener(w,this._onWindowMouseDown,this,true);
this.addListener(I,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":o,"close":o,"beforeMinimize":o,"minimize":o,"beforeMaximize":o,"maximize":o,"beforeRestore":o,"restore":o},properties:{appearance:{refine:true,init:K},visibility:{refine:true,init:v},focusable:{refine:true,init:true},active:{check:p,init:false,apply:t,event:C},modal:{check:p,init:false,event:z},caption:{apply:s,event:G,nullable:true},icon:{check:Q,nullable:true,apply:J,event:u,themeable:true},status:{check:Q,nullable:true,apply:E,event:x},showClose:{check:p,init:true,apply:l,themeable:true},showMaximize:{check:p,init:true,apply:l,themeable:true},showMinimize:{check:p,init:true,apply:l,themeable:true},allowClose:{check:p,init:true,apply:l},allowMaximize:{check:p,init:true,apply:l},allowMinimize:{check:p,init:true,apply:l},showStatusbar:{check:p,init:false,apply:F}},members:{__qw:null,__qx:null,getChildrenContainer:function(){return this.getChildControl(W);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(bl){var bm;

switch(bl){case S:bm=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bm);
bm.add(this.getChildControl(T));
break;
case T:bm=new qx.ui.basic.Label();
bm.setValue(this.getStatus());
break;
case W:bm=new qx.ui.container.Composite();
this._add(bm,{flex:1});
break;
case n:var bo=new qx.ui.layout.Grid();
bo.setRowFlex(0,1);
bo.setColumnFlex(1,1);
bm=new qx.ui.container.Composite(bo);
this._add(bm);
bm.addListener(y,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bm);
break;
case U:bm=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(n).add(bm,{row:0,column:0});
break;
case V:bm=new qx.ui.basic.Label(this.getCaption());
bm.setWidth(0);
bm.setAllowGrowX(true);
var bn=this.getChildControl(n);
bn.add(bm,{row:0,column:1});
break;
case j:bm=new qx.ui.form.Button();
bm.setFocusable(false);
bm.addListener(g,this._onMinimizeButtonClick,this);
this.getChildControl(n).add(bm,{row:0,column:2});
break;
case k:bm=new qx.ui.form.Button();
bm.setFocusable(false);
bm.addListener(g,this._onRestoreButtonClick,this);
this.getChildControl(n).add(bm,{row:0,column:3});
break;
case m:bm=new qx.ui.form.Button();
bm.setFocusable(false);
bm.addListener(g,this._onMaximizeButtonClick,this);
this.getChildControl(n).add(bm,{row:0,column:4});
break;
case i:bm=new qx.ui.form.Button();
bm.setFocusable(false);
bm.addListener(g,this._onCloseButtonClick,this);
this.getChildControl(n).add(bm,{row:0,column:6});
break;
}return bm||arguments.callee.base.call(this,bl);
},_updateCaptionBar:function(){var bc;

if(this.getIcon()){this._showChildControl(U);
}else{this._excludeChildControl(U);
}
if(this.getCaption()){this._showChildControl(V);
}else{this._excludeChildControl(V);
}
if(this.getShowMinimize()){this._showChildControl(j);
bc=this.getChildControl(j);
this.getAllowMinimize()?bc.resetEnabled():bc.setEnabled(false);
}else{this._excludeChildControl(j);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(k);
this._excludeChildControl(m);
}else{this._showChildControl(m);
this._excludeChildControl(k);
}bc=this.getChildControl(m);
this.getAllowMaximize()?bc.resetEnabled():bc.setEnabled(false);
}else{this._excludeChildControl(m);
this._excludeChildControl(k);
}
if(this.getShowClose()){this._showChildControl(i);
bc=this.getChildControl(i);
this.getAllowClose()?bc.resetEnabled():bc.setEnabled(false);
}else{this._excludeChildControl(i);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(O,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(A);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var d=parent.getBounds();

if(d){var f=this.getSizeHint();
var c=Math.round((d.width-f.width)/2);
var top=Math.round((d.height-f.height)/2);

if(top<0){top=0;
}this.moveTo(c,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(B,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bf=this.getLayoutProperties();
this.__qx=bf.left===undefined?0:bf.left;
this.__qw=bf.top===undefined?0:bf.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(h);
this._updateCaptionBar();
this.fireEvent(M);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(N,qx.event.type.Event,[false,true])){var bp=this.getLayoutProperties();
this.__qx=bp.left===undefined?0:bp.left;
this.__qw=bp.top===undefined?0:bp.top;
this.removeState(h);
this.hide();
this.fireEvent(r);
}},restore:function(){if(this.getMode()===R){return;
}
if(this.fireNonBubblingEvent(q,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bu=this.__qx;
var top=this.__qw;
this.setLayoutProperties({edge:null,left:bu,top:top});
this.removeState(h);
this._updateCaptionBar();
this.fireEvent(L);
}},moveTo:function(bq,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bq,top:top});
},isMaximized:function(){return this.hasState(h);
},getMode:function(){if(!this.isVisible()){return D;
}else{if(this.isMaximized()){return h;
}else{return R;
}}},_applyActive:function(a,b){if(b){this.removeState(P);
}else{this.addState(P);
}},_getContentPaddingTarget:function(){return this.getChildControl(W);
},_applyShowStatusbar:function(bj,bk){if(bj){this._showChildControl(S);
}else{this._excludeChildControl(S);
}},_applyCaptionBarChange:function(ba,bb){this._updateCaptionBar();
},_applyStatus:function(bg,bh){var bi=this.getChildControl(T,true);

if(bi){bi.setValue(bg);
}},_applyCaption:function(br,bs){this.getChildControl(V).setValue(br);
},_applyIcon:function(bd,be){this.getChildControl(U).setSource(bd);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bt=e.getRelatedTarget();

if(bt!=null&&!qx.ui.core.Widget.contains(this,bt)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(j).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(k).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(m).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(i).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var u="Number",t="qx.event.type.Event",s="_applyFirstColumnX",r="Integer",q="qx.ui.table.pane.Model",p="_applyMaxColumnCount",o="visibilityChangedPre";
qx.Class.define(q,{extend:qx.core.Object,construct:function(i){arguments.callee.base.call(this);
i.addListener(o,this._onColVisibilityChanged,this);
this.__qy=i;
},events:{"modelChanged":t},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:r,init:0,apply:s},maxColumnCount:{check:u,init:-1,apply:p}},members:{__qz:null,__qy:null,_applyFirstColumnX:function(a,b){this.__qz=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(c,d){this.__qz=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){this.__qy=n;
this.__qz=null;
},_onColVisibilityChanged:function(m){this.__qz=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__qz==null){var y=this.getFirstColumnX();
var A=this.getMaxColumnCount();
var z=this.__qy.getVisibleColumnCount();

if(A==-1||(y+A)>z){this.__qz=z-y;
}else{this.__qz=A;
}}return this.__qz;
},getColumnAtX:function(v){var w=this.getFirstColumnX();
return this.__qy.getVisibleColumnAtX(w+v);
},getX:function(B){var C=this.getFirstColumnX();
var D=this.getMaxColumnCount();
var x=this.__qy.getVisibleX(B)-C;

if(x>=0&&(D==-1||x<D)){return x;
}else{return -1;
}},getColumnLeft:function(e){var h=0;
var g=this.getColumnCount();

for(var x=0;x<g;x++){var f=this.getColumnAtX(x);

if(f==e){return h;
}h+=this.__qy.getColumnWidth(f);
}return -1;
},getTotalWidth:function(){var j=0;
var k=this.getColumnCount();

for(var x=0;x<k;x++){var l=this.getColumnAtX(x);
j+=this.__qy.getColumnWidth(l);
}return j;
}},destruct:function(){this.__qy=null;
}});
})();
(function(){var G="",F="!",E="'!",D="'",C="Expected '",B="' (rgb(",A=",",z=")), but found value '",y="Event (",x="Expected value to be the CSS color '",bM="' but found ",bL="The value '",bK="qx.core.Object",bJ="Expected value to be an array but found ",bI=") was fired.",bH="Expected value to be an integer >= 0 but found ",bG="' to be not equal with '",bF="' to '",bE="qx.ui.core.Widget",bD="Called assertTrue with '",N="Expected value to be a map but found ",O="The function did not raise an exception!",L="Expected value to be undefined but found ",M="Expected value to be a DOM element but found  '",J="Expected value to be a regular expression but found ",K="' to implement the interface '",H="Expected value to be null but found ",I="Invalid argument 'type'",V="Called assert with 'false'",W="Assertion error! ",bj="Expected value to be a string but found ",bf="null",br="' but found '",bm="' must must be a key of the map '",bz="The String '",bw="Expected value not to be undefined but found ",bb="qx.util.ColorUtil",bC=": ",bB="The raised exception does not have the expected type! ",bA=") not fired.",ba="qx.core.Assert",bd="Expected value to be typeof object but found ",be="' (identical) but found '",bh="' must have any of the values defined in the array '",bk="Expected value to be a number but found ",bn="Called assertFalse with '",bt="]",by="Expected value to be a qooxdoo object but found ",P="' arguments.",Q="Expected value not to be null but found ",bc="Array[",bq="' does not match the regular expression '",bp="' to be not identical with '",bo="' arguments but found '",bv="', which cannot be converted to a CSS color!",bu="Expected object '",bl="qx.core.AssertionError",bs="Expected value to be a boolean but found ",u="))!",bx="Expected value to be a qooxdoo widget but found ",R="Expected value '%1' to be in the range '%2'..'%3'!",S="Expected value to be typeof '",bg="Expected value to be typeof function but found ",v="Expected value to be an integer but found ",w="Called fail().",Y="The parameter 're' must be a string or a regular expression.",T="Expected value to be a number >= 0 but found ",U="Expected value to be instanceof '",X="Wrong number of arguments given. Expected '",bi="object";
qx.Bootstrap.define(ba,{statics:{__bl:true,__bm:function(bN,bO){var bP=G;

for(var i=1,l=arguments.length;i<l;i++){bP=bP+this.__bn(arguments[i]);
}var bR=W+bN+bC+bP;

if(this.__bl){qx.log.Logger.error(bR);
}
if(qx.Class.isDefined(bl)){var bQ=new qx.core.AssertionError(bN,bP);

if(this.__bl){qx.log.Logger.error("Stack trace: \n"+bQ.getStackTrace());
}throw bQ;
}else{throw new Error(bR);
}},__bn:function(s){var t;

if(s===null){t=bf;
}else if(qx.lang.Type.isArray(s)&&s.length>10){t=bc+s.length+bt;
}else if((s instanceof Object)&&(s.toString==null)){t=qx.util.Json.stringify(s);
}else{try{t=s.toString();
}catch(e){t=G;
}}return t;
},assert:function(cw,cx){cw==true||this.__bm(cx||G,V);
},fail:function(cB){this.__bm(cB||G,w);
},assertTrue:function(m,n){(m===true)||this.__bm(n||G,bD,m,D);
},assertFalse:function(cK,cL){(cK===false)||this.__bm(cL||G,bn,cK,D);
},assertEquals:function(a,b,c){a==b||this.__bm(c||G,C,a,br,b,E);
},assertNotEquals:function(de,df,dg){de!=df||this.__bm(dg||G,C,de,bG,df,E);
},assertIdentical:function(dU,dV,dW){dU===dV||this.__bm(dW||G,C,dU,be,dV,E);
},assertNotIdentical:function(o,p,q){o!==p||this.__bm(q||G,C,o,bp,p,E);
},assertNotUndefined:function(cY,da){cY!==undefined||this.__bm(da||G,bw,cY,F);
},assertUndefined:function(cj,ck){cj===undefined||this.__bm(ck||G,L,cj,F);
},assertNotNull:function(bV,bW){bV!==null||this.__bm(bW||G,Q,bV,F);
},assertNull:function(cl,cm){cl===null||this.__bm(cm||G,H,cl,F);
},assertJsonEquals:function(cy,cz,cA){this.assertEquals(qx.util.Json.stringify(cy),qx.util.Json.stringify(cz),cA);
},assertMatch:function(cE,cF,cG){this.assertString(cE);
this.assert(qx.lang.Type.isRegExp(cF)||qx.lang.Type.isString(cF),Y);
cE.search(cF)>=0||this.__bm(cG||G,bz,cE,bq,cF.toString(),E);
},assertArgumentsCount:function(dF,dG,dH,dI){var dJ=dF.length;
(dJ>=dG&&dJ<=dH)||this.__bm(dI||G,X,dG,bF,dH,bo,arguments.length,P);
},assertEventFired:function(cc,event,cd,ce,cf){var ch=false;
var cg=function(e){if(ce){ce.call(cc,e);
}ch=true;
};
var ci=cc.addListener(event,cg,cc);
cd.call();
ch===true||this.__bm(cf||G,y,event,bA);
cc.removeListenerById(ci);
},assertEventNotFired:function(d,event,f,g){var j=false;
var h=function(e){j=true;
};
var k=d.addListener(event,h,d);
f.call();
j===false||this.__bm(g||G,y,event,bI);
d.removeListenerById(k);
},assertException:function(dA,dB,dC,dD){var dB=dB||Error;
var dE;

try{this.__bl=false;
dA();
}catch(cO){dE=cO;
}finally{this.__bl=true;
}
if(dE==null){this.__bm(dD||G,O);
}dE instanceof dB||this.__bm(dD||G,bB,dB);

if(dC){this.assertMatch(dE.toString(),dC,dD);
}},assertInArray:function(dr,ds,dt){ds.indexOf(dr)!==-1||this.__bm(dt||G,bL,dr,bh,ds,D);
},assertArrayEquals:function(cH,cI,cJ){this.assertArray(cH,cJ);
this.assertArray(cI,cJ);
this.assertEquals(cH.length,cI.length,cJ);

for(var i=0;i<cH.length;i++){this.assertIdentical(cH[i],cI[i],cJ);
}},assertKeyInMap:function(db,dc,dd){dc[db]!==undefined||this.__bm(dd||G,bL,db,bm,dc,D);
},assertFunction:function(dy,dz){qx.lang.Type.isFunction(dy)||this.__bm(dz||G,bg,dy,F);
},assertString:function(dw,dx){qx.lang.Type.isString(dw)||this.__bm(dx||G,bj,dw,F);
},assertBoolean:function(bX,bY){qx.lang.Type.isBoolean(bX)||this.__bm(bY||G,bs,bX,F);
},assertNumber:function(dl,dm){(qx.lang.Type.isNumber(dl)&&isFinite(dl))||this.__bm(dm||G,bk,dl,F);
},assertPositiveNumber:function(ca,cb){(qx.lang.Type.isNumber(ca)&&isFinite(ca)&&ca>=0)||this.__bm(cb||G,T,ca,F);
},assertInteger:function(dS,dT){(qx.lang.Type.isNumber(dS)&&isFinite(dS)&&dS%1===0)||this.__bm(dT||G,v,dS,F);
},assertPositiveInteger:function(ct,cu){var cv=(qx.lang.Type.isNumber(ct)&&isFinite(ct)&&ct%1===0&&ct>=0);
cv||this.__bm(cu||G,bH,ct,F);
},assertInRange:function(dM,dN,dO,dP){(dM>=dN&&dM<=dO)||this.__bm(dP||G,qx.lang.String.format(R,[dM,dN,dO]));
},assertObject:function(cq,cr){var cs=cq!==null&&(qx.lang.Type.isObject(cq)||typeof cq===bi);
cs||this.__bm(cr||G,bd,(cq),F);
},assertArray:function(dQ,dR){qx.lang.Type.isArray(dQ)||this.__bm(dR||G,bJ,dQ,F);
},assertMap:function(cC,cD){qx.lang.Type.isObject(cC)||this.__bm(cD||G,N,cC,F);
},assertRegExp:function(cW,cX){qx.lang.Type.isRegExp(cW)||this.__bm(cX||G,J,cW,F);
},assertType:function(bS,bT,bU){this.assertString(bT,I);
typeof (bS)===bT||this.__bm(bU||G,S,bT,bM,bS,F);
},assertInstance:function(dh,di,dj){var dk=di.classname||di+G;
dh instanceof di||this.__bm(dj||G,U,dk,bM,dh,F);
},assertInterface:function(dn,dp,dq){qx.Class.implementsInterface(dn,dp)||this.__bm(dq||G,bu,dn,K,dp,E);
},assertCssColor:function(cP,cQ,cR){var cS=qx.Class.getByName(bb);

if(!cS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var cU=cS.stringToRgb(cP);

try{var cT=cS.stringToRgb(cQ);
}catch(r){this.__bm(cR||G,x,cP,B,cU.join(A),z,cQ,bv);
}var cV=cU[0]==cT[0]&&cU[1]==cT[1]&&cU[2]==cT[2];
cV||this.__bm(cR||G,x,cU,B,cU.join(A),z,cQ,B,cT.join(A),u);
},assertElement:function(du,dv){!!(du&&du.nodeType===1)||this.__bm(dv||G,M,du,E);
},assertQxObject:function(dK,dL){this.__bo(dK,bK)||this.__bm(dL||G,by,dK,F);
},assertQxWidget:function(cM,cN){this.__bo(cM,bE)||this.__bm(cN||G,bx,cM,F);
},__bo:function(cn,co){if(!cn){return false;
}var cp=cn.constructor;

while(cp){if(cp.classname===co){return true;
}cp=cp.superclass;
}return false;
}}});
})();
(function(){var F=",",E="",D="string",C="null",B='"',A="qx.jsonDebugging",z='\\u00',y="new Date(Date.UTC(",x='\\\\',w="__cF",bc='\\f',bb="__cP",ba='\\"',Y="))",X="}",W='(',V=":",U="{",T='\\r',S="__cH",M='\\t',N="__cG",K="]",L="[",I="Use 'parse' instead!",J="__cQ",G="qx.jsonEncodeUndefined",H='\\b',O="qx.util.Json",P=')',R='\\n',Q="__cI";
qx.Class.define(O,{statics:{__cD:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__cE:{"function":w,"boolean":N,"number":S,"string":Q,"object":bb,"undefined":J},__cF:function(n,o){return String(n);
},__cG:function(bz,bA){return String(bz);
},__cH:function(bd,be){return isFinite(bd)?String(bd):C;
},__cI:function(c,d){var e;

if(/["\\\x00-\x1f]/.test(c)){e=c.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__cK);
}else{e=c;
}return B+e+B;
},__cJ:{'\b':H,'\t':M,'\n':R,'\f':bc,'\r':T,'"':ba,'\\':x},__cK:function(a,b){var f=qx.util.Json.__cJ[b];

if(f){return f;
}f=b.charCodeAt();
return z+Math.floor(f/16).toString(16)+(f%16).toString(16);
},__cL:function(bf,bg){var bi=[],bl=true,bk,bh;
var bj=qx.util.Json.__cS;
bi.push(L);

if(bj){qx.util.Json.__cM+=qx.util.Json.BEAUTIFYING_INDENT;
bi.push(qx.util.Json.__cM);
}
for(var i=0,l=bf.length;i<l;i++){bh=bf[i];
bk=this.__cE[typeof bh];

if(bk){bh=this[bk](bh,i+E);

if(typeof bh==D){if(!bl){bi.push(F);

if(bj){bi.push(qx.util.Json.__cM);
}}bi.push(bh);
bl=false;
}}}
if(bj){qx.util.Json.__cM=qx.util.Json.__cM.substring(0,qx.util.Json.__cM.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bi.push(qx.util.Json.__cM);
}bi.push(K);
return bi.join(E);
},__cN:function(j,k){var m=j.getUTCFullYear()+F+j.getUTCMonth()+F+j.getUTCDate()+F+j.getUTCHours()+F+j.getUTCMinutes()+F+j.getUTCSeconds()+F+j.getUTCMilliseconds();
return y+m+Y;
},__cO:function(bs,bt){var bw=[],by=true,bv,bu;
var bx=qx.util.Json.__cS;
bw.push(U);

if(bx){qx.util.Json.__cM+=qx.util.Json.BEAUTIFYING_INDENT;
bw.push(qx.util.Json.__cM);
}
for(var bt in bs){bu=bs[bt];
bv=this.__cE[typeof bu];

if(bv){bu=this[bv](bu,bt);

if(typeof bu==D){if(!by){bw.push(F);

if(bx){bw.push(qx.util.Json.__cM);
}}bw.push(this.__cI(bt),V,bu);
by=false;
}}}
if(bx){qx.util.Json.__cM=qx.util.Json.__cM.substring(0,qx.util.Json.__cM.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bw.push(qx.util.Json.__cM);
}bw.push(X);
return bw.join(E);
},__cP:function(s,t){if(s){if(qx.lang.Type.isFunction(s.toJSON)&&s.toJSON!==this.__cD){return this.__cR(s.toJSON(t),t);
}else if(qx.lang.Type.isDate(s)){return this.__cN(s,t);
}else if(qx.lang.Type.isArray(s)){return this.__cL(s,t);
}else if(qx.lang.Type.isObject(s)){return this.__cO(s,t);
}return E;
}return C;
},__cQ:function(q,r){if(qx.core.Setting.get(G)){return C;
}},__cR:function(u,v){return this[this.__cE[typeof u]](u,v);
},stringify:function(bp,bq){this.__cS=bq;
this.__cM=this.BEAUTIFYING_LINE_END;
var br=this.__cR(bp,E);

if(typeof br!=D){br=null;
}if(qx.core.Setting.get(A)){qx.log.Logger.debug(this,"JSON request: "+br);
}return br;
},parse:function(bm,bn){if(bn===undefined){bn=true;
}
if(qx.core.Setting.get(A)){qx.log.Logger.debug(this,"JSON response: "+bm);
}
if(bn){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bm.replace(/"(\\.|[^"\\])*"/g,E))){throw new Error("Could not parse JSON string!");
}}
try{var bo=(bm&&bm.length>0)?eval(W+bm+P):null;
return bo;
}catch(g){throw new Error("Could not evaluate JSON string: "+g.message);
}},parseQx:function(h){qx.log.Logger.deprecatedMethodWarning(arguments.callee,I);
return qx.util.Json.parse(h,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(p){p.__cD=Date.prototype.toJSON;
}});
})();
(function(){var A="px",z=".qooxdoo-table-cell-icon {",y="abstract",x="",w="qx.ui.table.cellrenderer.AbstractImage",v=" qooxdoo-table-cell-icon",u="<div></div>",t="'",s="no-repeat",r="}",l="  text-align:center;",q="inline-block",o="static",k="top",j="  padding-top:1px;",n="title='",m="string",p="-moz-inline-box";
qx.Class.define(w,{extend:qx.ui.table.cellrenderer.Abstract,type:y,construct:function(){arguments.callee.base.call(this);
var a=arguments.callee.self;

if(!a.stylesheet){a.stylesheet=qx.bom.Stylesheet.createElement(z+l+j+r);
}},members:{__qA:16,__qB:16,_insetY:2,__qC:null,_identifyImage:function(H){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(c){var d=this._identifyImage(c);
if(d==null||typeof c==m){d={url:d,tooltip:null};
}
if(c.width&&c.height){var e={width:c.imageWidth,height:c.imageHeight};
}else{e=this.__qD(d.url);
}d.width=e.width;
d.height=e.height;
return d;
},__qD:function(B){var E=qx.util.ResourceManager.getInstance();
var D=qx.io.ImageLoader;
var C,F;
if(E.has(B)){C=E.getImageWidth(B);
F=E.getImageHeight(B);
}else if(D.isLoaded(B)){C=D.getWidth(B);
F=D.getHeight(B);
}else{C=this.__qA;
F=this.__qB;
}return {width:C,height:F};
},createDataCellHtml:function(h,i){this.__qC=this._getImageInfos(h);
return arguments.callee.base.call(this,h,i);
},_getCellClass:function(G){return arguments.callee.base.call(this)+v;
},_getContentHtml:function(b){var content=u;
if(this.__qC.url){var content=qx.bom.element.Decoration.create(this.__qC.url,s,{width:this.__qC.width+A,height:this.__qC.height+A,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?p:q,verticalAlign:k,position:o});
}return content;
},_getCellAttributes:function(f){var g=this.__qC.tooltip;

if(g){return n+g+t;
}else{return x;
}}},destruct:function(){this.__qC=null;
}});
})();
(function(){var l="String",k="_applyIconTrue",j="decoration/table/boolean-true.png",i="qx.ui.table.cellrenderer.Boolean",h=";padding-top:4px;",g="decoration/table/boolean-false.png",f="_applyIconFalse";
qx.Class.define(i,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){arguments.callee.base.call(this);
this.__qE=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:l,init:j,apply:k},iconFalse:{check:l,init:g,apply:f}},members:{__qF:null,__qG:false,__qE:null,_applyIconTrue:function(e){this.__qF=this.__qE.resolve(e);
},_applyIconFalse:function(d){this.__qG=this.__qE.resolve(d);
},_insetY:5,_getCellStyle:function(a){return arguments.callee.base.call(this,a)+h;
},_identifyImage:function(b){var c={imageWidth:11,imageHeight:11};

switch(b.value){case true:c.url=this.__qF;
break;
case false:c.url=this.__qG;
break;
default:c.url=null;
break;
}return c;
}},destruct:function(){this.__qE=null;
}});
})();
(function(){var c="",b="qx.ui.table.headerrenderer.Icon",a="String";
qx.Class.define(b,{extend:qx.ui.table.headerrenderer.Default,construct:function(f,g){arguments.callee.base.call(this);

if(f==null){f=c;
}this.setIconUrl(f);

if(g){this.setToolTip(g);
}},properties:{iconUrl:{check:a,init:c}},members:{updateHeaderCell:function(d,e){arguments.callee.base.call(this,d,e);
e.setIcon(this.getIconUrl());
}}});
})();
(function(){var i="legend",h="frame",g="middle",f="top",d="resize",c="qx.ui.groupbox.GroupBox",b="groupbox",a="_applyLegendPosition";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(p,q){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(h);
this._createChildControl(i);
if(p!=null){this.setLegend(p);
}
if(q!=null){this.setIcon(q);
}},properties:{appearance:{refine:true,init:b},legendPosition:{check:[f,g],init:g,apply:a,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(m){var n;

switch(m){case h:n=new qx.ui.container.Composite();
this._add(n,{left:0,top:6,right:0,bottom:0});
break;
case i:n=new qx.ui.basic.Atom();
n.addListener(d,this._repositionFrame,this);
this._add(n);
break;
}return n||arguments.callee.base.call(this,m);
},_getContentPaddingTarget:function(){return this.getChildControl(h);
},_applyLegendPosition:function(e){if(this.getChildControl(i).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var k=this.getChildControl(i);
var j=this.getChildControl(h);
var l=k.getBounds().height;
if(this.getLegendPosition()==g){j.setLayoutProperties({"top":Math.round(l/2)});
}else if(this.getLegendPosition()==f){j.setLayoutProperties({"top":l});
}},getChildrenContainer:function(){return this.getChildControl(h);
},setLegend:function(r){var s=this.getChildControl(i);

if(r!==null){s.setLabel(r);
s.show();
}else{s.exclude();
}},getLegend:function(){return this.getChildControl(i).getLabel();
},setIcon:function(o){this.getChildControl(i).setIcon(o);
},getIcon:function(){this.getChildControl(i).getIcon();
}}});
})();
(function(){var c="password",b="qx.ui.form.PasswordField",a="input";
qx.Class.define(b,{extend:qx.ui.form.TextField,members:{_createInputElement:function(){var d=new qx.html.Input(c);
d.addListener(a,this._onHtmlInput,this);
return d;
}}});
})();
(function(){var d="textarea",c="qx.ui.form.TextArea",b="_applyWrap",a="Boolean";
qx.Class.define(c,{extend:qx.ui.form.AbstractField,construct:function(g){arguments.callee.base.call(this,g);
this.initWrap();
},properties:{wrap:{check:a,init:true,apply:b},appearance:{refine:true,init:d}},members:{_createInputElement:function(){return new qx.html.Input(d);
},_applyWrap:function(e,f){this.getContentElement().setWrap(e);
},_getContentHint:function(){var h=arguments.callee.base.call(this);
h.height=h.height*4;
h.width=this._getTextSize().width*20;
return h;
}}});
})();
(function(){var v="popup",u="list",t="",s="mousewheel",r="resize",q="Function",p="blur",o="abstract",n="keypress",m="Number",f="changeSelection",l="PageUp",i="_applyMaxListHeight",c="PageDown",b="mouseup",h="Escape",g="changeVisibility",j="one",a="middle",k="qx.ui.form.AbstractSelectBox",d="mousedown";
qx.Class.define(k,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:o,construct:function(){arguments.callee.base.call(this);
var I=new qx.ui.layout.HBox();
this._setLayout(I);
I.setAlignY(a);
this.addListener(n,this._onKeyPress);
this.addListener(p,this._onBlur,this);
var H=qx.core.Init.getApplication().getRoot();
H.addListener(s,this._onMousewheel,this,true);
this.addListener(r,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:m,apply:i,nullable:true,init:200},format:{check:q,init:function(z){return this._defaultFormat(z);
},nullable:true}},members:{_createChildControlImpl:function(D){var E;

switch(D){case u:E=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:j,quickSelection:true});
E.addListener(f,this._onListChangeSelection,this);
E.addListener(d,this._onListMouseDown,this);
break;
case v:E=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
E.setAutoHide(false);
E.setKeepActive(true);
E.addListener(b,this.close,this);
E.add(this.getChildControl(u));
E.addListener(g,this._onPopupChangeVisibility,this);
break;
}return E||arguments.callee.base.call(this,D);
},_applyMaxListHeight:function(w,x){this.getChildControl(u).setMaxHeight(w);
},getChildrenContainer:function(){return this.getChildControl(u);
},open:function(){var C=this.getChildControl(v);
C.placeToWidget(this,true);
C.show();
},close:function(){this.getChildControl(v).hide();
},toggle:function(){var J=this.getChildControl(v).isVisible();

if(J){this.close();
}else{this.open();
}},_defaultFormat:function(K){var L=K?K.getLabel():t;
var M=K?K.getRich():false;

if(M){L=L.replace(/<[^>]+?>/g,t);
L=qx.bom.String.unescape(L);
}return L;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var F=e.getKeyIdentifier();
var G=this.getChildControl(v);
if(G.isHidden()&&(F==c||F==l)){e.stopPropagation();
}else if(!G.isHidden()&&F==h){this.close();
e.stop();
}else{this.getChildControl(u).handleKeyPress(e);
}},_onMousewheel:function(e){var B=e.getTarget();
var A=this.getChildControl(v);

if(qx.ui.core.Widget.contains(A,B)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(v).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var y=qx.core.Init.getApplication().getRoot();

if(y){y.removeListener(s,this._onMousewheel,this,true);
}}});
})();
(function(){var Q="textfield",P="button",O="list",N="selected",M="focusout",L="inner",K="changeValue",J="popup",I="focusin",H="combobox",A="click",G="blur",D="Enter",z="quick",y="_applyPlaceholder",C="qx.ui.form.ComboBox",B="single",E="Down",x="String",F="qx.event.type.Data";
qx.Class.define(C,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){arguments.callee.base.call(this);
var w=this._createChildControl(Q);
this._createChildControl(P);
this.addListener(A,this._onClick);
this.addListener(I,function(e){w.fireNonBubblingEvent(I,qx.event.type.Focus);
},this);
this.addListener(M,function(e){w.fireNonBubblingEvent(M,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:H},placeholder:{check:x,nullable:true,apply:y}},events:{"changeValue":F},members:{__qH:null,__qI:null,_applyPlaceholder:function(m,n){this.getChildControl(Q).setPlaceholder(m);
},_createChildControlImpl:function(a){var b;

switch(a){case Q:b=new qx.ui.form.TextField();
b.setFocusable(false);
b.addState(L);
b.addListener(K,this._onTextFieldChangeValue,this);
b.addListener(G,this.close,this);
this._add(b,{flex:1});
break;
case P:b=new qx.ui.form.Button();
b.setFocusable(false);
b.setKeepActive(true);
b.addState(L);
this._add(b);
break;
case O:b=arguments.callee.base.call(this,a);
b.setSelectionMode(B);
break;
}return b||arguments.callee.base.call(this,a);
},_forwardStates:{focused:true},tabFocus:function(){var v=this.getChildControl(Q);
v.getFocusElement().focus();
v.selectAllText();
},setValue:function(k){var l=this.getChildControl(Q);

if(l.getValue()==k){return;
}l.setValue(k);
},getValue:function(){return this.getChildControl(Q).getValue();
},resetValue:function(){this.getChildControl(Q).setValue(null);
},_onKeyPress:function(e){var S=this.getChildControl(J);
var R=e.getKeyIdentifier();

if(R==E&&e.isAltPressed()){this.getChildControl(P).addState(N);
this.toggle();
e.stopPropagation();
}else if(R==D){if(S.isVisible()){this.close();
e.stop();
}}else if(S.isVisible()){arguments.callee.base.call(this,e);
}},_onClick:function(e){var u=e.getTarget();

if(u==this.getChildControl(P)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){if(this.__qH){var o=this.__qH.getLabel();

if(this.getFormat()!=null){o=this.getFormat().call(this,this.__qH);
}if(o&&o.translate){o=o.translate();
}this.setValue(o);
this.__qH=null;
}},_onListChangeSelection:function(e){var c=e.getData();

if(c.length>0){var d=this.getChildControl(O);

if(d.getSelectionContext()==z){this.__qH=c[0];
}else{var f=c[0].getLabel();

if(this.getFormat()!=null){f=this.getFormat().call(this,c[0]);
}if(f&&f.translate){f=f.translate();
}this.setValue(f);
this.__qH=null;
}}},_onPopupChangeVisibility:function(e){var h=this.getChildControl(J);

if(h.isVisible()){var i=this.getChildControl(O);
var j=this.getValue();
var g=null;

if(j){g=i.findItem(j);
}
if(g){i.setSelection([g]);
}else{i.resetSelection();
}}else{this.tabFocus();
}this.getChildControl(P).removeState(N);
},_onTextFieldChangeValue:function(e){var r=e.getData();
var q=this.getChildControl(O);

if(r!=null){var p=q.findItem(r,false);

if(p){q.setSelection([p]);
}else{q.resetSelection();
}}else{q.resetSelection();
}this.fireDataEvent(K,r,e.getOldData());
},getTextSelection:function(){return this.getChildControl(Q).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(Q).getTextSelectionLength();
},setTextSelection:function(s,t){this.getChildControl(Q).setTextSelection(s,t);
},clearTextSelection:function(){this.getChildControl(Q).clearTextSelection();
},selectAllText:function(){this.getChildControl(Q).selectAllText();
}}});
})();
(function(){var s="horizontal",r="qx.event.type.Data",q="vertical",p="",o="qx.ui.form.List",n="__qJ",m="Enter",k="one",j="addChildWidget",h="_applySpacing",E="Boolean",D="Integer",C="action",B="keyinput",A="addItem",z="removeChildWidget",y="_applyOrientation",x="single",w="keypress",v="list",t="pane",u="removeItem";
qx.Class.define(o,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(a){arguments.callee.base.call(this);
this.__qJ=new qx.ui.container.Composite();
this.__qJ.addListener(j,this._onAddChild,this);
this.__qJ.addListener(z,this._onRemoveChild,this);
this.getChildControl(t).add(this.__qJ);
if(a){this.setOrientation(s);
}else{this.initOrientation();
}this.addListener(w,this._onKeyPress);
this.addListener(B,this._onKeyInput);
this.__qK=p;
},events:{addItem:r,removeItem:r},properties:{appearance:{refine:true,init:v},focusable:{refine:true,init:true},orientation:{check:[s,q],init:q,apply:y},spacing:{check:D,init:0,apply:h,themeable:true},enableInlineFind:{check:E,init:true}},members:{__qK:null,__qL:null,__qJ:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__qJ;
},_onAddChild:function(e){this.fireDataEvent(A,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(u,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(N,O){var P=N===s;
var Q=P?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__qJ;
content.setLayout(Q);
content.setAllowGrowX(!P);
content.setAllowGrowY(P);
this._applySpacing(this.getSpacing());
},_applySpacing:function(H,I){this.__qJ.getLayout().setSpacing(H);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==m&&!e.isAltPressed()){var J=this.getSelection();

for(var i=0;i<J.length;i++){J[i].fireEvent(C);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var F=this.getSelectionMode();

if(!(F===x||F===k)){return;
}if(((new Date).valueOf()-this.__qL)>1000){this.__qK=p;
}this.__qK+=e.getChar();
var G=this.findItemByLabelFuzzy(this.__qK);
if(G){this.setSelection([G]);
}this.__qL=(new Date).valueOf();
},findItemByLabelFuzzy:function(K){K=K.toLowerCase();
var L=this.getChildren();
for(var i=0,l=L.length;i<l;i++){var M=L[i].getLabel();
if(M&&M.toLowerCase().indexOf(K)==0){return L[i];
}}return null;
},findItem:function(b,c){if(c!==false){b=b.toLowerCase();
}var d=this.getChildren();
var g;
for(var i=0,l=d.length;i<l;i++){g=d[i];
var f;

if(g.getLabel()!=null){f=g.getLabel();

if(f.translate){f=f.translate();
}
if(c!==false){f=f.toLowerCase();
}}
if(f.toString()==b.toString()){return g;
}}return null;
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="list",j="textfield",i="popup",h="Down",g="",f="Escape",d="qx.util.format.DateFormat",c="changeValue",b="Left",a="Up",w="execute",v="changeLocale",u="_applyDateFormat",t="changeVisibility",s="qx.dynlocale",r="medium",q="mouseup",p="qx.ui.form.DateField",o="datefield",n="hidden",l="on",m="Right";
qx.Class.define(p,{extend:qx.ui.form.ComboBox,implement:[qx.ui.form.IDateForm],construct:function(){arguments.callee.base.call(this);
this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
if(qx.core.Variant.isSet(s,l)){qx.locale.Manager.getInstance().addListener(v,function(){this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
},this);
}},properties:{appearance:{refine:true,init:o},dateFormat:{check:d,apply:u}},statics:{__qM:null,__qN:null,getDefaultDateFormatter:function(){var K=qx.locale.Date.getDateFormat(r).toString();

if(K==this.__qM){return this.__qN;
}
if(this.__qN){this.__qN.dispose();
}this.__qN=new qx.util.format.DateFormat(K,qx.locale.Manager.getInstance().getLocale());
this.__qM=K;
return this.__qN;
}},members:{setValue:function(H){var I=this.getChildControl(j);
I.setValue(this.getDateFormat().format(H));
var J=this.getChildControl(k);
J.setValue(H);
},getValue:function(){var L=this.getChildControl(j).getValue();
try{return this.getDateFormat().parse(L);
}catch(M){return null;
}},resetValue:function(){var O=this.getChildControl(j);
O.setValue(g);
var P=this.getChildControl(k);
P.setValue(null);
},_applyDateFormat:function(A,B){try{var D=this.getChildControl(j);
var E=D.getValue();
var C=B.parse(E);
D.setValue(A.format(C));
}catch(N){}},_createChildControlImpl:function(V){var W;

switch(V){case k:W=new qx.ui.control.DateChooser();
W.setFocusable(false);
W.setKeepFocus(true);
W.addListener(w,this._onChangeDate,this);
break;
case i:W=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
W.setAutoHide(false);
W.add(this.getChildControl(k));
W.addListener(q,this._onChangeDate,this);
W.addListener(t,this._onPopupChangeVisibility,this);
break;
}return W||arguments.callee.base.call(this,V);
},_onChangeDate:function(e){var y=this.getChildControl(j);
var z=this.getChildControl(k).getValue();
y.setValue(this.getDateFormat().format(z));
this.close();
},_onKeyPress:function(e){var F=e.getKeyIdentifier();

if(F==h&&e.isAltPressed()){this.toggle();
e.stopPropagation();
return;
}var G=this.getChildControl(i);

if(G.getVisibility()==n){return;
}if(F==f){this.close();
e.stopPropagation();
return;
}if(F===b||F===m||F===h||F===a){e.preventDefault();
}this.getChildControl(k).handleKeyPress(e);
},_onPopupChangeVisibility:function(e){var T=this.getChildControl(i);

if(T.isVisible()){var U=this.getChildControl(k);
var S=this.getValue();
U.setValue(S);
}},_onTextFieldChangeValue:function(e){var Q=this.getValue();

if(Q!=null){var R=this.getChildControl(k);
R.setValue(Q);
}this.fireDataEvent(c,this.getValue());
},isEmpty:function(){var x=this.getChildControl(j).getValue();
return x==null||x==g;
}}});
})();
(function(){var H="selected",G="click",F="last-month-button",E="default",D="next-month-button",C="otherMonth",B="month-year-label",A="last-year-button",z="navigation-bar",w="next-year-button",bF="date-pane",bE="PageUp",bD="mousedown",bC="today",bB="Integer",bA="PageDown",bz="changeLocale",by="next-month-button-tooltip",bx="last-month-button-tooltip",bw="qx.dynlocale",O="last-year-button-tooltip",P="next-year-button-tooltip",M="on",N="weekend",K="day",L="lastMonth",I="Next month",J="Escape",S="Left",T="weekday",bc="changeValue",ba="Space",bk="Down",bf="qx.ui.control.DateChooser",bs="Date",bp="Enter",V="dblclick",bv="day#",bu="Next year",bt="ww",U="_applyValue",X="Up",Y="weekday#",bb="datechooser",bd="header",bg="week",bm="lastYear",br="nextYear",Q="changeShownYear",R="week#",W="Last month",bj="Right",bi="Last year",bh="EE",bo="mouseup",bn="keypress",be="",bl="nextMonth",v="week#0",bq="changeShownMonth";
qx.Class.define(bf,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable,qx.ui.form.MForm],implement:[qx.ui.form.IExecutable,qx.ui.form.IForm,qx.ui.form.IDateForm],construct:function(s){arguments.callee.base.call(this);
var u=new qx.ui.layout.VBox();
this._setLayout(u);
this._createChildControl(z);
this._createChildControl(bF);
this.addListener(bn,this._onKeyPress);
var t=(s!=null)?s:new Date();
this.showMonth(t.getMonth(),t.getFullYear());
if(qx.core.Variant.isSet(bw,M)){qx.locale.Manager.getInstance().addListener(bz,this._updateDatePane,this);
}this.addListener(bD,this._onMouseUpDown,this);
this.addListener(bo,this._onMouseUpDown,this);
},statics:{MONTH_YEAR_FORMAT:qx.locale.Date.getDateTimeFormat("yyyyMMMM","MMMM yyyy")},properties:{appearance:{refine:true,init:bb},width:{refine:true,init:200},height:{refine:true,init:150},shownMonth:{check:bB,init:null,nullable:true,event:bq},shownYear:{check:bB,init:null,nullable:true,event:Q},value:{check:bs,init:null,nullable:true,event:bc,apply:U}},members:{__qO:null,__qP:null,__qQ:null,_forwardStates:{invalid:true},_createChildControlImpl:function(a){var b;

switch(a){case z:b=new qx.ui.container.Composite(new qx.ui.layout.HBox());
b.add(this.getChildControl(A));
b.add(this.getChildControl(F));
b.add(this.getChildControl(B),{flex:1});
b.add(this.getChildControl(D));
b.add(this.getChildControl(w));
this._add(b);
break;
case O:b=new qx.ui.tooltip.ToolTip(this.tr(bi));
break;
case A:b=new qx.ui.form.Button();
b.addState(bm);
b.setFocusable(false);
b.setToolTip(this.getChildControl(O));
b.addListener(G,this._onNavButtonClicked,this);
break;
case bx:b=new qx.ui.tooltip.ToolTip(this.tr(W));
break;
case F:b=new qx.ui.toolbar.Button();
b.addState(L);
b.setFocusable(false);
b.setToolTip(this.getChildControl(bx));
b.addListener(G,this._onNavButtonClicked,this);
break;
case by:b=new qx.ui.tooltip.ToolTip(this.tr(I));
break;
case D:b=new qx.ui.toolbar.Button();
b.addState(bl);
b.setFocusable(false);
b.setToolTip(this.getChildControl(by));
b.addListener(G,this._onNavButtonClicked,this);
break;
case P:b=new qx.ui.tooltip.ToolTip(this.tr(bu));
break;
case w:b=new qx.ui.toolbar.Button();
b.addState(br);
b.setFocusable(false);
b.setToolTip(this.getChildControl(P));
b.addListener(G,this._onNavButtonClicked,this);
break;
case B:b=new qx.ui.basic.Label();
b.setAllowGrowX(true);
b.setAnonymous(true);
break;
case bg:b=new qx.ui.basic.Label();
b.setAllowGrowX(true);
b.setAllowGrowY(true);
b.setSelectable(false);
b.setAnonymous(true);
b.setCursor(E);
break;
case T:b=new qx.ui.basic.Label();
b.setAllowGrowX(true);
b.setAllowGrowY(true);
b.setSelectable(false);
b.setAnonymous(true);
b.setCursor(E);
break;
case K:b=new qx.ui.basic.Label();
b.setAllowGrowX(true);
b.setAllowGrowY(true);
b.setCursor(E);
b.addListener(bD,this._onDayClicked,this);
b.addListener(V,this._onDayDblClicked,this);
break;
case bF:var c=new qx.ui.layout.Grid();
b=new qx.ui.container.Composite(c);

for(var i=0;i<8;i++){c.setColumnFlex(i,1);
}
for(var i=0;i<7;i++){c.setRowFlex(i,1);
}var d=this.getChildControl(v);
d.addState(bd);
b.add(d,{column:0,row:0});
this.__qO=[];

for(var i=0;i<7;i++){d=this.getChildControl(Y+i);
b.add(d,{column:i+1,row:0});
this.__qO.push(d);
}this.__qP=[];
this.__qQ=[];

for(var y=0;y<6;y++){var d=this.getChildControl(R+(y+1));
b.add(d,{column:0,row:y+1});
this.__qQ.push(d);
for(var x=0;x<7;x++){var d=this.getChildControl(bv+((y*7)+x));
b.add(d,{column:x+1,row:y+1});
this.__qP.push(d);
}}this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},_applyValue:function(f,g){if((f!=null)&&(this.getShownMonth()!=f.getMonth()||this.getShownYear()!=f.getFullYear())){this.showMonth(f.getMonth(),f.getFullYear());
}else{var j=(f==null)?-1:f.getDate();

for(var i=0;i<6*7;i++){var h=this.__qP[i];

if(h.hasState(C)){if(h.hasState(H)){h.removeState(H);
}}else{var k=parseInt(h.getValue());

if(k==j){h.addState(H);
}else if(h.hasState(H)){h.removeState(H);
}}}}},_onMouseUpDown:function(e){var ci=e.getTarget();

if(ci==this.getChildControl(z)||ci==this.getChildControl(bF)){e.stopPropagation();
return;
}},_onNavButtonClicked:function(cl){var cn=this.getShownYear();
var cm=this.getShownMonth();

switch(cl.getCurrentTarget()){case this.getChildControl(A):cn--;
break;
case this.getChildControl(F):cm--;

if(cm<0){cm=11;
cn--;
}break;
case this.getChildControl(D):cm++;

if(cm>=12){cm=0;
cn++;
}break;
case this.getChildControl(w):cn++;
break;
}this.showMonth(cm,cn);
},_onDayClicked:function(cj){var ck=cj.getCurrentTarget().dateTime;
this.setValue(new Date(ck));
},_onDayDblClicked:function(){this.execute();
},_onKeyPress:function(n){var r=null;
var p=null;
var q=null;

if(n.getModifiers()==0){switch(n.getKeyIdentifier()){case S:r=-1;
break;
case bj:r=1;
break;
case X:r=-7;
break;
case bk:r=7;
break;
case bE:p=-1;
break;
case bA:p=1;
break;
case J:if(this.getValue()!=null){this.setValue(null);
return true;
}break;
case bp:case ba:if(this.getValue()!=null){this.execute();
}return;
}}else if(n.isShiftPressed()){switch(n.getKeyIdentifier()){case bE:q=-1;
break;
case bA:q=1;
break;
}}
if(r!=null||p!=null||q!=null){var o=this.getValue();

if(o!=null){o=new Date(o.getTime());
}
if(o==null){o=new Date();
}else{if(r!=null){o.setDate(o.getDate()+r);
}
if(p!=null){o.setMonth(o.getMonth()+p);
}
if(q!=null){o.setFullYear(o.getFullYear()+q);
}}this.setValue(o);
}},showMonth:function(l,m){if((l!=null&&l!=this.getShownMonth())||(m!=null&&m!=this.getShownYear())){if(l!=null){this.setShownMonth(l);
}
if(m!=null){this.setShownYear(m);
}this._updateDatePane();
}},handleKeyPress:function(e){this._onKeyPress(e);
},_updateDatePane:function(){var bV=qx.ui.control.DateChooser;
var bS=new Date();
var bL=bS.getFullYear();
var bQ=bS.getMonth();
var bO=bS.getDate();
var bW=this.getValue();
var ca=(bW==null)?-1:bW.getFullYear();
var ch=(bW==null)?-1:bW.getMonth();
var bT=(bW==null)?-1:bW.getDate();
var bP=this.getShownMonth();
var ce=this.getShownYear();
var bM=qx.locale.Date.getWeekStart();
var bX=new Date(this.getShownYear(),this.getShownMonth(),1);
var bU=new qx.util.format.DateFormat(bV.MONTH_YEAR_FORMAT);
this.getChildControl(B).setValue(bU.format(bX));
var cg=bX.getDay();
var bR=1+((7-cg)%7);
var bY=new qx.util.format.DateFormat(bh);

for(var i=0;i<7;i++){var cb=(i+bM)%7;
var cd=this.__qO[i];
bX.setDate(bR+cb);
cd.setValue(bY.format(bX));

if(qx.locale.Date.isWeekend(cb)){cd.addState(N);
}else{cd.removeState(N);
}}bX=new Date(ce,bP,1,12,0,0);
var bH=(7+cg-bM)%7;
bX.setDate(bX.getDate()-bH);
var cc=new qx.util.format.DateFormat(bt);

for(var bG=0;bG<6;bG++){this.__qQ[bG].setValue(cc.format(bX));

for(var i=0;i<7;i++){var cd=this.__qP[bG*7+i];
var bK=bX.getFullYear();
var bJ=bX.getMonth();
var bN=bX.getDate();
var bI=(ca==bK&&ch==bJ&&bT==bN);

if(bI){cd.addState(H);
}else{cd.removeState(H);
}
if(bJ!=bP){cd.addState(C);
}else{cd.removeState(C);
}var cf=(bK==bL&&bJ==bQ&&bN==bO);

if(cf){cd.addState(bC);
}else{cd.removeState(bC);
}cd.setValue(be+bN);
cd.dateTime=bX.getTime();
bX.setDate(bX.getDate()+1);
}}bU.dispose();
bY.dispose();
cc.dispose();
}},destruct:function(){if(qx.core.Variant.isSet(bw,M)){qx.locale.Manager.getInstance().removeListener(bz,this._updateDatePane,this);
}this.__qO=this.__qP=this.__qQ=null;
}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var i="__qR",h="qx.ui.core.MSingleSelectionHandling",g="changeSelection",f="changeSelected",d="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":d},members:{__qR:null,getSelection:function(){var j=this.__qS().getSelected();

if(j){return [j];
}else{return [];
}},setSelection:function(l){switch(l.length){case 0:this.resetSelection();
break;
case 1:this.__qS().setSelected(l[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+l.length+" items!");
}},resetSelection:function(){this.__qS().resetSelected();
},isSelected:function(a){return this.__qS().isSelected(a);
},isSelectionEmpty:function(){return this.__qS().isSelectionEmpty();
},getSelectables:function(){return this.__qS().getSelectables();
},_onChangeSelected:function(e){var c=e.getData();
var b=e.getOldData();
c==null?c=[]:c=[c];
b==null?b=[]:b=[b];
this.fireDataEvent(g,c,b);
},__qS:function(){if(this.__qR==null){var m=this;
this.__qR=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(k){if(m._isItemSelectable){return m._isItemSelectable(k);
}else{return k.isEnabled()&&k.isVisible();
}}});
this.__qR.addListener(f,this._onChangeSelected,this);
}this.__qR.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__qR;
}},destruct:function(){this._disposeObjects(i);
}});
})();
(function(){var E="list",D="atom",C="pressed",B="abandoned",A="popup",z="hovered",y="changeLabel",x="changeIcon",w="arrow",v="",T="spacer",S="Enter",R="one",Q="mouseout",P="Space",O="key",N="mousewheel",M="keyinput",L="changeSelection",K="quick",I="qx.ui.form.SelectBox",J="mouseover",G="selectbox",H="click",F=" ";
qx.Class.define(I,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this._createChildControl(D);
this._createChildControl(T);
this._createChildControl(w);
this.addListener(J,this._onMouseOver,this);
this.addListener(Q,this._onMouseOut,this);
this.addListener(H,this._onClick,this);
this.addListener(N,this._onMouseWheel,this);
this.addListener(M,this._onKeyInput,this);
this.addListener(L,this.__qU,this);
},properties:{appearance:{refine:true,init:G}},members:{__qT:null,_createChildControlImpl:function(f){var g;

switch(f){case T:g=new qx.ui.core.Spacer();
this._add(g,{flex:1});
break;
case D:g=new qx.ui.basic.Atom(F);
g.setCenter(false);
g.setAnonymous(true);
this._add(g,{flex:1});
break;
case w:g=new qx.ui.basic.Image();
g.setAnonymous(true);
this._add(g);
break;
}return g||arguments.callee.base.call(this,f);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return !this.getChildrenContainer().getSelectionMode()===R;
},__qU:function(e){var i=e.getData()[0];
var h=this.getChildControl(E);

if(h.getSelection()[0]!=i){h.setSelection([i]);
}this.__qV();
this.__qW();
},__qV:function(){var b=this.getChildControl(E).getSelection()[0];
var c=this.getChildControl(D);
var a=b?b.getIcon():v;
a==null?c.resetIcon():c.setIcon(a);
},__qW:function(){var t=this.getChildControl(E).getSelection()[0];
var u=this.getChildControl(D);
var s=t?t.getLabel():v;
var r=this.getFormat();

if(r!=null){s=r.call(this,t);
}if(s&&s.translate){s=s.translate();
}s==null?u.resetLabel():u.setLabel(s);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(B)){this.removeState(B);
this.addState(C);
}this.addState(z);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(z);

if(this.hasState(C)){this.removeState(C);
this.addState(B);
}},_onClick:function(e){this.toggle();
},_onMouseWheel:function(e){if(this.getChildControl(A).isVisible()){return;
}var V=e.getWheelDelta()>0?1:-1;
var X=this.getSelectables();
var W=this.getSelection()[0];

if(!W){W=X[0];
}var U=X.indexOf(W)+V;
var Y=X.length-1;
if(U<0){U=0;
}else if(U>=Y){U=Y;
}this.setSelection([X[U]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var bf=e.getKeyIdentifier();

if(bf==S||bf==P){if(this.__qT){this.setSelection([this.__qT]);
this.__qT=null;
}this.toggle();
}else{arguments.callee.base.call(this,e);
}},_onKeyInput:function(e){var d=e.clone();
d.setTarget(this._list);
d.setBubbles(false);
this.getChildControl(E).dispatchEvent(d);
},_onListMouseDown:function(e){if(this.__qT){this.setSelection([this.__qT]);
this.__qT=null;
}},_onListChangeSelection:function(e){var ba=e.getData();
var bd=e.getOldData();
if(bd&&bd.length>0){bd[0].removeListener(x,this.__qV,this);
bd[0].removeListener(y,this.__qW,this);
}
if(ba.length>0){var bc=this.getChildControl(A);
var bb=this.getChildControl(E);
var be=bb.getSelectionContext();

if(bc.isVisible()&&(be==K||be==O)){this.__qT=ba[0];
}else{this.setSelection([ba[0]]);
this.__qT=null;
}ba[0].addListener(x,this.__qV,this);
ba[0].addListener(y,this.__qW,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){var k=this.getChildControl(A);

if(!k.isVisible()){var m=this.getChildControl(E);
if(m.hasChildren()){m.setSelection(this.getSelection());
}}else{var j=k.getLayoutLocation(this);
var o=qx.bom.Viewport.getHeight();
var n=j.top;
var p=o-j.bottom;
var l=n>p?n:p;
var q=this.getMaxListHeight();
var m=this.getChildControl(E);

if(q==null||q>l){m.setMaxHeight(l);
}else if(q<l){m.setMaxHeight(q);
}}}},destruct:function(){this.__qT=null;
}});
})();
(function(){var o="__ra",n="qx.ui.core.SingleSelectionManager",m="changeSelected",l="__qX",k="qx.event.type.Data",j="__qY",h="Boolean";
qx.Class.define(n,{extend:qx.core.Object,construct:function(s){arguments.callee.base.call(this);
{};
this.__qX=s;
},events:{"changeSelected":k},properties:{allowEmptySelection:{check:h,init:true,apply:o}},members:{__qY:null,__qX:null,getSelected:function(){return this.__qY;
},setSelected:function(e){if(!this.__rc(e)){throw new Error("Could not select "+e+", because it is not a child element!");
}this.__rb(e);
},resetSelected:function(){this.__rb(null);
},isSelected:function(p){if(!this.__rc(p)){throw new Error("Could not check if "+p+" is selected,"+" because it is not a child element!");
}return this.__qY===p;
},isSelectionEmpty:function(){return this.__qY==null;
},getSelectables:function(){var f=this.__qX.getItems();
var g=[];

for(var i=0;i<f.length;i++){if(this.__qX.isItemSelectable(f[i])){g.push(f[i]);
}}return g;
},__ra:function(q,r){if(!q){this.__rb(this.__qY);
}},__rb:function(a){var d=this.__qY;
var c=a;

if(c!=null&&d===c){return;
}
if(!this.isAllowEmptySelection()&&c==null){var b=this.getSelectables()[0];

if(b){c=b;
}}this.__qY=c;
this.fireDataEvent(m,c,d);
},__rc:function(t){var u=this.__qX.getItems();

for(var i=0;i<u.length;i++){if(u[i]===t){return true;
}}return false;
}},destruct:function(){if(this.__qX.toHashCode){this._disposeObjects(l);
}else{this.__qX=null;
}this._disposeObjects(j);
}});
})();
(function(){var n="Boolean",m="changeSelection",l="_applyValid",k="",j="changeRequired",h="changeValid",g="__rd",f="changeInvalidMessage",d="_applyInvalidMessage",c="String",a="qx.ui.form.RadioButtonGroup",b="qx.event.type.Data";
qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MLayoutHandling,qx.ui.form.MModelSelection],implement:[qx.ui.form.IForm,qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],construct:function(t){arguments.callee.base.call(this);
if(t==null){this.setLayout(new qx.ui.layout.VBox(4));
}else{this.setLayout(t);
}this.__rd=new qx.ui.form.RadioGroup();
this.__rd.addListener(m,function(e){this.fireDataEvent(m,e.getData(),e.getOldData());
},this);
},properties:{valid:{check:n,init:true,apply:l,event:h},required:{check:n,init:false,event:j},invalidMessage:{check:c,init:k,event:f,apply:d}},events:{"changeSelection":b},members:{__rd:null,_applyInvalidMessage:function(o,p){var q=this._getChildren();

for(var i=0;i<q.length;i++){q[i].setInvalidMessage(o);
}},_applyValid:function(x,y){var z=this._getChildren();

for(var i=0;i<z.length;i++){z[i].setValid(x);
}},getRadioGroup:function(){return this.__rd;
},getChildren:function(){return this._getChildren();
},add:function(u,v){this.__rd.add(u);
this._add(u,v);
},remove:function(s){this.__rd.remove(s);
this._remove(s);
},removeAll:function(){var r=this.__rd.getItems();

for(var i=0;i<r.length;i++){this.__rd.remove(r[i]);
}this._removeAll();
},getSelection:function(){return this.__rd.getSelection();
},setSelection:function(w){return this.__rd.setSelection(w);
},resetSelection:function(){return this.__rd.resetSelection();
},isSelected:function(A){return this.__rd.isSelected(A);
},isSelectionEmpty:function(){return this.__rd.isSelectionEmpty();
},getSelectables:function(){return this.__rd.getSelectables();
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var y="Boolean",x="changeValue",w="_applyAllowEmptySelection",v="_applyInvalidMessage",u="qx.ui.form.RadioGroup",t="_applyValid",s="",r="changeRequired",q="changeValid",p="__re",m="changeEnabled",o="changeInvalidMessage",n="changeSelection",k="_applyEnabled",j="String";
qx.Class.define(u,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(a){arguments.callee.base.call(this);
this.__re=[];
this.addListener(n,this.__rf,this);

if(a!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:y,apply:k,event:m},wrap:{check:y,init:true},allowEmptySelection:{check:y,init:false,apply:w},valid:{check:y,init:true,apply:t,event:q},required:{check:y,init:false,event:r},invalidMessage:{check:j,init:s,event:o,apply:v}},members:{__re:null,getItems:function(){return this.__re;
},add:function(b){var c=this.__re;
var d;

for(var i=0,l=arguments.length;i<l;i++){d=arguments[i];

if(qx.lang.Array.contains(c,d)){continue;
}d.addListener(x,this._onItemChangeChecked,this);
c.push(d);
d.setGroup(this);
if(d.getValue()){this.setSelection([d]);
}}if(!this.isAllowEmptySelection()&&c.length>0&&!this.getSelection()[0]){this.setSelection([c[0]]);
}},remove:function(E){var F=this.__re;

if(qx.lang.Array.contains(F,E)){qx.lang.Array.remove(F,E);
if(E.getGroup()===this){E.resetGroup();
}E.removeListener(x,this._onItemChangeChecked,this);
if(E.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__re;
},_onItemChangeChecked:function(e){var K=e.getTarget();

if(K.getValue()){this.setSelection([K]);
}else if(this.getSelection()[0]==K){this.resetSelection();
}},_applyInvalidMessage:function(L,M){for(var i=0;i<this.__re.length;i++){this.__re[i].setInvalidMessage(L);
}},_applyValid:function(I,J){for(var i=0;i<this.__re.length;i++){this.__re[i].setValid(I);
}},_applyEnabled:function(f,g){var h=this.__re;

if(f==null){for(var i=0,l=h.length;i<l;i++){h[i].resetEnabled();
}}else{for(var i=0,l=h.length;i<l;i++){h[i].setEnabled(f);
}}},_applyAllowEmptySelection:function(C,D){if(!C&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var N=this.getSelection()[0];
var P=this.__re;
var O=P.indexOf(N);

if(O==-1){return;
}var i=0;
var length=P.length;
if(this.getWrap()){O=(O+1)%length;
}else{O=Math.min(O+1,length-1);
}
while(i<length&&!P[O].getEnabled()){O=(O+1)%length;
i++;
}this.setSelection([P[O]]);
},selectPrevious:function(){var z=this.getSelection()[0];
var B=this.__re;
var A=B.indexOf(z);

if(A==-1){return;
}var i=0;
var length=B.length;
if(this.getWrap()){A=(A-1+length)%length;
}else{A=Math.max(A-1,0);
}
while(i<length&&!B[A].getEnabled()){A=(A-1+length)%length;
i++;
}this.setSelection([B[A]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__rf:function(e){var H=e.getData()[0];
var G=e.getOldData()[0];

if(G){G.setValue(false);
}
if(H){H.setValue(true);
}}},destruct:function(){this._disposeArray(p);
}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var q="checked",p="keypress",o="Boolean",n="Right",m="_applyValue",l="changeValue",k="qx.ui.form.RadioButton",j="radiobutton",i="Left",h="qx.ui.form.RadioGroup",d="Down",g="_applyGroup",f="Up",c="execute";
qx.Class.define(k,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(r){{};
arguments.callee.base.call(this,r);
this.addListener(c,this._onExecute);
this.addListener(p,this._onKeyPress);
},properties:{group:{check:h,nullable:true,apply:g},value:{check:o,nullable:true,event:l,apply:m,init:false},appearance:{refine:true,init:j},allowGrowX:{refine:true,init:false}},members:{_applyValue:function(t,u){t?this.addState(q):this.removeState(q);

if(t&&this.getFocusable()){this.focus();
}},_applyGroup:function(a,b){if(b){b.remove(this);
}
if(a){a.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onKeyPress:function(e){var s=this.getGroup();

if(!s){return;
}
switch(e.getKeyIdentifier()){case i:case f:s.selectPrevious();
break;
case n:case d:s.selectNext();
break;
}}}});
})();
(function(){var w="pressed",v="abandoned",u="hovered",t="checked",s="Space",r="Enter",q="mouseup",p="mousedown",o="Boolean",n="_applyValue",h="mouseover",m="mouseout",k="qx.ui.form.ToggleButton",g="keydown",f="changeValue",j="button",i="keyup",l="execute";
qx.Class.define(k,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(a,b){arguments.callee.base.call(this,a,b);
this.addListener(h,this._onMouseOver);
this.addListener(m,this._onMouseOut);
this.addListener(p,this._onMouseDown);
this.addListener(q,this._onMouseUp);
this.addListener(g,this._onKeyDown);
this.addListener(i,this._onKeyUp);
this.addListener(l,this._onExecute,this);
},properties:{appearance:{refine:true,init:j},focusable:{refine:true,init:true},value:{check:o,nullable:true,event:f,apply:n,init:false}},members:{_applyValue:function(c,d){c?this.addState(t):this.removeState(t);
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(u);

if(this.hasState(v)){this.removeState(v);
this.addState(w);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(u);

if(this.hasState(w)){if(!this.getValue()){this.removeState(w);
}this.addState(v);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(v);
this.addState(w);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(v)){this.removeState(v);
}else if(this.hasState(w)){this.execute();
}this.removeState(w);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case r:case s:this.removeState(v);
this.addState(w);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(w)){return;
}
switch(e.getKeyIdentifier()){case r:case s:this.removeState(v);
this.execute();
this.removeState(w);
e.stopPropagation();
}}}});
})();
(function(){var q="button",p="hovered",o="pressed",n="arrow",m="Enter",l="Space",k="abandoned",j="both",i="String",h="changeVisibility",G="splitbutton",F="changeShow",E="mouseout",D="keydown",C="execute",B="_applyMenu",A="icon",z="mouseover",y="keyup",x="qx.ui.menu.Menu",v="_applyIcon",w="label",t="_applyShow",u="changeMenu",r="_applyLabel",s="qx.ui.form.SplitButton";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(S,T,U,V){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(n);
this.addListener(z,this._onMouseOver,this,true);
this.addListener(E,this._onMouseOut,this,true);
this.addListener(D,this._onKeyDown);
this.addListener(y,this._onKeyUp);
if(S!=null){this.setLabel(S);
}
if(T!=null){this.setIcon(T);
}
if(U!=null){this.setMenu(U);
}
if(V!=null){this.setCommand(V);
}},properties:{appearance:{refine:true,init:G},focusable:{refine:true,init:true},label:{apply:r,nullable:true,check:i},icon:{check:i,apply:v,nullable:true,themeable:true},show:{init:j,check:[j,w,A],themeable:true,inheritable:true,apply:t,event:F},menu:{check:x,nullable:true,apply:B,event:u}},members:{__rg:null,_createChildControlImpl:function(Q){var R;

switch(Q){case q:R=new qx.ui.form.Button;
R.addListener(C,this._onButtonExecute,this);
R.setFocusable(false);
this._addAt(R,0,{flex:1});
break;
case n:R=new qx.ui.form.MenuButton;
R.setFocusable(false);
this._addAt(R,1);
break;
}return R||arguments.callee.base.call(this,Q);
},_forwardStates:{hovered:1,focused:1},_applyLabel:function(J,K){var L=this.getChildControl(q);
J==null?L.resetLabel():L.setLabel(J);
},_applyIcon:function(a,b){var c=this.getChildControl(q);
a==null?c.resetIcon():c.setIcon(a);
},_applyMenu:function(d,f){var g=this.getChildControl(n);

if(d){g.resetEnabled();
g.setMenu(d);
d.setOpener(this);
d.addListener(h,this._onChangeMenuVisibility,this);
}else{g.setEnabled(false);
g.resetMenu();
}
if(f){f.removeListener(h,this._onChangeMenuVisibility,this);
f.resetOpener();
}},_applyShow:function(O,P){},_onMouseOver:function(e){e.stopPropagation();
this.addState(p);
delete this.__rg;
},_onMouseOut:function(e){e.stopPropagation();
if(!this.hasState(p)){return;
}var I=e.getRelatedTarget();

if(qx.ui.core.Widget.contains(this,I)){return;
}var H=this.getMenu();

if(H&&H.isVisible()){this.__rg=true;
return;
}this.removeState(p);
},_onKeyDown:function(e){var N=this.getChildControl(q);

switch(e.getKeyIdentifier()){case m:case l:N.removeState(k);
N.addState(o);
}},_onKeyUp:function(e){var M=this.getChildControl(q);

switch(e.getKeyIdentifier()){case m:case l:if(M.hasState(o)){M.removeState(k);
M.removeState(o);
M.execute();
}}},_onButtonExecute:function(e){this.execute();
},_onChangeMenuVisibility:function(e){if(!this.getMenu().isVisible()&&this.__rg){this.removeState(p);
}}}});
})();
(function(){var b="checkbox",a="qx.ui.form.CheckBox";
qx.Class.define(a,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(c){{};
arguments.callee.base.call(this,c);
this.setValue(false);
},properties:{appearance:{refine:true,init:b},allowGrowX:{refine:true,init:false}}});
})();
(function(){var E="textfield",D="",C="downbutton",B="upbutton",A="Number",z="inner",y="PageUp",x="Boolean",w="changeValue",v="Down",bc="Up",bb="execute",ba="PageDown",Y="changeLocale",X="qx.dynlocale",W="on",V="_applyEditable",U="_applyWrap",T="keydown",S="\-]",L="mousewheel",M="_applyValue",J="number",K="_applyMinimum",H="qx.util.format.NumberFormat",I="[0-9",F="keyup",G="spinner",N="this._checkValue(value)",O="_applyMaximum",Q="changeNumberFormat",P="_applyNumberFormat",R="qx.ui.form.Spinner";
qx.Class.define(R,{extend:qx.ui.core.Widget,implement:[qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MForm],construct:function(bk,bl,bm){arguments.callee.base.call(this);
var bn=new qx.ui.layout.Grid();
bn.setColumnFlex(0,1);
bn.setRowFlex(0,1);
bn.setRowFlex(1,1);
this._setLayout(bn);
this.addListener(T,this._onKeyDown,this);
this.addListener(F,this._onKeyUp,this);
this.addListener(L,this._onMouseWheel,this);

if(qx.core.Variant.isSet(X,W)){qx.locale.Manager.getInstance().addListener(Y,this._onChangeLocale,this);
}this._createChildControl(E);
this._createChildControl(B);
this._createChildControl(C);
if(bk!=null){this.setMinimum(bk);
}
if(bm!=null){this.setMaximum(bm);
}
if(bl!==undefined){this.setValue(bl);
}else{this.initValue();
}},properties:{appearance:{refine:true,init:G},focusable:{refine:true,init:true},singleStep:{check:A,init:1},pageStep:{check:A,init:10},minimum:{check:A,apply:K,init:0},value:{check:N,nullable:true,apply:M,init:0,event:w},maximum:{check:A,apply:O,init:100},wrap:{check:x,init:false,apply:U},editable:{check:x,init:true,apply:V},numberFormat:{check:H,apply:P,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__rh:null,__ri:false,__rj:false,_createChildControlImpl:function(bi){var bj;

switch(bi){case E:bj=new qx.ui.form.TextField();
bj.setFilter(this._getFilterRegExp());
bj.addState(z);
bj.setWidth(40);
bj.setFocusable(false);
bj.addListener(w,this._onTextChange,this);
this._add(bj,{column:0,row:0,rowSpan:2});
break;
case B:bj=new qx.ui.form.RepeatButton();
bj.addState(z);
bj.setFocusable(false);
bj.addListener(bb,this._countUp,this);
this._add(bj,{column:1,row:0});
break;
case C:bj=new qx.ui.form.RepeatButton();
bj.addState(z);
bj.setFocusable(false);
bj.addListener(bb,this._countDown,this);
this._add(bj,{column:1,row:1});
break;
}return bj||arguments.callee.base.call(this,bi);
},_getFilterRegExp:function(){var bw=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());
var bv=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());
var bu=D;
var bs=D;

if(this.getNumberFormat()!==null){bu=this.getNumberFormat().getPrefix()||D;
bs=this.getNumberFormat().getPostfix()||D;
}var bt=new RegExp(I+qx.lang.String.escapeRegexpChars(bw)+qx.lang.String.escapeRegexpChars(bv)+qx.lang.String.escapeRegexpChars(bu)+qx.lang.String.escapeRegexpChars(bs)+S);
return bt;
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var a=this.getChildControl(E);
a.getFocusElement().focus();
a.selectAllText();
},_applyMinimum:function(bx,by){if(this.getMaximum()<bx){this.setMaximum(bx);
}
if(this.getValue()<bx){this.setValue(bx);
}else{this._updateButtons();
}},_applyMaximum:function(q,r){if(this.getMinimum()>q){this.setMin(q);
}
if(this.getValue()>q){this.setValue(q);
}else{this._updateButtons();
}},_applyEnabled:function(bd,be){arguments.callee.base.call(this,bd,be);
this._updateButtons();
},_checkValue:function(k){return typeof k===J&&k>=this.getMinimum()&&k<=this.getMaximum();
},_applyValue:function(bz,bA){var bB=this.getChildControl(E);
this._updateButtons();
this.__rh=bz;
if(bz!==null){if(this.getNumberFormat()){bB.setValue(this.getNumberFormat().format(bz));
}else{bB.setValue(bz+D);
}}else{bB.setValue(D);
}},_applyEditable:function(s,t){var u=this.getChildControl(E);

if(u){u.setReadOnly(!s);
}},_applyWrap:function(bq,br){this._updateButtons();
},_applyNumberFormat:function(l,m){var n=this.getChildControl(E);
n.setFilter(this._getFilterRegExp());
this.getNumberFormat().addListener(Q,this._onChangeNumberFormat,this);
this._applyValue(this.__rh,undefined);
},_getContentPaddingTarget:function(){return this.getChildControl(E);
},_updateButtons:function(){var i=this.getChildControl(B);
var h=this.getChildControl(C);
var j=this.getValue();

if(!this.getEnabled()){i.setEnabled(false);
h.setEnabled(false);
}else{if(this.getWrap()){i.setEnabled(true);
h.setEnabled(true);
}else{if(j!==null&&j<this.getMaximum()){i.setEnabled(true);
}else{i.setEnabled(false);
}if(j!==null&&j>this.getMinimum()){h.setEnabled(true);
}else{h.setEnabled(false);
}}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case y:this.__ri=true;
case bc:this.getChildControl(B).press();
break;
case ba:this.__rj=true;
case v:this.getChildControl(C).press();
break;
default:return ;
}e.stopPropagation();
e.preventDefault();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case y:this.getChildControl(B).release();
this.__ri=false;
break;
case bc:this.getChildControl(B).release();
break;
case ba:this.getChildControl(C).release();
this.__rj=false;
break;
case v:this.getChildControl(C).release();
break;
}},_onMouseWheel:function(e){if(e.getWheelDelta()>0){this._countDown();
}else{this._countUp();
}e.stop();
},_onTextChange:function(e){var bo=this.getChildControl(E);
var bp;
if(this.getNumberFormat()){try{bp=this.getNumberFormat().parse(bo.getValue());
}catch(b){}}if(bp===undefined){bp=parseFloat(bo.getValue(),10);
}if(!isNaN(bp)){if(bp>this.getMaximum()){bo.setValue(this.getMaximum()+D);
return;
}else if(bp<this.getMinimum()){bo.setValue(this.getMinimum()+D);
return;
}this.setValue(bp);
}else{this._applyValue(this.__rh,undefined);
}},_onChangeLocale:function(c){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());
var d=this.getChildControl(E);
d.setFilter(this._getFilterRegExp());
d.setValue(this.getNumberFormat().format(this.getValue()));
}},_onChangeNumberFormat:function(f){var g=this.getChildControl(E);
g.setFilter(this._getFilterRegExp());
g.setValue(this.getNumberFormat().format(this.getValue()));
},_countUp:function(){if(this.__ri){var bg=this.getValue()+this.getPageStep();
}else{var bg=this.getValue()+this.getSingleStep();
}if(this.getWrap()){if(bg>this.getMaximum()){var bf=this.getMaximum()-bg;
bg=this.getMinimum()+bf;
}}this.gotoValue(bg);
},_countDown:function(){if(this.__rj){var p=this.getValue()-this.getPageStep();
}else{var p=this.getValue()-this.getSingleStep();
}if(this.getWrap()){if(p<this.getMinimum()){var o=this.getMinimum()+p;
p=this.getMaximum()-o;
}}this.gotoValue(p);
},gotoValue:function(bh){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),bh)));
}},destruct:function(){if(qx.core.Variant.isSet(X,W)){qx.locale.Manager.getInstance().removeListener(Y,this._onChangeLocale,this);
}}});
})();
(function(){var c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(d,e,f){arguments.callee.base.call(this,d,e);

if(f!=null){this.setModel(f);
}},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();
(function(){var n="checked",m="qx.ui.form.RadioGroup",l="Boolean",k="menu-radiobutton",j="_applyValue",i="qx.ui.menu.RadioButton",h="changeValue",g="_applyGroup",f="execute";
qx.Class.define(i,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(o,p){arguments.callee.base.call(this);
if(o!=null){this.setLabel(o);
}
if(p!=null){this.setMenu(p);
}this.addListener(f,this._onExecute,this);
},properties:{appearance:{refine:true,init:k},value:{check:l,nullable:true,event:h,apply:j,init:false},group:{check:m,nullable:true,apply:g}},members:{_applyValue:function(c,d){c?this.addState(n):this.removeState(n);
},_applyGroup:function(a,b){if(b){b.remove(this);
}
if(a){a.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var u="resize",t="st.widget.AbstractGallery",s="qx/icon/Oxygen/32/apps/",r="abstract",q="office-writer.png",p="multi",o="Icon #",n="office-web.png",m="manager",l="internet-feed-reader.png",h="off",k="internet-mail.png",j="utilities-keyring.png",g="auto";
qx.Class.define(t,{extend:qx.ui.core.Widget,type:r,construct:function(a){arguments.callee.base.call(this,a);
this._setLayout(new qx.ui.layout.Grow());
this.itemHeight=60;
this.itemWidth=60;
this.itemCount=20;
this.itemPerLine=1;
this.items=this._generateItems(this.itemCount);
var b=this._createScroller();
b.set({scrollbarX:h,scrollbarY:g});
b.getPane().addListener(u,this._onPaneResize,this);
this._add(b);
this.manager=new qx.ui.virtual.selection.CellRectangle(b.getPane(),this).set({mode:p,drag:true});
this.manager.attachMouseEvents();
this.manager.attachKeyEvents(b);
},members:{getItemData:function(c,d){return this.items[c*this.itemPerLine+d];
},_createScroller:function(){},isItemSelectable:function(f){return !!this.getItemData(f.row,f.column);
},styleSelectable:function(H,I,J){},_onPaneResize:function(e){var x=e.getTarget();
var v=e.getData().width;
var w=Math.floor(v/this.itemWidth);

if(w==this.itemsPerLine){return;
}this.itemPerLine=w;
var y=Math.ceil(this.itemCount/w);
x.getColumnConfig().setItemCount(w);
x.getRowConfig().setItemCount(y);
},_generateItems:function(z){var C=[];
var F=[l,k,n,q,j];
var D=qx.util.AliasManager.getInstance();
var B=qx.util.ResourceManager.getInstance();

for(var i=0;i<z;i++){var G=s+F[Math.floor(Math.random()*F.length)];
var A=D.resolve(G);
var E=B.toUri(A);
C[i]={label:o+(i+1),icon:G,resolvedIcon:E};
}return C;
}},destruct:function(){this.items=null;
this._disposeObjects(m);
}});
})();
(function(){var n="",m="#f3f3f3",l="color: white; background-color: #00398D;",k="vertical",j="position: absolute;",i="default",h="<img src='",g="<br>",f="'></img>",d="text-align: center;",a="st.widget.HtmlGallery",c="horizontal",b="layer";
qx.Class.define(a,{extend:st.widget.AbstractGallery,construct:function(q){arguments.callee.base.call(this,q);
var r=qx.theme.manager.Font.getInstance().resolve(i).getStyles();
this._fontCss=qx.bom.element.Style.compile(r);
},members:{_createScroller:function(){var p=new qx.ui.virtual.core.Scroller(1,this.itemPerLine,this.itemHeight,this.itemWidth);
this.layer=new qx.ui.virtual.layer.HtmlCell(this);
p.getPane().addLayer(this.layer);
var o=new qx.ui.virtual.layer.GridLines(c,m);
p.getPane().addLayer(o);
var o=new qx.ui.virtual.layer.GridLines(k,m);
p.getPane().addLayer(o);
return p;
},_onPaneResize:function(e){arguments.callee.base.call(this,e);
this.manager.clearSelection();
},styleSelectable:function(s,t,u){this.layer.updateLayerData();
},getCellProperties:function(v,w){var z=this.getItemData(v,w);

if(!z){return n;
}var y=this.manager.isItemSelected({row:v,column:w});
var x=y?l:n;
return {style:[j,d,this._fontCss,x].join(n),content:[h,z.resolvedIcon,f,g,z.label].join(n)};
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var m="mouseup",l="mousedown",k="losecapture",j="mouseover",i="mousemove",h="removeItem",g="keypress",f="addItem",e="qx.ui.virtual.selection.Abstract";
qx.Class.define(e,{extend:qx.ui.core.selection.Abstract,construct:function(a,b){arguments.callee.base.call(this);
{};
this._pane=a;
this._delegate=b||{};
},members:{_isSelectable:function(x){return this._delegate.isItemSelectable?this._delegate.isItemSelectable(x):true;
},_styleSelectable:function(n,o,p){if(this._delegate.styleSelectable){this._delegate.styleSelectable(n,o,p);
}},attachMouseEvents:function(){var d=this._pane.getContainerElement();
d.addListener(l,this.handleMouseDown,this);
d.addListener(m,this.handleMouseUp,this);
d.addListener(j,this.handleMouseOver,this);
d.addListener(i,this.handleMouseMove,this);
d.addListener(k,this.handleLoseCapture,this);
},detatchMouseEvents:function(){var q=this._pane.getContainerElement();
q.removeListener(l,this.handleMouseDown,this);
q.removeListener(m,this.handleMouseUp,this);
q.removeListener(j,this.handleMouseOver,this);
q.removeListener(i,this.handleMouseMove,this);
q.removeListener(k,this.handleLoseCapture,this);
},attachKeyEvents:function(v){v.addListener(g,this.handleKeyPress,this);
},detachKeyEvents:function(c){c.removeListener(g,this.handleKeyPress,this);
},attachListEvents:function(s){s.addListener(f,this.handleAddItem,this);
s.addListener(h,this.handleRemoveItem,this);
},detachListEvents:function(r){r.removeListener(f,this.handleAddItem,this);
r.removeListener(h,this.handleRemoveItem,this);
},_capture:function(){this._pane.capture();
},_releaseCapture:function(){this._pane.releaseCapture();
},_getScroll:function(){return {left:this._pane.getScrollX(),top:this._pane.getScrollY()};
},_scrollBy:function(t,u){this._pane.setScrollX(this._pane.getScrollX()+t);
this._pane.setScrollY(this._pane.getScrollY()+u);
},_getLocation:function(){var w=this._pane.getContentElement().getDomElement();
return w?qx.bom.element.Location.get(w):null;
},_getDimension:function(){return this._pane.getInnerSize();
}},destruct:function(){this._pane=this._delegate=null;
}});
})();
(function(){var F="under",E="above",D="left",C="right",B="x",A="qx.ui.virtual.selection.CellRectangle";
qx.Class.define(A,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount()*this._pane.getColumnConfig().getItemCount();
},_getSelectableFromMouseEvent:function(event){var z=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());

if(!z){return null;
}return this._isSelectable(z)?z:null;
},getSelectables:function(){var j=[];
var m=this._pane.getRowConfig().getItemCount();
var i=this._pane.getColumnConfig().getItemCount();

for(var n=0;n<m;n++){for(var k=0;k<i;k++){var l={row:n,column:k};

if(this._isSelectable(l)){j.push(l);
}}}return j;
},_getSelectableRange:function(G,H){var K=[];
var L=Math.min(G.row,H.row);
var M=Math.max(G.row,H.row);
var J=Math.min(G.column,H.column);
var O=Math.max(G.column,H.column);

for(var P=L;P<=M;P++){for(var N=J;N<=O;N++){var I={row:P,column:N};

if(this._isSelectable(I)){K.push(I);
}}}return K;
},_getFirstSelectable:function(){var c=this._pane.getRowConfig().getItemCount();
var b=this._pane.getColumnConfig().getItemCount();

for(var f=0;f<c;f++){for(var e=0;e<b;e++){var d={row:f,column:e};

if(this._isSelectable(d)){return d;
}}}return null;
},_getLastSelectable:function(){var R=this._pane.getRowConfig().getItemCount();
var Q=this._pane.getColumnConfig().getItemCount();

for(var T=Q-1;T>=0;T--){for(var U=R-1;U>=0;U--){var S={row:U,column:T};

if(this._isSelectable(S)){return S;
}}}return null;
},_getRelatedSelectable:function(o,p){var q={row:o.row,column:o.column};

switch(p){case E:for(var u=o.row-1;u>=0;u--){q.row=u;

if(this._isSelectable(q)){return q;
}}break;
case F:var r=this._pane.getRowConfig().getItemCount();

for(var u=o.row+1;u<r;u++){q.row=u;

if(this._isSelectable(q)){return q;
}}break;
case D:for(var t=o.column-1;t>=0;t--){q.column=t;

if(this._isSelectable(q)){return q;
}}break;
case C:var s=this._pane.getColumnConfig().getItemCount();

for(var t=o.column+1;t<s;t++){q.column=t;

if(this._isSelectable(q)){return q;
}}break;
}return null;
},_getPage:function(g,h){if(h){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}},_selectableToHashCode:function(ba){return ba.column+B+ba.row;
},_scrollItemIntoView:function(a){this._pane.scrollCellIntoView(a.column,a.row);
},_getSelectableLocationX:function(V){var W=this._pane.getColumnConfig();
var Y=W.getItemPosition(V.column);
var X=Y+W.getItemSize(V.column)-1;
return {left:Y,right:X};
},_getSelectableLocationY:function(v){var y=this._pane.getRowConfig();
var x=y.getItemPosition(v.row);
var w=x+y.getItemSize(v.row)-1;
return {top:x,bottom:w};
}}});
})();
(function(){var p="scrollY",o="update",n="scrollX",m="__rk",l="pane",k="qx.ui.virtual.core.Scroller";
qx.Class.define(k,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(g,h,i,j){arguments.callee.base.call(this);
this.__rk=new qx.ui.virtual.core.Pane(g,h,i,j);
this.__rk.addListener(o,this._computeScrollbars,this);
this.__rk.addListener(n,this._onScrollPaneX,this);
this.__rk.addListener(p,this._onScrollPaneY,this);
this._add(this.__rk,{row:0,column:0});
},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__rk:null,getPane:function(){return this.__rk;
},_createChildControlImpl:function(c){if(c==l){return this.__rk;
}else{return arguments.callee.base.call(this,c);
}},getItemTop:function(a){throw new Error("The method 'getItemTop' is not implemented!");
},getItemBottom:function(d){throw new Error("The method 'getItemBottom' is not implemented!");
},getItemLeft:function(b){throw new Error("The method 'getItemLeft' is not implemented!");
},getItemRight:function(f){throw new Error("The method 'getItemRight' is not implemented!");
},_onScrollBarX:function(e){this.__rk.setScrollX(e.getData());
},_onScrollBarY:function(e){this.__rk.setScrollY(e.getData());
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var bj="appear",bi="qx.ui.virtual.core.CellEvent",bh="qx.event.type.Data",bg="change",bf="update",be="scrollY",bd="full update",bc="__rm",bb="__rt",ba="dblclick",by="update layer window",bx="qx.event.type.Event",bw="cellContextmenu",bv="resize",bu="scrollX",bt="__rl",bs="__ru",br="cellDblclick",bq="qx.ui.virtual.core.Pane",bp="click",bn="prefetch x",bo="contextmenu",bl="cellClick",bm="prefetch y",bk="scroll";
qx.Class.define(bq,{extend:qx.ui.core.Widget,construct:function(u,v,w,x){arguments.callee.base.call(this);
this.__rl=new qx.ui.virtual.core.Axis(w,u);
this.__rm=new qx.ui.virtual.core.Axis(x,v);
this.__rn=0;
this.__ro=0;
this.__rp=0;
this.__rq=0;
this.__rr={};
this.__rs={};
this.__rt=new qx.ui.container.Composite();
this.__rt.setUserBounds(0,0,0,0);
this._add(this.__rt);
this.__ru=[];
this.__rl.addListener(bg,this.fullUpdate,this);
this.__rm.addListener(bg,this.fullUpdate,this);
this.addListener(bv,this._onResize,this);
this.addListenerOnce(bj,this._onAppear,this);
this.addListener(bp,this._onClick,this);
this.addListener(ba,this._onDblclick,this);
this.addListener(bo,this._onContextmenu,this);
},events:{cellClick:bi,cellContextmenu:bi,cellDblclick:bi,update:bx,scrollX:bh,scrollY:bh},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__rl:null,__rm:null,__rn:null,__ro:null,__rp:null,__rq:null,__rr:null,__rs:null,__rt:null,__ru:null,__rv:null,__rw:null,__rx:null,DEBUG:false,getRowConfig:function(){return this.__rl;
},getColumnConfig:function(){return this.__rm;
},getChildren:function(){return [this.__rt];
},addLayer:function(bH){{};
this.__ru.push(bH);
bH.setUserBounds(0,0,0,0);
this.__rt.add(bH);
},getLayers:function(){return this.__ru;
},getVisibleLayers:function(){var cd=[];

for(var i=0;i<this.__ru.length;i++){var ce=this.__ru[i];

if(ce.isVisible()){cd.push(ce);
}}return cd;
},getScrollMaxX:function(){var bL=this.getBounds();

if(bL){return Math.max(0,this.__rm.getTotalSize()-bL.width);
}return 0;
},getScrollMaxY:function(){var T=this.getBounds();

if(T){return Math.max(0,this.__rl.getTotalSize()-T.height);
}return 0;
},setScrollY:function(bE){var bF=this.getScrollMaxY();

if(bE<0){bE=0;
}else if(bE>bF){bE=bF;
}
if(this.__rn!==bE){var bG=this.__rn;
this.__rn=bE;
this._deferredUpdateScrollPosition();
this.fireDataEvent(be,bE,bG);
}},getScrollY:function(){return this.__rn;
},setScrollX:function(a){var b=this.getScrollMaxX();

if(a<0){a=0;
}else if(a>b){a=b;
}
if(a!==this.__ro){var c=this.__ro;
this.__ro=a;
this._deferredUpdateScrollPosition();
this.fireDataEvent(bu,a,c);
}},getScrollX:function(){return this.__ro;
},getScrollSize:function(){return {width:this.__rm.getTotalSize(),height:this.__rl.getTotalSize()};
},scrollRowIntoView:function(bM){var bP=this.getBounds();

if(!bP){this.addListenerOnce(bj,function(){this.scrollRowIntoView(bM);
},this);
return;
}var bQ=this.__rl.getItemPosition(bM);
var bO=bQ+this.__rl.getItemSize(bM);
var bN=this.getScrollY();

if(bQ<bN){this.setScrollY(bQ);
}else if(bO>bN+bP.height){this.setScrollY(bO-bP.height);
}},scrollColumnIntoView:function(U){var X=this.getBounds();

if(!X){this.addListenerOnce(bj,function(){this.scrollColumnIntoView(U);
},this);
return;
}var W=this.__rm.getItemPosition(U);
var V=W+this.__rm.getItemSize(U);
var Y=this.getScrollX();

if(W<Y){this.setScrollX(W);
}else if(V>Y+X.width){this.setScrollX(V-X.width);
}},scrollCellIntoView:function(bB,bC){var bD=this.getBounds();

if(!bD){this.addListenerOnce(bj,function(){this.scrollCellIntoView(bB,bC);
},this);
return;
}this.scrollColumnIntoView(bB);
this.scrollRowIntoView(bC);
},getCellAtPosition:function(p,q){var r,s;
var t=this.getContentLocation();

if(!t||q<t.top||q>=t.bottom||p<t.left||p>=t.right){return null;
}r=this.__rl.getItemAtPosition(this.getScrollY()+q-t.top);
s=this.__rm.getItemAtPosition(this.getScrollX()+p-t.left);

if(!r||!s){return null;
}return {row:r.index,column:s.index};
},prefetchX:function(d,f,g,h){var j=this.getVisibleLayers();

if(j.length==0){return;
}var l=this.getBounds();

if(!l){return;
}var m=this.__ro+l.width;
var n=this.__rq-m;

if(this.__ro-this.__rr.left<Math.min(this.__ro,d)||this.__rr.right-m<Math.min(n,g)){this.DEBUG&&console.log(bn);
var o=Math.min(this.__ro,f);
var k=Math.min(n,h);
this._setLayerWindow(j,this.__ro-o,this.__rn,l.width+o+k,l.height,false);
}},prefetchY:function(bR,bS,bT,bU){var bV=this.getVisibleLayers();

if(bV.length==0){return;
}var bY=this.getBounds();

if(!bY){return;
}var bW=this.__rn+bY.height;
var bX=this.__rp-bW;

if(this.__rn-this.__rr.top<Math.min(this.__rn,bR)||this.__rr.bottom-bW<Math.min(bX,bT)){this.DEBUG&&console.log(bm);
var cb=Math.min(this.__rn,bS);
var ca=Math.min(bX,bU);
this._setLayerWindow(bV,this.__ro,this.__rn-cb,bY.width,bY.height+cb+ca,false);
}},_onResize:function(){if(this.getContainerElement().getDomElement()){this.__rv=true;
this._updateScrollPosition();
this.__rv=null;
this.fireEvent(bf);
}},_onAppear:function(){this.fullUpdate();
},_onClick:function(e){this.__ry(e,bl);
},_onContextmenu:function(e){this.__ry(e,bw);
},_onDblclick:function(e){this.__ry(e,br);
},__ry:function(e,y){var z=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());

if(!z){return;
}this.fireNonBubblingEvent(y,qx.ui.virtual.core.CellEvent,[this,e,z.row,z.column]);
},syncWidget:function(){if(this.__rs._fullUpdate){this._fullUpdate();
}else if(this.__rs._updateScrollPosition){this._updateScrollPosition();
}this.__rs={};
},_setLayerWindow:function(A,B,top,C,D,E){var J=this.__rl.getItemAtPosition(top);

if(J){var L=J.index;
var Q=this.__rl.getItemSizes(L,D+J.offset);
var K=qx.lang.Array.sum(Q);
var S=top-J.offset;
var P=top-J.offset+K;
}else{var L=0;
var Q=[];
var K=0;
var S=0;
var P=0;
}var N=this.__rm.getItemAtPosition(B);

if(N){var H=N.index;
var G=this.__rm.getItemSizes(H,C+N.offset);
var M=qx.lang.Array.sum(G);
var R=B-N.offset;
var I=B-N.offset+M;
}else{var H=0;
var G=[];
var M=0;
var R=0;
var I=0;
}this.__rr={top:S,bottom:P,left:R,right:I};
this.__rt.setUserBounds(this.__rr.left-this.__ro,this.__rr.top-this.__rn,M,K);
this.__rw=G;
this.__rx=Q;
this.DEBUG&&qx.ui.core.queue.Manager.flush();

for(var i=0;i<this.__ru.length;i++){var O=new Date();
var F=this.__ru[i];
F.setUserBounds(0,0,M,K);

if(E){F.fullUpdate(L,H,Q,G);
}else{F.updateLayerWindow(L,H,Q,G);
}if(this.DEBUG){this.debug("layer update ("+F.classname+"): "+(new Date()-O)+"ms");
var O=new Date();
qx.ui.core.queue.Manager.flush();
this.debug("layer flush ("+F.classname+"): "+(new Date()-O)+"ms");
}}},__rz:function(){if(this.__rv){return;
}var cc=this.getScrollSize();

if(this.__rp!==cc.height||this.__rq!==cc.width){this.__rp=cc.height;
this.__rq=cc.width;
this.fireEvent(bf);
}},fullUpdate:function(){this.__rs._fullUpdate=1;
qx.ui.core.queue.Widget.add(this);
},isUpdatePending:function(){return !!this.__rs._fullUpdate;
},_fullUpdate:function(){var bz=this.getVisibleLayers();

if(bz.length==0){this.__rz();
return;
}
if(!this.getContainerElement().getDomElement()){return ;
}var bA=this.getBounds();
this.DEBUG&&console.log(bd);
this._setLayerWindow(bz,this.__ro,this.__rn,bA.width,bA.height,true);
this.__rz();
},_deferredUpdateScrollPosition:function(){this.__rs._updateScrollPosition=1;
qx.ui.core.queue.Widget.add(this);
},_updateScrollPosition:function(){var bI=this.getVisibleLayers();

if(bI.length==0){this.__rz();
return;
}var bK=this.getBounds();

if(!bK){return ;
}var bJ={top:this.__rn,bottom:this.__rn+bK.height,left:this.__ro,right:this.__ro+bK.width};

if(this.__rr.top<=bJ.top&&this.__rr.bottom>=bJ.bottom&&this.__rr.left<=bJ.left&&this.__rr.right>=bJ.right){this.DEBUG&&console.log(bk);
this.__rt.setUserBounds(this.__rr.left-bJ.left,this.__rr.top-bJ.top,this.__rr.right-this.__rr.left,this.__rr.bottom-this.__rr.top);
}else{this.DEBUG&&console.log(by);
this._setLayerWindow(bI,this.__ro,this.__rn,bK.width,bK.height,false);
}this.__rz();
}},destruct:function(){this._disposeArray(bs);
this._disposeObjects(bt,bc,bb);
this.__rr=this.__rs=this.__rw=this.__rx=null;
}});
})();
(function(){var w="change",v="qx.event.type.Event",u="qx.ui.virtual.core.Axis";
qx.Class.define(u,{extend:qx.core.Object,construct:function(S,T){arguments.callee.base.call(this);
this.itemCount=T;
this.defaultItemSize=S;
this.customSizes={};
},events:{"change":v},members:{__rA:null,getDefaultItemSize:function(){return this.defaultItemSize;
},setDefaultItemSize:function(I){if(this.defaultItemSize!==I){this.defaultItemSize=I;
this.__rA=null;
this.fireNonBubblingEvent(w);
}},getItemCount:function(){return this.itemCount;
},setItemCount:function(R){if(this.itemCount!==R){this.itemCount=R;
this.__rA=null;
this.fireNonBubblingEvent(w);
}},setItemSize:function(G,H){{};

if(this.customSizes[G]==H){return;
}
if(H===null){delete this.customSizes[G];
}else{this.customSizes[G]=H;
}this.__rA=null;
this.fireNonBubblingEvent(w);
},getItemSize:function(F){return this.customSizes[F]||this.defaultItemSize;
},resetItemSizes:function(){this.customSizes={};
this.__rA=null;
this.fireNonBubblingEvent(w);
},__rB:function(){if(this.__rA){return this.__rA;
}var e=this.defaultItemSize;
var m=this.itemCount;
var g=[];

for(var j in this.customSizes){var c=parseInt(j);

if(c<m){g.push(c);
}}
if(g.length==0){var h=[{startIndex:0,endIndex:m-1,firstItemSize:e,rangeStart:0,rangeEnd:m*e-1}];
this.__rA=h;
return h;
}g.sort(function(a,b){return a>b?1:-1;
});
var h=[];
var d=0;

for(var i=0;i<g.length;i++){var c=g[i];

if(c>=m){break;
}var l=this.customSizes[c];
var f=c*e+d;
d+=l-e;
h[i]={startIndex:c,firstItemSize:l,rangeStart:f};

if(i>0){h[i-1].rangeEnd=f-1;
h[i-1].endIndex=c-1;
}}if(h[0].rangeStart>0){h.unshift({startIndex:0,endIndex:h[0].startIndex-1,firstItemSize:e,rangeStart:0,rangeEnd:h[0].rangeStart-1});
}var n=h[h.length-1];
var k=(m-n.startIndex-1)*e;
n.rangeEnd=n.rangeStart+n.firstItemSize+k-1;
n.endIndex=m-1;
this.__rA=h;
return h;
},__rC:function(U){var V=this.__rA||this.__rB();
var W=0;
var Y=V.length-1;
while(true){var ba=W+((Y-W)>>1);
var X=V[ba];

if(X.rangeEnd<U){W=ba+1;
}else if(X.rangeStart>U){Y=ba-1;
}else{return X;
}}},getItemAtPosition:function(o){if(o<0||o>=this.getTotalSize()){return null;
}var q=this.__rC(o);
var s=q.rangeStart;
var p=q.startIndex;
var t=q.firstItemSize;

if(s+t>o){return {index:p,offset:o-s};
}else{var r=this.defaultItemSize;
return {index:p+1+Math.floor((o-s-t)/r),offset:(o-s-t)%r};
}},__rD:function(J){var K=this.__rA||this.__rB();
var L=0;
var N=K.length-1;
while(true){var O=L+((N-L)>>1);
var M=K[O];

if(M.endIndex<J){L=O+1;
}else if(M.startIndex>J){N=O-1;
}else{return M;
}}},getItemPosition:function(P){if(P<0||P>=this.itemCount){return null;
}var Q=this.__rD(P);

if(Q.startIndex==P){return Q.rangeStart;
}else{return Q.rangeStart+Q.firstItemSize+(P-Q.startIndex-1)*this.defaultItemSize;
}},getTotalSize:function(){var E=this.__rA||this.__rB();
return E[E.length-1].rangeEnd+1;
},getItemSizes:function(x,y){var z=this.customSizes;
var C=this.defaultItemSize;
var B=0;
var A=[];
var i=0;

while(B<y){var D=z[x++]||C;
B+=D;
A[i++]=D;

if(x>=this.itemCount){break;
}}return A;
}},destruct:function(){this.customSizes=this.__rA=null;
}});
})();
(function(){var b="Integer",a="qx.ui.virtual.core.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);
this.setRow(e);
this.setColumn(f);
}}});
})();
(function(){var a="qx.ui.virtual.core.ILayer";
qx.Interface.define(a,{members:{fullUpdate:function(b,c,d,e){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(b);
this.assertPositiveInteger(c);
this.assertArray(d);
this.assertArray(e);
},updateLayerWindow:function(f,g,h,i){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(f);
this.assertPositiveInteger(g);
this.assertArray(h);
this.assertArray(i);
},updateLayerData:function(){}}});
})();
(function(){var o="qx.ui.virtual.layer.Abstract",n="abstract";
qx.Class.define(o,{extend:qx.ui.core.Widget,type:n,implement:[qx.ui.virtual.core.ILayer],construct:function(){arguments.callee.base.call(this);
this.__rE={};
},properties:{anonymous:{refine:true,init:true}},members:{__rE:null,__rF:null,__rG:null,__rH:null,__rI:null,__rJ:null,getFirstRow:function(){return this.__rG;
},getFirstColumn:function(){return this.__rH;
},getRowSizes:function(){return this.__rI||[];
},getColumnSizes:function(){return this.__rJ||[];
},syncWidget:function(){if(!this.getContentElement().getDomElement()){return;
}
if(this.__rE.fullUpdate||this.__rE.updateLayerWindow&&this.__rE.updateLayerData){this._fullUpdate.apply(this,this.__rF);
}else if(this.__rE.updateLayerWindow){this._updateLayerWindow.apply(this,this.__rF);
}else if(this.__rE.updateLayerData&&this.__rI){this._updateLayerData();
}
if(this.__rE.fullUpdate||this.__rE.updateLayerWindow){var a=this.__rF;
this.__rG=a[0];
this.__rH=a[1];
this.__rI=a[2];
this.__rJ=a[3];
}this.__rE={};
},_updateLayerData:function(){this._fullUpdate(this.__rG,this.__rH,this.__rI,this.__rJ);
},_fullUpdate:function(b,c,d,e){throw new Error("Abstract method '_fullUpdate' called!");
},_updateLayerWindow:function(p,q,r,s){this._fullUpdate(p,q,r,s);
},updateLayerData:function(){this.__rE.updateLayerData=true;
qx.ui.core.queue.Widget.add(this);
},fullUpdate:function(f,g,h,i){this.__rF=arguments;
this.__rE.fullUpdate=true;
qx.ui.core.queue.Widget.add(this);
},updateLayerWindow:function(j,k,l,m){this.__rF=arguments;
this.__rE.updateLayerWindow=true;
qx.ui.core.queue.Widget.add(this);
}},destruct:function(){this.__rE=this.__rF=this.__rI=this.__rJ=null;
}});
})();
(function(){var s="",r="px;",q="' ",p="qx.ui.virtual.layer.HtmlCell",o="width:",n="top:",m=">",l="</div>",k="<div ",j="style='",g="height:",i="class='",h="left:",f="html";
qx.Class.define(p,{extend:qx.ui.virtual.layer.Abstract,construct:function(t){arguments.callee.base.call(this);
this.setZIndex(2);
{};
this._cellProvider=t;
},members:{_getCellSizeStyle:function(a,b,c,d){var e=s;

if(qx.bom.client.Feature.CONTENT_BOX){a-=c;
b-=d;
}e+=o+a+r;
e+=g+b+r;
return e;
},_fullUpdate:function(u,v,w,z){var F=[];
var G=0;
var top=0;
var H=u;
var B=v;

for(var y=0;y<w.length;y++){var G=0;
var B=v;
var C=w[y];

for(var x=0;x<z.length;x++){var E=z[x];
var A=this._cellProvider.getCellProperties(H,B);
var D=A.insets||[0,0];
F.push(k,j,h,G,r,n,top,r,this._getCellSizeStyle(E,C,D[0],D[1]),A.style||s,q,i,A.classes||s,q,A.attributes||s,m,A.content||s,l);
B++;
G+=E;
}top+=C;
H++;
}this.getContentElement().setAttribute(f,F.join(s));
}},destruct:function(){this._cellProvider=null;
}});
})();
(function(){var t="px;",s="</div>",r="background-color:",q="horizontal",p="position: absolute;",o="<div style='",n="'>",m="top:",l="",k="height: ",d="gray",j="width: 100%;",g="width: ",c="height: 100%;",b="qx.ui.virtual.layer.GridLines",f="left:",e="html",h="Color",a="PositiveInteger",i="top: 0px;";
qx.Class.define(b,{extend:qx.ui.virtual.layer.Abstract,construct:function(V,W,X){arguments.callee.base.call(this);
this.setZIndex(1);

if(W){this.setDefaultLineColor(W);
}
if(X!==undefined){this.setDefaultLineSize(X);
}this.__rK=[];
this.__rL=[];
this._isHorizontal=(V||q)==q;
},properties:{defaultLineColor:{init:d,check:h,themeable:true},defaultLineSize:{init:1,check:a,themeable:true}},members:{__rK:null,__rL:null,isHorizontal:function(){return this._isHorizontal;
},setLineColor:function(Y,ba){{};
this.__rK[Y]=ba;

if(this.__rM(Y)){this.updateLayerData();
}},setLineSize:function(O,P){{};
this.__rL[O]=P;

if(this.__rM(O)){this.updateLayerData();
}},__rM:function(I){if(this._isHorizontal){var M=this.getFirstColumn();
var K=M+this.getColumnSizes().length-1;
return I>=M&&I<=K;
}else{var L=this.getFirstRow();
var J=L+this.getRowSizes().length-1;
return I>=L&&I<=J;
}},getLineSize:function(N){return this.__rL[N]||this.getDefaultLineSize();
},getLineColor:function(u){return this.__rK[u]||this.getDefaultLineColor();
},__rN:function(Q,R,S){var top=0;
var T,U;

for(var y=0;y<S.length-1;y++){T=this.getLineColor(R+y);
U=this.getLineSize(R+y);
top+=S[y];
Q.push(o,p,k+U+t,j,m,top-((U>1)?Math.floor(U/2):1),t,r,T,n,s);
}},__rO:function(C,D,E){var H=0;
var F,G;

for(var x=0;x<E.length-1;x++){F=this.getLineColor(D+x);
G=this.getLineSize(D+x);
H+=E[x];
C.push(o,p,g+G+t,c,i,f,H-((G>1)?Math.floor(G/2):1),t,r,F,n,s);
}},_fullUpdate:function(v,w,z,A){var B=[];

if(this._isHorizontal){this.__rN(B,v,z);
}else{this.__rO(B,w,A);
}this.getContentElement().setAttribute(e,B.join(l));
},_updateLayerWindow:function(bb,bc,bd,be){var bf=bb!==this.getFirstRow()||bd.length!==this.getRowSizes().length;
var bg=bc!==this.getFirstColumn()||be.length!==this.getColumnSizes().length;

if((this._isHorizontal&&bf)||(!this._isHorizontal&&bg)){this._fullUpdate(bb,bc,bd,be);
}}},destruct:function(){this.__rK=this.__rL=null;
}});
})();
(function(){var l="map_view",k="openLayerMap",j="#",i='basic',h="World Map",g="appear",f="http://labs.metacarta.com/wms-c/Basic.py?",d='image/png',c="st.widget.Map",b="sMap",a="id";
qx.Class.define(c,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b}},construct:function(t){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow());

if(t){this.__rP=t;
}else{this.__rP=this.__rR();
}this.__rQ=null;
this._createChildControl(l);
this.addListener(g,this._onAppear,this);
},members:{__rQ:null,__rP:null,view:null,update:function(){if(this.__rQ){this.__rQ.updateSize();
}},_createChildControlImpl:function(m){var n;

switch(m){case l:n=new qx.ui.core.Widget();
this.view=n;
this._add(n);
break;
}return n||arguments.callee.base.call(this,m);
},__rR:function(){var q=0;

while(true){var r=k+q;
var s=qx.bom.Collection.query(j+r);

if(s.length==0){return r;
}q++;
}},_onAppear:function(e){if(this.__rQ==null){var o=this.view.getContentElement();
qx.bom.element.Attribute.set(o,a,this.__rP);
qx.html.Element.flush();
this.__rQ=new OpenLayers.Map(this.__rP,{'maxResolution':1.40625/2});
var p=new OpenLayers.Layer.WMS(h,f,{layers:i,format:d});
this.__rQ.addLayers([p]);
this.__rQ.addControl(new OpenLayers.Control.LayerSwitcher());
this.__rQ.zoomToMaxExtent();
}}}});
})();
(function(){var m="mshtml",l="pop.push.reverse.shift.sort.splice.unshift.join.slice",k="number",j="qx.type.BaseArray",h="qx.client",g=".";
qx.Class.define(j,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function e(p){if(qx.core.Variant.isSet(h,m)){d.prototype={length:0,$$isArray:true};
var s=l.split(g);

for(var length=s.length;length;){d.prototype[s[--length]]=Array.prototype[s[length]];
}}var t=Array.prototype.slice;
d.prototype.concat=function(){var o=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var n;

if(arguments[i] instanceof d){n=t.call(arguments[i],0);
}else if(arguments[i] instanceof Array){n=arguments[i];
}else{n=[arguments[i]];
}o.push.apply(o,n);
}return o;
};
d.prototype.toString=function(){return t.call(this,0).toString();
};
d.prototype.toLocaleString=function(){return t.call(this,0).toLocaleString();
};
d.prototype.constructor=d;
d.prototype.indexOf=qx.lang.Core.arrayIndexOf;
d.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
d.prototype.forEach=qx.lang.Core.arrayForEach;
d.prototype.some=qx.lang.Core.arraySome;
d.prototype.every=qx.lang.Core.arrayEvery;
var q=qx.lang.Core.arrayFilter;
var r=qx.lang.Core.arrayMap;
d.prototype.filter=function(){var a=new this.constructor;
a.push.apply(a,q.apply(this,arguments));
return a;
};
d.prototype.map=function(){var b=new this.constructor;
b.push.apply(b,r.apply(this,arguments));
return b;
};
d.prototype.slice=function(){var f=new this.constructor;
f.push.apply(f,Array.prototype.slice.apply(this,arguments));
return f;
};
d.prototype.splice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.splice.apply(this,arguments));
return u;
};
d.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
d.prototype.valueOf=function(){return this.length;
};
return d;
}function d(length){if(arguments.length===1&&typeof length===k){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function c(){}c.prototype=[];
d.prototype=new c;
d.prototype.length=0;
qx.type.BaseArray=e(d);
})();
})();
(function(){var dV="",dU="string",dT="div",dS="previousSibling",dR="*",dQ="href",dP="e",dO="[object Array]",dN="Syntax error, unrecognized expression: ",dM="HTML",eD="text",eC="file",eB="+",eA="'/>",ez="CLASS",ey="radio",ex="script",ew="className",ev="BUTTON",eu="TAG",ed="password",ee="htmlFor",eb="reset",ec="<a href='#'></a>",dY="<a name='",ea="#",dW="qx.bom.Selector",dX="button",ef="parentNode",eg="NAME",em="number",el="submit",eo="image",en="<div class='test e'></div><div class='test'></div>",eq="~",ep="checkbox",ei="sourceIndex",et="\\",es="hidden",er=".TEST",eh="<p class='TEST'></p>",ej="undefined",ek="ID";
qx.Bootstrap.define(dW,{statics:{query:null,matches:null}});
(function(){var cp=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,cx=0,ct=Object.prototype.toString,cr=false,cz=true;
var ck=[0,0];
ck.sort(function(){cz=false;
return 0;
});
var cl=function(fn,fo,fp,fq){fp=fp||[];
var fz=fo=fo||document;

if(fo.nodeType!==1&&fo.nodeType!==9){return [];
}
if(!fn||typeof fn!==dU){return fp;
}var fw=[],m,ft,fr,fB,fv,fu=true,fs=cq(fo),fy=fn;
while((cp.exec(dV),m=cp.exec(fy))!==null){fy=m[3];
fw.push(m[1]);

if(m[2]){fv=m[3];
break;
}}
if(fw.length>1&&cs.exec(fn)){if(fw.length===2&&cn.relative[fw[0]]){ft=cm(fw[0]+fw[1],fo);
}else{ft=cn.relative[fw[0]]?[fo]:cl(fw.shift(),fo);

while(fw.length){fn=fw.shift();

if(cn.relative[fn])fn+=fw.shift();
ft=cm(fn,ft);
}}}else{if(!fq&&fw.length>1&&fo.nodeType===9&&!fs&&cn.match.ID.test(fw[0])&&!cn.match.ID.test(fw[fw.length-1])){var fx=cl.find(fw.shift(),fo,fs);
fo=fx.expr?cl.filter(fx.expr,fx.set)[0]:fx.set[0];
}
if(fo){var fx=fq?
{expr:fw.pop(),set:cj(fq)}:cl.find(fw.pop(),fw.length===1&&(fw[0]===eq||fw[0]===eB)&&fo.parentNode?fo.parentNode:fo,fs);
ft=fx.expr?cl.filter(fx.expr,fx.set):fx.set;

if(fw.length>0){fr=cj(ft);
}else{fu=false;
}
while(fw.length){var fC=fw.pop(),fA=fC;

if(!cn.relative[fC]){fC=dV;
}else{fA=fw.pop();
}
if(fA==null){fA=fo;
}cn.relative[fC](fr,fA,fs);
}}else{fr=fw=[];
}}
if(!fr){fr=ft;
}
if(!fr){throw dN+(fC||fn);
}
if(ct.call(fr)===dO){if(!fu){fp.push.apply(fp,fr);
}else if(fo&&fo.nodeType===1){for(var i=0;fr[i]!=null;i++){if(fr[i]&&(fr[i]===true||fr[i].nodeType===1&&co(fo,fr[i]))){fp.push(ft[i]);
}}}else{for(var i=0;fr[i]!=null;i++){if(fr[i]&&fr[i].nodeType===1){fp.push(ft[i]);
}}}}else{cj(fr,fp);
}
if(fv){cl(fv,fz,fp,fq);
cl.uniqueSort(fp);
}return fp;
};
cl.uniqueSort=function(bg){if(cu){cr=cz;
bg.sort(cu);

if(cr){for(var i=1;i<bg.length;i++){if(bg[i]===bg[i-1]){bg.splice(i--,1);
}}}}return bg;
};
cl.matches=function(A,B){return cl(A,null,null,B);
};
cl.find=function(bE,bF,bG){var bH,bJ;

if(!bE){return [];
}
for(var i=0,l=cn.order.length;i<l;i++){var bI=cn.order[i],bJ;

if((bJ=cn.leftMatch[bI].exec(bE))){var bK=bJ[1];
bJ.splice(1,1);

if(bK.substr(bK.length-1)!==et){bJ[1]=(bJ[1]||dV).replace(/\\/g,dV);
bH=cn.find[bI](bJ,bF,bG);

if(bH!=null){bE=bE.replace(cn.match[bI],dV);
break;
}}}}
if(!bH){bH=bF.getElementsByTagName(dR);
}return {set:bH,expr:bE};
};
cl.filter=function(eX,eY,fa,fb){var fc=eX,fh=[],fd=eY,fm,fl,fe=eY&&eY[0]&&cq(eY[0]);

while(eX&&eY.length){for(var fk in cn.filter){if((fm=cn.match[fk].exec(eX))!=null){var ff=cn.filter[fk],fj,fg;
fl=false;

if(fd==fh){fh=[];
}
if(cn.preFilter[fk]){fm=cn.preFilter[fk](fm,fd,fa,fh,fb,fe);

if(!fm){fl=fj=true;
}else if(fm===true){continue;
}}
if(fm){for(var i=0;(fg=fd[i])!=null;i++){if(fg){fj=ff(fg,fm,i,fd);
var fi=fb^!!fj;

if(fa&&fj!=null){if(fi){fl=true;
}else{fd[i]=false;
}}else if(fi){fh.push(fg);
fl=true;
}}}}
if(fj!==undefined){if(!fa){fd=fh;
}eX=eX.replace(cn.match[fk],dV);

if(!fl){return [];
}break;
}}}if(eX==fc){if(fl==null){throw dN+eX;
}else{break;
}}fc=eX;
}return fd;
};
var cn=cl.selectors={order:[ek,eg,eu],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":ew,"for":ee},attrHandle:{href:function(bX){return bX.getAttribute(dQ);
}},relative:{"+":function(bj,bk,bl){var bm=typeof bk===dU,bo=bm&&!/\W/.test(bk),bp=bm&&!bo;

if(bo&&!bl){bk=bk.toUpperCase();
}
for(var i=0,l=bj.length,bn;i<l;i++){if((bn=bj[i])){while((bn=bn.previousSibling)&&bn.nodeType!==1){}bj[i]=bp||bn&&bn.nodeName===bk?bn||false:bn===bk;
}}
if(bp){cl.filter(bk,bj,true);
}},">":function(U,V,W){var X=typeof V===dU;

if(X&&!/\W/.test(V)){V=W?V:V.toUpperCase();

for(var i=0,l=U.length;i<l;i++){var Y=U[i];

if(Y){var parent=Y.parentNode;
U[i]=parent.nodeName===V?parent:false;
}}}else{for(var i=0,l=U.length;i<l;i++){var Y=U[i];

if(Y){U[i]=X?Y.parentNode:Y.parentNode===V;
}}
if(X){cl.filter(V,U,true);
}}},"":function(j,k,n){var o=cx++,p=cy;

if(!/\W/.test(k)){var q=k=n?k:k.toUpperCase();
p=cA;
}p(ef,k,o,j,q,n);
},"~":function(C,D,E){var F=cx++,G=cy;

if(typeof D===dU&&!/\W/.test(D)){var H=D=E?D:D.toUpperCase();
G=cA;
}G(dS,D,F,C,H,E);
}},find:{ID:function(dH,dI,dJ){if(typeof dI.getElementById!=="undefined"&&!dJ){var m=dI.getElementById(dH[1]);
return m?[m]:[];
}},NAME:function(eE,eF,eG){if(typeof eF.getElementsByName!=="undefined"){var eI=[],eH=eF.getElementsByName(eE[1]);

for(var i=0,l=eH.length;i<l;i++){if(eH[i].getAttribute("name")===eE[1]){eI.push(eH[i]);
}}return eI.length===0?null:eI;
}},TAG:function(ch,ci){return ci.getElementsByTagName(ch[1]);
}},preFilter:{CLASS:function(cM,cN,cO,cP,cQ,cR){cM=" "+cM[1].replace(/\\/g,"")+" ";

if(cR){return cM;
}
for(var i=0,cS;(cS=cN[i])!=null;i++){if(cS){if(cQ^(cS.className&&(" "+cS.className+" ").indexOf(cM)>=0)){if(!cO)cP.push(cS);
}else if(cO){cN[i]=false;
}}}return false;
},ID:function(c){return c[1].replace(/\\/g,"");
},TAG:function(cb,cc){for(var i=0;cc[i]===false;i++){}return cc[i]&&cq(cc[i])?cb[1]:cb[1].toUpperCase();
},CHILD:function(fH){if(fH[1]=="nth"){var fI=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(fH[2]=="even"&&"2n"||fH[2]=="odd"&&"2n+1"||!/\D/.test(fH[2])&&"0n+"+fH[2]||fH[2]);
fH[2]=(fI[1]+(fI[2]||1))-0;
fH[3]=fI[3]-0;
}fH[0]=cx++;
return fH;
},ATTR:function(dp,dq,dr,ds,dt,du){var name=dp[1].replace(/\\/g,"");

if(!du&&cn.attrMap[name]){dp[1]=cn.attrMap[name];
}
if(dp[2]==="~="){dp[4]=" "+dp[4]+" ";
}return dp;
},PSEUDO:function(cB,cC,cD,cE,cF){if(cB[1]==="not"){if((cp.exec(cB[3])||"").length>1||/^\w/.test(cB[3])){cB[3]=cl(cB[3],null,null,cC);
}else{var cG=cl.filter(cB[3],cC,cD,true^cF);

if(!cD){cE.push.apply(cE,cG);
}return false;
}}else if(cn.match.POS.test(cB[0])||cn.match.CHILD.test(cB[0])){return true;
}return cB;
},POS:function(dF){dF.unshift(true);
return dF;
}},filters:{enabled:function(ce){return ce.disabled===false&&ce.type!==es;
},disabled:function(ca){return ca.disabled===true;
},checked:function(dG){return dG.checked===true;
},selected:function(fF){fF.parentNode.selectedIndex;
return fF.selected===true;
},parent:function(bD){return !!bD.firstChild;
},empty:function(cL){return !cL.firstChild;
},has:function(bB,i,bC){return !!cl(bC[3],bB).length;
},header:function(bL){return /h\d/i.test(bL.nodeName);
},text:function(v){return eD===v.type;
},radio:function(I){return ey===I.type;
},checkbox:function(eJ){return ep===eJ.type;
},file:function(ba){return eC===ba.type;
},password:function(db){return ed===db.type;
},submit:function(bY){return el===bY.type;
},image:function(fG){return eo===fG.type;
},reset:function(fO){return eb===fO.type;
},button:function(eN){return dX===eN.type||eN.nodeName.toUpperCase()===ev;
},input:function(eQ){return /input|select|textarea|button/i.test(eQ.nodeName);
}},setFilters:{first:function(bW,i){return i===0;
},last:function(s,i,t,u){return i===u.length-1;
},even:function(K,i){return i%2===0;
},odd:function(h,i){return i%2===1;
},lt:function(cf,i,cg){return i<cg[3]-0;
},gt:function(w,i,x){return i>x[3]-0;
},nth:function(cY,i,da){return da[3]-0==i;
},eq:function(y,i,z){return z[3]-0==i;
}},filter:{PSEUDO:function(fJ,fK,i,fL){var name=fK[1],fM=cn.filters[name];

if(fM){return fM(fJ,i,fK,fL);
}else if(name==="contains"){return (fJ.textContent||fJ.innerText||"").indexOf(fK[3])>=0;
}else if(name==="not"){var fN=fK[3];

for(var i=0,l=fN.length;i<l;i++){if(fN[i]===fJ){return false;
}}return true;
}},CHILD:function(bs,bt){var bz=bt[1],bu=bs;

switch(bz){case 'only':case 'first':while((bu=bu.previousSibling)){if(bu.nodeType===1)return false;
}
if(bz=='first')return true;
bu=bs;
case 'last':while((bu=bu.nextSibling)){if(bu.nodeType===1)return false;
}return true;
case 'nth':var bA=bt[2],bw=bt[3];

if(bA==1&&bw==0){return true;
}var by=bt[0],parent=bs.parentNode;

if(parent&&(parent.sizcache!==by||!bs.nodeIndex)){var bv=0;

for(bu=parent.firstChild;bu;bu=bu.nextSibling){if(bu.nodeType===1){bu.nodeIndex=++bv;
}}parent.sizcache=by;
}var bx=bs.nodeIndex-bw;

if(bA==0){return bx==0;
}else{return (bx%bA==0&&bx/bA>=0);
}}},ID:function(eO,eP){return eO.nodeType===1&&eO.getAttribute("id")===eP;
},TAG:function(bq,br){return (br==="*"&&bq.nodeType===1)||bq.nodeName===br;
},CLASS:function(cW,cX){return (" "+(cW.className||cW.getAttribute("class"))+" ").indexOf(cX)>-1;
},ATTR:function(dw,dx){var name=dx[1],dB=cn.attrHandle[name]?cn.attrHandle[name](dw):dw[name]!=null?dw[name]:dw.getAttribute(name),dA=dB+"",dz=dx[2],dy=dx[4];
return dB==null?dz==="!=":dz==="="?dA===dy:dz==="*="?dA.indexOf(dy)>=0:dz==="~="?(" "+dA+" ").indexOf(dy)>=0:!dy?dA&&dB!==false:dz==="!="?dA!=dy:dz==="^="?dA.indexOf(dy)===0:dz==="$="?dA.substr(dA.length-dy.length)===dy:dz==="|="?dA===dy||dA.substr(0,dy.length+1)===dy+"-":false;
},POS:function(bb,bc,i,bd){var name=bc[2],be=cn.setFilters[name];

if(be){return be(bb,i,bc,bd);
}}}};
var cs=cn.match.POS;

for(var cw in cn.match){cn.match[cw]=new RegExp(cn.match[cw].source+/(?![^\[]*\])(?![^\(]*\))/.source);
cn.leftMatch[cw]=new RegExp(/(^(?:.|\r|\n)*?)/.source+cn.match[cw].source);
}var cj=function(fD,fE){fD=Array.prototype.slice.call(fD,0);

if(fE){fE.push.apply(fE,fD);
return fE;
}return fD;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0);
}catch(e){cj=function(d,f){var g=f||[];

if(ct.call(d)===dO){Array.prototype.push.apply(g,d);
}else{if(typeof d.length===em){for(var i=0,l=d.length;i<l;i++){g.push(d[i]);
}}else{for(var i=0;d[i];i++){g.push(d[i]);
}}}return g;
};
}var cu;

if(document.documentElement.compareDocumentPosition){cu=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){cr=true;
}return 0;
}var dv=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(dv===0){cr=true;
}return dv;
};
}else if(ei in document.documentElement){cu=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){cr=true;
}return 0;
}var bf=a.sourceIndex-b.sourceIndex;

if(bf===0){cr=true;
}return bf;
};
}else if(document.createRange){cu=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){cr=true;
}return 0;
}var eV=a.ownerDocument.createRange(),eW=b.ownerDocument.createRange();
eV.setStart(a,0);
eV.setEnd(a,0);
eW.setStart(b,0);
eW.setEnd(b,0);
var eU=eV.compareBoundaryPoints(Range.START_TO_END,eW);

if(eU===0){cr=true;
}return eU;
};
}(function(){var eM=document.createElement(dT),eL=ex+(new Date).getTime();
eM.innerHTML=dY+eL+eA;
var eK=document.documentElement;
eK.insertBefore(eM,eK.firstChild);
if(!!document.getElementById(eL)){cn.find.ID=function(cT,cU,cV){if(typeof cU.getElementById!=="undefined"&&!cV){var m=cU.getElementById(cT[1]);
return m?m.id===cT[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===cT[1]?[m]:undefined:[];
}};
cn.filter.ID=function(dl,dm){var dn=typeof dl.getAttributeNode!=="undefined"&&dl.getAttributeNode("id");
return dl.nodeType===1&&dn&&dn.nodeValue===dm;
};
}eK.removeChild(eM);
eK=eM=null;
})();
(function(){var cd=document.createElement(dT);
cd.appendChild(document.createComment(dV));
if(cd.getElementsByTagName(dR).length>0){cn.find.TAG=function(bM,bN){var bP=bN.getElementsByTagName(bM[1]);
if(bM[1]==="*"){var bO=[];

for(var i=0;bP[i];i++){if(bP[i].nodeType===1){bO.push(bP[i]);
}}bP=bO;
}return bP;
};
}cd.innerHTML=ec;

if(cd.firstChild&&typeof cd.firstChild.getAttribute!==ej&&cd.firstChild.getAttribute(dQ)!==ea){cn.attrHandle.href=function(J){return J.getAttribute(dQ,2);
};
}cd=null;
})();

if(document.querySelectorAll)(function(){var eS=cl,eR=document.createElement(dT);
eR.innerHTML=eh;
if(eR.querySelectorAll&&eR.querySelectorAll(er).length===0){return;
}cl=function(cH,cI,cJ,cK){cI=cI||document;
if(!cK&&cI.nodeType===9&&!cq(cI)){try{return cj(cI.querySelectorAll(cH),cJ);
}catch(e){}}return eS(cH,cI,cJ,cK);
};

for(var eT in eS){cl[eT]=eS[eT];
}eR=null;
})();

if(document.getElementsByClassName&&document.documentElement.getElementsByClassName)(function(){var fP=document.createElement(dT);
fP.innerHTML=en;
if(fP.getElementsByClassName(dP).length===0)return;
fP.lastChild.className=dP;

if(fP.getElementsByClassName(dP).length===1)return;
cn.order.splice(1,0,ez);
cn.find.CLASS=function(dC,dD,dE){if(typeof dD.getElementsByClassName!=="undefined"&&!dE){return dD.getElementsByClassName(dC[1]);
}};
fP=null;
})();
function cA(L,M,N,O,P,Q){var R=L==dS&&!Q;

for(var i=0,l=O.length;i<l;i++){var T=O[i];

if(T){if(R&&T.nodeType===1){T.sizcache=N;
T.sizset=i;
}T=T[L];
var S=false;

while(T){if(T.sizcache===N){S=O[T.sizset];
break;
}
if(T.nodeType===1&&!Q){T.sizcache=N;
T.sizset=i;
}
if(T.nodeName===M){S=T;
break;
}T=T[L];
}O[i]=S;
}}}function cy(dc,dd,de,df,dg,dh){var di=dc==dS&&!dh;

for(var i=0,l=df.length;i<l;i++){var dk=df[i];

if(dk){if(di&&dk.nodeType===1){dk.sizcache=de;
dk.sizset=i;
}dk=dk[dc];
var dj=false;

while(dk){if(dk.sizcache===de){dj=df[dk.sizset];
break;
}
if(dk.nodeType===1){if(!dh){dk.sizcache=de;
dk.sizset=i;
}
if(typeof dd!==dU){if(dk===dd){dj=true;
break;
}}else if(cl.filter(dd,[dk]).length>0){dj=dk;
break;
}}dk=dk[dc];
}df[i]=dj;
}}}var co=document.compareDocumentPosition?
function(a,b){return a.compareDocumentPosition(b)&16;
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
var cq=function(r){return r.nodeType===9&&r.documentElement.nodeName!==dM||!!r.ownerDocument&&r.ownerDocument.documentElement.nodeName!==dM;
};
var cm=function(bQ,bR){var bT=[],bS=dV,bV,bU=bR.nodeType?[bR]:bR;
while((bV=cn.match.PSEUDO.exec(bQ))){bS+=bV[0];
bQ=bQ.replace(cn.match.PSEUDO,dV);
}bQ=cn.relative[bQ]?bQ+dR:bQ;

for(var i=0,l=bU.length;i<l;i++){cl(bQ,bU[i],bT);
}return cl.filter(bS,bT);
};
var cv=qx.bom.Selector;
cv.query=function(dK,dL){return cl(dK,dL);
};
cv.matches=function(bh,bi){return cl(bh,null,null,bi);
};
})();
})();
(function(){var q="(\\s|$)",p="(^|\\s)",o="",n="qx.bom.element.Class",m=" ",l="$2";
qx.Class.define(n,{statics:{add:function(e,name){if(!this.has(e,name)){e.className+=(e.className?m:o)+name;
}return name;
},get:function(k){return k.className;
},has:function(c,name){var d=new RegExp(p+name+q);
return d.test(c.className);
},remove:function(a,name){var b=new RegExp(p+name+q);
a.className=a.className.replace(b,l);
return name;
},replace:function(h,i,j){this.remove(h,i);
return this.add(h,j);
},toggle:function(f,name,g){if(g==null){g=!this.has(f,name);
}g?this.add(f,name):this.remove(f,name);
return name;
}}});
})();
(function(){var by="get",bx="set",bw="reset",bv=":not(",bu="getValue",bt="append",bs=")",br="getPreviousSiblings",bq="getOffsetParent",bp="qx.bom.Collection",bW="setValue",bV="prepend",bU="string",bT="getAncestors",bS="#",bR="remove",bQ=">*",bP="add",bO="*",bN="",bF="addListener",bG="has",bD="toggle",bE="getSiblings",bB="replace",bC="after",bz="replaceWith",bA="setCss",bH="setStyles",bI="before",bK="getNextSiblings",bJ="getPosition",bM="getCss",bL="removeListener";
(function(){var dd=function(cC,cD){return function(p,q,r,s,t,u){var length=this.length;

if(length>0){var v=cC[cD];

for(var i=0;i<length;i++){if(this[i].nodeType===1){v.call(cC,this[i],p,q,r,s,t,u);
}}}return this;
};
};
var dc=function(C,D){return function(dr,ds,dt,du,dv,dw){if(this.length>0){var dx=this[0].nodeType===1?C[D](this[0],dr,ds,dt,du,dv,dw):null;

if(dx&&dx.nodeType){return this.__rW([dx]);
}else{return dx;
}}return null;
};
};
qx.Class.define(bp,{extend:qx.type.BaseArray,statics:{query:function(a,b){var c=qx.bom.Selector.query(a,b);
return qx.lang.Array.cast(c,qx.bom.Collection);
},id:function(cP){var cQ=document.getElementById(cP);
if(cQ&&cQ.id!=cP){return qx.bom.Collection.query(bS+cP);
}return new qx.bom.Collection(cQ);
},html:function(dk,dl){var dm=qx.bom.Html.clean([dk],dl);
return qx.lang.Array.cast(dm,qx.bom.Collection);
},__rS:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(ca,cb){var cd=qx.bom.Collection;
if(ca.nodeType){return new cd(ca);
}else if(typeof ca===bU){var cc=cd.__rS.exec(ca);

if(cc){return cc[1]?cd.html(cc[1],cb):cd.id(cc[3].substring(1));
}else{return cd.query(ca,cb);
}}else{return qx.lang.Array.cast(ca,qx.bom.Collection);
}}},members:{__rT:null,setAttribute:dd(qx.bom.element.Attribute,bx),resetAttribute:dd(qx.bom.element.Attribute,bw),getAttribute:dc(qx.bom.element.Attribute,by),addClass:dd(qx.bom.element.Class,bP),getClass:dc(qx.bom.element.Class,by),hasClass:dc(qx.bom.element.Class,bG),removeClass:dd(qx.bom.element.Class,bR),replaceClass:dd(qx.bom.element.Class,bB),toggleClass:dd(qx.bom.element.Class,bD),setValue:dd(qx.bom.Input,bW),getValue:dc(qx.bom.Input,bu),setStyle:dd(qx.bom.element.Style,bx),setStyles:dd(qx.bom.element.Style,bH),resetStyle:dd(qx.bom.element.Style,bw),getStyle:dc(qx.bom.element.Style,by),setCss:dd(qx.bom.element.Style,bA),getCss:dd(qx.bom.element.Style,bM),getOffset:dc(qx.bom.element.Location,by),getPosition:dc(qx.bom.element.Location,bJ),getOffsetParent:dc(qx.bom.element.Location,bq),setScrollLeft:function(cE){var Node=qx.dom.Node;

for(var i=0,l=this.length,cF;i<l;i++){cF=this[i];

if(Node.isElement(cF)){cF.scrollLeft=cE;
}else if(Node.isWindow(cF)){cF.scrollTo(cE,this.getScrollTop(cF));
}else if(Node.isDocument(cF)){Node.getWindow(cF).scrollTo(cE,this.getScrollTop(cF));
}}return this;
},setScrollTop:function(f){var Node=qx.dom.Node;

for(var i=0,l=this.length,g;i<l;i++){g=this[i];

if(Node.isElement(g)){g.scrollTop=f;
}else if(Node.isWindow(g)){g.scrollTo(this.getScrollLeft(g),f);
}else if(Node.isDocument(g)){Node.getWindow(g).scrollTo(this.getScrollLeft(g),f);
}}return this;
},getScrollLeft:function(){var cu=this[0];

if(!cu){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(cu)||Node.isDocument(cu)){return qx.bom.Viewport.getScrollLeft();
}return cu.scrollLeft;
},getScrollTop:function(){var cK=this[0];

if(!cK){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(cK)||Node.isDocument(cK)){return qx.bom.Viewport.getScrollTop();
}return cK.scrollTop;
},getWidth:function(){var bo=this[0];
var Node=qx.dom.Node;

if(bo){if(Node.isElement(bo)){return qx.bom.element.Dimension.getWidth(bo);
}else if(Node.isDocument(bo)){return qx.bom.Document.getWidth(Node.getWindow(bo));
}else if(Node.isWindow(bo)){return qx.bom.Viewport.getWidth(bo);
}}return null;
},getContentWidth:function(){var w=this[0];

if(qx.dom.Node.isElement(w)){return qx.bom.element.Dimension.getContentWidth(w);
}return null;
},getHeight:function(){var K=this[0];
var Node=qx.dom.Node;

if(K){if(Node.isElement(K)){return qx.bom.element.Dimension.getHeight(K);
}else if(Node.isDocument(K)){return qx.bom.Document.getHeight(Node.getWindow(K));
}else if(Node.isWindow(K)){return qx.bom.Viewport.getHeight(K);
}}return null;
},getContentHeight:function(){var cG=this[0];

if(qx.dom.Node.isElement(cG)){return qx.bom.element.Dimension.getContentHeight(cG);
}return null;
},addListener:dd(qx.bom.Element,bF),removeListener:dd(qx.bom.Element,bL),eq:function(A){return this.slice(A,+A+1);
},filter:function(x,y){var z;

if(qx.lang.Type.isFunction(x)){z=qx.type.BaseArray.prototype.filter.call(this,x,y);
}else{z=qx.bom.Selector.matches(x,this);
}return this.__rW(z);
},is:function(cI){return !!cI&&qx.bom.Selector.matches(cI,this).length>0;
},__rU:/^.[^:#\[\.,]*$/,not:function(cv){if(this.__rU.test(cv)){var cw=qx.bom.Selector.matches(bv+cv+bs,this);
return this.__rW(cw);
}var cw=qx.bom.Selector.matches(cv,this);
return this.filter(function(cT){return cw.indexOf(cT)===-1;
});
},add:function(cL,cM){var cN=qx.bom.Selector.query(cL,cM);
var cO=qx.lang.Array.unique(this.concat(cN));
return this.__rW(cO);
},children:function(cU){var cV=[];

for(var i=0,l=this.length;i<l;i++){cV.push.apply(cV,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(cU){cV=qx.bom.Selector.matches(cU,cV);
}return this.__rW(cV);
},closest:function(ce){var cf=new qx.bom.Collection(1);
var ch=qx.bom.Selector;
var cg=this.map(function(dg){while(dg&&dg.ownerDocument){cf[0]=dg;

if(ch.matches(ce,cf).length>0){return dg;
}dg=dg.parentNode;
}});
return this.__rW(qx.lang.Array.unique(cg));
},contents:function(){var dq=[];
var dp=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){dq.push.apply(dq,dp.fromCollection(this[i].childNodes));
}return this.__rW(dq);
},find:function(F){var H=qx.bom.Selector;
if(this.length===1){return this.__rW(H.query(F,this[0]));
}else{var G=[];

for(var i=0,l=this.length;i<l;i++){G.push.apply(G,H.query(F,this[i]));
}return this.__rW(qx.lang.Array.unique(G));
}},next:function(h){var k=qx.dom.Hierarchy;
var m=this.map(k.getNextElementSibling,k);
if(h){m=qx.bom.Selector.matches(h,m);
}return this.__rW(m);
},nextAll:function(dj){return this.__rV(bK,dj);
},prev:function(cY){var da=qx.dom.Hierarchy;
var db=this.map(da.getPreviousElementSibling,da);
if(cY){db=qx.bom.Selector.matches(cY,db);
}return this.__rW(db);
},prevAll:function(J){return this.__rV(br,J);
},parent:function(be){var Element=qx.dom.Element;
var bf=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(be){bf=qx.bom.Selector.matches(be,bf);
}return this.__rW(bf);
},parents:function(ci){return this.__rV(bT,ci);
},siblings:function(d){return this.__rV(bE,d);
},__rV:function(U,V){var X=[];
var W=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){X.push.apply(X,W[U](this[i]));
}var Y=qx.lang.Array.unique(X);
if(V){Y=qx.bom.Selector.matches(V,Y);
}return this.__rW(Y);
},__rW:function(dh){var di=new qx.bom.Collection;
di.__rT=this;
dh=Array.prototype.slice.call(dh,0);
di.push.apply(di,dh);
return di;
},andSelf:function(){return this.add(this.__rT);
},end:function(){return this.__rT||new qx.bom.Collection();
},__rX:function(cj,ck){var cp=this[0];
var co=cp.ownerDocument||cp;
var cn=co.createDocumentFragment();
var cr=qx.bom.Html.clean(cj,co,cn);
var ct=cn.firstChild;
if(ct){var cl=this.length-1;

for(var i=0,l=cl;i<l;i++){ck.call(this,this[i],cn.cloneNode(true));
}ck.call(this,this[cl],cn);
}if(cr){var cm;
var cs=qx.io.ScriptLoader;
var cq=qx.lang.Function;

for(var i=0,l=cr.length;i<l;i++){cm=cr[i];
if(cm.src){cs.get().load(cm.src);
}else{cq.globalEval(cm.text||cm.textContent||cm.innerHTML||bN);
}if(cm.parentNode){cm.parentNode.removeChild(cm);
}}}return this;
},__rY:function(L,M){var O=qx.bom.Selector;
var N=qx.lang.Array;
var Q=[];

for(var i=0,l=L.length;i<l;i++){{};
Q.push.apply(Q,O.query(L[i]));
}Q=N.cast(N.unique(Q),qx.bom.Collection);
for(var i=0,P=this.length;i<P;i++){Q[M](this[i]);
}return this;
},append:function(R){return this.__rX(arguments,this.__sa);
},prepend:function(bX){return this.__rX(arguments,this.__sb);
},__sa:function(S,T){S.appendChild(T);
},__sb:function(cW,cX){cW.insertBefore(cX,cW.firstChild);
},appendTo:function(cH){return this.__rY(arguments,bt);
},prependTo:function(e){return this.__rY(arguments,bV);
},before:function(dy){return this.__rX(arguments,this.__sc);
},after:function(E){return this.__rX(arguments,this.__sd);
},__sc:function(cz,cA){cz.parentNode.insertBefore(cA,cz);
},__sd:function(cR,cS){cR.parentNode.insertBefore(cS,cR.nextSibling);
},insertBefore:function(n){return this.__rY(arguments,bI);
},insertAfter:function(bg){return this.__rY(arguments,bC);
},wrapAll:function(content){var cy=this[0];

if(cy){var cx=qx.bom.Collection.create(content,cy.ownerDocument).clone();
if(cy.parentNode){cy.parentNode.insertBefore(cx[0],cy);
}cx.map(this.__se).append(this);
}return this;
},__se:function(B){while(B.firstChild){B=B.firstChild;
}return B;
},wrapInner:function(content){var o=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){o[0]=this[i];
o.contents().wrapAll(content);
}return this;
},wrap:function(content){var bY=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){bY[0]=this[i];
bY.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(cJ){return this.__rY(arguments,bz);
},remove:function(ba){var bc=this;

if(ba){bc=this.filter(ba);

if(bc.length==0){return this;
}}for(var i=0,bd=bc.length,bb;i<bd;i++){bb=bc[i];

if(bb.parentNode){bb.parentNode.removeChild(bb);
}}return bc;
},destroy:function(bh){if(this.length==0){return this;
}var bj=qx.bom.Selector;
var bm=this;

if(bh){bm=this.filter(bh);

if(bm.length==0){return this;
}}var bl=qx.event.Registration.getManager(this[0]);

for(var i=0,l=bm.length,bk,bn;i<l;i++){bk=bm[i];
bl.removeAllListeners(bk);
bn=bj.query(bO,bk);

for(var j=0,bi=bn.length;j<bi;j++){bl.removeAllListeners(bn[j]);
}if(bk.parentNode){bk.parentNode.removeChild(bk);
}}if(bh){bm.end();
qx.lang.Array.exclude(this,bm);
}else{this.length=0;
}return this;
},empty:function(){var dn=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){dn.query(bQ,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(I){var Element=qx.bom.Element;
return I?
this.map(function(cB){return Element.clone(cB,true);
}):this.map(Element.clone,Element);
}},defer:function(de,df){if(window.$==null){window.$=de.create;
}}});
})();
})();
(function(){var m="qx.client",k="string",h="script",g="<table>",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__sf:function(U,V,W){return W.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+z+W+H;
},__sg:{opt:[1,e,c],leg:[1,f,u],table:[1,g,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Variant.select(m,{"mshtml":[1,s,d],"default":null})},__sh:function(X,Y){var bf=Y.createElement(J);
X=X.replace(/(<(\w+)[^>]*?)\/>/g,this.__sf);
var bb=X.replace(/^\s+/,t).substring(0,5).toLowerCase();
var be,ba=this.__sg;

if(!bb.indexOf(B)){be=ba.opt;
}else if(!bb.indexOf(o)){be=ba.leg;
}else if(bb.match(/^<(thead|tbody|tfoot|colg|cap)/)){be=ba.table;
}else if(!bb.indexOf(w)){be=ba.tr;
}else if(!bb.indexOf(D)||!bb.indexOf(F)){be=ba.td;
}else if(!bb.indexOf(a)){be=ba.col;
}else{be=ba.def;
}if(be){bf.innerHTML=be[1]+X+be[2];
var bd=be[0];

while(bd--){bf=bf.lastChild;
}}else{bf.innerHTML=X;
}if(qx.core.Variant.isSet(m,q)){var bg=/<tbody/i.test(X);
var bc=!bb.indexOf(p)&&!bg?bf.firstChild&&bf.firstChild.childNodes:be[1]==g&&!bg?bf.childNodes:[];

for(var j=bc.length-1;j>=0;--j){if(bc[j].tagName.toLowerCase()===v&&!bc[j].childNodes.length){bc[j].parentNode.removeChild(bc[j]);
}}if(/^\s/.test(X)){bf.insertBefore(Y.createTextNode(X.match(/^\s*/)[0]),bf.firstChild);
}}return qx.lang.Array.fromCollection(bf.childNodes);
},clean:function(K,L,M){L=L||document;
if(typeof L.createElement===x){L=L.ownerDocument||L[0]&&L[0].ownerDocument||document;
}if(!M&&K.length===1&&typeof K[0]===k){var T=/^<(\w+)\s*\/?>$/.exec(K[0]);

if(T){return [L.createElement(T[1])];
}}var N,P=[];

for(var i=0,l=K.length;i<l;i++){N=K[i];
if(typeof N===k){N=this.__sh(N,L);
}if(N.nodeType){P.push(N);
}else if(N instanceof qx.type.BaseArray){P.push.apply(P,Array.prototype.slice.call(N,0));
}else if(N.toElement){P.push(N.toElement());
}else{P.push.apply(P,N);
}}if(M){var S=[],R=qx.lang.Array,Q,O;

for(var i=0;P[i];i++){Q=P[i];

if(Q.nodeType==1&&Q.tagName.toLowerCase()===h&&(!Q.type||Q.type.toLowerCase()===A)){if(Q.parentNode){Q.parentNode.removeChild(P[i]);
}S.push(Q);
}else{if(Q.nodeType===1){O=R.fromCollection(Q.getElementsByTagName(h));
P.splice.apply(P,[i+1,0].concat(O));
}M.appendChild(Q);
}}return S;
}return P;
}}});
})();
(function(){var o="qx.dom.Element";
qx.Class.define(o,{statics:{hasChild:function(parent,w){return w.parentNode===parent;
},hasChildren:function(p){return !!p.firstChild;
},hasChildElements:function(A){A=A.firstChild;

while(A){if(A.nodeType===1){return true;
}A=A.nextSibling;
}return false;
},getParentElement:function(a){return a.parentNode;
},isInDom:function(x,y){if(!y){y=window;
}var z=y.document.getElementsByTagName(x.nodeName);

for(var i=0,l=z.length;i<l;i++){if(z[i]===x){return true;
}}return false;
},insertAt:function(j,parent,k){var m=parent.childNodes[k];

if(m){parent.insertBefore(j,m);
}else{parent.appendChild(j);
}return true;
},insertBegin:function(B,parent){if(parent.firstChild){this.insertBefore(B,parent.firstChild);
}else{parent.appendChild(B);
}},insertEnd:function(n,parent){parent.appendChild(n);
},insertBefore:function(c,d){d.parentNode.insertBefore(c,d);
return true;
},insertAfter:function(u,v){var parent=v.parentNode;

if(v==parent.lastChild){parent.appendChild(u);
}else{return this.insertBefore(u,v.nextSibling);
}return true;
},remove:function(b){if(!b.parentNode){return false;
}b.parentNode.removeChild(b);
return true;
},removeChild:function(e,parent){if(e.parentNode!==parent){return false;
}parent.removeChild(e);
return true;
},removeChildAt:function(q,parent){var r=parent.childNodes[q];

if(!r){return false;
}parent.removeChild(r);
return true;
},replaceChild:function(s,t){if(!t.parentNode){return false;
}t.parentNode.replaceChild(s,t);
return true;
},replaceAt:function(f,g,parent){var h=parent.childNodes[g];

if(!h){return false;
}parent.replaceChild(f,h);
return true;
}}});
})();
(function(){var t="success",s="head",r="complete",q="error",p="load",o="fail",n="loaded",m="readystatechange",l="qx.io.ScriptLoader",k="script",h="qx.client",j="text/javascript",i="abort";
qx.Class.define(l,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__si=qx.lang.Function.bind(this.__so,this);
this.__sj=document.createElement(k);
},members:{__sk:null,__sl:null,__sm:null,__si:null,__sj:null,load:function(b,c,d){if(this.__sk){throw new Error("Another request is still running!");
}this.__sk=true;
var f=document.getElementsByTagName(s)[0];
var g=this.__sj;
this.__sl=c||null;
this.__sm=d||window;
g.type=j;
g.onerror=g.onload=g.onreadystatechange=this.__si;
g.src=b;
f.appendChild(g);
},abort:function(){if(this.__sk){this.__sn(i);
}},__sn:function(status){var a=this.__sj;
a.onerror=a.onload=a.onreadystatechange=null;
document.getElementsByTagName(s)[0].removeChild(a);
delete this.__sk;
if(this.__sl){this.__sl.call(this.__sm,status);
delete this.__sl;
}},__so:qx.event.GlobalError.observeMethod(qx.core.Variant.select(h,{"mshtml":function(e){var u=this.__sj.readyState;

if(u==n){this.__sn(t);
}else if(u==r){this.__sn(t);
}else{return;
}},"opera":function(e){if(qx.lang.Type.isString(e)||e.type===q){return this.__sn(o);
}else if(e.type===p){return this.__sn(t);
}else{return;
}},"default":function(e){if(qx.lang.Type.isString(e)||e.type===q){this.__sn(o);
}else if(e.type===p){this.__sn(t);
}else if(e.type===m&&(e.target.readyState===r||e.target.readyState===n)){this.__sn(t);
}else{return;
}}}))},destruct:function(){this.__sj=this.__si=this.__sl=this.__sm=null;
}});
})();
(function(){var D="file/id",C="tree",B="changeOpen",A="Cut",z="New",y='menu',x="document-properties.png",w='shared files',v="changeValue",u="sTree",bi="menu",bh="edit-cut.png",bg="drop",bf="qx/icon/Oxygen/22/places/folder-open.png",be="_applyValue",bd='private',bc='pictures',bb="move",ba="edit-delete.png",Y='document',K="edit-paste.png",L='public',I="qx/icon/Oxygen/22/places/folder.png",J="dragstart",G="",H="qx/icon/Oxygen/22/places/user-home.png",E="edit-copy.png",F="st.widget.Tree",M="Rename",N="Search",Q="Copy",P="Delete",S="Paste",R="qx/icon/Oxygen/22/actions/",U="folder-new.png",T='id',O='tree',X="edit-find.png",W='Hello',V='/';
qx.Class.define(F,{extend:qx.ui.core.Widget,construct:function(c){arguments.callee.base.call(this,c);
this._setLayout(new qx.ui.layout.Grow());
this._add(this._createChildControl(O));

if(!c){c=this.__sv();
}this.setValue(c);
},properties:{appearance:{refine:true,init:u},value:{nullable:true,apply:be,event:v}},members:{__sp:null,__sq:null,__sr:null,_applyValue:function(bp){for(i in bp){var bq=bp[i];
var br=new qx.ui.tree.TreeFolder(bq.label);

if(!bq.label){bq.label=G;
}
if(!bq.desc){bq.desc=bq.label;
}
if(!bq.icon){if(!this.__sq){bq.icon=H;
}else{bq.icon=I;
bq.iconOpen=bf;
}}br.set({icon:bq.icon,toolTipText:bq.desc});
br.attributes=bq;
br.set({draggable:true,droppable:true});
br.addListener(B,this.__ss);
br.addListener(J,this.__st);
br.supportsDrop=this.__supportsDrop;
br.addListener(bg,this.__su,this);

if(!this.__sq){this.__sq=br;
this.__sq.setOpen(true);
this.__sp.setRoot(this.__sq);
}else{var bs=this.find(bq.parent);

if(bs){bs.add(br);
}}}},__ss:function(e){var b=e.getTarget();
var a=b.attributes.icon;

if(b.getOpen()){if(b.attributes.iconOpen){a=b.attributes.iconOpen;
}}b.set({icon:a});
},__st:function(e){node=e.getTarget().attributes;
e.addType(D);
e.addData(D,node.id);
e.addAction(bb);
},__su:function(e){var s=e.getCurrentTarget().attributes.id;
var t=e.getData(D);
this.debug("move,"+t+"->"+s);
var r=this.find(t);
var q=this.find(s);

if(r&&q&&(r!=q)){r.attributes.parent=q.attributes.id;
q.add(r);
this.__sp.addToSelection(r);
}},_createChildControlImpl:function(d){var f;

switch(d){case C:f=new qx.ui.tree.Tree().set({hideRoot:true});
f.setDecorator(null);
f.setContextMenu(this._createChildControl(y));
this.__sp=f;
break;
case bi:f=new qx.ui.menu.Menu();
var o=R;
var h=new qx.ui.menu.Button(N,o+X);
f.add(h);
var m=new qx.ui.menu.Button(z,o+U);
f.add(m);
var g=new qx.ui.menu.Button(M,o+x);
f.add(g);
var n=new qx.ui.menu.Button(A,o+bh);
f.add(n);
var l=new qx.ui.menu.Button(Q,o+E);
f.add(l);
var j=new qx.ui.menu.Button(S,o+K);
f.add(j);
var k=new qx.ui.menu.Button(P,o+ba);
f.add(k);
__sr=f;
break;
}return f||arguments.callee.base.call(this,d);
},find:function(bj,bk,bl){if(!bj){return null;
}
if(!bk){bk=T;
}
if(!bl){bl=this.__sq;
}if(bl.attributes&&bl.attributes[bk]==bj){return bl;
}else{var bn=bl.getChildren();

for(var i=0;i<bn.length;i++){var bm=bn[i];
var bo=this.find(bj,bk,bm);

if(bo){return bo;
}}}return null;
},__sv:function(){var p=[{id:1,label:V},{id:2,parent:1,label:bd},{id:3,parent:1,label:L},{id:4,parent:2,label:Y},{id:5,parent:2,label:bc},{id:6,parent:3,label:w},{id:7,parent:4,label:W}];
return p;
}},destruct:function(){this._disposeObjects(C);
}});
})();
(function(){var r="execute",q="",p="tree",o="info",n="list",m="toolbar",l="st/icon/catalog/icon.png",k="qx/icon/Oxygen/16/actions/folder-new.png",j="content",i="changeValue",J="sFileManager",I="NewFolder",H='main',G="_applyValue",F="center",E="Icons",D="Tiles",C="Details",B="search",A="icon",y="north",z="main",w="st/icon/catalog/tile.png",x="horizontal",u="st/icon/catalog/list.png",v="south",s="st.widget.FileManager",t="information";
qx.Class.define(s,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:J},value:{nullable:true,apply:G,init:q,event:i}},construct:function(h){arguments.callee.base.call(this);
this.model=h;
this._setLayout(new qx.ui.layout.Grow());
this._add(this._createChildControl(H));
},members:{model:null,_createChildControlImpl:function(K){var L;

switch(K){case z:L=new qx.ui.container.Composite();
L.setLayout(new qx.ui.layout.Dock());
L.add(this._createChildControl(m),{edge:y});
L.add(this._createChildControl(o),{edge:v});
var N=new qx.ui.splitpane.Pane(x);
N.add(this._createChildControl(p),1);
N.add(this._createChildControl(n),2);
L.add(N,{edge:F});
break;
case j:case p:L=new st.widget.Tree();
L.setDecorator(null);
break;
case n:L=new qx.ui.container.Stack();
var M=st.Utils.createDummyTable();
L.add(M);
var O=new st.widget.HtmlGallery();
L.add(O);
this.__sw=L;
break;
case m:L=this.__sx();
break;
case o:L=new qx.ui.basic.Label(t).set({rich:true});
break;
}return L||arguments.callee.base.call(this,K);
},__sx:function(){var toolbar=new qx.ui.toolbar.ToolBar();
var Q=new qx.ui.toolbar.Button(I,k).set({});
var P=new qx.ui.toolbar.Part;
P.add(Q);
toolbar.add(P);
toolbar.addSpacer();
toolbar.add(this.getSplitButton());
var R=new st.widget.SearchInput(B).set({margin:6,width:200});
toolbar.add(R);
return toolbar;
},getSplitButton:function(){var a=new qx.ui.menu.Menu;
var d=new qx.ui.menu.Button(E,l);
var e=new qx.ui.menu.Button(D,w);
var c=new qx.ui.menu.Button(C,u);
a.setMinWidth(120);
var f=function(){this.__sw.next();
};
e.addListener(r,f,this);
c.addListener(r,f,this);
a.add(d);
a.add(e);
a.add(c);
var b=new qx.ui.toolbar.SplitButton(q,l,a);
b.addListener(r,f,this);
var g=new qx.ui.toolbar.Part;
g.add(b);
g.setShow(A);
return g;
}}});
})();
(function(){var cb="_applyLayoutChange",ca="left",bY="top",bX="Decorator",bW="Integer",bV="x",bU="y",bT="auto",bS="qx.ui.layout.Dock",bR="_applySort",bL="west",bQ="north",bO="south",bK="center",bJ="east",bN="Boolean",bM="bottom",bP="right";
qx.Class.define(bS,{extend:qx.ui.layout.Abstract,construct:function(X,Y,ba,bb){arguments.callee.base.call(this);

if(X){this.setSpacingX(X);
}
if(Y){this.setSpacingY(Y);
}
if(ba){this.setSeparatorX(ba);
}
if(bb){this.setSeparatorY(bb);
}},properties:{sort:{check:[bT,bU,bV],init:bT,apply:bR},separatorX:{check:bX,nullable:true,apply:cb},separatorY:{check:bX,nullable:true,apply:cb},connectSeparators:{check:bN,init:false,apply:cb},spacingX:{check:bW,init:0,apply:cb},spacingY:{check:bW,init:0,apply:cb}},members:{__sy:null,__sz:null,verifyLayoutProperty:null,_applySort:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__sA:{north:1,south:2,west:3,east:4,center:5},__sB:{1:bY,2:bM,3:ca,4:bP},__sC:function(){var bz=this._getLayoutChildren();
var bH,bB;
var length=bz.length;
var bD=[];
var bG=[];
var bE=[];
var bA=this.getSort()===bU;
var bF=this.getSort()===bV;

for(var i=0;i<length;i++){bH=bz[i];
bE=bH.getLayoutProperties().edge;

if(bE===bK){if(bB){throw new Error("It is not allowed to have more than one child aligned to 'center'!");
}bB=bH;
}else if(bF||bA){if(bE===bQ||bE===bO){bA?bD.push(bH):bG.push(bH);
}else if(bE===bL||bE===bJ){bA?bG.push(bH):bD.push(bH);
}}else{bD.push(bH);
}}var bI=bD.concat(bG);

if(bB){bI.push(bB);
}this.__sy=bI;
var bC=[];

for(var i=0;i<length;i++){bE=bI[i].getLayoutProperties().edge;
bC[i]=this.__sA[bE]||5;
}this.__sz=bC;
delete this._invalidChildrenCache;
},renderLayout:function(k,l){if(this._invalidChildrenCache){this.__sC();
}var E=qx.ui.layout.Util;
var r=this.__sy;
var F=this.__sz;
var length=r.length;
var u,n,t,z,A,K,x,o,H;
var O=[];
var w=[];
var N=this._getSeparatorWidths();
var S=this.getSpacingX();
var R=this.getSpacingY();
var s=-S;
var G=-R;

if(N.x){s-=N.x+S;
}
if(N.y){G-=N.y+R;
}
for(var i=0;i<length;i++){n=r[i];
z=n.getLayoutProperties();
t=n.getSizeHint();
x=t.width;
o=t.height;

if(z.width!=null){x=Math.floor(k*parseFloat(z.width)/100);

if(x<t.minWidth){x=t.minWidth;
}else if(x>t.maxWidth){x=t.maxWidth;
}}
if(z.height!=null){o=Math.floor(l*parseFloat(z.height)/100);

if(o<t.minHeight){o=t.minHeight;
}else if(o>t.maxHeight){o=t.maxHeight;
}}O[i]=x;
w[i]=o;
switch(F[i]){case 1:case 2:G+=o+n.getMarginTop()+n.getMarginBottom()+R;

if(N.y){G+=N.y+R;
}break;
case 3:case 4:s+=x+n.getMarginLeft()+n.getMarginRight()+S;

if(N.x){s+=N.x+S;
}break;
default:s+=x+n.getMarginLeft()+n.getMarginRight()+S;
G+=o+n.getMarginTop()+n.getMarginBottom()+R;

if(N.x){s+=N.x+S;
}
if(N.y){G+=N.y+R;
}}}if(s!=k){u={};
K=s<k;

for(var i=0;i<length;i++){n=r[i];

switch(F[i]){case 3:case 4:case 5:A=n.getLayoutProperties().flex;
if(A==null&&F[i]==5){A=1;
}
if(A>0){t=n.getSizeHint();
u[i]={min:t.minWidth,value:O[i],max:t.maxWidth,flex:A};
}}}var p=E.computeFlexOffsets(u,k,s);

for(var i in p){H=p[i].offset;
O[i]+=H;
s+=H;
}}if(G!=l){u=[];
K=G<l;

for(var i=0;i<length;i++){n=r[i];

switch(F[i]){case 1:case 2:case 5:A=n.getLayoutProperties().flex;
if(A==null&&F[i]==5){A=1;
}
if(A>0){t=n.getSizeHint();
u[i]={min:t.minHeight,value:w[i],max:t.maxHeight,flex:A};
}}}var p=E.computeFlexOffsets(u,l,G);

for(var i in p){H=p[i].offset;
w[i]+=H;
G+=H;
}}this._clearSeparators();
var L=this.getSeparatorX(),M=this.getSeparatorY();
var P=this.getConnectSeparators();
var C=0,J=0;
var W,top,x,o,B,T;
var D,Q,V,m;
var U,v,y,q;
var I=this.__sB;

for(var i=0;i<length;i++){n=r[i];
T=F[i];
t=n.getSizeHint();
U=n.getMarginTop();
v=n.getMarginBottom();
y=n.getMarginLeft();
q=n.getMarginRight();
switch(T){case 1:case 2:x=k-y-q;
if(x<t.minWidth){x=t.minWidth;
}else if(x>t.maxWidth){x=t.maxWidth;
}o=w[i];
top=C+E.computeVerticalAlignOffset(I[T],o,l,U,v);
W=J+E.computeHorizontalAlignOffset(n.getAlignX()||ca,x,k,y,q);
if(N.y){if(T==1){Q=C+o+U+R+v;
}else{Q=C+l-o-U-R-v-N.y;
}D=W;
V=k;

if(P&&D>0){D-=S+y;
V+=(S)*2;
}else{D-=y;
}this._renderSeparator(M,{left:D,top:Q,width:V,height:N.y});
}B=o+U+v+R;

if(N.y){B+=N.y+R;
}l-=B;
if(T==1){C+=B;
}break;
case 3:case 4:o=l-U-v;
if(o<t.minHeight){o=t.minHeight;
}else if(o>t.maxHeight){o=t.maxHeight;
}x=O[i];
W=J+E.computeHorizontalAlignOffset(I[T],x,k,y,q);
top=C+E.computeVerticalAlignOffset(n.getAlignY()||bY,o,l,U,v);
if(N.x){if(T==3){D=J+x+y+S+q;
}else{D=J+k-x-y-S-q-N.x;
}Q=top;
m=l;

if(P&&Q>0){Q-=R+U;
m+=(R)*2;
}else{Q-=U;
}this._renderSeparator(L,{left:D,top:Q,width:N.x,height:m});
}B=x+y+q+S;

if(N.x){B+=N.x+S;
}k-=B;
if(T==3){J+=B;
}break;
default:x=k-y-q;
o=l-U-v;
if(x<t.minWidth){x=t.minWidth;
}else if(x>t.maxWidth){x=t.maxWidth;
}if(o<t.minHeight){o=t.minHeight;
}else if(o>t.maxHeight){o=t.maxHeight;
}W=J+E.computeHorizontalAlignOffset(n.getAlignX()||ca,x,k,y,q);
top=C+E.computeVerticalAlignOffset(n.getAlignY()||bY,o,l,U,v);
}n.renderLayout(W,top,x,o);
}},_getSeparatorWidths:function(){var b=this.getSeparatorX(),a=this.getSeparatorY();

if(b||a){var g=qx.theme.manager.Decoration.getInstance();
}
if(b){var h=g.resolve(b);
var d=h.getInsets();
var e=d.left+d.right;
}
if(a){var j=g.resolve(a);
var c=j.getInsets();
var f=c.top+c.bottom;
}return {x:e||0,y:f||0};
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__sC();
}var bf=this.__sy;
var bp=this.__sz;
var length=bf.length;
var bj,bq;
var bl,bk;
var bm=0,bx=0;
var bc=0,bs=0;
var bn=0,bw=0;
var bd=0,br=0;
var bt=this._getSeparatorWidths();
var bv=this.getSpacingX(),bu=this.getSpacingY();
var bh=-bv,bg=-bu;

if(bt.x){bh-=bt.x+bv;
}
if(bt.y){bg-=bt.y+bu;
}for(var i=0;i<length;i++){bq=bf[i];
bj=bq.getSizeHint();
bl=bq.getMarginLeft()+bq.getMarginRight();
bk=bq.getMarginTop()+bq.getMarginBottom();
switch(bp[i]){case 1:case 2:bn=Math.max(bn,bj.width+bm+bl);
bw=Math.max(bw,bj.minWidth+bx+bl);
bd+=bj.height+bk;
br+=bj.minHeight+bk;
bg+=bu;

if(bt.y){bg+=bt.y+bu;
}break;
case 3:case 4:bc=Math.max(bc,bj.height+bd+bk);
bs=Math.max(bs,bj.minHeight+br+bk);
bm+=bj.width+bl;
bx+=bj.minWidth+bl;
bh+=bv;

if(bt.x){bh+=bt.x+bv;
}break;
default:bm+=bj.width+bl;
bx+=bj.minWidth+bl;
bd+=bj.height+bk;
br+=bj.minHeight+bk;
bh+=bv;

if(bt.x){bh+=bt.x+bv;
}bg+=bu;

if(bt.y){bg+=bt.y+bu;
}}}var bi=Math.max(bx,bw)+bh;
var by=Math.max(bm,bn)+bh;
var bo=Math.max(bs,br)+bg;
var be=Math.max(bc,bd)+bg;
return {minWidth:bi,width:by,minHeight:bo,height:be};
}},destruct:function(){this.__sz=this.__sy=null;
}});
})();
(function(){var T="splitter",S="slider",R="mousedown",Q="mouseout",P="mousemove",O="mouseup",N="losecapture",M="active",L="horizontal",K="vertical",bk="knob",bj="Integer",bi="height",bh="row-resize",bg="move",bf="maxHeight",be="width",bd="_applyOrientation",bc="mouseover",bb="splitpane",Y="qx.ui.splitpane.Pane",ba="_applyOffset",W="minHeight",X="minWidth",U="col-resize",V="maxWidth";
qx.Class.define(Y,{extend:qx.ui.core.Widget,construct:function(r){arguments.callee.base.call(this);
this.__lb=[];
if(r){this.setOrientation(r);
}else{this.initOrientation();
}this.addListener(R,this._onMouseDown);
this.addListener(O,this._onMouseUp);
this.addListener(P,this._onMouseMove);
this.addListener(Q,this._onMouseOut);
this.addListener(N,this._onMouseUp);
},properties:{appearance:{refine:true,init:bb},offset:{check:bj,init:6,apply:ba},orientation:{init:L,check:[L,K],apply:bd}},members:{__lc:null,__ld:false,__le:null,__lf:null,__lg:null,__lh:null,__li:null,__lb:null,_createChildControlImpl:function(A){var B;

switch(A){case S:B=new qx.ui.splitpane.Slider(this);
B.exclude();
this._add(B,{type:A});
break;
case T:B=new qx.ui.splitpane.Splitter(this);
this._add(B,{type:A});
B.addListener(bg,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){B.addListener(bc,this._onSplitterMouseOver,B);
}break;
}return B||arguments.callee.base.call(this,A);
},_applyOrientation:function(C,D){var E=this.getChildControl(S);
var H=this.getChildControl(T);
this.__lg=C===L;
var G=this._getLayout();

if(G){G.dispose();
}var F=C===K?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(F);
H.removeState(D);
H.addState(C);
H.getChildControl(bk).removeState(D);
H.getChildControl(bk).addState(C);
E.removeState(D);
E.addState(C);
},_applyOffset:function(a,b){var c=this.getChildControl(T);

if(b===0){c.removeListener(R,this._onMouseDown,this);
c.removeListener(P,this._onMouseMove,this);
c.removeListener(Q,this._onMouseOut,this);
c.removeListener(O,this._onMouseUp,this);
c.removeListener(N,this._onMouseUp,this);
this.addListener(R,this._onMouseDown);
this.addListener(O,this._onMouseUp);
this.addListener(P,this._onMouseMove);
this.addListener(Q,this._onMouseOut);
this.addListener(N,this._onMouseUp);
}
if(a===0){this.removeListener(R,this._onMouseDown);
this.removeListener(O,this._onMouseUp);
this.removeListener(P,this._onMouseMove);
this.removeListener(Q,this._onMouseOut);
this.removeListener(N,this._onMouseUp);
c.addListener(R,this._onMouseDown,this);
c.addListener(P,this._onMouseMove,this);
c.addListener(Q,this._onMouseOut,this);
c.addListener(O,this._onMouseUp,this);
c.addListener(N,this._onMouseUp,this);
}},add:function(I,J){if(J==null){this._add(I);
}else{this._add(I,{flex:J});
}this.__lb.push(I);
},remove:function(z){this._remove(z);
qx.lang.Array.remove(this.__lb,z);
},getChildren:function(){return this.__lb;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var s=this.getChildControl(T);
var u=s.getContainerLocation();
var t=this.getContentLocation();
this.__lc=this.__lg?e.getDocumentLeft()-u.left+t.left:e.getDocumentTop()-u.top+t.top;
var w=this.getChildControl(S);
var v=s.getBounds();
w.setUserBounds(v.left,v.top,v.width,v.height);
w.setZIndex(s.getZIndex()+1);
w.show();
this.__ld=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__ld){this.__lk();
var p=this.getChildControl(S);
var q=this.__lh;

if(this.__lg){p.setDomLeft(q);
}else{p.setDomTop(q);
}e.stop();
}else{this.__lj();
}},_onMouseOut:function(e){this._setLastMousePosition(-1,-1);
this.__lj();
},_onMouseUp:function(e){if(!this.__ld){return;
}this._finalizeSizes();
var d=this.getChildControl(S);
d.exclude();
this.__ld=false;
this.releaseCapture();
this.__lj();
e.stop();
},_onSplitterMove:function(){this.__lj();
},_onSplitterMouseOver:function(){this.addState(M);
},_finalizeSizes:function(){var bo=this.__lh;
var bl=this.__li;

if(bo==null){return;
}var bq=this._getChildren();
var bp=bq[2];
var bm=bq[3];
var bn=bp.getLayoutProperties().flex;
var br=bm.getLayoutProperties().flex;
if((bn!=0)&&(br!=0)){bp.setLayoutProperties({flex:bo});
bm.setLayoutProperties({flex:bl});
}else{if(this.__lg){bp.setWidth(bo);
bm.setWidth(bl);
}else{bp.setHeight(bo);
bm.setHeight(bl);
}}},_isNear:function(){var f=this.getChildControl(T);
var h=f.getBounds();
var j=f.getContainerLocation();
var g=this.getOffset();
if(!j){return;
}var k=this.__le;
var l=h.width;
var i=j.left;

if(l<g){i-=Math.floor((g-l)/2);
l=g;
}
if(k<i||k>(i+l)){return false;
}var k=this.__lf;
var l=h.height;
var i=j.top;

if(l<g){i-=Math.floor((g-l)/2);
l=g;
}
if(k<i||k>(i+l)){return false;
}return true;
},__lj:function(){var n=this.getChildControl(T);
var o=this.getApplicationRoot();
if(this.__ld||this._isNear()){var m=this.__lg?U:bh;
this.setCursor(m);
o.setGlobalCursor(m);
n.addState(M);
}else if(n.hasState(M)){this.resetCursor();
o.resetGlobalCursor();
n.removeState(M);
}},__lk:function(){if(this.__lg){var bu=X,bB=be,bv=V,bz=this.__le;
}else{var bu=W,bB=bi,bv=bf,bz=this.__lf;
}var bA=this._getChildren();
var bs=bA[2].getSizeHint();
var bx=bA[3].getSizeHint();
var by=bA[2].getBounds()[bB]+bA[3].getBounds()[bB];
var bw=bz-this.__lc;
var bt=by-bw;
if(bw<bs[bu]){bt-=bs[bu]-bw;
bw=bs[bu];
}else if(bt<bx[bu]){bw-=bx[bu]-bt;
bt=bx[bu];
}if(bw>bs[bv]){bt+=bw-bs[bv];
bw=bs[bv];
}else if(bt>bx[bv]){bw+=bt-bx[bv];
bt=bx[bv];
}this.__lh=bw;
this.__li=bt;
},_isActiveDragSession:function(){return this.__ld;
},_setLastMousePosition:function(x,y){this.__le=x;
this.__lf=y;
}},destruct:function(){this.__lb=null;
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(h){arguments.callee.base.call(this);
if(h.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(f){var g;

switch(f){case d:g=new qx.ui.basic.Image;
this._add(g);
break;
}return g||arguments.callee.base.call(this,f);
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.VLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var r,u;
var g,f,p,h;

for(var i=0;i<length;i++){r=v[i];
u=r.getLayoutProperties().type;

if(u===b){f=r;
}else if(u===c){p=r;
}else if(!g){g=r;
}else{h=r;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var k=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(k==null){k=1;
}var w=g.getSizeHint();
var n=f.getSizeHint();
var o=h.getSizeHint();
var j=w.height;
var s=n.height;
var t=o.height;

if(x>0&&k>0){var l=x+k;
var m=e-s;
var j=Math.round((m/l)*x);
var t=m-j;
var q=qx.ui.layout.Util.arrangeIdeals(w.minHeight,j,w.maxHeight,o.minHeight,t,o.maxHeight);
j=q.begin;
t=q.end;
}else if(x>0){j=e-s-t;

if(j<w.minHeight){j=w.minHeight;
}
if(j>w.maxHeight){j=w.maxHeight;
}}else if(k>0){t=e-j-s;

if(t<o.minHeight){t=o.minHeight;
}
if(t>o.maxHeight){t=o.maxHeight;
}}g.renderLayout(0,0,d,j);
f.renderLayout(0,j,d,s);
h.renderLayout(0,j+s,d,t);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var B=0,D=0,C=0;
var E=0,F=0,y=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
B+=z.minHeight;
D+=z.height;
C+=z.maxHeight;

if(z.minWidth>E){E=z.minWidth;
}
if(z.width>F){F=z.width;
}
if(z.maxWidth>y){y=z.maxWidth;
}}return {minHeight:B,height:D,maxHeight:C,minWidth:E,width:F,maxWidth:y};
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.HLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var s,u;
var g,f,p,h;

for(var i=0;i<length;i++){s=v[i];
u=s.getLayoutProperties().type;

if(u===b){f=s;
}else if(u===c){p=s;
}else if(!g){g=s;
}else{h=s;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var j=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(j==null){j=1;
}var w=g.getSizeHint();
var m=f.getSizeHint();
var o=h.getSizeHint();
var t=w.width;
var r=m.width;
var q=o.width;

if(x>0&&j>0){var k=x+j;
var l=d-r;
var t=Math.round((l/k)*x);
var q=l-t;
var n=qx.ui.layout.Util.arrangeIdeals(w.minWidth,t,w.maxWidth,o.minWidth,q,o.maxWidth);
t=n.begin;
q=n.end;
}else if(x>0){t=d-r-q;

if(t<w.minWidth){t=w.minWidth;
}
if(t>w.maxWidth){t=w.maxWidth;
}}else if(j>0){q=d-t-r;

if(q<o.minWidth){q=o.minWidth;
}
if(q>o.maxWidth){q=o.maxWidth;
}}g.renderLayout(0,0,t,e);
f.renderLayout(t,0,r,e);
h.renderLayout(t+r,0,q,e);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var E=0,F=0,y=0;
var B=0,D=0,C=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
E+=z.minWidth;
F+=z.width;
y+=z.maxWidth;

if(z.minHeight>B){B=z.minHeight;
}
if(z.height>D){D=z.height;
}
if(z.maxHeight>C){C=z.maxHeight;
}}return {minWidth:E,width:F,maxWidth:y,minHeight:B,height:D,maxHeight:C};
}}});
})();
(function(){var d="_applyDynamic",c="changeSelection",b="Boolean",a="qx.ui.container.Stack";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(c,this.__sD,this);
},properties:{dynamic:{check:b,init:false,apply:d}},members:{_applyDynamic:function(f){var h=this._getChildren();
var g=this.getSelection()[0];
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];

if(j!=g){if(f){h[i].exclude();
}else{h[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(w){return w.isEnabled();
},__sD:function(e){var p=e.getOldData()[0];
var q=e.getData()[0];

if(p){if(this.isDynamic()){p.exclude();
}else{p.hide();
}}
if(q){q.show();
}},add:function(t){this._add(t);
var u=this.getSelection()[0];

if(!u){this.setSelection([t]);
}else if(u!==t){if(this.isDynamic()){t.exclude();
}else{t.hide();
}}},remove:function(r){this._remove(r);

if(this.getSelection()[0]===r){var s=this._getChildren()[0];

if(s){this.setSelection([s]);
}else{this.resetSelection();
}}},indexOf:function(v){return this._indexOf(v);
},getChildren:function(){return this._getChildren();
},previous:function(){var n=this.getSelection()[0];
var k=this._indexOf(n)-1;
var o=this._getChildren();

if(k<0){k=o.length-1;
}var m=o[k];
this.setSelection([m]);
},next:function(){var y=this.getSelection()[0];
var x=this._indexOf(y)+1;
var z=this._getChildren();
var A=z[x]||z[0];
this.setSelection([A]);
}}});
})();
(function(){var m="sSearchInput",l="",k="icon",j="_applyValue",i="textField",h='icon',g="qx/icon/Oxygen/16/actions/system-search.png",f="changeValue",e='textField',d="st.widget.SearchInput";
qx.Class.define(d,{extend:qx.ui.core.Widget,construct:function(n){arguments.callee.base.call(this,n);
this._setLayout(new qx.ui.layout.HBox());
this._add(this._createChildControl(e),{flex:1});
this._add(this._createChildControl(h),{flex:0});
},properties:{appearance:{refine:true,init:m},value:{nullable:true,apply:j,init:l,event:f}},members:{_applyValue:function(c){},_createChildControlImpl:function(a){var b;

switch(a){case i:b=new qx.ui.form.TextField().set({decorator:null,margin:0,padding:0});
break;
case k:b=new qx.ui.basic.Image(g).set({decorator:null,margin:0,padding:0});
break;
}return b||arguments.callee.base.call(this,a);
}},destruct:function(){}});
})();
(function(){var g="arrow",f="qx.ui.toolbar.SplitButton",e="keydown",d="toolbar-splitbutton",c="button",b="keyup",a="execute";
qx.Class.define(f,{extend:qx.ui.form.SplitButton,construct:function(h,i,j,k){arguments.callee.base.call(this,h,i,j,k);
this.removeListener(e,this._onKeyDown);
this.removeListener(b,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},focusable:{refine:true,init:false}},members:{_createChildControlImpl:function(l){var m;

switch(l){case c:m=new qx.ui.toolbar.Button;
m.addListener(a,this._onButtonExecute,this);
this._addAt(m,0);
break;
case g:m=new qx.ui.toolbar.MenuButton;
this._addAt(m,1);
break;
}return m||arguments.callee.base.call(this,l);
}}});
})();
(function(){var e="arrow",d="qx.ui.toolbar.MenuButton",c="Boolean",b="_applyShowArrow",a="toolbar-menubutton";
qx.Class.define(d,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:a},showArrow:{check:c,init:false,themeable:true,apply:b}},members:{_createChildControlImpl:function(h){var i;

switch(h){case e:i=new qx.ui.basic.Image();
i.setAnonymous(true);
this._addAt(i,10);
break;
}return i||arguments.callee.base.call(this,h);
},_applyShowArrow:function(f,g){if(f){this._showChildControl(e);
}else{this._excludeChildControl(e);
}}}});
})();


qx.$$loader.init();

