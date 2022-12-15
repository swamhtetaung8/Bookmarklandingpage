const page1 = document.getElementById('switchPageBtn1')
const page2 = document.getElementById('switchPageBtn2')
const page3 = document.getElementById('switchPageBtn3')
const switchTitle = document.getElementById('switchTitle')
const switchPara = document.getElementById('switchPara')
const switchImg = document.getElementById('switchImg')
const btns = [page1, page2, page3]

const infos = [
    {
        title: `Bookmark in one click`,
        para: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`
    },
    {
        title: `Intelligent search`,
        para: `Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.`
    },
    {
        title: `Share your bookmarks`,
        para: `Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.`
    }
]

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        switchTitle.innerText = infos[i].title;
        switchPara.innerText = infos[i].para;
        switchImg.src = `./images/illustration-features-tab-${i + 1}.svg`
        btns.forEach(btn => btn.classList.remove('active-feature'))
        btns[i].classList.add('active-feature')
    })
}