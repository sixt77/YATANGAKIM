//js function
function create_element($tag, $id, $class, $onclick, $html){
    var item = document.createElement($tag);
    if($id != "" && $id != undefined)item.setAttribute("id", $id);
    if($class != "" && $class != undefined)item.setAttribute("class", $class);
    if($onclick != "" && $onclick != undefined)item.setAttribute( "onclick", $onclick);
    if($html != "" && $html != undefined)item.innerHTML =$html;
    return item;
}

function create_input($type, $id, $class, $name, $required){
    var item = document.createElement("input");
    item.type = $type;
    if($id != "" && $id != undefined)item.setAttribute("id", $id);
    if($class != "" && $class != undefined)item.setAttribute("class", $class);
    if($name != "" && $name != undefined)item.setAttribute("name", $name);
    if($required != "" && $required != undefined)item.setAttribute("required", 'required');
    return item;
}

function create_button($id, $class, $value, $onclick){
    var item = document.createElement("input");
    item.type = "button";
    if($id != "" && $id != undefined)item.setAttribute("id", $id);
    if($class != "" && $class != undefined)item.setAttribute("class", $class);
    if($onclick != "" && $onclick != undefined)item.setAttribute( "onclick", $onclick);
    if($value != "" && $value != undefined)item.value = $value;
    return item;
}

//jquery function
function hide_class($class) {
    $( "."+$class+"" ).hide();
}

function show_id($id) {
    $( "#"+$id+"" ).show();
}

function remove_class($class) {
    $( "."+$class+"" ).remove();
}

function remove_id($id) {
    $( "#"+$id+"" ).remove();
}
function count_class($class){
    return $( "."+$class+"" ).length;
}

function set_html_value($id, $value){
    $( "#"+$id+"" ).value = $value;
}

function init_map(){
    var map = [["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "x", "x", "x", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "x", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "x", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "x", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "x", "x", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "x","v", "x", "1", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "x", "v", "v", "v", "v", "v", "x","x", "x", "x", "x", "v", "v", "v", "v", "v"],
        ["v", "v", "x", "v", "v", "v", "v", "v", "v","v", "x", "v", "x", "v", "v", "v", "v", "v"],
        ["v", "v", "x", "v", "v", "v", "v", "v", "v","x", "x", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "x", "x", "x", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"]];
    console.log(map);

    return map;
}

function build_map(id, map, limit) {
    draw_view(map, 0, 0, 10, 10, limit, id);
    spawn_player(0, 0);
}


function player_moove(player_postion, x, y, limit, map) {
    var start = [player_postion[0], player_postion[1]];
    var end = check_case(player_postion, x, y, limit, map);
    console.log(player_postion);
    draw_view(map, end[0], end[1], 10, 10, limit, "map");
    draw_player(player_postion, map);
    return player_postion;
}

function check_case(player_position, x, y, limit, map){
    if(player_position[0]+x >= limit[0] && player_position[0]+x <= limit[1] && player_position[1]+y >= limit[2] && player_position[1]+y <= limit[3]) {
        switch (map[player_position[0] + x][player_position[1] + y]) {
            case "v":
                player_position[0] = player_position[0] + x;
                player_position[1] = player_position[1] + y;
                player_position[2] = true;
                return player_position;
                break;
            case "x":
                player_position[2] = true;
                return player_position;
                break;
            case '1':
                pnj_one_dialog('dialog');
                player_position[2] = false;
                return player_position;


        }
    }else{
        return player_position;
    }
}

function draw_player(player_position){
    document.getElementById('case_'+player_position[0]+'_'+player_position[1]).innerHTML = 'p';
}

function spawn_player(x, y) {
    document.getElementById('case_'+x+'_'+y).innerHTML = 'p';
}

function draw_view(map, x, y, height, width, limit, id){
    var i = 0;
    var j = 0;

    //efface la view précédente
    remove_class("map_element");


    //centrage de la vue
    //largeur
    while(x-Math.floor(width/2) < limit[0]){
        x=x+1;
    }
    while(x+Math.floor(width/2)-1 > limit[1]){
        x=x-1;
    }
    //hauteur
    while(y-Math.floor(height/2) < limit[2]){
        y=y+1;
    }
    while(y+Math.floor(height/2)-1 > limit[3]){
        y=y-1;
    }

    startY = y-Math.floor(height/2);
    viewX = x-Math.floor(width/2);
    viewY = y-Math.floor(height/2);
    //dessin de la vue
    while(i < height){
        document.getElementById(id).appendChild(create_element('div', 'line_'+i, 'map_line map_element', '', ''));
        while(j < width){
            switch (map[viewX][viewY]) {
                case 'v':
                    document.getElementById('line_'+i).appendChild(create_element('div', 'case_'+viewX+'_'+viewY, 'map_case map_element free_case', '', ''));
                    break;
                case 'x':
                    document.getElementById('line_'+i).appendChild(create_element('div', 'case_'+viewX+'_'+viewY, 'map_case map_element disable_case', '', ''));
                    break;
                case '1':
                    document.getElementById('line_'+i).appendChild(create_element('div', 'case_'+viewX+'_'+viewY, 'map_case map_element pnj_case', '', ''));
                    break;
            }
            viewY++;
            j++;
        }
        viewY = startY;
        j = 0;
        viewX++;
        i++;
    }
}

function pnj_one_dialog(id){
    clear_dialog();
    console.log(id);
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', '','qui a la plus grosse teub du monde ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', 'pnj_one(true)','issou'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', "pnj_one(false);",'pas issou'));
}


function pnj_one(value) {
    clear_dialog();
    ready = true;
    if(value){
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '','bonne réponse :D'));
        document.getElementById('friendlist').appendChild(create_element('div', 'one', 'friend', '','bite'));

        map[12][11] = 'v';
    }else{
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '','ntm !'));
    }
}

function clear_dialog() {
    remove_class('simple_dialog');1
}