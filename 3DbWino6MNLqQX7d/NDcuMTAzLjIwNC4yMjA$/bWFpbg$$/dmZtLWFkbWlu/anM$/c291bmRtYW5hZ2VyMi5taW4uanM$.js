/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20150601
 */
(function(h,g){function w(gb,w){function Z(b){return c.preferFlash&&A&&!c.ignoreFlash&&c.flash[b]!==g&&c.flash[b]}function r(b){return function(c){var d=this._s;return d&&d._a?b.call(this,c):null}}this.setupOptions={url:gb||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,
forceUseGlobalHTML5Audio:!1,ignoreMobileRestrictions:!1,html5Test:/^(probably|maybe)$/i,preferFlash:!1,noSWFCache:!1,idPrefix:"sound"};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,
useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},opus:{type:["audio/ogg; codecs=opus",
"audio/opus"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=w||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20150601";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};
this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var N,c=this,Oa=null,k=null,aa,u=navigator.userAgent,Pa=h.location.href.toString(),p=document,pa,Qa,qa,m,y=[],O=!1,P=!1,l=!1,B=!1,ra=!1,Q,x,sa,ba,ta,F,H,I,Ra,ua,va,ca,J,da,G,wa,R,xa,ea,K,Sa,ya,Ta,za,Ua,S=null,Aa=null,T,Ba,L,fa,ga,q,U=!1,Ca=!1,Va,Wa,Xa,ha=0,V=null,ia,W=[],X,v=null,Ya,ja,Y,D,ka,Da,Za,t,hb=Array.prototype.slice,
z=!1,Ea,A,Fa,$a,C,la,ab=0,Ga,Ha=u.match(/(ipad|iphone|ipod)/i),Ia=u.match(/android/i),E=u.match(/msie/i),ib=u.match(/webkit/i),ma=u.match(/safari/i)&&!u.match(/chrome/i),Ja=u.match(/opera/i),na=u.match(/(mobile|pre\/|xoom)/i)||Ha||Ia,bb=!Pa.match(/usehtml5audio/i)&&!Pa.match(/sm2\-ignorebadua/i)&&ma&&!u.match(/silk/i)&&u.match(/OS X 10_6_([3-7])/i),Ka=p.hasFocus!==g?p.hasFocus():null,oa=ma&&(p.hasFocus===g||!p.hasFocus()),cb=!oa,db=/(mp3|mp4|mpa|m4a|m4b)/i,La=p.location?p.location.protocol.match(/http/i):
null,jb=La?"":"http://",eb=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,fb="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),kb=new RegExp("\\.("+fb.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!La;var Ma;try{Ma=Audio!==g&&(Ja&&opera!==g&&10>opera.version()?new Audio(null):new Audio).canPlayType!==g}catch(lb){Ma=!1}this.hasHTML5=Ma;this.setup=function(b){var e=!c.url;b!==g&&l&&v&&c.ok();
sa(b);if(!z)if(na){if(!c.setupOptions.ignoreMobileRestrictions||c.setupOptions.forceUseGlobalHTML5Audio)W.push(J.globalHTML5),z=!0}else c.setupOptions.forceUseGlobalHTML5Audio&&(W.push(J.globalHTML5),z=!0);if(!Ga&&na)if(c.setupOptions.ignoreMobileRestrictions)W.push(J.ignoreMobile);else if(c.setupOptions.useHTML5Audio=!0,c.setupOptions.preferFlash=!1,Ha)c.ignoreFlash=!0;else if(Ia&&!u.match(/android\s2\.3/i)||!Ia)z=!0;b&&(e&&R&&b.url!==g&&c.beginDelayedInit(),R||b.url===g||"complete"!==p.readyState||
setTimeout(G,1));Ga=!0;return c};this.supported=this.ok=function(){return v?l&&!B:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(b){return aa(b)||p[b]||h[b]};this.createSound=function(b,e){function d(){a=fa(a);c.sounds[a.id]=new N(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,f=null;if(!l||!c.ok())return!1;e!==g&&(b={id:b,url:e});a=x(b);a.url=ia(a.url);a.id===g&&(a.id=c.setupOptions.idPrefix+ab++);if(q(a.id,!0))return c.sounds[a.id];if(ja(a))f=d(),f._setup_html5(a);else{if(c.html5Only||
c.html5.usingFlash&&a.url&&a.url.match(/data\:/i))return d();8<m&&null===a.isMovieStar&&(a.isMovieStar=!!(a.serverURL||a.type&&a.type.match(eb)||a.url&&a.url.match(kb)));a=ga(a,void 0);f=d();8===m?k._createSound(a.id,a.loops||1,a.usePolicyFile):(k._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),a.serverURL||(f.connected=!0,a.onconnect&&a.onconnect.apply(f)));
a.serverURL||!a.autoLoad&&!a.autoPlay||f.load(a)}!a.serverURL&&a.autoPlay&&f.play();return f};this.destroySound=function(b,e){if(!q(b))return!1;var d=c.sounds[b],a;d.stop();d._iO={};d.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}e||d.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,e){return q(b)?c.sounds[b].load(e):!1};this.unload=function(b){return q(b)?c.sounds[b].unload():!1};this.onposition=this.onPosition=function(b,e,d,a){return q(b)?
c.sounds[b].onposition(e,d,a):!1};this.clearOnPosition=function(b,e,d){return q(b)?c.sounds[b].clearOnPosition(e,d):!1};this.start=this.play=function(b,e){var d=null,a=e&&!(e instanceof Object);if(!l||!c.ok())return!1;if(q(b,a))a&&(e={url:e});else{if(!a)return!1;a&&(e={url:e});e&&e.url&&(e.id=b,d=c.createSound(e).play())}null===d&&(d=c.sounds[b].play(e));return d};this.setPosition=function(b,e){return q(b)?c.sounds[b].setPosition(e):!1};this.stop=function(b){return q(b)?c.sounds[b].stop():!1};this.stopAll=
function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return q(b)?c.sounds[b].pause():!1};this.pauseAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};this.resume=function(b){return q(b)?c.sounds[b].resume():!1};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){return q(b)?c.sounds[b].togglePause():!1};this.setPan=function(b,e){return q(b)?
c.sounds[b].setPan(e):!1};this.setVolume=function(b,e){var d,a;if(b===g||isNaN(b)||e!==g)return q(b)?c.sounds[b].setVolume(e):!1;d=0;for(a=c.soundIDs.length;d<a;d++)c.sounds[c.soundIDs[d]].setVolume(b)};this.mute=function(b){var e=0;b instanceof String&&(b=null);if(b)return q(b)?c.sounds[b].mute():!1;for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){b instanceof String&&(b=null);if(b)return q(b)?c.sounds[b].unmute():
!1;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(b){return q(b)?c.sounds[b].toggleMute():!1};this.getMemoryUse=function(){var b=0;k&&8!==m&&(b=parseInt(k._getMemoryUse(),10));return b};this.disable=function(b){var e;b===g&&(b=!1);if(B)return!1;B=!0;for(e=c.soundIDs.length-1;0<=e;e--)Ta(c.sounds[c.soundIDs[e]]);Q(b);t.remove(h,"load",H);return!0};this.canPlayMIME=function(b){var e;c.hasHTML5&&
(e=Y({type:b}));!e&&v&&(e=b&&c.ok()?!!(8<m&&b.match(eb)||b.match(c.mimePattern)):null);return e};this.canPlayURL=function(b){var e;c.hasHTML5&&(e=Y({url:b}));!e&&v&&(e=b&&c.ok()?!!b.match(c.filePattern):null);return e};this.canPlayLink=function(b){return b.type!==g&&b.type&&c.canPlayMIME(b.type)?!0:c.canPlayURL(b.href)};this.getSoundById=function(b,e){return b?c.sounds[b]:null};this.onready=function(b,c){if("function"===typeof b)c||(c=h),ta("onready",b,c),F();else throw T("needFunction","onready");
return!0};this.ontimeout=function(b,c){if("function"===typeof b)c||(c=h),ta("ontimeout",b,c),F({type:"ontimeout"});else throw T("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(b,c){return!0};this._debug=function(){};this.reboot=function(b,e){var d,a,f;for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].destruct();if(k)try{E&&(Aa=k.innerHTML),S=k.parentNode.removeChild(k)}catch(g){}Aa=S=v=k=null;c.enabled=R=l=U=Ca=O=P=B=z=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};ab=
0;Ga=!1;if(b)y=[];else for(d in y)if(y.hasOwnProperty(d))for(a=0,f=y[d].length;a<f;a++)y[d][a].fired=!1;c.html5={usingFlash:null};c.flash={};c.html5Only=!1;c.ignoreFlash=!1;h.setTimeout(function(){e||c.beginDelayedInit()},20);return c};this.reset=function(){return c.reboot(!0,!0)};this.getMoviePercent=function(){return k&&"PercentLoaded"in k?k.PercentLoaded():null};this.beginDelayedInit=function(){ra=!0;G();setTimeout(function(){if(Ca)return!1;ea();da();return Ca=!0},20);I()};this.destruct=function(){c.disable(!0)};
N=function(b){var e,d,a=this,f,n,h,M,p,r,u=!1,l=[],v=0,y,B,w=null,A;d=e=null;this.sID=this.id=b.id;this.url=b.url;this._iO=this.instanceOptions=this.options=x(b);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;A=this.url?!1:!0;this.id3={};this._debug=function(){};this.load=function(b){var e=null,d;b!==g?a._iO=x(b,a.options):(b=a.options,a._iO=b,w&&w!==a.url&&(a._iO.url=a.url,a.url=null));a._iO.url||(a._iO.url=a.url);a._iO.url=ia(a._iO.url);d=a.instanceOptions=
a._iO;if(!d.url&&!a.url)return a;if(d.url===a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&d.onload&&la(a,function(){d.onload.apply(a,[!!a.duration])}),a;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(ja(d))e=a._setup_html5(d),e._called_load||(a._html5_canplay=!1,a.url!==d.url&&(a._a.src=d.url,a.setPosition(0)),a._a.autobuffer="auto",a._a.preload="auto",a._a._called_load=!0);else{if(c.html5Only||a._iO.url&&a._iO.url.match(/data\:/i))return a;try{a.isHTML5=!1,a._iO=ga(fa(d)),
a._iO.autoPlay&&(a._iO.position||a._iO.from)&&(a._iO.autoPlay=!1),d=a._iO,8===m?k._load(a.id,d.url,d.stream,d.autoPlay,d.usePolicyFile):k._load(a.id,d.url,!!d.stream,!!d.autoPlay,d.loops||1,!!d.autoLoad,d.usePolicyFile)}catch(f){K({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}}a.url=d.url;return a};this.unload=function(){0!==a.readyState&&(a.isHTML5?(M(),a._a&&(a._a.pause(),w=ka(a._a))):8===m?k._unload(a.id,"about:blank"):k._unload(a.id),f());return a};this.destruct=function(b){a.isHTML5?(M(),a._a&&
(a._a.pause(),ka(a._a),z||h(),a._a._s=null,a._a=null)):(a._iO.onfailure=null,k._destroySound(a.id));b||c.destroySound(a.id,!0)};this.start=this.play=function(b,e){var d,f,n,h,Na;f=!0;f=null;e=e===g?!0:e;b||(b={});a.url&&(a._iO.url=a.url);a._iO=x(a._iO,a.options);a._iO=x(b,a._iO);a._iO.url=ia(a._iO.url);a.instanceOptions=a._iO;if(!a.isHTML5&&a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;ja(a._iO)&&(a._setup_html5(a._iO),p());1!==a.playState||a.paused||(d=a._iO.multiShot,
d||(a.isHTML5&&a.setPosition(a._iO.position),f=a));if(null!==f)return f;b.url&&b.url!==a.url&&(a.readyState||a.isHTML5||8!==m||!A?a.load(a._iO):A=!1);a.loaded||(0===a.readyState?(a.isHTML5||c.html5Only?a.isHTML5?a.load(a._iO):f=a:(a._iO.autoPlay=!0,a.load(a._iO)),a.instanceOptions=a._iO):2===a.readyState&&(f=a));if(null!==f)return f;!a.isHTML5&&9===m&&0<a.position&&a.position===a.duration&&(b.position=0);if(a.paused&&0<=a.position&&(!a._iO.serverURL||0<a.position))a.resume();else{a._iO=x(b,a._iO);
if((!a.isHTML5&&null!==a._iO.position&&0<a._iO.position||null!==a._iO.from&&0<a._iO.from||null!==a._iO.to)&&0===a.instanceCount&&0===a.playState&&!a._iO.serverURL){d=function(){a._iO=x(b,a._iO);a.play(a._iO)};a.isHTML5&&!a._html5_canplay?(a.load({_oncanplay:d}),f=!1):a.isHTML5||a.loaded||a.readyState&&2===a.readyState||(a.load({onload:d}),f=!1);if(null!==f)return f;a._iO=B()}(!a.instanceCount||a._iO.multiShotEvents||a.isHTML5&&a._iO.multiShot&&!z||!a.isHTML5&&8<m&&!a.getAutoPlay())&&a.instanceCount++;
a._iO.onposition&&0===a.playState&&r(a);a.playState=1;a.paused=!1;a.position=a._iO.position===g||isNaN(a._iO.position)?0:a._iO.position;a.isHTML5||(a._iO=ga(fa(a._iO)));a._iO.onplay&&e&&(a._iO.onplay.apply(a),u=!0);a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?2>a.instanceCount?(p(),f=a._setup_html5(),a.setPosition(a._iO.position),f.play()):(n=new Audio(a._iO.url),h=function(){t.remove(n,"ended",h);a._onfinish(a);ka(n);n=null},Na=function(){t.remove(n,"canplay",Na);try{n.currentTime=
a._iO.position/1E3}catch(b){}n.play()},t.add(n,"ended",h),a._iO.volume!==g&&(n.volume=Math.max(0,Math.min(1,a._iO.volume/100))),a.muted&&(n.muted=!0),a._iO.position?t.add(n,"canplay",Na):n.play()):(f=k._start(a.id,a._iO.loops||1,9===m?a.position:a.position/1E3,a._iO.multiShot||!1),9!==m||f||a._iO.onplayerror&&a._iO.onplayerror.apply(a))}return a};this.stop=function(b){var c=a._iO;1===a.playState&&(a._onbufferchange(0),a._resetOnPosition(0),a.paused=!1,a.isHTML5||(a.playState=0),y(),c.to&&a.clearOnPosition(c.to),
a.isHTML5?a._a&&(b=a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),M()):(k._stop(a.id,b),c.serverURL&&a.unload()),a.instanceCount=0,a._iO={},c.onstop&&c.onstop.apply(a));return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||(k._setAutoPlay(a.id,b),b&&(a.instanceCount||1!==a.readyState||a.instanceCount++))};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(b){b===g&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,
Math.max(b,0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(!a.isHTML5)b=9===m?a.position:b,a.readyState&&2!==a.readyState&&k._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);else if(a._a){if(a._html5_canplay){if(a._a.currentTime!==b)try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(e){}}else if(b)return a;a.paused&&a._onTimer(!0)}return a};this.pause=function(b){if(a.paused||0===a.playState&&1!==a.readyState)return a;a.paused=!0;
a.isHTML5?(a._setup_html5().pause(),M()):(b||b===g)&&k._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){var b=a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),p()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),k._pause(a.id,b.multiShot));!u&&b.onplay?(b.onplay.apply(a),u=!0):b.onresume&&b.onresume.apply(a);return a};this.togglePause=function(){if(0===a.playState)return a.play({position:9!==m||a.isHTML5?
a.position/1E3:a.position}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){b===g&&(b=0);c===g&&(c=!1);a.isHTML5||k._setPan(a.id,b);a._iO.pan=b;c||(a.pan=b,a.options.pan=b);return a};this.setVolume=function(b,e){b===g&&(b=100);e===g&&(e=!1);a.isHTML5?a._a&&(c.muted&&!a.muted&&(a.muted=!0,a._a.muted=!0),a._a.volume=Math.max(0,Math.min(1,b/100))):k._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;e||(a.volume=b,a.options.volume=b);return a};this.mute=function(){a.muted=
!0;a.isHTML5?a._a&&(a._a.muted=!0):k._setVolume(a.id,0);return a};this.unmute=function(){a.muted=!1;var b=a._iO.volume!==g;a.isHTML5?a._a&&(a._a.muted=!1):k._setVolume(a.id,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,e){l.push({position:parseInt(b,10),method:c,scope:e!==g?e:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c;a=parseInt(a,10);if(isNaN(a))return!1;for(c=0;c<l.length;c++)a!==
l[c].position||b&&b!==l[c].method||(l[c].fired&&v--,l.splice(c,1))};this._processOnPosition=function(){var b,c;b=l.length;if(!b||!a.playState||v>=b)return!1;for(--b;0<=b;b--)c=l[b],!c.fired&&a.position>=c.position&&(c.fired=!0,v++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(a){var b,c;b=l.length;if(!b)return!1;for(--b;0<=b;b--)c=l[b],c.fired&&a<=c.position&&(c.fired=!1,v--);return!0};B=function(){var b=a._iO,c=b.from,e=b.to,d,f;f=function(){a.clearOnPosition(e,f);
a.stop()};d=function(){if(null!==e&&!isNaN(e))a.onPosition(e,f)};null===c||isNaN(c)||(b.position=c,b.multiShot=!1,d());return b};r=function(){var b,c=a._iO.onposition;if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};y=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};p=function(){a.isHTML5&&Va(a)};M=function(){a.isHTML5&&Wa(a)};f=function(b){b||(l=[],v=0);u=!1;a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=
null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=[];a.eqData.left=[];a.eqData.right=[];a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};f();this._onTimer=function(b){var c,f=!1,g={};if(a._hasTimer||b)return a._a&&(b||(0<a.playState||1===a.readyState)&&
!a.paused)&&(c=a._get_html5_duration(),c!==e&&(e=c,a.duration=c,f=!0),a.durationEstimate=a.duration,c=1E3*a._a.currentTime||0,c!==d&&(d=c,f=!0),(f||b)&&a._whileplaying(c,g,g,g,g)),f};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){b=x(a._iO,b);var c=z?Oa:a._a,e=decodeURI(b.url),d;z?e===decodeURI(Ea)&&(d=!0):
e===decodeURI(w)&&(d=!0);if(c){if(c._s)if(z)c._s&&c._s.playState&&!d&&c._s.stop();else if(!z&&e===decodeURI(w))return a._apply_loop(c,b.loops),c;d||(w&&f(!1),c.src=b.url,Ea=w=a.url=b.url,c._called_load=!1)}else b.autoLoad||b.autoPlay?(a._a=new Audio(b.url),a._a.load()):a._a=Ja&&10>opera.version()?new Audio(null):new Audio,c=a._a,c._called_load=!1,z&&(Oa=c);a.isHTML5=!0;a._a=c;c._s=a;n();a._apply_loop(c,b.loops);b.autoLoad||b.autoPlay?a.load():(c.autobuffer=!1,c.preload="auto");return c};n=function(){if(a._a._added_events)return!1;
var b;a._a._added_events=!0;for(b in C)C.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,C[b],!1);return!0};h=function(){var b;a._a._added_events=!1;for(b in C)C.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,C[b],!1)};this._onload=function(b){var c=!!b||!a.isHTML5&&8===m&&a.duration;a.loaded=c;a.readyState=c?3:2;a._onbufferchange(0);a._iO.onload&&la(a,function(){a._iO.onload.apply(a,[c])});return!0};this._onbufferchange=function(b){if(0===a.playState||b&&a.isBuffering||!b&&!a.isBuffering)return!1;
a.isBuffering=1===b;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a,[b]);return!0};this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);return!0};this._onfailure=function(b,c,e){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(b,c,e)};this._onwarning=function(b,c,e){if(a._iO.onwarning)a._iO.onwarning(b,c,e)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);a.instanceCount&&(a.instanceCount--,a.instanceCount||(y(),a.playState=
0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},M(),a.isHTML5&&(a.position=0)),(!a.instanceCount||a._iO.multiShotEvents)&&b&&la(a,function(){b.apply(a)}))};this._whileloading=function(b,c,e,d){var f=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(e);a.bufferLength=d;a.durationEstimate=a.isHTML5||f.isMovieStar?a.duration:f.duration?a.duration>f.duration?a.duration:f.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10);a.isHTML5||(a.buffered=[{start:0,end:a.duration}]);
(3!==a.readyState||a.isHTML5)&&f.whileloading&&f.whileloading.apply(a)};this._whileplaying=function(b,c,e,d,f){var n=a._iO;if(isNaN(b)||null===b)return!1;a.position=Math.max(0,b);a._processOnPosition();!a.isHTML5&&8<m&&(n.usePeakData&&c!==g&&c&&(a.peakData={left:c.leftPeak,right:c.rightPeak}),n.useWaveformData&&e!==g&&e&&(a.waveformData={left:e.split(","),right:d.split(",")}),n.useEQData&&f!==g&&f&&f.leftEQ&&(b=f.leftEQ.split(","),a.eqData=b,a.eqData.left=b,f.rightEQ!==g&&f.rightEQ&&(a.eqData.right=
f.rightEQ.split(","))));1===a.playState&&(a.isHTML5||8!==m||a.position||!a.isBuffering||a._onbufferchange(0),n.whileplaying&&n.whileplaying.apply(a));return!0};this._oncaptiondata=function(b){a.captiondata=b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var e={},d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.metadata=e;a._iO.onmetadata&&a._iO.onmetadata.call(a,a.metadata)};this._onid3=function(b,c){var e=[],d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.id3=x(a.id3,
e);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=b)a.failures=0,q(a.id)&&(a.getAutoPlay()?a.play(g,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(b){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};xa=function(){return p.body||p.getElementsByTagName("div")[0]};aa=function(b){return p.getElementById(b)};x=function(b,e){var d=b||{},a,f;a=e===g?c.defaultOptions:e;for(f in a)a.hasOwnProperty(f)&&
d[f]===g&&(d[f]="object"!==typeof a[f]||null===a[f]?a[f]:x(d[f],a[f]));return d};la=function(b,c){b.isHTML5||8!==m?c():h.setTimeout(c,0)};ba={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};sa=function(b,e){var d,a=!0,f=e!==g,n=c.setupOptions;for(d in b)if(b.hasOwnProperty(d))if("object"!==typeof b[d]||null===b[d]||b[d]instanceof Array||b[d]instanceof RegExp)f&&ba[e]!==g?c[e][d]=b[d]:n[d]!==g?(c.setupOptions[d]=b[d],c[d]=b[d]):ba[d]===g?a=!1:c[d]instanceof Function?c[d].apply(c,
b[d]instanceof Array?b[d]:[b[d]]):c[d]=b[d];else if(ba[d]===g)a=!1;else return sa(b[d],d);return a};t=function(){function b(a){a=hb.call(a);var b=a.length;d?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(b,e){var g=b.shift(),h=[a[e]];if(d)g[h](b[0],b[1]);else g[h].apply(g,b)}var d=h.attachEvent,a={add:d?"attachEvent":"addEventListener",remove:d?"detachEvent":"removeEventListener"};return{add:function(){c(b(arguments),"add")},remove:function(){c(b(arguments),"remove")}}}();C={abort:r(function(){}),
canplay:r(function(){var b=this._s,c;if(b._html5_canplay)return!0;b._html5_canplay=!0;b._onbufferchange(0);c=b._iO.position===g||isNaN(b._iO.position)?null:b._iO.position/1E3;if(this.currentTime!==c)try{this.currentTime=c}catch(d){}b._iO._oncanplay&&b._iO._oncanplay()}),canplaythrough:r(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,b.bytesTotal,b._get_html5_duration()),b._onload(!0))}),durationchange:r(function(){var b=this._s,c;c=b._get_html5_duration();isNaN(c)||
c===b.duration||(b.durationEstimate=b.duration=c)}),ended:r(function(){this._s._onfinish()}),error:r(function(){this._s._onload(!1)}),loadeddata:r(function(){var b=this._s;b._loaded||ma||(b.duration=b._get_html5_duration())}),loadedmetadata:r(function(){}),loadstart:r(function(){this._s._onbufferchange(1)}),play:r(function(){this._s._onbufferchange(0)}),playing:r(function(){this._s._onbufferchange(0)}),progress:r(function(b){var c=this._s,d,a,f=0,f=b.target.buffered;d=b.loaded||0;var g=b.total||1;
c.buffered=[];if(f&&f.length){d=0;for(a=f.length;d<a;d++)c.buffered.push({start:1E3*f.start(d),end:1E3*f.end(d)});f=1E3*(f.end(0)-f.start(0));d=Math.min(1,f/(1E3*b.target.duration))}isNaN(d)||(c._whileloading(d,g,c._get_html5_duration()),d&&g&&d===g&&C.canplaythrough.call(this,b))}),ratechange:r(function(){}),suspend:r(function(b){var c=this._s;C.progress.call(this,b);c._onsuspend()}),stalled:r(function(){}),timeupdate:r(function(){this._s._onTimer()}),waiting:r(function(){this._s._onbufferchange(1)})};
ja=function(b){return b&&(b.type||b.url||b.serverURL)?b.serverURL||b.type&&Z(b.type)?!1:b.type?Y({type:b.type}):Y({url:b.url})||c.html5Only||b.url.match(/data\:/i):!1};ka=function(b){var e;b&&(e=ma?"about:blank":c.html5.canPlayType("audio/wav")?"data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==":"about:blank",b.src=e,b._called_unload!==g&&(b._called_load=!1));z&&(Ea=null);return e};Y=function(b){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=b.url||null;b=b.type||
null;var d=c.audioFormats,a;if(b&&c.html5[b]!==g)return c.html5[b]&&!Z(b);if(!D){D=[];for(a in d)d.hasOwnProperty(a)&&(D.push(a),d[a].related&&(D=D.concat(d[a].related)));D=new RegExp("\\.("+D.join("|")+")(\\?.*)?$","i")}(a=e?e.toLowerCase().match(D):null)&&a.length?a=a[1]:b&&(e=b.indexOf(";"),a=(-1!==e?b.substr(0,e):b).substr(6));a&&c.html5[a]!==g?e=c.html5[a]&&!Z(a):(b="audio/"+a,e=c.html5.canPlayType({type:b}),e=(c.html5[a]=e)&&c.html5[b]&&!Z(b));return e};Za=function(){function b(a){var b,d=b=
!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof Array){h=0;for(b=a.length;h<b;h++)if(c.html5[a[h]]||e.canPlayType(a[h]).match(c.html5Test))d=!0,c.html5[a[h]]=!0,c.flash[a[h]]=!!a[h].match(db);b=d}else a=e&&"function"===typeof e.canPlayType?e.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return v=c.html5.usingFlash=!0,!1;var e=Audio!==g?Ja&&10>opera.version()?new Audio(null):new Audio:null,d,a,f={},n,h;n=c.audioFormats;for(d in n)if(n.hasOwnProperty(d)&&
(a="audio/"+d,f[d]=b(n[d].type),f[a]=f[d],d.match(db)?(c.flash[d]=!0,c.flash[a]=!0):(c.flash[d]=!1,c.flash[a]=!1),n[d]&&n[d].related))for(h=n[d].related.length-1;0<=h;h--)f["audio/"+n[d].related[h]]=f[d],c.html5[n[d].related[h]]=f[d],c.flash[n[d].related[h]]=f[d];f.canPlayType=e?b:null;c.html5=x(c.html5,f);c.html5.usingFlash=Ya();v=c.html5.usingFlash;return!0};J={};T=function(){};fa=function(b){8===m&&1<b.loops&&b.stream&&(b.stream=!1);return b};ga=function(b,c){b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||
b.useWaveformData||b.useEQData)&&(b.usePolicyFile=!0);return b};pa=function(){return!1};Ta=function(b){for(var c in b)b.hasOwnProperty(c)&&"function"===typeof b[c]&&(b[c]=pa)};za=function(b){b===g&&(b=!1);(B||b)&&c.disable(b)};Ua=function(b){var e=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(e=b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+="/");b=(b&&-1!==b.lastIndexOf("/")?b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(b+="?ts="+
(new Date).getTime());return b};va=function(){m=parseInt(c.flashVersion,10);8!==m&&9!==m&&(c.flashVersion=m=8);var b=c.debugMode||c.debugFlash?"_debug.swf":".swf";c.useHTML5Audio&&!c.html5Only&&c.audioFormats.mp4.required&&9>m&&(c.flashVersion=m=9);c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===m?" (AS3/Flash 9)":" (AS2/Flash 8)");8<m?(c.defaultOptions=x(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=x(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=
new RegExp("\\.(mp3|"+fb.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==m?"flash9":"flash8"];c.movieURL=(8===m?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=8<m};Sa=function(b,c){if(!k)return!1;k._setPolling(b,c)};ya=function(){};q=this.getSoundById;L=function(){var b=[];c.debugMode&&b.push("sm2_debug");c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&
b.push("high_performance");return b.join(" ")};Ba=function(){T("fbHandler");var b=c.getMoviePercent(),e={type:"FLASHBLOCK"};if(c.html5Only)return!1;c.ok()?c.oMC&&(c.oMC.className=[L(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")):(v&&(c.oMC.className=L()+" movieContainer "+(null===b?"swf_timedout":"swf_error")),c.didFlashBlock=!0,F({type:"ontimeout",ignoreInit:!0,error:e}),K(e))};ta=function(b,c,d){y[b]===g&&(y[b]=[]);y[b].push({method:c,scope:d||null,fired:!1})};
F=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!l&&b&&!b.ignoreInit||"ontimeout"===b.type&&(c.ok()||B&&!b.ignoreInit))return!1;var e={success:b&&b.ignoreInit?c.ok():!B},d=b&&b.type?y[b.type]||[]:[],a=[],f,e=[e],g=v&&!c.ok();b.error&&(e[0].error=b.error);b=0;for(f=d.length;b<f;b++)!0!==d[b].fired&&a.push(d[b]);if(a.length)for(b=0,f=a.length;b<f;b++)a[b].scope?a[b].method.apply(a[b].scope,e):a[b].method.apply(this,e),g||(a[b].fired=!0);return!0};H=function(){h.setTimeout(function(){c.useFlashBlock&&
Ba();F();"function"===typeof c.onload&&c.onload.apply(h);c.waitForWindowLoad&&t.add(h,"load",H)},1)};Fa=function(){if(A!==g)return A;var b=!1,c=navigator,d=c.plugins,a,f=h.ActiveXObject;if(d&&d.length)(c=c.mimeTypes)&&c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description&&(b=!0);else if(f!==g&&!u.match(/MSAppHost/i)){try{a=new f("ShockwaveFlash.ShockwaveFlash")}catch(n){a=null}b=!!a}return A=b};Ya=function(){var b,
e,d=c.audioFormats;Ha&&u.match(/os (1|2|3_0|3_1)\s/i)?(c.hasHTML5=!1,c.html5Only=!0,c.oMC&&(c.oMC.style.display="none")):!c.useHTML5Audio||c.html5&&c.html5.canPlayType||(c.hasHTML5=!1);if(c.useHTML5Audio&&c.hasHTML5)for(e in X=!0,d)d.hasOwnProperty(e)&&d[e].required&&(c.html5.canPlayType(d[e].type)?c.preferFlash&&(c.flash[e]||c.flash[d[e].type])&&(b=!0):(X=!1,b=!0));c.ignoreFlash&&(b=!1,X=!0);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!b;return!c.html5Only};ia=function(b){var e,d,a=0;if(b instanceof
Array){e=0;for(d=b.length;e<d;e++)if(b[e]instanceof Object){if(c.canPlayMIME(b[e].type)){a=e;break}}else if(c.canPlayURL(b[e])){a=e;break}b[a].url&&(b[a]=b[a].url);b=b[a]}return b};Va=function(b){b._hasTimer||(b._hasTimer=!0,!na&&c.html5PollingInterval&&(null===V&&0===ha&&(V=setInterval(Xa,c.html5PollingInterval)),ha++))};Wa=function(b){b._hasTimer&&(b._hasTimer=!1,!na&&c.html5PollingInterval&&ha--)};Xa=function(){var b;if(null!==V&&!ha)return clearInterval(V),V=null,!1;for(b=c.soundIDs.length-1;0<=
b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer()};K=function(b){b=b!==g?b:{};"function"===typeof c.onerror&&c.onerror.apply(h,[{type:b.type!==g?b.type:null}]);b.fatal!==g&&b.fatal&&c.disable()};$a=function(){if(!bb||!Fa())return!1;var b=c.audioFormats,e,d;for(d in b)if(b.hasOwnProperty(d)&&("mp3"===d||"mp4"===d)&&(c.html5[d]=!1,b[d]&&b[d].related))for(e=b[d].related.length-1;0<=e;e--)c.html5[b[d].related[e]]=!1};this._setSandboxType=function(b){};
this._externalInterfaceOK=function(b){if(c.swfLoaded)return!1;c.swfLoaded=!0;oa=!1;bb&&$a();setTimeout(qa,E?100:1)};ea=function(b,e){function d(a,b){return'<param name="'+a+'" value="'+b+'" />'}if(O&&P)return!1;if(c.html5Only)return va(),c.oMC=aa(c.movieID),qa(),P=O=!0,!1;var a=e||c.url,f=c.altURL||a,h=xa(),k=L(),m=null,m=p.getElementsByTagName("html")[0],l,r,q,m=m&&m.dir&&m.dir.match(/rtl/i);b=b===g?c.id:b;va();c.url=Ua(La?a:f);e=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;
null!==c.wmode&&(u.match(/msie 8/i)||!E&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i)&&(W.push(J.spcWmode),c.wmode=null);h={name:b,id:b,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:jb+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};c.debugFlash&&(h.FlashVars="debug=1");c.wmode||delete h.wmode;if(E)a=p.createElement("div"),r=
['<object id="'+b+'" data="'+e+'" type="'+h.type+'" title="'+h.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',d("movie",e),d("AllowScriptAccess",c.allowScriptAccess),d("quality",h.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",h.FlashVars):"","</object>"].join("");else for(l in a=p.createElement("embed"),h)h.hasOwnProperty(l)&&
a.setAttribute(l,h[l]);ya();k=L();if(h=xa())if(c.oMC=aa(c.movieID)||p.createElement("div"),c.oMC.id)q=c.oMC.className,c.oMC.className=(q?q+" ":"movieContainer")+(k?" "+k:""),c.oMC.appendChild(a),E&&(l=c.oMC.appendChild(p.createElement("div")),l.className="sm2-object-box",l.innerHTML=r),P=!0;else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+k;l=k=null;c.useFlashBlock||(c.useHighPerformance?k={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(k={position:"absolute",
width:"6px",height:"6px",top:"-9999px",left:"-9999px"},m&&(k.left=Math.abs(parseInt(k.left,10))+"px")));ib&&(c.oMC.style.zIndex=1E4);if(!c.debugFlash)for(q in k)k.hasOwnProperty(q)&&(c.oMC.style[q]=k[q]);try{E||c.oMC.appendChild(a),h.appendChild(c.oMC),E&&(l=c.oMC.appendChild(p.createElement("div")),l.className="sm2-object-box",l.innerHTML=r),P=!0}catch(t){throw Error(T("domError")+" \n"+t.toString());}}return O=!0};da=function(){if(c.html5Only)return ea(),!1;if(k||!c.url)return!1;k=c.getMovie(c.id);
k||(S?(E?c.oMC.innerHTML=Aa:c.oMC.appendChild(S),S=null,O=!0):ea(c.id,c.url),k=c.getMovie(c.id));"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};I=function(){setTimeout(Ra,1E3)};ua=function(){h.setTimeout(function(){c.setup({preferFlash:!1}).reboot();c.didFlashBlock=!0;c.beginDelayedInit()},1)};Ra=function(){var b,e=!1;if(!c.url||U)return!1;U=!0;t.remove(h,"load",I);if(A&&oa&&!Ka)return!1;l||(b=c.getMoviePercent(),0<b&&100>b&&(e=!0));setTimeout(function(){b=c.getMoviePercent();
if(e)return U=!1,h.setTimeout(I,1),!1;!l&&cb&&(null===b?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&Ba():!c.useFlashBlock&&X?ua():F({type:"ontimeout",ignoreInit:!0,error:{type:"INIT_FLASHBLOCK"}}):0!==c.flashLoadTimeout&&(!c.useFlashBlock&&X?ua():za(!0)))},c.flashLoadTimeout)};ca=function(){if(Ka||!oa)return t.remove(h,"focus",ca),!0;Ka=cb=!0;U=!1;I();t.remove(h,"focus",ca);return!0};Q=function(b){if(l)return!1;if(c.html5Only)return l=!0,H(),!0;var e=!0,d;c.useFlashBlock&&c.flashLoadTimeout&&
!c.getMoviePercent()||(l=!0);d={type:!A&&v?"NO_FLASH":"INIT_TIMEOUT"};if(B||b)c.useFlashBlock&&c.oMC&&(c.oMC.className=L()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error")),F({type:"ontimeout",error:d,ignoreInit:!0}),K(d),e=!1;B||(c.waitForWindowLoad&&!ra?t.add(h,"load",H):H());return e};Qa=function(){var b,e=c.setupOptions;for(b in e)e.hasOwnProperty(b)&&(c[b]===g?c[b]=e[b]:c[b]!==e[b]&&(c.setupOptions[b]=c[b]))};qa=function(){if(l)return!1;if(c.html5Only)return l||(t.remove(h,"load",
c.beginDelayedInit),c.enabled=!0,Q()),!0;da();try{k._externalInterfaceTest(!1),Sa(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||k._disableDebug(),c.enabled=!0,c.html5Only||t.add(h,"unload",pa)}catch(b){return K({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),za(!0),Q(),!1}Q();t.remove(h,"load",c.beginDelayedInit);return!0};G=function(){if(R)return!1;R=!0;Qa();ya();!A&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});Za();!A&&v&&(W.push(J.needFlash),c.setup({flashLoadTimeout:1}));
p.removeEventListener&&p.removeEventListener("DOMContentLoaded",G,!1);da();return!0};Da=function(){"complete"===p.readyState&&(G(),p.detachEvent("onreadystatechange",Da));return!0};wa=function(){ra=!0;G();t.remove(h,"load",wa)};Fa();t.add(h,"focus",ca);t.add(h,"load",I);t.add(h,"load",wa);p.addEventListener?p.addEventListener("DOMContentLoaded",G,!1):p.attachEvent?p.attachEvent("onreadystatechange",Da):K({type:"NO_DOM2_EVENTS",fatal:!0})}if(!h||!h.document)throw Error("SoundManager requires a browser with window and document objects.");
var N=null;h.SM2_DEFER!==g&&SM2_DEFER||(N=new w);"object"===typeof module&&module&&"object"===typeof module.exports?(module.exports.SoundManager=w,module.exports.soundManager=N):"function"===typeof define&&define.amd&&define(function(){return{constructor:w,getInstance:function(g){!h.soundManager&&g instanceof Function&&(g=g(w),g instanceof w&&(h.soundManager=g));return h.soundManager}}});h.SoundManager=w;h.soundManager=N})(window);
/**
*
* SoundManager 2 buttons
* Requires SoundManager 2 Javascript API.
*
*/
function BasicMP3Player() {
	var self = this,
	pl = this,
	sm = soundManager, // soundManager instance
	isTouchDevice = (navigator.userAgent.match(/ipad|iphone/i)),
	isIE = (navigator.userAgent.match(/msie/i));
	this.excludeClass = 'button-exclude'; // CSS class for ignoring MP3 links
	this.links = [];
	this.sounds = [];
	this.soundsByURL = {};
	this.indexByURL = {};
	this.lastSound = null;
	this.soundCount = 0;

	this.config = {
		// configuration options
		playNext: true, // stop after one sound, or play through list until end
		autoPlay: false  // start playing the first sound right away
	};

	this.css = {
		// CSS class names appended to link during various states
		sDefault: 'sm2_button', // default state
		sLoading: 'sm2_loading',
		sPlaying: 'sm2_playing',
		sPaused: 'sm2_paused'
	};

  // event + DOM utils

  this.includeClass = this.css.sDefault;

  this.addEventHandler = (typeof window.addEventListener !== 'undefined' ? function(o, evtName, evtHandler) {
    return o.addEventListener(evtName,evtHandler,false);
  } : function(o, evtName, evtHandler) {
    o.attachEvent('on'+evtName,evtHandler);
  });

  this.removeEventHandler = (typeof window.removeEventListener !== 'undefined' ? function(o, evtName, evtHandler) {
    return o.removeEventListener(evtName,evtHandler,false);
  } : function(o, evtName, evtHandler) {
    return o.detachEvent('on'+evtName,evtHandler);
  });

  this.classContains = function(o,cStr) {
    return (typeof(o.className)!=='undefined'?o.className.match(new RegExp('(\\s|^)'+cStr+'(\\s|$)')):false);
  };

  this.addClass = function(o,cStr) {
    if (!o || !cStr || self.classContains(o,cStr)) {
      return false;
    }
    o.className = (o.className?o.className+' ':'')+cStr;
  };

  this.removeClass = function(o,cStr) {
    if (!o || !cStr || !self.classContains(o,cStr)) {
      return false;
    }
    o.className = o.className.replace(new RegExp('( '+cStr+')|('+cStr+')','g'),'');
  };

  this.getSoundByURL = function(sURL) {
    return (typeof self.soundsByURL[sURL] !== 'undefined' ? self.soundsByURL[sURL] : null);
  };

  this.isChildOfNode = function(o,sNodeName) {
    if (!o || !o.parentNode) {
      return false;
    }
    sNodeName = sNodeName.toLowerCase();
    do {
      o = o.parentNode;
    } while (o && o.parentNode && o.nodeName.toLowerCase() !== sNodeName);
    return (o.nodeName.toLowerCase() === sNodeName ? o : null);
  };

  this.events = {

    // handlers for sound events as they're started/stopped/played

    play: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = pl.css.sPlaying;
      pl.addClass(this._data.oLink,this._data.className);
    },

    stop: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = '';
    },

    pause: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = pl.css.sPaused;
      pl.addClass(this._data.oLink,this._data.className);
    },

    resume: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = pl.css.sPlaying;
      pl.addClass(this._data.oLink,this._data.className);      
    },

    finish: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = '';
      if (pl.config.playNext) {
        var nextLink = (pl.indexByURL[this._data.oLink.href]+1);
        if (nextLink<pl.links.length) {
          pl.handleClick({'target':pl.links[nextLink]});
        }
      }
    }

  };

  this.stopEvent = function(e) {
   if (typeof e !== 'undefined' && typeof e.preventDefault !== 'undefined') {
      e.preventDefault();
    } else if (typeof window.event !== 'undefined') {
      window.event.returnValue = false;
    }
    return false;
  };

  this.getTheDamnLink = (isIE) ? function(e) {
    // I really didn't want to have to do this.
    return (e && e.target ? e.target : window.event.srcElement);
  } : function(e) {
    return e.target;
  };

  this.handleClick = function(e) {
    // a sound link was clicked
    if (typeof e.button !== 'undefined' && e.button>1) {
      // ignore right-click
      return true;
    }
    var o = self.getTheDamnLink(e),
        sURL,
        soundURL,
        thisSound;
    if (o.nodeName.toLowerCase() !== 'a') {
      o = self.isChildOfNode(o,'a');
      if (!o) {
        return true;
      }
    }
    sURL = o.getAttribute('href');
    if (!o.href || !soundManager.canPlayLink(o) || self.classContains(o,self.excludeClass)) {
      return true; // pass-thru for non-MP3/non-links
    }
    if (!self.classContains(o,self.includeClass)) {
      return true;
    }
    sm._writeDebug('handleClick()');
    soundURL = (o.href);
    thisSound = self.getSoundByURL(soundURL);
    if (thisSound) {
      // already exists
      if (thisSound === self.lastSound) {
        // and was playing (or paused)
        thisSound.togglePause();
      } else {
        // different sound
        thisSound.togglePause(); // start playing current
        sm._writeDebug('sound different than last sound: '+self.lastSound.id);
        if (self.lastSound) {
          self.stopSound(self.lastSound);
        }
      }
    } else {
      // create sound
      thisSound = sm.createSound({
       id:'basicMP3Sound'+(self.soundCount++),
       url:soundURL,
       onplay:self.events.play,
       onstop:self.events.stop,
       onpause:self.events.pause,
       onresume:self.events.resume,
       onfinish:self.events.finish,
       type:(o.type||null)
      });
      // tack on some custom data
      thisSound._data = {
        oLink: o, // DOM node for reference within SM2 object event handlers
        className: self.css.sPlaying
      };
      self.soundsByURL[soundURL] = thisSound;
      self.sounds.push(thisSound);
      if (self.lastSound) {
        // stop last sound
        self.stopSound(self.lastSound);
      }
      thisSound.play();
    }
    self.lastSound = thisSound; // reference for next call
    return self.stopEvent(e);
  };

  this.stopSound = function(oSound) {
    soundManager.stop(oSound.id);
    if (!isTouchDevice) { // iOS 4.2+ security blocks onfinish() -> playNext() if we set a .src in-between(?)
      soundManager.unload(oSound.id);
    }
  };

  this.init = function() {
    sm._writeDebug('basicMP3Player.init()');
    var i, j,
        foundItems = 0,
        oLinks = document.getElementsByTagName('a');
    // grab all links, look for .mp3
    for (i=0, j=oLinks.length; i<j; i++) {
      if (self.classContains(oLinks[i],self.css.sDefault) && !self.classContains(oLinks[i],self.excludeClass)) {
        // self.addClass(oLinks[i],self.css.sDefault); // add default CSS decoration - good if you're lazy and want ALL MP3/playable links to do this
        self.links[foundItems] = (oLinks[i]);
        self.indexByURL[oLinks[i].href] = foundItems; // hack for indexing
        foundItems++;
      }
    }
    if (foundItems>0) {
      self.addEventHandler(document,'click',self.handleClick);
      if (self.config.autoPlay) {
        self.handleClick({target:self.links[0],preventDefault:function(){}});
      }
    }
    sm._writeDebug('basicMP3Player.init(): Found '+foundItems+' relevant items.');
  };

  this.init();
}

/**
*
* Call SoundManager 
*
*/
var basicMP3Player = null;

soundManager.setup({
    url: 'vfm-admin/swf/',
    debugMode: false,
    preferFlash: false,
    onready: function() {
         basicMP3Player = new BasicMP3Player();
    }
});