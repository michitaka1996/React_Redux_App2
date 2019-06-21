//actions


//componentからdispachされたメソッドをreducersに受け渡すための場所
//各引数として、Menu追加時に作成するidと、そのtextなどの情報を受け取り、それをreducersへ渡す


//渡す引数、メニューのid、メニュー内容(text)、疲労度(degree)
export function addMenu(id, title, text, degree, date) {
    console.log('actions: addMenuです');
    console.log('actions: dispach()を指定することでcomponentから渡された値の入っているactionsです。typeを識別してreducersへその値を引き渡します。');
    return {
        type: "ADD",
        id: id,
        title: title,
        text: text,
        degree: degree,
        date: date
    };
}
export function deleteMenu(id) {
    console.log('actions: deleteです');
    return {
        type: "DELETE",
        id: id
    };
}

export function updateMenu(id, text) {
    console.log('actions: updateです');
    return {
        type: "UPDATE",
        id: id,
        text: text
    }
}
export function toggleDone(id) {
    console.log('actions: toggleDoneです');
    return {
        type: "TOGGLE_DONE",
        id: id
    };
}
export function createMenu(id, title, text, degree, date) {  
    console.log('actions: 疲労度1の場合のメニューを作成します ');
    return {
        type: "FIRST",
        id: id,
        title: title,
        text: text,
        degree: degree,
        date: date
    }
}

