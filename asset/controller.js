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
    var map = [["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "3", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "1", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "4", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "5", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "2", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v"],
        ["v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "1", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "v","v", "v", "v", "v", "v", "v", "v", "v", "x"]];
    console.log(map);

    return map;
}
function find_npc(map){
    var npc_position = [];
    for (var i in map) {
        for (var j in map[i]) {
            if(map[i][j] != 'x' && map[i][j] != 'v'){
                npc_position[map[i][j]] = [[i], [j]];
            }
        }
    }
    return npc_position;
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
                break;
            case '2':
                pnj_two_dialog('dialog');
                player_position[2] = false;
                return player_position;
                break;
            case '3':
                pnj_three_dialog('dialog');
                player_position[2] = false;
                return player_position;
                break;
            case '4':
                pnj_three_dialog('dialog');
                player_position[2] = false;
                return player_position;
                break;
            case '5':
                pnj_three_dialog('dialog');
                player_position[2] = false;
                return player_position;
                break;
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
                    document.getElementById('line_'+i).appendChild(create_element('div', 'case_'+viewX+'_'+viewY, 'map_case map_element pnj_case', '', '1'));
                    break;
                case '2':
                    document.getElementById('line_'+i).appendChild(create_element('div', 'case_'+viewX+'_'+viewY, 'map_case map_element pnj_case', '', '2'));
                    break;
                case '3':
                    document.getElementById('line_'+i).appendChild(create_element('div', 'case_'+viewX+'_'+viewY, 'map_case map_element pnj_case', '', '3'));
                    break;
                case '4':
                    document.getElementById('line_'+i).appendChild(create_element('div', 'case_'+viewX+'_'+viewY, 'map_case map_element pnj_case', '', '4'));
                    break;
                case '5':
                    document.getElementById('line_'+i).appendChild(create_element('div', 'case_'+viewX+'_'+viewY, 'map_case map_element pnj_case', '', '5'));
                    break;
                case '7':
                    document.getElementById('line_'+i).appendChild(create_element('div', 'case_'+viewX+'_'+viewY, 'map_case map_element pnj_case', '', '7'));
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
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', '','tu veux devenir mon amis ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', 'pnj_one(true)','oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', "pnj_one(false);",'pas question !'));
}

function pnj_two_dialog(id){
    clear_dialog();
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', '','tu veux devenir mon amis ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', 'pnj_two_dialog2("dialog")','oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', "pnj_two(false);",'pas question !'));
}

function pnj_two_dialog2(id){
    clear_dialog();
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', '','tu est vraiment sur ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', 'pnj_two(true)','oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', "pnj_two(false);",'pas question !'));
}

function pnj_three_dialog(id){
    clear_dialog();
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', '','tu veux devenir mon amis ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', 'pnj_three_dialog2("dialog")','oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', "pnj_three(false);",'pas question !'));
}

function pnj_three_dialog2(id){
    clear_dialog();
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', '','avant tu dois répondre a mon énigme : Il est toujours à l’est Et ne passera jamais à l’ouest. Il assiste à un lever Et jamais à un coucher. Qui est-ce ? '));
    document.getElementById(id).appendChild(create_input('text', 'pnj_three_chat', 'simple_dialog', '', ''));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', 'pnj_three(document.getElementById("pnj_three_chat").value)','valider'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog', "pnj_three(false);",'donner sa langue au chat !'));
}

function pnj_one(value) {
    clear_dialog();
    ready = true;
    if(value){
        friendlist[1] = '1';
        draw_friendList(friendlist);
        map[npc_position[1][0]][npc_position[1][1]] = 'v';
    }else{
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '','dommage !'));
    }
}

function pnj_two(value) {
    clear_dialog();
    ready = true;
    if(value){
        friendlist[2] = '2';
        draw_friendList(friendlist);
        map[npc_position[2][0]][npc_position[2][1]] = 'v';
    }else{
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '','haha ! dommage pour toi, aller salut !'));
        friendlist[1] = null;
        draw_friendList(friendlist);
        map[npc_position[2][0]][npc_position[2][1]] = 'v';
        new_position = find_random_spot(map, limit);
        console.log("new pos : "+new_position);
        map[new_position[0]][new_position[1]] = '7';
        npc_position = find_npc(map);
    }
}

function pnj_three(value) {
    console.log(value);
    clear_dialog();
    ready = true;
    if(value === "orient" || value === "l'orient"){
        friendlist[3] = '3';
        draw_friendList(friendlist);
        map[npc_position[3][0]][npc_position[3][1]] = 'v';
    }else{
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '','perdu !'));
        draw_friendList(friendlist);
    }
}

function clear_dialog() {
    remove_class('simple_dialog');
}

function draw_friendList(friendlist) {
    remove_class('friend');
    for (var i in friendlist) {
        if(friendlist[i] != null){
            document.getElementById('friendlist').appendChild(create_element('div', '', 'friend', '', friendlist[i]));
        }
    }
}

function  find_random_spot(map, limit) {
    var isfree = false;
    var x = 0;
    var y = 0;
    while(!isfree){
        x = Math.floor(Math.random() * (+limit[1] - +limit[0])) + +limit[0];
        y = Math.floor(Math.random() * (+limit[3] - +limit[2])) + +limit[2];
        if(map[x][y] == 'v'){
            isfree = true;
        }
    }
    position = [x, y];
    return position;
}