export default function getListStudentIds(list){
    if (Array.isArray(list)) {
	return list.map((mem)=> mem.id);
    }else {
	return [];
    }
}

	    
