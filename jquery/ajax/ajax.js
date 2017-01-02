/**
 * Created by Administrator on 2017/1/1 0001.
 */
var request = {
    report : function (nums) {
        $.ajax({
            url : 'http://phpday.cc/post.php?nums=' + nums,
            type : 'get',
            data : {
                name : 'Joy',
                age : 18,
                local : 'http://jsday.cc/',
                nums : nums,
                timeout : 1000
            },
            async : 'false',
            dataType : 'json',
            success : function (d) {
                console.log(d);
            },
            error : function () {
                console.log('error');
            }
        });
    }
};