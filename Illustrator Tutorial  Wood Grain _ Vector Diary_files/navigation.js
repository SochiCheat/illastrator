if(document.images) {
pics = new Array();
pics[1] = new Image();
pics[1].src = "http://www.vectordiary.com/wp-content/themes/vectordiary/images/crash-course.gif";
pics[2] = new Image();
pics[2].src = "http://www.vectordiary.com/wp-content/themes/vectordiary/images/crash-course-hover.gif";
pics[3] = new Image();
pics[3].src = "http://www.vectordiary.com/wp-content/themes/vectordiary/images/tutorials.gif";
pics[4] = new Image();
pics[4].src = "http://www.vectordiary.com/wp-content/themes/vectordiary/images/tutorials-hover.gif";
pics[5] = new Image();
pics[5].src = "http://www.vectordiary.com/wp-content/themes/vectordiary/images/tips.gif";
pics[6] = new Image();
pics[6].src = "http://www.vectordiary.com/wp-content/themes/vectordiary/images/tips-hover.gif";
}

function changer(from,to) {
if(document.images) {
document.images[from].src = pics[to].src;
}
}
