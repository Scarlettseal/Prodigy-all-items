javascript:(function()%7Bjavascript%3A(function()%7B%0A%20%20%2F%2F%20Password%20Protection%0A%20%20var%20pw%20%3D%20prompt(%22Enter%20password%20to%20access%20multi.net%3A%22)%3B%0A%20%20if(pw%20!%3D%3D%20%22Scar11%22)%20%7B%0A%20%20%20%20alert(%22Incorrect%20password.%22)%3B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%20%20%0A%20%20%2F***%20Utility%20Functions%20***%2F%0A%20%20function%20escapeHtml(text)%7B%0A%20%20%20%20return%20text.replace(%2F%3C%2Fg%2C%20%22%26lt%3B%22).replace(%2F%3E%2Fg%2C%20%22%26gt%3B%22)%3B%0A%20%20%7D%0A%20%20%0A%20%20%2F%2F%20Insert%20keyframes%20for%20live%20background%20animation%20(red%20to%20black)%0A%20%20var%20styleElem%20%3D%20document.createElement(%22style%22)%3B%0A%20%20styleElem.innerHTML%20%3D%20%22%5C%0A%20%20%20%20%40keyframes%20redToBlack%20%7B%5C%0A%20%20%20%20%20%200%25%20%7B%20background-color%3A%20red%3B%20%7D%5C%0A%20%20%20%20%20%20100%25%20%7B%20background-color%3A%20black%3B%20%7D%5C%0A%20%20%20%20%7D%22%3B%0A%20%20document.head.appendChild(styleElem)%3B%0A%20%20%0A%20%20%2F%2F%20Throw%20Children%3A%20Animates%20all%20document.body%20children%20(except%20the%20GUI)%20offscreen%0A%20%20function%20throwChildren()%7B%0A%20%20%20%20var%20children%20%3D%20Array.from(document.body.children).filter(function(child)%7B%0A%20%20%20%20%20%20return%20child.id%20!%3D%3D%20%22coolToolsContainer%22%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20children.forEach(function(child)%7B%0A%20%20%20%20%20%20child.style.transition%20%3D%20%22transform%201s%20ease-out%2C%20opacity%201s%20ease-out%22%3B%0A%20%20%20%20%20%20var%20randomX%20%3D%20(Math.random()%20*%20window.innerWidth%20*%202)%20-%20window.innerWidth%3B%0A%20%20%20%20%20%20var%20randomY%20%3D%20(Math.random()%20*%20window.innerHeight%20*%202)%20-%20window.innerHeight%3B%0A%20%20%20%20%20%20child.style.transform%20%3D%20%22translate(%22%20%2B%20randomX%20%2B%20%22px%2C%20%22%20%2B%20randomY%20%2B%20%22px)%20rotate(%22%20%2B%20(Math.random()%20*%20360)%20%2B%20%22deg)%22%3B%0A%20%20%20%20%20%20child.style.opacity%20%3D%20%220%22%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%20%20%0A%20%20%2F%2F%20Cookie%20Editor%3A%20Opens%20a%20modal%20that%20lets%20you%20update%20or%20delete%20cookies.%0A%20%20function%20openCookieEditor()%7B%0A%20%20%20%20var%20modal%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20modal.id%20%3D%20%22cookieEditorModal%22%3B%0A%20%20%20%20modal.style.position%20%3D%20%22fixed%22%3B%0A%20%20%20%20modal.style.top%20%3D%20%220%22%3B%0A%20%20%20%20modal.style.left%20%3D%20%220%22%3B%0A%20%20%20%20modal.style.width%20%3D%20%22100%25%22%3B%0A%20%20%20%20modal.style.height%20%3D%20%22100%25%22%3B%0A%20%20%20%20modal.style.backgroundColor%20%3D%20%22rgba(0%2C0%2C0%2C0.7)%22%3B%0A%20%20%20%20modal.style.zIndex%20%3D%20%22100001%22%3B%0A%20%20%20%20modal.style.display%20%3D%20%22flex%22%3B%0A%20%20%20%20modal.style.alignItems%20%3D%20%22center%22%3B%0A%20%20%20%20modal.style.justifyContent%20%3D%20%22center%22%3B%0A%20%20%20%20%0A%20%20%20%20var%20editor%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20editor.style.background%20%3D%20%22rgba(10%2C10%2C30%2C0.9)%22%3B%0A%20%20%20%20editor.style.backdropFilter%20%3D%20%22blur(8px)%22%3B%0A%20%20%20%20editor.style.padding%20%3D%20%2220px%22%3B%0A%20%20%20%20editor.style.borderRadius%20%3D%20%2210px%22%3B%0A%20%20%20%20editor.style.maxHeight%20%3D%20%2280%25%22%3B%0A%20%20%20%20editor.style.overflowY%20%3D%20%22auto%22%3B%0A%20%20%20%20editor.style.width%20%3D%20%22400px%22%3B%0A%20%20%20%20%0A%20%20%20%20var%20title%20%3D%20document.createElement(%22h2%22)%3B%0A%20%20%20%20title.innerText%20%3D%20%22Cookie%20Editor%22%3B%0A%20%20%20%20title.style.color%20%3D%20%22%23eee%22%3B%0A%20%20%20%20title.style.marginBottom%20%3D%20%2215px%22%3B%0A%20%20%20%20editor.appendChild(title)%3B%0A%20%20%20%20%0A%20%20%20%20var%20cookieList%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20var%20cookies%20%3D%20document.cookie.split(%22%3B%20%22)%3B%0A%20%20%20%20if(cookies.length%20%3D%3D%3D%201%20%26%26%20cookies%5B0%5D%20%3D%3D%3D%20%22%22)%20%7B%20cookies%20%3D%20%5B%5D%3B%20%7D%0A%20%20%20%20cookies.forEach(function(cookieStr)%7B%0A%20%20%20%20%20%20var%20parts%20%3D%20cookieStr.split(%22%3D%22)%3B%0A%20%20%20%20%20%20var%20name%20%3D%20parts%5B0%5D%3B%0A%20%20%20%20%20%20var%20value%20%3D%20parts.slice(1).join(%22%3D%22)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20var%20cookieDiv%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20%20%20cookieDiv.style.border%20%3D%20%221px%20solid%20rgba(255%2C255%2C255%2C0.2)%22%3B%0A%20%20%20%20%20%20cookieDiv.style.padding%20%3D%20%225px%22%3B%0A%20%20%20%20%20%20cookieDiv.style.marginBottom%20%3D%20%225px%22%3B%0A%20%20%20%20%20%20cookieDiv.style.borderRadius%20%3D%20%225px%22%3B%0A%20%20%20%20%20%20cookieDiv.style.display%20%3D%20%22flex%22%3B%0A%20%20%20%20%20%20cookieDiv.style.alignItems%20%3D%20%22center%22%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20var%20nameSpan%20%3D%20document.createElement(%22span%22)%3B%0A%20%20%20%20%20%20nameSpan.innerText%20%3D%20name%3B%0A%20%20%20%20%20%20nameSpan.style.fontWeight%20%3D%20%22bold%22%3B%0A%20%20%20%20%20%20nameSpan.style.color%20%3D%20%22%23eee%22%3B%0A%20%20%20%20%20%20cookieDiv.appendChild(nameSpan)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20var%20valueInput%20%3D%20document.createElement(%22input%22)%3B%0A%20%20%20%20%20%20valueInput.type%20%3D%20%22text%22%3B%0A%20%20%20%20%20%20valueInput.value%20%3D%20value%3B%0A%20%20%20%20%20%20valueInput.style.width%20%3D%20%2270%25%22%3B%0A%20%20%20%20%20%20valueInput.style.marginLeft%20%3D%20%2210px%22%3B%0A%20%20%20%20%20%20valueInput.style.padding%20%3D%20%223px%22%3B%0A%20%20%20%20%20%20cookieDiv.appendChild(valueInput)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20var%20updateBtn%20%3D%20document.createElement(%22button%22)%3B%0A%20%20%20%20%20%20updateBtn.innerText%20%3D%20%22Update%22%3B%0A%20%20%20%20%20%20updateBtn.style.marginLeft%20%3D%20%2210px%22%3B%0A%20%20%20%20%20%20updateBtn.style.padding%20%3D%20%223px%206px%22%3B%0A%20%20%20%20%20%20updateBtn.style.border%20%3D%20%22none%22%3B%0A%20%20%20%20%20%20updateBtn.style.background%20%3D%20%22rgba(0%2C128%2C0%2C0.7)%22%3B%0A%20%20%20%20%20%20updateBtn.style.color%20%3D%20%22%23fff%22%3B%0A%20%20%20%20%20%20updateBtn.style.borderRadius%20%3D%20%223px%22%3B%0A%20%20%20%20%20%20updateBtn.onclick%20%3D%20function()%7B%0A%20%20%20%20%20%20%20%20var%20newVal%20%3D%20valueInput.value%3B%0A%20%20%20%20%20%20%20%20document.cookie%20%3D%20name%20%2B%20%22%3D%22%20%2B%20newVal%20%2B%20%22%3B%20path%3D%2F%22%3B%0A%20%20%20%20%20%20%20%20alert(%22Cookie%20updated.%22)%3B%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20cookieDiv.appendChild(updateBtn)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20var%20deleteBtn%20%3D%20document.createElement(%22button%22)%3B%0A%20%20%20%20%20%20deleteBtn.innerText%20%3D%20%22Delete%22%3B%0A%20%20%20%20%20%20deleteBtn.style.marginLeft%20%3D%20%225px%22%3B%0A%20%20%20%20%20%20deleteBtn.style.padding%20%3D%20%223px%206px%22%3B%0A%20%20%20%20%20%20deleteBtn.style.border%20%3D%20%22none%22%3B%0A%20%20%20%20%20%20deleteBtn.style.background%20%3D%20%22rgba(220%2C53%2C69%2C0.8)%22%3B%0A%20%20%20%20%20%20deleteBtn.style.color%20%3D%20%22%23fff%22%3B%0A%20%20%20%20%20%20deleteBtn.style.borderRadius%20%3D%20%223px%22%3B%0A%20%20%20%20%20%20deleteBtn.onclick%20%3D%20function()%7B%0A%20%20%20%20%20%20%20%20document.cookie%20%3D%20name%20%2B%20%22%3D%3B%20expires%3DThu%2C%2001%20Jan%201970%2000%3A00%3A00%20UTC%3B%20path%3D%2F%3B%22%3B%0A%20%20%20%20%20%20%20%20cookieDiv.remove()%3B%0A%20%20%20%20%20%20%20%20alert(%22Cookie%20deleted.%22)%3B%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20cookieDiv.appendChild(deleteBtn)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20cookieList.appendChild(cookieDiv)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20editor.appendChild(cookieList)%3B%0A%20%20%20%20%0A%20%20%20%20var%20closeBtn%20%3D%20document.createElement(%22button%22)%3B%0A%20%20%20%20closeBtn.innerText%20%3D%20%22Close%22%3B%0A%20%20%20%20closeBtn.style.marginTop%20%3D%20%2210px%22%3B%0A%20%20%20%20closeBtn.style.padding%20%3D%20%225px%2010px%22%3B%0A%20%20%20%20closeBtn.style.border%20%3D%20%22none%22%3B%0A%20%20%20%20closeBtn.style.background%20%3D%20%22rgba(220%2C53%2C69%2C0.8)%22%3B%0A%20%20%20%20closeBtn.style.color%20%3D%20%22%23fff%22%3B%0A%20%20%20%20closeBtn.style.borderRadius%20%3D%20%225px%22%3B%0A%20%20%20%20closeBtn.style.cursor%20%3D%20%22pointer%22%3B%0A%20%20%20%20closeBtn.onclick%20%3D%20function()%7B%20modal.remove()%3B%20%7D%3B%0A%20%20%20%20editor.appendChild(closeBtn)%3B%0A%20%20%20%20%0A%20%20%20%20modal.appendChild(editor)%3B%0A%20%20%20%20document.body.appendChild(modal)%3B%0A%20%20%7D%0A%20%20%0A%20%20%2F%2F%20Network%20Logger%3A%20Toggles%20logging%20of%20network%20requests%20by%20overriding%20fetch%20and%20XMLHttpRequest.%0A%20%20function%20toggleNetworkLogger()%7B%0A%20%20%20%20if(window._networkLoggerActive)%7B%0A%20%20%20%20%20%20if(window._networkLoggerPanel)%7B%0A%20%20%20%20%20%20%20%20window._networkLoggerPanel.remove()%3B%0A%20%20%20%20%20%20%20%20delete%20window._networkLoggerPanel%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if(window._originalFetch)%7B%0A%20%20%20%20%20%20%20%20window.fetch%20%3D%20window._originalFetch%3B%0A%20%20%20%20%20%20%20%20delete%20window._originalFetch%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if(window._originalXHROpen)%7B%0A%20%20%20%20%20%20%20%20XMLHttpRequest.prototype.open%20%3D%20window._originalXHROpen%3B%0A%20%20%20%20%20%20%20%20delete%20window._originalXHROpen%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20window._networkLoggerActive%20%3D%20false%3B%0A%20%20%20%20%20%20alert(%22Network%20Logger%20turned%20off.%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20window._networkLoggerActive%20%3D%20true%3B%0A%20%20%20%20%20%20var%20panel%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20%20%20panel.id%20%3D%20%22networkLoggerPanel%22%3B%0A%20%20%20%20%20%20panel.style.position%20%3D%20%22fixed%22%3B%0A%20%20%20%20%20%20panel.style.bottom%20%3D%20%2220px%22%3B%0A%20%20%20%20%20%20panel.style.right%20%3D%20%2220px%22%3B%0A%20%20%20%20%20%20panel.style.width%20%3D%20%22400px%22%3B%0A%20%20%20%20%20%20panel.style.height%20%3D%20%22200px%22%3B%0A%20%20%20%20%20%20panel.style.overflowY%20%3D%20%22auto%22%3B%0A%20%20%20%20%20%20panel.style.background%20%3D%20%22rgba(0%2C0%2C0%2C0.9)%22%3B%0A%20%20%20%20%20%20panel.style.color%20%3D%20%22%230f0%22%3B%0A%20%20%20%20%20%20panel.style.fontFamily%20%3D%20%22monospace%22%3B%0A%20%20%20%20%20%20panel.style.fontSize%20%3D%20%2212px%22%3B%0A%20%20%20%20%20%20panel.style.padding%20%3D%20%2210px%22%3B%0A%20%20%20%20%20%20panel.style.borderRadius%20%3D%20%228px%22%3B%0A%20%20%20%20%20%20panel.style.zIndex%20%3D%20%22100002%22%3B%0A%20%20%20%20%20%20panel.innerHTML%20%3D%20%22%3Cb%3ENetwork%20Logger%20Active%3C%2Fb%3E%3Cbr%3E%22%3B%0A%20%20%20%20%20%20document.body.appendChild(panel)%3B%0A%20%20%20%20%20%20window._networkLoggerPanel%20%3D%20panel%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20window._originalFetch%20%3D%20window.fetch%3B%0A%20%20%20%20%20%20window.fetch%20%3D%20function()%7B%0A%20%20%20%20%20%20%20%20var%20args%20%3D%20arguments%3B%0A%20%20%20%20%20%20%20%20var%20url%20%3D%20args%5B0%5D%3B%0A%20%20%20%20%20%20%20%20var%20startTime%20%3D%20Date.now()%3B%0A%20%20%20%20%20%20%20%20return%20window._originalFetch.apply(this%2C%20args).then(function(response)%7B%0A%20%20%20%20%20%20%20%20%20%20var%20endTime%20%3D%20Date.now()%3B%0A%20%20%20%20%20%20%20%20%20%20var%20logEntry%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20%20%20%20%20%20%20logEntry.innerText%20%3D%20%22Fetch%3A%20%22%20%2B%20url%20%2B%20%22%20(%22%20%2B%20(endTime%20-%20startTime)%20%2B%20%22ms)%22%3B%0A%20%20%20%20%20%20%20%20%20%20panel.appendChild(logEntry)%3B%0A%20%20%20%20%20%20%20%20%20%20panel.scrollTop%20%3D%20panel.scrollHeight%3B%0A%20%20%20%20%20%20%20%20%20%20return%20response%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20window._originalXHROpen%20%3D%20XMLHttpRequest.prototype.open%3B%0A%20%20%20%20%20%20XMLHttpRequest.prototype.open%20%3D%20function(method%2C%20url)%7B%0A%20%20%20%20%20%20%20%20this._url%20%3D%20url%3B%0A%20%20%20%20%20%20%20%20return%20window._originalXHROpen.apply(this%2C%20arguments)%3B%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20var%20originalSend%20%3D%20XMLHttpRequest.prototype.send%3B%0A%20%20%20%20%20%20XMLHttpRequest.prototype.send%20%3D%20function()%7B%0A%20%20%20%20%20%20%20%20var%20xhr%20%3D%20this%3B%0A%20%20%20%20%20%20%20%20var%20startTime%20%3D%20Date.now()%3B%0A%20%20%20%20%20%20%20%20var%20onLoad%20%3D%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20var%20endTime%20%3D%20Date.now()%3B%0A%20%20%20%20%20%20%20%20%20%20var%20logEntry%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20%20%20%20%20%20%20logEntry.innerText%20%3D%20%22XHR%3A%20%22%20%2B%20xhr._url%20%2B%20%22%20(%22%20%2B%20(endTime%20-%20startTime)%20%2B%20%22ms)%22%3B%0A%20%20%20%20%20%20%20%20%20%20panel.appendChild(logEntry)%3B%0A%20%20%20%20%20%20%20%20%20%20panel.scrollTop%20%3D%20panel.scrollHeight%3B%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20this.addEventListener(%22load%22%2C%20onLoad)%3B%0A%20%20%20%20%20%20%20%20return%20originalSend.apply(this%2C%20arguments)%3B%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20alert(%22Network%20Logger%20activated.%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20%2F%2F%20History%20Flooder%3A%20Pushes%2050%20fake%20history%20entries%20(alternating%20URLs)%20into%20session%20history.%0A%20%20function%20floodHistory()%7B%0A%20%20%20%20if(!confirm(%22This%20will%20flood%20your%20browser%20history%20with%20fake%20entries.%20Continue%3F%22))%7B%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20for(var%20i%20%3D%200%3B%20i%20%3C%2050%3B%20i%2B%2B)%7B%0A%20%20%20%20%20%20var%20url%20%3D%20(i%20%25%202%20%3D%3D%3D%200)%20%3F%20%22%2Fgoogle.com%22%20%3A%20%22%2Fgoogle.sites%22%3B%0A%20%20%20%20%20%20window.history.pushState(null%2C%20%22%22%2C%20url)%3B%0A%20%20%20%20%7D%0A%20%20%20%20alert(%22History%20flooded%20with%20fake%20entries!%22)%3B%0A%20%20%7D%0A%20%20%0A%20%20%2F***%20Main%20GUI%20Setup%20***%2F%0A%20%20var%20container%20%3D%20document.createElement(%22div%22)%3B%0A%20%20container.id%20%3D%20%22coolToolsContainer%22%3B%0A%20%20%2F%2F%20Updated%20container%20style%20with%20live%20background%20animation%20(red%20to%20black)%0A%20%20container.style.cssText%20%3D%20%22position%3Afixed%3Btop%3A50px%3Bleft%3A50px%3Bwidth%3A400px%3Bbackground%3Ared%3Banimation%3AredToBlack%205s%20infinite%20alternate%3Bcolor%3A%23e0e0e0%3Bpadding%3A20px%3Bborder-radius%3A12px%3Bbox-shadow%3A0%208px%2025px%20rgba(0%2C0%2C0%2C0.8)%3Bz-index%3A99999%3Bfont-family%3A'Roboto'%2Csans-serif%3Btransition%3Aall%200.3s%20ease%3Buser-select%3Anone%3Boverflow%3Ahidden%3Bmin-width%3A300px%3Bmin-height%3A200px%3Bresize%3Aboth%3B%22%3B%0A%20%20%0A%20%20%2F%2F%20Header%20for%20dragging%20(title%3A%20%22multi.net%22)%0A%20%20var%20header%20%3D%20document.createElement(%22div%22)%3B%0A%20%20header.style.cssText%20%3D%20%22width%3A100%25%3Bheight%3A40px%3Bcursor%3Amove%3Bbackground%3Alinear-gradient(90deg%2C%20%231E3C72%2C%20%232A5298)%3Bborder-top-left-radius%3A12px%3Bborder-top-right-radius%3A12px%3Bdisplay%3Aflex%3Balign-items%3Acenter%3Bjustify-content%3Acenter%3Bfont-weight%3Abold%3Bfont-size%3A20px%3Bcolor%3A%23f0f0f0%3Btext-shadow%3A0%201px%203px%20rgba(0%2C0%2C0%2C0.5)%3B%22%3B%0A%20%20header.innerText%20%3D%20%22multi.net%22%3B%0A%20%20container.appendChild(header)%3B%0A%20%20%0A%20%20%2F%2F%20Inner%20container%20holds%20the%20content%20area%20and%20vertical%20tab%20bar.%0A%20%20var%20innerContainer%20%3D%20document.createElement(%22div%22)%3B%0A%20%20innerContainer.style.cssText%20%3D%20%22display%3Aflex%3Bwidth%3A100%25%3Bheight%3Acalc(100%25%20-%2040px)%3Bmargin-top%3A15px%3B%22%3B%0A%20%20%0A%20%20%2F%2F%20Content%20container%20(for%20tool%20buttons)%0A%20%20var%20content%20%3D%20document.createElement(%22div%22)%3B%0A%20%20content.id%20%3D%20%22coolToolsContent%22%3B%0A%20%20content.style.cssText%20%3D%20%22flex%3A1%3Bpadding-right%3A10px%3B%22%3B%0A%20%20%0A%20%20%2F%2F%20Vertical%20tab%20bar%20container%20(on%20the%20right)%0A%20%20var%20tabBar%20%3D%20document.createElement(%22div%22)%3B%0A%20%20tabBar.style.cssText%20%3D%20%22width%3A120px%3Bdisplay%3Aflex%3Bflex-direction%3Acolumn%3Bborder-left%3A1px%20solid%20rgba(255%2C255%2C255%2C0.1)%3Bpadding-left%3A10px%3B%22%3B%0A%20%20%0A%20%20%2F***%20Define%20Categories%20and%20Their%20Tools%20***%2F%0A%20%20var%20categories%20%3D%20%7B%0A%20%20%20%20%22Page%20Tools%22%3A%20%5B%0A%20%20%20%20%20%20%7B%20label%3A%20%22Edit%20Page%22%2C%20action%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20document.body.contentEditable%20%3D%20document.body.contentEditable%20%3D%3D%3D%20%22true%22%20%3F%20%22false%22%20%3A%20%22true%22%3B%0A%20%20%20%20%20%20%20%20%20%20alert(%22Edit%20Mode%3A%20%22%20%2B%20document.body.contentEditable)%3B%0A%20%20%20%20%20%20%7D%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22Dark%20Mode%22%2C%20action%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20document.body.style.background%20%3D%20%22%23111%22%3B%0A%20%20%20%20%20%20%20%20%20%20document.body.style.color%20%3D%20%22%23fff%22%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22Security%20Tools%22%3A%20%5B%0A%20%20%20%20%20%20%7B%20label%3A%20%22Show%20Passwords%22%2C%20action%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20document.querySelectorAll(%22input%5Btype%3D'password'%5D%22).forEach(function(input)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20input.type%20%3D%20%22text%22%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20alert(%22Passwords%20are%20now%20visible!%22)%3B%0A%20%20%20%20%20%20%7D%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22Cookie%20Editor%22%2C%20action%3A%20openCookieEditor%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22Debugging%22%3A%20%5B%0A%20%20%20%20%20%20%7B%20label%3A%20%22Find%20All%20Links%22%2C%20action%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20var%20links%20%3D%20Array.from(document.querySelectorAll(%22a%22)).map(function(a)%7B%20return%20a.href%3B%20%7D).join(%22%5Cn%22)%3B%0A%20%20%20%20%20%20%20%20%20%20alert(%22Links%20found%3A%5Cn%22%20%2B%20links)%3B%0A%20%20%20%20%20%20%7D%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22Show%20Hidden%20Elements%22%2C%20action%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20document.querySelectorAll(%22*%5Bstyle*%3D'display%3A%20none'%5D%2C%20*%5Bhidden%5D%22).forEach(function(el)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20el.style.display%20%3D%20%22block%22%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20alert(%22Hidden%20elements%20are%20now%20visible!%22)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22Miscellaneous%22%3A%20%5B%0A%20%20%20%20%20%20%7B%20label%3A%20%22View%20Page%20Source%22%2C%20action%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20var%20sourceWindow%20%3D%20window.open()%3B%0A%20%20%20%20%20%20%20%20%20%20sourceWindow.document.write(%22%3Cpre%3E%22%20%2B%20escapeHtml(document.documentElement.outerHTML)%20%2B%20%22%3C%2Fpre%3E%22)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22Advanced%20Tools%22%3A%20%5B%0A%20%20%20%20%20%20%7B%20label%3A%20%22Ad%20Blocker%22%2C%20action%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20var%20ads%20%3D%20document.querySelectorAll('%5Bid*%3D%22ad%22%5D%2C%20%5Bclass*%3D%22ad%22%5D%2C%20%5Bid*%3D%22Ad%22%5D%2C%20%5Bclass*%3D%22Ad%22%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20ads.forEach(function(ad)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20ad.style.display%20%3D%20%22none%22%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20alert(%22Ad%20Blocker%3A%20%22%20%2B%20ads.length%20%2B%20%22%20elements%20hidden.%22)%3B%0A%20%20%20%20%20%20%7D%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22Event%20Logger%22%2C%20action%3A%20toggleNetworkLogger%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22Custom%20JS%20Executor%22%2C%20action%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20var%20code%20%3D%20prompt(%22Enter%20JavaScript%20code%20to%20execute%3A%22)%3B%0A%20%20%20%20%20%20%20%20%20%20if(code)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20result%20%3D%20eval(code)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert(%22Result%3A%20%22%20%2B%20result)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20catch(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert(%22Error%3A%20%22%20%2B%20e)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22Console%20Viewer%22%2C%20action%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20if(window.consoleViewerActive)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20panel%20%3D%20document.getElementById(%22consoleViewerPanel%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if(panel)%20panel.remove()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log%20%3D%20window.originalConsoleLog%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20window.consoleViewerActive%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20alert(%22Console%20viewer%20turned%20off.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20window.consoleViewerActive%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20window.originalConsoleLog%20%3D%20console.log%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20panel%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20panel.id%20%3D%20%22consoleViewerPanel%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20panel.style.cssText%20%3D%20%22position%3Afixed%3Bbottom%3A20px%3Bleft%3A20px%3Bwidth%3A400px%3Bheight%3A200px%3Boverflow-y%3Aauto%3Bbackground%3Argba(0%2C0%2C0%2C0.9)%3Bcolor%3A%230f0%3Bfont-family%3Amonospace%3Bfont-size%3A12px%3Bpadding%3A10px%3Bborder-radius%3A8px%3Bz-index%3A100000%3B%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20panel.innerHTML%20%3D%20%22%3Cb%3EConsole%20Viewer%20Active%3C%2Fb%3E%3Cbr%3E%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.body.appendChild(panel)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log%20%3D%20function(...args)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.originalConsoleLog.apply(console%2C%20args)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20logEntry%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20logEntry.textContent%20%3D%20args.join(%22%20%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20panel.appendChild(logEntry)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20panel.scrollTop%20%3D%20panel.scrollHeight%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20alert(%22Console%20viewer%20activated.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22History%20Flooder%22%2C%20action%3A%20floodHistory%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20%22Throw%20Children%22%2C%20action%3A%20function()%7B%0A%20%20%20%20%20%20%20%20%20%20throwChildren()%3B%0A%20%20%20%20%20%20%20%20%20%20alert(%22Children%20thrown!%22)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%5D%0A%20%20%7D%3B%0A%20%20%0A%20%20%2F%2F%20Create%20clickable%20vertical%20tabs%20for%20each%20category%20(right%20side)%0A%20%20var%20activeTab%20%3D%20null%3B%0A%20%20Object.keys(categories).forEach(function(catName)%7B%0A%20%20%20%20var%20tab%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20tab.innerText%20%3D%20catName%3B%0A%20%20%20%20tab.style.cssText%20%3D%20%22padding%3A10px%3Bmargin-bottom%3A5px%3Bcursor%3Apointer%3Btransition%3Abackground%200.3s%2C%20color%200.3s%3Bcolor%3A%23bbb%3Bborder-radius%3A5px%3B%22%3B%0A%20%20%20%20tab.onclick%20%3D%20function()%7B%0A%20%20%20%20%20%20if(activeTab)%7B%0A%20%20%20%20%20%20%20%20activeTab.style.background%20%3D%20%22%22%3B%0A%20%20%20%20%20%20%20%20activeTab.style.color%20%3D%20%22%23bbb%22%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20activeTab%20%3D%20tab%3B%0A%20%20%20%20%20%20tab.style.background%20%3D%20%22rgba(255%2C255%2C255%2C0.2)%22%3B%0A%20%20%20%20%20%20tab.style.color%20%3D%20%22%23fff%22%3B%0A%20%20%20%20%20%20renderCategory(catName)%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20tabBar.appendChild(tab)%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%2F%2F%20Function%20to%20render%20a%20category's%20tools%20into%20the%20content%20area%0A%20%20function%20renderCategory(catName)%7B%0A%20%20%20%20content.innerHTML%20%3D%20%22%22%3B%0A%20%20%20%20var%20tools%20%3D%20categories%5BcatName%5D%3B%0A%20%20%20%20tools.forEach(function(tool)%7B%0A%20%20%20%20%20%20var%20btn%20%3D%20document.createElement(%22button%22)%3B%0A%20%20%20%20%20%20btn.innerText%20%3D%20tool.label%3B%0A%20%20%20%20%20%20btn.style.cssText%20%3D%20%22width%3A100%25%3Bmargin%3A8px%200%3Bpadding%3A12px%3Bborder%3Anone%3Bbackground%3Argba(255%2C255%2C255%2C0.05)%3Bcolor%3A%23e0e0e0%3Bborder-radius%3A8px%3Bfont-size%3A16px%3Bcursor%3Apointer%3Btransition%3Abackground%200.3s%2C%20transform%200.2s%3B%22%3B%0A%20%20%20%20%20%20btn.onmouseover%20%3D%20function()%7B%20btn.style.background%20%3D%20%22rgba(255%2C255%2C255%2C0.15)%22%3B%20btn.style.transform%20%3D%20%22scale(1.02)%22%3B%20%7D%3B%0A%20%20%20%20%20%20btn.onmouseout%20%3D%20function()%7B%20btn.style.background%20%3D%20%22rgba(255%2C255%2C255%2C0.05)%22%3B%20btn.style.transform%20%3D%20%22scale(1)%22%3B%20%7D%3B%0A%20%20%20%20%20%20btn.onclick%20%3D%20tool.action%3B%0A%20%20%20%20%20%20content.appendChild(btn)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%20%20%0A%20%20%2F%2F%20Append%20the%20content%20area%20and%20vertical%20tab%20bar%20into%20the%20inner%20container%0A%20%20innerContainer.appendChild(content)%3B%0A%20%20innerContainer.appendChild(tabBar)%3B%0A%20%20container.appendChild(innerContainer)%3B%0A%20%20%0A%20%20%2F%2F%20Add%20custom%20resize%20handle%20(bottom-right)%0A%20%20var%20resizeHandle%20%3D%20document.createElement(%22div%22)%3B%0A%20%20resizeHandle.style.cssText%20%3D%20%22width%3A15px%3Bheight%3A15px%3Bposition%3Aabsolute%3Bright%3A5px%3Bbottom%3A5px%3Bcursor%3Ase-resize%3Bbackground%3Argba(255%2C255%2C255%2C0.3)%3B%22%3B%0A%20%20container.appendChild(resizeHandle)%3B%0A%20%20%0A%20%20%2F%2F%20Add%20a%20global%20Close%20button%20fixed%20at%20the%20bottom%20left%20of%20the%20container%0A%20%20var%20globalCloseBtn%20%3D%20document.createElement(%22button%22)%3B%0A%20%20globalCloseBtn.innerText%20%3D%20%22Close%20GUI%22%3B%0A%20%20globalCloseBtn.style.cssText%20%3D%20%22position%3Aabsolute%3Bbottom%3A5px%3Bleft%3A5px%3Bpadding%3A5px%2010px%3Bborder%3Anone%3Bbackground%3Argba(220%2C53%2C69%2C0.8)%3Bcolor%3A%23fff%3Bborder-radius%3A5px%3Bcursor%3Apointer%3Btransition%3Abackground%200.3s%3B%22%3B%0A%20%20globalCloseBtn.onmouseover%20%3D%20function()%7B%20globalCloseBtn.style.background%20%3D%20%22rgba(220%2C53%2C69%2C1)%22%3B%20%7D%3B%0A%20%20globalCloseBtn.onmouseout%20%3D%20function()%7B%20globalCloseBtn.style.background%20%3D%20%22rgba(220%2C53%2C69%2C0.8)%22%3B%20%7D%3B%0A%20%20globalCloseBtn.onclick%20%3D%20function()%7B%0A%20%20%20%20container.style.opacity%20%3D%20%220%22%3B%0A%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20container.remove()%3B%0A%20%20%20%20%20%20delete%20window.coolTools%3B%0A%20%20%20%20%7D%2C300)%3B%0A%20%20%7D%3B%0A%20%20container.appendChild(globalCloseBtn)%3B%0A%20%20%0A%20%20document.body.appendChild(container)%3B%0A%20%20window.coolTools%20%3D%20container%3B%0A%20%20%0A%20%20%2F%2F%20Activate%20first%20vertical%20tab%20by%20default%0A%20%20if(tabBar.firstChild)%20tabBar.firstChild.click()%3B%0A%20%20%0A%20%20%2F%2F%20Draggable%20functionality%20via%20header%0A%20%20header.onmousedown%20%3D%20function(e)%7B%0A%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20var%20startX%20%3D%20e.clientX%2C%20startY%20%3D%20e.clientY%3B%0A%20%20%20%20var%20origX%20%3D%20parseInt(container.style.left%2C%2010)%3B%0A%20%20%20%20var%20origY%20%3D%20parseInt(container.style.top%2C%2010)%3B%0A%20%20%20%20function%20onMouseMove(e)%7B%0A%20%20%20%20%20%20container.style.left%20%3D%20(origX%20%2B%20(e.clientX%20-%20startX))%20%2B%20%22px%22%3B%0A%20%20%20%20%20%20container.style.top%20%3D%20(origY%20%2B%20(e.clientY%20-%20startY))%20%2B%20%22px%22%3B%0A%20%20%20%20%7D%0A%20%20%20%20function%20onMouseUp()%7B%0A%20%20%20%20%20%20document.removeEventListener(%22mousemove%22%2C%20onMouseMove)%3B%0A%20%20%20%20%20%20document.removeEventListener(%22mouseup%22%2C%20onMouseUp)%3B%0A%20%20%20%20%7D%0A%20%20%20%20document.addEventListener(%22mousemove%22%2C%20onMouseMove)%3B%0A%20%20%20%20document.addEventListener(%22mouseup%22%2C%20onMouseUp)%3B%0A%20%20%7D%3B%0A%20%20%0A%20%20%2F%2F%20Resizable%20functionality%20via%20custom%20handle%0A%20%20resizeHandle.onmousedown%20%3D%20function(e)%7B%0A%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20e.stopPropagation()%3B%0A%20%20%20%20var%20startX%20%3D%20e.clientX%2C%20startY%20%3D%20e.clientY%3B%0A%20%20%20%20var%20startWidth%20%3D%20container.offsetWidth%2C%20startHeight%20%3D%20container.offsetHeight%3B%0A%20%20%20%20function%20onMouseMove(e)%7B%0A%20%20%20%20%20%20container.style.width%20%3D%20(startWidth%20%2B%20(e.clientX%20-%20startX))%20%2B%20%22px%22%3B%0A%20%20%20%20%20%20container.style.height%20%3D%20(startHeight%20%2B%20(e.clientY%20-%20startY))%20%2B%20%22px%22%3B%0A%20%20%20%20%7D%0A%20%20%20%20function%20onMouseUp()%7B%0A%20%20%20%20%20%20document.removeEventListener(%22mousemove%22%2C%20onMouseMove)%3B%0A%20%20%20%20%20%20document.removeEventListener(%22mouseup%22%2C%20onMouseUp)%3B%0A%20%20%20%20%7D%0A%20%20%20%20document.addEventListener(%22mousemove%22%2C%20onMouseMove)%3B%0A%20%20%20%20document.addEventListener(%22mouseup%22%2C%20onMouseUp)%3B%0A%20%20%7D%3B%0A%20%20%0A%20%20%2F%2F%20Prevent%20text%20selection%20during%20drag%2Fresize%0A%20%20document.onselectstart%20%3D%20function()%7B%20return%20false%3B%20%7D%3B%0A%7D)()%3B%7D)()%3B
