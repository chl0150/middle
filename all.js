let sceneNumber;
let startFrame;
//배경 이미지 변수 선언
let bgImgs = [];
let imgWidth, imgHeight;
//scene1 변수 선언
let seedPut=0;
let back=0; //씨앗 심기 전 후 배경을 구분하기 위해서
//scene2 변수 선언
//scene3 변수 선언
//scene4 변수 선언
//scene5 변수 선언
//scene6 변수 선언
//scene7 변수 선언
//scene8 변수 선언
let tree = 1;
let done = 0;

function preload(){
    //배경 이미지 생성
    bgImgs[0] = loadImage('photo/scene1-1.png'); //씨앗 심는 구멍
    bgImgs[1] = loadImage('photo/scene1-2.png'); //씨앗
    bgImgs[2] = loadImage('photo/scene1-3.png'); //흙 다시
    bgImgs[3] = loadImage('photo/scene1-4.png'); //새싹
    bgImgs[4] = loadImage('photo/scene2.png'); //집
    //bgImgs[5] = loadImage('photo/scene3-1.png'); //길
    //bgImgs[6] = loadImage('photo/scene3-2.png'); //길 + 비
    bgImgs[7] = loadImage('photo/scene4.png'); //지하철
    bgImgs[8] = loadImage('photo/scene5-1.png'); //엘리베이터open
    //gImgs[9] = loadImage('photo/scene5-2.png'); //엘리베이터closing
    //bgImgs[10] = loadImage('photo/scene5-3.png'); //엘리베이터closed
    //bgImgs[11] = loadImage('photo/scene6.png'); //발사
    //bgImgs[12] = loadImage('photo/scene7.png'); //캠퍼스길
    bgImgs[13] = loadImage('photo/scene8-1.png'); //작은 나무
    bgImgs[14] = loadImage('photo/scene8-2.png'); //중간 나무
    bgImgs[15] = loadImage('photo/scene8-3.png'); //큰 나무
    bgImgs[16] = loadImage('photo/scene_ending.png'); //ending credit
    bgImgs[17] = loadImage('photo/scene_opening.png'); //opening
    //요소 이미지 생성 
    
}
function setup(){
    sceneNumber=0;
    createCanvas(windowWidth, windowHeight);
    background(255);
    imageMode(CENTER);
    frameRate(60);
}

function draw(){
    if (sceneNumber === 0) scene_opening();
    if (sceneNumber === 1) scene1();  
    if (sceneNumber === 2) scene2();  
    if (sceneNumber === 3) scene3();
    if (sceneNumber === 4) scene4();
    if (sceneNumber === 5) scene5();
    if (sceneNumber === 6) scene6();
    if (sceneNumber === 7) scene7();
    if (sceneNumber === 8) scene8();
    if (sceneNumber === 9) scene_ending();

    //주인공 이미지 함수 (걷는 모습)
}
function scene_opening(){

    if (startFrame === undefined) {
    startFrame = frameCount;  // 처음 진입한 시점 저장
    }

    bg(17); // 명령어

    // 시간 지났는지 확인
    if (frameCount - startFrame > 120) {
    sceneNumber = 1; // 명령어 
    startFrame = undefined; // 이후에 또 쓰기 위해서
    }
}
//scene1 : 씨앗 심기
function scene1(){
    frameRate(1);
    if (back===0){
        bg(0);
    } else if (back===1){
        bg(2);
        back=2;
    } else if (back===2){
        sceneNumber=2;
    }
    
    if(seedPut===1){
        //효과음 넣으면 좋을 것 같음!!
        bg(1);
        seedPut=0;
        back=1;
    }
}

//scene2 : 
function scene2(){
    frameRate(60);
    bg(4);
    sceneNumber = 3;

}
//scene3 : 
function scene3(){
    //bg(5);

    sceneNumber = 4;

}
//scene4 :  
function scene4(){
    bg(7);

    sceneNumber = 5;

}
//scene5 :  
function scene5(){
    bg(8);

    sceneNumber = 6;

}
//scene6 :  
function scene6(){
    //bg(11);

    sceneNumber = 7;

}
//scene7 :  
function scene7(){
    //bg(12);

    sceneNumber = 8;

}
//scene8 : 나무 자라는 장면면
function scene8() {
    frameRate(1);
 
    if (tree === 1) {
        bg(13);
        tree=2;
    } else if (tree === 2) {
        bg(14);
        tree=3;
    } else if (tree === 3) {
        if (startFrame === undefined) {
            startFrame = frameCount;
        }

        bg(15);

        if (frameCount - startFrame > 1) { // 2초(프레임)만 보기 쉽게 줄여봄
            done = 1;
            tree = 0;
            startFrame = undefined;
        }
    }

    
    if (done === 1){
        sceneNumber = 9;
        done = 0;
    }
}

function scene_ending(){
    frameRate(60);

    bg(16);
    
}

function mousePressed(){
    if(sceneNumber===1){
        if(back===0){
            seedPut=1;
        }

    }
}

//배경 이미지 표시 함수
function bg(n) {
  let img = bgImgs[n];
  if (!img) return;

  // 원본 이미지 크기
  let w = img.width;
  let h = img.height;

  // 화면 비율에 맞춰서, 이미지가 보이게
  let scaleW = width / w;
  let scaleH = height / h;
  let scaleFactor = min(scaleW, scaleH); // 둘 중 작은 걸 기준

  push();
  translate(width / 2, height / 2); // 중앙 정렬
  scale(scaleFactor);               // 비율 유지한 채 크기만 조절
  image(img, 0, 0);                 // 스케일 후 이미지 그리기
  pop();
}

