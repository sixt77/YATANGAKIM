//js function
function create_element($tag, $id, $class, $onclick, $html) {
    var item = document.createElement($tag);
    if ($id != "" && $id != undefined) item.setAttribute("id", $id);
    if ($class != "" && $class != undefined) item.setAttribute("class", $class);
    if ($onclick != "" && $onclick != undefined) item.setAttribute("onclick", $onclick);
    if ($html != "" && $html != undefined) item.innerHTML = $html;
    return item;
}

function create_input($type, $id, $class, $name, $required) {
    var item = document.createElement("input");
    item.type = $type;
    if ($id != "" && $id != undefined) item.setAttribute("id", $id);
    if ($class != "" && $class != undefined) item.setAttribute("class", $class);
    if ($name != "" && $name != undefined) item.setAttribute("name", $name);
    if ($required != "" && $required != undefined) item.setAttribute("required", 'required');
    return item;
}

function create_button($id, $class, $value, $onclick) {
    var item = document.createElement("input");
    item.type = "button";
    if ($id != "" && $id != undefined) item.setAttribute("id", $id);
    if ($class != "" && $class != undefined) item.setAttribute("class", $class);
    if ($onclick != "" && $onclick != undefined) item.setAttribute("onclick", $onclick);
    if ($value != "" && $value != undefined) item.value = $value;
    return item;
}

//jquery function
function hide_class($class) {
    $("." + $class + "").hide();
}

function show_id($id) {
    $("#" + $id + "").show();
}

function remove_class($class) {
    $("." + $class + "").remove();
}

function remove_id($id) {
    $("#" + $id + "").remove();
}

function count_class($class) {
    return $("." + $class + "").length;
}

function set_html_value($id, $value) {
    $("#" + $id + "").value = $value;
}

function init_map() {
    var map = [
        ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
        ["x", "v", "x", "x", "x", "x", "v", "x", "x", "x", "x", "v", "x", "x", "x", "v", "v", "v", "x", "x", "v", "v", "v", "x", "v", "v", "v", "x", "v", "x"],
        ["x", "v", "v", "x", "x", "x", "v", "v", "v", "v", "v", "v", "v", "x", "v", "v", "x", "v", "v", "v", "v", "x", "v", "x", "v", "x", "v", "x", "v", "x"],
        ["x", "x", "v", "v", "1", "v", "v", "x", "x", "x", "x", "x", "v", "v", "v", "x", "x", "v", "x", "x", "x", "x", "v", "v", "v", "x", "v", "v", "v", "x"],
        ["x", "x", "x", "v", "x", "v", "x", "x", "x", "v", "x", "x", "x", "x", "x", "x", "v", "v", "x", "x", "x", "x", "x", "x", "x", "x", "x", "v", "x", "x"],
        ["x", "v", "v", "v", "x", "v", "x", "x", "v", "v", "v", "v", "v", "x", "v", "v", "v", "x", "x", "x", "x", "x", "x", "v", "v", "x", "x", "v", "x", "x"],
        ["x", "x", "x", "v", "x", "v", "x", "v", "v", "x", "x", "x", "v", "x", "v", "x", "x", "x", "v", "v", "v", "v", "v", "v", "x", "x", "x", "v", "v", "x"],
        ["x", "v", "v", "v", "x", "v", "x", "v", "x", "x", "x", "x", "x", "x", "v", "x", "x", "x", "v", "x", "x", "x", "x", "v", "x", "v", "v", "v", "x", "x"],
        ["x", "x", "v", "x", "x", "v", "v", "v", "x", "x", "x", "x", "x", "x", "v", "x", "x", "v", "v", "v", "v", "v", "x", "v", "x", "v", "x", "v", "x", "x"],
        ["x", "v", "v", "x", "x", "v", "x", "v", "x", "v", "v", "v", "v", "v", "v", "x", "x", "x", "3", "x", "x", "v", "x", "v", "x", "v", "x", "v", "v", "x"],
        ["x", "v", "x", "x", "x", "v", "x", "v", "v", "v", "x", "v", "x", "x", "v", "x", "x", "x", "v", "x", "x", "v", "v", "v", "x", "v", "x", "x", "v", "x"],
        ["x", "v", "v", "v", "v", "v", "x", "x", "v", "x", "x", "v", "x", "x", "v", "v", "v", "v", "v", "x", "x", "x", "x", "x", "x", "v", "x", "x", "v", "x"],
        ["x", "x", "v", "x", "x", "v", "x", "x", "v", "x", "x", "v", "v", "x", "v", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "v", "x", "v", "v", "x"],
        ["x", "x", "v", "x", "x", "v", "x", "x", "v", "x", "x", "x", "x", "x", "v", "x", "x", "x", "v", "v", "v", "v", "v", "x", "v", "v", "x", "v", "x", "x"],
        ["x", "x", "v", "x", "x", "2", "x", "x", "v", "x", "x", "x", "x", "x", "v", "x", "x", "x", "v", "x", "v", "x", "x", "v", "v", "x", "x", "v", "x", "x"],
        ["x", "v", "v", "x", "x", "v", "x", "v", "v", "v", "v", "v", "v", "x", "v", "x", "v", "v", "v", "x", "v", "x", "x", "v", "x", "x", "v", "v", "v", "x"],
        ["x", "v", "x", "x", "v", "v", "x", "x", "v", "x", "v", "x", "v", "v", "v", "x", "v", "x", "x", "v", "v", "x", "x", "v", "v", "v", "v", "x", "v", "x"],
        ["x", "v", "x", "x", "v", "x", "x", "x", "x", "x", "v", "x", "x", "x", "x", "x", "v", "x", "x", "x", "v", "v", "x", "x", "x", "x", "x", "x", "v", "x"],
        ["x", "v", "x", "x", "v", "x", "v", "x", "v", "x", "v", "v", "v", "x", "v", "v", "v", "v", "v", "x", "x", "v", "x", "v", "v", "v", "v", "x", "v", "x"],
        ["x", "v", "v", "x", "v", "x", "v", "v", "v", "v", "v", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "v", "x", "v", "x", "x", "v", "x", "v", "x"],
        ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "v", "v", "v", "v", "x", "v", "v", "v", "x", "v", "x", "v", "x", "x", "x", "x", "v", "x"],
        ["x", "v", "v", "v", "v", "x", "x", "x", "v", "v", "v", "x", "x", "v", "x", "v", "x", "v", "x", "v", "v", "v", "x", "v", "5", "v", "x", "x", "v", "x"],
        ["x", "x", "v", "x", "4", "v", "v", "v", "v", "x", "v", "x", "x", "v", "x", "v", "x", "v", "x", "x", "x", "x", "x", "v", "x", "v", "v", "x", "v", "x"],
        ["x", "x", "v", "x", "x", "x", "x", "x", "v", "x", "x", "x", "x", "v", "x", "v", "x", "v", "v", "x", "x", "x", "v", "v", "v", "x", "v", "x", "v", "x"],
        ["x", "x", "v", "x", "x", "x", "v", "x", "v", "v", "x", "x", "x", "v", "x", "v", "x", "x", "v", "v", "v", "v", "v", "x", "x", "x", "v", "x", "v", "x"],
        ["x", "x", "v", "v", "v", "v", "v", "x", "x", "v", "v", "v", "v", "v", "x", "v", "x", "x", "x", "v", "x", "x", "x", "x", "v", "v", "v", "v", "v", "x"],
        ["x", "x", "v", "x", "v", "x", "x", "x", "x", "x", "x", "v", "x", "v", "x", "v", "v", "v", "x", "v", "x", "x", "x", "x", "v", "x", "x", "x", "v", "x"],
        ["x", "v", "v", "x", "v", "x", "x", "v", "v", "v", "x", "x", "x", "v", "x", "x", "x", "v", "x", "x", "x", "x", "v", "x", "v", "x", "x", "x", "v", "x"],
        ["x", "x", "v", "x", "v", "x", "x", "v", "x", "v", "x", "v", "v", "6", "x", "x", "x", "v", "v", "x", "v", "v", "v", "v", "v", "v", "v", "x", "v", "x"],
        ["x", "x", "v", "x", "v", "v", "v", "v", "x", "v", "v", "v", "x", "v", "v", "x", "x", "x", "v", "v", "v", "x", "x", "x", "x", "x", "v", "v", "v", "x"],
        ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "8", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
    ];
    return map;
}

function find_npc(map) {
    var npc_position = [];
    for (var i in map) {
        for (var j in map[i]) {
            if (map[i][j] != 'x' && map[i][j] != 'v') {
                npc_position[map[i][j]] = [[i], [j]];
            }
        }
    }
    return npc_position;
}

function build_map(id, map, limit) {
    draw_view(map, 0, 0, 10, 10, limit, id);
    spawn_player(1, 1);
}


function player_moove(player_postion, x, y, limit, map) {
    var start = [player_postion[0], player_postion[1]];
    var end = check_case(player_postion, x, y, limit, map);
    console.log(player_postion);
    draw_view(map, end[0], end[1], 10, 10, limit, "map");
    draw_player(player_postion, map);
    return player_postion;
}

function check_case(player_position, x, y, limit, map) {
    if (player_position[0] + x >= limit[0] && player_position[0] + x <= limit[1] && player_position[1] + y >= limit[2] && player_position[1] + y <= limit[3]) {
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
                pnj_four_dialog('dialog');
                player_position[2] = false;
                return player_position;
                break;
            case '5':
                pnj_five_dialog('dialog');
                player_position[2] = false;
                return player_position;
                break;

            case '6':
                pnj_six_dialog('dialog');
                player_position[2] = false;
                return player_position;
                break;

            case '7':
                pnj_seven_dialog('dialog');
                player_position[2] = false;
                return player_position;
                break;
            case '8':
                pnj_height(friendlist ,inventory);
                player_position[2] = true;
                return player_position;
                break;
        }
    } else {
        return player_position;
    }
}

function draw_player(player_position) {
    document.getElementById('case_' + player_position[0] + '_' + player_position[1]).classList.add("caract_principal");
}

function spawn_player(x, y) {
    document.getElementById('case_' + x + '_' + y).classList.add("caract_principal");;
}

function draw_view(map, x, y, height, width, limit, id) {
    var i = 0;
    var j = 0;

    //efface la view précédente
    remove_class("map_element");


    //centrage de la vue
    //largeur
    while (x - Math.floor(width / 2) < limit[0]) {
        x = x + 1;
    }
    while (x + Math.floor(width / 2) - 1 > limit[1]) {
        x = x - 1;
    }
    //hauteur
    while (y - Math.floor(height / 2) < limit[2]) {
        y = y + 1;
    }
    while (y + Math.floor(height / 2) - 1 > limit[3]) {
        y = y - 1;
    }

    startY = y - Math.floor(height / 2);
    viewX = x - Math.floor(width / 2);
    viewY = y - Math.floor(height / 2);

    //dessin de la vue
    while (i < height) {
        document.getElementById(id).appendChild(create_element('div', 'line_' + i, 'map_line map_element', '', ''));
        while (j < width) {
            switch (map[viewX][viewY]) {
                case 'v':
                    document.getElementById('line_' + i).appendChild(create_element('div', 'case_' + viewX + '_' + viewY, 'map_case map_element free_case', '', ''));
                    break;
                case 'x':
                    document.getElementById('line_' + i).appendChild(create_element('div', 'case_' + viewX + '_' + viewY, 'map_case map_element disable_case', '', ''));
                    break;
                case '1':
                    document.getElementById('line_' + i).appendChild(create_element('div', 'case_' + viewX + '_' + viewY, 'map_case map_element pnj_case caract_pnj1', '', '1'));
                    break;
                case '2':
                    document.getElementById('line_' + i).appendChild(create_element('div', 'case_' + viewX + '_' + viewY, 'map_case map_element pnj_case caract_pnj2', '', '2'));
                    break;
                case '3':
                    document.getElementById('line_' + i).appendChild(create_element('div', 'case_' + viewX + '_' + viewY, 'map_case map_element pnj_case caract_pnj3', '', '3'));
                    break;
                case '4':
                    document.getElementById('line_' + i).appendChild(create_element('div', 'case_' + viewX + '_' + viewY, 'map_case map_element pnj_case caract_pnj4', '', '4'));
                    break;
                case '5':
                    document.getElementById('line_' + i).appendChild(create_element('div', 'case_' + viewX + '_' + viewY, 'map_case map_element pnj_case caract_pnj5', '', '5'));
                    break;
                case '6':
                    document.getElementById('line_' + i).appendChild(create_element('div', 'case_' + viewX + '_' + viewY, 'map_case map_element pnj_case caract_pnj6', '', '6'));
                    break;
                case '7':
                    document.getElementById('line_' + i).appendChild(create_element('div', 'case_' + viewX + '_' + viewY, 'map_case map_element pnj_case caract_pnj7', '', '7'));
                    break;
                case '8':
                    document.getElementById('line_' + i).appendChild(create_element('div', 'case_' + viewX + '_' + viewY, 'map_case map_element pnj_case caract_pnj8', '', '7'));
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
function remove_npc_dialog(id){
    clear_dialog();
    document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'tu en es sur de vouloir supprimer cet amis ?'));
    document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog text_dialog', 'remove_npc("'+id+'")', 'oui !'));
    document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog text_dialog', 'clear_dialog()', 'non !'));
}
function remove_npc(id){
    clear_dialog();
    friendlist[id]=null;
    new_position = find_random_spot(map, limit, player_position);
    map[new_position[0]][new_position[1]] = id;
    npc_position = find_npc(map);
    document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'très bien, je m\'en vais !'));
    draw_friendList(friendlist);
}

function pnj_one_dialog(id) {
    clear_dialog();
    speak_npc("bob kayak");
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'Veux-tu devenir mon ami ? Veux-tu devenir mon ami ? Veux-tu devenir mon ami ? Veux-tu devenir mon ami ? '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_left', 'pnj_one(true)', 'oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_right', "pnj_one(false);", 'pas question !'));
}

function pnj_two_dialog(id) {
    clear_dialog();
    speak_npc("salvador dali");
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'tu veux devenir mon amis ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_left', 'pnj_two_dialog2("dialog")', 'oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_right', "pnj_two(false);", 'pas question !'));
}

function pnj_two_dialog2(id) {
    clear_dialog();
    speak_npc("salvador dali");
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'tu est vraiment sur ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_left', 'pnj_two(true)', 'oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_right', "pnj_two(false);", 'pas question !'));
}

function pnj_three_dialog(id) {
    clear_dialog();
    speak_npc("père fouras");
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'tu veux devenir mon amis ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_left', 'pnj_three_dialog2("dialog")', 'oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_right', "pnj_three(false);", 'pas question !'));
}

function pnj_three_dialog2(id) {
    clear_dialog();
    speak_npc("père fouras");
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'avant tu dois répondre a mon énigme : Il est toujours à l’est Et ne passera jamais à l’ouest. Il assiste à un lever Et jamais à un coucher. Qui est-ce ? '));
    document.getElementById(id).appendChild(create_input('text', 'pnj_three_chat', 'simple_dialog input_dialog', '', ''));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_left', 'pnj_three(document.getElementById("pnj_three_chat").value)', 'valider'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_right', "pnj_three(false);", 'donner sa langue au chat !'));
}

function pnj_four_dialog(id) {
    clear_dialog();
    speak_npc("damso");
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'tu veux devenir mon amis ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_left', 'pnj_four(true)', 'oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_right', "pnj_four(false);", 'pas question !'));
}

function pnj_five_dialog(id) {
    clear_dialog();
    speak_npc("yatanga kim");
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'tu veux devenir mon amis ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_left', 'pnj_five_dialog2("dialog")', 'oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_right', "pnj_five(false);", 'pas question !'));
}

function pnj_five_dialog2(id) {
    clear_dialog();
    speak_npc("yatanga kim");
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'tu en es sur, je n\'ai pas beaucoup d\'amis...'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_left', 'pnj_five(true)', 'oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_right', "pnj_five(false);", 'pas question !'));
}
function pnj_six_dialog(id) {
    clear_dialog();
    speak_npc("yves klein");
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'tu veux devenir mon amis ?'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_left', 'pnj_six(true)', 'oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_right', "pnj_six(false);", 'pas question !'));
}


function pnj_seven_dialog(id) {
    clear_dialog();
    speak_npc("salvador dali");
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'tu nous as retrouver ? je te laisse une chance de nous reprendre'));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_left', 'pnj_seven(true)', 'oui ! '));
    document.getElementById(id).appendChild(create_element('div', '', 'simple_dialog button button_right', "pnj_seven(false);", 'pas question !'));
}

function pnj_one(value) {
    clear_dialog();
    ready = true;
    if (value) {
        friendlist[1] = 'bob kayak';
        draw_friendList(friendlist);
        map[npc_position[1][0]][npc_position[1][1]] = 'v';
        draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
        draw_player(player_position);
    } else {
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'dommage !'));
    }
}

function pnj_two(value) {
    clear_dialog();
    ready = true;
    if (value) {
        friendlist[2] = 'salvador dali';
        draw_friendList(friendlist);
        map[npc_position[2][0]][npc_position[2][1]] = 'v';
        draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
        draw_player(player_position);
    } else {
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'haha ! dommage pour toi, aller salut ! et je te prend le pnj1'));
        if(friendlist[1] != null){
            friendlist[1] = null;
            draw_friendList(friendlist);
            map[npc_position[2][0]][npc_position[2][1]] = 'v';
            new_position = find_random_spot(map, limit, player_position);
            map[new_position[0]][new_position[1]] = '7';
            npc_position = find_npc(map);
            draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
            draw_player(player_position);
        }else{
            map[npc_position[2][0]][npc_position[2][1]] = 'v';
            new_position = find_random_spot(map, limit, player_position);
            map[new_position[0]][new_position[1]] = '2';
            npc_position = find_npc(map);
            draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
            draw_player(player_position);
        }

    }
}

function pnj_three(value) {
    console.log(value);
    clear_dialog();
    ready = true;
    if (value === "orient" || value === "l'orient") {
        friendlist[3] = 'père fouras';
        draw_friendList(friendlist);
        map[npc_position[3][0]][npc_position[3][1]] = 'v';
        draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
        draw_player(player_position);
    } else {
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'perdu !'));
        draw_friendList(friendlist);
        draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
        draw_player(player_position);
    }
}

function pnj_four(value) {
    clear_dialog();
    ready = true;
    if (value) {
        friendlist[4] = 'damso';
        draw_friendList(friendlist);
        map[npc_position[4][0]][npc_position[4][1]] = 'v';
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '', 'tu y est presque, la sortie se trouve au sud, ha !fait attention au yatanga kim, il m\'a déja trahie...'));
        inventory[1] = true;
        draw_inventory(inventory);
        draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
        draw_player(player_position);
    } else {
        map[npc_position[4][0]][npc_position[4][1]] = 'v';
        new_position = find_random_spot(map, limit, player_position);
        map[new_position[0]][new_position[1]] = '4';
        npc_position = find_npc(map);
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '', 'dommage !'));
        draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
        draw_player(player_position);
    }
}

function pnj_five(value) {
    clear_dialog();
    ready = true;
    if (value) {
        friendlist[5] = 'yatanga kim';
        draw_friendList(friendlist);
        map[npc_position[5][0]][npc_position[5][1]] = 'v';
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '', 'tu y est presque, la sortie se trouve au nord'));
        inventory[2] = true;
        draw_inventory(inventory);
        draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
        draw_player(player_position);
    } else {
        map[npc_position[5][0]][npc_position[5][1]] = 'v';
        new_position = find_random_spot(map, limit, player_position);
        map[new_position[0]][new_position[1]] = '5';
        npc_position = find_npc(map);
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '', 'dommage !'));
        draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
        draw_player(player_position);

    }
}

function pnj_six(value) {
    clear_dialog();
    ready = true;
    if (value) {
        friendlist[6] = 'yves klein';
        draw_friendList(friendlist);
        map[npc_position[6][0]][npc_position[6][1]] = 'v';
        draw_view(map, player_position[0], player_position[1], 10, 10, limit, "map");
        draw_player(player_position);
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'bien vu ! la sortie se trouve juste après tu as juste a continuer'));
    } else {
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'dommage !'));
    }
}

function  pnj_height(friendlist, inventory) {
    ready = true;
    karma = 0;
    if(inventory[1] == true && inventory[2] ==  true){
        if(friendlist[1] != null){
            karma = karma +1;
        }
        if(friendlist[2] != null){
            karma = karma -1;
        }
        if(friendlist[3] != null){
            karma = karma -1;
        }
        if(friendlist[4] != null){
            karma = karma -1;
        }
        if(friendlist[5] != null){
            karma = karma +1;
        }
        if(friendlist[6] != null){
            karma = karma +1;
        }
        if(karma > 0){
            location.reload();
        }else{
            clear_dialog();
            document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '', 'on ta eu looser !'));
            document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '', 'les personnages trahissent le héros et s\'en vont par la porte le laissant sans aucun moyen de sortir !'));
            friendlist[2] = null;
            friendlist[3] = null;
            friendlist[4] = null;
            inventory[1] = null;
            inventory[2] = null;
            draw_friendList(friendlist);
        }
    }else{
        clear_dialog();
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog', '', 'il te manque des clé, parle au différent pnj pour les trouver'));
    }

}

function pnj_seven(value) {
    clear_dialog();
    ready = true;
    if (value) {
        friendlist[1] = 'bob kayak';
        friendlist[2] = 'salvador dali';
        draw_friendList(friendlist);
        map[npc_position[7][0]][npc_position[7][1]] = 'v';
    } else {
        document.getElementById('dialog').appendChild(create_element('div', '', 'simple_dialog text_dialog', '', 'dommage !'));
    }
}

function speak_npc(name) {
    remove_class("pnj_name");
    document.getElementById('pnj_name').appendChild(create_element('div', '', 'pnj_name', '', name));
}

function clear_dialog() {
    remove_class('simple_dialog');
}

function draw_friendList(friendlist) {
    remove_class('friend');
    for (var i in friendlist) {
        if (friendlist[i] != null) {
            document.getElementById('friendlist').appendChild(create_element('div', '', 'friend', 'remove_npc_dialog("'+i+'")', friendlist[i]));
        }
    }
}
function draw_inventory(inventory) {
    remove_class('item');
    if(inventory[1] != null){
        document.getElementById('inventory').appendChild(create_element('div', '', 'item', '', "1ère clé"));
    }
    if(inventory[2] != null){
        document.getElementById('inventory').appendChild(create_element('div', '', 'item', '', "2eme clé"));
    }
}

function find_random_spot(map, limit, player_position) {
    var isfree = false;
    var x = 0;
    var y = 0;
    while (!isfree) {
        x = Math.floor(Math.random() * (+limit[1] - +limit[0])) + +limit[0];
        y = Math.floor(Math.random() * (+limit[3] - +limit[2])) + +limit[2];
        if (map[x][y] == 'v' && x != player_position[0] && y != player_position[1]) {
            isfree = true;
        }
    }
    position = [x, y];
    return position;
}