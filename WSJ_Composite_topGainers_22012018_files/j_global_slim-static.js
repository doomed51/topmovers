// Update from Git
if(typeof dj=="undefined"){dj={};}
if(typeof dj.context=="undefined"){dj.context={};}
if(typeof djConfig=="undefined"){this.djConfig={};}
(function(){var ctx=dj.context,djc=djConfig;
ctx.core=(ctx.core||{});
ctx.core.urlPrefix="http://online.wsj.com";
ctx.core.professionalUrlPrefix="http://professional.wsj.com";
ctx.core.quotesUrlPrefix="http://quotes.wsj.com";
ctx.core.cdnPrefix="http://s.wsj.net";
ctx.core.customCacheCdnPrefix="http://cc.wsj.net";
ctx.core.secureLoginPrefix="https://id.wsj.com";
ctx.core.streamUrlPrefix="http://stream.wsj.com";
ctx.core.searchAppUrl="/search/term.html?KEYWORDS=";
ctx.core.tealiumProduct="wsj-former";
ctx.core.tealiumEnv="prod";
ctx.core.custChatUrl="https://customercenter.wsj.com/livechat/chat?product=WSJ";
ctx.core.assetPaths={style:'/djstyle',script:'/djscript',page:'/page'};var isJsDebugOn=((window.location.hash+"").indexOf("jsdebug=true")>-1);djc.isDebug=isJsDebugOn;djc.popup=isJsDebugOn;djc.afterOnLoad=true;djc.dojoIframeHistoryUrl="/static_html_files/iframe_history.html";djc.blankGif=ctx.core.cdnPrefix+"/img/b.gif";djc.locale="en";djc.dojoBlankHtmlUrl="/static_html_files/dojo_blank.html";djc.modulePaths={dj:"/djscript/latest/dj",dojo:"/djscript/latest/dojo",dijit:"/djscript/latest/dijit",dojox:"/djscript/latest/dojox",djscript:"/djscript",BundleList:"/cdssvco/depmgr/generator/v1/BundleList"};
ctx.preferences=(ctx.preferences||{});
ctx.preferences.storeDomains=['online.wsj.com','jp.wsj.com','lat.wsj.com','br.wsj.com'];
ctx.videoCenter=(ctx.videoCenter||{});
ctx.videoCenter.host="video.wsj.com";
ctx.videoCenter.domain="http://live.wsj.com";
ctx.dashboard=(ctx.dashboard||{});
ctx.authorization=(ctx.authorization||{});
ctx.authorization.role=(ctx.authorization.role||{});
ctx.authorization.role.subscriber="WSJ";
ctx.authorization.role.subscriberTransient="WSJ-TRANSIENT";
ctx.mdc=(ctx.mdc||{});
ctx.mdc.indexTickerUri="/public/resources/live/2_3001_JSON.js";
ctx.itp=(ctx.itp||{});
ctx.disablePageRefresh=false;
ctx.disableAjaxRefresh={};
ctx.page=(ctx.page||{});
ctx.page.disablePageRefresh=false;
ctx.module=(ctx.module||{});
ctx.module.disableModuleRefresh={};
ctx.ads=(ctx.ads||{});
ctx.facebook=(ctx.facebook||{});
ctx.facebook.apiKey="67fc5e01d68cf35eba52297f5bf2ed3d";
ctx.facebook.appId="368513495882";
ctx.facebook.commerceLoginURL="https://commerce.wsj.com/auth/fbconnect";
ctx.facebook.commerceFBConnectURL="https://id.wsj.com/auth/fbconnect-oauth";
ctx.livenews=(ctx.livenews||{});
ctx.livenews.bluegrass=(ctx.livenews.bluegrass||{});
ctx.livenews.bluegrass.toURL='http://wsjstream.wsj.net/bg/api/connect.ashx';
ctx.livenews.bluegrass.altPickupUrl='http://wsjstream.wsj.net/bg/api/Pickup.ashx';
ctx.livenews.bluegrass.viaURL=null;
ctx.marketdata=(ctx.marketdata||{});
ctx.marketdata.bluegrass=(ctx.marketdata.bluegrass||{});
ctx.marketdata.bluegrass.toURL='http://wsjstream.wsj.net/bg/api/connect.ashx';
ctx.marketdata.bluegrass.altPickupUrl='http://wsjstream.wsj.net/bg/api/Pickup.ashx';
ctx.marketdata.bluegrass.viaURL=null;
ctx.marketdata.bluegrassProvider=null;
ctx.marketdata.channelsArray=[];
ctx.articleFlash=(ctx.articleFlash||{});
ctx.articleFlash.outputFilterFlashUrl="/public/page/0_0_W0_OutputFilter_DataTag_Flash_Cacheable";
ctx.articleFlash.outputFilterCacheable=true;
ctx.article=(ctx.article||{});
ctx.article.commentsObserver={};
ctx.account=(ctx.account||{});
ctx.account.omniturePrefix="WSJ";
ctx.account.idDomainToHostScrims="https://id.wsj.com/content/public/page/";
ctx.account.testLogin="https://id.wsj.com/content/javascript/account/AccountPromoManager.html";
ctx.account.expiredPageUrl="https://id.wsj.com/content/public/page/user-expiredreset-password.html";
ctx.account.resetPasswordPageUrl="https://id.wsj.com/content/public/page/user-accountreset-password.html";
ctx.account.forgotUserOrPswdPageUrl="https://id.wsj.com/content/public/page/user-accountforgot-userpassword.html";
ctx.account.LoginPageUrl="https://id.wsj.com/content/public/page/login.html";
ctx.account.forgotUsernameConfPageUrl="https://id.wsj.com/content/public/page/user-accountforgot-userconf.html";
ctx.account.forgotPasswordConfPageUrl="https://id.wsj.com/content/public/page/user-accountforgot-passwdconf.html";
ctx.account.forgotPasswordPageUrl="https://id.wsj.com/content/public/page/user-accountforgot-password.html";
ctx.account.WIFILoginPageUrl="https://id.wsj.com/content/public/page/wifi-login.html";
ctx.account.WIFIRegistrationPageUrl="https://id.wsj.com/content/public/page/wifi-registration.html";
ctx.account.subscribeFromLoginOverlay="https://buy.wsj.com/offers/html/offerOns.html?trackCode=aap5c9sv";
ctx.account.subscribeFromLoginPage="https://buy.wsj.com/offers/html/offerOns.html?trackCode=aap5ypck";
ctx.account.subscribeOfferFromLoginOverlay="https://buy.wsj.com/shopandbuy/order/subscribe.jsp?trackCode=aapuev70";
ctx.account.subscribeOfferFromLoginPage="https://buy.wsj.com/shopandbuy/order/subscribe.jsp?trackCode=aapuev72";
ctx.account.subscribeOfferFromRegistrationOverlay="https://buy.wsj.com/shopandbuy/order/subscribe.jsp?trackCode=aapuev76";
ctx.account.subscribeOfferFromFBOverlay="https://buy.wsj.com/shopandbuy/order/subscribe.jsp?trackCode=aapuev75";
ctx.account.subscribeFromAmazonPage="https://buy.wsj.com/shopandbuy/order/subscribe.jsp?trackCode=aapuev77";
ctx.account.serviceTimeOut=5000;
ctx.account.europe_subscribeFromLoginOverlay="http://www.wsjeuropesubs.com/000HK";
ctx.account.europe_subscribeFromLoginPage="http://www.wsjeuropesubs.com/000HK";
ctx.account.asia_subscribeFromLoginOverlay="https://secure.wsj-asia.com/subscription1/home.php?source=PHOXXXCPA";
ctx.account.asia_subscribeFromLoginPage="https://secure.wsj-asia.com/subscription1/home.php?source=PHOXXXCPA";
ctx.account.india_subscribeFromLoginOverlay="https://secure.wsj-asia.com/subscription1/home.php?source=PHOXXXCPA";
ctx.account.india_subscribeFromLoginPage="https://secure.wsj-asia.com/subscription1/home.php?source=PHOXXXCPA";
ctx.account.productCd="WSJ";
ctx.account.productCdTest="WSJTEST";
ctx.account.registrationOverlayPageId="0_0_WP_scrim_registration_iframe";
ctx.account.registrationOverlayHeight="790px";
ctx.account.registrationOverlayWidth="678px";
ctx.account.loginOverlayPageId="0_0_WP_scrim_login_iframe";
ctx.account.loginOverlayHeight="600px";
ctx.account.loginOverlayWidth="678px";
ctx.account.forgotUsernamePageId="0_0_WP_scrim_forgotUserOrPswd";
ctx.account.forgotPasswordPageId="0_0_WP_scrim_forgotPassword";
ctx.account.thankYouPageId="0_0_WP_scrim_thankyou";
ctx.account.fbConnectedPageId="0_0_WP_scrim_fb_connected";
ctx.account.fbInitPageId="0_0_WP_scrim_fb_landing";
ctx.account.fbLoginPageId="0_0_WP_scrim_connect_fb";
ctx.account.fbLoginOrWSJPswdConfPageId="0_0_WP_scrim_fbLoginOrWSJPswdConfirmation";
ctx.account.fbLoginOrWSJPswdPageId="0_0_WP_scrim_fbLoginOrWSJPswd";
ctx.account.forgotPasswordConfPageId="0_0_WP_scrim_forgotPasswordConfirmation";
ctx.account.forgotUsernameConfPageId="0_0_WP_scrim_forgotUserOrPswdConfirmation";
ctx.account.loginVerifyEmailPageId="0_0_WP_scrim_loginVerifyEmail";
ctx.account.loginVerifyEmailConfPageId="0_0_WP_scrim_loginVerifyEmailConfirmation";
ctx.account.unverifiedFreeRegPageId="0_0_WP_scrim_unverifiedFreeReg";
ctx.account.unverifiedFreeRegConfPageId="0_0_WP_scrim_unverifiedFreeRegConfirmation";
ctx.account.userWithoutEmailConfPageId="0_0_WP_scrim_userWoEmailConf";
ctx.account.userWithoutEmailPageId="0_0_WP_scrim_userWithoutEmail";
ctx.account.loading="loading...";
ctx.account.closeText="close";
ctx.social=(ctx.social||{});
ctx.social.serviceUrl="/socsvco";
ctx.social.url="https://apps.facebook.com/wsjsocial/";
ctx.social.domain="social.wsj.com";
ctx.social.redirect=true;
ctx.social.adSite="facebook.wsj.com";
ctx.account.scrimManagerFilePath="/static_html_files/account/accountScrimManager.html";
ctx.lifp=(ctx.lifp||{});
ctx.lifp.loginUrl="https://id.wsj.com/access/SIGNATURE/latest/login_standalone.html";
ctx.lifp.registerUrl="https://id.wsj.com/access/SIGNATURE/latest/register_standalone.html";
ctx.lifp.forgotUsername="https://id.wsj.com/access/SIGNATURE/latest/username_forgot_standalone.html";
ctx.lifp.forgotPassword="https://id.wsj.com/access/SIGNATURE/latest/password_forgot_standalone.html";
ctx.lifp.jsUrl="https://a248.e.akamai.net/f/248/67675/6h/id.wsj.com/access/SIGNATURE/latest/assets/lifp_prod.js";}());
/*
  Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
  Available via Academic Free License >= 2.1 OR the modified BSD license.
  see: http://dojotoolkit.org/license for details
*/

/*
  This is an optimized version of Dojo, built for deployment and not for
  development. To get sources and documentation, please visit:

    http://dojotoolkit.org
*/

(function(){var R=null;if((R||typeof djConfig!="undefined"&&djConfig.scopeMap)&&typeof window!="undefined"){var U="",X="",Y="",Z={},$={};R=R||djConfig.scopeMap;for(var V=0;V<R.length;V++){var O=R[V];U+="var "+O[0]+" = {}; "+O[1]+" = "+O[0]+";"+O[1]+"._scopeName = '"+O[1]+"';";X+=(V==0?"":",")+O[0];Y+=(V==0?"":",")+O[1];Z[O[0]]=O[1];$[O[1]]=O[0]}eval(U+"dojo._scopeArgs = ["+Y+"];");dojo._scopePrefixArgs=X;dojo._scopePrefix="(function("+X+"){";dojo._scopeSuffix="})("+Y+")";dojo._scopeMap=Z;dojo._scopeMapRev=
$}(function(){if(typeof this.loadFirebugConsole=="function")this.loadFirebugConsole();else{this.console=this.console||{};for(var a=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"],h=0,l;l=a[h++];)console[l]||function(){var d=l+"";console[d]="log"in console?function(){var m=Array.apply({},arguments);m.unshift(d+":");console.log(m.join(" "))}:function(){};console[d]._fake=true}()}if(typeof dojo=="undefined")dojo=
{_scopeName:"dojo",_scopePrefix:"",_scopePrefixArgs:"",_scopeSuffix:"",_scopeMap:{},_scopeMapRev:{}};var q=dojo;if(typeof dijit=="undefined")dijit={_scopeName:"dijit"};if(typeof dojox=="undefined")dojox={_scopeName:"dojox"};if(!q._scopeArgs)q._scopeArgs=[dojo,dijit,dojox];q.global=this;q.config={isDebug:false,debugAtAllCosts:false};if(a=typeof djConfig!="undefined"?djConfig:typeof dojoConfig!="undefined"?dojoConfig:null)for(var o in a)q.config[o]=a[o];dojo.locale=q.config.locale;o="$Rev: 23917 $".match(/\d+/);
dojo.version={major:1,minor:6,patch:0,flag:"",revision:o?+o[0]:NaN,toString:function(){with(q.version)return major+"."+minor+"."+patch+flag+" ("+revision+")"}};typeof OpenAjax!="undefined"&&OpenAjax.hub.registerLibrary(dojo._scopeName,"http://dojotoolkit.org",q.version.toString());var r,n,b={};for(h in{toString:1}){r=[];break}dojo._extraNames=r=r||["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];n=r.length;dojo._mixin=function(d,m){var u,
z,e;for(u in m){z=m[u];if(!(u in d)||d[u]!==z&&(!(u in b)||b[u]!==z))d[u]=z}if(n&&m)for(e=0;e<n;++e){u=r[e];z=m[u];if(!(u in d)||d[u]!==z&&(!(u in b)||b[u]!==z))d[u]=z}return d};dojo.mixin=function(d){d||(d={});for(var m=1,u=arguments.length;m<u;m++)q._mixin(d,arguments[m]);return d};dojo._getProp=function(d,m,u){u=u||q.global;for(var z=0,e;u&&(e=d[z]);z++){if(z==0&&q._scopeMap[e])e=q._scopeMap[e];u=e in u?u[e]:m?u[e]={}:undefined}return u};dojo.setObject=function(d,m,u){var z=d.split(".");d=z.pop();
return(u=q._getProp(z,true,u))&&d?u[d]=m:undefined};dojo.getObject=function(d,m,u){return q._getProp(d.split("."),m,u)};dojo.exists=function(d,m){return q.getObject(d,false,m)!==undefined};dojo.eval=function(d){return q.global.eval?q.global.eval(d):eval(d)};q.deprecated=q.experimental=function(){}})();(function(){var a=dojo;a.mixin(a,{_loadedModules:{},_inFlightCount:0,_hasResource:{},_modulePrefixes:{dojo:{name:"dojo",value:"."},doh:{name:"doh",value:"../util/doh"},tests:{name:"tests",value:"tests"}},
_moduleHasPrefix:function(o){var r=a._modulePrefixes;return!!(r[o]&&r[o].value)},_getModulePrefix:function(o){var r=a._modulePrefixes;if(a._moduleHasPrefix(o))return r[o].value;return o},_loadedUrls:[],_postLoad:false,_loaders:[],_unloaders:[],_loadNotifying:false});dojo._loadPath=function(o,r,n){o=(o.charAt(0)=="/"||o.match(/^\w+:/)?"":a.baseUrl)+o;try{return!r?a._loadUri(o,n):a._loadUriAndCheck(o,r,n)}catch(b){console.error(b);return false}finally{}};dojo._loadUri=function(o,r){if(a._loadedUrls[o])return true;
a._inFlightCount++;var n=a._getText(o,true);if(n){a._loadedUrls[o]=true;a._loadedUrls.push(o);n=r?/^define\(/.test(n)?n:"("+n+")":a._scopePrefix+n+a._scopeSuffix;a.isIE||(n+="\r\n//@ sourceURL="+o);var b=a.eval(n);r&&r(b)}--a._inFlightCount==0&&a._postLoad&&a._loaders.length&&setTimeout(function(){a._inFlightCount==0&&a._callLoaded()},0);return!!n};dojo._loadUriAndCheck=function(o,r,n){var b=false;try{b=a._loadUri(o,n)}catch(d){console.error("failed loading "+o+" with error: "+d)}return!!(b&&a._loadedModules[r])};
dojo.loaded=function(){a._loadNotifying=true;a._postLoad=true;var o=a._loaders;a._loaders=[];for(var r=0;r<o.length;r++)o[r]();a._loadNotifying=false;a._postLoad&&a._inFlightCount==0&&o.length&&a._callLoaded()};dojo.unloaded=function(){for(var o=a._unloaders;o.length;)o.pop()()};a._onto=function(o,r,n){if(n){if(n){var b=typeof n=="string"?r[n]:n;o.push(function(){b.call(r)})}}else o.push(r)};dojo.ready=dojo.addOnLoad=function(o,r){a._onto(a._loaders,o,r);a._postLoad&&a._inFlightCount==0&&!a._loadNotifying&&
a._callLoaded()};var h=a.config.addOnLoad;if(h)a.addOnLoad[h instanceof Array?"apply":"call"](a,h);dojo._modulesLoaded=function(){a._postLoad||(a._inFlightCount>0?console.warn("files still in flight!"):a._callLoaded())};dojo._callLoaded=function(){typeof setTimeout=="object"||a.config.useXDomain&&a.isOpera?setTimeout(a.isAIR?function(){a.loaded()}:a._scopeName+".loaded();",0):a.loaded()};dojo._getModuleSymbols=function(o){o=o.split(".");for(var r=o.length;r>0;r--){var n=o.slice(0,r).join(".");if(r==
1&&!a._moduleHasPrefix(n))o[0]="../"+o[0];else{var b=a._getModulePrefix(n);if(b!=n){o.splice(0,r,b);break}}}return o};dojo._global_omit_module_check=false;dojo.loadInit=function(o){o()};dojo._loadModule=dojo.require=function(o,r){r=a._global_omit_module_check||r;var n=a._loadedModules[o];if(n)return n;var b=a._getModuleSymbols(o).join("/")+".js";if(!a._loadPath(b,!r?o:null)&&!r)throw Error("Could not load '"+o+"'; last tried '"+b+"'");if(!r&&!a._isXDomain){n=a._loadedModules[o];if(!n)throw Error("symbol '"+
o+"' is not defined after loading '"+b+"'");}return n};dojo.provide=function(o){o+="";return a._loadedModules[o]=a.getObject(o,true)};dojo.platformRequire=function(o){o=(o.common||[]).concat(o[a._name]||o["default"]||[]);for(var r=0;r<o.length;r++){var n=o[r];n.constructor==Array?a._loadModule.apply(a,n):a._loadModule(n)}};dojo.requireIf=function(o){if(o===true){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);a.require.apply(a,r)}};dojo.requireAfterIf=a.requireIf;dojo.registerModulePath=
function(o,r){a._modulePrefixes[o]={name:o,value:r}};dojo.requireLocalization=function(){a.require("dojo.i18n");a.i18n._requireLocalization.apply(a.hostenv,arguments)};var l=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,q=/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/;dojo._Url=function(){for(var o=arguments,r=[o[0]],n=1;n<o.length;n++)if(o[n]){var b=new a._Url(o[n]+"");r=new a._Url(r[0]+"");if(b.path==""&&!b.scheme&&!b.authority&&!b.query){if(b.fragment!=null)r.fragment=
b.fragment;b=r}else if(!b.scheme){b.scheme=r.scheme;if(!b.authority){b.authority=r.authority;if(b.path.charAt(0)!="/"){r=(r.path.substring(0,r.path.lastIndexOf("/")+1)+b.path).split("/");for(var d=0;d<r.length;d++)if(r[d]==".")if(d==r.length-1)r[d]="";else{r.splice(d,1);d--}else if(d>0&&!(d==1&&r[0]=="")&&r[d]==".."&&r[d-1]!="..")if(d==r.length-1){r.splice(d,1);r[d-1]=""}else{r.splice(d-1,2);d-=2}b.path=r.join("/")}}}r=[];b.scheme&&r.push(b.scheme,":");b.authority&&r.push("//",b.authority);r.push(b.path);
b.query&&r.push("?",b.query);b.fragment&&r.push("#",b.fragment)}this.uri=r.join("");n=this.uri.match(l);this.scheme=n[2]||(n[1]?"":null);this.authority=n[4]||(n[3]?"":null);this.path=n[5];this.query=n[7]||(n[6]?"":null);this.fragment=n[9]||(n[8]?"":null);if(this.authority!=null){n=this.authority.match(q);this.user=n[3]||null;this.password=n[4]||null;this.host=n[6]||n[7];this.port=n[9]||null}};dojo._Url.prototype.toString=function(){return this.uri};dojo.moduleUrl=function(o,r){var n=a._getModuleSymbols(o).join("/");
if(!n)return null;if(n.lastIndexOf("/")!=n.length-1)n+="/";var b=n.indexOf(":");if(n.charAt(0)!="/"&&(b==-1||b>n.indexOf("/")))n=a.baseUrl+n;return new a._Url(n,r)}})();if(typeof window!="undefined"){dojo.isBrowser=true;dojo._name="browser";(function(){var a=dojo;if(document&&document.getElementsByTagName)for(var h=document.getElementsByTagName("script"),l=/dojo(\.xd)?\.js(\W|$)/i,q=0;q<h.length;q++){var o=h[q].getAttribute("src");if(o){var r=o.match(l);if(r){if(!a.config.baseUrl)a.config.baseUrl=
o.substring(0,r.index);if(h=h[q].getAttribute("djConfig")||h[q].getAttribute("data-dojo-config")){h=eval("({ "+h+" })");for(var n in h)dojo.config[n]=h[n]}break}}}a.baseUrl=a.config.baseUrl;n=navigator;h=n.userAgent;l=n.appVersion;q=parseFloat(l);if(h.indexOf("Opera")>=0)a.isOpera=q;if(h.indexOf("AdobeAIR")>=0)a.isAIR=1;a.isKhtml=l.indexOf("Konqueror")>=0?q:0;a.isWebKit=parseFloat(h.split("WebKit/")[1])||undefined;a.isChrome=parseFloat(h.split("Chrome/")[1])||undefined;a.isMac=l.indexOf("Macintosh")>=
0;if((o=Math.max(l.indexOf("WebKit"),l.indexOf("Safari"),0))&&!dojo.isChrome){a.isSafari=parseFloat(l.split("Version/")[1]);if(!a.isSafari||parseFloat(l.substr(o+7))<=419.3)a.isSafari=2}if(h.indexOf("Gecko")>=0&&!a.isKhtml&&!a.isWebKit)a.isMozilla=a.isMoz=q;if(a.isMoz)a.isFF=parseFloat(h.split("Firefox/")[1]||h.split("Minefield/")[1])||undefined;if(document.all&&!a.isOpera){a.isIE=parseFloat(l.split("MSIE ")[1])||undefined;if((h=document.documentMode)&&h!=5&&Math.floor(a.isIE)!=h)a.isIE=h}if(dojo.isIE&&
window.location.protocol==="file:")dojo.config.ieForceActiveXXhr=true;a.isQuirks=document.compatMode=="BackCompat";a.locale=dojo.config.locale||(a.isIE?n.userLanguage:n.language).toLowerCase();a._XMLHTTP_PROGIDS=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];a._xhrObj=function(){var c,j;if(!dojo.isIE||!dojo.config.ieForceActiveXXhr)try{c=new XMLHttpRequest}catch(f){}if(!c)for(var i=0;i<3;++i){var t=a._XMLHTTP_PROGIDS[i];try{c=new ActiveXObject(t)}catch(x){j=x}if(c){a._XMLHTTP_PROGIDS=
[t];break}}if(!c)throw Error("XMLHTTP not available: "+j);return c};a._isDocumentOk=function(c){c=c.status||0;return c>=200&&c<300||c==304||c==1223||!c};var b=window.location+"";var d=(n=document.getElementsByTagName("base"))&&n.length>0;a._getText=function(c,j){var f=a._xhrObj();if(!d&&dojo._Url)c=(new dojo._Url(b,c)).toString();if(a.config.cacheBust){c+="";c+=(c.indexOf("?")==-1?"?":"&")+String(a.config.cacheBust).replace(/\W+/g,"")}f.open("GET",c,false);try{f.send(null);if(!a._isDocumentOk(f)){var i=
Error("Unable to load "+c+" status:"+f.status);i.status=f.status;i.responseText=f.responseText;throw i;}}catch(t){if(j)return null;throw t;}return f.responseText};var m=window,u=function(c,j){var f=m.attachEvent||m.addEventListener;c=m.attachEvent?c:c.substring(2);f(c,function(){j.apply(m,arguments)},false)};a._windowUnloaders=[];a.windowUnloaded=function(){for(var c=a._windowUnloaders;c.length;)c.pop()();a=null};var z=0;a.addOnWindowUnload=function(c,j){a._onto(a._windowUnloaders,c,j);if(!z){z=1;
u("onunload",a.windowUnloaded)}};var e=0;a.addOnUnload=function(c,j){a._onto(a._unloaders,c,j);if(!e){e=1;u("onbeforeunload",dojo.unloaded)}}})();dojo._initFired=false;dojo._loadInit=function(){if(dojo._scrollIntervalId){clearInterval(dojo._scrollIntervalId);dojo._scrollIntervalId=0}if(!dojo._initFired){dojo._initFired=true;!dojo.config.afterOnLoad&&window.detachEvent&&window.detachEvent("onload",dojo._loadInit);dojo._inFlightCount==0&&dojo._modulesLoaded()}};if(!dojo.config.afterOnLoad)if(document.addEventListener){document.addEventListener("DOMContentLoaded",
dojo._loadInit,false);window.addEventListener("load",dojo._loadInit,false)}else if(window.attachEvent){window.attachEvent("onload",dojo._loadInit);if(!dojo.config.skipIeDomLoaded&&self===self.top)dojo._scrollIntervalId=setInterval(function(){try{if(document.body){document.documentElement.doScroll("left");dojo._loadInit()}}catch(a){}},30)}if(dojo.isIE)try{(function(){document.namespaces.add("v","urn:schemas-microsoft-com:vml");var a=["*","group","roundrect","oval","shape","rect","imagedata","path",
"textpath","text"],h=0,l=1,q=document.createStyleSheet();if(dojo.isIE>=8){h=1;l=a.length}for(;h<l;++h)q.addRule("v\\:"+a[h],"behavior:url(#default#VML); display:inline-block")})()}catch(aa){}}(function(){var a=dojo.config.modulePaths;if(a)for(var h in a)dojo.registerModulePath(h,a[h])})();if(!dojo._hasResource["dojo._base.lang"]){dojo._hasResource["dojo._base.lang"]=
true;dojo.provide("dojo._base.lang");(function(){var a=dojo,h=Object.prototype.toString;dojo.isString=function(d){return typeof d=="string"||d instanceof String};dojo.isArray=function(d){return d&&(d instanceof Array||typeof d=="array")};dojo.isFunction=function(d){return h.call(d)==="[object Function]"};dojo.isObject=function(d){return d!==undefined&&(d===null||typeof d=="object"||a.isArray(d)||a.isFunction(d))};dojo.isArrayLike=function(d){return d&&d!==undefined&&!a.isString(d)&&!a.isFunction(d)&&
!(d.tagName&&d.tagName.toLowerCase()=="form")&&(a.isArray(d)||isFinite(d.length))};dojo.isAlien=function(d){return d&&!a.isFunction(d)&&/\{\s*\[native code\]\s*\}/.test(String(d))};dojo.extend=function(d){for(var m=1,u=arguments.length;m<u;m++)a._mixin(d.prototype,arguments[m]);return d};dojo._hitchArgs=function(d,m){var u=a._toArray(arguments,2),z=a.isString(m);return function(){var e=a._toArray(arguments),c=z?(d||a.global)[m]:m;return c&&c.apply(d||this,u.concat(e))}};dojo.hitch=function(d,m){if(arguments.length>
2)return a._hitchArgs.apply(a,arguments);if(!m){m=d;d=null}if(a.isString(m)){d=d||a.global;if(!d[m])throw['dojo.hitch: scope["',m,'"] is null (scope="',d,'")'].join("");return function(){return d[m].apply(d,arguments||[])}}return!d?m:function(){return m.apply(d,arguments||[])}};dojo.delegate=dojo._delegate=function(){function d(){}return function(m,u){d.prototype=m;var z=new d;d.prototype=null;u&&a._mixin(z,u);return z}}();var l=function(d,m,u){return(u||[]).concat(Array.prototype.slice.call(d,m||
0))},q=function(d,m,u){u=u||[];for(m=m||0;m<d.length;m++)u.push(d[m]);return u};dojo._toArray=a.isIE?function(d){return(d.item?q:l).apply(this,arguments)}:l;dojo.partial=function(){return a.hitch.apply(a,[null].concat(a._toArray(arguments)))};var o=a._extraNames,r=o.length,n={};dojo.clone=function(d){if(!d||typeof d!="object"||a.isFunction(d))return d;if(d.nodeType&&"cloneNode"in d)return d.cloneNode(true);if(d instanceof Date)return new Date(d.getTime());if(d instanceof RegExp)return RegExp(d);var m,
u,z,e;if(a.isArray(d)){m=[];u=0;for(z=d.length;u<z;++u)u in d&&m.push(a.clone(d[u]))}else m=d.constructor?new d.constructor:{};for(e in d){z=d[e];if(!(e in m)||m[e]!==z&&(!(e in n)||n[e]!==z))m[e]=a.clone(z)}if(r)for(u=0;u<r;++u){e=o[u];z=d[e];if(!(e in m)||m[e]!==z&&(!(e in n)||n[e]!==z))m[e]=z}return m};dojo.trim=String.prototype.trim?function(d){return d.trim()}:function(d){return d.replace(/^\s\s*/,"").replace(/\s\s*$/,"")};var b=/\{([^\}]+)\}/g;dojo.replace=function(d,m,u){return d.replace(u||
b,a.isFunction(m)?m:function(z,e){return a.getObject(e,false,m)})}})()}if(!dojo._hasResource["dojo._base.array"]){dojo._hasResource["dojo._base.array"]=true;dojo.provide("dojo._base.array");(function(){var a=function(l,q,o){return[typeof l=="string"?l.split(""):l,q||dojo.global,typeof o=="string"?new Function("item","index","array",o):o]},h=function(l,q,o,r){var n=a(q,r,o);q=n[0];o=0;for(r=q.length;o<r;++o){var b=!!n[2].call(n[1],q[o],o,q);if(l^b)return b}return l};dojo.mixin(dojo,{indexOf:function(l,
q,o,r){var n=1,b=l.length||0,d=0;if(r){d=b-1;n=b=-1}if(o!=undefined)d=o;if(r&&d>b||d<b)for(;d!=b;d+=n)if(l[d]==q)return d;return-1},lastIndexOf:function(l,q,o){return dojo.indexOf(l,q,o,true)},forEach:function(l,q,o){if(l&&l.length){var r=a(l,o,q);l=r[0];q=0;for(o=l.length;q<o;++q)r[2].call(r[1],l[q],q,l)}},every:function(l,q,o){return h(true,l,q,o)},some:function(l,q,o){return h(false,l,q,o)},map:function(l,q,o,r){var n=a(l,o,q);l=n[0];q=r?new r:[];o=0;for(r=l.length;o<r;++o)q.push(n[2].call(n[1],
l[o],o,l));return q},filter:function(l,q,o){var r=a(l,o,q);l=r[0];q=[];o=0;for(var n=l.length;o<n;++o)r[2].call(r[1],l[o],o,l)&&q.push(l[o]);return q}})})()}if(!dojo._hasResource["dojo._base.declare"]){dojo._hasResource["dojo._base.declare"]=true;dojo.provide("dojo._base.declare");(function(){function a(w,A){throw Error("declare"+(A?" "+A:"")+": "+w);}function h(w,A,y){var B,C,E,F,H,G,K,M=this._inherited=this._inherited||{};if(typeof w=="string"){B=w;w=A;A=y}y=0;F=w.callee;(B=B||F.nom)||a("can't deduce a name to call inherited()",
this.declaredClass);H=this.constructor._meta;E=H.bases;K=M.p;if(B!=s){if(M.c!==F){K=0;G=E[0];H=G._meta;if(H.hidden[B]!==F){(C=H.chains)&&typeof C[B]=="string"&&a("calling chained method with inherited: "+B,this.declaredClass);do{H=G._meta;C=G.prototype;if(H&&(C[B]===F&&C.hasOwnProperty(B)||H.hidden[B]===F))break}while(G=E[++K]);K=G?K:-1}}if(G=E[++K]){C=G.prototype;if(G._meta&&C.hasOwnProperty(B))y=C[B];else{F=f[B];do{C=G.prototype;if((y=C[B])&&(G._meta?C.hasOwnProperty(B):y!==F))break}while(G=E[++K])}}y=
G&&y||f[B]}else{if(M.c!==F){K=0;if((H=E[0]._meta)&&H.ctor!==F){C=H.chains;if(!C||C.constructor!=="manual")a("calling chained constructor with inherited",this.declaredClass);for(;G=E[++K];)if((H=G._meta)&&H.ctor===F)break;K=G?K:-1}}for(;G=E[++K];)if(y=(H=G._meta)?H.ctor:G)break;y=G&&y}M.c=y;M.p=K;if(y)return A===true?y:y.apply(this,A||w)}function l(w,A){if(typeof w=="string")return this.inherited(w,A,true);return this.inherited(w,true)}function q(w){for(var A=this.constructor._meta.bases,y=0,B=A.length;y<
B;++y)if(A[y]===w)return true;return this instanceof w}function o(w,A){var y,B=0,C=c._extraNames.length;for(y in A)if(y!=s&&A.hasOwnProperty(y))w[y]=A[y];for(;B<C;++B){y=c._extraNames[B];if(y!=s&&A.hasOwnProperty(y))w[y]=A[y]}}function r(w,A){var y,B,C=0,E=c._extraNames.length;for(y in A){B=A[y];if((B!==f[y]||!(y in f))&&y!=s){if(i.call(B)=="[object Function]")B.nom=y;w[y]=B}}for(;C<E;++C){y=c._extraNames[C];B=A[y];if((B!==f[y]||!(y in f))&&y!=s){if(i.call(B)=="[object Function]")B.nom=y;w[y]=B}}return w}
function n(w){r(this.prototype,w);return this}function b(w,A){return function(){var y=arguments,B=y,C=y[0],E,F;F=w.length;var H;if(!(this instanceof y.callee))return e(y);if(A&&(C&&C.preamble||this.preamble)){H=Array(w.length);H[0]=y;for(E=0;;){if(C=y[0])if(C=C.preamble)y=C.apply(this,y)||y;C=w[E].prototype;if(C=C.hasOwnProperty("preamble")&&C.preamble)y=C.apply(this,y)||y;if(++E==F)break;H[E]=y}}for(E=F-1;E>=0;--E){C=w[E];if(C=(F=C._meta)?F.ctor:C)C.apply(this,H?H[E]:y)}(C=this.postscript)&&C.apply(this,
B)}}function d(w,A){return function(){var y=arguments,B=y,C=y[0];if(!(this instanceof y.callee))return e(y);if(A){if(C)if(C=C.preamble)B=C.apply(this,B)||B;(C=this.preamble)&&C.apply(this,B)}w&&w.apply(this,y);(C=this.postscript)&&C.apply(this,y)}}function m(w){return function(){var A=arguments,y=0,B,C;if(!(this instanceof A.callee))return e(A);for(;B=w[y];++y)if(B=(C=B._meta)?C.ctor:B){B.apply(this,A);break}(B=this.postscript)&&B.apply(this,A)}}function u(w,A,y){return function(){var B,C,E=0,F=1;
if(y){E=A.length-1;F=-1}for(;B=A[E];E+=F){C=B._meta;(B=(C?C.hidden:B.prototype)[w])&&B.apply(this,arguments)}}}function z(w){t.prototype=w.prototype;w=new t;t.prototype=null;return w}function e(w){var A=w.callee,y=z(A);A.apply(y,w);return y}var c=dojo,j=c._mixin,f=Object.prototype,i=f.toString,t=new Function,x=0,s="constructor";c.declare=function(w,A,y){if(typeof w!="string"){y=A;A=w;w=""}y=y||{};var B,C,E,F,H,G,K,M=1,T=A;if(i.call(A)=="[object Array]"){A=A;M=w;E=[];F=[{cls:0,refs:[]}];G={};for(var P=
1,W=A.length,N=0,L,S,g,p;N<W;++N){if(L=A[N])i.call(L)!="[object Function]"&&a("mixin #"+N+" is not a callable constructor.",M);else a("mixin #"+N+" is unknown. Did you use dojo.require to pull it in?",M);S=L._meta?L._meta.bases:[L];g=0;for(L=S.length-1;L>=0;--L){p=S[L].prototype;if(!p.hasOwnProperty("declaredClass"))p.declaredClass="uniqName_"+x++;p=p.declaredClass;if(!G.hasOwnProperty(p)){G[p]={count:0,refs:[],cls:S[L]};++P}p=G[p];if(g&&g!==p){p.refs.push(g);++g.count}g=p}++g.count;F[0].refs.push(g)}for(;F.length;){g=
F.pop();E.push(g.cls);for(--P;C=g.refs,C.length==1;){g=C[0];if(!g||--g.count){g=0;break}E.push(g.cls);--P}if(g){N=0;for(W=C.length;N<W;++N){g=C[N];--g.count||F.push(g)}}}P&&a("can't build consistent linearization",M);L=A[0];E[0]=L?L._meta&&L===E[E.length-L._meta.bases.length]?L._meta.bases.length:1:0;G=E;E=G[0];M=G.length-E;A=G[M]}else{G=[0];if(A)if(i.call(A)=="[object Function]"){E=A._meta;G=G.concat(E?E.bases:A)}else a("base class is not a callable constructor.",w);else A!==null&&a("unknown base class. Did you use dojo.require to pull it in?",
w)}if(A)for(C=M-1;;--C){B=z(A);if(!C)break;E=G[C];(E._meta?o:j)(B,E.prototype);F=new Function;F.superclass=A;F.prototype=B;A=B.constructor=F}else B={};r(B,y);E=y.constructor;if(E!==f.constructor){E.nom=s;B.constructor=E}for(C=M-1;C;--C)if((E=G[C]._meta)&&E.chains)K=j(K||{},E.chains);if(B["-chains-"])K=j(K||{},B["-chains-"]);E=!K||!K.hasOwnProperty(s);G[0]=F=K&&K.constructor==="manual"?m(G):G.length==1?d(y.constructor,E):b(G,E);F._meta={bases:G,hidden:y,chains:K,parents:T,ctor:y.constructor};F.superclass=
A&&A.prototype;F.extend=n;F.prototype=B;B.constructor=F;B.getInherited=l;B.inherited=h;B.isInstanceOf=q;if(w){B.declaredClass=w;c.setObject(w,F)}if(K)for(H in K)if(B[H]&&typeof K[H]=="string"&&H!=s){E=B[H]=u(H,G,K[H]==="after");E.nom=H}return F};c.safeMixin=r})()}if(!dojo._hasResource["dojo._base.connect"]){dojo._hasResource["dojo._base.connect"]=true;dojo.provide("dojo._base.connect");dojo._listener={getDispatcher:function(){return function(){var a=Array.prototype,h=arguments.callee,l=h._listeners;
h=(h=h.target)&&h.apply(this,arguments);var q;l=[].concat(l);for(q in l)q in a||l[q].apply(this,arguments);return h}},add:function(a,h,l){a=a||dojo.global;var q=a[h];if(!q||!q._listeners){var o=dojo._listener.getDispatcher();o.target=q;o._listeners=[];q=a[h]=o}return q._listeners.push(l)},remove:function(a,h,l){(a=(a||dojo.global)[h])&&a._listeners&&l--&&delete a._listeners[l]}};dojo.connect=function(){var a=arguments,h=[],l=0;h.push(dojo.isString(a[0])?null:a[l++],a[l++]);var q=a[l+1];h.push(dojo.isString(q)||
dojo.isFunction(q)?a[l++]:null,a[l++]);for(q=a.length;l<q;l++)h.push(a[l]);return dojo._connect.apply(this,h)};dojo._connect=function(a,h,l,q){var o=dojo._listener;l=o.add(a,h,dojo.hitch(l,q));return[a,h,l,o]};dojo.disconnect=function(a){if(a&&a[0]!==undefined){dojo._disconnect.apply(this,a);delete a[0]}};dojo._disconnect=function(a,h,l,q){q.remove(a,h,l)};dojo._topics={};dojo.subscribe=function(a,h,l){return[a,dojo._listener.add(dojo._topics,a,dojo.hitch(h,l))]};dojo.unsubscribe=function(a){a&&dojo._listener.remove(dojo._topics,
a[0],a[1])};dojo.publish=function(a,h){var l=dojo._topics[a];if(l)l.apply(this,h||[])};dojo.connectPublisher=function(a,h,l){var q=function(){dojo.publish(a,arguments)};return l?dojo.connect(h,l,q):dojo.connect(h,q)}}if(!dojo._hasResource["dojo._base.Deferred"]){dojo._hasResource["dojo._base.Deferred"]=true;dojo.provide("dojo._base.Deferred");(function(){var a=function(){},h=Object.freeze||function(){};dojo.Deferred=function(l){function q(e){if(n)throw Error("This deferred has already been resolved");
r=e;n=true;o()}function o(){for(var e;!e&&m;){var c=m;m=m.next;if(e=c.progress==a)n=false;var j=b?c.error:c.resolved;if(j)try{var f=j(r);if(f&&typeof f.then==="function")f.then(dojo.hitch(c.deferred,"resolve"),dojo.hitch(c.deferred,"reject"));else{j=e&&f===undefined;if(e&&!j)b=f instanceof Error;c.deferred[j&&b?"reject":"resolve"](j?r:f)}}catch(i){c.deferred.reject(i)}else b?c.deferred.reject(r):c.deferred.resolve(r)}}var r,n,b,d,m,u=this.promise={};this.resolve=this.callback=function(e){this.fired=
0;this.results=[e,null];q(e)};this.reject=this.errback=function(e){b=true;this.fired=1;q(e);this.results=[null,e];if(!e||e.log!==false)(dojo.config.deferredOnError||function(c){console.error(c)})(e)};this.progress=function(e){for(var c=m;c;){var j=c.progress;j&&j(e);c=c.next}};this.addCallbacks=function(e,c){this.then(e,c,a);return this};this.then=u.then=function(e,c,j){var f=j==a?this:new dojo.Deferred(u.cancel);e={resolved:e,error:c,progress:j,deferred:f};if(m)d=d.next=e;else m=d=e;n&&o();return f.promise};
var z=this;this.cancel=u.cancel=function(){if(!n){var e=l&&l(z);if(!n){e instanceof Error||(e=Error(e));e.log=false;z.reject(e)}}};h(u)};dojo.extend(dojo.Deferred,{addCallback:function(){return this.addCallbacks(dojo.hitch.apply(dojo,arguments))},addErrback:function(){return this.addCallbacks(null,dojo.hitch.apply(dojo,arguments))},addBoth:function(){var l=dojo.hitch.apply(dojo,arguments);return this.addCallbacks(l,l)},fired:-1})})();dojo.when=function(a,h,l,q){if(a&&typeof a.then==="function")return a.then(h,
l,q);return h(a)}}if(!dojo._hasResource["dojo._base.json"]){dojo._hasResource["dojo._base.json"]=true;dojo.provide("dojo._base.json");dojo.fromJson=function(a){return eval("("+a+")")};dojo._escapeString=function(a){return('"'+a.replace(/(["\\])/g,"\\$1")+'"').replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")};dojo.toJsonIndentStr="\t";dojo.toJson=function(a,h,l){if(a===undefined)return"undefined";var q=typeof a;if(q=="number"||q=="boolean")return a+
"";if(a===null)return"null";if(dojo.isString(a))return dojo._escapeString(a);var o=arguments.callee,r;l=l||"";var n=h?l+dojo.toJsonIndentStr:"";r=a.__json__||a.json;if(dojo.isFunction(r)){r=r.call(a);if(a!==r)return o(r,h,n)}if(a.nodeType&&a.cloneNode)throw Error("Can't serialize DOM nodes");r=h?" ":"";var b=h?"\n":"";if(dojo.isArray(a))return"["+dojo.map(a,function(z){z=o(z,h,n);if(typeof z!="string")z="undefined";return b+n+z}).join(","+r)+b+l+"]";if(q=="function")return null;q=[];for(var d in a){var m,
u;if(typeof d=="number")m='"'+d+'"';else if(typeof d=="string")m=dojo._escapeString(d);else continue;u=o(a[d],h,n);typeof u=="string"&&q.push(b+n+m+":"+r+u)}return"{"+q.join(","+r)+b+l+"}"}}if(!dojo._hasResource["dojo._base.Color"]){dojo._hasResource["dojo._base.Color"]=true;dojo.provide("dojo._base.Color");(function(){var a=dojo;dojo.Color=function(h){h&&this.setColor(h)};dojo.Color.named={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,
0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:a.config.transparentColor||[255,255,255]};dojo.extend(dojo.Color,{r:255,g:255,b:255,a:1,_set:function(h,l,q,o){this.r=h;this.g=l;this.b=q;this.a=o},setColor:function(h){if(a.isString(h))a.colorFromString(h,this);else if(a.isArray(h))a.colorFromArray(h,this);else{this._set(h.r,h.g,h.b,h.a);h instanceof a.Color||this.sanitize()}return this},
sanitize:function(){return this},toRgb:function(){return[this.r,this.g,this.b]},toRgba:function(){return[this.r,this.g,this.b,this.a]},toHex:function(){return"#"+a.map(["r","g","b"],function(h){h=this[h].toString(16);return h.length<2?"0"+h:h},this).join("")},toCss:function(h){var l=this.r+", "+this.g+", "+this.b;return(h?"rgba("+l+", "+this.a:"rgb("+l)+")"},toString:function(){return this.toCss(true)}});dojo.blendColors=function(h,l,q,o){var r=o||new a.Color;a.forEach(["r","g","b","a"],function(n){r[n]=
h[n]+(l[n]-h[n])*q;if(n!="a")r[n]=Math.round(r[n])});return r.sanitize()};dojo.colorFromRgb=function(h,l){var q=h.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);return q&&dojo.colorFromArray(q[1].split(/\s*,\s*/),l)};dojo.colorFromHex=function(h,l){var q=l||new a.Color,o=h.length==4?4:8,r=(1<<o)-1;h=Number("0x"+h.substr(1));if(isNaN(h))return null;a.forEach(["b","g","r"],function(n){var b=h&r;h>>=o;q[n]=o==4?17*b:b});q.a=1;return q};dojo.colorFromArray=function(h,l){var q=l||new a.Color;q._set(Number(h[0]),
Number(h[1]),Number(h[2]),Number(h[3]));if(isNaN(q.a))q.a=1;return q.sanitize()};dojo.colorFromString=function(h,l){var q=a.Color.named[h];return q&&a.colorFromArray(q,l)||a.colorFromRgb(h,l)||a.colorFromHex(h,l)}})()}if(!dojo._hasResource["dojo._base.window"]){dojo._hasResource["dojo._base.window"]=true;dojo.provide("dojo._base.window");dojo.doc=window.document||null;dojo.body=function(){return dojo.doc.body||dojo.doc.getElementsByTagName("body")[0]};dojo.setContext=function(a,h){dojo.global=a;dojo.doc=
h};dojo.withGlobal=function(a,h,l,q){var o=dojo.global;try{dojo.global=a;return dojo.withDoc.call(null,a.document,h,l,q)}finally{dojo.global=o}};dojo.withDoc=function(a,h,l,q){var o=dojo.doc,r=dojo._bodyLtr,n=dojo.isQuirks;try{dojo.doc=a;delete dojo._bodyLtr;dojo.isQuirks=dojo.doc.compatMode=="BackCompat";if(l&&typeof h=="string")h=l[h];return h.apply(l,q||[])}finally{dojo.doc=o;delete dojo._bodyLtr;if(r!==undefined)dojo._bodyLtr=r;dojo.isQuirks=n}}}if(!dojo._hasResource["dojo._base.event"]){dojo._hasResource["dojo._base.event"]=
true;dojo.provide("dojo._base.event");(function(){var a=dojo._event_listener={add:function(b,d,m){if(b){d=a._normalizeEventName(d);m=a._fixCallback(d,m);if(!dojo.isIE&&(d=="mouseenter"||d=="mouseleave")){var u=m;d=d=="mouseenter"?"mouseover":"mouseout";m=function(z){if(!dojo.isDescendant(z.relatedTarget,b))return u.call(this,z)}}b.addEventListener(d,m,false);return m}},remove:function(b,d,m){if(b){d=a._normalizeEventName(d);if(!dojo.isIE&&(d=="mouseenter"||d=="mouseleave"))d=d=="mouseenter"?"mouseover":
"mouseout";b.removeEventListener(d,m,false)}},_normalizeEventName:function(b){return b.slice(0,2)=="on"?b.slice(2):b},_fixCallback:function(b,d){return b!="keypress"?d:function(m){return d.call(this,a._fixEvent(m,this))}},_fixEvent:function(b){switch(b.type){case "keypress":a._setKeyChar(b)}return b},_setKeyChar:function(b){b.keyChar=b.charCode?String.fromCharCode(b.charCode):"";b.charOrCode=b.keyChar||b.keyCode},_punctMap:{106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,
221:93,222:39}};dojo.fixEvent=function(b,d){return a._fixEvent(b,d)};dojo.stopEvent=function(b){b.preventDefault();b.stopPropagation()};var h=dojo._listener;dojo._connect=function(b,d,m,u,z){z=b&&(b.nodeType||b.attachEvent||b.addEventListener)?z?2:1:0;m=[dojo._listener,a,h][z].add(b,d,dojo.hitch(m,u));return[b,d,m,z]};dojo._disconnect=function(b,d,m,u){[dojo._listener,a,h][u].remove(b,d,m)};dojo.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,META:dojo.isSafari?91:224,PAUSE:19,CAPS_LOCK:20,
ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,
F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145,copyKey:dojo.isMac&&!dojo.isAIR?dojo.isSafari?91:224:17};var l=dojo.isMac?"metaKey":"ctrlKey";dojo.isCopyKey=function(b){return b[l]};dojo.mouseButtons=dojo.isIE<9||dojo.isIE&&dojo.isQuirks?{LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(b,d){return b.button&d},isLeft:function(b){return b.button&1},isMiddle:function(b){return b.button&4},isRight:function(b){return b.button&2}}:{LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(b,d){return b.button==d},isLeft:function(b){return b.button==
0},isMiddle:function(b){return b.button==1},isRight:function(b){return b.button==2}};if(dojo.isIE){var q=function(b,d){try{return b.keyCode=d}catch(m){return 0}},o=dojo._listener,r=dojo._ieListenersName="_"+dojo._scopeName+"_listeners";if(!dojo.config._allow_leaks){h=o=dojo._ie_listener={handlers:[],add:function(b,d,m){b=b||dojo.global;var u=b[d];if(!u||!u[r]){var z=dojo._getIeDispatcher();z.target=u&&n.push(u)-1;z[r]=[];u=b[d]=z}return u[r].push(n.push(m)-1)},remove:function(b,d,m){d=(b=(b||dojo.global)[d])&&
b[r];if(b&&d&&m--){delete n[d[m]];delete d[m]}}};var n=o.handlers}dojo.mixin(a,{add:function(b,d,m){if(b){d=a._normalizeEventName(d);if(d=="onkeypress"){var u=b.onkeydown;if(!u||!u[r]||!u._stealthKeydownHandle){var z=a.add(b,"onkeydown",a._stealthKeyDown);u=b.onkeydown;u._stealthKeydownHandle=z;u._stealthKeydownRefs=1}else u._stealthKeydownRefs++}return o.add(b,d,a._fixCallback(m))}},remove:function(b,d,m){d=a._normalizeEventName(d);o.remove(b,d,m);if(d=="onkeypress"){d=b.onkeydown;if(--d._stealthKeydownRefs<=
0){o.remove(b,"onkeydown",d._stealthKeydownHandle);delete d._stealthKeydownHandle}}},_normalizeEventName:function(b){return b.slice(0,2)!="on"?"on"+b:b},_nop:function(){},_fixEvent:function(b,d){if(!b)b=(d&&(d.ownerDocument||d.document||d).parentWindow||window).event;if(!b)return b;b.target=b.srcElement;b.currentTarget=d||b.srcElement;b.layerX=b.offsetX;b.layerY=b.offsetY;var m=b.srcElement;m=m&&m.ownerDocument||document;m=dojo.isIE<6||m.compatMode=="BackCompat"?m.body:m.documentElement;var u=dojo._getIeDocumentElementOffset();
b.pageX=b.clientX+dojo._fixIeBiDiScrollLeft(m.scrollLeft||0)-u.x;b.pageY=b.clientY+(m.scrollTop||0)-u.y;if(b.type=="mouseover")b.relatedTarget=b.fromElement;if(b.type=="mouseout")b.relatedTarget=b.toElement;if(dojo.isIE<9||dojo.isQuirks){b.stopPropagation=a._stopPropagation;b.preventDefault=a._preventDefault}return a._fixKeys(b)},_fixKeys:function(b){switch(b.type){case "keypress":var d="charCode"in b?b.charCode:b.keyCode;if(d==10){d=0;b.keyCode=13}else if(d==13||d==27)d=0;else if(d==3)d=99;b.charCode=
d;a._setKeyChar(b)}return b},_stealthKeyDown:function(b){var d=b.currentTarget.onkeypress;if(d&&d[r]){var m=b.keyCode,u=m!=13&&m!=32&&m!=27&&(m<48||m>90)&&(m<96||m>111)&&(m<186||m>192)&&(m<219||m>222);if(u||b.ctrlKey){u=u?0:m;if(b.ctrlKey)if(m==3||m==13)return;else if(u>95&&u<106)u-=48;else if(!b.shiftKey&&u>=65&&u<=90)u+=32;else u=a._punctMap[u]||u;m=a._synthesizeEvent(b,{type:"keypress",faux:true,charCode:u});d.call(b.currentTarget,m);b.cancelBubble=m.cancelBubble;b.returnValue=m.returnValue;q(b,
m.keyCode)}}},_stopPropagation:function(){this.cancelBubble=true},_preventDefault:function(){this.bubbledKeyCode=this.keyCode;this.ctrlKey&&q(this,0);this.returnValue=false}});dojo.stopEvent=dojo.isIE<9||dojo.isQuirks?function(b){b=b||window.event;a._stopPropagation.call(b);a._preventDefault.call(b)}:dojo.stopEvent}a._synthesizeEvent=function(b,d){var m=dojo.mixin({},b,d);a._setKeyChar(m);m.preventDefault=function(){b.preventDefault()};m.stopPropagation=function(){b.stopPropagation()};return m};dojo.isOpera&&
dojo.mixin(a,{_fixEvent:function(b){switch(b.type){case "keypress":var d=b.which;if(d==3)d=99;d=d<41&&!b.shiftKey?0:d;if(b.ctrlKey&&!b.shiftKey&&d>=65&&d<=90)d+=32;return a._synthesizeEvent(b,{charCode:d})}return b}});if(dojo.isWebKit){a._add=a.add;a._remove=a.remove;dojo.mixin(a,{add:function(b,d,m){if(b){var u=a._add(b,d,m);if(a._normalizeEventName(d)=="keypress")u._stealthKeyDownHandle=a._add(b,"keydown",function(z){var e=z.keyCode,c=e!=13&&e!=32&&(e<48||e>90)&&(e<96||e>111)&&(e<186||e>192)&&(e<
219||e>222);if(c||z.ctrlKey){c=c?0:e;if(z.ctrlKey)if(e==3||e==13)return;else if(c>95&&c<106)c-=48;else if(!z.shiftKey&&c>=65&&c<=90)c+=32;else c=a._punctMap[c]||c;e=a._synthesizeEvent(z,{type:"keypress",faux:true,charCode:c});m.call(z.currentTarget,e)}});return u}},remove:function(b,d,m){if(b){m._stealthKeyDownHandle&&a._remove(b,"keydown",m._stealthKeyDownHandle);a._remove(b,d,m)}},_fixEvent:function(b){switch(b.type){case "keypress":if(b.faux)break;var d=b.charCode;d=d>=32?d:0;return a._synthesizeEvent(b,
{charCode:d,faux:true})}return b}})}})();if(dojo.isIE){dojo._ieDispatcher=function(a,h){var l=Array.prototype,q=dojo._ie_listener.handlers,o=a.callee,r=o[dojo._ieListenersName];o=(o=q[o.target])&&o.apply(h,a);r=[].concat(r);for(var n in r){var b=q[r[n]];!(n in l)&&b&&b.apply(h,a)}return o};dojo._getIeDispatcher=function(){return new Function(dojo._scopeName+"._ieDispatcher(arguments, this)")};dojo._event_listener._fixCallback=function(a){var h=dojo._event_listener._fixEvent;return function(l){return a.call(this,
h(l,this))}}}}if(!dojo._hasResource["dojo._base.html"]){dojo._hasResource["dojo._base.html"]=true;dojo.provide("dojo._base.html");try{document.execCommand("BackgroundImageCache",false,true)}catch(ba){}dojo.byId=dojo.isIE?function(a,h){if(typeof a!="string")return a;var l=h||dojo.doc,q=l.getElementById(a);if(q&&(q.attributes.id.value==a||q.id==a))return q;else{var o=l.all[a];if(!o||o.nodeName)o=[o];for(var r=0;q=o[r++];)if(q.attributes&&q.attributes.id&&q.attributes.id.value==a||q.id==a)return q}}:
function(a,h){return(typeof a=="string"?(h||dojo.doc).getElementById(a):a)||null};(function(){var a=dojo,h=a.byId,l=null,q;a.addOnWindowUnload(function(){l=null});dojo._destroyElement=dojo.destroy=function(g){g=h(g);try{var p=g.ownerDocument;if(!l||q!=p){l=p.createElement("div");q=p}l.appendChild(g.parentNode?g.parentNode.removeChild(g):g);l.innerHTML=""}catch(k){}};dojo.isDescendant=function(g,p){try{g=h(g);for(p=h(p);g;){if(g==p)return true;g=g.parentNode}}catch(k){}return false};dojo.setSelectable=
function(g,p){g=h(g);if(a.isMozilla)g.style.MozUserSelect=p?"":"none";else if(a.isKhtml||a.isWebKit)g.style.KhtmlUserSelect=p?"auto":"none";else if(a.isIE){var k=g.unselectable=p?"":"on";a.query("*",g).forEach("item.unselectable = '"+k+"'")}};var o=function(g,p){var k=p.parentNode;k&&k.insertBefore(g,p)},r=function(g,p){var k=p.parentNode;if(k)k.lastChild==p?k.appendChild(g):k.insertBefore(g,p.nextSibling)};dojo.place=function(g,p,k){p=h(p);if(typeof g=="string")g=/^\s*</.test(g)?a._toDom(g,p.ownerDocument):
h(g);if(typeof k=="number"){var v=p.childNodes;!v.length||v.length<=k?p.appendChild(g):o(g,v[k<0?0:k])}else switch(k){case "before":o(g,p);break;case "after":r(g,p);break;case "replace":p.parentNode.replaceChild(g,p);break;case "only":a.empty(p);p.appendChild(g);break;case "first":if(p.firstChild){o(g,p.firstChild);break}default:p.appendChild(g)}return g};dojo.boxModel="content-box";if(a.isIE)a.boxModel=document.compatMode=="BackCompat"?"border-box":"content-box";var n;n=a.isWebKit?function(g){var p;
if(g.nodeType==1){var k=g.ownerDocument.defaultView;p=k.getComputedStyle(g,null);if(!p&&g.style){g.style.display="";p=k.getComputedStyle(g,null)}}return p||{}}:a.isIE?function(g){return g.nodeType==1?g.currentStyle:{}}:function(g){return g.nodeType==1?g.ownerDocument.defaultView.getComputedStyle(g,null):{}};dojo.getComputedStyle=n;a._toPixelValue=a.isIE?function(g,p){if(!p)return 0;if(p=="medium")return 4;if(p.slice&&p.slice(-2)=="px")return parseFloat(p);with(g){var k=style.left,v=runtimeStyle.left;
runtimeStyle.left=currentStyle.left;try{style.left=p;p=style.pixelLeft}catch(D){p=0}style.left=k;runtimeStyle.left=v}return p}:function(g,p){return parseFloat(p)||0};var b=a._toPixelValue,d=function(g,p){try{return g.filters.item("DXImageTransform.Microsoft.Alpha")}catch(k){return p?{}:null}};dojo._getOpacity=a.isIE?function(g){try{return d(g).Opacity/100}catch(p){return 1}}:function(g){return n(g).opacity};dojo._setOpacity=a.isIE?function(g,p){var k=p*100,v=p==1;g.style.zoom=v?"":1;if(d(g))d(g,1).Opacity=
k;else{if(v)return p;g.style.filter+=" progid:DXImageTransform.Microsoft.Alpha(Opacity="+k+")"}d(g,1).Enabled=!v;g.nodeName.toLowerCase()=="tr"&&a.query("> td",g).forEach(function(D){a._setOpacity(D,p)});return p}:function(g,p){return g.style.opacity=p};var m={left:true,top:true},u=/margin|padding|width|height|max|min|offset/,z=function(g,p,k){p=p.toLowerCase();if(a.isIE){if(k=="auto"){if(p=="height")return g.offsetHeight;if(p=="width")return g.offsetWidth}if(p=="fontweight")switch(k){case 700:return"bold";
default:return"normal"}}p in m||(m[p]=u.test(p));return m[p]?b(g,k):k},e=a.isIE?"styleFloat":"cssFloat",c={cssFloat:e,styleFloat:e,"float":e};dojo.style=function(g,p,k){var v=h(g),D=arguments.length,I=p=="opacity";p=c[p]||p;if(D==3)return I?a._setOpacity(v,k):v.style[p]=k;if(D==2&&I)return a._getOpacity(v);I=n(v);if(D==2&&typeof p!="string"){for(var J in p)a.style(g,J,p[J]);return I}return D==1?I:z(v,p,I[p]||v.style[p])};dojo._getPadExtents=function(g,p){var k=p||n(g),v=b(g,k.paddingLeft),D=b(g,k.paddingTop);
return{l:v,t:D,w:v+b(g,k.paddingRight),h:D+b(g,k.paddingBottom)}};dojo._getBorderExtents=function(g,p){var k=p||n(g),v=k.borderLeftStyle!="none"?b(g,k.borderLeftWidth):0,D=k.borderTopStyle!="none"?b(g,k.borderTopWidth):0;return{l:v,t:D,w:v+(k.borderRightStyle!="none"?b(g,k.borderRightWidth):0),h:D+(k.borderBottomStyle!="none"?b(g,k.borderBottomWidth):0)}};dojo._getPadBorderExtents=function(g,p){var k=p||n(g),v=a._getPadExtents(g,k);k=a._getBorderExtents(g,k);return{l:v.l+k.l,t:v.t+k.t,w:v.w+k.w,h:v.h+
k.h}};dojo._getMarginExtents=function(g,p){var k=p||n(g),v=b(g,k.marginLeft),D=b(g,k.marginTop),I=b(g,k.marginRight),J=b(g,k.marginBottom);if(a.isWebKit&&k.position!="absolute")I=v;return{l:v,t:D,w:v+I,h:D+J}};dojo._getMarginBox=function(g,p){var k=p||n(g),v=a._getMarginExtents(g,k),D=g.offsetLeft-v.l,I=g.offsetTop-v.t,J=g.parentNode;if(a.isMoz){var Q=parseFloat(k.left);k=parseFloat(k.top);if(!isNaN(Q)&&!isNaN(k)){D=Q;I=k}else if(J&&J.style){Q=n(J);if(Q.overflow!="visible"){J=a._getBorderExtents(J,
Q);D+=J.l;I+=J.t}}}else if(a.isOpera||a.isIE>7&&!a.isQuirks)if(J){J=a._getBorderExtents(J);D-=J.l;I-=J.t}return{l:D,t:I,w:g.offsetWidth+v.w,h:g.offsetHeight+v.h}};dojo._getMarginSize=function(g,p){g=h(g);var k=a._getMarginExtents(g,p||n(g)),v=g.getBoundingClientRect();return{w:v.right-v.left+k.w,h:v.bottom-v.top+k.h}};dojo._getContentBox=function(g,p){var k=p||n(g),v=a._getPadExtents(g,k);k=a._getBorderExtents(g,k);var D=g.clientWidth,I;if(D){I=g.clientHeight;k.w=k.h=0}else{D=g.offsetWidth;I=g.offsetHeight}if(a.isOpera){v.l+=
k.l;v.t+=k.t}return{l:v.l,t:v.t,w:D-v.w-k.w,h:I-v.h-k.h}};dojo._getBorderBox=function(g,p){var k=p||n(g),v=a._getPadExtents(g,k);k=a._getContentBox(g,k);return{l:k.l-v.l,t:k.t-v.t,w:k.w+v.w,h:k.h+v.h}};dojo._setBox=function(g,p,k,v,D,I){I=I||"px";g=g.style;if(!isNaN(p))g.left=p+I;if(!isNaN(k))g.top=k+I;if(v>=0)g.width=v+I;if(D>=0)g.height=D+I};dojo._isButtonTag=function(g){return g.tagName=="BUTTON"||g.tagName=="INPUT"&&(g.getAttribute("type")||"").toUpperCase()=="BUTTON"};dojo._usesBorderBox=function(g){var p=
g.tagName;return a.boxModel=="border-box"||p=="TABLE"||a._isButtonTag(g)};dojo._setContentSize=function(g,p,k,v){if(a._usesBorderBox(g)){v=a._getPadBorderExtents(g,v);if(p>=0)p+=v.w;if(k>=0)k+=v.h}a._setBox(g,NaN,NaN,p,k)};dojo._setMarginBox=function(g,p,k,v,D,I){var J=I||n(g);I=a._usesBorderBox(g)?j:a._getPadBorderExtents(g,J);if(a.isWebKit)if(a._isButtonTag(g)){var Q=g.style;if(v>=0&&!Q.width)Q.width="4px";if(D>=0&&!Q.height)Q.height="4px"}J=a._getMarginExtents(g,J);if(v>=0)v=Math.max(v-I.w-J.w,
0);if(D>=0)D=Math.max(D-I.h-J.h,0);a._setBox(g,p,k,v,D)};var j={l:0,t:0,w:0,h:0};dojo.marginBox=function(g,p){var k=h(g),v=n(k);return!p?a._getMarginBox(k,v):a._setMarginBox(k,p.l,p.t,p.w,p.h,v)};dojo.contentBox=function(g,p){var k=h(g),v=n(k);return!p?a._getContentBox(k,v):a._setContentSize(k,p.w,p.h,v)};var f=function(g,p){if(!(g=(g||0).parentNode))return 0;for(var k,v=0,D=a.body();g&&g.style;){if(n(g).position=="fixed")return 0;if(k=g[p]){v+=k-0;if(g==D)break}g=g.parentNode}return v};dojo._docScroll=
function(){var g=a.global;return"pageXOffset"in g?{x:g.pageXOffset,y:g.pageYOffset}:(g=a.isQuirks?a.doc.body:a.doc.documentElement,{x:a._fixIeBiDiScrollLeft(g.scrollLeft||0),y:g.scrollTop||0})};dojo._isBodyLtr=function(){return"_bodyLtr"in a?a._bodyLtr:a._bodyLtr=(a.body().dir||a.doc.documentElement.dir||"ltr").toLowerCase()=="ltr"};dojo._getIeDocumentElementOffset=function(){var g=a.doc.documentElement;if(a.isIE<8){var p=g.getBoundingClientRect(),k=p.left;p=p.top;if(a.isIE<7){k+=g.clientLeft;p+=
g.clientTop}return{x:k<0?0:k,y:p<0?0:p}}else return{x:0,y:0}};dojo._fixIeBiDiScrollLeft=function(g){var p=a.isIE;if(p&&!a._isBodyLtr()){var k=a.isQuirks,v=k?a.doc.body:a.doc.documentElement;if(p==6&&!k&&a.global.frameElement&&v.scrollHeight>v.clientHeight)g+=v.clientLeft;return p<8||k?g+v.clientWidth-v.scrollWidth:-g}return g};dojo._abs=dojo.position=function(g,p){g=h(g);var k=a.body(),v=k.parentNode,D=g.getBoundingClientRect();D={x:D.left,y:D.top,w:D.right-D.left,h:D.bottom-D.top};if(a.isIE){v=a._getIeDocumentElementOffset();
D.x-=v.x+(a.isQuirks?k.clientLeft+k.offsetLeft:0);D.y-=v.y+(a.isQuirks?k.clientTop+k.offsetTop:0)}else if(a.isFF==3){k=n(v);D.x-=b(v,k.marginLeft)+b(v,k.borderLeftWidth);D.y-=b(v,k.marginTop)+b(v,k.borderTopWidth)}if(p){k=a._docScroll();D.x+=k.x;D.y+=k.y}return D};dojo.coords=function(g,p){var k=h(g),v=n(k);v=a._getMarginBox(k,v);k=a.position(k,p);v.x=k.x;v.y=k.y;return v};var i={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",
rowspan:"rowSpan",valuetype:"valueType"},t={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"},x={innerHTML:1,className:1,htmlFor:a.isIE,value:1},s=function(g){return t[g.toLowerCase()]||g},w=function(g,p){var k=g.getAttributeNode&&g.getAttributeNode(p);return k&&k.specified};dojo.hasAttr=function(g,p){var k=p.toLowerCase();return x[i[k]||p]||w(h(g),t[k]||p)};var A={},y=0,B=dojo._scopeName+"attrid",C={col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1};dojo.attr=function(g,
p,k){g=h(g);var v=arguments.length;if(v==2&&typeof p!="string"){for(var D in p)a.attr(g,D,p[D]);return g}var I=p.toLowerCase();D=i[I]||p;var J=x[D];I=t[I]||p;if(v==3){if(D=="style"&&typeof k!="string")a.style(g,k);else if(D=="innerHTML")if(a.isIE&&g.tagName.toLowerCase()in C){a.empty(g);g.appendChild(a._toDom(k,g.ownerDocument))}else g[D]=k;else if(a.isFunction(k)){v=a.attr(g,B);if(!v){v=y++;a.attr(g,B,v)}A[v]||(A[v]={});if(J=A[v][D])a.disconnect(J);else try{delete g[D]}catch(Q){}A[v][D]=a.connect(g,
D,k)}else if(J||typeof k=="boolean")g[D]=k;else g.setAttribute(I,k);return g}k=g[D];if(J&&typeof k!="undefined")return k;if(D!="href"&&(typeof k=="boolean"||a.isFunction(k)))return k;return w(g,I)?g.getAttribute(I):null};dojo.removeAttr=function(g,p){h(g).removeAttribute(s(p))};dojo.getNodeProp=function(g,p){g=h(g);var k=p.toLowerCase(),v=i[k]||p;if(v in g&&v!="href")return g[v];k=t[k]||p;return w(g,k)?g.getAttribute(k):null};dojo.create=function(g,p,k,v){var D=a.doc;if(k){k=h(k);D=k.ownerDocument}if(typeof g==
"string")g=D.createElement(g);p&&a.attr(g,p);k&&a.place(g,k,v);return g};a.empty=a.isIE?function(g){g=h(g);for(var p;p=g.lastChild;)a.destroy(p)}:function(g){h(g).innerHTML=""};var E={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},F=/<\s*([\w\:]+)/,H={},G=0,K="__"+a._scopeName+"ToDomId",M;for(M in E)if(E.hasOwnProperty(M)){var T=
E[M];T.pre=M=="option"?'<select multiple="multiple">':"<"+T.join("><")+">";T.post="</"+T.reverse().join("></")+">"}a._toDom=function(g,p){p=p||a.doc;var k=p[K];if(!k){p[K]=k=++G+"";H[k]=p.createElement("div")}g+="";var v=g.match(F),D=v?v[1].toLowerCase():"";k=H[k];if(v&&E[D]){v=E[D];k.innerHTML=v.pre+g+v.post;for(v=v.length;v;--v)k=k.firstChild}else k.innerHTML=g;if(k.childNodes.length==1)return k.removeChild(k.firstChild);for(D=p.createDocumentFragment();v=k.firstChild;)D.appendChild(v);return D};
var P="className";dojo.hasClass=function(g,p){return(" "+h(g)[P]+" ").indexOf(" "+p+" ")>=0};var W=/\s+/,N=[""],L={},S=function(g){if(typeof g=="string"||g instanceof String)if(g.indexOf(" ")<0){N[0]=g;return N}else return g.split(W);return g||""};dojo.addClass=function(g,p){g=h(g);p=S(p);var k=g[P],v;k=k?" "+k+" ":" ";v=k.length;for(var D=0,I=p.length,J;D<I;++D)if((J=p[D])&&k.indexOf(" "+J+" ")<0)k+=J+" ";if(v<k.length)g[P]=k.substr(1,k.length-2)};dojo.removeClass=function(g,p){g=h(g);var k;if(p!==
undefined){p=S(p);k=" "+g[P]+" ";for(var v=0,D=p.length;v<D;++v)k=k.replace(" "+p[v]+" "," ");k=a.trim(k)}else k="";if(g[P]!=k)g[P]=k};dojo.replaceClass=function(g,p,k){g=h(g);L.className=g.className;dojo.removeClass(L,k);dojo.addClass(L,p);if(g.className!==L.className)g.className=L.className};dojo.toggleClass=function(g,p,k){if(k===undefined)k=!a.hasClass(g,p);a[k?"addClass":"removeClass"](g,p)}})()}if(!dojo._hasResource["dojo._base.NodeList"]){dojo._hasResource["dojo._base.NodeList"]=true;dojo.provide("dojo._base.NodeList");
(function(){var a=dojo,h=Array.prototype,l=h.slice,q=h.concat,o=function(c,j,f){c.sort||(c=l.call(c,0));f=f||this._NodeListCtor||a._NodeListCtor;c.constructor=f;dojo._mixin(c,f.prototype);c._NodeListCtor=f;return j?c._stash(j):c},r=function(c,j,f){j=[0].concat(l.call(j,0));f=f||a.global;return function(i){j[0]=i;return c.apply(f,j)}},n=function(c,j){return function(){this.forEach(r(c,arguments,j));return this}},b=function(c,j){return function(){return this.map(r(c,arguments,j))}},d=function(c,j,f){return function(){var i=
arguments,t=r(c,i,f);if(j.call(f||a.global,i))return this.map(t);this.forEach(t);return this}},m=function(c){return c.length==1&&typeof c[0]=="string"},u=function(c){var j=c.parentNode;j&&j.removeChild(c)};dojo.NodeList=function(){return o(Array.apply(null,arguments))};var z=a._NodeListCtor=a.NodeList,e=z.prototype;z._wrap=e._wrap=o;z._adaptAsMap=b;z._adaptAsForEach=n;z._adaptAsFilter=function(c,j){return function(){return this.filter(r(c,arguments,j))}};z._adaptWithCondition=d;a.forEach(["slice",
"splice"],function(c){var j=h[c];e[c]=function(){return this._wrap(j.apply(this,arguments),c=="slice"?this:null)}});a.forEach(["indexOf","lastIndexOf","every","some"],function(c){var j=a[c];e[c]=function(){return j.apply(a,[this].concat(l.call(arguments,0)))}});a.forEach(["attr","style"],function(c){e[c]=d(a[c],m)});a.forEach(["connect","addClass","removeClass","replaceClass","toggleClass","empty","removeAttr"],function(c){e[c]=n(a[c])});dojo.extend(dojo.NodeList,{_normalize:function(c,j){var f=c.parse===
true?true:false;if(typeof c.template=="string"){var i=c.templateFunc||dojo.string&&dojo.string.substitute;c=i?i(c.template,c):c}i=typeof c;if(i=="string"||i=="number"){c=dojo._toDom(c,j&&j.ownerDocument);c=c.nodeType==11?dojo._toArray(c.childNodes):[c]}else if(dojo.isArrayLike(c))dojo.isArray(c)||(c=dojo._toArray(c));else c=[c];if(f)c._runParse=true;return c},_cloneNode:function(c){return c.cloneNode(true)},_place:function(c,j,f,i){if(!(j.nodeType!=1&&f=="only")){j=j;for(var t,x=c.length,s=x-1;s>=
0;s--){var w=i?this._cloneNode(c[s]):c[s];if(c._runParse&&dojo.parser&&dojo.parser.parse){t||(t=j.ownerDocument.createElement("div"));t.appendChild(w);dojo.parser.parse(t);for(w=t.firstChild;t.firstChild;)t.removeChild(t.firstChild)}s==x-1?dojo.place(w,j,f):j.parentNode.insertBefore(w,j);j=w}}},_stash:function(c){this._parent=c;return this},end:function(){return this._parent?this._parent:new this._NodeListCtor},concat:function(){var c=a.isArray(this)?this:l.call(this,0),j=a.map(arguments,function(f){return f&&
!a.isArray(f)&&(typeof NodeList!="undefined"&&f.constructor===NodeList||f.constructor===this._NodeListCtor)?l.call(f,0):f});return this._wrap(q.apply(c,j),this)},map:function(c,j){return this._wrap(a.map(this,c,j),this)},forEach:function(c,j){a.forEach(this,c,j);return this},coords:b(a.coords),position:b(a.position),place:function(c,j){var f=a.query(c)[0];return this.forEach(function(i){a.place(i,f,j)})},orphan:function(c){return(c?a._filterQueryResult(this,c):this).forEach(u)},adopt:function(c,j){return a.query(c).place(this[0],
j)._stash(this)},query:function(c){if(!c)return this;var j=this.map(function(f){return a.query(c,f).filter(function(i){return i!==undefined})});return this._wrap(q.apply([],j),this)},filter:function(c){var j=arguments,f=this,i=0;if(typeof c=="string"){f=a._filterQueryResult(this,j[0]);if(j.length==1)return f._stash(this);i=1}return this._wrap(a.filter(f,j[i],j[i+1]),this)},addContent:function(c,j){c=this._normalize(c,this[0]);for(var f=0,i;i=this[f];f++)this._place(c,i,j,f>0);return this},instantiate:function(c,
j){var f=a.isFunction(c)?c:a.getObject(c);j=j||{};return this.forEach(function(i){new f(j,i)})},at:function(){var c=new this._NodeListCtor;a.forEach(arguments,function(j){if(j<0)j=this.length+j;this[j]&&c.push(this[j])},this);return c._stash(this)}});z.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"];a.forEach(z.events,function(c){var j="on"+c;e[j]=function(f,i){return this.connect(j,
f,i)}})})()}if(!dojo._hasResource["dojo._base.query"]){dojo._hasResource["dojo._base.query"]=true;R=function(a){a.query=function(h,l,q){q=q||a.NodeList;if(!h)return new q;if(h.constructor==q)return h;if(!a.isString(h))return new q(h);if(a.isString(l)){l=a.byId(l);if(!l)return new q}return a.Sizzle(h,l,new q)};a._filterQueryResult=function(h,l){return a.Sizzle.filter(l,h)}};U=function(a){function h(e,c,j,f){for(var i=0,t=f.length;i<t;i++){var x=f[i];if(x){x=x[e];for(var s=false;x&&x.nodeType;){var w=
x[j];if(w){s=f[w];break}if(x.nodeType===1)x[j]=i;if(x.nodeName===c){s=x;break}x=x[e]}f[i]=s}}}function l(e,c,j,f){for(var i=0,t=f.length;i<t;i++){var x=f[i];if(x){x=x[e];for(var s=false;x&&x.nodeType;){if(x[j]){s=f[x[j]];break}if(x.nodeType===1){x[j]=i;if(typeof c!=="string"){if(x===c){s=true;break}}else if(n.filter(c,[x]).length>0){s=x;break}}x=x[e]}f[i]=s}}}var q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|[^[\]]+)+\]|\\.|[^ >+~,(\[]+)+|[>+~])(\s*,\s*)?/g,o=0,r=Object.prototype.toString,n=
function(e,c,j,f){j=j||[];c=c||document;if(c.nodeType!==1&&c.nodeType!==9)return[];if(!e||typeof e!=="string")return j;var i=[],t,x,s,w=true;for(q.lastIndex=0;(t=q.exec(e))!==null;){i.push(t[1]);if(t[2]){s=RegExp.rightContext;break}}if(i.length>1&&b.match.POS.exec(e))if(i.length===2&&b.relative[i[0]]){for(i="";t=b.match.POS.exec(e);){i+=t[0];e=e.replace(b.match.POS,"")}t=n.filter(i,n(e,c))}else for(t=b.relative[i[0]]?[c]:n(i.shift(),c);i.length;){var A=[];e=i.shift();if(b.relative[e])e+=i.shift();
for(var y=0,B=t.length;y<B;y++)n(e,t[y],A);t=A}else{t=f?{expr:i.pop(),set:m(f)}:n.find(i.pop(),i.length===1&&c.parentNode?c.parentNode:c);t=n.filter(t.expr,t.set);if(i.length>0)x=m(t);else w=false;for(;i.length;){var C=i.pop();A=C;if(b.relative[C])A=i.pop();else C="";if(A==null)A=c;b.relative[C](x,A)}}x||(x=t);if(!x)throw"Syntax error, unrecognized expression: "+(C||e);if(r.call(x)==="[object Array]")if(w)if(c.nodeType===1)for(y=0;x[y]!=null;y++){if(x[y]&&(x[y]===true||x[y].nodeType===1&&z(c,x[y])))j.push(t[y])}else for(y=
0;x[y]!=null;y++)x[y]&&x[y].nodeType===1&&j.push(t[y]);else j.push.apply(j,x);else m(x,j);s&&n(s,c,j,f);return j};n.matches=function(e,c){return n(e,null,null,c)};n.find=function(e,c){var j,f;if(!e)return[];for(var i=0,t=b.order.length;i<t;i++){var x=b.order[i];if(f=b.match[x].exec(e)){var s=RegExp.leftContext;if(s.substr(s.length-1)!=="\\"){f[1]=(f[1]||"").replace(/\\/g,"");j=b.find[x](f,c);if(j!=null){e=e.replace(b.match[x],"");break}}}}j||(j=c.getElementsByTagName("*"));return{set:j,expr:e}};n.filter=
function(e,c,j,f){for(var i=e,t=[],x=c,s,w;e&&c.length;){for(var A in b.filter)if((s=b.match[A].exec(e))!=null){var y=b.filter[A],B=null,C=0,E,F;w=false;if(x==t)t=[];if(b.preFilter[A])if(s=b.preFilter[A](s,x,j,t,f)){if(s[0]===true){B=[];F=null;for(var H,G=0;(H=x[G])!==undefined;G++)if(H&&F!==H){B.push(H);F=H}}}else w=E=true;if(s)for(G=0;(F=x[G])!==undefined;G++)if(F){B&&F!=B[C]&&C++;E=y(F,s,C,B);H=f^!!E;if(j&&E!=null)if(H)w=true;else x[G]=false;else if(H){t.push(F);w=true}}if(E!==undefined){j||(x=
t);e=e.replace(b.match[A],"");if(!w)return[];break}}e=e.replace(/\s*,\s*/,"");if(e==i)if(w==null)throw"Syntax error, unrecognized expression: "+e;else break;i=e}return x};var b=n.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u0128-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u0128-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u0128-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[((?:[\w\u0128-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\]/,TAG:/^((?:[\w\u0128-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child\(?(even|odd|[\dn+-]*)\)?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)\(?(\d*)\)?(?:[^-]|$)/,PSEUDO:/:((?:[\w\u0128-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},relative:{"+":function(e,c){for(var j=0,f=e.length;j<f;j++){var i=e[j];if(i){for(i=i.previousSibling;i&&i.nodeType!==1;)i=i.previousSibling;e[j]=typeof c==="string"?i||false:i===c}}typeof c==="string"&&n.filter(c,e,true)},">":function(e,c){if(typeof c==="string"&&!/\W/.test(c)){c=c.toUpperCase();for(var j=
0,f=e.length;j<f;j++){var i=e[j];if(i){i=i.parentNode;e[j]=i.nodeName===c?i:false}}}else{j=0;for(f=e.length;j<f;j++)if(i=e[j])e[j]=typeof c==="string"?i.parentNode:i.parentNode===c;typeof c==="string"&&n.filter(c,e,true)}},"":function(e,c){var j="done"+o++,f=l;if(!c.match(/\W/)){var i=c=c.toUpperCase();f=h}f("parentNode",c,j,e,i)},"~":function(e,c){var j="done"+o++,f=l;if(typeof c==="string"&&!c.match(/\W/)){var i=c=c.toUpperCase();f=h}f("previousSibling",c,j,e,i)}},find:{ID:function(e,c){if(c.getElementById){var j=
c.getElementById(e[1]);return j?[j]:[]}},NAME:function(e,c){return c.getElementsByName?c.getElementsByName(e[1]):null},TAG:function(e,c){return c.getElementsByTagName(e[1])}},preFilter:{CLASS:function(e,c,j,f,i){e=" "+e[1].replace(/\\/g,"")+" ";for(var t=0;c[t];t++)if(i^(" "+c[t].className+" ").indexOf(e)>=0)j||f.push(c[t]);else if(j)c[t]=false;return false},ID:function(e){return e[1]},TAG:function(e){return e[1].toUpperCase()},CHILD:function(e){if(e[1]=="nth"){var c=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(e[2]==
"even"&&"2n"||e[2]=="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=c[1]+(c[2]||1)-0;e[3]=c[3]-0}e[0]="done"+o++;return e},ATTR:function(e){var c=e[1];if(b.attrMap[c])e[1]=b.attrMap[c];if(e[2]==="~=")e[4]=" "+e[4]+" ";return e},PSEUDO:function(e,c,j,f,i){if(e[1]==="not")if(e[3].match(q).length>1)e[3]=n(e[3],null,null,c);else{e=n.filter(e[3],c,j,true^i);j||f.push.apply(f,e);return false}return e},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&
e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){return e.selected===true},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,c,j){return!!n(j[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){return"text"===e.type},radio:function(e){return"radio"===e.type},checkbox:function(e){return"checkbox"===e.type},file:function(e){return"file"===e.type},
password:function(e){return"password"===e.type},submit:function(e){return"submit"===e.type},image:function(e){return"image"===e.type},reset:function(e){return"reset"===e.type},button:function(e){return"button"===e.type||e.nodeName.toUpperCase()==="BUTTON"},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)}},setFilters:{first:function(e,c){return c===0},last:function(e,c,j,f){return c===f.length-1},even:function(e,c){return c%2===0},odd:function(e,c){return c%2===1},lt:function(e,
c,j){return c<j[3]-0},gt:function(e,c,j){return c>j[3]-0},nth:function(e,c,j){return j[3]-0==c},eq:function(e,c,j){return j[3]-0==c}},filter:{CHILD:function(e,c){var j=c[1],f=e.parentNode,i=c[0];if(f&&!f[i]){for(var t=1,x=f.firstChild;x;x=x.nextSibling)if(x.nodeType==1)x.nodeIndex=t++;f[i]=t-1}if(j=="first")return e.nodeIndex==1;else if(j=="last")return e.nodeIndex==f[i];else if(j=="only")return f[i]==1;else if(j=="nth"){j=false;f=c[2];i=c[3];if(f==1&&i==0)return true;if(f==0){if(e.nodeIndex==i)j=
true}else if((e.nodeIndex-i)%f==0&&(e.nodeIndex-i)/f>=0)j=true;return j}},PSEUDO:function(e,c,j,f){var i=c[1],t=b.filters[i];if(t)return t(e,j,c,f);else if(i==="contains")return(e.textContent||e.innerText||"").indexOf(c[3])>=0;else if(i==="not"){c=c[3];j=0;for(f=c.length;j<f;j++)if(c[j]===e)return false;return true}},ID:function(e,c){return e.nodeType===1&&e.getAttribute("id")===c},TAG:function(e,c){return c==="*"&&e.nodeType===1||e.nodeName===c},CLASS:function(e,c){return c.test(e.className)},ATTR:function(e,
c){var j=e[c[1]]||e.getAttribute(c[1]),f=j+"",i=c[2],t=c[4];return j==null?false:i==="="?f===t:i==="*="?f.indexOf(t)>=0:i==="~="?(" "+f+" ").indexOf(t)>=0:!c[4]?j:i==="!="?f!=t:i==="^="?f.indexOf(t)===0:i==="$="?f.substr(f.length-t.length)===t:i==="|="?f===t||f.substr(0,t.length+1)===t+"-":false},POS:function(e,c,j,f){var i=b.setFilters[c[2]];if(i)return i(e,j,c,f)}}},d;for(d in b.match)b.match[d]=RegExp(b.match[d].source+/(?![^\[]*\])(?![^\(]*\))/.source);var m=function(e,c){e=Array.prototype.slice.call(e);
if(c){c.push.apply(c,e);return c}return e};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(u){m=function(e,c){var j=c||[];if(r.call(e)==="[object Array]")Array.prototype.push.apply(j,e);else if(typeof e.length==="number")for(var f=0,i=e.length;f<i;f++)j.push(e[f]);else for(f=0;e[f];f++)j.push(e[f]);return j}}(function(){var e=document.createElement("form"),c="script"+(new Date).getTime();e.innerHTML="<input name='"+c+"'/>";var j=document.documentElement;j.insertBefore(e,
j.firstChild);if(document.getElementById(c)){b.find.ID=function(f,i){if(i.getElementById){var t=i.getElementById(f[1]);return t?t.id===f[1]||t.getAttributeNode&&t.getAttributeNode("id").nodeValue===f[1]?[t]:undefined:[]}};b.filter.ID=function(f,i){var t=f.getAttributeNode&&f.getAttributeNode("id");return f.nodeType===1&&t&&t.nodeValue===i}}j.removeChild(e)})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));if(e.getElementsByTagName("*").length>0)b.find.TAG=
function(c,j){var f=j.getElementsByTagName(c[1]);if(c[1]==="*"){for(var i=[],t=0;f[t];t++)f[t].nodeType===1&&i.push(f[t]);f=i}return f}})();document.querySelectorAll&&function(){var e=n;n=function(c,j,f,i){j=j||document;if(!i&&j.nodeType===9)try{return m(j.querySelectorAll(c),f)}catch(t){}return e(c,j,f,i)};n.find=e.find;n.filter=e.filter;n.selectors=e.selectors;n.matches=e.matches}();if(document.documentElement.getElementsByClassName){b.order.splice(1,0,"CLASS");b.find.CLASS=function(e,c){return c.getElementsByClassName(e[1])}}var z=
document.compareDocumentPosition?function(e,c){return e.compareDocumentPosition(c)&16}:function(e,c){return e!==c&&(e.contains?e.contains(c):true)};a.Sizzle=n};if(this.dojo){dojo.provide("dojo._base.query");R(dojo);U(dojo)}else U(window)}if(!dojo._hasResource["dojo._base.xhr"]){dojo._hasResource["dojo._base.xhr"]=true;dojo.provide("dojo._base.xhr");(function(){var a=dojo,h=a.config;dojo.fieldToObject=function(f){var i=null;if(f=a.byId(f)){var t=f.name,x=(f.type||"").toLowerCase();if(t&&x&&!f.disabled)if(x==
"radio"||x=="checkbox"){if(f.checked)i=f.value}else if(f.multiple){i=[];a.query("option",f).forEach(function(s){s.selected&&i.push(s.value)})}else i=f.value}return i};dojo.formToObject=function(f){var i={};a.forEach(dojo.byId(f).elements,function(t){var x=t.name,s=(t.type||"").toLowerCase();if(x&&s&&"file|submit|image|reset|button|".indexOf(s)==-1&&!t.disabled){var w=x;t=a.fieldToObject(t);if(t!==null){var A=i[w];if(typeof A=="string")i[w]=[A,t];else if(a.isArray(A))A.push(t);else i[w]=t}if(s=="image")i[x+
".x"]=i[x+".y"]=i[x].x=i[x].y=0}});return i};dojo.objectToQuery=function(f){var i=encodeURIComponent,t=[],x={},s;for(s in f){var w=f[s];if(w!=x[s]){var A=i(s)+"=";if(a.isArray(w))for(var y=0;y<w.length;y++)t.push(A+i(w[y]));else t.push(A+i(w))}}return t.join("&")};dojo.formToQuery=function(f){return a.objectToQuery(a.formToObject(f))};dojo.formToJson=function(f,i){return a.toJson(a.formToObject(f),i)};dojo.queryToObject=function(f){var i={};f=f.split("&");var t=decodeURIComponent;a.forEach(f,function(x){if(x.length){var s=
x.split("=");x=t(s.shift());s=t(s.join("="));if(typeof i[x]=="string")i[x]=[i[x]];if(a.isArray(i[x]))i[x].push(s);else i[x]=s}});return i};dojo._blockAsync=false;var l=a._contentHandlers=dojo.contentHandlers={text:function(f){return f.responseText},json:function(f){return a.fromJson(f.responseText||null)},"json-comment-filtered":function(f){dojo.config.useCommentedJson||console.warn("Consider using the standard mimetype:application/json. json-commenting can introduce security issues. To decrease the chances of hijacking, use the standard the 'json' handler and prefix your json with: {}&&\nUse djConfig.useCommentedJson=true to turn off this message.");
f=f.responseText;var i=f.indexOf("/*"),t=f.lastIndexOf("*/");if(i==-1||t==-1)throw Error("JSON was not comment filtered");return a.fromJson(f.substring(i+2,t))},javascript:function(f){return a.eval(f.responseText)},xml:function(f){var i=f.responseXML;if(a.isIE&&(!i||!i.documentElement)){var t=function(x){return"MSXML"+x+".DOMDocument"};t=["Microsoft.XMLDOM",t(6),t(4),t(3),t(2)];a.some(t,function(x){try{var s=new ActiveXObject(x);s.async=false;s.loadXML(f.responseText);i=s}catch(w){return false}return true})}return i},
"json-comment-optional":function(f){return f.responseText&&/^[^{\[]*\/\*/.test(f.responseText)?l["json-comment-filtered"](f):l.json(f)}};dojo._ioSetArgs=function(f,i,t,x){var s={args:f,url:f.url},w=null;if(f.form){w=a.byId(f.form);var A=w.getAttributeNode("action");s.url=s.url||(A?A.value:null);w=a.formToObject(w)}A=[{}];w&&A.push(w);f.content&&A.push(f.content);f.preventCache&&A.push({"dojo.preventCache":(new Date).valueOf()});s.query=a.objectToQuery(a.mixin.apply(null,A));s.handleAs=f.handleAs||
"text";var y=new a.Deferred(i);y.addCallbacks(t,function(F){return x(F,y)});var B=f.load;B&&a.isFunction(B)&&y.addCallback(function(F){return B.call(f,F,s)});var C=f.error;C&&a.isFunction(C)&&y.addErrback(function(F){return C.call(f,F,s)});var E=f.handle;E&&a.isFunction(E)&&y.addBoth(function(F){return E.call(f,F,s)});if(h.ioPublish&&a.publish&&s.args.ioPublish!==false){y.addCallbacks(function(F){a.publish("/dojo/io/load",[y,F]);return F},function(F){a.publish("/dojo/io/error",[y,F]);return F});y.addBoth(function(F){a.publish("/dojo/io/done",
[y,F]);return F})}y.ioArgs=s;return y};var q=function(f){f.canceled=true;var i=f.ioArgs.xhr,t=typeof i.abort;if(t=="function"||t=="object"||t=="unknown")i.abort();f=f.ioArgs.error;if(!f){f=Error("xhr cancelled");f.dojoType="cancel"}return f},o=function(f){f=l[f.ioArgs.handleAs](f.ioArgs.xhr);return f===undefined?null:f},r=function(f,i){i.ioArgs.args.failOk||console.error(f);return f},n=null,b=[],d=0,m=function(f){if(d<=0){d=0;if(h.ioPublish&&a.publish&&(!f||f&&f.ioArgs.args.ioPublish!==false))a.publish("/dojo/io/stop")}},
u=function(){var f=(new Date).getTime();if(!a._blockAsync)for(var i=0,t;i<b.length&&(t=b[i]);i++){var x=t.dfd,s=function(){if(!x||x.canceled||!t.validCheck(x)){b.splice(i--,1);d-=1}else if(t.ioCheck(x)){b.splice(i--,1);t.resHandle(x);d-=1}else if(x.startTime)if(x.startTime+(x.ioArgs.args.timeout||0)<f){b.splice(i--,1);var A=Error("timeout exceeded");A.dojoType="timeout";x.errback(A);x.cancel();d-=1}};if(dojo.config.debugAtAllCosts)s.call(this);else try{s.call(this)}catch(w){x.errback(w)}}m(x);if(!b.length){clearInterval(n);
n=null}};dojo._ioCancelAll=function(){try{a.forEach(b,function(i){try{i.dfd.cancel()}catch(t){}})}catch(f){}};a.isIE&&a.addOnWindowUnload(a._ioCancelAll);a._ioNotifyStart=function(f){if(h.ioPublish&&a.publish&&f.ioArgs.args.ioPublish!==false){d||a.publish("/dojo/io/start");d+=1;a.publish("/dojo/io/send",[f])}};a._ioWatch=function(f,i,t,x){var s=f.ioArgs.args;if(s.timeout)f.startTime=(new Date).getTime();b.push({dfd:f,validCheck:i,ioCheck:t,resHandle:x});n||(n=setInterval(u,50));s.sync&&u()};var z=
"application/x-www-form-urlencoded",e=function(f){return f.ioArgs.xhr.readyState},c=function(f){return 4==f.ioArgs.xhr.readyState},j=function(f){var i=f.ioArgs.xhr;if(a._isDocumentOk(i))f.callback(f);else{var t=Error("Unable to load "+f.ioArgs.url+" status:"+i.status);t.status=i.status;t.responseText=i.responseText;f.errback(t)}};dojo._ioAddQueryToUrl=function(f){if(f.query.length){f.url+=(f.url.indexOf("?")==-1?"?":"&")+f.query;f.query=null}};dojo.xhr=function(f,i,t){var x=a._ioSetArgs(i,q,o,r),
s=x.ioArgs,w=s.xhr=a._xhrObj(s.args);if(!w){x.cancel();return x}if("postData"in i)s.query=i.postData;else if("putData"in i)s.query=i.putData;else if("rawBody"in i)s.query=i.rawBody;else if(arguments.length>2&&!t||"POST|PUT".indexOf(f.toUpperCase())==-1)a._ioAddQueryToUrl(s);w.open(f,s.url,i.sync!==true,i.user||undefined,i.password||undefined);if(i.headers)for(var A in i.headers)if(A.toLowerCase()==="content-type"&&!i.contentType)i.contentType=i.headers[A];else i.headers[A]&&w.setRequestHeader(A,i.headers[A]);
w.setRequestHeader("Content-Type",i.contentType||z);if(!i.headers||!("X-Requested-With"in i.headers))w.setRequestHeader("X-Requested-With","XMLHttpRequest");a._ioNotifyStart(x);if(dojo.config.debugAtAllCosts)w.send(s.query);else try{w.send(s.query)}catch(y){s.error=y;x.cancel()}a._ioWatch(x,e,c,j);return x};dojo.xhrGet=function(f){return a.xhr("GET",f)};dojo.rawXhrPost=dojo.xhrPost=function(f){return a.xhr("POST",f,true)};dojo.rawXhrPut=dojo.xhrPut=function(f){return a.xhr("PUT",f,true)};dojo.xhrDelete=
function(f){return a.xhr("DELETE",f)}})()}if(!dojo._hasResource["dojo._base.fx"]){dojo._hasResource["dojo._base.fx"]=true;dojo.provide("dojo._base.fx");(function(){var a=dojo,h=a._mixin;dojo._Line=function(b,d){this.start=b;this.end=d};dojo._Line.prototype.getValue=function(b){return(this.end-this.start)*b+this.start};dojo.Animation=function(b){h(this,b);if(a.isArray(this.curve))this.curve=new a._Line(this.curve[0],this.curve[1])};a._Animation=a.Animation;a.extend(dojo.Animation,{duration:350,repeat:0,
rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){var b=this._percent,d=this.easing;return d?d(b):b},_fire:function(b,d){var m=d||[];if(this[b])if(a.config.debugAtAllCosts)this[b].apply(this,m);else try{this[b].apply(this,m)}catch(u){console.error("exception in animation handler for:",b);console.error(u)}return this},play:function(b,d){var m=this;m._delayTimer&&m._clearTimer();if(d){m._stopTimer();m._active=m._paused=false;m._percent=0}else if(m._active&&!m._paused)return m;m._fire("beforeBegin",
[m.node]);var u=b||m.delay,z=dojo.hitch(m,"_play",d);if(u>0){m._delayTimer=setTimeout(z,u);return m}z();return m},_play:function(){var b=this;b._delayTimer&&b._clearTimer();b._startTime=(new Date).valueOf();if(b._paused)b._startTime-=b.duration*b._percent;b._active=true;b._paused=false;var d=b.curve.getValue(b._getStep());if(!b._percent){if(!b._startRepeatCount)b._startRepeatCount=b.repeat;b._fire("onBegin",[d])}b._fire("onPlay",[d]);b._cycle();return b},pause:function(){var b=this;b._delayTimer&&
b._clearTimer();b._stopTimer();if(!b._active)return b;b._paused=true;b._fire("onPause",[b.curve.getValue(b._getStep())]);return b},gotoPercent:function(b,d){var m=this;m._stopTimer();m._active=m._paused=true;m._percent=b;d&&m.play();return m},stop:function(b){var d=this;d._delayTimer&&d._clearTimer();if(!d._timer)return d;d._stopTimer();if(b)d._percent=1;d._fire("onStop",[d.curve.getValue(d._getStep())]);d._active=d._paused=false;return d},status:function(){if(this._active)return this._paused?"paused":
"playing";return"stopped"},_cycle:function(){var b=this;if(b._active){var d=((new Date).valueOf()-b._startTime)/b.duration;if(d>=1)d=1;b._percent=d;if(b.easing)d=b.easing(d);b._fire("onAnimate",[b.curve.getValue(d)]);if(b._percent<1)b._startTimer();else{b._active=false;if(b.repeat>0){b.repeat--;b.play(null,true)}else if(b.repeat==-1)b.play(null,true);else if(b._startRepeatCount){b.repeat=b._startRepeatCount;b._startRepeatCount=0}b._percent=0;b._fire("onEnd",[b.node]);!b.repeat&&b._stopTimer()}}return b},
_clearTimer:function(){clearTimeout(this._delayTimer);delete this._delayTimer}});var l=0,q=null,o={run:function(){}};a.extend(a.Animation,{_startTimer:function(){if(!this._timer){this._timer=a.connect(o,"run",this,"_cycle");l++}q||(q=setInterval(a.hitch(o,"run"),this.rate))},_stopTimer:function(){if(this._timer){a.disconnect(this._timer);this._timer=null;l--}if(l<=0){clearInterval(q);q=null;l=0}}});var r=a.isIE?function(b){var d=b.style;if(!d.width.length&&a.style(b,"width")=="auto")d.width="auto"}:
function(){};dojo._fade=function(b){b.node=a.byId(b.node);var d=h({properties:{}},b);b=d.properties.opacity={};b.start=!("start"in d)?function(){return+a.style(d.node,"opacity")||0}:d.start;b.end=d.end;b=a.animateProperty(d);a.connect(b,"beforeBegin",a.partial(r,d.node));return b};dojo.fadeIn=function(b){return a._fade(h({end:1},b))};dojo.fadeOut=function(b){return a._fade(h({end:0},b))};dojo._defaultEasing=function(b){return 0.5+Math.sin((b+1.5)*Math.PI)/2};var n=function(b){this._properties=b;for(var d in b){var m=
b[d];if(m.start instanceof a.Color)m.tempColor=new a.Color}};n.prototype.getValue=function(b){var d={},m;for(m in this._properties){var u=this._properties[m],z=u.start;if(z instanceof a.Color)d[m]=a.blendColors(z,u.end,b,u.tempColor).toCss();else a.isArray(z)||(d[m]=(u.end-z)*b+z+(m!="opacity"?u.units||"px":0))}return d};dojo.animateProperty=function(b){var d=b.node=a.byId(b.node);if(!b.easing)b.easing=a._defaultEasing;b=new a.Animation(b);a.connect(b,"beforeBegin",b,function(){var m={},u;for(u in this.properties){if(u==
"width"||u=="height")this.node.display="block";var z=this.properties[u];if(a.isFunction(z))z=z(d);z=m[u]=h({},a.isObject(z)?z:{end:z});if(a.isFunction(z.start))z.start=z.start(d);if(a.isFunction(z.end))z.end=z.end(d);var e=u.toLowerCase().indexOf("color")>=0,c=function(j,f){var i={height:j.offsetHeight,width:j.offsetWidth}[f];if(i!==undefined)return i;i=a.style(j,f);return f=="opacity"?+i:e?i:parseFloat(i)};if("end"in z){if(!("start"in z))z.start=c(d,u)}else z.end=c(d,u);if(e){z.start=new a.Color(z.start);
z.end=new a.Color(z.end)}else z.start=u=="opacity"?+z.start:parseFloat(z.start)}this.curve=new n(m)});a.connect(b,"onAnimate",a.hitch(a,"style",b.node));return b};dojo.anim=function(b,d,m,u,z,e){return a.animateProperty({node:b,duration:m||a.Animation.prototype.duration,properties:d,easing:u,onEnd:z}).play(e||0)}})()}if(!dojo._hasResource["dojo._base.browser"]){dojo._hasResource["dojo._base.browser"]=true;dojo.provide("dojo._base.browser");dojo.forEach(dojo.config.require,function(a){dojo.require(a)})}if(!dojo._hasResource["dojo._base"]){dojo._hasResource["dojo._base"]=
true;dojo.provide("dojo._base")}if(!dojo._hasResource["dojo.back"]){dojo._hasResource["dojo.back"]=true;dojo.provide("dojo.back");dojo.getObject("back",true,dojo);(function(){function a(){var s=i.pop();if(s){var w=i[i.length-1];if(!w&&i.length==0)w=z;if(w)if(w.kwArgs.back)w.kwArgs.back();else if(w.kwArgs.backButton)w.kwArgs.backButton();else w.kwArgs.handle&&w.kwArgs.handle("back");f.push(s)}}function h(){var s=f.pop();if(s){if(s.kwArgs.forward)s.kwArgs.forward();else if(s.kwArgs.forwardButton)s.kwArgs.forwardButton();
else s.kwArgs.handle&&s.kwArgs.handle("forward");i.push(s)}}function l(s,w,A){return{url:s,kwArgs:w,urlHash:A}}function q(s){s=s.split("?");return s.length<2?null:s[1]}function o(){var s=(dojo.config.dojoIframeHistoryUrl||dojo.moduleUrl("dojo","resources/iframe_history.html"))+"?"+(new Date).getTime();t=true;if(j)dojo.isWebKit?j.location=s:window.frames[j.name].location=s;return s}function r(){if(!x){var s=i.length,w=b();if((w===u||window.location.href==m)&&s==1)a();else{if(f.length>0)if(f[f.length-
1].urlHash===w){h();return}s>=2&&i[s-2]&&i[s-2].urlHash===w&&a()}}}var n=dojo.back,b=n.getHash=function(){var s=window.location.hash;if(s.charAt(0)=="#")s=s.substring(1);return dojo.isMozilla?s:decodeURIComponent(s)},d=n.setHash=function(s){s||(s="");window.location.hash=encodeURIComponent(s)},m=typeof window!=="undefined"?window.location.href:"",u=typeof window!=="undefined"?b():"",z=null,e=null,c=null,j=null,f=[],i=[],t=false,x=false;n.goBack=a;n.goForward=h;n.init=function(){if(!dojo.byId("dj_history")){var s=
dojo.config.dojoIframeHistoryUrl||dojo.moduleUrl("dojo","resources/iframe_history.html");dojo._postLoad?console.error("dojo.back.init() must be called before the DOM has loaded. If using xdomain loading or djConfig.debugAtAllCosts, include dojo.back in a build layer."):document.write('<iframe style="border:0;width:1px;height:1px;position:absolute;visibility:hidden;bottom:0;right:0;" name="dj_history" id="dj_history" src="'+s+'"></iframe>')}};n.setInitialState=function(s){z=l(m,s,u)};n.addToHistory=
function(s){f=[];var w=null,A=null;if(!j){dojo.config.useXDomain&&!dojo.config.dojoIframeHistoryUrl&&console.warn("dojo.back: When using cross-domain Dojo builds, please save iframe_history.html to your domain and set djConfig.dojoIframeHistoryUrl to the path on your domain to iframe_history.html");j=window.frames.dj_history}c||(c=dojo.create("a",{style:{display:"none"}},dojo.body()));if(s.changeUrl){w=""+(s.changeUrl!==true?s.changeUrl:(new Date).getTime());if(i.length==0&&z.urlHash==w){z=l(A,s,
w);return}else if(i.length>0&&i[i.length-1].urlHash==w){i[i.length-1]=l(A,s,w);return}x=true;setTimeout(function(){d(w);x=false},1);c.href=w;if(dojo.isIE){A=o();var y=s.back||s.backButton||s.handle,B=function(E){b()!=""&&setTimeout(function(){d(w)},1);y.apply(this,[E])};if(s.back)s.back=B;else if(s.backButton)s.backButton=B;else if(s.handle)s.handle=B;var C=s.forward||s.forwardButton||s.handle;B=function(E){b()!=""&&d(w);C&&C.apply(this,[E])};if(s.forward)s.forward=B;else if(s.forwardButton)s.forwardButton=
B;else if(s.handle)s.handle=B}else dojo.isIE||e||(e=setInterval(r,200))}else A=o();i.push(l(A,s,w))};n._iframeLoaded=function(s,w){var A=q(w.href);if(A==null)i.length==1&&a();else if(t)t=false;else if(i.length>=2&&A==q(i[i.length-2].url))a();else f.length>0&&A==q(f[f.length-1].url)&&h()}})()}if(!dojo._hasResource["dojo.NodeList-traverse"]){dojo._hasResource["dojo.NodeList-traverse"]=true;dojo.provide("dojo.NodeList-traverse");dojo.extend(dojo.NodeList,{_buildArrayFromCallback:function(a){for(var h=
[],l=0;l<this.length;l++){var q=a.call(this[l],this[l],h);if(q)h=h.concat(q)}return h},_getUniqueAsNodeList:function(a){for(var h=[],l=0,q;q=a[l];l++)q.nodeType==1&&dojo.indexOf(h,q)==-1&&h.push(q);return this._wrap(h,null,this._NodeListCtor)},_getUniqueNodeListWithParent:function(a,h){var l=this._getUniqueAsNodeList(a);l=h?dojo._filterQueryResult(l,h):l;return l._stash(this)},_getRelatedUniqueNodes:function(a,h){return this._getUniqueNodeListWithParent(this._buildArrayFromCallback(h),a)},children:function(a){return this._getRelatedUniqueNodes(a,
function(h){return dojo._toArray(h.childNodes)})},closest:function(a,h){return this._getRelatedUniqueNodes(null,function(l){do if(dojo._filterQueryResult([l],a,h).length)return l;while(l!=h&&(l=l.parentNode)&&l.nodeType==1);return null})},parent:function(a){return this._getRelatedUniqueNodes(a,function(h){return h.parentNode})},parents:function(a){return this._getRelatedUniqueNodes(a,function(h){for(var l=[];h.parentNode;){h=h.parentNode;l.push(h)}return l})},siblings:function(a){return this._getRelatedUniqueNodes(a,
function(h){for(var l=[],q=h.parentNode&&h.parentNode.childNodes,o=0;o<q.length;o++)q[o]!=h&&l.push(q[o]);return l})},next:function(a){return this._getRelatedUniqueNodes(a,function(h){for(h=h.nextSibling;h&&h.nodeType!=1;)h=h.nextSibling;return h})},nextAll:function(a){return this._getRelatedUniqueNodes(a,function(h){var l=[];for(h=h;h=h.nextSibling;)h.nodeType==1&&l.push(h);return l})},prev:function(a){return this._getRelatedUniqueNodes(a,function(h){for(h=h.previousSibling;h&&h.nodeType!=1;)h=h.previousSibling;
return h})},prevAll:function(a){return this._getRelatedUniqueNodes(a,function(h){var l=[];for(h=h;h=h.previousSibling;)h.nodeType==1&&l.push(h);return l})},andSelf:function(){return this.concat(this._parent)},first:function(){return this._wrap(this[0]&&[this[0]]||[],this)},last:function(){return this._wrap(this.length?[this[this.length-1]]:[],this)},even:function(){return this.filter(function(a,h){return h%2!=0})},odd:function(){return this.filter(function(a,h){return h%2==0})}})}if(dojo.isBrowser&&
(document.readyState==="complete"||dojo.config.afterOnLoad))window.setTimeout(dojo._loadInit,100)})();
/*
  Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
  Available via Academic Free License >= 2.1 OR the modified BSD license.
  see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojo.io.script"]){dojo._hasResource["dojo.io.script"]=true;dojo.provide("dojo.io.script");dojo.getObject("io",true,dojo);(function(){var f=dojo.isIE?"onreadystatechange":"load",g=/complete|loaded/;dojo.io.script={get:function(a){var c=this._makeScriptDeferred(a),b=c.ioArgs;dojo._ioAddQueryToUrl(b);dojo._ioNotifyStart(c);if(this._canAttach(b)){var d=this.attach(b.id,b.url,a.frameDoc);if(!b.jsonp&&!b.args.checkString)var h=dojo.connect(d,f,function(e){if(e.type=="load"||g.test(d.readyState)){dojo.disconnect(h);
b.scriptLoaded=e}})}dojo._ioWatch(c,this._validCheck,this._ioCheck,this._resHandle);return c},attach:function(a,c,b){b=b||dojo.doc;var d=b.createElement("script");d.type="text/javascript";d.src=c;d.id=a;d.charset="utf-8";return b.getElementsByTagName("head")[0].appendChild(d)},remove:function(a,c){dojo.destroy(dojo.byId(a,c));this["jsonp_"+a]&&delete this["jsonp_"+a]},_makeScriptDeferred:function(a){var c=dojo._ioSetArgs(a,this._deferredCancel,this._deferredOk,this._deferredError),b=c.ioArgs;b.id=
dojo._scopeName+"IoScript"+this._counter++;b.canDelete=false;b.jsonp=a.callbackParamName||a.jsonp;if(b.jsonp){b.query=b.query||"";if(b.query.length>0)b.query+="&";b.query+=b.jsonp+"="+(a.frameDoc?"parent.":"")+dojo._scopeName+".io.script.jsonp_"+b.id+"._jsonpCallback";b.frameDoc=a.frameDoc;b.canDelete=true;c._jsonpCallback=this._jsonpCallback;this["jsonp_"+b.id]=c}return c},_deferredCancel:function(a){a.canceled=true;a.ioArgs.canDelete&&dojo.io.script._addDeadScript(a.ioArgs)},_deferredOk:function(a){a=
a.ioArgs;a.canDelete&&dojo.io.script._addDeadScript(a);return a.json||a.scriptLoaded||a},_deferredError:function(a,c){if(c.ioArgs.canDelete)a.dojoType=="timeout"?dojo.io.script.remove(c.ioArgs.id,c.ioArgs.frameDoc):dojo.io.script._addDeadScript(c.ioArgs);console.log("dojo.io.script error",a);return a},_deadScripts:[],_counter:1,_addDeadScript:function(a){dojo.io.script._deadScripts.push({id:a.id,frameDoc:a.frameDoc});a.frameDoc=null},_validCheck:function(){var a=dojo.io.script,c=a._deadScripts;if(c&&
c.length>0){for(var b=0;b<c.length;b++){a.remove(c[b].id,c[b].frameDoc);c[b].frameDoc=null}dojo.io.script._deadScripts=[]}return true},_ioCheck:function(a){a=a.ioArgs;if(a.json||a.scriptLoaded&&!a.args.checkString)return true;if((a=a.args.checkString)&&eval("typeof("+a+") != 'undefined'"))return true;return false},_resHandle:function(a){dojo.io.script._ioCheck(a)?a.callback(a):a.errback(Error("inconceivable dojo.io.script._resHandle error"))},_canAttach:function(){return true},_jsonpCallback:function(a){this.ioArgs.json=
a}}})()};
dojo.provide("dj.peer.peer39Trg712");

dj.peer.peer39Trg712 = {
  init : function() {
    var p39_version_712 = '2.2';
    var p39_js_name_712 = 'trg_712.js.1.operational';
    var p39_cc_712 = '/7QnkE80XLKzILiqpjgeKxf/yYqPe70zfdO7mPRtaGk=';
    var p39_pu_712 = null;
    var p39_finished_712 = '0';
    var p39_al_712 = '1';
    var p39_cb_712 = '1';
    var p39_aid = '0712';
    var p39_validateInterval_712 = 100;

    function p39_quoted(s) {
      return (s) ? '"' + s + '"' : '""';
    }
    function p39_encode(s) {
      return escape(s);
    }
    function p39_append(su, p, v) {
      if (v) {
        return su + '&' + p + '=' + v;
      }
      return su;
    }
    function p39_append_encode(su, p, v) {
      if (v) {
        return p39_append(su, p, p39_encode(v));
      }
      return su;
    }
    function p39_clean_url(u) {
      if (u) {
        if (u.indexOf('ad.yieldmanager.com') > 0) {
          var link_pos = u.indexOf('link=$,http');
          u = u.substring(link_pos, u.length);
          u = u.replace('link=$,http', 'http');
        }
      }
      return u;
    }
    function p39_clean_url_712(u) {
        u = u.replace(/\?(mod|ru|sms_ss|mg|hat_input|dlbk|reflink|KEYWORDS|fbresult|fb_ref|grcc|q|siteid|imgurl).*/g, "");
        u = u.replace(/#.*/g, "");
          return u;
    }
    function p39_validateFinished_712() {
      if ((p39_finished_712 == '1') || (p39_validateRetry_712 === 0)) {
        if (typeof (afterFinished_712) == "function") {
          afterFinished_712();
        }
      } else {
        p39_validateRetry_712--;
        setTimeout(p39_validateFinished_712, p39_validateInterval_712);
      }
    }
    function p39_zero_pad(n, c) {
      var nz = n + '';
      while (nz.length < c) {
        nz = "0" + nz;
      }
      return nz;
    }
    function p39_hash_code(s) {
      var h = 0;
      var len = s.length;
      var UP = 2147483647;
      var DOWN = 2147483648;
      for (i = 0; i < len; i++) {
        h = 31 * h + s.charCodeAt(i);
        if (h > UP) {
          h -= DOWN;
          h = -DOWN + h % (UP + DOWN + 1);
        } else if (h < -DOWN) {
          h -= -DOWN - 1;
          h = UP + h % (UP + DOWN + 1);
        }
      }
      if (h < 0) {
        return -h;
      }
      return h;
    }
    //build the Akamai directory structure 222/333/44444444
    function p39_build_akamai_url(u) {
        if (u) {
            var uh = p39_hash_code(u);
            var d1 = uh % 500;
            var d2 = parseInt(uh / 500, 10) % 500;
            var au = d1 + '/' + d2 + '/' + uh;
            au = au + p39_aid;
            return au;
        }
        return u;
    }

    function extractCategories(t) {
      if ((t) && (t.length > 0)) {
        var p = t.indexOf("name=");
        var ep = 0;
        var i = 0;
        var res = [];
        while ((p <= t.length) && (p > 0)) {
          ep = t.indexOf('"', p + 6);
          res[i] = t.substring(p + 6, ep);
          p = t.indexOf("name=", ep + 1);
          i++;
        }
        return res;
      }
      return;
    }

    //Main function - call to Peer39
    function p39_exec_712(ct, useDOM) {
        var w = window;
        var su = null;
        var p39_pr_712 = null; //page referer
        var p39_cc_v_712 = p39_cc_712; //client code
        var p39_sd_v_712 = null;
        var p39_akamai_v_712 = '1';
        var p39_au_v_712 = '//catrg.peer39.net/';
        // var p39_au_v_712 = 'http://adaptv.api.peer39.net/proxy/targeting?';
        var p39_aid_v_712 = '712';
        var p39_sid_v_712 = null;

        p39_sd_v_712 = Math.floor(Math.random() * 1000000);
        if (w.p39_mpu_712) {
            p39_pu_712 = w.p39_mpu_712;
        }
        if (!p39_pu_712) {
            p39_pu_712 = document.location.href;
            var ip = '0';
            try {
                p39_pu_712 = top.location.href;
                p39_pr_712 = document.referrer;

                if (top.location != document.location) {
                    ip = '1';
                }
            } catch (e) {
                try {
                    p39_pu_712 = window.parent.document.referrer;
                    ip = '2';
                } catch (ee) {
                    p39_pu_712 = document.referrer;
                    ip = '3';
                }
                p39_pr_712 = null;
            }
            p39_sd_v_712 = p39_sd_v_712.toString() + '' + ip;
        }
        p39_pu_712 =  p39_clean_url(p39_pu_712);

    //run the cleaning function.

        if (typeof (p39_clean_url_712) == "function") {
            if (p39_pu_712) {
                p39_pu_712 = p39_clean_url_712(p39_pu_712);
            }
        }

        if (p39_akamai_v_712 == '1') {

            //here comes the magic :-)
            su = p39_au_v_712 + p39_build_akamai_url("pu=" + decodeURIComponent(p39_pu_712) + "&cc=" + p39_cc_v_712);
            su = su + "?aid=" + p39_zero_pad(p39_aid_v_712, 5);
            if (p39_sid_v_712) {
                su = su + "&sid=" + p39_zero_pad(p39_sid_v_712, 5);
            } else {
                su = su + "&sid=00000";
            }
            su = p39_append_encode(su, "pu", decodeURIComponent(p39_pu_712));
            su = p39_append_encode(su, "cc", p39_cc_v_712);

      //not Akamai call
        } else {
            su = p39_au_v_712 + 'cc=' + p39_cc_v_712;
            su = p39_append_encode(su, "pu", p39_pu_712);
        }

      su = p39_append_encode(su, "ct", w.ct);
        su = p39_append_encode(su, "sd", p39_sd_v_712);
        su = p39_append_encode(su, "et", w.p39_extrk_712);

        su = su.substring(0, 1000);
        su = su.replace(/%\w?$/, '');

        if (useDOM) {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = su;
            document.getElementsByTagName("head")[0].appendChild(s);
        } else {
            document.write('<scr' + 'ipt type="text/javascript" src="' + su + '"> </script>');
        }
    }
    p39_exec_712(null, true);
  }, //  end of init


  p39_getTagValues : function(xml, vid) {
    var xml_obj;
    var res = [];
    try {
      xml_obj = new ActiveXObject("Microsoft.XMLDOM");
      xml_obj.async = false;
      xml_obj.loadXML(xml);
    } catch (e) {
      try {
        var parser = new DOMParser();
        xml_obj = parser.parseFromString(xml, "text/xml");
      } catch (ee) {
        return;
      }
    }
    if (xml_obj) {
      var categories = xml_obj.getElementsByTagName('category');
      for (catNo = 0; catNo < categories.length; catNo++) {
        if (categories[catNo].getAttribute(vid) != '0000') {
                  res[res.length] = categories[catNo].getAttribute(vid);
              }
      }
    }
    return res;
  },


  p39_resultsArray : function(default_content_type, value_id, append_default) {
    var results = [];
    var pxml = getTargetingTags_712();
    results = this.p39_getTagValues(pxml, value_id);
    if ((append_default) || (results.length === 0)) {
      results[results.length] = default_content_type;
    }
    return results;
  },


  p39_resultsKVP : function(default_content, value_id, delimiter, keyName, append_default) {
    var arrayResults = this.p39_resultsArray(default_content, value_id, append_default);
    for ( var arrayNo in arrayResults) {
      if (typeof arrayResults[arrayNo] !== 'function') {
        arrayResults[arrayNo] = (keyName + '=' + arrayResults[arrayNo]);
      }
    }
    return arrayResults.join(delimiter);
  }
};
dj.peer.peer39Trg712.init();
if (typeof dojo !== "undefined") {
  dojo.provide("djcs.djcs");
}

/* global djcs document unescape */
if (typeof djcs === "undefined") {
  djcs = {};
}
djcs.Util = {
  getCookie : function(a) {
    var i;
    if (a === null) {
      return null;
    }
    var b = document.cookie.split(';'), a_temp_cookie = '', cookie_name = '', cookie_value = '', b_cookie_found = false;
    for ( i = 0, len = b.length; i < len; i++) {
      a_temp_cookie = b[i].split('=');
      cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
      if (cookie_name === a) {
        b_cookie_found = true;
        if (a_temp_cookie.length > 1) {
          cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
        }
        return cookie_value;
      }
      a_temp_cookie = null;
      cookie_name = '';
    }
    if (!b_cookie_found) {
      return null;
    }
  },
  replaceAll : function(a, b, c) {
    var d = a.indexOf(b);
    while (d !== -1) {
      a = a.replace(b, c);
      d = a.indexOf(b);
    }
    return a;
  },
  UTF8Decode : function(a) {
    if (a === null) {
      return null;
    }
    var b = "", i = 0, c = 0, c2 = 0, c3 = 0, utftext = a;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        b += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        b += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        b += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return this.replaceAll(b, "+", " ");
  },
  base64Decode : function(a) {
    if (a === null) {
      return null;
    }
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", output = "", chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
    a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < a.length) {
      enc1 = b.indexOf(a.charAt(i++));
      enc2 = b.indexOf(a.charAt(i++));
      enc3 = b.indexOf(a.charAt(i++));
      enc4 = b.indexOf(a.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 !== 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 !== 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = this.UTF8Decode(output);
    return output;
  }
};
djcs.UserInfo = (function() {
  var U = djcs.Util, priv = {
    cookieName : "djcs_info",
    initialized : false,
    locInitialized : false,
    locCookie : "djcs_loc",
    openHouseUser : null,
    map : null,
    roleList : null,
    checkInfo : function() {
      var p;
      if (!this.initialized) {
        var a = U.getCookie(this.cookieName);
        if (a !== null) {
          var b = U.base64Decode(U.UTF8Decode(unescape(a)));
          if (b !== null) {
            var c = null;
            try {
              c = eval("(" + b + ")");
              if ((c !== null) && (c.uuid !== null)) {
                for (p in c) {
                  if (c.hasOwnProperty(p)) {
                    c[p] = U.UTF8Decode(unescape(c[p]));
                  }
                }
                var d = c.roles;
                if (d) {
                  this.roleList = d.split(',');
                }
                this.map = c;
                this.initialized = true;
              }
            } catch (err) {}
          }
        }else{
          this.roleList = null;
          this.map = null;
        }
      }
      return (this.map !== null);
    },

    checkUserLoc : function() {
      if (!this.locInitialized) {
        var o = U.getCookie(this.locCookie);
        if (o !== null) {
          this.openHouseUser = o;
        }
        this.locInitialized = true;
      }
      return this.openHouseUser;
    },

    getMapElement : function(a) {
      return (this.checkInfo()) ? this.map[a] : null;
    }
  };
  priv.checkInfo();
  return {
    init : function() {
      priv.initialized = false;
    },
    isLoggedIn : function() {
      return priv.getMapElement("uuid") !== null;
    },
    getRolesListStr : function() {
      return priv.getMapElement("roles");
    },
    hasRole : function(a) {
      var i;
      if (priv.roleList) {
        var roles = priv.roleList;
        for ( i = 0, len = roles.length; i < len; i++) {
          if (a === roles[i]) {
            return true;
          }
        }
      }
      return false;
    },

    isOpenHouseUser : function(o) {
      var user = priv.checkUserLoc();
      if (o === user) {
        return true;
      }
      return false;
    },
    getSessionId : function() {
      return priv.getMapElement("session");
    },
    getUuid : function() {
      return priv.getMapElement("uuid");
    },
    getFirstName : function() {
      return priv.getMapElement("first_name");
    },
    getLastName : function() {
      return priv.getMapElement("last_name");
    },
    getUserName : function() {
      return priv.getMapElement("user");
    },
    getEmailAddress : function() {
      return priv.getMapElement("email");
    },
    getGroup : function() {
        return priv.getMapElement("group");
      },
    getCallsign : function() {
      var a = this.getFirstName(), LN = this.getLastName();
      return (a && LN && (a !== "null") && (LN !== "null")) ? (a + " " + LN) : this.getUserName();
    }
  };
}());
djcs.EpitonCompat = (function() {
  var i = djcs.UserInfo, render = function(b) {
    return function(a) {
      ((typeof a === "string") ? document.getElementById(a) : a).innerHTML = b;
    };
  };
  this.epiton = {
    runOnReady : function(a) {
      a.apply();
    },
    gui : {
      Credentials : {
        getUuid : i.getUuid,
        hasRole : i.hasRole,
        isLoggedIn : i.isLoggedIn,
        isOpenHouseUser : i.isOpenHouseUser
      },
      Callsign : {
        renderIntoDiv : render(i.getCallsign())
      },
      EmailAddress : {
        renderIntoDiv : render(i.getEmailAddress())
      },
      FirstName : {
        renderIntoDiv : render(i.getFirstName())
      },
      LastName : {
        renderIntoDiv : render(i.getLastName())
      }
    }
  };
}());
dojo.provide("dj.lang._compat");dj.lang=dojo;
dojo.provide("dj.lang._dom");
(function(){var a=dj.lang,b=dojo.trim,c=function(g){return typeof g=="string"&&g!==""},e=dojo.hasClass;a.hasClass=function(g,h){h=b(h);return c(h)?e(g,h):false};a.hasClassName=a.hasClass;var f=dojo.addClass;a.addClass=function(g,h){if(h instanceof Array)return f(g,h);h=b(h);return c(h)&&!e(g,h)?f(g,h):null};a.addClassName=a.addClass;var j=dojo.removeClass;a.removeClass=function(g,h){if(h instanceof Array)return j(g,h);h=b(h);return c(h)&&e(g,h)?j(g,h):null};a.removeClassName=a.removeClass;a.getViewport=
function(){var g=dojo.doc.compatMode=="BackCompat"?dojo.body():dojo.doc.documentElement,h=dojo._docScroll();return{w:g.clientWidth,h:g.clientHeight,l:h.x,t:h.y}}})();
dojo.provide("dj.lang._event");dj.lang.addEvent=function(a,b,c,e){dojo.deprecated("dj.lang.addEvent","use dojo.connect instead","0.1.0");return dojo.connect(a,b,e||null,c)};dj.lang.removeEvent=function(a,b,c){dojo.deprecated("dj.lang.removeEvent","use dojo.removeEvent instead","0.1.0");a=dj.lang.isArray(a)?a:[a,b,c,1];return dojo.disconnect(a)};
dojo.provide("dj.lang._liveEvents");
(function(){var a=dojo,b=a.connect,c=a.disconnect;if(window.Node&&Node.prototype&&!Node.prototype.contains)Node.prototype.contains=function(m){return!!(this.compareDocumentPosition(m)&16)};var e=function(m){if(typeof m.stopPropagation!="undefined")m.stopPropagation();else m.cancelBubble=true},f={click:{},mousedown:{},mouseup:{},dblclick:{},keydown:{},keypress:{},keyup:{},focus:{},blur:{},mouseover:{},mouseout:{},submit:{},reset:{},change:{},select:{}},j=function(m){for(var q=null,t=2;t<m.length;t++)if(!isNaN(parseInt(m[t],
10))){q=m[t];break}if(q===null)q=-1;if(q<-1)throw Error("bad arg for depth, must be -1 or higher");return q},g=0,h=function(m,q,t,u,w){var v=f[u];g++;if(!q||typeof q!="function")return null;v[m]||(v[m]=[]);q={id:g,evName:u,selector:m,handle:q,depth:t,hoverFlag:w};v[m].push(q);return q};a=function(m,q,t,u){var w=t,v=j(arguments);return h(m,!u?t:function(){w.apply(u,arguments)},v,q,q==="mouseover"||q==="mouseout")};if(document.all&&!window.opera){var l=function(m){o(f.submit,m);e(m)},n=function(m){o(f.reset,
m);e(m)},k=function(m){o(f.change,m);e(m)},p=function(m){o(f.select,m);e(m)};a("form","focus",function(){c(this._submit_prep);this._submit_prep=b(this,"submit",l,false,true);c(this._reset_prep);this._reset_prep=b(this,"reset",n,false,true)});a("form","blur",function(){c(this._submit_prep);c(this._reset_prep)});a("select,input,textarea","focus",function(){c(this._change_prep);this._change_prep=b(this,"change",k,false,true)});a("select,input,textarea","blur",function(){c(this._change_prep)});a("input,textarea",
"focus",function(){c(this._select_prep);this._select_prep=b(this,"select",p,false,true)});a("input,textarea","blur",function(){c(this._select_prep)})}var o=function(m,q){if(m){var t=q.target,u;for(u in m)if(m.hasOwnProperty(u))for(var w=0;w<m[u].length;w++){var v=m[u][w];if(v)for(var y=v.depth==-1?100:v.depth,z=t,A=-1;A<y&&z&&z.nodeType==1;A++,z=z.parentNode)if(dojo.Sizzle.matches(v.selector,[z]).length>0){if(v.hoverFlag){y=q;if(!y)y=window.event;A=y.relatedTarget;if(!A){if("mouseover"==y.type)A=
y.fromElement;if("mouseout"==y.type)A=y.toElement}if((y=A)&&(z.contains(y)||z==y))break}v=v.handle.call(z,q);if(v!==undefined&&!v){v=q;if(typeof v.preventDefault!="undefined")v.preventDefault();else v.returnValue=false}break}}}},r=document.documentElement;b(r,"onclick",function(m){o(f.click,m)});b(r,"ondblclick",function(m){o(f.dblclick,m)});b(r,"onmousedown",function(m){o(f.mousedown,m)});b(r,"onmouseup",function(m){o(f.mouseup,m)});b(r,"onmouseover",function(m){o(f.mouseover,m)});b(r,"onmouseout",
function(m){o(f.mouseout,m)});b(r,"onfocus",function(m){o(f.focus,m)});b(r,"onblur",function(m){o(f.blur,m)});b(r,"onkeypress",function(m){o(f.keypress,m)});b(r,"onkeydown",function(m){o(f.keydown,m)});b(r,"onkeyup",function(m){o(f.keyup,m)});b(r,"onsubmit",function(m){o(f.submit,m)});b(r,"onreset",function(m){o(f.reset,m)});b(r,"onselect",function(m){o(f.select,m)});b(r,"onchange",function(m){o(f.change,m)});dj.lang.addLiveEvent=a;dj.lang.removeLiveEvent=function(m){if(m){var q=f[m.evName][m.selector];
if(q)for(var t=0,u=q.length;t<u;t++){var w=q[t];if(typeof w!=="undefined"&&w.id===m.id){delete q[t];m=null}}}}})();
dojo.provide("dj.lang._oop");
(function(){var a={};dj.lang._langMixin=function(b,c){if(!b)throw new TypeError("dj.lang._langMixin: receiving object is undefined");if(!c)return b;for(var e in c)if(c.hasOwnProperty&&c.hasOwnProperty(e)){var f=b[e],j=c[e];if(f!==null&&typeof f=="object"&&typeof j=="object")this._langMixin(f,j);else if(typeof j!=="undefined"&&f!==j)b[e]=j;if(dj.lang.isIE&&c){f=c.toString;if(typeof f=="function"&&f!=b.toString&&f!=a.toString&&f!="\nfunction toString() {\n    [native code]\n}\n")b.toString=c.toString}}};
dj.lang.deepMixin=function(b){b||(b={});for(var c=1,e=arguments.length;c<e;c++)dj.lang._langMixin(b,arguments[c]);return b}})();dj.lang.deepClone=function(a){if(a===null||typeof a!="object")return a;var b=new a.constructor,c;for(c in a)if(a.hasOwnProperty&&a.hasOwnProperty(c))b[c]=this.deepClone(a[c]);return b};dj.lang.cloneMixin=function(a,b){var c=this.deepClone(a);this.deepMixin(c,b);return c};
dj.lang.objectToString=function(a,b){if(typeof a!=="object")return a.toString();var c=[],e=null;if(typeof a.length==="number"&&!a.propertyIsEnumerable("length")&&typeof a.splice==="function")return"["+a.toString()+"]";if(!a.hasOwnProperty&&a.childNodes)return a.id!==""?"[Element: '"+a.id+"']":"[Element]";else if(!a.hasOwnProperty)return"[undefined]";for(var f in a)if(a.hasOwnProperty&&a.hasOwnProperty(f)){e=typeof a[f]=="object"?b?this.objectToString(a[f]):"[Object]":typeof a[f]=="function"?"[Function]":
typeof a[f]=="string"?'"'+a[f]+'"':a[f];c[c.length]=f+": "+e}return"{"+c.join(", ")+"}"};
dojo.provide("dj.util.Cookie");
dj.util.Cookie=function(){var a={},b,c=true,e=function(){if(typeof this._cookieDomain=="string")return this._cookieDomain;var g=location.hostname.split("."),h=g.length;return this._cookieDomain=h>2?"."+g[h-2]+"."+g[h-1]:location.hostname},f=function(g){if(typeof g==="string"){var h={};g=g.split("||");for(var l=0,n=g.length;l<n;l++){var k=g[l].split("="),p=k.shift();h[p]=k.join("=")}return h!=={}?h:null}},j=function(g,h,l,n){g=encodeURIComponent(g)+"="+(l?encodeURIComponent(h):h);if(typeof n!=="object")return g;
if(n.expires instanceof Date)g+="; expires="+n.expires.toGMTString();if(typeof n.path==="string"&&n.path!=="")g+="; path="+n.path;if(typeof n.domain==="string"&&n.domain!=="")g+="; domain="+n.domain;if(n.secure===true)g+="; secure";return g};return{setCookie:function(g,h,l,n,k){if(arguments.length>3&&(typeof n==="string"||typeof n==="boolean"&&n!==false))return this.setGroupCookie(n,g,h,l);var p=null;if(l){p=new Date;p.setTime(p.getTime()+l*864E5)}k=typeof k=="boolean"?k:c;document.cookie=j(g,h,k,
{expires:p,path:"/",domain:e()})},getCookie:function(g,h,l){if(arguments.length>1)return this.getGroupCookie(h,g);l=typeof l=="boolean"?l:c;for(var n=(l?encodeURIComponent(g):g)+"=",k=document.cookie.split(";"),p=0,o=k.length;p<o;p++){var r=k[p].replace(/^\s+|\s+$/g,"");if(r.indexOf(n)===0){n=r.substring(n.length,r.length);return l?decodeURIComponent(n):n}}return null},deleteCookie:function(g,h){if(arguments.length>1)return this.deleteGroupCookie(h,g);this.setCookie(g,"",-1)},setGroupCookie:function(g,
h,l,n){var k=typeof n=="undefined"||!n,p=n===-1,o=false,r=new Date;n&&!k&&r.setTime(r.getTime()+n*864E5);g=typeof g!=="boolean"?g:"DJCOOKIE";a[g]=a[g]||f(this.getCookie(g))||{};a[g][h]=l;if(p){delete a[g][h];h=0;for(var m in a[g])a[g].hasOwnProperty(m)&&h++;if(h>0)k||r.setTime(r.getTime()+31536E6);else{a[g]={};o=true}}h=g;l=a[g];if(typeof l!=="object")l=void 0;else{m=[];for(var q in l)if(l.hasOwnProperty(q))m[m.length]=q+"="+l[q];l=m=m.join("||")}q={path:"/",domain:e()};if(!k)q.expires=o?new Date(-1):
r;document.cookie=j(h,l,c,q)},getGroupCookie:function(g,h){var l=encodeURIComponent(typeof g!=="boolean"?g:"DJCOOKIE")+"=",n=document.cookie.split(";"),k=null;k=k=k=null;for(var p=0,o=n.length;p<o;p++){k=n[p].replace(/^\s+|\s+$/g,"");if(k.indexOf(l)===0){k=k.split(l)[1];k=f(decodeURIComponent(k));k=k[h];return typeof k!=="undefined"?k:null}}return null},deleteGroupCookie:function(g,h){this.setGroupCookie(g,h," ",-1)}}}();
dojo.provide("dj.util.customMessaging");
dj.util.customMessaging={defaultConfig:{_removeClass:"hidden",_addClass:"hidden",_divId:"messageCnt",_msgContent:"msgContent",_closeBtn:"messageClose",_messageQueue:[{param:"offers",value:"accepted",msgContent:"<span>Thank You!</span> You are now signed up for the exclusive offers you've selected."},{param:"reset",value:"true",msgContent:"Your password has been successfully changed!"}]},init:function(a){this.cfg=dojo.mixin(this.defaultConfig,a);dojo.connect(dojo.byId(this.cfg._closeBtn),"onclick",
this,this.hideMessage);for(i=0;i<this.cfg._messageQueue.length;i++)if(dj.util.queryParam.checkQueryStrParam(this.cfg._messageQueue[i].param,this.cfg._messageQueue[i].value)){dojo.byId(this.cfg._msgContent).innerHTML=this.cfg._messageQueue[i].msgContent;this.showMessage()}},showMessage:function(){var a=dojo.byId(this.cfg._divId);a&&dojo.removeClass(a,this.cfg._removeClass)},hideMessage:function(){var a=dojo.byId(this.cfg._divId);a&&dojo.addClass(a,this.cfg._addClass)}};
dojo.provide("dj.util.Date");
dj.util.Date={simpleDateFormat:{nibbles:{},character:"",output:"",index:0,labels:{month:["January","February","March","April","May","June","July","August","September","October","November","December","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},doubleDigit:function(a){return(a<0||a>9?"":"0")+a},format:function(a,b){return this._format({y:a.getFullYear()+"",
M:a.getMonth()+1,E:a.getDay(),D:a.getDate(),H:a.getHours(),m:a.getMinutes(),s:a.getSeconds()},b)},formatUTC:function(a,b){return this._format({y:a.getUTCFullYear()+"",M:a.getUTCMonth()+1,E:a.getUTCDay(),D:a.getUTCDate(),H:a.getUTCHours(),m:a.getUTCMinutes(),s:a.getUTCSeconds()},b)},_format:function(a,b){b+="";var c="",e="",f=0,j={};j.y=a.y;j.yyyy=a.y;j.yy=a.y.substring(2,4);j.M=a.M;j.MM=this.doubleDigit(a.M);j.MMM=this.labels.month[a.M-1];j.NNN=this.labels.month[a.M+11];j.d=a.D;j.dd=this.doubleDigit(a.D);
j.E=this.labels.day[a.E+7];j.EE=this.labels.day[a.E];j.H=a.H;j.HH=this.doubleDigit(a.H);j.h=a.H===0?12:a.H>12?a.H-12:a.H;j.hh=this.doubleDigit(j.h);j.K=a.H>11?a.H-12:a.H;j.k=a.H+1;j.KK=this.doubleDigit(j.K);j.kk=this.doubleDigit(j.k);j.a=a.H>11?"PM":"AM";j.aa=a.H>11?"p.m.":"a.m.";j.m=a.m;j.mm=this.doubleDigit(a.m);j.s=a.s;for(j.ss=this.doubleDigit(a.s);f<b.length;){var g=b.charAt(f);for(c="";b.charAt(f)==g&&f<b.length;)c+=b.charAt(f++);e+=typeof j[c]!=="undefined"?j[c]:c}return e}},timezones:{"Australian Central Daylight Time":"ACDT",
"Australian Central Standard Time":"ACST","Atlantic Daylight Time":"ADT","Australian Eastern Daylight Time":"AEDT","Australian Eastern Standard Time":"AEST","Alaska Daylight Time":"AKDT","Alaska Standard Time":"AKST","Atlantic Standard Time":"AST","Australian Western Daylight Time":"AWDT","Australian Western Standard Time":"AWST","British Summer Time":"BST","Central Daylight Time":"CDT","Central European Daylight Time":"CEDT","Central European Summer Time":"CEST","Central European Time":"CET","Central Summer(Daylight) Time":"CST",
"Central Standard Time":"CST","Christmas Island Time":"CXT","Eastern Daylight Time":"EDT","Eastern European Daylight Time":"EEDT","Eastern European Summer Time":"EEST","Eastern European Time":"EET","Eastern Summer(Daylight) Time":"EST","Eastern Standard Time":"EST","Greenwich Mean Time":"GMT","Heure Avanc?e de l',Atlantique":"HAA","Heure Avanc?e du Centre":"HAC","Hawaii-Aleutian Daylight Time":"HADT","Heure Avanc?e de l',Est":"HAE","Heure Avanc?e du Pacifique":"HAP","Heure Avanc?e des Rocheuses":"HAR",
"Hawaii-Aleutian Standard Time":"HAST","Heure Avanc?e de Terre-Neuve":"HAT","Heure Avanc?e du Yukon":"HAY","Heure Normale de l',Atlantique":"HNA","Heure Normale du Centre":"HNC","Heure Normale de l',Est":"HNE","Heure Normale du Pacifique":"HNP","Heure Normale des Rocheuses":"HNR","Heure Normale de Terre-Neuve":"HNT","Heure Normale du Yukon":"HNY","Irish Summer Time":"IST","Mountain Daylight Time":"MDT","Mitteleurop?ische Sommerzeit":"MESZ","Mitteleurop?ische Zeit":"MEZ","Mountain Standard Time":"MST",
"Newfoundland Daylight Time":"NDT","Norfolk (Island) Time":"NFT","Newfoundland Standard Time":"NST","Pacific Daylight Time":"PDT","Pacific Standard Time":"PST","Coordinated Universal Time":"UTC","Western European Daylight Time":"WEDT","Western European Summer Time":"WEST","Western European Time":"WET","Western Summer(Daylight) Time":"WST","Western Standard Time":"WST"},getTimeZone:function(a){var b=a.toString().replace(/^.*\(|\)$/g,""),c=this.timezones[b];if(typeof c!=="string"&&b.length>=2)for(var e in this.timezones)if(this.timezones[e]===
b)return b;if(typeof c=="undefined"||!c){a=a.toString();c=a.substr(a.length-8,3)}if(typeof c=="undefined")c="";return c},displayTime:function(a,b){var c=((new Date).getTimezoneOffset()/60*-1).toString();if(c.indexOf(".")!==-1){var e=c.substring(0,c.indexOf("."));c=c.substring(c.indexOf("."),c.length)==".75"?":45":":30";c=e+c}if(a!==""&&b!=="")if(c=="-4"||c=="-5"||c=="-6"||c=="-7"||c=="-8"||c=="-9"||c=="-10"||c=="-11")return a;else if(b.indexOf("GMT")!==-1){pgDate=b.substring(b.indexOf(",")+1,b.length);
var f=new Date(pgDate);e=this.simpleDateFormat.format(f,"EE, MMM d, y ");f="As of "+this.simpleDateFormat.format(f,"h:mm a ");c="(GMT "+(c.indexOf("-")!==-1?c:"+"+c)+" hours)";return e+f+c}else return b},getAmericasDate:function(){if(typeof pDateinSpanish!=="undefined"&&typeof pDateinPortuguese!=="undefined"){if(pID.substring(4,6)==="WS"||PSSG==="spanish")var a=this.formatAmericasDate(pDateinSpanish);else{a=this.formatAmericasDate(pDateinPortuguese);a=a.replace(/de/g,"X").replace(/X([^X]*)$/,"Y$1").replace("Y",
",").replace(/X/g,"de");a=a.replace(" ,",",")}var b=document.getElementById("todaysDate");a=document.createTextNode(a);b.appendChild(a)}},formatAmericasDate:function(a){a=a.substring(0,a.lastIndexOf(","));return a.substring(0,1).toUpperCase()+a.substring(1,a.length)},getOffset:function(){var a=new Date,b=new Date,c=new Date;switch(a.getFullYear()){case 2009:b.setFullYear(2009,2,8);b.setHours(3,0,0,0);c.setFullYear(2009,10,1);c.setHours(3,0,0,0);break;case 2010:b.setFullYear(2010,2,14);b.setHours(3,
0,0,0);c.setFullYear(2010,10,7);c.setHours(3,0,0,0);break;case 2011:b.setFullYear(2011,2,13);b.setHours(3,0,0,0);c.setFullYear(2011,10,6);c.setHours(3,0,0,0);break;case 2012:b.setFullYear(2012,2,11);b.setHours(3,0,0,0);c.setFullYear(2012,10,4);c.setHours(3,0,0,0);break;case 2013:b.setFullYear(2013,2,10);b.setHours(3,0,0,0);c.setFullYear(2013,10,3);c.setHours(3,0,0,0);break;case 2014:b.setFullYear(2014,2,9);b.setHours(3,0,0,0);c.setFullYear(2014,10,2);c.setHours(3,0,0,0);break;case 2015:b.setFullYear(2015,
2,8);b.setHours(3,0,0,0);c.setFullYear(2015,10,1);c.setHours(3,0,0,0)}var e=-5;if(a>=b&&a<=c)e=-4;return e},getESTDate:function(){d=new Date;utc=d.getTime()+d.getTimezoneOffset()*6E4;var a=nd=new Date(utc+36E5*this.getOffset()),b=a.getHours();a=a.getMinutes();var c="AM EDT";if(b>=12){c="PM EDT";b-=12}if(b===0)b=12;if(a<10)a="0"+a;b=b+":"+a+" "+c;a=d.getDate();c=d.getMonth();var e=d.getFullYear();return["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER",
"DECEMBER"][c]+" "+a+", "+e+" "+b}};
dojo.provide("dj.util.io");(function(){var a=dj.util;a.io={lazyLoad:function(b,c,e,f,j){a.io.lazyInit(b,c,function(){dojo.require(e);dojo.addOnLoad(j,f)})},lazyInit:function(b,c,e,f){window["lazld_"+b+c]=dojo.addLiveEvent(b,c,function(){dojo.removeLiveEvent(window["lazld_"+b+c]);e.apply(f)})},insertScriptAsync:function(b){var c=document.createElement("script");c.type="text/javascript";c.charset="utf-8";c.async=true;c.src=b;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)}}})();
if(typeof dj=="undefined")dj={};if(typeof dj.context=="undefined")dj.context={};if(typeof dj.context.ads=="undefined")dj.context.ads={};if(typeof dj.util=="undefined")dj.util={};if(typeof dj.widget=="undefined")dj.widget={};if(typeof dj.module=="undefined")dj.module={};if(typeof dj.service=="undefined")dj.service={};
dojo.provide("dj.util.Observer");
(dj.util.Observer=function(a){this.parent=a||null;this._subs=[]}).prototype={subscribe:function(a,b){if(typeof a!=="function")throw new TypeError("Callback must be a function.");b=b||this.parent;this._subs.push({name:null,cb:a,ctx:b})},subscribeByName:function(a,b,c){if(typeof a!=="string")throw new TypeError("Name must be a string.");if(typeof b!=="function")throw new TypeError("Callback must be a function.");c=c||this.parent;this._subs.push({name:a,cb:b,ctx:c})},unsubscribe:function(a){for(var b=
[],c=0,e=this._subs.length,f=null;c<e;c++){f=this._subs[c];f.cb!==a&&b.push(f)}this._subs=b},fire:function(){for(var a=0,b,c=this._subs.length;a<c;a++){b=this._subs[a];b.cb.apply(b.ctx,arguments)}},fireByName:function(a){if(typeof a!=="string")throw new TypeError("Name must be a string.");for(var b=[],c=1,e=arguments.length;c<e;c++)b.push(arguments[c]);c=0;for(var f=this._subs.length;c<f;c++){e=this._subs[c];e.name===null||e.name!==a||e.cb.apply(e.ctx,b)}}};
dojo.provide("dj.util.Page");
dj.util.Page=function(){var a=null,b=null;dojo.getObject("dj.context.module",true);return{isReferrer:function(c){return document.referrer.indexOf(c)>-1},getQuery:function(){return a=a===null?dojo.queryToObject(location.search.replace(/^\?/,"")):a},hasQueryParam:function(c){a===null&&this.getQuery();return typeof a[c]!=="undefined"},getQueryParam:function(c){a===null&&this.getQuery();return this.hasQueryParam(c)?a[c]:""},getHash:function(){return dojo.queryToObject(location.hash.replace(/^#/,""))},
hasHashParam:function(c){return typeof this.getHash()[c]!=="undefined"},getHashParam:function(c){var e=this.getHash();return this.hasHashParam(c)?e[c]:""},getChips:function(){if(null===b){var c=document.location.toString();c=c.replace(/\.html$/,"");c=c.replace(/\.js$/,"");b=c.split("-");b.shift()}return b},addStylesheet:function(c,e){if(typeof c!="undefined"){var f=document.createElement("link");f.type="text/css";f.rel="stylesheet";f.href=c;f.onLoad=e?e:"";f.media="screen";if(document.getElementsByTagName("head").length===
0){var j=document.createElement("head");document.getElementsByTagName("html")[0].appendChild(j)}document.getElementsByTagName("head")[0].appendChild(f)}},removeStylesheet:function(c){typeof c!="undefined"&&dojo.query("link").forEach(function(e){dojo.attr(e,"type")=="text/css"&&e.src==c&&dojo.destroy(e)})},addScript:function(c){if(typeof c!="undefined"){var e=document.createElement("script");e.type="text/javascript";e.src=c;if(document.getElementsByTagName("head").length===0){c=document.createElement("head");
document.getElementsByTagName("html")[0].appendChild(c)}document.getElementsByTagName("head")[0].appendChild(e)}},disableModuleRefresh:function(c){if(dj.context.module.disableModuleRefresh)dj.context.module.disableModuleRefresh[c]=true},enableModuleRefresh:function(c){if(dj.context.module.disableModuleRefresh)dj.context.module.disableModuleRefresh[c]=false},isModuleRefreshEnabled:function(c){return!dj.context.module.disableModuleRefresh[c]},enableRefresh:function(){dj.context.page.disablePageRefresh=
false},disableRefresh:function(){dj.context.page.disablePageRefresh=true},isRefreshEnabled:function(){return!dj.context.page.disablePageRefresh}}}();
dojo.provide("dj.util.Query");
dj.util.Query={matches:function(a,b){return dojo.Sizzle.matches(a,[b]).length>0},up:function(a,b){for(a=dojo.byId(a);a&&a.nodeType==1;a=a.parentNode)if(this.matches(b,a))break;return a},down:function(a,b){return dojo.query(b,a)[0]},next:function(a,b){a=dojo.byId(a);var c=false;if(typeof b=="undefined")c=true;for(a=a.nextSibling;a;a=a.nextSibling)if(a.nodeType==1&&(c||this.matches(b,a)))break;return a},previous:function(a,b){a=dojo.byId(a);var c=false;if(typeof b=="undefined")c=true;for(a=a.previousSibling;a;a=
a.previousSibling)if(a.nodeType==1&&(c||this.matches(b,a)))break;return a}};
dojo.provide("dj.util.queryParam");dj.util.queryParam={getQueryStrParams:function(){window.location.toString().match(/\?(.+)$/);return dojo.queryToObject(RegExp.$1)},getQueryStrParam:function(a){return this.getQueryStrParams()[a]},checkQueryStrParam:function(a,b){var c=this.getQueryStrParams();if(c[a])if(c[a].toLowerCase()==b.toLowerCase())return true;return false}};
dojo.provide("dj.util.string");
dj.util.string={RTrim:function(a){return a.replace(/\s*((\S+\s*)*)/,"$1")},LTrim:function(a){return a.replace(/((\s*\S+)*)\s*/,"$1")},trim:function(a){return this.LTrim(this.RTrim(a))},endsWith:function(a,b,c){if(c){a=a.toLowerCase();b=b.toLowerCase()}if(a.length-b.length<0)return false;return a.lastIndexOf(b)==a.length-b.length},_scriptFragment:"<script[^>]*>([\\S\\s]*?)<\/script>",stripScripts:function(a){return a.replace(RegExp(dj.util.string._scriptFragment,"img"),"")},extractScripts:function(a){var b=
dj.util.string._scriptFragment,c=RegExp(b,"im"),e=[];a=a.match(RegExp(b,"img"))||[];b=0;for(var f=a.length;b<f;b++)e.push((a[b].match(c)||["",""])[1]);return e},evalScripts:function(a,b){for(var c=dj.util.string.extractScripts(a),e=0;e<c.length;e++)try{dojo.eval(c[e])}catch(f){console.error("Error in script #%d of '%s': %o",e+1,b||"",f)}},toFunction:function(a,b){for(var c=a.split("."),e,f,j=dojo.global||this,g=0,h=c.length;g<h;g++){f=c[g];var l=j[f];if(typeof l==="object")j=l;else if(typeof l===
"function")e=l;else if(g+1<h){j[f]={};j=j[f]}}if(typeof b==="function"){j[f]=b;e=j[f]}return e}};
dojo.provide("dj.util.Tealium");dj.util.Tealium={_initd:false,isInitialized:function(){return this._initd},init:function(){if(typeof this._tealiumInitted==="undefined"){this._tealiumInitted=true;var a=document.createElement("script");a.type="text/javascript";a.src=document.location.protocol+"//tags.tiqcdn.com/utag/wsjdn/"+dj.context.core.tealiumProduct+"/"+dj.context.core.tealiumEnv+"/utag.js";document.getElementsByTagName("head")[0].appendChild(a)}}};
dojo.provide("dj.util.User");
dj.util.User={STATUS:{LOGGED_IN:1,LOGGED_OUT:0,NON_SUB:2},_currentStatus:null,getStatus:function(){try{throw Error("{User.getStatus} deprecated method");}catch(a){console.dir(a)}return this.STATUS.LOGGED_IN},hasRole:function(a,b){epiton.runOnReady(function(){var c=epiton.gui.Credentials.hasRole(a.toUpperCase());b(c)})},isLoggedIn:function(a){epiton.runOnReady(function(){var b=epiton.gui.Credentials.isLoggedIn();a(b)})},isOpenHouseUser:function(a,b){epiton.runOnReady(function(){if(typeof epiton.gui.Credentials.isOpenHouseUser=="function"){var c=
epiton.gui.Credentials.isOpenHouseUser(a.toUpperCase());b(c)}})},isSubLoggedIn:function(a,b){var c=dj.context.authorization.role;b=typeof b==="string"?b.toUpperCase():c.subscriber;epiton.runOnReady(function(){var e=epiton.gui.Credentials.isLoggedIn();if(b!==c.subscriber){var f=epiton.gui.Credentials.hasRole(b);a(e&&f)}else{f=epiton.gui.Credentials.hasRole(c.subscriber);var j=epiton.gui.Credentials.hasRole(c.subscriberTransient);a(e&&(f||j))}})},isRegLoggedIn:function(a,b){var c=dj.context.authorization.role;
b=typeof b==="string"?b.toUpperCase():c.subscriber;epiton.runOnReady(function(){var e=epiton.gui.Credentials.isLoggedIn();if(b!==c.subscriber){var f=epiton.gui.Credentials.hasRole(b);a(e&&!f)}else{f=epiton.gui.Credentials.hasRole(c.subscriber);var j=epiton.gui.Credentials.hasRole(c.subscriberTransient);a(e&&!f&&!j)}})},renderCallsign:function(a){epiton.runOnReady(function(){epiton.gui.Callsign.renderIntoDiv(a)})},renderEmailAddress:function(a){epiton.runOnReady(function(){epiton.gui.EmailAddress.renderIntoDiv(a)})},
renderFirstName:function(a){epiton.runOnReady(function(){epiton.gui.FirstName.renderIntoDiv(a)})},renderLastName:function(a){epiton.runOnReady(function(){epiton.gui.LastName.renderIntoDiv(a)})},getUserId:function(a){epiton.runOnReady(function(){var b="";if(epiton.gui.Credentials.isLoggedIn())b=epiton.gui.Credentials.getUuid().toString();a(b)})},getSubscriptionType:function(){var a=new dojo.Deferred;dj.util.User.isLoggedIn(function(b){b?dj.util.User.isSubLoggedIn(function(c){c?a.callback("SUB"):a.callback("REG")}):
a.callback("PUB")});return a}};
dojo.provide("dj.util.Element");dojo.require("dj.util.Query");
dj.util.Element={contains:function(a,b,c){var e=dojo.position(a);a=e.x;var f=e.y,j=a+e.w;e=f+e.h;return b>=a&&b<=j&&c>=f&&c<=e},isOutside:function(a,b){for(var c=a.relatedTarget||a.toElement||a.fromElement;c&&c!==b;)c=c.parentNode;if(c!==b)return true},

  adjustToLargest : function(container, domObj, onLoadCallback, retryCount) {
    var containerEls = container.getElementsByTagName("*");
    retryCount = retryCount ? retryCount : 0;

    var resWidth = 0;
    var resHeight = 0;

    for ( var i = 0, elen = containerEls.length; i < elen; i++) {
      var el = containerEls[i];

      /* Minor optimization */
      if ( (el.tagName == "SCRIPT") || (el.tagName == "NOSCRIPT") ) {
        continue;
      }

      /* Get dimensions */
      var dim = dj.util.Element.getDimensions(el);
      var width = dim[0];
      var height = dim[1];

      resWidth = (width >= resWidth) ? width : resWidth;
      resHeight = (height >= resHeight) ? height : resHeight;
    }

    console.log('found width,height', resWidth, resHeight, retryCount);
    if (resHeight < 50) {
       resHeight = 250;
       if (retryCount > 0) setTimeout(function () {dj.util.Element.adjustToLargest(container, domObj, onLoadCallback, --retryCount);}, 333);
    }
    console.log('setting width,height', resWidth, resHeight);

    domObj.width = resWidth;
    domObj.height = resHeight;

    if ( typeof onLoadCallback != "undefined" ) {
      onLoadCallback(domObj);
    }
  },

  getDimensions:function(a){var b=0,c=0;b=a.offsetWidth;c=a.offsetHeight;if(a.style.width!==""){var e=parseInt(a.style.width.split("px")[0],10);b=b>e?b:e}if(a.style.height!==""){a=parseInt(a.style.height.split("px")[0],10);c=c>a?c:a}return[b,c]},closeElement:function(a,b,c){dojo.query(a).forEach(function(e){dojo.connect(e,"on"+c,function(){var f=dj.util.Query.up(e,b);dojo.style(f,{display:"none"})})})},hide:function(a){dojo.style(dojo.byId(a),{display:"none"})},
show:function(a){dojo.style(dojo.byId(a),{display:""})},toggleHiddenClass:function(a){if(a)(a=dojo.byId(a))&&dojo.toggleClass(a,"hidden")},identify:function(a){a=dojo.byId(a);var b=dojo.attr(a,"id");if(b)return b;do b="anonymous_element_"+dj.util.Element.idCounter++;while(dojo.byId(b));dojo.attr(a,"id",b);return b},idCounter:1,cleanWhitespace:function(a){a=dojo.byId(a);for(var b=a.firstChild;b;){var c=b.nextSibling;b.nodeType==3&&!/\S/.test(b.nodeValue)&&a.removeChild(b);b=c}return a},isOrIsChildOf:function(a,
b){return dj.util.Query.matches(a,b)||dj.util.Element.isChildOf(a,b)},isChildOf:function(a,b){return dj.util.Query.up(a,b)!==dojo.doc},getDataset:function(a){a=a.attributes;for(var b={},c=0,e=a.length;c<e;c++){var f=a[c];if(f.name.indexOf("data-")>-1){var j=this._selectorToCamelCase(f.name.substring(5).toLowerCase());b[j]=f.value}}return b},setData:function(a,b,c){dojo.attr(a,"data-"+this._camelToSelectorCase(b),c)},getData:function(a,b){return dojo.attr(a,"data-"+this._camelToSelectorCase(b))},_selectorToCamelCase:function(a){return a.replace(/\-(.)/g,
function(b,c){return c.toUpperCase()})},_camelToSelectorCase:function(a){return a.replace(/([A-Z])/g,function(b,c){return"-"+c.toLowerCase()})}};
dojo.provide("dj.util.Omniture");dojo.require("dj.util.Cookie");
dj.util.Omniture={_initd:false,isInitialized:function(){return this._initd},lookup:{pagename:"pageName",pageType:"pageType",primaryproduct:"channel",sitedomain:"server",section:"prop1",subsection:"prop2",atype:"prop3",aheadline:"prop4",baseurl:"prop5",fullurl:"prop6",refresh:"prop7",csource:"prop8",caccess:"prop9",link:"prop10",campaign:"campaign",reflink:"prop11",qtype:"prop12",qsymbol:"prop13",qcompanyname:"prop14",qexchange:"prop15",qdatarange:"prop16",numads:"prop17",searchstatement:"prop18",
ctype:"prop19",abasedocid:"prop20",author:"prop21",apage:"prop22",apublished:"prop23",edition:"prop24",userid:"prop25",basesection:"prop26",asub:"prop27",targeturl:"prop38",previousValue:"prop65",language:"prop64"},elookup:{sourcecode:"eVar1",promocode:"eVar2",userID:"eVar3",pagename:"eVar4",link:"eVar5",reflink:"eVar6",abtesting:"eVar7",searchstatement:"eVar8",downloadtype:"eVar9",downloadname:"eVar10",primaryproduct:"eVar11",section:"eVar25",subsection:"eVar29",articletype:"eVar37",subscription:"eVar39",
asub:"eVar26",articletype:"eVar37",ctype:"eVar38",aheadline:"eVar40",section:"eVar52",ctype:"eVar53",subsection:"eVar54",basesection:"eVar55",subdomainReferrer:"eVar62"},editionToNameMap:{"":"Edition_North_America_USA","na,us":"Edition_North_America_USA",europe:"Edition_Europe",asia:"Edition_Asia",germany:"Edition_Germany","europe,uk":"Edition_Europe","asia,india":"Edition_India","asia,indo":"Edition_Indonesia","asia,kr":"Edition_Korea","europe,tr":"Edition_Turkey","asia,jp":"Edition_Japan","asia,cn":"Edition_China",
"sa,br":"Edition_Brazil","-pro":"US","na,us-pro":"US","europe-pro":"Europe","asia-pro":"Asia","asia,india-pro":"Asia"},CONFIG:{products:[{name:"cio",roles:["WSJ-CIO-PRO","WSJ-CIO-PRO-TRIAL","WSJ-ENT-CIO"]}],reportSuites:{cio:{main:"djglobal,djwsj",mobile:"djmobile",mainTest:"djdowjdev",mobileTest:"djdowjdev,djmobile"}}},init:function(a){if(!this._initd){this._initd=true;var b=this.config=dojo.mixin(this.CONFIG,a),c=new dojo.Deferred;c.then(dojo.hitch(this,this._init));var e=0,f=null,j=function(){++e===
b.products.length&&c.callback(f)},g=function(h,l,n){if(f!==null)j(h);else if(n){f=h;j(h)}else if(l.length===0)j(h);else{var k=l.pop();dj.util.User.hasRole(k,function(p){g(h,l,p)})}};dojo.forEach(b.products,function(h){g(h.name,h.roles,false)})}},_init:function(a){function b(o,r){if(!r)r=window.location.href;o=o.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var m=RegExp("[\\?&]"+o+"=([^&#]*)").exec(r);return m==null?"":m[1]}function c(o,r,m){var q="s.version='H.24.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
t=window,u=t.s_c_il,w=navigator,v=w.userAgent;w=w.appVersion;var y=w.indexOf("MSIE "),z=v.indexOf("Netscape6/"),A,C,B,x;if(o){o=o.toLowerCase();if(u)for(C=0;C<2;C++)for(A=0;A<u.length;A++){x=u[A];B=x._c;if((!B||B=="s_c"||C>0&&B=="s_l")&&(x.oun==o||x.fs&&x.sa&&x.fs(x.oun,o))){x.sa&&x.sa(o);if(B=="s_c")return x}else x=0}}t.s_an="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";t.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
t.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");t.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");t.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
t.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");t.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a");t.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
q=s_d(q);if(y>0){u=parseInt(A=w.substring(y+5));if(u>3)u=parseFloat(A)}else u=z>0?parseFloat(v.substring(z+10)):parseFloat(w);if(u<5||w.indexOf("Opera")>=0||v.indexOf("Opera")>=0)q=s_ft(q);if(!x){x={};if(!t.s_c_in){t.s_c_il=[];t.s_c_in=0}x._il=t.s_c_il;x._in=t.s_c_in;x._il[x._in]=x;t.s_c_in++}x._c="s_c";(new Function("s","un","pg","ss",q))(x,o,r,m);return x}var e=this.lookup,f=this.elookup,j=false,g="djglobal,djwsj",h=document.location.host;if(h.indexOf("qa")!=-1||h.indexOf("dev")!=-1||h.indexOf("reno")!=
-1){j=true;g="dowjdev"}if(dojo.query(".mobileCFOPage")[0])g=g==="dowjdev"?"dj"+g+",djmobile":"djmobile";if(document.URL.indexOf("wallstreetjournal.de")!=-1)g="djglobal,djwsjgermany";if(dojo.query("#mobileGermanyPage")[0])g=g==="dowjdev"?"dowjdev,djwsjgermany":"djglobal,djwsjgermany";if(h.indexOf("classroom")!=-1)g=g==="dowjdev"?"dowjdev,djjie":"djjie";if(h.indexOf("marketwatch")!=-1)g=g==="dowjdev"?"dowjdev,djmarketwatch":"djglobal,djmarketwatch";if(h.indexOf("smartmoney")!=-1)g=g==="dowjdev"?"dowjdev,djsm":
"djglobal,djsm";var l=document.referrer,n=/quotes(.f.dev|.s.dev|).wsj.com/,k=/indo(.f.dev|.s.dev|).wsj.com/;if(h.match(k)||l.match(k)&&h.match(n))g=g==="dowjdev"?"dowjdev,djwsjindonesia":"djglobal,djwsjindonesia";k=/kr(.f.dev|.s.dev|).wsj.com/;if(h.match(k)||l.match(k)&&h.match(n))g=g==="dowjdev"?"dowjdev,djwsjkorea":"djglobal,djwsjkorea";k=/jp(.f.dev|.s.dev|).wsj.com/;if(h.match(k)||l.match(k)&&h.match(n))g=g==="dowjdev"?"dowjdev,djjapanwsj":"djglobal,djjapanwsj";k=/tr(.f.dev|.s.dev|).wsj.com/;if(h.match(k)||
l.match(k)&&h.match(n))g=g==="dowjdev"?"dowjdev,djwsjturkey":"djglobal,djwsjturkey";k=/(f.dev.|s.dev.|)wsj.com.tr/;if(h.match(k)||l.match(k)&&h.match(n))g=g==="dowjdev"?"dowjdev,djwsjturkey":"djglobal,djwsjturkey";k=/cn(.f.dev|.s.dev|).wsj.com/;if(h.match(k)||l.match(k)&&h.match(n))g=g==="dowjdev"?"dowjdev,djwsjchina":"djglobal,djwsjchina";k=/br(.f.dev|.s.dev|).wsj.com/;if(h.match(k)||l.match(k)&&h.match(n))g=g==="dowjdev"?"dowjdev,djwsjbrasil":"djglobal,djwsjbrasil";if(h.match(/realtime(.f.dev|.s.dev|).wsj.com/))if(document.location.pathname.indexOf("/indonesia/")!=
-1)g=g==="dowjdev"?"dowjdev,djwsjindonesia":"djglobal,djwsjindonesia";else if(document.location.pathname.indexOf("/korea/")!=-1)g=g==="dowjdev"?"dowjdev,djwsjkorea":"djglobal,djwsjkorea";else if(document.location.pathname.indexOf("/japan/")!=-1)g=g==="dowjdev"?"dowjdev,djjapanwsj":"djglobal,djjapanwsj";else if(document.location.pathname.indexOf("/turkey/")!=-1)g=g==="dowjdev"?"dowjdev,djwsjturkey":"djglobal,djwsjturkey";else if(document.location.pathname.indexOf("/latam/")!=-1)g=g==="dowjdev"?"dowjdev,djwsjesp":
"djglobal,djwsjesp";if(h.indexOf("dowjones.com")!=-1)g="djfxtrader";if(h.indexOf("stream")!=-1)if(document.location.pathname.indexOf("/tout/")!=-1)g=g==="dowjdev"?"dowjdev,djwsjlive":"djglobal,djwsjlive";if(h.match(/dj(.f.dev|.s.dev|).wsj.com/))g=g==="dowjdev"?"djProductXDev":"djProductXprod";h=this.config.reportSuites;if(typeof a!=="undefined"&&a!==null&&h[a]){h=h[a];g=j?h.mainTest:h.main}this._s_account=g;s=c(g);if(navigator&&navigator.loadPurpose&&navigator.loadPurpose=="preview")s.t=new Function("return ''");
s.charSet="ISO-8859-1";s.currencyCode="USD";s.trackDownloadLinks=true;s.trackExternalLinks=typeof pID!=="undefined"&&pID==="0_0_WDEP_2300"?true:false;s.trackInlineStats=true;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s.linkInternalFilters="javascript:,wsj.com,wallstreetjournal.com,bankrate.com,cj.careers.adicio.com,wallstreetjournal.stats.com,traffic.outbrain.com";s.linkLeaveQueryString=false;s.linkTrackVars="None";s.linkTrackEvents="None";s.visitorNamespace=
"dowjones";s.trackingServer="om.dowjoneson.com";s.trackingServerSecure="oms.dowjoneson.com";s.vmk="44BD02B1";s.usePlugins=true;s.doPlugins=function(o){var r=b("fb_ref",document.referrer),m=b("fb_source",document.referrer),q=o.getQueryParam("mod"),t=o.getQueryParam("from"),u=o.getQueryParam("link"),w=o.getQueryParam("reflink"),v=o.getQueryParam("cid"),y=o.getQueryParam("siteid"),z=o.getQueryParam("distag");if(r!==""){if(m!=="")r=r+"_"+m;o.campaign=r}else if(q!=="")o.campaign=q;else if(t!=="")o.campaign=
t;else if(u!=="")o.campaign=u;else if(w!=="")o.campaign=w;else if(v!=="")o.campaign=v;else if(y!=="")o.campaign=y;else if(z!=="")o.campaign=z;o.prop49=o.getVisitNum();o.eVar62=o.getFullReferringDomains();o.splitPrevVal();o.prop65=o.getPreviousValue(o.pageName,"gpv_pn","event12")};s.getQueryParam=new Function("p","d","u","var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u","var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v");s.p_gvf=new Function("t","k","if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''");s.getPageName=new Function("u","var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s.queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.substring(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.indexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p[p.length-1]=='/'?s.defaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p.substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x;z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.substring(x+1)}return n");
s.getVisitNum=new Function("var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else return 'unknown visit number';}else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}");
s.getFullReferringDomains=new Function("var s=this,dr=document.referrer,n=s.linkInternalFilters.split(',');if(dr){var r=dr.split('/')[2],l=n.length;for(i=0;i<=l;i++){if(r.indexOf(n[i])!=-1){r='';i=l+1;}}return r}");s.splitPrevVal=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");s.getPreviousValue=new Function("v","c","el","var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.splitPrevVal(el,',');j=s.splitPrevVal(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
s.getDaysBeforeEvent=new Function("var s=this,e=new Date(),cval,pve,ct=e.getTime(),c='s_dbfe',pv='s_pv',day=24*60*60*1000;e.setTime(ct+3*365*day);cval=s.c_r(c);pve=s.c_r(pv);if(!pve){if(!cval){s.c_w(c,ct,e);return '';}else{var d=ct-cval;if(s.events.indexOf('event6') != -1){s.c_w(pv,ct,e);if(d>90*day){s.c_w(c,ct,e);return'More than 90 Days';}if(d<90*day+1 && d>61*day){s.c_w(c,ct,e);return'61 - 90 Days';}if(d<60*day+1 && d>31*day){s.c_w(c,ct,e);return'31 - 60 Days';}if(d<30*day+1 && d>15*day){s.c_w(c,ct,e);return'15 - 30 Days';}if(d<14*day+1 && d>8*day){s.c_w(c,ct,e);return'8 - 14 Days';}if(d<7*day+1 && d>day){s.c_w(c,ct,e);return'2 - 7 Days';}if(d<day+1){s.c_w(c,ct,e);return 'Less than 1 Day';}}else return '';}}");
(function(){var o=window,r=o.s_giq,m,q,t;if(r)for(m=0;m<r.length;m++){q=r[m];t=c(q.oun);t.sa(q.un);t.setTagContainer(q.tagContainerName)}o.s_giq=0})();var p=window;p.s=s;p.lookup=e;p.elookup=f;

p.setMetaData=function(o,r){
  var m=dj.util.Omniture.lookup;
  if(!(!o||!r||!m[o.toLowerCase()])){
    var q="";
    q=r.indexOf('"')==-1
      ?
      s[m[o.toLowerCase()]] = r
      :
      s[m[o.toLowerCase()]] = r.replace(/"//g, '');
  }
};
p.setEVar=function(o,r){
  var m=dj.util.Omniture.elookup;
  if(!(!o||!r||!m[o.toLowerCase()])){
    s[m[o.toLowerCase()]] = r
  }
};
p.setEdition=function(o){return dj.util.Omniture.editionToNameMap[o.toLowerCase()]}}};
dojo.provide("dj.util.Region");dojo.require("dj.util.Cookie");dj.util.Region={getViewByRegion:function(){var a="";if(document.cookie.indexOf("wsjregion")!=-1){a=dj.util.Cookie.getCookie("wsjregion");a=a.indexOf("reset")!=-1?a.substring(0,a.indexOf("reset")-1):a}return a},setViewByRegion:function(a){var b=this.getViewByRegion();a!==""&&a!==b&&dojo.trim(b)!=""&&dj.util.Cookie.setCookie("wsjregion",a+",reset,"+b,30,false,true)}};
dojo.provide("dj.util.Url");dojo.require("dj.util.Element");
dj.util.Url={jsFrame:function(a,b,c,e,f){var j=dojo.byId(a);if(j===null)throw Error('{dj.util.jsFrame} container "'+a+'" not found');else if(typeof b!=="string")throw new TypeError("{dj.util.jsFrame} URL not found");var g={prefix:"/static_html_files/jsframe.html?jsuri=",doPrefix:true,style:"",doContainer:false,containerStyle:"",check404:false},h={};if(typeof c!=="object"){h.doPrefix=typeof c==="boolean"?c:g.doPrefix;h.prefix=e||g.prefix;h.style=f||g.style;c=h}dojo.mixin(g,c);var l=dojo.create("iframe",
{src:g.doPrefix?g.prefix+b:b,id:a+"iframe",scrolling:"no",frameBorder:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,style:g.style},j),n=function(k,p,o){if(k.addEventListener)k.addEventListener(p,o,false);else k.attachEvent&&k.attachEvent("on"+p,o)};n(l,"load",function(){try{var k=l.contentWindow.document.body;if(g.check404&&k.innerHTML.indexOf("PAGE UNAVAILABLE")>-1){console.warn("jsFrame: page '%s' is unavailable.",l.contentWindow.document.location);dojo.destroy(l)}else{if(!g.doPrefix||
g.doContainer)k.innerHTML='<div style="'+g.containerStyle+'">'+k.innerHTML+"</div>";dj.util.Element.adjustToLargest(k,l,null,10)}}catch(p){console.error("Unable to access iframe body for url: %s",l.src)}});return l},createSimpleIframe:function(a,b,c,e){b=dojo.byId(b);if(a.style)if(typeof a.style==="string")if(a.style.charAt(0)==="{")a.style=dojo.fromJson(a.style);else throw"{createSimpleIframe} options.style needs to be either a style hash object, or a JSON equivalent, not an HTML style attribute format, is "+
a.style;var f={id:dj.util.Element.identify(b)+"iframe",scrolling:"no",frameBorder:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,style:""};dojo.mixin(f,a);var j=dojo.create("iframe",f,b),g=function(h,l,n){if(h.addEventListener)h.addEventListener(l,n,false);else h.attachEvent&&h.attachEvent("on"+l,n)};g(j,"load",function(){try{console.log(" iframe loadedd ");typeof c!="undefined"&&typeof c==="function"&&c.call(e)}catch(h){console.error("Unable to access iframe body for url: %s",j.src)}});
return j},addStylesheet:function(){console.warn("{Url} addStylesheet has been moved to Page.addStylesheet")},openWin:function(a,b,c,e,f,j,g,h,l){var n=[],k=["directories","location","menubar","resizable","scrollbars","status","titlebar","toolbar"];f=f?"".concat(f):"on";i=0;for(len=k.length;i<len;i++)n[n.length]=k[i]=="resizable"?k[i]+"=yes":k[i]+"="+(f.indexOf(k[i].substring(0,2))>-1||f=="on"?"yes":"no");if(c)n[n.length]="width="+c;if(e)n[n.length]="height="+e;if(l&&c&&e){h=(screen.height-e)/2;g=
(screen.width-c)/2}if(g){n[n.length]="left="+g;n[n.length]="screenX="+g}if(h){n[n.length]="top="+h;n[n.length]="screenY="+h}f=n.length?n.join(","):"";a=window.open(a,b,f);j&&a&&a.focus()},changeRoot:function(a,b,c){a=typeof c!="undefined"?dojo.query(a,c):dojo.query(a);c=window.location.href;c=c.substring(0,c.lastIndexOf("/")+1);for(var e=0,f,j=a.length;e<j;e++){f=a[e];if(f.href.lastIndexOf(c)===0)f.href=b+f.href.substring(c.length)}}};
dojo.provide("dj.util.PeriodicalUpdater");dojo.require("dj.lang._oop");dojo.require("dj.util.string");dojo.require("dojo.io.script");
dojo.declare("dj.util.PeriodicalUpdater",null,{constructor:function(a,b,c){this.container=a;this.url=b;this.options=dj.lang.cloneMixin(this.DEFAULT_OPTIONS,c);this.options.method=this.options.method.toUpperCase();this.updater={};this.preUpdateCheck=typeof this.options.preUpdateCheck!=="undefined"?this.options.preUpdateCheck:function(){return true};this.start()},DEFAULT_OPTIONS:{method:"POST",frequency:2,decay:1,maxDecay:10},start:function(){this.oCntSuccess=dojo.byId(this.container.success);this.decay=
this.options.decay;this.onTimerEvent()},stop:function(){clearTimeout(this.timer)},updateComplete:function(){this.options.onUpdate&&this.options.onUpdate.apply(this,arguments)},resetTimer:function(a){if(this.decay){this.decay=a==this.lastText?this.decay*this.options.decay:1;this.decay=this.decay>this.options.maxDecay?this.options.maxDecay:this.decay;this.lastText=a}this.timer=this._delay(dojo.hitch(this,this.onTimerEvent),this.decay*this.options.frequency,"one","two")},onTimerEvent:function(){if(!dj.context.module.disableModuleRefresh[this.container.success])if(this.options.json&&
dojo.exists("dj.module.depmgr")){var a="dj.context."+this.container.success;delete dj.context["dj.context."+this.container.success];console.log("{PeriodicalUpdater#onTimerEvent} depmgr 2 mode, expecting "+a);dojo.io.script.get({url:this.url,checkString:a,load:dojo.hitch(this,function(){var b=dj.context[this.container.success],c=b.allDepIds||{},e=b.html||"";console.log("{PeriodicalUpdater#onTimerEvent::load} dependencies=%o",c);dj.module.depmgr.loadDependencies(c,dojo.hitch(this,function(){console.log("{PeriodicalUpdater#callback} loading Finished, about to do innerHTML");
this.oCntSuccess.innerHTML=dj.util.string.stripScripts(e);dj.util.string.evalScripts(e,this.url);this.updateComplete(e);this.resetTimer(responseText)}))}),error:dojo.hitch(this,function(b){console.error("{PeriodicalUpdater} error in file: '%s': %o",this.url,b)})})}else this.options.json?dojo.io.script.get({url:this.url,checkString:a,load:dojo.hitch(this,function(){var b=checkvar.html;if(this.preUpdateCheck(b)===true){this.oCntSuccess.innerHTML=dj.util.string.stripScripts(b);dj.util.string.evalScripts(b,
this.url);this.updateComplete(b)}this.resetTimer(b)})}):dojo.xhr(this.options.method,{url:this.url,preventCache:true,load:dojo.hitch(this,function(b){if(this.preUpdateCheck(b)===true){this.oCntSuccess.innerHTML=dj.util.string.stripScripts(b);dj.util.string.evalScripts(b,this.url);this.updateComplete(b)}this.resetTimer(b)}),error:dojo.hitch(this,function(b){console.error("{PeriodicalUpdater} error in file: '%s': %o",this.url,b)})},true)},_delay:function(a,b){var c=Array.prototype.slice.call(arguments,
2);b*=1E3;return window.setTimeout(function(){return a.apply(a,c)},b)}});
dojo.provide("dj.lang");dojo.require("dj.lang._compat");dojo.require("dj.lang._dom");dojo.require("dj.lang._event");dojo.require("dj.lang._liveEvents");dojo.require("dj.lang._oop");
dojo.provide("dj.util.Tracking");dojo.require("dj.util.Cookie");dojo.require("dj.util.Omniture");dojo.require("dj.util.Page");dojo.require("dj.util.Region");dojo.require("dj.util.User");
dj.util.Tracking={omniture:{_initd:false,_userRole:"",isInitialized:function(){return this._initd},init:function(){var a=false;this._delayFirePixel=false;this._firePixelCount=0;try{if(typeof s==="undefined")return;this._s=s;if(typeof setMetaData!=="undefined")this.setMetaData=setMetaData;if(typeof setSuppressOmniture!=="undefined")a=setSuppressOmniture()}catch(b){console.info("{Tracking} could not suppress omniture. Throws: %o",b)}if(a)console.info("{Tracking} localSuppressOmniture = %s",a);else{this._s.channel=
"Online Journal";a=dj.util.Page.getQueryParam("refresh")||dj.util.Page.getHashParam("refresh");var c=this._s.getQueryParam("refdom");this.reflink=dj.util.Page.getQueryParam("reflink")||dj.util.Page.getHashParam("reflink");this.link=dj.util.Page.getQueryParam("mod")||dj.util.Page.getHashParam("mod")||dj.util.Page.getQueryParam("link")||dj.util.Page.getQueryParam("from");var e=dj.util.Cookie.getCookie("djcs_loc")==null?"":dj.util.Cookie.getCookie("djcs_loc");dj.util.User.isOpenHouseUser("SDN",function(h){if(h)e=
"Starbucks"});a||(a="off");if(c)this._s.referrer=c;if(this.reflink)this.link="";else if(this.link)this.reflink="";c=document.location.href;var f=document.location.protocol+"//"+document.location.host+document.location.pathname,j;j=c.indexOf("/PA2VJBNA4R")!=-1?"ppv":typeof loggedIn!=="undefined"&&loggedIn===true?"subscriber":"open";j=c.indexOf("/services/")!=-1?"print":j;setMetaData("baseurl",f);setMetaData("fullurl",c);setMetaData("refresh",a);setMetaData("caccess",j);if(pID.indexOf("0_0_WPH_0001")>
-1||pID.indexOf("0_0_WPP")>-1||pID.indexOf("0_0_WPTA")>-1)setMetaData("edition","Edition_Brasil");else if(pID.indexOf("0_0_WSH_0001")>-1||pID.indexOf("0_0_WSZ")>-1||pID.indexOf("0_0_WSP")>-1||pID.indexOf("0_0_WESA")>-1)setMetaData("edition","Edition_America Latina");else typeof dj.util.Region=="object"&&setMetaData("edition",setEdition(dj.util.Region.getViewByRegion()));this.link&&setMetaData("link",this.link);this.reflink&&setMetaData("reflink",this.reflink);e&&setMetaData("targeturl",e);
this.cookieTracking=dj.util.Cookie.getCookie("TR");this.cookieNewsCorp=dj.util.Cookie.getCookie("_ncg_id_");this.cookieUserType=dj.util.Cookie.getCookie("user_type");
this.cookieSpotlightSet=dj.util.Cookie.getCookie("spotlightSet");typeof numads!=="undefined"&&setMetaData("numads",numads.toString());this.cookieTracking!==null&&setMetaData("userid",this.cookieTracking);var g=this;dj.util.User.isLoggedIn(function(h){if(h)dj.util.User.isSubLoggedIn(function(l){if(l)g._userRole="WSJSUB"});else g._userRole="WSJF"});this._initd=true}},delayFirePixel:function(){this._delayFirePixel=
true},resetPixel:function(){this._s.ios=0},getSObject:function(){return this._s},getMetaData:function(a){var b=dj.util.Omniture.lookup[a];b||(b=a);return this._s[b]},getEMetaData:function(a){var b=dj.util.Omniture.elookup[a];b||(b=a);return this._s[b]},getPrefixByRole:function(){switch(this._userRole){case "WSJF":case "WSJSUB":return"WSJ_";default:return"WSJ_"}},firePixel:function(a,b){var c="";this.csourceVal=this.getMetaData("csource");var e=this;if(b==="CRE_"){setMetaData("primaryproduct","jiecre");
this._s.prop8="CRE";setMetaData("edition","Edition_CRE")}if(document.location.host=="professional.wsj.com"||document.location.host=="professional.s.dev.wsj.com")c="WSJPRO_";dj.util.User.isLoggedIn(function(f){if(c=="")c="WSJ_";if(f)dj.util.User.isSubLoggedIn(function(j){if(j){setMetaData("asub","WSJ_sub_yes");if(b){c=b;if(c==="WSJDE_"||c==="WSJIdn_"||c==="WSJKor_"||c==="WSJBra_"||c==="CRE_"||c==="WSJJP_"||c==="WSJTur_")setMetaData("asub",c+"sub_yes")}}else{setMetaData("asub","WSJ_mem_yes");if(b){c=
b;if(c==="WSJDE_"||c==="WSJIdn_"||c==="WSJKor_"||c==="WSJBra_"||c==="CRE_"||c==="WSJJP_"||c==="WSJTur_")setMetaData("asub",c+"mem_yes")}}c==="ProdX_"&&dj.util.User.isSubLoggedIn(function(g){g?setMetaData("asub",c+"sub_yes"):setMetaData("asub","WSJ_reg_yes")},"WSJ-RT-PREMIUM");if(b)if(c==="WSJPRO_")a=false;else c=b;return e.realFirePixel(a,c)});else{if(e.cookieUserType===null||e.cookieUserType!=="subscribed"){setMetaData("asub","WSJ_free");if(b){c=b;if(c==="WSJDE_"||c==="WSJIdn_"||c==="WSJKor_"||c===
"WSJBra_"||c==="CRE_"||c==="WSJJP_"||c==="WSJTur_"||c==="ProdX_")setMetaData("asub",c+"free")}}else{setMetaData("asub","WSJ_reg_yes");if(b){c=b;if(c==="WSJDE_"||c==="WSJIdn_"||c==="WSJKor_"||c==="WSJBra_"||c==="CRE_"||c==="WSJJP_"||c==="WSJTur_")setMetaData("asub",c+"reg_yes")}}if(b&&b!=="WSJPRO_")if(c==="WSJPRO_")a=false;else c=b;return e.realFirePixel(a,c)}})},setWizardOmnitureData:function(a){var b="WSJ_ProWizard_Getting Started",c="WSJ_Customer Resources_Getting Started",e="WSJ_Customer Resources_ProWizard_Getting Started";
if(a==="gsa"){b="WSJ_ProWizard_Getting Started_auto";c="WSJ_Customer Resources_Getting Started_auto";e="WSJ_Customer Resources_ProWizard_Getting Started_auto"}else if(a==="gs"){b="WSJ_ProWizard_Getting Started";c="WSJ_Customer Resources_Getting Started";e="WSJ_Customer Resources_ProWizard_Getting Started"}else if(a==="i"){b="WSJ_ProWizard_Industries";c="WSJ_Customer Resources_Industries";e="WSJ_Customer Resources_ProWizard_Industries"}else if(a==="c"){b="WSJ_ProWizard_Companies";c="WSJ_Customer Resources_Companies";
e="WSJ_Customer Resources_ProWizard_Companies"}else if(a==="ka"){b="WSJ_ProWizard_Keyword Alerts";c="WSJ_Customer Resources_Keyword Alerts";e="WSJ_Customer Resources_ProWizard_Keyword Alerts"}else if(a==="m"){b="WSJ_ProWizard_Markets";c="WSJ_Customer Resources_Markets";e="WSJ_Customer Resources_ProWizard_Markets"}else if(a==="ch"){b="WSJ_ProWizard_Configure Home";c="WSJ_Customer Resources_Configure Home";e="WSJ_Customer Resources_ProWizard_Configure Home"}else if(a==="helpI"){b="WSJ_ProWizard_Industries_Help";
c="WSJ_Customer Resources_Industries_Help";e="WSJ_Customer Resources_ProWizard_Industries_Help"}else if(a==="helpC"){b="WSJ_ProWizard_Companies_Help";c="WSJ_Customer Resources_Companies_Help";e="WSJ_Customer Resources_ProWizard_Companies_Help"}else if(a==="helpKA"){b="WSJ_ProWizard_Keyword Alerts_Help";c="WSJ_Customer Resources_Keyword Alerts_Help";e="WSJ_Customer Resources_ProWizard_Keyword Alerts_Help"}else if(a==="helpM"){b="WSJ_ProWizard_Markets_Help";c="WSJ_Customer Resources_Markets_Help";e=
"WSJ_Customer Resources_ProWizard_Markets_Help"}else if(a==="helpCH"){b="WSJ_ProWizard_Configure Home_Help";c="WSJ_Customer Resources_Configure Home_Help";e="WSJ_Customer Resources_ProWizard_Configure Home_Help"}if(typeof setMetaData!=="undefined"){setMetaData("pagename",b);setMetaData("section","Customer Resources");setMetaData("subsection","WSJ_Marketing");setMetaData("atype",c);setMetaData("ctype","marketing and support");setMetaData("apage",e);setMetaData("basesection","WSJ_Marketing_WSJ_ProWizard");
setMetaData("primaryproduct","Online Journal ProE")}dj.util.Tracking.omniture.firePixel(true)},setSearchOmnitureData:function(a,b,c,e){var f="WSJ_searchresults_"+a,j=b,g="WSJ_Search_"+a,h="searchresults";setMetaData("section","Search");setMetaData("subsection","WSJ_Search Results");setMetaData("atype",g);this.noSrchResults=b!==""&&!dojo.query(".pmSearchResults")[0]?true:false;if(c){this.cannedSearch=true;if(e){if(j!=="")j="COMBO_"+j;h+="_COMBO"}else{if(j!=="")j="AUTO_"+j;h+="_AUTO"}}j!==""&&setMetaData("searchstatement",
j);setMetaData("ctype",h);setMetaData("apage",g);setMetaData("pagename",f);setMetaData("basesection","WSJ_Search Results_"+a);setMetaData("primaryproduct","Online Journal");dj.util.Tracking.omniture.firePixel(true)},setNewsFinderOmnitureData:function(a,b){if(typeof a==="undefined"||a==="")a="News Finder";if(typeof b==="undefined"||b==="")b="News Finder_Quick Search";setMetaData("pagename",a);setMetaData("basesection",b);setMetaData("primaryproduct","Online Journal");dj.util.Tracking.omniture.firePixel(true)},
setInteractivesOmnitureData:function(a){console.log("INTERACTIVE OMNITURE METHOD CALL -- : "+a);var b=a.split("~");a=b[0];var c=b[2];b=b[3]?b[3]:"";if(b!==""&&b>1){this._s.eVar5="";this._s.prop10="";this._s.campaign=""}var e="";if(typeof this.aData==="undefined"){this.aData=[];this.aData.p0=this.getMetaData("pagename");this.aData.p1=this.getMetaData("section");this.aData.p2=this.getMetaData("subsection");this.aData.p3=this.getMetaData("atype");this.aData.p22=this.getMetaData("apage");this.aData.p26=
this.getMetaData("basesection")?this.getMetaData("basesection"):this.aData.p2}if(typeof this.cData==="undefined"){this.cData=[];this.cData.p0=this.getMetaData("pagename");this.cData.p1=this.getMetaData("section");this.cData.p2=this.getMetaData("subsection");this.cData.p3=this.getMetaData("atype");this.cData.p22=this.getMetaData("apage");this.cData.p26=this.getMetaData("basesection")?this.getMetaData("basesection"):this.aData.p2}e=this.getMetaData("atype");if(e!=="undefined"){e=e.replace("WSJPRO_",
"");e=e.replace("WSJ_","");e=e.replace("WSJ ","");e.replace("Article_","")}e=this.getMetaData("subsection");if(typeof e!=="undefined"){e=e.replace("WSJPRO_","");e=e.replace("WSJ_","");e=e.replace("WSJ ","");e=e.replace("Article_","")}else e="Infographic";var f=a==="photos_tab"&&this._s.prop26?this._s.prop26:this.getMetaData("apage");if(typeof f!=="undefined"){f=f.replace("WSJPRO_","");f=f.replace("WSJ_","");f=f.replace("WSJ ","");f=f.replace("Article_","");f=f.replace("Multimedia_Interactives_","");
f=f.replace("Multimedia_Photos_","")}var j=this.getMetaData("basesection");if(typeof j!=="undefined"){j=j.replace("WSJPRO_","");j=j.replace("WSJ_","");j=j.replace("WSJ ","");j=j.replace("Article_","")}else j="Interactives";if(a==="photos"){setMetaData("pagename","WSJ_Infogrfx Slide Show_"+c+"_slideshow_"+b);setMetaData("section","Multimedia");setMetaData("subsection","WSJ_Infographic");setMetaData("atype","WSJ_Multimedia_Photos");setMetaData("aheadline","WSJ_slideshow_"+c);setMetaData("csource","DJ Infographics");
setMetaData("caccess","free");setMetaData("ctype",a);setMetaData("apage","WSJ_Multimedia_Photos");setMetaData("basesection","WSJ_Infographic_Slideshow")}else if(a==="photos_tab"){setMetaData("pagename","WSJ_Infogrfx Slide Show_"+c+"_slideshow_"+b);setMetaData("basesection","WSJ_"+e+f);setMetaData("atype","WSJ_Multimedia_Photos_"+f);setMetaData("subsection","WSJ_"+e);setMetaData("section","Multimedia");setMetaData("aheadline","WSJ_slideshow_"+c);setMetaData("csource","DJ Infographics");setMetaData("caccess",
"free");setMetaData("ctype",a);setMetaData("apage","WSJ_Multimedia_Photos_"+f)}else if(a==="interactives"){setMetaData("pagename","WSJ_Interactives_"+c);setMetaData("basesection","WSJ_Infographic_Interactives");setMetaData("subsection","WSJ_Infographic");setMetaData("atype","WSJ_Multimedia_Interactives");setMetaData("apage","WSJ_Multimedia_Interactives_Interactives");setMetaData("section","Multimedia");setMetaData("aheadline","WSJ_interactive_"+c);setMetaData("csource","DJ Infographics");setMetaData("caccess",
"free");setMetaData("ctype",a)}else if(a==="interactives_tab"){setMetaData("pagename","WSJ_Interactives_"+c);setMetaData("basesection","WSJ_"+e+f);setMetaData("subsection","WSJ_"+e);setMetaData("atype","WSJ_Multimedia_Interactives");setMetaData("apage","WSJ_Multimedia_Interactives_"+f);setMetaData("section","Multimedia");setMetaData("aheadline","WSJ_interactive_"+c);setMetaData("csource","DJ Infographics");setMetaData("caccess","free");setMetaData("ctype",a)}else if(a==="video_interactives"){setMetaData("pagename",
"WSJ_Video_"+c);setMetaData("basesection","WSJ_"+e+f);setMetaData("subsection","WSJ_"+e);setMetaData("atype","WSJ_Video_Video_"+j);setMetaData("apage","WSJ_Video_Video_"+j);setMetaData("section","Video");setMetaData("aheadline","WSJ_video_"+c);setMetaData("caccess","free");setMetaData("ctype",a)}else{setMetaData("pagename","WSJ_Interactives_"+c);setMetaData("section","Multimedia");setMetaData("subsection","WSJ_Infographic");setMetaData("atype","WSJ__Multimedia_Interactives");setMetaData("aheadline",
"WSJ_interactive_"+c);setMetaData("csource","DJ Infographics");setMetaData("caccess","free");setMetaData("ctype",a);setMetaData("apage","WSJ__Multimedia_Interactives");setMetaData("basesection","WSJ_Infographic_Interactives")}dj.util.Tracking.omniture.firePixel(true)},setOmnitureData:function(){console.log("WRONG OMNITURE METHOD CALL")},pinSiteMode:function(){var a="";try{a=typeof window.external.msISSiteMode==="function"?window.external.msIsSiteMode()?"pinned":"pinnable":"notpinnable"}catch(b){a=
"notpinnable"}return a},realFirePixel:function(a,b){if(this._initd!==true)console.info("{Tracking} tracking not initd.");else if(!((typeof a==="undefined"||a===false)&&this._delayFirePixel===true)){this._s.ios=0;var c=b.replace("WSJPRO_","WSJ_"),e=typeof isFree==="undefined"?true:isFree;this._s.prop9=(e===false||e==="false")&&document.URL.indexOf("/article")!=-1?"paid_"+this._s.prop1:"free_"+this._s.prop1;if(this._s.eVar23!=null){e=this._s.eVar23.replace("T"," ");var f=e.indexOf(" ")+1;this._s.eVar23=
e.substring(f,f+5)}f=11;"2013-05-29 14:06:00".substring(f,f+5);if(this._s.prop1=="Home")this._s.prop3=this._s.prop22=c+this._s.prop1+"_"+this._s.pageName;if(this._s.prop1=="Search"){this._s.prop3=c+this._s.prop1+"_"+this._s.pageName.replace("WSJ_","").replace("WSJPRO_","");if(!this.cannedSearch)this._s.prop22=c+this._s.prop1+"_Search Results"}if(this._s.prop1==="Multimedia"&&b==="WSJPRO_")this._s.prop8="DJ Infographics";if(this._s.prop1=="Customer Resources"){e=this._s.pageName.replace("WSJPRO_",
"");e=this._s.pageName.replace("WSJ_","");this._s.prop3=this._s.prop22=c+this._s.prop1+"_"+e;this._s.prop19="marketing and support"}try{if(dj.context.ads)if(dj.context.ads.adZone==="")this._s.prop1=="Home"&&b==="WSJPRO_"?setMetaData("qsymbol","front"):setMetaData("qsymbol","undefined");else setMetaData("qsymbol",dj.context.ads.adZone)}catch(j){}if(this._s.prop2==="WSJ_Dock"||this._s.pageName&&this._s.pageName.indexOf("WSJ_ProWizard_")!==-1){this._s.prop13="";this._s.prop21=""}this.setProductProperties(b);
if((this._s.prop1==="Article"||this._s.prop19==="comments_tab")&&this._s.prop2!=="WSJ_Factiva Article"){this._s.prop8="WSJ Online Article";if(this.csourceVal==="WSJ Print"||this.csourceVal==="WSJ Print Article")this._s.prop8="WSJ Print Article"}if(this._s.pageName.indexOf("0_0_WP_5000")>-1){this._s.pageName="";this._s.pageType="errorPage"}if(this._s.prop1=="Article"||this._s.prop1=="Community"){var g=AT_VARS.articlePage+"_";this._s.prop3=this._s.prop3.replace("Community","Article");if(this._s.prop1==
"Community")this._s.prop3=this._s.prop3.replace("Article","Community");if(this._s.prop3&&this._s.prop3.indexOf(b)!==0)this._s.prop3=c+this._s.prop1+"_"+this._s.prop3;if(this._s.prop22&&this._s.prop22.indexOf(c)!==0&&this._s.prop2!=="WSJ_Factiva Article")this._s.prop26=c+this._s.prop2+"_"+this._s.prop22;if(this._s.prop22)this._s.prop22=this._s.prop22.replace("Community","Article");if(this._s.prop1=="Community")this._s.prop22=this._s.prop22.replace("Article","Community");if(this._s.prop22&&this._s.prop22.indexOf(c)!==
0&&this._s.prop2!=="WSJ_Factiva Article")this._s.prop22=c+this._s.prop1+"_"+this._s.prop22;if(this._s.prop4&&this._s.prop4.indexOf("WSJ_")!==0)if(this._s.prop20.indexOf("BT-")==0)this._s.prop4=c+"article_TWire_"+g+this._s.prop4;else if(this._s.prop20.indexOf("PR-")==0)this._s.prop4=c+"article_PRWire_"+g+this._s.prop4;else{this._s.prop4=c+"article_"+g+this._s.prop4;if(this._s.prop2==="WSJ_Factiva Article")this._s.prop4=c+"article_"+this._s.prop8+":"+this._s.prop4.substr(16)}}if(this._s.prop20&&this._s.prop20.indexOf("BT-")===
0)this._s.prop8="T Newswires";else if(this._s.prop20==="0_0_WC_samplePlan"||this._s.prop20==="0_0_WC_businessPlan"||this._s.prop20==="0_0_WC_startupCalculator")this._s.prop8="Palo Alto";if(this._s.prop20&&this._s.prop20.indexOf("LL-")===0&&g==="LL Wire_")this._s.prop8="LL Wire";if(this._s.prop1=="Summaries"||this._s.prop1=="Topics"){if(b==="WSJPRO_"){if(this._s.prop2.indexOf("WSJ_")!==-1){this.wsjLandingPage=true;this._s.prop8="WSJ Online"}else this.wsjLandingPage=false;this._s.pageName=this._s.pageName.replace("WSJ_",
"");if(this._s.prop2.indexOf(b)!==0)this._s.prop2=c+this._s.prop2.replace("WSJ_","");if(this._s.prop26.indexOf(b)!==0)this._s.prop26=this._s.prop2+"_"+this._s.prop26.replace("WSJ_","");this._s.prop3=this._s.prop22=c+this._s.prop1+"_"+this._s.pageName.replace("WSJPRO_","")}else this._s.prop3=this._s.prop22=c+this._s.prop1+"_"+this._s.pageName;if(this._s.prop1=="Summaries")if(this._s.prop2&&this._s.prop26&&this._s.prop26.indexOf(c)!==-1)this._s.prop26=this._s.prop2+"_"+this._s.prop26.replace(c,"")}if(this._s.prop3==
"Video")if(this._s.prop3.indexOf(b)!==0)this._s.prop3=c+this._s.prop1+"_Video_"+this._s.prop24;if(this._s.pageName&&this._s.pageName.indexOf("WSJ_")!==0&&this._s.pageName.indexOf("WSJPRO_")!==0)this._s.pageName=c+this._s.pageName;if(this._s.prop2&&this._s.prop2.indexOf("WSJ_")!==0&&this._s.prop2.indexOf("WSJPRO_")!==0)this._s.prop2=this._s.prop20.indexOf("BT-")===0||this._s.prop20.indexOf("PR-")===0?c+"Business":c+this._s.prop2;if(this._s.prop1!="Article")if(this._s.prop2==="Email"){this._s.prop2=
"WSJ_"+this._s.prop2;this._s.prop3="WSJ_"+this._s.prop1+this._s.pageName;this._s.prop22=this._s.prop3}if(this._s.prop1=="Article"&&this._s.channel=="Japan WSJ"){if(typeof this._s.prop21!=="undefined"&&this._s.prop21!=="")this._s.prop21=this._s.prop21.replace("WSJ_",b);g=this._s.prop22.split(/[\s,]+/);this._s.prop2=b+g[g.length-1]}else if(this._s.prop1=="Multimedia"&&this._s.channel=="Japan WSJ")this._s.prop2=b+"Japan";if(this._s.prop1=="Article"&&this._s.channel=="Japan WSJ"&&this._s.pageName.indexOf("_english")!=
-1)this._s.prop19="article_english_tab";if(this._s.prop1=="Article"&&this._s.channel=="Japan WSJ"&&(isFree=="false"||isFree==false))dj.util.User.isSubLoggedIn(function(h){if(!h)this._s.prop19="article_preview"});if(this._s.channel=="Japan WSJ")this._s.prop64="japanese";if(this._s.prop1=="Article"&&this._s.channel=="Turkey WSJ"){if(typeof this._s.prop21!=="undefined"&&this._s.prop21!=="")this._s.prop21=this._s.prop21.replace("WSJ_",b);this._s.prop2=b+AT_VARS.articlePage}else if(this._s.prop1=="Multimedia"&&
this._s.channel=="Turkey WSJ")this._s.prop2=b+"Turkey";this._s.events="";if(this._s.events){if(this._s.events.indexOf("event12")==-1)this._s.events=this._s.events?this._s.events+",event12":"event12"}else this._s.events="event12";this._s.prop61=djcs.UserInfo.getGroup();if(this._s.prop19=="article"){if(this._s.events.indexOf("event18")==-1)this._s.events=this._s.events?this._s.events+",event18":"event18";if(typeof isReferrerArticleFree!="undefined"&&!isReferrerArticleFree&&typeof isTrial!="undefined"&&
isTrial.toLowerCase()=="true"&&document.referrer)if(document.referrer.indexOf("google.")>-1)if(this._s.events.indexOf("event75")==-1)this._s.events=this._s.events?this._s.events+",event75":"event75"}else if(this._s.prop19=="comments_tab"){if(this._s.events.indexOf("event32")==-1)this._s.events=this._s.events?this._s.events+",event32":"event32"}else if(this._s.prop19=="home page"){if(this._s.events.indexOf("event17")==-1)this._s.events=this._s.events?this._s.events+",event17":"event17"}else if(this._s.prop19==
"marketing and support")if(this._s.prop6.indexOf("reader-error")!=-1)this._s.events="event12,event50";else if(this._s.prop6.indexOf("reader-confirm")!=-1)this._s.events="event12,event49";else{this._s.events="event12,event48";if(this._s.prop1==="Customer Resources"&&this._s.pageName==="WSJ_FreeReg_ThankYou_PreVerification")this._s.events="event12,event43";else if(this._s.prop1==="Customer Resources"&&this._s.pageName!=="WSJ_FreeReg_ThankYou_PreVerification")if(this._s.pageName.indexOf("Confirmation")!==
-1)this._s.events="event12,event13";else{this._s.events="event12";this._s.prop21=""}}else if(this._s.prop1=="Research and Tools")if(this._s.emailEvent!==undefined&&this._s.emailEvent!==null&&this._s.emailEvent!=="")this._s.events=this._s.emailEvent;else{if(this._s.events.indexOf("event19")==-1)this._s.events=this._s.events?this._s.events+",event19":"event19"}else if(this._s.prop1==="Multimedia"){this._s.events="event12,event54";this._s.prop21=""}else if(this._s.prop1==="Video"&&this._s.prop19==="video_interactives"){this._s.events=
"event12,event54,event36";this._s.prop21=""}else if(this._s.events.indexOf("event16")==-1)this._s.events=this._s.events?this._s.events+",event16":"event16";if(this._s.prop20==="0_0_WC_samplePlan"||this._s.prop20==="0_0_WC_businessPlan"||s.prop20==="0_0_WC_startupCalculator")this._s.prop19="tools_smb";if(s.prop6&&s.prop6.indexOf("printMode")>0)this._s.prop19="article_print";if(this._s.prop23!=null){e=this._s.prop23.replace("T"," ");this._s.prop23=e.substring(0,16)}if(typeof this._s.getVisitNum==="function")this._s.prop49=
this._s.getVisitNum();if(typeof this._s.getFullReferringDomains==="function")this._s.eVar62=this._s.getFullReferringDomains();
this._s.eVar3="";if(this.cookieUserType!==null)this._s.eVar3=this.cookieTracking;this._s.eVar3===null&&console.info("{Tracking} could not get cookie 'TR'.");
this._s.eVar23="";if(this.cookieNewsCorp!==null)this._s.eVar23=this.cookieNewsCorp;this._s.eVar4=this._s.pageName;this._s.eVar5="";
this._s.eVar6="";if(this.link&&this._s.prop10!=="")this._s.eVar5=this.link;if(this.reflink)this._s.eVar6=this.reflink;this._s.eVar8="";if(this._s.prop18)this._s.eVar8=this._s.prop18;
this._s.eVar11=this._s.channel;if(this._s.pageName!="WSJ_Subscriber Agreement_0_0826"){this._s.eVar25=this._s.prop2;this._s.eVar29=this._s.prop26;this._s.eVar37=this._s.prop3;this._s.eVar39=this._s.prop4}if(this._s.pageName==="WSJ_FreeReg_ThankYou_PreVerification"){this._s.prop9="open";this._s.prop10=this.link;this._s.campaign=this.link;this._s.prop11=this.reflink;this._s.eVar5=this._s.prop10;this._s.eVar6=this._s.prop11}if(b==="ProdX_"){if(this._s.pageName==="ProdX_ContactUs")this._s.events+=",event8";
else if(this._s.pageName==="ProdX_ThankYou")this._s.events+=",event9";this._s.prop9="free";this._s.prop20="";this._s.prop24="en"}if(b==="WSJPRO_"&&this._s.prop1!=="Customer Resources"){g=this.setProductEvents(b);if(g!=="")this._s.events=g}if(this._s.pageName!=="ProdX_ThankYou"&&(document.referrer.indexOf("wsj.com")===-1&&document.referrer.indexOf("dowjones.com")===-1&&document.referrer.indexOf("wallstreetjournal.de")===-1||this._s.prop10&&this._s.prop10.indexOf("hook")!==-1||this._s.campaign&&this._s.campaign.indexOf("hook")!==
-1)&&typeof this._s.prop2!=="undefined"&&this._s.prop2.indexOf("WSJ_Login")===-1&&this._s.prop2.indexOf("WSJ_Free_Reg")===-1)if(typeof this._s.prop26!=="undefined"&&this._s.prop26!=="WSJ_Slideshow")if(typeof this._s.prop26!=="undefined"&&this._s.prop26.indexOf("WSJ_CFO")!==-1)this._s.events=this._s.events;else this._s.events+=",event64";else if(typeof this._s.prop26!=="undefined"&&this._s.prop26==="WSJ_Slideshow"&&typeof this._s.prop19!=="undefined"&&this._s.prop19=="photos"&&typeof this._s.pageName!==
"undefined"&&this._s.pageName.indexOf("1_of_")!==-1)this._s.events+=",event64";if(typeof this._s.prop19!=="undefined"&&this._s.prop19=="article"||this._s.prop19=="comments_tab")if(this._s.prop19=="comments_tab")if(typeof this.cData==="undefined"){this.cData=[];this.cData.p0=this.getMetaData("pagename");this.cData.p1=this.getMetaData("section");this.cData.p2=this.getMetaData("subsection");this.cData.p3=this.getMetaData("atype");this.cData.p22=this.getMetaData("apage");this.cData.p26=this.getMetaData("basesection")}else if(this.cData.p3.indexOf(b)===
-1){this._s.prop3=c+"Community_"+this.cData.p3;this._s.prop22=c+"Community_"+this.cData.p22;this._s.prop26=this.cData.p2!=null?c+this.cData.p2+"_"+this.cData.p26:c+this.cData.p26}else{this._s.prop3=this.cData.p3.replace("_Article_","_Community_");this._s.prop22=this.cData.p22.replace("_Article_","_Community_");this._s.prop26=this.cData.p2!=null?this.cData.p2+"_"+this.cData.p26:this.cData.p26}else if(typeof this.aData!=="undefined")if(this.aData.p0.indexOf(b)===-1){this._s.pageName=c+this.aData.p0;
this._s.prop1=this.aData.p1;if(this.aData.p3.indexOf("_Community_")!==-1){this._s.prop2=this.aData.p2;this._s.prop3=this.cData.p3.replace("_Community_","_Article_");this._s.prop22=this.cData.p22.replace("_Community_","_Article_");this._s.prop26=this.aData.p2+"_"+this.aData.p26}else{this._s.prop2=c+this.aData.p2;this._s.prop3=c+"Article_"+this.aData.p3;this._s.prop22=c+"Article_"+this.aData.p22;this._s.prop26=c+this.aData.p2+"_"+this.aData.p26}}else{this._s.pageName=this.aData.p0;this._s.prop1=this.aData.p1;
this._s.prop2=this.aData.p2;this._s.prop3=this.aData.p3;this._s.prop22=this.aData.p22;this._s.prop26=this.aData.p2+"_"+this.aData.p26}else if(typeof this.aData==="undefined"){this.aData=[];this.aData.p0=this.getMetaData("pagename");this.aData.p1=this.getMetaData("section");this.aData.p2=this.getMetaData("subsection");this.aData.p3=this.getMetaData("atype");this.aData.p22=this.getMetaData("apage");this.aData.p26=this.getMetaData("basesection")}c=new Date;if(!this.weekday){this.weekday=[];this.weekday[0]=
"Sunday";this.weekday[1]="Monday";this.weekday[2]="Tuesday";this.weekday[3]="Wednesday";this.weekday[4]="Thursday";this.weekday[5]="Friday";this.weekday[6]="Saturday"}this._s.eVar31=this.weekday[c.getDay()];this._s.eVar32=c.getHours()+":00";prefix=this.getPrefixByRole();typeof this._s.prop2!=="undefined"&&this._s.prop2==="WSJ_Deloitte"&&setMetaData("csource","Deloitte Article");this._s.pageName.indexOf("WP_CIO")==-1&&this._s.pageName.indexOf("WP_CFO");if(this._s.prop27!=null)this._s.eVar26=this._s.prop27;
if(this._s.prop19!=null){this._s.eVar38=this._s.prop19;this._s.eVar53=this._s.prop19}if(this._s.prop4!=null){this._s.eVar39=this._s.prop4;this._s.eVar40=this._s.prop4}if(this._s.prop1!=null)this._s.eVar52=this._s.prop1;if(this._s.prop2!=null)this._s.eVar54=this._s.prop2;if(this._s.prop26!=null)this._s.eVar55=this._s.prop26;this._firePixelCount+=1;(c=this._s.t())&&this.generatePixel(c);this.generateSpotlightPixel()}},replacePrefix:function(a,b){a=a.replace(/WSJPROE_/g,b);a=a.replace(/WSJPRO_/g,b);
a=a.replace(/wsjpro_/g,b.toLowerCase());a=a.replace(/WSJ_/g,b);return a=a.replace(/wsj_/g,b.toLowerCase())},sendCustomEvent:function(a){if(typeof s=="undefined")return false;s.events=a;return true},setProductProperties:function(a){var b=a.replace("WSJPRO_","WSJ_");if(a==="WSJPRO_"){if(this._s.prop2==="WSJ_Pro Industries"){a="";a=this._s.prop1!=="Summaries"?b+"Pro_industry_"+this._s.prop1+"_"+this._s.prop26.substr(7):b+"Pro_industry_"+this._s.prop26.substr(18);a=a.replace("WSJPROE_","");a=a.replace("Summaries_",
"");setMetaData("pagename",a);setMetaData("section","Summaries");setMetaData("basesection",this._s.prop26)}if(this._s.prop2==="WSJ_CFO Data Dashboard"){setMetaData("section","Research and Tools");this._s.prop19="tools"}if(this._s.prop19!=="article")this._s.prop20="";if((this._s.prop1==="Article"||this._s.prop19==="comments_tab")&&this._s.prop2!=="WSJ_Dock")if(this._s.prop21){if(this._s.prop21.indexOf("WSJ_")===-1)this._s.prop21="WSJ_"+this._s.prop21.toUpperCase()}else this._s.prop21="WSJ_undefined";
if(this._s.prop2==="WSJ_Factiva Article"){if(typeof AT_VARS!="undefined"){getArticleHdln=AT_VARS.articleHeadline;getArticleBaseDocId="TP"+AT_VARS.baseDocId;getArticleType=AT_VARS.articleType;getArticleAuthors=AT_VARS.authors!==""?AT_VARS.authors:"undefined";getArticleSourceCode=AT_VARS.articleSourceCode!==""?AT_VARS.articleSourceCode:"undefined";getArticlePublicationName="Factiva_"+AT_VARS.publicationName;getArticleAuthors=getArticleAuthors.replace("By","");getArticleAuthors=getArticlePublicationName+
"_"+getArticleAuthors;b="WSJ_"+getArticlePublicationName+"_"+getArticleBaseDocId;a="WSJ_Article_Factiva Article";if(getArticleSourceCode!=="undefined"&&getArticleSourceCode==="DWSJPS")b="WSJ_Deloitte Insights_"+getArticleBaseDocId;if(this._s.prop19=="comments_tab"){b+="_comments";a="WSJ_Community_Factiva Article";setMetaData("atype","WSJ_Community_Factiva Article")}else{this._s.prop19!=="article_preview_factiva"&&this._s.prop19!=="article_preview_full_factiva"&&setMetaData("ctype","article_factiva");
setMetaData("section","Article");setMetaData("atype","WSJ_Article_Factiva Article")}getArticleHdln=unescape(escape(getArticleHdln).replace("%u2018","").replace("%u2019","").replace("%u201C","").replace("%u201D",""));setMetaData("aheadline",getArticleHdln);setMetaData("author",getArticleAuthors);setMetaData("abasedocid",getArticleBaseDocId);setMetaData("csource",getArticlePublicationName);setMetaData("basesection","WSJ_Factiva Article_"+AT_VARS.publicationName);setMetaData("pagename",b);setMetaData("apage",
a);if(getArticleSourceCode!=="undefined"&&getArticleSourceCode==="DWSJPS"){this._s.prop2="WSJ_Deloitte";setMetaData("ctype","article");setMetaData("basesection","WSJ_Deloitte Insights")}setMetaData("primaryproduct","Online Journal")}}else if(this._s.prop1==="Article"){this._s.prop8="WSJ Online Article";setMetaData("primaryproduct","Online Journal")}b=this._s.pageName.indexOf(pID);b=b!==-1?this._s.pageName.substring(0,b-1):this._s.pageName;if(this._s.prop2==="WSJ_Pro Industries"){a="";if(pID.indexOf("View")!==
-1)a="_WSJ View";else if(pID.indexOf("Background")!==-1)a="_Background";else if(pID.indexOf("Background")===-1&&pID.indexOf("View")===-1)a="_News";this._s.pageName=b+a}this._s.server=document.location.host}else if(typeof this._s.prop21!=="undefined"&&this._s.prop21!==""&&this._s.prop21.indexOf("WSJ_")===-1)this._s.prop21="WSJ_"+this._s.prop21},setProductEvents:function(){var a="";if(this._s.prop2==="WSJ_Home Page Subscriber")a="event12,event17";else if(this._s.prop2==="WSJ_Factiva Article"&&this._s.prop19!==
"comments_tab")a="event12,event18";else if(this._s.prop2==="WSJ_Search Results")a=this.noSrchResults?"event12,event20,event35":"event12,event20";else if(this._s.prop2==="WSJ_My News"||this._s.prop2==="WSJ_Dock"||this._s.prop2==="WSJ_Pro Industries"||this._s.prop2==="WSJ_News Finder"||this._s.prop2==="WSJ_Today in WSJ"||this.wsjLandingPage)a="event12,event16";else if(this._s.prop1==="Multimedia")a="event12,event54";else if(this._s.prop1==="Video"&&this._s.prop19==="video_interactives")a="event12,event54,event36";
else if(this._s.prop2==="WSJ_CFO Data Dashboard")a="event12,event19";else if(this._s.prop19!=="comments_tab")a="event12,event18";return a},generateSpotlightPixel:function(){if(this.cookieSpotlightSet===null&&this.cookieTracking!==null){var a=dojo.create("img",{src:"http://ad.doubleclick.net/activity;src=1373310;type=rapta615;cat=track812;u="+this.cookieTracking+";ord="+Math.floor(Math.random()*1E6)+"?",width:"2",height:"2",alt:"",border:"0"});document.getElementsByTagName("body")[0].appendChild(a);
dj.util.Cookie.setCookie("spotlightSet","true","90d+")}},generatePixel:function(a){if(a){a=""+a;var b=a.indexOf("src=")+5;a=a.substring(b);b=a.indexOf('"');this.pixelSrc=a.substring(0,b);if(a=document.getElementById("s_i_"+s.fun))a.src=this.pixelSrc}},debugPixel:function(){window.open("","stats_debugger","width=600,height=600,location=0,menubar=0,status=1,toolbar=0,resizable=1,scrollbars=1").document.write('<script type="text/javascript" src="/static_html_files/omniture/pixelDebug.html"><\/script>')}},
DM_prepClient:function(a,b){try{s.prop19==="article"||s.prop19==="article_preview"?b.DM_cat(s.channel+" > "+s.prop1+" > "+s.prop2+" > "+s.prop3):b.DM_cat(s.channel+" > "+s.prop1+" > "+s.prop2+" > "+s.pageName)}catch(c){console.info("DM_CAT throws",c)}},rsi:{delayRsi:function(){this._delayRsi=true},init:function(a){if(!((typeof a==="undefined"||a===false)&&this._delayRsi===true))if(typeof this._rsiInitted==="undefined"){this._rsiInitted=true;a=document.createElement("script");a.type="text/javascript";
a.src=document.location.protocol+"//js.revsci.net/gateway/gw.js?csid=G07608&auto=t";document.getElementsByTagName("head")[0].appendChild(a)}}},articleCountNewWindow:function(){dj.lang.addLiveEvent(".mjLinkItemExternal","click",function(a){dj.lang.stopEvent(a);a=a.target||a.srcElement;if(a.getAttribute("articleid")){var b=a.getAttribute("articleid");dj.lang.xhrGet({url:"/epsvcs/view/content/article/articleId/{"+b+"}/articleparts/{body}",sync:false})}a.href&&window.open(a.href)})},articleCountNewWindow:function(){dj.lang.addLiveEvent(".mjLinkItemExternal",
"click",function(a){dj.lang.stopEvent(a);a=a.target||a.srcElement;if(a.getAttribute("articleid")){var b=a.getAttribute("articleid");dj.lang.xhrGet({url:"/epsvcs/view/content/article/articleId/{"+b+"}/articleparts/{body}",sync:false})}a.href&&window.open(a.href)})},addTrackingIFrame:function(){if(!this._isTIFR){this._isTIFR=true;var a=typeof dj.widget.ad.adPageSite==="undefined"?"interactive.wsj.com":dj.widget.ad.adPageSite,b=typeof dj.widget.ad.adPageZone==="undefined"?"default":dj.widget.ad.adPageZone,
c=pID,e=document,f=e.createElement("iframe");f.width=0;f.height=0;f.border=0;f.alt="";f.style.visibility="hidden";f.src="/public/resources/documents/PixelTracking.html?site="+a+"&zone="+b+"&pageId="+c+"&cb="+Math.floor(Math.random()*1E6);e.getElementsByTagName("body")[0].appendChild(f)}},interstitial:{init:function(){console.info("{Tracking} executing interstitial.")}},googleAnalytics:{init:function(){window._gaq=window._gaq||[];_gaq.push(["_setAccount","UA-12114213-1"]);_gaq.push(["_trackPageview"]);
var a=document.createElement("script");a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";a.setAttribute("async","true");document.documentElement.firstChild.appendChild(a)}},googleConversionTracking:{init:function(){var a=document.createElement("script");a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".googleadservices.com/pagead/conversion.js";document.documentElement.firstChild.appendChild(a);a=document.createElement("noscript");
var b=dojo.create("div",{style:"display:inline"},a);dojo.create("img",{height:"1",width:"1",style:"border-style:none;",alt:"",src:("https:"==document.location.protocol?"https://":"http://")+"googleads.g.doubleclick.net/pagead/viewthroughconversion/992428357/?value=0&label=twaGCIOluwQQxYKd2QM&guid=ON&script=0"},b);document.documentElement.firstChild.appendChild(a)}}};

dojo.provide("dj.util.ads.Demographics");dj.util.ads.Demographics=function(){var DEMO_COOKIE="djcs_demo";var END_OF_INPUT=-1;var base64Count=0;var base64Str=null;var base64Chars=[];var reverseBase64Chars=[];var cachedUserDemographics=null;function initBase64Chars(){base64Chars=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/'];for(var i=0,len=base64Chars.length;i<len;i++){reverseBase64Chars[base64Chars[i]]=i;}}
function readReverseBase64(){if(!base64Str){return END_OF_INPUT;}
while(true){if(base64Count>=base64Str.length){return END_OF_INPUT;}
var nextCharacter=base64Str.charAt(base64Count);base64Count++;if(reverseBase64Chars[nextCharacter]){return reverseBase64Chars[nextCharacter];}
if(nextCharacter=='A'){return 0;}}
return END_OF_INPUT;}
function ntos(n){n=n.toString(16);n=(n.length==1)?("0"+n):n;n="%"+n;return unescape(n);}
function parseDemoCookie(cv){if(cv.search(/^V1:/)==-1||cv.length<4){return null;}
return cv.substring(3);}
function demoReadCookie(cookieName){var theCookie=""+document.cookie;var ind=theCookie.indexOf(cookieName);if(ind===-1||cookieName===""){return"";}
var ind1=theCookie.indexOf(';',ind);if(ind1===-1){ind1=theCookie.length;}
return unescape(theCookie.substring(ind+cookieName.length+1,ind1));}
function demoDeleteCookie(name,path,domain){if(demoReadCookie(name)){document.cookie=name+"="+((path)?";path="+path:"")+
((domain)?";domain="+domain:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";}}
function demoTrimString(sInString){sInString=sInString.replace(/^\s+/g,"");return sInString.replace(/\s+$/g,"");}
function base64Decode(str){base64Str=str;base64Count=0;var result="";var inBuffer=[];var done=false;while(!done&&(inBuffer[0]=readReverseBase64())!=END_OF_INPUT&&(inBuffer[1]=readReverseBase64())!=END_OF_INPUT){inBuffer[2]=readReverseBase64();inBuffer[3]=readReverseBase64();result+=ntos((((inBuffer[0]<<2)&0xff)|inBuffer[1]>>4));if(inBuffer[2]!=END_OF_INPUT){result+=ntos((((inBuffer[1]<<4)&0xff)|inBuffer[2]>>2));if(inBuffer[3]!=END_OF_INPUT){result+=ntos((((inBuffer[2]<<6)&0xff)|inBuffer[3]));}else{done=true;}}else{done=true;}}
return result;}
return{getUserDemographics:function(noCache){noCache=(typeof noCache!=="boolean")?false:noCache;if(noCache===false&&cachedUserDemographics!==null){return cachedUserDemographics;}
var val=demoReadCookie(DEMO_COOKIE);initBase64Chars();if(!val){return;}
val=demoTrimString(val);if(val.length<0){return null;}
val=base64Decode(val);val=parseDemoCookie(val);if(!val){demoDeleteCookie(DEMO_COOKIE);}
if(val!='!'){cachedUserDemographics=val;return val;}
return null;}};}
();dojo.provide("dj.module.ad.ExceptionCategory");dojo.require("dj.util.Cookie");dj.module.ad.ExceptionCategory={setExceptionCategory:function(){var exception_category=dj.util.Cookie.getGroupCookie("DJCOOKIE","ExceptionCategory");if(!exception_category){dj.util.Cookie.setGroupCookie("DJCOOKIE","ExceptionCategory",ACTIVE);}},removeExceptionCategory:function(){var exception_category=dj.util.Cookie.getGroupCookie("DJCOOKIE","ExceptionCategory");if(exception_category){dj.util.Cookie.deleteGroupCookie("DJCOOKIE","ExceptionCategory");}}};dojo.provide("dj.util.MarketingZone");dojo.require("dj.util.User");dojo.getObject("dj.context.article",true);dojo.declare("dj.util.MarketingZone",null,{mktg_zone:'',partners:['yahoo','google','msn','other'],mktgZone:'',init:function(){this.mktg_zone={"full_other":"wsjfreezone","full_yahoo":"yahoo_fullfree","full_google":"google_fullfree","full_msn":"msn_fullfree","full_denial_other":"wsjexp_fullfree","full_denial_yahoo":"yahoo_wsjexpfullfree","full_denial_google":"google_wsjexpfullfree","full_denial_msn":"msn_wsjexpfullfree","full_other_reg":"wsjfreezone_reg","full_yahoo_reg":"yahoo_fullfree_reg","full_google_reg":"google_fullfree_reg","full_msn_reg":"msn_fullfree_reg","full_denial_other_reg":"wsjfreezone_reg","full_denial_yahoo_reg":"yahoo_fullfree_reg","full_denial_google_reg":"google_fullfree_reg","full_denial_msn_reg":"msn_fullfree_reg","denial_other":"wsjexp_prev","denial_yahoo":"yahoo_wsjexpprev","denial_google":"google_wsjexpprev","denial_msn":"msn_wsjexpprev","denial_other_reg":"b2pfreezone_reg","denial_yahoo_reg":"yahoo_reg","denial_google_reg":"google_reg","denial_msn_reg":"msn_reg","other":"b2pfreezone","yahoo":"yahoo","google":"google","msn":"msn","other_reg":"b2pfreezone_reg","yahoo_reg":"yahoo_reg","google_reg":"google_reg","msn_reg":"msn_reg","other_super":"b2pfreezone_super","yahoo_super":"yahoo_super","google_super":"google_super","msn_super":"msn_super","other_super_reg":"b2pfreezone_super_reg","yahoo_super_reg":"yahoo_super_reg","google_super_reg":"google_super_reg","msn_super_reg":"msn_supe_regr","denial_other_super":"wsjexp_prev_super","denial_yahoo_super":"yahoo_wsjexpprev_super","denial_google_super":"google_wsjexpprev_super","denial_msn_super":"msn_wsjexpprev_super","denial_other_super_reg":"b2pfreezone_super_reg","denial_yahoo_super_reg":"yahoo_b2pfreezone_super_reg","denial_google_super_reg":"google_b2pfreezone_super_reg","denial_msn_super_reg":"msn_b2pfreezone_super_reg","denial_bol":"bol_prev","denial_other_bol":"bol_prev","denial_yahoo_bol":"yahoo_bolprev","denial_google_bol":"google_bolprev","full_denial_bol":"bol_fullfree","full_denial_other_bol":"bol_fullfree","full_denial_yahoo_bol":"yahoo_bolfullfree","full_denial_google_bol":"google_bolfullfree","full_denial_msn_bol":"msn_bolfullfree","denial_google_bol_super":"google_bolprev_super","denial_bol_super":"bol_prev_super","denial_yahoo_bol_super":"yahoo_bolprev_super","denial_msn_bol":"msn_bolprev_super"};},getPartner:function(modparam){var localMod="";if(modparam!==null&&modparam.length>0){for(var i=0;i<this.partners.length;i++){if(modparam.indexOf(this.partners[i])>-1){localMod=this.partners[i];break;}}}
return((localMod===null||localMod.length<1)?"other":localMod);},setZone:function(mod){if(this.mktg_zone.hasOwnProperty(mod)){this.mktgZone=this.mktg_zone[mod];}else{this.mktgZone=undefined;}},getZone:function(){this.setMktgZone();return this.mktgZone;},setMktgZone:function(){this.init();var that=this;var localMpsection=(typeof mpsection)==='undefined'?false:mpsection;var localDenial=(typeof isDenial)==='undefined'?false:isDenial;var localFree=(typeof isFree)==='undefined'?false:isFree;var localTrial=(typeof isTrial)==='undefined'?false:isTrial;var localSuperSnippet=((typeof dj.context.article.isSuperSnippet)==='undefined'||(typeof dj.context.article.isSuperSnippet)==='string')?false:dj.context.article.isSuperSnippet;var modParam=new dj.util.Ads().getArg("mod");var whichMod=this.getPartner(modParam);var mod="";var localLaserBOL=false;var localLaserWSJ=false;var reguser=false;if(localDenial===true||localDenial==="true"){mod+="denial_";mod+=whichMod;if(localLaserBOL){mod+="_bol";}}else{if(document.cookie.indexOf("reactivation=/myaccount/do/reactivate")!==-1){mod+="denial_";mod+=whichMod;}else{mod+=whichMod;}}
if(localFree===true||localFree==='true'||localTrial===true||localTrial==='true'){if(localSuperSnippet===true||localSuperSnippet==='true'){mod+='_super';}else{mod="full_"+mod;}}
dj.util.User.isLoggedIn(function(isLoggedIn){if(isLoggedIn){reguser=true;mod+='_reg';}});that.setZone(mod);}});dojo.provide("dj.util.Ads");dojo.require("dj.util.MarketingZone");dojo.require("dj.module.ad.ExceptionCategory");dojo.require("dj.util.Cookie");dojo.require("dj.util.Region");dojo.require("dj.util.User");dojo.getObject("dj.context.ads",true);dj.context.ads.JSAdSwitch=true;dj.context.ads.rsinetsegs="";dj.context.ads.segQS="";dj.context.ads.isFirstDoubleClickAd=0;dj.context.ads.refCookieVal="";dj.context.ads.adZone='';dj.context.ads.iframe='iframe';dj.context.ads.isSafariRefreshEnabled=dojo.isWebKit;dj.context.ads.randomId4RollAd=Math.random();dj.context.ads.threeDeepView='';dojo.declare("dj.util.Ads",null,{classAdOrd:{},registeredAd:{},adTile:{},adTracking:{},zone:'',storedAd:{},constructor:function(){},getAdOrd:function(classType){if(this.classAdOrd[classType]===undefined){var adOrd=this.calculateOrd();this.classAdOrd[classType]=this.appendOrd(adOrd);}
return this.classAdOrd[classType];},removeCachedAd:function(){this.storedAd={};},calculateOrd:function(){var intOrd=Math.ceil(32768*Math.random());var adOrd=intOrd.toString();if(adOrd.length!==4){return this.calculateOrd();}else{return adOrd;}},appendOrd:function(adOrd){if(typeof adOrd=="string"){var repeatCount=4;var result="";for(var count=0;count<repeatCount;count++){result=result+adOrd;}
return result;}
throw new Error("Unsupported argument type. I thought argument is always string");},getArg:function(N){var i=0;var u="";u=this.getWindowLocation();u=(u.indexOf("?")>-1)?u.split("?")[1]:"";u=(u.indexOf("#")>-1)?u.split("#")[0]:u;u=(u.charAt(u.length-1)==="&")?u.substring(0,u.length-1):u;N+="=";while(i<u.length){var j=i+N.length;if(u.substring(i,j)===N){return unescape(u.substring(j,(u.indexOf("&",j)==-1)?u.length:u.indexOf("&",j)));}
i=u.indexOf("&",i)+1;if(i===0){break;}}
return null;},getRandomId:function(){return dj.context.ads.randomId4RollAd;},getAdTile:function(classType){if(this.adTile[classType]===undefined){this.adTile[classType]=1;}else{var intTile=this.adTile[classType];this.adTile[classType]=++intTile;}
return this.adTile[classType];},getCurrentTile:function(classType){return this.adTile[classType];},getSymbol:function(){if(!this.isEmpty(this.adTracking.symb)){return this.adTracking.symb;}
var symb="";if(dojo.byId("mdad_ticker")){symb=';sym='+dojo.byId("mdad_ticker").value;}
this.adTracking.symb=symb;return symb;},getExcludeCategory:function(){if(!this.isEmpty(this.adTracking.category)){return this.adTracking.category;}
var category="";var exception_category=dj.util.Cookie.getGroupCookie("DJCOOKIE","ExceptionCategory");if(exception_category){category='!category=disaster';}
this.adTracking.category=category;return category;},getBizoParams:function(adClass,callback){if((typeof adClass!=='undefined')&&(adClass==='G'||adClass==='A'||adClass==='C')){var bizo_cookie=dj.util.Cookie.getGroupCookie("DJSESSION","BIZO");if(bizo_cookie){callback.call(this,';'+bizo_cookie);}else{if(dj.module.ad.bio.bioStatus===false||dj.module.ad.bio.bioStatus==="false"){callback.call(this,'');}else{if(dj.module.ad.bio.data===''){dojo.connect(dj.module.ad.bio,"onEnd",this,function(){this.adTracking.bizo=(typeof this.adTracking.bizo=='undefined')?callback.call(this,''):callback.call(this,';'+this.adTracking.bizo);});}else{this.adTracking.bizo=(typeof this.adTracking.bizo=='undefined')?dj.module.ad.bio.data:this.adTracking.bizo;callback.call(this,';'+this.adTracking.bizo);}}}}else{callback.call(this,'');}},getPeer39Params:function(adClass){if(typeof adClass=='undefined'||adClass==='Q'||adClass==='M'||adClass==='P'||typeof dj.peer.peer39Trg712.p39_resultsKVP!=='function'){return"";}
try{this.adTracking.peer39KVP=(typeof this.adTracking.peer39KVP=='undefined')?dj.peer.peer39Trg712.p39_resultsKVP('','id',';','p39',false):this.adTracking.peer39KVP;return';'+this.adTracking.peer39KVP;}catch(err){}
return'';},getWindowLocation:function(){return"".concat(window.location);},getAdMsrc:function(classType){if(!this.isEmpty(this.adTracking.msrc)){return this.adTracking.msrc;}
var locationUrl=this.getWindowLocation();var keywords='';keywords=this.getArg('KEYWORDS');if(keywords!==null&&keywords!==''){keywords=keywords.toLowerCase();keywords=keywords.replace(/ /g,"+");keywords=keywords.replace(/'/g,"_");if(keywords.length>100){keywords=keywords.substring(0,100);}
var notAllowed=".?!@#$%^&;<>,/{}[]~";var j=0;var k=0;var keywordArrayAfter="";while(k<keywords.length){if(notAllowed.indexOf(keywords.substring(k,k+1))==-1){keywordArrayAfter+=keywords.substring(k,k+1);}
k++;}
var keywordAfterFiltering=keywordArrayAfter;keywords=keywordAfterFiltering;this.adTracking.msrc=';msrc='+keywords;}
else{this.adTracking.msrc=';msrc='+(dj.util.Cookie.getCookie('etsFlag')?dj.util.Cookie.getCookie('etsFlag'):this.getArg('mod'));}
var msrc=(this.adTracking.msrc===';msrc=null'?'':this.adTracking.msrc);this.adTracking.msrc=msrc;return msrc;},getAdLink:function(classType){if(!this.isEmpty(this.adTracking.link)||this.adTracking.linkEvaluated){return this.adTracking.link;}
this.adTracking.link=';link='+this.getArg('link');var link=(this.adTracking.link===';link=null'?'':this.adTracking.link);this.adTracking.link=link;this.adTracking.linkEvaluated=true;return link;},crtg_getCookie:function(c_name){var i,x,y,ARRCookies=document.cookie.split(";");for(i=0;i<ARRCookies.length;i++){x=ARRCookies[i].substr(0,ARRCookies[i].indexOf("="));y=ARRCookies[i].substr(ARRCookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_name){return unescape(y);}}
return'';},getUserCookie:function(classType){var userCookie=dj.util.Cookie.getCookie('TR');if(userCookie===''){userCookie="null";}
var userValue=';u='+userCookie;return userValue;},getDemoQS:function(){var that=this;var demoQS="";if(!that.isEmpty(that.adTracking.demoQS)){return that.adTracking.demoQS;}
dj.util.User.isLoggedIn(function(isLoggedIn){if(isLoggedIn){demoQS=dj.util.ads.Demographics.getUserDemographics();demoQS=that.isEmpty(demoQS)?'':demoQS;that.adTracking.demoQS=demoQS;}});that.adTracking.demoQS=demoQS;return demoQS;},getMC:function(classType){var that=this;if(!that.isEmpty(that.adTracking.mc)){return that.adTracking.mc;}else{var mc='';dj.util.User.isSubLoggedIn(function(subLoggedIn){if(!subLoggedIn){mc=that.adTracking.mc;if(that.isEmpty(mc)){var mcCode;if(typeof dj.context.ads.isMarketingZoneOn!='undefined'&&dj.context.ads.isMarketingZoneOn===false){mcCode=0;}else{var mcObj=new dj.util.MarketingZone();mcCode=mcObj.getZone();}
mc=';mc='+mcCode;}}});that.adTracking.mc=mc;return mc;}
  },


  getCirc: function() {
    var a = this;
    if (a.isEmpty(a.adTracking.circ)) {
      var c = "";
      dj.util.User.isSubLoggedIn(function(b) {
        if (!b) {
          c = a.adTracking.circ;
          if (a.isEmpty(c)) {
            c = "nonsub";
          }
        }
      });
    return a.adTracking.circ = c;
  } else
    return a.adTracking.circ;
  },

  getAdInternationalSite:function(adId,site){
    var adsite=site;var brokerButtons="brokerbuttons.international.wsj.com";var communitySite="community.international.wsj.com";var wsjRegion=dj.util.Region.getViewByRegion();var intDomain="";intDomain=((wsjRegion.indexOf('europe')>=0))?"europe":intDomain;intDomain=((wsjRegion.indexOf('germany')>=0))?"de":intDomain;intDomain=((wsjRegion.indexOf('asia')>=0))?"asia":intDomain;intDomain=((wsjRegion.indexOf('asia,india')>=0))?"india":intDomain;if(""===intDomain){return adsite;}
adsite=adsite.replace("interactive",intDomain);if(site==="brokerbuttons.wsj.com"){adsite=brokerButtons.replace("international",intDomain);}
return adsite;},getAdSite:function(adId,site,classType){var etsFlag=dj.util.Cookie.getCookie('etsFlag');var siteVal="";if(dj.context.core.urlPrefix!==undefined&&dj.context.core.urlPrefix.indexOf("smartmoney.com")>=0){siteVal=(etsFlag)?"et.smartmoney.com":this.getAdDomainOverride(adId,site,classType);}else{siteVal=(etsFlag)?"ets.wsj.com":this.getAdDomainOverride(adId,site,classType);}
return siteVal;},getAdDomainOverride:function(adId,site,classType){var wsjRegion=dj.util.Region.getViewByRegion();var adsite=site;var newAdsite=site;var starbucksUserMode=false;if((dj.util.string.endsWith(adId,'G')||dj.util.string.endsWith(adId,'A')||adId==='headerPromoContainer')&&adsite!=="enterprise.wsj.com"){dj.util.User.isOpenHouseUser('SDN',function(isOpenHouseUser){if(isOpenHouseUser){dj.util.User.isLoggedIn(function(isLoggedIn){var demoQS=null;if(!isLoggedIn){adsite='starbucks.wsj.com';}});}});}
if(adId==='headerPromoContainer'||adId==='footerPromoContainer'||dj.util.string.endsWith(adId,'A')){if(dj.context.ads.refCookieVal===""){dj.context.ads.refCookieVal=this.getRefCookieVal(classType);}
if((site.indexOf('.wsj.com')>=0)&&!this.isEmpty(dj.context.ads.refCookieVal)){adsite=dj.context.ads.refCookieVal;switch(wsjRegion){case"europe":adsite="europe."+adsite;break;case"germany":adsite="germany."+adsite;break;case"asia":adsite="asia."+adsite;break;case"asia,jp":adsite="japan."+adsite;break;case"asia,india":adsite="india."+adsite;break;default:adsite=adsite;}
if(adId==='footerPromoContainer'){adsite='bottom.'+adsite;}}}
if(site.indexOf('barrons.com')!=-1&&!(adId==='abt.at.sponsor'||adId==='bottomSubscribePromoFree')){if(dj.context.ads.refCookieVal===""){dj.context.ads.refCookieVal=this.getRefCookieVal(classType);}
if(!this.isEmpty(dj.context.ads.refCookieVal)){adsite=dj.context.ads.refCookieVal;if(site==='bottom.barrons.com'){adsite='bottom.'+adsite;}}}
return adsite;},getRefCookieVal:function(classType){var refDomain="";if(document.domain.indexOf('barrons.com')!=-1){refDomain="barrons";}else if(document.domain.indexOf('wsj.com')!=-1){refDomain="wsj";}
var adDomain=dj.util.Cookie.getCookie('adDomain');var adDomains='';if(adDomain===null||this.isEmpty(adDomain)){var d=document;var r=d.referrer;if(r&&r!==null&&r!==""){adDomain='';adDomains={'t.co':'twitter.'+refDomain+'.com','twitter.com':'twitter.'+refDomain+'.com','facebook.com':'facebook.'+refDomain+'.com','www.twitter.com':'twitter.'+refDomain+'.com','www.facebook.com':'facebook.'+refDomain+'.com'};}
var domainSt=r.indexOf('//')+2;var refdom=r.substring(domainSt);var domainEnd=refdom.indexOf('/');refdom=refdom.substring(0,domainEnd);if(adDomains[refdom]){adDomain=adDomains[refdom];}
if(adDomain){dj.util.Cookie.setCookie('adDomain',adDomain);}}
return adDomain;},saveSegQS:function(){if(!(""===dj.context.ads.segQS)){return;}
var rsiSegment=dj.util.Cookie.getCookie('rsi_segs');var rsiSeg=(rsiSegment)?rsiSegment.split("|"):"";rsiSeg.length=rsiSeg.length<20?rsiSeg.length:20;var segQS=rsiSeg.length>0?"s="+rsiSeg[0]:"";for(var i=1;i<rsiSeg.length;i++){segQS+=(";s"+"="+(rsiSeg[i]?rsiSeg[i]:""));}
segQS=segQS.replace(/G07608/ig,'8');dj.context.ads.segQS=segQS;},getThreeDeepDomain:function(site){var adsite=site;var ThreeDeepIndex=dj.util.Cookie.getGroupCookie("DJSESSION","ThreeDeepIndex");var ThreeDeepLevel=dj.util.Cookie.getGroupCookie("DJSESSION","ThreeDeepLevel");if(!ThreeDeepIndex){var ThreeDeepSeparator=(adsite).split("-");var ThreeDeepSite=ThreeDeepSeparator[0];ThreeDeepLevel=ThreeDeepSeparator[1];var isTheeDeep=(ThreeDeepSite).indexOf('special.wsj.com');if(isTheeDeep>=0){dj.util.Cookie.setGroupCookie("DJSESSION","ThreeDeepLevel",ThreeDeepLevel);dj.util.Cookie.setGroupCookie("DJSESSION","ThreeDeepIndex",2);adsite='special.wsj.com';dj.context.ads.threeDeepView=";view=1";}}else if(ThreeDeepIndex&&ThreeDeepLevel){ThreeDeepIndex=parseInt(ThreeDeepIndex,10);ThreeDeepLevel=parseInt(ThreeDeepLevel,10);if((ThreeDeepIndex<ThreeDeepLevel)){adsite='special.wsj.com';dj.context.ads.threeDeepView=";view="+ThreeDeepIndex+";";dj.util.Cookie.setGroupCookie("DJSESSION","ThreeDeepIndex",ThreeDeepIndex+1);}else if((ThreeDeepIndex=ThreeDeepLevel)){adsite='special.wsj.com';dj.context.ads.threeDeepView=";view="+ThreeDeepIndex+";";dj.util.Cookie.deleteGroupCookie("DJSESSION","ThreeDeepIndex");dj.util.Cookie.deleteGroupCookie("DJSESSION","ThreeDeepLevel");}}
return adsite;},registerAd:function(key,value){if(this.registeredAd[key]===undefined){this.registeredAd[key]=value;}else{var fromRegistry=this.registeredAd[key];fromRegistry=fromRegistry+"*"+value;this.registeredAd[key]=fromRegistry;}},loadAds:function(key,options){dojo.deprecated("dj.util.Ads.loadAds","use dj.widget.ad.AdManager.loadAds instead","0.1.0");var _d=dojo;_d.require("dj.widget.ad.AdManager");
dojo.ready(function(){
dj.widget.ad.AdManager.loadAds(key,options);});},getRegisteredAdsZone:function(key){if(this.isEmpty(key)||this.isEmpty(this.registeredAd[key])){return dj.context.ads.adZone;}else{var fromRegistry=this.registeredAd[key];var adURL=fromRegistry.split("*");var zone;for(var adIndex=0,len=adURL.length;adIndex<len;adIndex++){var item=adURL[adIndex];var adParamsObj=this.getAdParametersAsObject(item);if(adParamsObj.zone){zone=adParamsObj.zone;}}
return zone;}},getRegisteredAdKey:function(key){if(this.isEmpty(key)||this.isEmpty(this.registeredAd[key])){return'';}else{var fromRegistry=this.registeredAd[key];var adURL=fromRegistry.split("*");return fromRegistry;}},modifyAdUrlWithOrd:function(url){var subUrl=url.substring(0,url.indexOf('ord='));var adObj=new dj.util.Ads();var ord=adObj.appendOrd(adObj.calculateOrd());return(subUrl+'ord='+ord);},getAdParametersAsObject:function(almostUrl){var adParamsObj={};var item=(almostUrl)?almostUrl:"";var urlFragments=item.split("?");urlFragments[1]=(urlFragments[1])?urlFragments[1]:"";var pairs=urlFragments[1].split(";");for(var pairCount=0,maxCount=pairs.length;pairCount<maxCount;pairCount++){var pair=pairs[pairCount].split("=");if(pair[1]){adParamsObj[pair[0]]=pair[1];}
else{adParamsObj[pair[0]]="";}}
return adParamsObj;},isEmpty:function(value){if(value===undefined){return true;}
if(value===null){return true;}
if(typeof value=="string"){if(""===dojo.trim(value)){return true;}}
return false;}});


// Ad code

dojo.provide("dj.widget.ad.Ad");

dojo.require("dj.util.Region");

dojo.require("dj.util.Ads");

dojo.require("dj.util.Cookie");

dojo.require("dj.util.Url");

dojo.require("dj.util.string");

var googletag = googletag ? googletag : {};
googletag.cmd = googletag.cmd ? googletag.cmd : [];
(function() {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  var useSSL = 'https:' == document.location.protocol;
  gads.src = (useSSL ? 'https:' : 'http:') +
      '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(gads, node);
})();
var googleAdSlots = {};

var p39_cb_712='1';
var api = "http://segment-data.zqtk.net/dowjones-d8s23j?url=";
var pageurl = encodeURIComponent(window.location.href);
var delay = "scr";
document.write("<" + delay + "ipt type='text/javascript' src=" + api + pageurl.replace(/\'/g, "") + "></" + delay + "ipt>");
function afterFinished_712(){dj.widget.ad.peer39result=dj.peer.peer39Trg712.p39_resultsKVP('','id',';','p39',false);}
function DM_prepClient(csid,client){if(dj.context.core.urlPrefix!==undefined&&dj.context.core.urlPrefix.indexOf("smartmoney.com")>=0){sm.util.Tracking.DM_prepClient(csid,client);
} else{dj.util.Tracking.DM_prepClient(csid,client);}}
dj.widget.ad.isRemoved=false;
dj.widget.ad.adPageZone=undefined;
dj.widget.ad.adPageSite='interactive.wsj.com';

dojo.declare("dj.widget.ad.Ad",null,{adIframeClass:'advIframe',adImgClass:'advImg',adType:'iframe',adUrl:{},

  constructor:function(id,adType,options){
    this.adId=id;
    this.adType=adType;
    this.gAdClass=this.adId;
    this.width=options.width;
    this.height=options.height;
    this.size=options.size;
    this.style=options.style;
    this.zone=options.zone;
    this.site=options.site;
    this.adClass=options.adClass;
    this.meta=options.meta;
    this.metazone=options.metazone;
    this.tile=options.tile;
    this.pos=options.pos;
    this.category=options.category;
    this.ordRecalculate=options.ordRecalculate;
    this.refreshInterval=options.refreshInterval;
    this.classEnabled=options.classEnabled;
    this.classValue=options.classValue;
    this.styleValue=options.styleValue;
    this.conditionType=options.conditionType;
    this.conditionValue=options.conditionValue;
    this.conditionalString=options.conditionalString;
    this.registerKey=options.registerKey;
    var utilObj=new dj.util.Ads();
    var wsjRegion=dj.util.Region.getViewByRegion();
    this.protocol=('https:'==document.location.protocol?'https://':'http://');
    this.adUriPrefix=this.protocol;
    this.adSiteForTracking = "interactive.wsj.com";switch(wsjRegion){
      case"europe":this.adUriPrefix+="ad-emea.doubleclick.net/N2/";
                   this.adSiteForTracking = "europe.wsj.com";
                   break;
      case"germany":this.adUriPrefix+="ad-emea.doubleclick.net/N2/";
                    this.adSiteForTracking = "de.wsj.com";
                    break;
      case"asia":this.adUriPrefix+="ad-apac.doubleclick.net/N2/";
                 this.adSiteForTracking = "asia.wsj.com";
                 break;
      case"asia,jp":this.adUriPrefix+="ad-apac.doubleclick.net/N2/";
                    this.adSiteForTracking = "japan.wsj.com";
                    break;
      case"asia,india":this.adUriPrefix+="ad-apac.doubleclick.net/N2/";
                       this.adSiteForTracking = "india.wsj.com";
                       break;default:this.adUriPrefix+="ad.doubleclick.net/N2/";}
    if(this.site=='bottom.wsj.com'){
      this.site='bottom.interactive.wsj.com';}
    if(utilObj.isEmpty(this.site)){
      this.site='interactive.wsj.com';}
    if(utilObj.isEmpty(this.zone)){
      this.zone='default';}
    if(this.conditionType==='NEWDART'){
      this.adUriPrefix="http://ad.doubleclick.net/N276266/";
      this.site='dfp_test_network';}
    var _djus=dj.util.string;
    if(_djus.endsWith(this.adId,'G')||_djus.endsWith(this.adId,'A')||_djus.endsWith(this.adId,'R')||_djus.endsWith(this.adId,'T')||_djus.endsWith(this.adId,'U')||_djus.endsWith(this.adId,'728x90')){dj.widget.ad.adPageSite=this.site;dj.widget.ad.adPageZone=this.zone;dj.context.ads.adZone = this.adSiteForTracking+"/"+this.zone;}
    if((utilObj.getArg('zone')==='intromessage'&&this.conditionType==='intromessage')||(utilObj.getArg('zone')==='intromessage'&&(_djus.endsWith(this.adId,'G')||_djus.endsWith(this.adId,'A')))){
      this.zone='intromessage';}

    var doDFP = document.location.search.indexOf('dfp') > -1;

    if(this.conditionType==='JAPAN'){
      this.japanAd();
    } else if(this.adType=='adMarvel'){
      this.marvelAd();
    } else if(this.adType=='iframe'){
      if (!doDFP) {
        this.gptAd();
      } else {
        this.iframeAd();
      }
    } else{
      if(dj.context.ads.JSAdSwitch){
        if (!doDFP) {
          this.gptAd();
        } else {
          this.jsAd();
        }
      } else{
        if (!doDFP) {
          this.gptAd();
        } else {
          this.iframeAd();
        }
      }
    }
    if(this.classEnabled==="false"){
      dojo.removeClass(dojo.byId(this.adId),this.classValue);
    }

  },

  _refactorDimensions: function () {
    // 300x250,336x280,300x600 =>  [[300,250],[336,280],[300,600]]
    var dims = this.dimensions = [];
    var dlist = this.size.split(',');
    dlist.forEach(function (d) {
      var xy = d.split('x');
      dims.push([parseInt(xy[0], 10), parseInt(xy[1], 10)]);
    });
  },


  gptAd: function () {
    var adObj = new dj.util.Ads();
    var lBkuuid=dj.util.Cookie.getCookie('bkuuid') || '';
    var metazone = this.metazone;
    var msrc = adObj.getAdMsrc(this.adClass).replace(';msrc=', '');
    var lMC = adObj.getMC(this.adClass).replace(';mc=', '');
    var lcirc = adObj.getCirc(this.adClass);
    var lsite = adObj.getAdInternationalSite(this.adId, adObj.getAdSite(this.adId, this.site, this.adClass));
    var lproximic=(typeof pxSegmentIDs==='undefined')?'':pxSegmentIDs.split(',');

    var partnerCenterPos = '';
    if (this.adClass === 'P') {
      this.pos = (this.pos > 0) ? this.pos : adObj.getAdTile('P');
      partnerCenterPos = this.pos;
    }

    this._refactorDimensions();
    var adId = this.adId;
    var dims = this.dimensions;
    var lsite = adObj.getAdInternationalSite(this.adId, adObj.getAdSite(this.adId, this.site, this.adClass));

    var zone = this.zone;
    googletag.cmd.push(function() {
      var slot = googletag.defineSlot('/2/' + lsite + '/' + zone, dims, adId).addService(googletag.pubads());


      slot.setTargeting('metazone', metazone);
      slot.setTargeting('msrc', msrc);
      slot.setTargeting("circ", lcirc);
      slot.setTargeting("psg", lproximic);
      slot.setTargeting('bkuuid', lBkuuid);
      slot.setTargeting('pos', partnerCenterPos);

      googletag.enableServices();
    });
    googletag.cmd.push(function() {
      googletag.display(adId);
    });
  },


  iframeAd:function(){
    this.calculateAdUrl(this.adType,dojo.hitch(this,function(adUriSuffix){var oAdCnt=dojo.byId(this.adId);
      var oIframe=dojo.create('iframe',{
        src:this.adUriPrefix+'adi'+adUriSuffix,
        id:this.adId+dj.context.ads.iframe,
        width:this.width,
        height:this.height,
        scrolling:"no",
        allowtransparency:"true",
        frameBorder:"0",
        marginWidth:"0",
        marginHeight:"0",
        hspace:"0",
        vspace:"0",
        border:"0",
        style:"margin:0px; padding:0px"});
      oAdCnt.appendChild(oIframe);
    }
    )
        );
  },

  jsAd:function(){var etsFlag=dj.util.Cookie.getCookie('etsFlag');
    this.calculateAdUrl(this.adType,
        dojo.hitch(this,function(adUriSuffix){
          var url=this.adUriPrefix+"adj"+adUriSuffix;
          var jsa=new dj.util.Url.jsFrame(this.adId,url);
        })
        );
  },

  pullAdUrl:function(iframeId){return this.adUrl[iframeId];},

  pushAdUrl:function(iframeId,url){
    var urlSrc=this.adUriPrefix+"adi";
    if(this.adUrl[iframeId]===undefined&&url!==''){
      this.calculateAdUrl(dj.context.ads.iframe,dojo.hitch(this,function(adUriSuffix){urlSrc+=adUriSuffix;
        this.adUrl[iframeId]=urlSrc;}));
    } else{
      this.adUrl[iframeId]=url;
    }
  },

  retrieveValueForYieldex:function(param,options){
    var separator=";";
    var nameReplacer='';
    var valueAfter='=';
    if(options!==undefined&&options.separator!==undefined){separator=options.separator;}
    if(options!==undefined&&options.nameReplacer!==undefined){nameReplacer=options.nameReplacer;}
    if(options!==undefined&&options.valueAfter!==undefined){valueAfter=options.valueAfter;}
    var valueRetrieved='';
    if(param===null||param===undefined||param===''){return"";}
    separator=";";
    var paramObj=param.split(separator);
    var item='';for(var i=0;i<paramObj.length;i++){item=paramObj[i];
      if(item!==undefined&&item!==null&&item!==''){valueRetrieved+=',';
        var itemAr=item.split(valueAfter);valueRetrieved+=itemAr[itemAr.length-1];}}
    if(valueRetrieved!==undefined&&valueRetrieved!==null){valueRetrieved=valueRetrieved.substring(1);}
    return valueRetrieved;
  },

  calculateAdUrl:function(adType,callback){
    var adObj=new dj.util.Ads(),
      partnerCenterPos='',
      ordCalculated='';
    adObj.saveSegQS();
    this.tile=(this.tile>0)?this.tile:adObj.getAdTile('oneForAll');
    if(this.adClass==='P'){
      this.pos=(this.pos>0)?this.pos:adObj.getAdTile('P');
      partnerCenterPos=';pos='+this.pos;}
    if(this.ordRecalculate=='true'){
      ordCalculated=adObj.appendOrd(adObj.calculateOrd());
    } else{
      ordCalculated=adObj.getAdOrd('oneForAll');
    }
    var uValue='';
    var lcategory=adObj.getExcludeCategory();
    var userCookie=adObj.getUserCookie(this.adClass,this.adId);
    var lMsrc=adObj.getAdMsrc(this.adClass);
    var lMC=adObj.getMC(this.adClass);
    var lSymb=adObj.getSymbol();
    var lKruxseg= (typeof Krux !== 'function' || Krux.dfppKeyValues===undefined)?'':';'+Krux.dfppKeyValues;
    var lLink=adObj.getAdLink(this.adClass);
    var lregistererKey=(this.registerKey===undefined)?'':';page='+this.registerKey;
    var lmetazone=(this.metazone===undefined||this.metazone==='')?'':';adtype='+this.metazone;
    var lSegQS=adObj.getDemoQS();
    var lBkuuid=(dj.util.Cookie.getCookie('bkuuid')===undefined)?'':';bkuuid='+dj.util.Cookie.getCookie('bkuuid');
    var lcke=(dj.util.Cookie.getCookie('cke'))?';cke='+dj.util.Cookie.getCookie('cke').replace(/\{|\"|\:|\}|\s/g, '') : '';
    var lproximic=(typeof pxSegmentIDs===undefined)?'':';psg='+pxSegmentIDs;
    var lPeer39=(dj.widget.ad.peer39result===undefined)?'':dj.widget.ad.peer39result;
    if(!dj.util.string.endsWith(this.adId,'S')){
      uValue=userCookie+'**'+this.size+'**'+
      this.retrieveValueForYieldex(lSymb,{valueAfter:'sym='});
    }
    var adUriSuffix='/'+
      adObj.getAdInternationalSite(this.adId,adObj.getAdSite(this.adId,this.site,this.adClass))+'/'+this.zone+uValue+lcategory+lregistererKey+lmetazone+lMsrc+lLink+lKruxseg+lSymb+';'+lBkuuid+lcke+lproximic +';'+lSegQS+lMC+
      partnerCenterPos+';tile='+this.tile;
    if(adType==dj.context.ads.iframe){
      adUriSuffix=adUriSuffix+';sz='+this.width+'x'+this.height;
    } else{
      adUriSuffix=adUriSuffix+';sz='+this.size;
    }
    adUriSuffix+=';ord='+ordCalculated+';';callback.call(this,adUriSuffix);},

  calculateAdJapanlUrl:function(adType,callback){
    var adObj=new dj.util.Ads();
    var japanSiteId="jp-wsj";
    var japanZone="front";
    var japanPosId='';
    var japanOrd=Math.floor(1000000000*Math.random());
    var japanTile=Math.floor(1000000000*Math.random());
    if(this.adClass==='P'){
      this.pos=(this.pos>0)?this.pos:adObj.getAdTile('P');japanPosId='&pos='+this.pos;
    } else{
      this.tile=(this.tile>0)?this.tile:adObj.getAdOrd('oneForAll');japanPosId='&tile='+this.tile;
    }
    var conditionValue=(this.conditionValue==='')?'':'&cat='+this.conditionValue;dj.context.ads.adZone=this.zone;adUriSuffix='site='+this.site+'&page='+this.zone+conditionValue+'&sz='+this.size+japanPosId+'&ord='+japanOrd;callback.call(this,adUriSuffix);},japanAd:function(){
      var japanUrlSrc=(this.protocol+'ad.jp.wsj.com/js.ng/');
      this.calculateAdJapanlUrl(this.adType,dojo.hitch(this,function(adUriSuffix){
        var url=japanUrlSrc+adUriSuffix;
        var jsa=new dj.util.Url.jsFrame(this.adId,url);
      })
    );
  },

  calculateAdMarvelUrl:function(adType,callback){
    var partnerId="9d40c674e1f512f1";
    var siteId="18680";
    var m3_r=Math.floor(Math.random()*99999999999);
    dj.context.ads.adZone=this.zone;
    adUriSuffix='partner_id='+this.site+'&site_id='+this.zone+'&version=1.5&language=javascript&format=wap&cb='+m3_r;
    callback.call(this,adUriSuffix);
  },

  marvelAd:function(){
    var m3_u=(this.protocol+'ads.admarvel.com/fam/javascriptGetAd.php?');
    this.calculateAdMarvelUrl(this.adType,dojo.hitch(this,function(adUriSuffix){
      var url=m3_u+adUriSuffix;
      var jsa=new dj.util.Url.jsFrame(this.adId,url);
    }));
  }
});





dojo.provide("dj.widget.ad.AdManager");dojo.require("dj.widget.ad.Ad");dojo.require("dj.util.Ads");dj.widget.ad.AdManager={createAd:function(id,adType,options){try{if(!dojo.byId(id)){return;}
var validated=dj.widget.ad.AdManager.validateConditons(id,adType,options);if(validated===true){return;}
var adOb=new dj.widget.ad.Ad(id,adType,options);if(!dj.context.ads.isSafariRefreshEnabled){if(options.frequency!==undefined&&!(""===dojo.trim(options.frequency))&&options.frequency>0){options.ordRecalculate='true';dj.widget.ad.AdManager.updateAd(id,adType,options,id+dj.context.ads.iframe);}}
if(options.cacheId!==undefined&&!(""===dojo.trim(options.cacheId))){dj.widget.ad.AdManager.storeAd(options.cacheId,{container:id,elementId:id+dj.context.ads.iframe,element:dojo.byId(id+dj.context.ads.iframe),check:'saving'});}}catch(e){}},differAdMap:{_object:{},get:function(key){if(this._object[key]!==Object.prototype[key]){return this._object[key];}
return;},set:function(key,value){this._object[key]=value;}},loadDifferedAd:function(id){var adObj=dj.widget.ad.AdManager.differAdMap.get(id);dj.widget.ad.AdManager.deleteAllElementsInContainer(adObj.objId);dj.widget.ad.AdManager.createAd(adObj.objId,adObj.objAdType,adObj.objOptions);},validateConditons:function(id,adType,options){var conditionType=options.conditionType,conditionValue=options.conditionValue,status=false,existingObject="";if(conditionType!==undefined&&!(""===dojo.trim(conditionType))&&conditionValue!==undefined&&!(""===dojo.trim(conditionValue))){if(conditionType==="excludeids"){(function(){var matches=conditionValue.split(/\W+/);for(var count=0,len=matches.length;count<len;count++){existingObject=dojo.byId(matches[count]);if(existingObject){status=true;return;}}})();}
if(conditionType==="differloading"){var adObj={"objId":id,"objAdType":adType,"objOptions":options};dj.widget.ad.AdManager.differAdMap.set(conditionValue,adObj);options.conditionType='';options.conditionValue='';status=true;}}
return status;},updateAd:function(containerId,adType,options,iframeId){var adRefresher=function(){dj.widget.ad.AdManager.deleteAllElementsInContainer(containerId);var adobj=new dj.widget.ad.Ad(containerId,adType,options);};setInterval(adRefresher,options.frequency*1000);},deleteAllElementsInContainer:function(containerId){try{dojo.empty(containerId);}catch(e){}},deleteAd:function(iframeId){try{dojo.destroy(iframeId);}catch(e){}},testRefreshAd:function(idRefresh,id){dj.widget.ad.AdManager.deleteAllElementsInContainer(idRefresh);dj.widget.ad.AdManager.refreshAd(id);},refreshAd:function(id){
    var doDFP = document.location.search.indexOf('dfp') > -1;
    if (!doDFP) return; // NO-OP for GPT

var adUtil=new dj.util.Ads(),ad=adUtil.storedAd[id];if(!ad){return;}
for(var adIndex=0,len=ad.length;adIndex<len;adIndex++){var obj=ad[adIndex];dojo.place(obj.element,obj.container);}},storeAd:function(id,options){try{var adUtil=new dj.util.Ads();var adCache=adUtil.storedAd[id];var adNodeDetails={container:options.container,elementId:options.elementId,element:options.element,check:options.check};if(typeof adCache==="undefined"){var one=[];one.push(adNodeDetails);adUtil.storedAd[id]=one;one=null;}else{adCache.push(adNodeDetails);adUtil.storedAd[id]=adCache;}
adNodeDetails=null;adCache=null;}catch(storeEx){}},infocusAd:function(key,id,keepLoad){var adPos=dojo.position(id,true);var adLoad=false;var link=dojo.connect(window,"onscroll",function(){var scroll=-dojo.position(dojo.body()).y;var infocus=((adPos.y-adPos.h-20)<scroll&&(adPos.y+adPos.h)>scroll);if(infocus&&!adLoad){adLoad=true;dj.widget.ad.AdManager.loadAds(key);dojo.disconnect(link);}});},loadAds:function(key,options){var utilAds=new dj.util.Ads();if(utilAds.registeredAd[key]===undefined){return;}
var fromRegistry=utilAds.registeredAd[key];var adURL=fromRegistry.split("*");for(var adIndex=0,len=adURL.length;adIndex<len;adIndex++){var item=adURL[adIndex];var newVal=item.split(";");var separated=utilAds.getAdParametersAsObject(item);var i=0;separated.ordrecalculate="false";dojo.mixin(separated,options);if(separated.ordrecalculate===1){separated.ordrecalculate="true";}
var idUsed=newVal[i];try{dj.widget.ad.AdManager.deleteAllElementsInContainer(idUsed);}catch(e){}
var adObj=dj.widget.ad.AdManager.createAd(idUsed,newVal[++i],{width:separated.width,height:separated.height,size:separated.size,site:separated.site,zone:separated.zone,adClass:separated.adclass,meta:separated.meta,metazone:separated.metazone,frequency:separated.frequency,cacheId:separated.cacheId,classEnabled:separated.classEnabled,classValue:separated.classValue,styleValue:separated.styleValue,conditionType:separated.conditionType,conditionValue:separated.conditionValue,conditionalString:separated.conditionalString,ordRecalculate:separated.ordrecalculate,registerKey:key});}},iframeRefreshOnLoad:function(){var f=document.getElementsByTagName('iframe');for(var i=0;i<f.length;i++){f[i].src=f[i].src;}}};



dojo.provide("dj.module.ad.ExpandingAd");
dojo.require("dj.widget.ad.AdManager");
dojo.require("dj.util.Ads");
dj.module.ad.ExpandingAd={ExpandParent:function(){dj.util.Ads().loadAds("expandingModule",{ordrecalculate:1});},CloseParent:function(){dj.widget.ad.AdManager.deleteAllElementsInContainer('ExpandingMarketsModule');}};
dojo.provide("dj.widget.uberhat.UberHat");dojo.require("dj.lang");dojo.require("dj.util.User");dojo.getObject("dj.widget.uberHat",true);(function(){var _dwu=dj.widget.uberHat;(_dwu.UberHat=function(cfg){this._cfg=dj.lang.deepClone(this.DEFAULT_CONFIG);dj.lang.deepMixin(this._cfg,cfg);this.matchingHat="";if(this._cfg.divExists){this.loadPartnerDiv();}else{this.getUserInfo();}}).prototype={DEFAULT_CONFIG:{partnerDivExists:false,partnerDivId:"partnerHat",partnerClassPrefix:"uberHatPartner-",hatInfo:{"HILTON":{"id":"hiltonHat","className":"wsj_partnerhat","CSSFILE":"hilton.css","content":'<div class="partnerhat_container"><div class="partnerhat_content">'+'<div class="partnerhat_col1"></div><div class="partnerhat_col2">'+'<ul class="inlineNav"><li class="listFirst"><a href="http://www.hilton.com/">Hilton.com</a></li><li><a href="http://www.weather.com/">Weather</a></li>'+'<li class="listLast"><a href="http://www.foxsports.com/">Fox Sports</a></li></ul>'+'<span class="partnerhat_subscribe"><a href="https://order.wsj.com/sub/xdef/027/6BCWNM_OOT">Subscribe to The Wall Street Journal</a></span>'+'</div></div></div><div class="partnerhat_shadow"> </div>'},"EXP-LEXISNEXIS":{"id":"lexisnexisHat","className":"wsj_partnerhat","CSSFILE":"lexisnexis.css","content":'<div class="partnerhat_container">'+'<div class="partnerhat_content">'+'<div class="partnerhat_col1">'+'</div>'+'<div class="partnerhat_col2">'+'<ul class="inlineNav">'+'<li class="listFirst"><a href="/law">WSJ.com Law Page</a></li>'+'<li><a href="http://www.lexisnexis.com/newlexis/advance/">Lexis Advance&#153</a></li>'+'<li><a href="http://www.lexis.com/research">lexis.com&#174</a></li>'+'<li><a href="http://www.lexisnexis.com/office-wsj">Lexis&#174 for Microsoft&#174 Office</a></li>'+'<li><a href="http://www.lexisnexis.com/community/Mealeys">Mealey\'s&#153</a></li>'+'<li><a href="http://www.law360.com">Law360</a></li>'+'<li class="listLast"><a href="http://www.martindale.com/">martindale.com&#174</a></li>'+'</ul>'+'</div>'+'</div>'+'</div>'+'<div class="partnerhat_shadow"> </div>'},"EXP-GAYLORD":{"id":"gaylordHat","className":"wsj_partnerhat","CSSFILE":"gaylord.css","content":'<div class="partnerhat_container">'+'<div class="partnerhat_content">'+'<a class="logo" href="http://www.gaylordhotels.com/">Free access compliments of Gaylord Hotels</a>'+'<div class="partnerhat_col1">'+'</div>'+'<div class="partnerhat_col2">'+'<ul class="inlineNav">'+'<li class="listFirst"><a href="http://www.gaylordhotels.com/">gaylordhotels.com</a></li>'+'<li><a href="http://www.weather.com/">Weather</a></li>'+'<li class="listLast"><a href="http://www.foxsports.com/">Fox Sports</a></li>'+'</ul>'+'<span class="partnerhat_subscribe">'+'<a href="https://order.wsj.com/sub/xdef/027/6BCWNM_OOT">Subscribe to The Journal</a>'+'</span>'+'</div>'+'</div>'+'</div>'+'<div class="partnerhat_shadow"> </div>'}}},getUserInfo:function(){var hatInfo=this._cfg.hatInfo;for(var key in hatInfo){if(hatInfo.hasOwnProperty(key)){this.localCallbackWrapper(key);}}},localCallbackWrapper:function(roleName){var that=this;var role=roleName;dj.util.User.hasRole(roleName,function(userHasRole){that.userCallback(userHasRole,role);});},userCallback:function(userHasRole,role){if(userHasRole){this.renderHat(this._cfg.hatInfo[role]);}},renderHat:function(hatInfo){var reallywide=dojo.query("div.fullwide")[0];var hat=dojo.create('div');hat.className=(hatInfo.className)||"uberHat";hat.id=(hatInfo.id)||"uberHat";reallywide.insertBefore(hat,reallywide.firstChild);hat.innerHTML=hatInfo.content;},loadPartnerDiv:function(){var div=dojo.byId(this._cfg.partnerDivId);if(div){var divClasses=div.className;var classArray=divClasses.split(' ');var pcPrefix=this._cfg.partnerClassPrefix;var partner="";for(var i=0,caLength=classArray.length;i<caLength;i++){var className=classArray[i];if(className.indexOf(pcPrefix)===0){partner=className.substring(pcPrefix.length);}}
if(partner){var hatInfo=this._cfg.hatInfo[partner];this.insertHat(div,hatInfo);}
var isIE6=(dojo.isIE==6);if(isIE6){var iframe=dojo.create('iframe',{"className":"wsj_partnerhat_iframe","id":"partnerhat_iframe","src":"javascript:'';","marginHeight":"0","marginWidth":"0","scrolling":"no","frameBorder":"0"},div.parentNode);var thehat=dojo.byId("partnerHat");var thehat_iframe=dojo.byId("partnerhat_iframe");var d=document;window.onscroll=function(){var iebody=(d.compatMode&&d.compatMode!="BackCompat")?d.documentElement:d.body;var thisy=iebody.scrollTop;thehat.style.top=thisy+"px";thehat_iframe.style.top=thisy+"px";};}}},insertHat:function(div,hatInfo){if(hatInfo){div.innerHTML=hatInfo.content;}}};}());
dojo.provide("dj.module.iframeFix");dojo.isMoz&&dojo.query("iframe.iframeReset").forEach(function(a){a.src=a.src});
dojo.provide("dj.widget.survey.Survey");dojo.require("dj.util.Cookie");dojo.require("dj.util.Url");dojo.require("dj.util.User");(function(){var _du=dj.util;var _dws=dj.widget.survey;(_dws.SurveyPopup=function(cfg){this._cfg=dj.lang.cloneMixin(this.DEFAULT_CONFIG,cfg);this._duu=dj.util.Url;this._duc=dj.util.Cookie;try{if(this._cfg.userHasRole){var that=this;dj.util.User.hasRole(this._cfg.userHasRole,function(userHasRole){if(userHasRole){that.popup();}});}else{this.popup();}}catch(e){throw e;}}).prototype={DEFAULT_CONFIG:{"url":"","width":740,"height":425,"bottom":"15px","left":"10%","cookieName":"survey","windowName":"survey","userHasRole":"","enableInterval":"","noRepeatInterval":"7d+","frequencyPercent":100,"cookieGroupExpirationDays":90,"divId":"sd1Scrim","iframeId":"sw1","closeUrlSuffix":"?closeDomain="+window.location.host,"newsReelMatch":"NewsReel"},popup:function(){var Cookie=this._duc;var Url=this._duu;if(this._canShowPopup()){this._setNoRepeatCookie(this._cfg.noRepeatInterval);this.insertIframe();this.showIframe();dj.module.survey=this;}},insertIframe:function(){this.body=document.body;var body=this.body;if(body){var surveyDiv=dojo.create('div',{"id":this._cfg.divId,"name":this._cfg.divId,"style":{"zIndex":"9999"},"innerHTML":['<div id="sd1Frame">','<div id="sd1">','<iframe name="',this._cfg.iframeId,'" id="',this._cfg.iframeId,'" src="about:blank" height="',this._cfg.height,'" width="',this._cfg.width,'">','</div>','</div>'].join('')});this.surveyDiv=surveyDiv;body.appendChild(surveyDiv);this.surveyIframe=dojo.byId(this._cfg.iframeId);}},showIframe:function(){this.surveyIframe.src=this._cfg.url+this._cfg.closeUrlSuffix;this.surveyDiv.style.display="";var that=this;window.CloseSurvey=function(){that.hideIframe();};},hideIframe:function(){this.surveyDiv.style.display="none";},showIframeDelay:function(){var that=this;setTimeout(function(){that.showIframe();},this._calcMilliseconds(this._cfg.enableInterval));},_canShowPopup:function(){if(document.location.href.indexOf(this._cfg.newsReelMatch)>-1){return false;}
var showPopup=true;var noRepeatCookie=this._duc.getGroupCookie("DJCOOKIE",this._cfg.cookieName+"NoRepeat");var now=new Date();if(noRepeatCookie){var noRepeatDate=new Date(noRepeatCookie);if((noRepeatDate-now)>0){showPopup=false;}else{this._setEnableIntervalCookie(this._cfg.enableInterval);this._duc.deleteGroupCookie("DJCOOKIE",this._cfg.cookieName+"NoRepeat");}}
if(this._cfg.enableInterval){var enableCookie=this._duc.getGroupCookie("DJCOOKIE",this._cfg.cookieName+"Enable");if(enableCookie){var enableDate=new Date(enableCookie);if((enableDate-now)>0){showPopup=false;}}else{this._setEnableIntervalCookie(this._cfg.enableInterval);showPopup=false;var that=this;setTimeout(function(){that.popup();},this._calcMilliseconds(this._cfg.enableInterval));}}
if(showPopup&&this._cfg.frequencyPercent){var dice=Math.floor(Math.random()*100);if(dice>=this._cfg.frequencyPercent){showPopup=false;}}
return showPopup;},_setNoRepeatCookie:function(interval){var noRepeatDate=this._calcDate(interval);this._duc.setGroupCookie("DJCOOKIE",this._cfg.cookieName+"NoRepeat",noRepeatDate,this._cfg.cookieGroupExpirationDays);},_setEnableIntervalCookie:function(interval){var enableDate=this._calcDate(interval);this._duc.setGroupCookie("DJCOOKIE",this._cfg.cookieName+"Enable",enableDate,this._cfg.cookieGroupExpirationDays);},_calcDate:function(D){var MS=this._calcMilliseconds(D),dO=new Date();dO.setTime((D.substring(D.length-1,D.length)=="+")?dO.getTime()+MS:dO.getTime()-MS);return dO.toGMTString();},_calcMilliseconds:function(D){var TD=D.substring(0,D.length-2),TC=D.substring(D.length-2,D.length-1).toLowerCase(),MS=0;MS=(TC=="m")?TD*((24*60*60*1000)*30):MS;MS=(TC=="d")?TD*(24*60*60*1000):MS;MS=(TC=="s")?TD*1000:MS;return MS;},openWSJDNPopUnder:function(){dj.util.User.isLoggedIn(function(loggedIn){if(!loggedIn){var wsjdnPopUnder=dj.util.Cookie.getGroupCookie("DJCOOKIE","wsjdnpopunder");if(!wsjdnPopUnder)
{var popunder=window.open('http://wsjdn.wsj.com/','wsjdnpopunder','menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,personalbar=yes,scrollbars=yes');popunder.blur();window.focus();dj.util.Cookie.setGroupCookie("DJCOOKIE","wsjdnpopunder","seen",1);}}});}};}());dojo.provide("dj.module.header2012.lifp");

dojo.require("dj.util.Region");

(function() {
dj.module.header2012.lifp = {
      DEFAULT_CONFIG: {
          regionCodeToSignatures :
            { //"na,us"      : "50539a1d13decf6d45000001", old
              "na,us"     : "509b1a086458232f6e000002",
              "asia"       : "50f57257bd7fb2d2f6629af5",
            //"asia,indo"  : "", no sub
            //"asia,cn"    : "", not on reno
            //"asia,kr"    : "", no sub
              "asia,india" : "50f57264bd7fb2d2f6629af6",
              "asia,jp"    : "505a8796ff85b0b47f000001",
              "europe"     : "50f5723cbd7fb2d2f6629af4",
              "europe,uk"  : "50f5723cbd7fb2d2f6629af4",
            //"europe,tr"  : "", pending impl
            //"germany"    : "", seperate impl
              "na,lat"     : "50f57272bd7fb2d2f6629af7",
              "na,br"      : "50f5727cbd7fb2d2f6629af8",
              "barrons"   : "504643805a953dda59000001"
            },
          /*
           * overriding region to be supplied in init call on individual region headers if
           * region cookie does not exist for that region eg. na,lat and na,br
           */
         region: ""
      },
      lifpJsLoaded: false,

    init: function(cfg) {
      var self = this;
      self._cfg = dj.lang.cloneMixin(self.DEFAULT_CONFIG, cfg);

        //get the signature id based on region
      if (!self._cfg.region){
        self.region = dj.util.Region.getViewByRegion();
      }else{
        self.region = self._cfg.region;
      }

        if (!self.region){
            console.info("Region "+self.region+" not in regionCodeToSignatures...using na,us");
        }

        self.signature = self._cfg.regionCodeToSignatures[self.region || "na,us"];
            //create meta tag for new framework
        dojo.create("meta",{"name":"lifp_signature","content":self.signature},document.getElementsByTagName("head")[0]);

        //modify login links for new framework to pick up
        dojo.forEach(dojo.query("a.loginClass"),function(tag){
          dojo.attr(tag,"href",dj.context.lifp.loginUrl.replace("SIGNATURE",self.signature));
          dojo.attr(tag,"ref","nofollow");
          dojo.attr(tag,"data-widget","LIFP.login");
        });

        //modify register links for new framework to pick up
        dojo.forEach(dojo.query("a.registerUserClass"),function(tag){
          dojo.attr(tag,"href",dj.context.lifp.registerUrl.replace("SIGNATURE",self.signature));
          dojo.attr(tag,"ref","nofollow");
          dojo.attr(tag,"data-widget","LIFP.freeregistration");
        });

        //modify forgot username links for new framework to pick up
        dojo.forEach(dojo.query("a.forgotUserClass"),function(tag){
          dojo.attr(tag,"href",dj.context.lifp.forgotUsername.replace("SIGNATURE",self.signature));
          dojo.attr(tag,"ref","nofollow");
          dojo.attr(tag,"data-widget","LIFP.forgotusername");
        });

        //modify forgot password links for new framework to pick up
        dojo.forEach(dojo.query("a.forgotPassClass"),function(tag){
          dojo.attr(tag,"href",dj.context.lifp.forgotPassword.replace("SIGNATURE",self.signature));
          dojo.attr(tag,"ref","nofollow");
          dojo.attr(tag,"data-widget","LIFP.forgotpassword");
        });

        //load commerce lifp js async
        if(!self.lifpJsLoaded){
          self.lifpJsLoaded=true;
        var script = document.createElement("script");
        //Sample values from context bundle dj.context.lifp.jsUrl = "https://id.sat.wsj.com/access/SIGNATURE/latest/assets/lifp_sdev.js";
        script.type = "text/javascript";
        script.src = dj.context.lifp.jsUrl.replace("SIGNATURE",self.signature);
        document.body.appendChild(script);
        }

    }};
}());
