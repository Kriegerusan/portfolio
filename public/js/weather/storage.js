// gestion stockage local

export function AddToLocalStorage(storageName, data){
    localStorage.setItem(storageName , data);
}

export function AddToSessionStorage(storageName, data){
    try{
        sessionStorage.setItem(storageName, data);
    }
    catch{
        throw new Error("failed to add new element to session storage.");
    }
    return true;
}

export function GetFromSessionStorage(storageName){
        
    if(sessionStorage.getItem(storageName) != null)
    {
        return sessionStorage.getItem(storageName);
    }
    else
    {
        throw new Error("failed to get element from session storage.");
    }
        
}
