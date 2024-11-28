

document.addEventListener('DOMContentLoaded', function () {
    const text = "Hello I am George and I'm a junior web developer!";
    const typingSpeed = 50; // time delay of print out
    const pauseBetweenLoops = 2000; // time delay before restarting typing effect
    const textElement = document.getElementById('intro');

    function typeText(text, element, speed) {
        element.innerHTML = "";
        element.classList.add('typing');
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                setTimeout(() => {
                    element.classList.remove('typing');
                    setTimeout(() => typeText(text, element, speed), pauseBetweenLoops);
                }, pauseBetweenLoops);
            }
        }
        typeWriter();
    }

    typeText(text, textElement, typingSpeed);
});

