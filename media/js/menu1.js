//----------DHTML Menu Created using AllWebMenus PRO ver 4.1-#626---------------
//E:\GeniusWork\RC\public_html\RCImages\button\rc-cross.awm
var awmMenuName='menu';
var awmLibraryBuild=626;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmAltUrl!='' && !awmSupported) window.location.replace(awmAltUrl);
if (awmSupported){
var awmMenuPath;
if (document.layers) mpi=((document.images['awmMenuPathImg-menu'])?document.images['awmMenuPathImg-menu'].src:document.layers['xawmMenuPathImg-menu'].document.images['awmMenuPathImg-menu'].src); else mpi=document.images['awmMenuPathImg-menu'].src;
awmMenuPath=mpi.substring(0,mpi.length-16);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'", "&#39;");}
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Safari')>-1)?7:(nua.indexOf('Gecko')>-1)?2:((document.layers)?3:((nua.indexOf('Opera')>-1)?4:((nua.indexOf('Mac')>-1)?5:1)));
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmUseTrs=1;
var awmSepr=["0","","",""];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["spacer.gif",1,1,"header.gif",4,1,"crossGreen1.gif",4,30,"crossLigGreen1.gif",4,30,"sub-middle.gif",4,30,"Oversub-middle.gif",4,30,"sub-left.gif",4,30,"Oversub-left.gif",4,30,"sub-right.gif",4,30,"Oversub-right.gif",4,30];
awmCreateCSS(0,1,0,n,n,n,n,n,'none',0,'#000000',0,0);
awmCreateCSS(1,2,0,'#FBFBFE',n,2,'12px Microsoft Sans Serif',n,'none',0,'#000000','0px 20px 0px 30',1);
awmCreateCSS(0,2,0,'#FFFFFF',n,3,'bold 12px Microsoft Sans Serif',n,'none',0,'#000000','0px 20px 0px 30',1);
awmCreateCSS(1,2,0,'#FBFBFE',n,2,'12px Microsoft Sans Serif',n,'none',0,'#000000','0px 20px 0px 30',0);
awmCreateCSS(0,2,0,'#FFFFFF',n,3,'bold 12px Microsoft Sans Serif',n,'none',0,'#000000','0px 20px 0px 30',0);
awmCreateCSS(1,2,1,'#FFFFFF',n,1,'14px sans-serif',n,'none',0,'#000000','0px 0px 0px 0',4);
awmCreateCSS(0,2,1,'#FFFFFF',n,1,'14px sans-serif',n,'none',0,'#000000','0px 0px 0px 0',4);
awmCreateCSS(1,2,1,'#000000',n,1,'14px sans-serif',n,'none',0,'#000000','0px 0px 0px 0',0);
awmCreateCSS(0,2,1,'#FFFFFF',n,1,'14px sans-serif',n,'none',0,'#000000','0px 0px 0px 0',0);
awmCreateCSS(1,2,0,'#FAFAFC',n,4,'12px Microsoft Sans Serif',n,'none',0,'#000000','0px 10px 0px 20',1);
awmCreateCSS(0,2,0,'#FFFFFF',n,5,'bold 12px Microsoft Sans Serif',n,'none',0,'#000000','0px 10px 0px 20',1);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,n,n,100,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"HOME",n,n,"",n,n,n,3,3,3,n,n,n,"index.php",n,n,n,"index.php",n,0,0,2,n,n,n,2,3,3,0,0,0,0);
it=s0.addItemWithImages(3,4,4,"ABOUT THE SCHOOL",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,n,n,n,2,3,3,0,0,0,0);
var s1=it.addSubmenu(0,0,-1,6,0,0,1,0,0,1,0,n,n,100,0,2);
it=s1.addItemWithImages(5,6,6,"","","","",0,0,0,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,1,1,1,1,1,1,0,0,0,0);
it=s1.addItemWithImages(9,10,10,"Introducing RC",n,n,"",n,n,n,3,3,3,n,n,n,"introducing.html",n,n,n,"introducing.html",n,0,0,2,6,7,7,8,9,9,0,0,0,0);
it=s1.addItemWithImages(9,10,10,"Our facilities",n,n,"",n,n,n,3,3,3,n,n,n,"our_facilities.html",n,n,n,"our_facilities.html",n,0,0,2,6,7,7,8,9,9,0,0,0,0);
it=s1.addItemWithImages(9,10,10,"School Calendar",n,n,"",n,n,n,3,3,3,n,n,n,"calendar.php",n,n,n,"calendar.php",n,0,0,2,6,7,7,8,9,9,0,0,0,0);
it=s1.addItemWithImages(9,10,10,"FAQ",n,n,"",n,n,n,3,3,3,n,n,n,"FAQ.php",n,n,n,"FAQ.php",n,0,0,2,6,7,7,8,9,9,0,0,0,0);
it=s1.addItemWithImages(7,8,8,"","","","",0,0,0,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,1,1,1,1,1,1,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"ADMISSIONS",n,n,"",n,n,n,3,3,3,n,n,n,"admissions.html",n,n,n,"admissions.html",n,0,0,2,n,n,n,2,3,3,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"SCHOOL LIFE",n,n,"",n,n,n,3,3,3,n,n,n,"activities-events.html",n,n,n,"activities-events.html",n,0,0,2,n,n,n,2,3,3,0,0,0,0);
it=s0.addItemWithImages(3,4,4,"OUR PROGRAMMES",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,n,n,n,2,3,3,0,0,0,0);
var s1=it.addSubmenu(0,0,-1,6,0,0,1,0,0,1,0,n,n,100,0,4);
it=s1.addItemWithImages(5,6,6,"","","","",0,0,0,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,1,1,1,1,1,1,0,0,0,0);
it=s1.addItemWithImages(9,10,10,"Day Care Centre",n,n,"",n,n,n,3,3,3,n,n,n,"daycare.html",n,n,n,"daycare.html",n,0,0,2,6,7,7,8,9,9,0,0,0,0);
it=s1.addItemWithImages(9,10,10,"Nursery and Kindergarten",n,n,"",n,n,n,3,3,3,n,n,n,"nursery.html",n,n,n,"nursery.html",n,0,0,2,6,7,7,8,9,9,0,0,0,0);
it=s1.addItemWithImages(9,10,10,"Primary Years",n,n,"",n,n,n,3,3,3,n,n,n,"primary.html",n,n,n,"primary.html",n,0,0,2,6,7,7,8,9,9,0,0,0,0);
it=s1.addItemWithImages(9,10,10,"Secondary Years",n,n,"",n,n,n,3,3,3,n,n,n,"secondary.html",n,n,n,"secondary.html",n,0,0,2,6,7,7,8,9,9,0,0,0,0);
it=s1.addItemWithImages(9,10,10,"Other programmes",n,n,"",n,n,n,3,3,3,n,n,n,"other_programmes.html",n,n,n,"other_programmes.html",n,0,0,2,6,7,7,8,9,9,0,0,0,0);
it=s1.addItemWithImages(7,8,8,"","","","",0,0,0,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,1,1,1,1,1,1,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"CONTACT US",n,n,"",n,n,n,3,3,3,n,n,n,"contact.us.html",n,n,n,"contact.us.html",n,0,0,2,n,n,n,2,3,3,0,0,0,0);
s0.pm.buildMenu();
}}
<!--
 -->