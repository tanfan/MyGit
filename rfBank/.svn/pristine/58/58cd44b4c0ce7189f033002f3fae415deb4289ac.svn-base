var progressObject=new Map();
var whichIndexByUrl=new Map();
var allindex=0;
var test;
function onDownloadFinished(url, path) {
	//				     alert(url);
	//				      alert(path);
//	alert("done");
    manageApk.openFile(url);
    	progressObject.get(allindex).parent().children("div:eq(2)").html("");
    	    	progressObject.get(allindex).parent().children("div:eq(2)").html("已下载");
}

$(function() {
$(".download>ul>li>div.install").click(function() {
	var index=0;
	alert(test);
	index=$(this).attr("index");
	progressObject.put(index,$(this).parent().children("div:eq(1)"));
//	progressObject=$(this).parent().children("div:eq(1)");
	if(index==0){
			alert(index);
		rexseeDownload.downloadWithCallback('http://gdown.baidu.com/data/wisegame/33747d448eab0340/anzhishichang_5300.apk');
		whichIndexByUrl.put("http://gdown.baidu.com/data/wisegame/33747d448eab0340/anzhishichang_5300.apk",index);
		allindex=index;
	}
	else{
		if(index==1){
				alert(index);
		rexseeDownload.downloadWithCallback("http://apk.r1.market.hiapk.com/data/upload/2014/09_01/14/me.chunyu.ChunyuDoctor_145625.apk");
			whichIndexByUrl.put("http://apk.r1.market.hiapk.com/data/upload/2014/09_01/14/me.chunyu.ChunyuDoctor_145625.apk",index);
			allindex=index;
		}
		else{
				rexseeDownload.downloadWithCallback('http://gdown.baidu.com/data/wisegame/33747d448eab0340/anzhishichang_5300.apk');
		whichIndexByUrl.put("http://gdown.baidu.com/data/wisegame/33747d448eab0340/anzhishichang_5300.apk",index);
		allindex=index;
		}
	}
//	if($(this).parent().children("div:eq(1)").is(":hidden")){
//		$(this).parent().children("div:eq(1)").show();
//	}
//	else{
//	$(this).parent().children("div:eq(1)").hide();
//	}

});
});
//function changeProgressBar(url, path, totalSize, downloadedSize){
//	
//		var progress = downloadedSize / totalSize * 100;
//		var b = progress.toFixed(0);
//		var c = b + "%"
//		progressObject.children().html(c);
//		progressObject.children().css('width', c);
//}
function onDownloadProgressChanged(url, path, totalSize, downloadedSize) {
	test=downloadedSize;
	if (downloadedSize != 0) {
	setTimeout(function changeProgressBar(){
			var progress = downloadedSize / totalSize * 100;
		var b = progress.toFixed(0);
		var c = b + "%";
			if(whichIndexByUrl.containsKey(url)){
				allindex=whichIndexByUrl.get(url);
			}
		progressObject.get(allindex).children().html(c);
		progressObject.get(allindex).children().css('width', c);
	},0);
	}
}
	function isApkExist(){
		alert(rexseeStorage.isReady());
	var path=rexseeStorage.getRoot()+"/download/anzhishichang_5300.apk"
	alert(path);
	alert(rexseeFile.exists(path));
	
}
$(function() {
	$(".header > div.button").click(function() {
		rexseeBrowser.dismiss();
	});
});
function Map() {
    this.elements = new Array();

    //获取MAP元素个数
    this.size = function() {
        return this.elements.length;
    };

    //判断MAP是否为空
    this.isEmpty = function() {
        return (this.elements.length < 1);
    };

    //删除MAP所有元素
    this.clear = function() {
        this.elements = new Array();
    };

    //向MAP中增加元素（key, value) 
    this.put = function(_key, _value) {
        this.elements.push( {
            key : _key,
            value : _value
        });
    };

    //删除指定KEY的元素，成功返回True，失败返回False
    this.remove = function(_key) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    this.elements.splice(i, 1);
                    return true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //获取指定KEY的元素值VALUE，失败返回NULL
    this.get = function(_key) {
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    return this.elements[i].value;
                }
            }
        } catch (e) {
            return null;
        }
    };

    //获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
    this.element = function(_index) {
        if (_index < 0 || _index >= this.elements.length) {
            return null;
        }
        return this.elements[_index];
    };

    //判断MAP中是否含有指定KEY的元素
    this.containsKey = function(_key) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //判断MAP中是否含有指定VALUE的元素
    this.containsValue = function(_value) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].value == _value) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //获取MAP中所有VALUE的数组（ARRAY）
    this.values = function() {
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].value);
        }
        return arr;
    };

    //获取MAP中所有KEY的数组（ARRAY）
    this.keys = function() {
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].key);
        }
        return arr;
    };
}