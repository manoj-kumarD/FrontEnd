function calculate() {
    var pamount=document.getElementById('pamount').value
    var ROI=document.getElementById('roi').value
    var Time=document.getElementById('time').value
    pamount=parseInt(pamount)
    ROI=parseInt(ROI)
    Time=parseInt(Time)
    document.getElementById('si').value=(pamount+ROI+Time)/100;
}