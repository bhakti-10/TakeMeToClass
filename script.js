function setLecture(lectureText, linkText1, linkText2) {
    document.getElementById("lecture").innerHTML = lectureText
    if (linkText1 == null) {
        disableButton()
    } else {
        document.getElementById("link-text-1").href = linkText1

    }
    if (linkText2 != null) {
        document.getElementById("paid-hacks").innerHTML = '<button type="button" class="btn btn-dark" id="join-button-2"><a id = "link-text-2" href="#" target="new" style="color:white; padding:20px 100px 20px 100px;">Join Link 2</a></button>'
        document.getElementById("link-text-2").href = linkText2
        document.getElementById("link-text-1").innerHTML = "Join Link 1"
        document.getElementById("link-text-1").href = linkText1
    }

}

function disableButton() {
    document.getElementById("join-button-1").innerHTML = "Lecture not started"
    document.getElementById("join-button-1").disabled = "True"
}

function throwEmote() {
    var emojis = Array("🤩", "😎", "😴", "🔥", "🤓", "💯", "💩", "🐤", "🙏", "🥱", "😬", "🥳", "🌚");

    var item = emojis[Math.floor(Math.random() * emojis.length)];
    return item;
}

function fetch() {
    var linkText1 = null;
    var linkText2 = null;
    var lectureText = "There is no lecture";
    var todayDate = new Date();
    var day = todayDate.getDay();
    var hour = todayDate.getHours();
    var min = todayDate.getMinutes();
    switch (day) {
        case 0:
            lectureText = "There is no lecture today"+throwEmote();
            break;
        case 1:
            if (hour < 10) {
                lectureText = "LP-1 Lecture at 10AM"
            } else if (hour >= 10 && hour < 11) {
                lectureText = "LP-1 Lecture started at " + hour + "AM"
                linkText1 = "https://meet.google.com/vef-dopn-dpa"
                //As Per New Link
            } else if (hour >= 11 && hour < 12) {
                lectureText = "LP-2 Lecture started at " + hour + "AM"
                linkText1 = "https://meet.google.com/lookup/ejtpp6fr4u"
                linkText2 = "https://meet.google.com/bvz-wvsi-fgs"
            } else {
                lectureText = "No more lectures today "+throwEmote()
            }
            break;
        case 2:
            if (hour < 10) {
                lectureText = "AIR Lecture at 10AM"
            } else if (hour >= 10 && hour < 11) {
                lectureText = "AIR Lecture started at " + hour + "AM"
                linkText1 = "https://meet.google.com/lookup/b6xynavkkm"
            } else if (hour >= 11 && hour < 12) {
                lectureText = "HPC Lecture started at " + hour + "AM"
                linkText1 = "https://meet.google.com/lookup/awoaq6g6xh"
            }  else {
                lectureText ="No more lectures today "+throwEmote()
            }
            break;
        case 3:
            if (hour < 10) {
                lectureText = "AIR Lecture at 10AM"
            } else if (hour >= 10 && hour < 11) {
                lectureText = "AIR Lecture started at " + hour + "AM"
                linkText1 = "https://meet.google.com/lookup/b6xynavkkm"
            } else if (hour >= 11 && hour < 12) {
                lectureText = "DA Lecture started at " + hour + "AM"
                linkText1 = "https://meet.google.com/lookup/gpcqol4zmn"
            } else {
                lectureText = "No more lectures today "+throwEmote()
            }
            break;
        case 4:
            if (hour < 10) {
                lectureText = "HPC Lecture at 10AM"
            } else if (hour >= 10 && hour < 11) {
                lectureText = "HPC Lecture started at " + hour + "AM"
                linkText1 = "https://meet.google.com/lookup/awoaq6g6xh"
            } else if (hour >= 11 && hour < 12) {
                lectureText = "DA Lecture started at " + hour + "AM"
                linkText1 = "https://meet.google.com/lookup/gpcqol4zmn"
            }  else {
                lectureText ="No more lectures today "+throwEmote()
            }
            break;
        case 5:
            if (hour < 10) {
                lectureText = "AIR Lecture at 10AM"
            } else if (hour >= 10 && hour < 11) {
                lectureText = "AIR Lecture started at " + hour + "AM"
                linkText1 = "https://meet.google.com/lookup/b6xynavkkm"
            } else if (hour >= 11 && hour < 12) {
                lectureText = "E-2 Lecture started at " + hour + "AM"
                linkText1 = " https://meet.google.com/lookup/dj7x2ddxdm"
            } else {
                lectureText = "No more lectures today "+throwEmote()
            }
            break;
        case 6:
            if (hour < 10) {
                lectureText = "DIV-B LP-1(P) at 10AM"
            } else if (hour >= 10 && hour < 12) {
                lectureText = "DIV-B LP-1(P) started at 10AM"
                linkText1 = "https://meet.google.com/lookup/cupjcgl7il"
            } else {
                lectureText = "No more lectures today "+throwEmote()            }

    }
    setLecture(lectureText, linkText1, linkText2)
}
