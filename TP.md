TP n°3

Modifier la classe Weapong. 
Ajoutez une méthode 

```typescript
private calc()
```

qui recalcule les dmg. 
Les dmg ainsi calculés seront stockés sur une propriéé
```typescript
private _nextDmg:number;_
```

Ainsi, lorsque vous réclamerez les prochains dmg, vous aurez juste 
à réaliser le calcul de critique et à multiplier. 

Le calcul des dmg doit s'effectuer à chaque fois qu'un setter 
est utilisé. Bien sur il faut ajouter les setters des dégâts spéciaux 
+ base dmg
