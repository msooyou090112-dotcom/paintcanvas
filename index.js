let canvas;

document.addEventListener('DOMContentLoaded', function () {
  canvas = new fabric.Canvas('c');
});








document.getElementById('cr').style.visibility = "hidden";

/*function showImage() {
    var newImage = document.getElementById('imageshow').lastElementChild;
    newImage.style.visibility = "visible";

}

function loadFile(input) {
    var file = input.files[0];

    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    newImage.src = URL.createObjectURL(file);

    newImage.style.width = "70%";
    newImage.style.height= "70%";
    newImage.style.objectFit = "contain";

    var container = document.getElementById('imageshow');
    container.appendChild(newImage);

}
let newX = 0, newY = 0, startX = 0, startY = 0;


const imageshow = document.getElementById('imageshow')

imageshow.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove' , mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    imageshow.style.top = (imageshow.offsetTop-newY) + 'px'
    imageshow.style.left = (imageshow.offsetLeft-newX) + 'px'
    
    
    console.log({newX, newY})
    console.log({startX, startY})
}


function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
   
}*/

/*var canvassize = 100; 


function canvasminus() {
    canvassize = canvassize - 20;

    if(canvassize <= 1){
        canvassize = 20;
    }
    zooms();
}

function canvasplus() {
    canvassize = canvassize + 20;

    if(canvassize >= 140){
        canvassize = 140;
    }
    zooms();
}

function canvasReset() {
    canvassize = 50;
    zooms();
}

function zooms() {
    document.getElementById("c").style.zoom = canvassize + "%";
    if(canvassize == 20) {
        alert("더 이상 축소할 수 없습니다.");
    }
    if(canvassize == 140)  {
        alert("더 이상 확대할 수 없습니다.");
    }
} */







let zoom = 1;
const STEP = 0.2;
const MIN = 0.2;
const MAX = 1.4;



function canvasplus() {
    alert("캔버스 크기 조정하는 버튼인데 너무 어려워서 포기했어요..");
    /*if (zoom >= MAX) {
        alert("캔버스 크기 조정하는 버튼인데 너무 어려워서 포기했어요..");
        return;
    }
    zoom = Math.min(MAX, zoom + STEP);
    canvas.setZoom(zoom);*/
}

function canvasminus() {
    alert("안해~~~~~");
    /*if (zoom <= MIN) {
        alert("안해~~~~~");
        return;
    }
    zoom = Math.max(MIN, zoom - STEP);
    canvas.setZoom(zoom);*/
}

function canvasReset() {
    zoom = 1;
    canvas.setZoom(zoom);
}




/*const crchange = document.getElementById("cr");


document.onmousemove = (e) => {
    crchange.style.left = e.pageX + "px";
    crchange.style.top = e.pageY + "px";
}*/




let drawMode = null;

// 버튼 클릭 시 모드 설정
function rectangle(){
    /*document.getElementById('cr').style.visibility = "visible";*/
    const rect = new fabric.Rect({
    left: canvas.getWidth() / 2,
    top: canvas.getHeight() / 2,
    width: 120,
    height: 80,
    fill: '#4a90e2',
    originX: 'center',
    originY: 'center',
    selectable: true
  });

  canvas.add(rect);
  canvas.setActiveObject(rect);
  canvas.requestRenderAll();
}

function triangle(){
    /*document.getElementById('cr').style.visibility = "visible";*/
    const tri = new fabric.Triangle({
    left: canvas.getWidth() / 2,
    top: canvas.getHeight() / 2,
    width: 120,
    height: 100,
    fill: '#f5a623',
    originX: 'center',
    originY: 'center',
    selectable: true
  });

  canvas.add(tri);
  canvas.setActiveObject(tri);
  canvas.requestRenderAll();
}

function circle(){
    /*document.getElementById('cr').style.visibility = "visible";*/
    const cir = new fabric.Circle({
    left: canvas.getWidth() / 2,
    top: canvas.getHeight() / 2,
    radius: 50,
    fill: '#50e3c2',
    originX: 'center',
    originY: 'center',
    selectable: true
  });

  canvas.add(cir);
  canvas.setActiveObject(cir);
  canvas.requestRenderAll();
}

function changeColor(color) {
    const activeObject = canvas.getActiveObject(); // 현재 선택된 도형
    if (activeObject) {
        activeObject.set('fill', color);
        canvas.requestRenderAll(); // 변경 후 다시 렌더링
    } else {
        alert("도형을 먼저 선택하세요!");
    }
}

const shape = new fabric.Rect({
    left: 200,
    top: 200,
    width: 120,
    height: 80,
    fill: '#4a90e2',
    originX: 'center',
    originY: 'center',
    selectable: true  // ✅ 꼭 필요
});
canvas.add(shape);





function addText() {
    if (!canvas) return; // 캔버스가 없으면 종료

    const text = new fabric.Textbox("새 텍스트", {
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        fontSize: 24,
        fill: "#000000",
        fontFamily: "Arial",
        originX: "center",
        originY: "center",
        editable: true,     // 더블클릭 시 편집 가능
        selectable: true
    });

    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.requestRenderAll();
}

function changeColor(color) {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        activeObject.set('fill', color); // 텍스트나 도형 모두 적용 가능
        canvas.requestRenderAll();
    } else {
        alert("객체를 먼저 선택하세요!");
    }
}


/*function saveCanvas() {
    // 캔버스를 jpg 이미지로 변환
    const dataURL = canvas.toDataURL({
        format: 'jpeg',
        quality: 0.9
    });

    // 다운로드 링크 생성
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'my_canvas.jpeg';

    // 자동 클릭 → 다운로드
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}*/

function saveCanvas() {
    const prevBg = canvas.backgroundColor;

    canvas.setBackgroundColor('#ffffff', canvas.renderAll.bind(canvas));

    const dataURL = canvas.toDataURL({
        format: 'jpeg',
        quality: 0.9
    });

    canvas.setBackgroundColor(prevBg, canvas.renderAll.bind(canvas));

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = '너가 만든 포스터~!.jpeg';
    link.click();
}








/*document.getElementById('cr')
crchange.addEventListener("click", function(event) {
    document.getElementById('cr').style.visibility = "hidden";
})*/


function loadFile(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    fabric.Image.fromURL(e.target.result, function (img) {

      img.set({
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        originX: 'center',
        originY: 'center',
        selectable: true
      });

      // 크기 조정
      img.scaleToWidth(300);

      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.requestRenderAll();
    });
  };

  reader.readAsDataURL(file);

  // 같은 파일 다시 선택 가능
  input.value = '';
}



