function showTabs(btn, body) {
    const tabsBtn = document.querySelectorAll(btn)
    const tabsContent = document.querySelectorAll(body)

    if(tabsContent.length > 0 || tabsBtn.length > 0) {
        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.remove('active')
            })

            tabsBtn.forEach(item => {
                item.classList.remove('active')
            })
        }

        function showTabContent(i = 0) {
            tabsContent[i].classList.add('active')
            tabsBtn[i].classList.add('active')
        }

        hideTabContent()
        showTabContent()

        tabsBtn.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                hideTabContent()
				showTabContent(index)
            })
        })
    }
}

export default showTabs