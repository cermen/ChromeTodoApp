window.addEventListener("load", () => {
    setBackground();
    setQuote();
})

const setBackground = () => {
    const body = document.querySelector("body");
    const imgs = [
        'bangkok.jpg', 'greece.jpg', 'gyeongju.jpg', 'jeju.jpg', 'london.jpg',
        'osaka.jpg', 'paris.jpg', 'rome.jpeg', 'seoul.jpg', 'venice.jpeg'
    ];
    body.style.backgroundImage = `url("img/bgs/${imgs[Math.floor(Math.random() * imgs.length)]}")`;
}

const setQuote = () => {
    const quoteContent = document.querySelector(".quote__content");
    const quoteAuthor = document.querySelector(".quote__author");
    const quote = [
        {content: "Never, never, never give up!", author: "Winston Churchill"},
        {content: "지옥 길을 걸어야만 한다면, 멈추지 말고 계속 가라.", author: "윈스턴 처칠"},
        {content: "프로란, 하고 싶은 일을 하기 싫은 날에도 계속 하는 것이다.", author: "줄리어스 어빙"},
        {content: "I hated every minute of training, but I said, “Don't quit. Suffer now and live the rest of your life as a champion.”", author: "Muhammad Ali"},
        {content: "성공하려고 아무리 열심히 노력해도 실패에 대한 두려움이 마음에 가득하다면, 노력하지 않게 되고 정진이 허사가 되어 성공은 불가능해질 것이다.", author: "보두앵"},
        {content: "자신을 두렵게 하는 일을 매일 하라.", author: "작자 미상"},
        {content: "Genius is one percent inspiration and ninety-nine percent perspiration", author: "Thomas Edison"},
        {content: "슬럼프라 정의하는 순간 슬럼프가 된다.", author: "작자 미상"},
        {content: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.", author: "Steve Jobs"},
        {content: "99도까지 열심히 올려놓아도 마지막 1도를 넘기지 못하면 영원히 물은 끓지 않는다. 물을 끓이는 건 마지막 1도, 포기하고 싶은 그 1분을 참아내는 것이다. 이 순간을 넘어야 그 다음 문이 열린다.", author: "김연아"},
        {content: "Do or do not. There is no try.", author: "Yoda (Star Wars)"},
    ];

    const idx = Math.floor(Math.random() * quote.length);
    quoteContent.innerText = quote[idx].content;
    quoteAuthor.innerText = `- ${quote[idx].author}`;
}

const setTime = () => {
    const clockTime = document.querySelector(".clock__time");

    const now = new Date();

    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    clockTime.innerHTML = `${hour}:${minute}<span id="clock__time__second">${second}</span>`;
}

const setDate = () => {
    const clockDate = document.querySelector(".clock__date");

    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const day = days[now.getDay()];

    clockDate.innerHTML = `${year}년 ${month}월 ${date}일 ${day}요일`;
}

setTime();
setDate();

setInterval(() => {
    setTime();

    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        setDate();
    }
}, 1000);

