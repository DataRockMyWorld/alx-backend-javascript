export default function getStudentsByLocation(list, city){
    return list.filter((mem)=> mem.location == city);
}
