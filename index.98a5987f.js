function e(e,t){var n=document.createElement(e);return n.textContent=t,n}var t=function(t,n,i,a,o){var s=document.documentElement,c=document.createElement("div"),d=e("h2",i),l=e("p",a);d.classList.add("title"),c.classList.add("notification",o),c.append(d),c.append(l),c.style.top="".concat(t,"px"),c.style.right="".concat(n,"px"),s.append(c),setTimeout(function(){return c.style.display="none"},2e3)};t(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),t(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),t(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.98a5987f.js.map
