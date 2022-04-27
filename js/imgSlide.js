
        // Step 3. 이미지 슬라이드 자바스크립트
        var current = 0; // 이미지 순서
        var timerId;
        showSlides();    // 첫 번째 이미지를 보여 줌
        loopSlides();

        function showSlides() {

            var slides = document.querySelectorAll("#slideShow > img");

            for(let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"; // 모든 이미지 감춤
            }
            current++; // 다음 이미지로 이동
            if(current > slides.length) // 마지막 이미지
            current = 1; // 첫 번째 이미지로 초기화
            // 현재 위치에 이미지 보이게
            slides[current - 1].style.display = "block";
        }

        function loopSlides(){
            timerId = setInterval(showSlides, 2000);
        }

    document.querySelector("#slideShow").addEventListener('mouseover', function(){

        slides = document.querySelectorAll("#slideShow > img");

            for(let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"; // 모든 이미지 감춤
            }

            slides[current - 1].style.display = "block";
            clearInterval(timerId);
    });

    document.querySelector("#slideShow").addEventListener('mouseout', function(){
        timerId = setInterval(showSlides, 2000);
    })