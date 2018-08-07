
var info = [{
    title: 'today',
    data: [{
        "H_picture":"1.png",
        "username": "Chirs,Peng",
        "action_a": " add",
        "theme": " Note",
        "mainpoint": " 1/29/2018 Sprint Summary",
        "m_body": " Developers make sure that finish all new feature development and critical issue fixing and merge all code to master branch at this...",
        "time": "07:31 PM",
        "r_picture":"7.png"
    }, {
        "H_picture":"2.png",
        "username": " Peng",
        "action_a": " updated",
        "theme": " Meeting",
        "mainpoint": " KKKKK",
        "m_body": " status on 2018/03/09 11:00 AM and assign to Outlook Ying,ting ma",
        "time": "07:31 PM",
        "r_picture":"7.png"
    }, {
        "H_picture": "3.png",
        "username": "Chirs,Peng",
        "action_a": " sent",
        "theme": " Document",
        "mainpoint": " KKKKK.jpg",
        "body_picture": "6.png",
        "time": "07:31 PM",
        "r_picture":"7.png"
    } ]
},  {
    title: 'yesterday',
    data: [{
        "H_picture":"4.png",
        "username": "Chirs,Peng",
        "action_a": " received an email to:",
        "emailfrom": " allen@yhlsoft.com",
        "m_body": " Re:Now US Release plan-staging need support people to help testing Added new showstopper issuses for staging,the big issue is that mang...",
        "time": "07:31 PM",
        "r_picture":"8.png"
    }, {
        "H_picture":"4.png",
        "username": "Chirs,Peng",
        "action_a": " received an email to:",
        "emailfrom": " allen@yhlsoft.com",
        "m_body": " Now US Release plan-staging need support people to help testing Added new showstopper issuses for staging,the big issue is that mang...",
        "time": "07:31 PM",
        "r_picture":"8.png"
    }, {
        "H_picture":"4.png",
        "username": "Chirs,Peng",
        "action_a": " received an email to:",
        "emailfrom": " allen@yhlsoft.com",
        "m_body": "Now US Release plan-staging need support people to help testing Added new showstopper issuses for staging,the big issue is that mang...",
        "time": "07:31 PM",
        "r_picture":"8.png"
    }, {
        "H_picture":"4.png",
        "username": "Chirs,Peng",
        "action_a": " received an email to:",
        "emailfrom": " allen@yhlsoft.com",
        "m_body": " Now US Release plan-staging need support people to help testing Added new showstopper issuses for staging,the big issue is that mang...",
        "time": "07:31 PM",
        "r_picture":"8.png"
    }]
}]
var l_text = "Yesterday"

function fillInDlg(data, dlgRoot) {
    var $content = $('.content', dlgRoot);
    var len = info.length
    for (var i = 0; i < len; ++i) {
        var $section = $('<div class="section"><ul></ul></div>').appendTo($content);
        var $ul = $('ul', $section);
        var curData = info[i];
        for (var j = 0; j < curData.data.length; ++j) {
            var tml = '<li class="item">\
                <img class="itype" src=""></img>\
                <div class="contentarea">\
                    <p class="item_header">\
                        <span class="username"></span>\
                        <span class="action"></span>\
                        <span class="theme"></span>\
                        <span class="mainpoint"></span>\
                        <span class="emailfrom"></span>\
                        <span class="time"></span>\
                    </p>\
                    <div class="item_content">\
                    <span class="m_body"></span>\
                    <img class="c_picture"></img>\
                    </div>\
                </div><br>\
                <img class="E_picture" src=""/></img>\
            </li>'
             if  (j<curData.data.length&&j>0){
                var boderline = '<div class="line0"></div>'
                var $boderline = $(boderline).appendTo($ul)
            }
            var $dataTml = $(tml).appendTo($ul)
            var curCellData = curData.data[j]
            $(".itype",$dataTml).attr("src",curCellData.H_picture);
            $(".username", $dataTml).text(curCellData.username);
            $(".action", $dataTml).text(curCellData.action_a);
            $(".theme", $dataTml).text(curCellData.theme);
            $(".mainpoint", $dataTml).text(curCellData.mainpoint);
            $(".emailfrom", $dataTml).text(curCellData.emailfrom);
            $(".m_body", $dataTml).text(curCellData.m_body);
            $(".time", $dataTml).text(curCellData.time);
            $(".E_picture",$dataTml).attr("src",curCellData.r_picture);
            $(".c_picture",$dataTml).attr("src",curCellData.body_picture);
        }  
        if (i==0) {
            var t_line='<div class="line1"></div>\
                        <span class="line_text"></span>'
            var $cutline=$(t_line).appendTo($content);
            $(".line_text", $).text("Yesterday");
        }
    }
}
$(function () {
    fillInDlg(info, $('.dialog'))
})