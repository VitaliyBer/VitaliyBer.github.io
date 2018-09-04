"use strict";var pageElem=document.querySelector(".page"),Keycode={ESC:27,ENTER:13},heroElem=pageElem.querySelector(".hero");if(heroElem){var heroSliderVisibleElem,dataColorToBackground={mint:"page--bg-mint",blue:"page--bg-blue",choco:"page--bg-choco"},heroSliderElems=heroElem.querySelectorAll(".hero__slider"),heroTogglesElem=pageElem.querySelector(".hero__toggles"),heroTogglesElems=Array.prototype.slice.call(heroTogglesElem.querySelectorAll(".hero__toggle")),onSliderAnimationStart=function(e){"slider-slide"===e.animationName&&(pageElem.className="page "+dataColorToBackground[e.target.dataset.color])};heroSliderElems.forEach(function(e){e.addEventListener("animationstart",onSliderAnimationStart)}),heroTogglesElems.forEach(function(r,l){r.addEventListener("click",function(){!1===r.classList.contains("hero__toggle--current")&&(r.classList.remove("hero__toggle--current"),(heroSliderVisibleElem=heroElem.querySelector(".hero__slider--visible")).classList.add("hero__slider--disappear"),heroSliderVisibleElem.addEventListener("animationend",function(e){if("disappear"===e.animationName){for(var o=0;o<heroSliderElems.length;o+=1)heroSliderElems[o].classList.remove("hero__slider--disappear"),heroSliderElems[o].classList.remove("hero__slider--visible"),heroTogglesElems[o].classList.remove("hero__toggle--current");heroSliderElems[l].classList.add("hero__slider--visible"),r.classList.add("hero__toggle--current")}}))})})}var addressBtnElem=pageElem.querySelector(".address__btn");if(addressBtnElem){var overlayElem=pageElem.querySelector(".overlay"),feedbackPopupElem=pageElem.querySelector(".feedback"),feedbackPopupFirstInputElem=feedbackPopupElem.querySelector("input"),feedbackCloseElem=feedbackPopupElem.querySelector(".feedback__close"),onPopupEscPress=function(e){e.Keycode===Keycode.ESC&&closePopup()},onAddressBtnClick=function(e){e.preventDefault(),overlayElem.classList.remove("overlay--hidden"),feedbackPopupElem.classList.remove("feedback--hidden"),feedbackPopupFirstInputElem.focus(),document.addEventListener("keydown",onPopupEscPress)},closePopup=function(){overlayElem.classList.add("overlay--hidden"),feedbackPopupElem.classList.add("feedback--hidden"),document.removeEventListener("keydown",onPopupEscPress)};addressBtnElem.addEventListener("click",onAddressBtnClick),feedbackCloseElem.addEventListener("click",function(){closePopup()})}var mapElem=pageElem.querySelector("#map");if(mapElem){var renderMap=function(){var e=new ymaps.Map("map",{center:[59.9387,30.3247],zoom:18,controls:[]}),o=new ymaps.Placemark([59.93863,30.32305],{hintContent:"Большая Конюшенная 19/8, Санкт-Петербург",balloonContent:"Мороженое Глэсси"},{iconLayout:"default#image",iconImageHref:"img/decorative/pin-and-shadow.png",iconImageSize:[218,142],iconImageOffset:[-40,-132]});e.geoObjects.add(o)};ymaps.ready(renderMap)}