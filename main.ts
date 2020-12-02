import { Like } from "./like.component";

var like = new Like(10, true)
like.onClick()
console.log(`likesCount: ${like.likesCount}, isSelected: ${like.isSelected}`);
