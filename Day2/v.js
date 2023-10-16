function calculateVolume() {
    var radius = parseFloat(document.getElementById("radius").value);
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("result").innerHTML = "Volume of the sphere is: " + volume.toFixed(2);

}
