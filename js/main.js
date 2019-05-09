$(document).ready(function(){
    setInterval(function(){
        $('#loading').addClass('active')},2000)
    
})

// 載入所有按扭頁面
const frameworkInner = document.querySelectorAll('.framework_inner');
frameworkInner.forEach(function(framework){
    framework.innerHTML = `<div class="buttonImgs" style="background: url(/images/buttonsImg/${framework.id}.jpg)">`
})

// function buttons1_inner(){
//     document.getElementById('buttons1_inner').innerHTML = '<object type="text/html" data="/html/buttons1.html" width="100%" height="100%"></object>'
// }
// function buttons2_inner(){
//     document.getElementById('buttons2_inner').innerHTML = '<object type="text/html" data="/html/buttons2_1.html" width="100%" height="100%"></object>'
// }
// function buttons3_inner(){
//     document.getElementById('buttons3_inner').innerHTML = '<object type="text/html" data="/html/buttons3.html" width="100%" height="100%"></object>'
// }
// function buttons4_inner(){
//     document.getElementById('buttons4_inner').innerHTML = '<object type="text/html" data="/html/buttons4.html" width="100%" height="100%"></object>'
// }
// function buttons5_inner(){
//     document.getElementById('buttons5_inner').innerHTML = '<object type="text/html" data="/html/buttons5.html" width="100%" height="100%"></object>'
// }
// function buttons6_inner(){
//     document.getElementById('buttons6_inner').innerHTML = '<object type="text/html" data="/html/buttons6.html" width="100%" height="100%"></object>'
// }
// function buttons7_inner(){
//     document.getElementById('buttons7_inner').innerHTML = '<object type="text/html" data="/html/buttons7.html" width="100%" height="100%"></object>'
// }
// function buttons8_inner(){
//     document.getElementById('buttons8_inner').innerHTML = '<object type="text/html" data="/html/buttons8.html" width="100%" height="100%"></object>'
// }
// function buttons9_inner(){
//     document.getElementById('buttons9_inner').innerHTML = '<object type="text/html" data="/html/buttons9.html" width="100%" height="100%"></object>'
// }
// function buttons10_inner(){
//     document.getElementById('buttons10_inner').innerHTML = '<object type="text/html" data="/html/buttons10_1.html" width="100%" height="100%"></object>'
// }
// function buttons11_inner(){
//     document.getElementById('buttons11_inner').innerHTML = '<object type="text/html" data="/html/buttons11.html" width="100%" height="100%"></object>'
// }
// function buttons12_inner(){
//     document.getElementById('buttons12_inner').innerHTML = '<object type="text/html" data="/html/buttons12.html" width="100%" height="100%"></object>'
// }
// function buttons13_inner(){
//     document.getElementById('buttons13_inner').innerHTML = '<object type="text/html" data="/html/buttons13.html" width="100%" height="100%"></object>'
// }
// function buttons14_inner(){
//     document.getElementById('buttons14_inner').innerHTML = '<object type="text/html" data="/html/buttons14.html" width="100%" height="100%"></object>'
// }
// function buttons15_inner(){
//     document.getElementById('buttons15_inner').innerHTML = '<object type="text/html" data="/html/buttons15.html" width="100%" height="100%"></object>'
// }
// function buttons16_inner(){
//     document.getElementById('buttons16_inner').innerHTML = '<object type="text/html" data="/html/buttons16.html" width="100%" height="100%"></object>'
// }
// function buttons17_inner(){
//     document.getElementById('buttons17_inner').innerHTML = '<object type="text/html" data="/html/buttons17.html" width="100%" height="100%"></object>'
// }
// function buttons18_inner(){
//     document.getElementById('buttons18_inner').innerHTML = '<object type="text/html" data="/html/buttons18.html" width="100%" height="100%"></object>'
// }
// function buttons19_inner(){
//     document.getElementById('buttons19_inner').innerHTML = '<object type="text/html" data="/html/buttons19.html" width="100%" height="100%"></object>'
// }
// function buttons20_inner(){
//     document.getElementById('buttons20_inner').innerHTML = '<object type="text/html" data="/html/buttons20.html" width="100%" height="100%"></object>'
// }
// function buttons21_inner(){
//     document.getElementById('buttons21_inner').innerHTML = '<object type="text/html" data="/html/buttons21.html" width="100%" height="100%"></object>'
// }
// buttons1_inner()
// buttons2_inner()
// buttons3_inner()
// buttons4_inner()
// buttons5_inner()
// buttons6_inner()
// buttons7_inner()
// buttons8_inner()
// buttons9_inner()
// buttons10_inner()
// buttons11_inner()
// buttons12_inner()
// buttons13_inner()
// buttons14_inner()
// buttons15_inner()
// buttons16_inner()
// buttons17_inner()
// buttons18_inner()
// buttons19_inner()
// buttons20_inner()
// buttons21_inner()

// function simulation1_inner(){
//     document.getElementById('simulation1_inner').innerHTML = '<object type="text/html" data="/html/simulation1.html" width="100%" height="100%"></object>'
// }
// function simulation2_inner(){
//     document.getElementById('simulation2_inner').innerHTML = '<object type="text/html" data="/html/simulation2_1.html" width="100%" height="100%"></object>'
// }
// function simulation3_inner(){
//     document.getElementById('simulation3_inner').innerHTML = '<object type="text/html" data="/html/simulation3.html" width="100%" height="100%"></object>'
// }
// function simulation4_inner(){
//     document.getElementById('simulation4_inner').innerHTML = '<object type="text/html" data="/html/simulation4.html" width="100%" height="100%"></object>'
// }
// function simulation5_inner(){
//     document.getElementById('simulation5_inner').innerHTML = '<object type="text/html" data="/html/simulation5.html" width="100%" height="100%"></object>'
// }
// function simulation6_inner(){
//     document.getElementById('simulation6_inner').innerHTML = '<object type="text/html" data="/html/simulation6.html" width="100%" height="100%"></object>'
// }
// function simulation7_inner(){
//     document.getElementById('simulation7_inner').innerHTML = '<object type="text/html" data="/html/simulation7.html" width="100%" height="100%"></object>'
// }
// function simulation8_inner(){
//     document.getElementById('simulation8_inner').innerHTML = '<object type="text/html" data="/html/simulation8.html" width="100%" height="100%"></object>'
// }
// function simulation9_inner(){
//     document.getElementById('simulation9_inner').innerHTML = '<object type="text/html" data="/html/simulation9.html" width="100%" height="100%"></object>'
// }
// function simulation10_inner(){
//     document.getElementById('simulation10_inner').innerHTML = '<object type="text/html" data="/html/simulation10.html" width="100%" height="100%"></object>'
// }
// simulation1_inner()
// simulation2_inner()
// simulation3_inner()
// simulation4_inner()
// simulation5_inner()
// simulation6_inner()
// simulation7_inner()
// simulation8_inner()
// simulation9_inner()
// simulation10_inner()

// function special1_inner(){
//     document.getElementById('special1_inner').innerHTML = '<object type="text/html" data="/html/special1.html" width="100%" height="100%"></object>'
// }
// function special2_inner(){
//     document.getElementById('special2_inner').innerHTML = '<object type="text/html" data="/html/special2.html" width="100%" height="100%"></object>'
// }
// function special3_inner(){
//     document.getElementById('special3_inner').innerHTML = '<object type="text/html" data="/html/special3.html" width="100%" height="100%"></object>'
// }
// function special4_inner(){
//     document.getElementById('special4_inner').innerHTML = '<object type="text/html" data="/html/special4.html" width="100%" height="100%"></object>'
// }
// function special5_inner(){
//     document.getElementById('special5_inner').innerHTML = '<object type="text/html" data="/html/special5.html" width="100%" height="100%"></object>'
// }
// function special6_inner(){
//     document.getElementById('special6_inner').innerHTML = '<object type="text/html" data="/html/special6.html" width="100%" height="100%"></object>'
// }
// function special7_inner(){
//     document.getElementById('special7_inner').innerHTML = '<object type="text/html" data="/html/special7.html" width="100%" height="100%"></object>'
// }
// function special8_inner(){
//     document.getElementById('special8_inner').innerHTML = '<object type="text/html" data="/html/special8.html" width="100%" height="100%"></object>'
// }
// function special9_inner(){
//     document.getElementById('special9_inner').innerHTML = '<object type="text/html" data="/html/special9.html" width="100%" height="100%"></object>'
// }
// function special11_inner(){
//     document.getElementById('special11_inner').innerHTML = '<object type="text/html" data="/html/special11.html" width="100%" height="100%"></object>'
// }
// special1_inner()
// special2_inner()
// special3_inner()
// special4_inner()
// special5_inner()
// special6_inner()
// special7_inner()
// special8_inner()
// special9_inner()
// // special10_inner()
// special11_inner()

// function toggle1_inner(){
//     document.getElementById('toggle1_inner').innerHTML = '<object type="text/html" data="/html/toggle1.html" width="100%" height="100%"></object>'
// }
// function toggle2_inner(){
//     document.getElementById('toggle2_inner').innerHTML = '<object type="text/html" data="/html/toggle2.html" width="100%" height="100%"></object>'
// }
// function toggle3_inner(){
//     document.getElementById('toggle3_inner').innerHTML = '<object type="text/html" data="/html/toggle3.html" width="100%" height="100%"></object>'
// }
// function toggle4_inner(){
//     document.getElementById('toggle4_inner').innerHTML = '<object type="text/html" data="/html/toggle4.html" width="100%" height="100%"></object>'
// }
// function toggle5_inner(){
//     document.getElementById('toggle5_inner').innerHTML = '<object type="text/html" data="/html/toggle5.html" width="100%" height="100%"></object>'
// }
// function toggle6_inner(){
//     document.getElementById('toggle6_inner').innerHTML = '<object type="text/html" data="/html/toggle6.html" width="100%" height="100%"></object>'
// }
// function toggle7_inner(){
//     document.getElementById('toggle7_inner').innerHTML = '<object type="text/html" data="/html/toggle7.html" width="100%" height="100%"></object>'
// }
// function toggle8_inner(){
//     document.getElementById('toggle8_inner').innerHTML = '<object type="text/html" data="/html/toggle8.html" width="100%" height="100%"></object>'
// }
// function toggle9_inner(){
//     document.getElementById('toggle9_inner').innerHTML = '<object type="text/html" data="/html/toggle9.html" width="100%" height="100%"></object>'
// }
// function toggle10_inner(){
//     document.getElementById('toggle10_inner').innerHTML = '<object type="text/html" data="/html/toggle10.html" width="100%" height="100%"></object>'
// }
// function toggle11_inner(){
//     document.getElementById('toggle11_inner').innerHTML = '<object type="text/html" data="/html/toggle11.html" width="100%" height="100%"></object>'
// }
// toggle1_inner()
// toggle2_inner()
// toggle3_inner()
// toggle4_inner()
// toggle5_inner()
// toggle6_inner()
// toggle7_inner()
// toggle8_inner()
// toggle9_inner()
// toggle10_inner()
// toggle11_inner()

//-----------------------------------------------------------------------------------------------------------------------------------------------
var s = skrollr.init();  //初始化skrollr.js

$(window).scroll(function(){  //回到頂端按鈕 ( 出現 / 消失 )
    if ($(window).scrollTop() > 0){
        $('#header').css('opacity','1')
        $('#topBtn').addClass('active')
    }else{
        $('#header').css('opacity','0.3')
        $('#topBtn').removeClass('active')
    }
})

$('#topBtnClick').click(function(){  //回到頂端按鈕
    $('html,body').animate({
        scrollTop: 0
    },500)
})


$('.navBtn').click(function(){
    $(this).addClass('active')
    $(this).parent().siblings().find('.navBtn').removeClass('active')
})

$('.buttonsTypeBtn').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})


// ---------------------------------------------------------------------------------
//Nav按鈕與頁面切換
$('#navButtons').click(function(){                //nav'Buttons'按鈕
    $(this).addClass('active')
    $(this).parent().siblings().find('.navBtn').removeClass('active')

    $('#buttons_standard').addClass('active')
    $('#buttons_standard').siblings().removeClass('active')

    $('#buttonsTypeBtn_standard').addClass('active')
    $('#buttonsTypeBtn_standard').siblings().removeClass('active')

    $('#progressBar_buttons_standard').addClass('active')
    $('#progressBar_buttons_standard').siblings().removeClass('active')

    $('#buttonTypes').removeClass('active')
    $('html,body').animate({
        scrollTop: 0
    },500)
})

$('#navToggleSwitch').click(function(){            //nav'Toggle switch'按鈕
    $(this).addClass('active')
    $(this).parent().siblings().find('.navBtn').removeClass('active')

    $('#toggleSwitch').addClass('active')
    $('#toggleSwitch').siblings().removeClass('active')

    $('#progressBar_toggle').addClass('active')
    $('#progressBar_toggle').siblings().removeClass('active')

    $('#buttonTypes').addClass('active')
    $('html,body').animate({
        scrollTop: 0
    },500)
})


// ---------------------------------------------------------------------------------
$('#buttonsTypeBtn_standard').click(function(){          //右側'Standard'按鈕
    $('#buttonsTypeBtn_standard').addClass('active')
    $('#buttonsTypeBtn_standard').siblings().removeClass('active')

    $('#buttons_standard').addClass('active')
    $('#buttons_standard').siblings().removeClass('active')

    $('#progressBar_buttons_standard').addClass('active')
    $('#progressBar_buttons_standard').siblings().removeClass('active')

    $('html,body').animate({
        scrollTop: 0
    },500)
})

$('#buttonsTypeBtn_simulation').click(function(){         //右側'Simulation'按鈕
    $('#buttonsTypeBtn_simulation').addClass('active')
    $('#buttonsTypeBtn_simulation').siblings().removeClass('active')

    $('#buttons_simulation').addClass('active')
    $('#buttons_simulation').siblings().removeClass('active')

    $('#progressBar_buttons_simulation').addClass('active')
    $('#progressBar_buttons_simulation').siblings().removeClass('active')

    $('html,body').animate({
        scrollTop: 0
    },500)
})

$('#buttonsTypeBtn_special').click(function(){         //右側'Special'按鈕
    $('#buttonsTypeBtn_special').addClass('active')
    $('#buttonsTypeBtn_special').siblings().removeClass('active')

    $('#buttons_special').addClass('active')
    $('#buttons_special').siblings().removeClass('active')

    $('#progressBar_buttons_special').addClass('active')
    $('#progressBar_buttons_special').siblings().removeClass('active')

    $('html,body').animate({
        scrollTop: 0
    },500)
})

// ---------------------------------------------------------------------------------
// 左側進度條按紐連結
$('#progressBar_standard_buttons1').click(function(){                         //Buttons_standard
    $('html,body').animate({scrollTop:$('#buttons1').offset().top - 200},500)
})
$('#progressBar_standard_buttons2').click(function(){
    $('html,body').animate({scrollTop:$('#buttons2').offset().top - 190},500)
})
$('#progressBar_standard_buttons3').click(function(){
    $('html,body').animate({scrollTop:$('#buttons3').offset().top - 200},500)
})
$('#progressBar_standard_buttons4').click(function(){
    $('html,body').animate({scrollTop:$('#buttons4').offset().top - 200},500)
})
$('#progressBar_standard_buttons5').click(function(){
    $('html,body').animate({scrollTop:$('#buttons5').offset().top - 200},500)
})
$('#progressBar_standard_buttons6').click(function(){
    $('html,body').animate({scrollTop:$('#buttons6').offset().top - 200},500)
})
$('#progressBar_standard_buttons7').click(function(){
    $('html,body').animate({scrollTop:$('#buttons7').offset().top - 200},500)
})
$('#progressBar_standard_buttons8').click(function(){
    $('html,body').animate({scrollTop:$('#buttons8').offset().top - 200},500)
})
$('#progressBar_standard_buttons9').click(function(){
    $('html,body').animate({scrollTop:$('#buttons9').offset().top - 200},500)
})
$('#progressBar_standard_buttons10').click(function(){
    $('html,body').animate({scrollTop:$('#buttons10').offset().top - 200},500)
})
$('#progressBar_standard_buttons11').click(function(){
    $('html,body').animate({scrollTop:$('#buttons11').offset().top - 200},500)
})
$('#progressBar_standard_buttons12').click(function(){
    $('html,body').animate({scrollTop:$('#buttons12').offset().top - 200},500)
})
$('#progressBar_standard_buttons13').click(function(){
    $('html,body').animate({scrollTop:$('#buttons13').offset().top - 200},500)
})
$('#progressBar_standard_buttons14').click(function(){
    $('html,body').animate({scrollTop:$('#buttons14').offset().top - 200},500)
})
$('#progressBar_standard_buttons15').click(function(){
    $('html,body').animate({scrollTop:$('#buttons15').offset().top - 200},500)
})
$('#progressBar_standard_buttons16').click(function(){
    $('html,body').animate({scrollTop:$('#buttons16').offset().top - 200},500)
})
$('#progressBar_standard_buttons17').click(function(){
    $('html,body').animate({scrollTop:$('#buttons17').offset().top - 200},500)
})
$('#progressBar_standard_buttons18').click(function(){
    $('html,body').animate({scrollTop:$('#buttons18').offset().top - 200},500)
})
$('#progressBar_standard_buttons19').click(function(){
    $('html,body').animate({scrollTop:$('#buttons19').offset().top - 200},500)
})
$('#progressBar_standard_buttons20').click(function(){
    $('html,body').animate({scrollTop:$('#buttons20').offset().top - 200},500)
})
$('#progressBar_standard_buttons21').click(function(){
    $('html,body').animate({scrollTop:$('#buttons21').offset().top - 200},500)
})


$('#progressBar_buttons_simulation1').click(function(){                       //Buttons_simulation
    $('html,body').animate({scrollTop:$('#simulation1').offset().top - 200},500)
})
$('#progressBar_buttons_simulation2').click(function(){
    $('html,body').animate({scrollTop:$('#simulation2').offset().top - 200},500)
})
$('#progressBar_buttons_simulation3').click(function(){
    $('html,body').animate({scrollTop:$('#simulation3').offset().top - 200},500)
})
$('#progressBar_buttons_simulation4').click(function(){
    $('html,body').animate({scrollTop:$('#simulation4').offset().top - 200},500)
})
$('#progressBar_buttons_simulation5').click(function(){
    $('html,body').animate({scrollTop:$('#simulation5').offset().top - 200},500)
})
$('#progressBar_buttons_simulation6').click(function(){
    $('html,body').animate({scrollTop:$('#simulation6').offset().top - 200},500)
})
$('#progressBar_buttons_simulation7').click(function(){
    $('html,body').animate({scrollTop:$('#simulation7').offset().top - 200},500)
})
$('#progressBar_buttons_simulation8').click(function(){
    $('html,body').animate({scrollTop:$('#simulation8').offset().top - 200},500)
})
$('#progressBar_buttons_simulation9').click(function(){
    $('html,body').animate({scrollTop:$('#simulation9').offset().top - 200},500)
})
$('#progressBar_buttons_simulation10').click(function(){
    $('html,body').animate({scrollTop:$('#simulation10').offset().top - 200},500)
})


$('#progressBar_buttons_special1').click(function(){                       //Special
    $('html,body').animate({scrollTop:$('#special1').offset().top - 200},500)
})
$('#progressBar_buttons_special2').click(function(){
    $('html,body').animate({scrollTop:$('#special2').offset().top - 200},500)
})
$('#progressBar_buttons_special3').click(function(){
    $('html,body').animate({scrollTop:$('#special3').offset().top - 200},500)
})
$('#progressBar_buttons_special4').click(function(){
    $('html,body').animate({scrollTop:$('#special4').offset().top - 200},500)
})
$('#progressBar_buttons_special5').click(function(){
    $('html,body').animate({scrollTop:$('#special5').offset().top - 200},500)
})
$('#progressBar_buttons_special6').click(function(){
    $('html,body').animate({scrollTop:$('#special6').offset().top - 200},500)
})
$('#progressBar_buttons_special7').click(function(){
    $('html,body').animate({scrollTop:$('#special7').offset().top - 200},500)
})
$('#progressBar_buttons_special8').click(function(){
    $('html,body').animate({scrollTop:$('#special8').offset().top - 200},500)
})
$('#progressBar_buttons_special9').click(function(){
    $('html,body').animate({scrollTop:$('#special9').offset().top - 200},500)
})
$('#progressBar_buttons_special10').click(function(){
    $('html,body').animate({scrollTop:$('#special10').offset().top - 200},500)
})
$('#progressBar_buttons_special11').click(function(){
    $('html,body').animate({scrollTop:$('#special11').offset().top - 200},500)
})


$('#progressBar_toggle1').click(function(){                                   //Toggle
    $('html,body').animate({scrollTop:$('#toggle1').offset().top - 200},500)
})
$('#progressBar_toggle2').click(function(){
    $('html,body').animate({scrollTop:$('#toggle2').offset().top - 200},500)
})
$('#progressBar_toggle3').click(function(){
    $('html,body').animate({scrollTop:$('#toggle3').offset().top - 200},500)
})
$('#progressBar_toggle4').click(function(){
    $('html,body').animate({scrollTop:$('#toggle4').offset().top - 200},500)
})
$('#progressBar_toggle5').click(function(){
    $('html,body').animate({scrollTop:$('#toggle5').offset().top - 200},500)
})
$('#progressBar_toggle6').click(function(){
    $('html,body').animate({scrollTop:$('#toggle6').offset().top - 200},500)
})
$('#progressBar_toggle7').click(function(){
    $('html,body').animate({scrollTop:$('#toggle7').offset().top - 200},500)
})
$('#progressBar_toggle8').click(function(){
    $('html,body').animate({scrollTop:$('#toggle8').offset().top - 200},500)
})
$('#progressBar_toggle9').click(function(){
    $('html,body').animate({scrollTop:$('#toggle9').offset().top - 200},500)
})
$('#progressBar_toggle10').click(function(){
    $('html,body').animate({scrollTop:$('#toggle10').offset().top - 200},500)
})
$('#progressBar_toggle11').click(function(){
    $('html,body').animate({scrollTop:$('#toggle11').offset().top - 200},500)
})