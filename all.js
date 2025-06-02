let sceneNumber;
let startFrame;
//배경 이미지 변수 선언
let bgImgs = [];
let imgWidth, imgHeight;
//걷는 사람
let walkerImages = [];
let bgImg;
let currentFrame = 0;
let xPos = 100;
let yPos;
let frameDelay = 8;
let frameCountForAnim = 0;
let facingRight = true;
let isWalking = false;
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
    bgImgs[3] = loadImage('photo/scene2.png'); //집
    bgImgs[4] = loadImage('photo/scene3-1.jpg'); //길
    bgImgs[5] = loadImage('photo/scene3-2.jpg'); //길 + 비
    bgImgs[6] = loadImage('photo/scene4.png'); //지하철
    bgImgs[7] = loadImage('photo/scene5-1.png'); //엘리베이터open
    //bgImgs[8] = loadImage('photo/scene5-2.png'); //엘리베이터closing
    //gImgs[9] = loadImage('photo/scene5-3.png'); //엘리베이터closed
    //bgImgs[10] = loadImage('photo/scene6-1.png'); //발사1
    //bgImgs[11] = loadImage('photo/scene6-2.png'); //발사2
    //bgImgs[12] = loadImage('photo/scene7.png'); //캠퍼스길
    bgImgs[13] = loadImage('photo/scene8-1.png'); //나무
    bgImgs[14] = loadImage('photo/scene8-2.png'); //나무
    bgImgs[15] = loadImage('photo/scene8-3.png'); //나무
    bgImgs[16] = loadImage('photo/scene8-4.png'); //나무
    bgImgs[17] = loadImage('photo/scene8-5.png'); //나무
    bgImgs[18] = loadImage('photo/scene8-6.png'); //나무
    bgImgs[19] = loadImage('photo/scene8-7.png'); //큰 나무
    bgImgs[20] = loadImage('photo/scene_ending_.png'); //ending credit
    bgImgs[21] = loadImage('photo/scene_opening_.png'); //opening

    //요소 이미지 생성 

    //걷는 사람
    for (let i = 1; i <= 3; i++) {
    walkerImages.push(loadImage(`photo/walkingperson${i}.png`));
    }
    
}
function setup(){
    sceneNumber=0;
    createCanvas(1536, 1024);
    background(255);
    imageMode(CENTER);
    frameRate(60);
    // 캐릭터 위치를 땅 위에 맞춤
    yPos = height * 0.75;
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

    bg(21); // 명령어

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
        frameRate(60);
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
    bg(3);
    walk();
    if(xPos>=1536){
        done=1;
    }
    if(done===1){
        sceneNumber = 3;
        done = 0;
    }

}
//scene3 : 
function scene3(){
    bg(4);
    bg(5);

    sceneNumber = 4;

}
//scene4 :  
function scene4(){
    bg(6);

    sceneNumber = 5;

}
//scene5 :  
function scene5(){
    bg(7);

    sceneNumber = 6;

}
//scene6 :  
function scene6(){
    //bg(10);

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
        bg(15);
        tree=4;
    } else if (tree === 4) {
        bg(16);
        tree=5;
    } else if (tree === 5) {
        bg(17);
        tree=6;
    } else if (tree === 6) {
        bg(18);
        tree=7;
    } else if (tree === 7) {
        if (startFrame === undefined) {
            startFrame = frameCount;
        }

        bg(19);

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

    bg(20);
    
}

function mousePressed(){
    if(sceneNumber===1){
        if(back===0){
            seedPut=1;
        }

    }
    if(sceneNumber===2){
        done=1;

    }
}

//배경 이미지 표시 함수
function bg(n) {
  let img = bgImgs[n];
  if (!img) return;

  
  push();
  translate(width / 2, height / 2); // 중앙 정렬
  //scale(scaleFactor);               // 비율 유지한 채 크기만 조절
  image(img, 0, 0);                 // 스케일 후 이미지 그리기
  pop();
}



function walk() {
  isWalking = false;

  // 방향키로 좌우 이동
  if (keyIsDown(RIGHT_ARROW)) {
    xPos += 2;
    facingRight = true;
    isWalking = true;
  } else if (keyIsDown(LEFT_ARROW)) {
    xPos -= 2;
    facingRight = false;
    isWalking = true;
  }

  // 걷기 애니메이션 처리
  if (isWalking) {
    frameCountForAnim++;
    if (frameCountForAnim >= frameDelay) {
      currentFrame = (currentFrame + 1) % walkerImages.length;
      frameCountForAnim = 0;
    }
  } else {
    currentFrame = 0;
  }

  // 캐릭터 그리기
  push();
  translate(xPos, yPos);
  if (!facingRight) {
    scale(-1, 1);
    image(walkerImages[currentFrame], 0, 0, 200, 200); // 크기 줄임
  } else {
    image(walkerImages[currentFrame], 0, 0, 200, 200);
  }
  pop();
}
