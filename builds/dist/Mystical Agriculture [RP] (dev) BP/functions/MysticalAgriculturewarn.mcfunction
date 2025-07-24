scoreboard objectives add mystical:timer dummy
scoreboard objectives add mystical:events dummy
scoreboard players set .10s mystical:timer 200
scoreboard players set .5s mystical:timer 100
scoreboard players add .Timer mystical:timer 1
scoreboard players operation * mystical:events = .Timer mystical:timer
scoreboard players operation .Message mystical:events %= .10s mystical:timer
scoreboard players operation .Tag mystical:events %= .5s mystical:timer
execute as @a[tag=!mystical:warn] if score .Message mystical:events matches 0 run execute unless entity @s[tag=mystical:ok] run tellraw @s {"rawtext":[{"translate":"mysticalAgriculture:message.warn.1"}]}
execute as @a[tag=!mystical:warn] if score .Message mystical:events matches 0 run execute unless entity @s[tag=mystical:ok] run tellraw @s {"rawtext":[{"translate":"mysticalAgriculture:message.warn.2"}]}
execute as @a[tag=!mystical:warn] if score .Message mystical:events matches 0 run execute unless entity @s[tag=mystical:ok] run tellraw @s {"rawtext":[{"translate":"mysticalAgriculture:message.warn.3"}]}
execute as @a[tag=!mystical:warn] if score .Message mystical:events matches 0 run execute unless entity @s[tag=mystical:ok] run tellraw @s {"rawtext":[{"translate":"mysticalAgriculture:message.warn.4"}]}
execute as @a[tag=!mystical:warn] if score .Message mystical:events matches 0 run execute unless entity @s[tag=mystical:ok] run tellraw @s {"rawtext":[{"translate":"mysticalAgriculture:message.warn.5"}]}
execute as @a[tag=!mystical:warn] if score .Message mystical:events matches 0 run execute unless entity @s[tag=mystical:ok] run tellraw @s {"rawtext":[{"translate":"mysticalAgriculture:message.warn.6"}]}
execute as @a[tag=mystical:warn] if score .Tag mystical:events matches 0 run tag @s remove mystical:warn
execute if score .Message mystical:events matches 0 run scoreboard players reset .Timer