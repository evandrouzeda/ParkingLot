
import Mixin from "src/mixin";
import Create from "./create";
import Delete from "./delete";
import Read from "./read";
import Update from "./update";

@Mixin(Create, Delete, Read, Update)
class CRUD<T>  { }
interface CRUD<T> extends Create<T>, Delete<T>, Read<T>, Update<T> { }

export default CRUD;


// This can live anywhere in your codebase:
