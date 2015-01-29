/**
 * 实现javascript异步调用
 * 
 * 使用方法:
 * window.synccall(方法/方法名称,[arg1,arg2,...],回调方法);
 * 
 * @author youxz
 *
 */
(function($,$$){function synccall(){try{var argCnt=arguments.length;var params="";if(argCnt>(typeof(arguments[argCnt-1])=="function"?2:1)){for(var i=1;i<argCnt-(typeof(arguments[argCnt-1])=="function"?1:0);i++){if(params.length>0){params+=","}params=params+"arguments["+i+"]"}}var rc=undefined;if(typeof(arguments[0])=="string"){rc=eval(arguments[0]+"("+params+");")}else{if(typeof(arguments[0])=="function"){rc=eval("(arguments[0]).call(this, "+params+")")}else{alert("参数不正确!")}}if(typeof(arguments[argCnt-1])=="function"){arguments[argCnt-1](rc)}else{return rc}}catch(e){if(window.onAsyncallError!=undefined){window.onAsyncallError(e)}else{alert(e.message)}}}window[$]=function(){if(typeof(arguments[arguments.length-1])=="function"){setTimeout((function(){var args=arguments;return function(){synccall.apply(this,args)}}).apply(this,arguments),0)}else{return synccall.apply(this,arguments)}};window[$$]=function(e){alert("异步调用失败："+e)}})("asyncall","onAsyncallError");