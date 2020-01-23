const initState = {
    data:[
        {id: 1, name: "Andrei", age: 12},
        {id: 1, name: "Andrei", age: 12}
    ]
};

const projectReducer = (state=initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log(action.type);
  }
  return state;
}

export default projectReducer;