(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $none_=>_none (func))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $none_=>_f64 (func (result f64)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "Math" "random" (func $~lib/bindings/Math/random (result f64)))
 (import "game" "draw" (func $assembly/game/draw (param i32)))
 (global $~lib/rt/stub/offset (mut i32) (i32.const 0))
 (global $assembly/game/snake (mut i32) (i32.const 0))
 (global $assembly/game/buffer (mut i32) (i32.const 0))
 (global $assembly/game/seedGen (mut i32) (i32.const 0))
 (global $assembly/snake/Snake i32 (i32.const 3))
 (global $~lib/rt/__rtti_base i32 (i32.const 1536))
 (memory $0 1)
 (data (i32.const 1036) "<")
 (data (i32.const 1048) "\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1100) "<")
 (data (i32.const 1112) "\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00s\00t\00u\00b\00.\00t\00s")
 (data (i32.const 1164) ",")
 (data (i32.const 1176) "\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1212) ",")
 (data (i32.const 1224) "\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1260) "\1c")
 (data (i32.const 1272) "\t\00\00\00\08\00\00\00\01")
 (data (i32.const 1292) "<")
 (data (i32.const 1304) "\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1356) "|")
 (data (i32.const 1368) "\01\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y")
 (data (i32.const 1484) ",")
 (data (i32.const 1496) "\01\00\00\00\1c\00\00\00A\00r\00r\00a\00y\00 \00i\00s\00 \00e\00m\00p\00t\00y")
 (data (i32.const 1536) "\0b\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 1572) " \00\00\00\00\00\00\00\02A\00\00\00\00\00\00\02\t")
 (data (i32.const 1604) "\02A")
 (table $0 2 funcref)
 (elem $0 (i32.const 1) $assembly/buffer/Buffer#constructor~anonymous|0)
 (export "gameStep" (func $assembly/game/gameStep))
 (export "snake" (global $assembly/game/snake))
 (export "Snake" (global $assembly/snake/Snake))
 (export "Snake#constructor" (func $assembly/snake/Snake#constructor))
 (export "Snake#handleEvents" (func $assembly/snake/Snake#handleEvents))
 (export "Snake#getBody" (func $assembly/snake/Snake#getBody))
 (export "Snake#moveOnce" (func $assembly/snake/Snake#moveOnce))
 (export "Snake#checkAlive" (func $assembly/snake/Snake#checkAlive))
 (export "Snake#checkAteSeed" (func $assembly/snake/Snake#checkAteSeed))
 (export "__new" (func $~lib/rt/stub/__new))
 (export "__pin" (func $~lib/rt/stub/__pin))
 (export "__unpin" (func $~lib/rt/stub/__unpin))
 (export "__collect" (func $~lib/rt/stub/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "memory" (memory $0))
 (start $~start)
 (func $assembly/point/Point#set:x (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $assembly/point/Point#set:y (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/rt/stub/maybeGrowMemory (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  memory.size
  local.tee $1
  i32.const 16
  i32.shl
  i32.const 15
  i32.add
  i32.const -16
  i32.and
  local.tee $2
  i32.gt_u
  if
   local.get $1
   local.get $0
   local.get $2
   i32.sub
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.tee $2
   local.get $1
   local.get $2
   i32.gt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $2
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
  end
  local.get $0
  global.set $~lib/rt/stub/offset
 )
 (func $~lib/rt/stub/__alloc (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 33
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/stub/offset
  global.get $~lib/rt/stub/offset
  i32.const 4
  i32.add
  local.tee $2
  local.get $0
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.tee $0
  i32.add
  call $~lib/rt/stub/maybeGrowMemory
  local.get $0
  call $assembly/point/Point#set:x
  local.get $2
 )
 (func $~lib/rt/common/OBJECT#set:gcInfo2 (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/rt/common/OBJECT#set:rtId (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/rt/common/OBJECT#set:rtSize (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/rt/stub/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 1073741804
  i32.gt_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 86
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.add
  call $~lib/rt/stub/__alloc
  local.tee $3
  i32.const 4
  i32.sub
  local.tee $2
  i32.const 0
  call $assembly/point/Point#set:y
  local.get $2
  i32.const 0
  call $~lib/rt/common/OBJECT#set:gcInfo2
  local.get $2
  local.get $1
  call $~lib/rt/common/OBJECT#set:rtId
  local.get $2
  local.get $0
  call $~lib/rt/common/OBJECT#set:rtSize
  local.get $3
  i32.const 16
  i32.add
 )
 (func $assembly/point/Point#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  i32.const 8
  i32.const 4
  call $~lib/rt/stub/__new
  local.tee $2
  local.get $0
  call $assembly/point/Point#set:x
  local.get $2
  local.get $1
  call $assembly/point/Point#set:y
  local.get $2
  local.get $0
  call $assembly/point/Point#set:x
  local.get $2
  local.get $1
  call $assembly/point/Point#set:y
  local.get $2
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.get $1
   i32.lt_u
   if
    loop $while-continue|0
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|0
     end
    end
   else
    loop $while-continue|1
     local.get $4
     if
      local.get $0
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|1
     end
    end
   end
  end
 )
 (func $~lib/rt/__newArray (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 2
  i32.shl
  local.tee $3
  i32.const 0
  call $~lib/rt/stub/__new
  local.set $2
  i32.const 16
  local.get $1
  call $~lib/rt/stub/__new
  local.tee $1
  local.get $2
  i32.store
  local.get $1
  local.get $2
  i32.store offset=4
  local.get $1
  local.get $3
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=12
  local.get $1
 )
 (func $~lib/array/Array<assembly/point/Point>#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
 )
 (func $assembly/snake/Snake#set:isAlive (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store8 offset=4
 )
 (func $assembly/snake/Snake#constructor (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 3
   call $~lib/rt/stub/__new
   local.set $0
  end
  local.get $0
  i32.const 0
  call $assembly/point/Point#set:x
  local.get $0
  i32.const 0
  call $assembly/snake/Snake#set:isAlive
  local.get $0
  i32.const 0
  call $~lib/rt/common/OBJECT#set:gcInfo2
  local.get $0
  i32.const 0
  call $~lib/rt/common/OBJECT#set:rtId
  i32.const 5
  i32.const 5
  call $~lib/rt/__newArray
  local.tee $1
  i32.load offset=4
  drop
  local.get $1
  i32.const 0
  i32.const 5
  i32.const 5
  call $assembly/point/Point#constructor
  call $~lib/array/Array<assembly/point/Point>#__uset
  local.get $1
  i32.const 1
  i32.const 5
  i32.const 6
  call $assembly/point/Point#constructor
  call $~lib/array/Array<assembly/point/Point>#__uset
  local.get $1
  i32.const 2
  i32.const 5
  i32.const 7
  call $assembly/point/Point#constructor
  call $~lib/array/Array<assembly/point/Point>#__uset
  local.get $1
  i32.const 3
  i32.const 5
  i32.const 8
  call $assembly/point/Point#constructor
  call $~lib/array/Array<assembly/point/Point>#__uset
  local.get $1
  i32.const 4
  i32.const 5
  i32.const 9
  call $assembly/point/Point#constructor
  call $~lib/array/Array<assembly/point/Point>#__uset
  local.get $0
  local.get $1
  call $assembly/point/Point#set:x
  local.get $0
  i32.const 1
  call $assembly/snake/Snake#set:isAlive
  local.get $0
  i32.const 0
  i32.const 0
  call $assembly/point/Point#constructor
  call $~lib/rt/common/OBJECT#set:rtId
  local.get $0
  i32.const 0
  call $~lib/rt/common/OBJECT#set:gcInfo2
  local.get $0
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $1
  local.set $2
  loop $while-continue|0
   local.get $2
   if
    local.get $0
    local.tee $1
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    i32.const 0
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
 )
 (func $~lib/array/Array<i32>#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  i32.const 16
  i32.const 6
  call $~lib/rt/stub/__new
  local.tee $0
  i32.const 0
  call $assembly/point/Point#set:x
  local.get $0
  i32.const 0
  call $assembly/point/Point#set:y
  local.get $0
  i32.const 0
  call $~lib/rt/common/OBJECT#set:gcInfo2
  local.get $0
  i32.const 0
  call $~lib/rt/common/OBJECT#set:rtId
  i32.const 40
  i32.const 0
  call $~lib/rt/stub/__new
  local.tee $1
  i32.const 40
  call $~lib/memory/memory.fill
  local.get $0
  local.get $1
  call $assembly/point/Point#set:x
  local.get $0
  local.get $1
  call $assembly/point/Point#set:y
  local.get $0
  i32.const 40
  call $~lib/rt/common/OBJECT#set:gcInfo2
  local.get $0
  i32.const 10
  call $~lib/rt/common/OBJECT#set:rtId
  local.get $0
 )
 (func $~lib/array/Array<i32>#fill (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=4
  local.set $3
  i32.const 0
  local.get $0
  i32.load offset=12
  local.tee $2
  local.get $2
  i32.const 0
  i32.gt_s
  select
  local.set $1
  loop $for-loop|0
   local.get $1
   local.get $2
   i32.lt_s
   if
    local.get $3
    local.get $1
    i32.const 2
    i32.shl
    i32.add
    i32.const 0
    i32.store
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  local.get $0
 )
 (func $assembly/buffer/Buffer#constructor~anonymous|0 (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  call $~lib/array/Array<i32>#constructor
  call $~lib/array/Array<i32>#fill
 )
 (func $start:assembly/game
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  i32.const 1628
  global.set $~lib/rt/stub/offset
  i32.const 0
  call $assembly/snake/Snake#constructor
  global.set $assembly/game/snake
  i32.const 4
  i32.const 7
  call $~lib/rt/stub/__new
  local.tee $1
  i32.const 0
  call $assembly/point/Point#set:x
  call $~lib/array/Array<i32>#constructor
  call $~lib/array/Array<i32>#fill
  local.tee $5
  i32.load offset=12
  local.tee $2
  i32.const 8
  call $~lib/rt/__newArray
  local.tee $3
  i32.load offset=4
  local.set $4
  loop $for-loop|0
   local.get $0
   local.get $2
   local.get $5
   i32.load offset=12
   local.tee $6
   local.get $2
   local.get $6
   i32.lt_s
   select
   i32.lt_s
   if
    local.get $0
    i32.const 2
    i32.shl
    local.tee $6
    local.get $4
    i32.add
    local.get $5
    i32.load offset=4
    local.get $6
    i32.add
    i32.load
    local.get $0
    local.get $5
    i32.const 1280
    i32.load
    call_indirect $0 (type $i32_i32_i32_=>_i32)
    i32.store
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  local.get $1
  local.get $3
  call $assembly/point/Point#set:x
  local.get $1
  global.set $assembly/game/buffer
  i32.const 5
  i32.const 10
  call $~lib/rt/stub/__new
  local.tee $0
  i32.const 0
  call $assembly/point/Point#set:x
  local.get $0
  i32.const 0
  call $assembly/snake/Snake#set:isAlive
  local.get $0
  i32.const 0
  i32.const 0
  call $assembly/point/Point#constructor
  call $assembly/point/Point#set:x
  local.get $0
  i32.const 1
  call $assembly/snake/Snake#set:isAlive
  local.get $0
  global.set $assembly/game/seedGen
 )
 (func $assembly/snake/Snake#getBody (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $assembly/seedGenerator/SeedGenerator#getRandPosition (result i32)
  call $~lib/bindings/Math/random
  f64.const 9
  f64.mul
  i32.trunc_f64_s
 )
 (func $~lib/array/Array<assembly/point/Point>#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1312
   i32.const 1232
   i32.const 114
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.eqz
  if
   i32.const 1376
   i32.const 1232
   i32.const 118
   i32.const 40
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
 )
 (func $assembly/point/Point#equal (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load
  local.get $1
  i32.load
  i32.eq
  if (result i32)
   local.get $0
   i32.load offset=4
   local.get $1
   i32.load offset=4
   i32.eq
  else
   i32.const 0
  end
 )
 (func $~lib/array/ensureCapacity (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $1
  local.get $0
  i32.load offset=8
  local.tee $5
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   local.get $1
   i32.const 268435455
   i32.gt_u
   if
    i32.const 1184
    i32.const 1232
    i32.const 19
    i32.const 48
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.load
   local.set $6
   local.get $5
   i32.const 1
   i32.shl
   local.tee $2
   i32.const 1073741820
   local.get $2
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $2
   local.get $1
   i32.const 8
   local.get $1
   i32.const 8
   i32.gt_u
   select
   i32.const 2
   i32.shl
   local.tee $1
   local.get $1
   local.get $2
   i32.lt_u
   select
   local.tee $3
   i32.const 1073741804
   i32.gt_u
   if
    i32.const 1056
    i32.const 1120
    i32.const 99
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   end
   local.get $6
   i32.const 16
   i32.sub
   local.tee $1
   i32.const 4
   i32.sub
   local.tee $7
   i32.load
   local.set $4
   global.get $~lib/rt/stub/offset
   local.get $1
   local.get $4
   i32.add
   i32.eq
   local.set $9
   local.get $3
   i32.const 16
   i32.add
   local.tee $2
   i32.const 19
   i32.add
   i32.const -16
   i32.and
   i32.const 4
   i32.sub
   local.set $8
   local.get $2
   local.get $4
   i32.gt_u
   if
    local.get $9
    if
     local.get $2
     i32.const 1073741820
     i32.gt_u
     if
      i32.const 1056
      i32.const 1120
      i32.const 52
      i32.const 33
      call $~lib/builtins/abort
      unreachable
     end
     local.get $1
     local.get $8
     i32.add
     call $~lib/rt/stub/maybeGrowMemory
     local.get $7
     local.get $8
     call $assembly/point/Point#set:x
    else
     local.get $8
     local.get $4
     i32.const 1
     i32.shl
     local.tee $2
     local.get $2
     local.get $8
     i32.lt_u
     select
     call $~lib/rt/stub/__alloc
     local.tee $2
     local.get $1
     local.get $4
     call $~lib/memory/memory.copy
     local.get $2
     local.set $1
    end
   else
    local.get $9
    if
     local.get $1
     local.get $8
     i32.add
     global.set $~lib/rt/stub/offset
     local.get $7
     local.get $8
     call $assembly/point/Point#set:x
    end
   end
   local.get $1
   i32.const 4
   i32.sub
   local.get $3
   call $~lib/rt/common/OBJECT#set:rtSize
   local.get $5
   local.get $1
   i32.const 16
   i32.add
   local.tee $1
   i32.add
   local.get $3
   local.get $5
   i32.sub
   call $~lib/memory/memory.fill
   local.get $1
   local.get $6
   i32.ne
   if
    local.get $0
    local.get $1
    i32.store
    local.get $0
    local.get $1
    i32.store offset=4
   end
   local.get $0
   local.get $3
   i32.store offset=8
  end
 )
 (func $assembly/buffer/Buffer#set (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $0
  i32.load
  local.get $1
  i32.load
  call $~lib/array/Array<assembly/point/Point>#__get
  local.set $0
  local.get $1
  i32.load offset=4
  local.tee $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   local.get $1
   i32.const 0
   i32.lt_s
   if
    i32.const 1312
    i32.const 1232
    i32.const 130
    i32.const 22
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $3
   call $~lib/array/ensureCapacity
   local.get $0
   local.get $3
   call $~lib/rt/common/OBJECT#set:rtId
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
 )
 (func $assembly/buffer/Buffer#setArr (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  loop $for-loop|0
   local.get $3
   local.get $1
   i32.load offset=12
   i32.lt_s
   if
    local.get $0
    local.get $1
    local.get $3
    call $~lib/array/Array<assembly/point/Point>#__get
    local.get $2
    call $assembly/buffer/Buffer#set
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
 )
 (func $assembly/point/Point#copy (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.load
  call $assembly/point/Point#set:x
  local.get $0
  local.get $1
  i32.load offset=4
  call $assembly/point/Point#set:y
 )
 (func $assembly/snake/Snake#moveOnce (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load
  local.tee $2
  i32.load offset=12
  local.tee $1
  i32.const 0
  i32.le_s
  if
   i32.const 1504
   i32.const 1232
   i32.const 291
   i32.const 18
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.load offset=4
  local.get $1
  i32.const 1
  i32.sub
  local.tee $3
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $1
  local.get $2
  local.get $3
  call $~lib/rt/common/OBJECT#set:rtId
  local.get $0
  i32.const 0
  i32.const 0
  call $assembly/point/Point#constructor
  call $~lib/rt/common/OBJECT#set:rtId
  local.get $0
  i32.load offset=12
  local.get $1
  call $assembly/point/Point#copy
  local.get $1
  local.get $0
  i32.load
  i32.const 0
  call $~lib/array/Array<assembly/point/Point>#__get
  call $assembly/point/Point#copy
  block $break|0
   block $case3|0
    block $case2|0
     block $case1|0
      block $case0|0
       local.get $0
       i32.load offset=8
       br_table $case0|0 $case1|0 $case2|0 $case3|0 $break|0
      end
      local.get $1
      local.get $1
      i32.load offset=4
      i32.const 1
      i32.sub
      call $assembly/point/Point#set:y
      br $break|0
     end
     local.get $1
     local.get $1
     i32.load offset=4
     i32.const 1
     i32.add
     call $assembly/point/Point#set:y
     br $break|0
    end
    local.get $1
    local.get $1
    i32.load
    i32.const 1
    i32.add
    call $assembly/point/Point#set:x
    br $break|0
   end
   local.get $1
   local.get $1
   i32.load
   i32.const 1
   i32.sub
   call $assembly/point/Point#set:x
  end
  local.get $0
  i32.load
  local.tee $0
  i32.load offset=12
  i32.const 1
  i32.add
  local.set $2
  local.get $0
  local.get $2
  call $~lib/array/ensureCapacity
  local.get $0
  i32.load offset=4
  local.tee $3
  i32.const 4
  i32.add
  local.get $3
  local.get $2
  i32.const 1
  i32.sub
  i32.const 2
  i32.shl
  call $~lib/memory/memory.copy
  local.get $3
  local.get $1
  i32.store
  local.get $0
  local.get $2
  call $~lib/rt/common/OBJECT#set:rtId
 )
 (func $assembly/snake/Snake#getHead (param $0 i32) (result i32)
  local.get $0
  i32.load
  i32.const 0
  call $~lib/array/Array<assembly/point/Point>#__get
 )
 (func $assembly/snake/Snake#checkAlive (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  block $__inlined_func$assembly/snake/Snake#checkHeadCollidingWithBody (result i32)
   i32.const 1
   local.set $1
   loop $for-loop|0
    local.get $1
    local.get $0
    i32.load
    i32.load offset=12
    i32.lt_s
    if
     i32.const 1
     local.get $0
     i32.load
     local.get $1
     call $~lib/array/Array<assembly/point/Point>#__get
     local.get $0
     call $assembly/snake/Snake#getHead
     call $assembly/point/Point#equal
     br_if $__inlined_func$assembly/snake/Snake#checkHeadCollidingWithBody
     drop
     local.get $1
     i32.const 1
     i32.add
     local.set $1
     br $for-loop|0
    end
   end
   i32.const 0
  end
  if (result i32)
   i32.const 1
  else
   local.get $0
   call $assembly/snake/Snake#getHead
   local.tee $1
   i32.load
   i32.const 0
   i32.lt_s
   if (result i32)
    i32.const 1
   else
    local.get $1
    i32.load
    i32.const 9
    i32.gt_s
   end
   if (result i32)
    i32.const 1
   else
    local.get $1
    i32.load offset=4
    i32.const 0
    i32.lt_s
   end
   if (result i32)
    i32.const 1
   else
    local.get $1
    i32.load offset=4
    i32.const 9
    i32.gt_s
   end
  end
  i32.eqz
  call $assembly/snake/Snake#set:isAlive
  local.get $0
  i32.load8_u offset=4
  i32.const 0
  i32.ne
 )
 (func $assembly/snake/Snake#checkAteSeed (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $assembly/snake/Snake#getHead
  local.get $1
  i32.load
  call $assembly/point/Point#equal
  if
   local.get $0
   i32.load offset=12
   local.set $2
   local.get $0
   i32.load
   local.tee $3
   i32.load offset=12
   local.tee $0
   i32.const 1
   i32.add
   local.set $4
   local.get $3
   local.get $4
   call $~lib/array/ensureCapacity
   local.get $3
   i32.load offset=4
   local.get $0
   i32.const 2
   i32.shl
   i32.add
   local.get $2
   i32.store
   local.get $3
   local.get $4
   call $~lib/rt/common/OBJECT#set:rtId
   local.get $1
   i32.const 1
   call $assembly/snake/Snake#set:isAlive
  end
 )
 (func $assembly/game/gameStep
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $assembly/game/snake
  i32.load8_u offset=4
  if
   global.get $assembly/game/snake
   i32.load
   local.set $1
   global.get $assembly/game/snake
   local.set $3
   global.get $assembly/game/seedGen
   local.tee $4
   i32.load8_u offset=4
   if
    local.get $4
    i32.const 0
    call $assembly/snake/Snake#set:isAlive
    local.get $4
    call $assembly/seedGenerator/SeedGenerator#getRandPosition
    call $assembly/seedGenerator/SeedGenerator#getRandPosition
    call $assembly/point/Point#constructor
    call $assembly/point/Point#set:x
    loop $while-continue|0
     block $__inlined_func$assembly/seedGenerator/SeedGenerator#checkSeedCollisionWithBody (result i32)
      i32.const 0
      local.set $0
      local.get $3
      i32.load
      local.set $2
      loop $for-loop|0
       local.get $0
       local.get $2
       i32.load offset=12
       i32.lt_s
       if
        i32.const 1
        local.get $2
        local.get $0
        call $~lib/array/Array<assembly/point/Point>#__get
        local.get $4
        i32.load
        call $assembly/point/Point#equal
        br_if $__inlined_func$assembly/seedGenerator/SeedGenerator#checkSeedCollisionWithBody
        drop
        local.get $0
        i32.const 1
        i32.add
        local.set $0
        br $for-loop|0
       end
      end
      i32.const 0
     end
     if
      local.get $4
      call $assembly/seedGenerator/SeedGenerator#getRandPosition
      call $assembly/seedGenerator/SeedGenerator#getRandPosition
      call $assembly/point/Point#constructor
      call $assembly/point/Point#set:x
      br $while-continue|0
     end
    end
   end
   local.get $4
   i32.load
   local.set $0
   global.get $assembly/game/buffer
   local.get $1
   i32.const 1
   call $assembly/buffer/Buffer#setArr
   global.get $assembly/game/buffer
   local.get $0
   i32.const 1
   call $assembly/buffer/Buffer#set
   global.get $assembly/game/buffer
   i32.load
   call $assembly/game/draw
   global.get $assembly/game/buffer
   local.get $1
   i32.const 0
   call $assembly/buffer/Buffer#setArr
   global.get $assembly/game/buffer
   local.get $0
   i32.const 0
   call $assembly/buffer/Buffer#set
   global.get $assembly/game/snake
   call $assembly/snake/Snake#moveOnce
   global.get $assembly/game/snake
   call $assembly/snake/Snake#checkAlive
   drop
   global.get $assembly/game/snake
   global.get $assembly/game/seedGen
   call $assembly/snake/Snake#checkAteSeed
  end
 )
 (func $assembly/snake/Snake#handleEvents (param $0 i32) (param $1 i32)
  block $break|0
   block $case3|0
    block $case2|0
     block $case1|0
      block $case0|0
       local.get $1
       i32.const 1
       i32.sub
       br_table $case0|0 $case2|0 $case1|0 $case3|0 $break|0
      end
      local.get $0
      i32.load offset=8
      i32.const 1
      i32.ne
      if
       local.get $0
       i32.const 0
       call $~lib/rt/common/OBJECT#set:gcInfo2
      end
      br $break|0
     end
     local.get $0
     i32.load offset=8
     if
      local.get $0
      i32.const 1
      call $~lib/rt/common/OBJECT#set:gcInfo2
     end
     br $break|0
    end
    local.get $0
    i32.load offset=8
    i32.const 3
    i32.ne
    if
     local.get $0
     i32.const 2
     call $~lib/rt/common/OBJECT#set:gcInfo2
    end
    br $break|0
   end
   local.get $0
   i32.load offset=8
   i32.const 2
   i32.ne
   if
    local.get $0
    i32.const 3
    call $~lib/rt/common/OBJECT#set:gcInfo2
   end
  end
 )
 (func $~lib/rt/stub/__pin (param $0 i32) (result i32)
  local.get $0
 )
 (func $~lib/rt/stub/__unpin (param $0 i32)
  nop
 )
 (func $~lib/rt/stub/__collect
  nop
 )
 (func $~start
  call $start:assembly/game
 )
)
