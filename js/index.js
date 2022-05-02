window.onload = function() {
    if (!document.getElementById) {
        return false
    }

    if (!document.getElementsByClassName) {
        return false
    }

    // banner轮播图封装
    ;(function bannerAnimation() {
        var bannerLis = document.getElementById("swiper_link")

        var bannerArr = Array.prototype.slice.call(bannerLis.children)

        var bannerSwiper = new Swiper(".bannerSwiper", {
            autoplay: {
                disableOnInteraction: false
            },
            loop: true,
            on: {
                transitionStart: function() {
                    for (var i = 0; i < bannerArr.length; i++) {
                        bannerArr[i].style.color = "#000"
                    }
                    bannerArr[this.realIndex].style.color = "#fff"
                }
            }

        })

        bannerArr.forEach(function(val, index) {
            val.onclick = function() {
                key = false
                for (var i = 0; i < bannerArr.length; i++) {
                    bannerArr[i].style.color = "#000"
                }
                this.style.color = "#fff"
                bannerSwiper.slideToLoop(index, 1000, false)
            }
        })
    }())

    ;(function carShowAnimation() {
        var carBtnLeft = document.getElementsByClassName("car_last_btn")
        var carBtnRight = document.getElementsByClassName("car_next_btn")

        carSwiper = new Swiper(".car_show_banner", {
            autoplay: {
                disableOnInteraction: false,
            },
            loop: true
        })

        carBtnLeft[0].onclick = function() {

            carSwiper.slidePrev(1000)
        }

        carBtnRight[0].onclick = function() {
            carSwiper.slideNext(1000)
        }
    }())

    ;(function scrollBox() {
        var advertise = document.getElementsByClassName("f_ele")
        var ele_arr = []
        ele_arr = Array.prototype.slice.call(advertise)
        var key = true

        window.onscroll = function() {
            ele_arr.forEach(val => {
                var distance = val.offsetTop - document.documentElement.clientHeight
               
			   
                if (document.documentElement.scrollTop >= distance) {
                    val.style.animationName = "fadeIn"
                    val.style.animationDuration = "1s"
                    val.style.animationFillMode = "both"
                } else {
                    val.style.animationName = ""
                }
            })

        }

    }())

    // bannerAnimation()
    // carShowAnimation()
    // scrollBox("advertise")
}