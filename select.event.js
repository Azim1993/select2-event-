//------------------------------------------------------
// for select2 multiselect initialization
//------------------------------------------------------
var selections = [
    {id:1,text:'Enhancement'},
    {id:2,text:'Bug'}
];
var val = [
    {id:1,text:'Enhancement'},
    {id:2,text:'Bug'},
    {id:3,text:'Duplicate'},
    {id:4,text:'Invalid'},
    {id:5,text:'Won\'t Fix'}
];
var $element = $('#classDisplay').select2();
 // the select element you are working with
for (var d = 0; d < selections.length; d++) {
    var item = selections[d];
    // Create the DOM option that is pre-selected by default
    var option = new Option(item.text, item.id, true, true);
    // Append it to the select
    $element.append(option);
}
$element.trigger('change');


//-----------------------------------------
// for delete event and catch value
//-----------------------------------------
$('#medium').on("select2:unselecting", function(e){
    console.log(e.params.args.data);
    console.log(e.params.args.data.id);
    console.log(e.params.args.data.text);
});
