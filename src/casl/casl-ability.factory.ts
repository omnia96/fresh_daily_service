import {Injectable} from "@nestjs/common";
import {Article} from "../articles/article";
import {Ability, AbilityBuilder, AbilityClass, ExtractSubjectType} from "@casl/ability";
import {Action} from "../articles/action";
type Subjects = typeof Article | Article | 'all';
export type AppAbility = Ability<[Action, Subjects]>
@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const {can, cannot, build} = new AbilityBuilder<AppAbility>(Ability as AbilityClass<AppAbility>)
    if (user.isAdmin) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, 'all');
    }
    can(Action.Update, Article, {authorId: user.id})
    cannot(Action.Delete, Article, {isPublished: true})

    return build({
      detectSubjectType: item => item.constructor as ExtractSubjectType<Subjects>
    })
  }
}
