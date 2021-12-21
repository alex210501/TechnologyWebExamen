window.onload = function() {
    let buttonArea = document.getElementById('button-area');
    
    buttonArea.addEventListener("click", function () {
        let widht = document.getElementById('width').value;
        let length = document.getElementById('length').value;

        areaText = document.getElementById('text-area');
        areaText.textContent = (parseInt(widht) * parseInt(length)) + " M2";
    });
}
