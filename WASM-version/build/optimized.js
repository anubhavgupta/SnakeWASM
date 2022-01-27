import { abort } from 'env';
import { random } from 'Math';
import { draw } from 'game';

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 1036, "PA==");
  base64DecodeToExistingUint8Array(bufferView, 1048, "AQAAACgAAABBAGwAbABvAGMAYQB0AGkAbwBuACAAdABvAG8AIABsAGEAcgBnAGU=");
  base64DecodeToExistingUint8Array(bufferView, 1100, "PA==");
  base64DecodeToExistingUint8Array(bufferView, 1112, "AQAAAB4AAAB+AGwAaQBiAC8AcgB0AC8AcwB0AHUAYgAuAHQAcw==");
  base64DecodeToExistingUint8Array(bufferView, 1164, "LA==");
  base64DecodeToExistingUint8Array(bufferView, 1176, "AQAAABwAAABJAG4AdgBhAGwAaQBkACAAbABlAG4AZwB0AGg=");
  base64DecodeToExistingUint8Array(bufferView, 1212, "LA==");
  base64DecodeToExistingUint8Array(bufferView, 1224, "AQAAABoAAAB+AGwAaQBiAC8AYQByAHIAYQB5AC4AdABz");
  base64DecodeToExistingUint8Array(bufferView, 1260, "HA==");
  base64DecodeToExistingUint8Array(bufferView, 1272, "CQAAAAgAAAAB");
  base64DecodeToExistingUint8Array(bufferView, 1292, "PA==");
  base64DecodeToExistingUint8Array(bufferView, 1304, "AQAAACQAAABJAG4AZABlAHgAIABvAHUAdAAgAG8AZgAgAHIAYQBuAGcAZQ==");
  base64DecodeToExistingUint8Array(bufferView, 1356, "fA==");
  base64DecodeToExistingUint8Array(bufferView, 1368, "AQAAAF4AAABFAGwAZQBtAGUAbgB0ACAAdAB5AHAAZQAgAG0AdQBzAHQAIABiAGUAIABuAHUAbABsAGEAYgBsAGUAIABpAGYAIABhAHIAcgBhAHkAIABpAHMAIABoAG8AbABlAHk=");
  base64DecodeToExistingUint8Array(bufferView, 1484, "LA==");
  base64DecodeToExistingUint8Array(bufferView, 1496, "AQAAABwAAABBAHIAcgBhAHkAIABpAHMAIABlAG0AcAB0AHk=");
  base64DecodeToExistingUint8Array(bufferView, 1536, "CwAAACAAAAAAAAAAIA==");
  base64DecodeToExistingUint8Array(bufferView, 1572, "IAAAAAAAAAACQQAAAAAAAAIJ");
  base64DecodeToExistingUint8Array(bufferView, 1604, "AkE=");
}
function asmFunc(env) {
 var buffer = new ArrayBuffer(65536);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var abort = env.abort;
 var nan = NaN;
 var infinity = Infinity;
 var $lib_builtins_abort = env.abort;
 var $lib_bindings_Math_random = env.random;
 var assembly_game_draw = env.draw;
 var $lib_rt_stub_offset = 0;
 var assembly_game_snake = 0;
 var assembly_game_buffer = 0;
 var assembly_game_seedGen = 0;
 var assembly_snake_Snake = 3;
 var $lib_rt___rtti_base = 1536;
 function assembly_point_Point_set_x($0, $1) {
  HEAP32[$0 >> 2] = $1;
 }
 
 function assembly_point_Point_set_y($0, $1) {
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_rt_stub_maybeGrowMemory($0) {
  var $1 = 0, $2 = 0;
  $2 = __wasm_memory_size();
  $1 = (($2 << 16 | 0) + 15 | 0) & -16 | 0;
  if ($1 >>> 0 < $0 >>> 0) {
   $1 = ((($0 - $1 | 0) + 65535 | 0) & -65536 | 0) >>> 16 | 0;
   if ((__wasm_memory_grow((($1 | 0) < ($2 | 0) ? $2 : $1) | 0) | 0) < (0 | 0)) {
    if ((__wasm_memory_grow($1 | 0) | 0) < (0 | 0)) {
     abort()
    }
   }
  }
  $lib_rt_stub_offset = $0;
 }
 
 function $lib_rt_stub___alloc($0) {
  var $1 = 0, $2 = 0;
  if ($0 >>> 0 > 1073741820 >>> 0) {
   $lib_builtins_abort(1056 | 0, 1120 | 0, 33 | 0, 29 | 0);
   abort();
  }
  $2 = $lib_rt_stub_offset;
  $1 = $lib_rt_stub_offset + 4 | 0;
  $0 = (($0 + 19 | 0) & -16 | 0) - 4 | 0;
  $lib_rt_stub_maybeGrowMemory($1 + $0 | 0);
  assembly_point_Point_set_x($2, $0);
  return $1;
 }
 
 function $lib_rt_common_OBJECT_set_gcInfo2($0, $1) {
  HEAP32[($0 + 8 | 0) >> 2] = $1;
 }
 
 function $lib_rt_common_OBJECT_set_rtId($0, $1) {
  HEAP32[($0 + 12 | 0) >> 2] = $1;
 }
 
 function $lib_rt_common_OBJECT_set_rtSize($0, $1) {
  HEAP32[($0 + 16 | 0) >> 2] = $1;
 }
 
 function $lib_rt_stub___new($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  if ($0 >>> 0 > 1073741804 >>> 0) {
   $lib_builtins_abort(1056 | 0, 1120 | 0, 86 | 0, 30 | 0);
   abort();
  }
  $3 = $lib_rt_stub___alloc($0 + 16 | 0);
  $2 = $3 - 4 | 0;
  assembly_point_Point_set_y($2, 0);
  $lib_rt_common_OBJECT_set_gcInfo2($2, 0);
  $lib_rt_common_OBJECT_set_rtId($2, $1);
  $lib_rt_common_OBJECT_set_rtSize($2, $0);
  return $3 + 16 | 0 | 0;
 }
 
 function assembly_point_Point_constructor($0, $1) {
  var $2 = 0;
  $2 = $lib_rt_stub___new(8, 4);
  assembly_point_Point_set_x($2, $0);
  assembly_point_Point_set_y($2, $1);
  assembly_point_Point_set_x($2, $0);
  assembly_point_Point_set_y($2, $1);
  return $2;
 }
 
 function $lib_memory_memory_copy($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $lib_util_memory_memmove_inlined_0 : {
   $3 = $2;
   if (($0 | 0) == ($1 | 0)) {
    break $lib_util_memory_memmove_inlined_0
   }
   if ($0 >>> 0 < $1 >>> 0) {
    while_continue_0 : while (1) {
     if ($3) {
      $2 = $0;
      $0 = $0 + 1 | 0;
      $4 = $1;
      $1 = $1 + 1 | 0;
      HEAP8[$2 >> 0] = HEAPU8[$4 >> 0];
      $3 = $3 - 1 | 0;
      continue while_continue_0;
     }
     break while_continue_0;
    }
   } else {
    while_continue_1 : while (1) {
     if ($3) {
      $3 = $3 - 1 | 0;
      HEAP8[($3 + $0 | 0) >> 0] = HEAPU8[($1 + $3 | 0) >> 0];
      continue while_continue_1;
     }
     break while_continue_1;
    }
   }
  }
 }
 
 function $lib_rt___newArray($0, $1) {
  var $2 = 0, $3 = 0;
  $2 = $0 << 2 | 0;
  $3 = $lib_rt_stub___new($2, 0);
  $1 = $lib_rt_stub___new(16, $1);
  HEAP32[$1 >> 2] = $3;
  HEAP32[($1 + 4 | 0) >> 2] = $3;
  HEAP32[($1 + 8 | 0) >> 2] = $2;
  HEAP32[($1 + 12 | 0) >> 2] = $0;
  return $1;
 }
 
 function $lib_array_Array_assembly_point_Point____uset($0, $1, $2) {
  HEAP32[(HEAP32[($0 + 4 | 0) >> 2] + ($1 << 2 | 0) | 0) >> 2] = $2;
 }
 
 function assembly_snake_Snake_set_isAlive($0, $1) {
  HEAP8[($0 + 4 | 0) >> 0] = $1;
 }
 
 function assembly_snake_Snake_constructor($0) {
  $0 = $0 | 0;
  var $1 = 0;
  if (!$0) {
   $0 = $lib_rt_stub___new(16, 3)
  }
  assembly_point_Point_set_x($0, 0);
  assembly_snake_Snake_set_isAlive($0, 0);
  $lib_rt_common_OBJECT_set_gcInfo2($0, 0);
  $lib_rt_common_OBJECT_set_rtId($0, 0);
  $1 = $lib_rt___newArray(5, 5);
  $lib_array_Array_assembly_point_Point____uset($1, 0, assembly_point_Point_constructor(5, 5));
  $lib_array_Array_assembly_point_Point____uset($1, 1, assembly_point_Point_constructor(5, 6));
  $lib_array_Array_assembly_point_Point____uset($1, 2, assembly_point_Point_constructor(5, 7));
  $lib_array_Array_assembly_point_Point____uset($1, 3, assembly_point_Point_constructor(5, 8));
  $lib_array_Array_assembly_point_Point____uset($1, 4, assembly_point_Point_constructor(5, 9));
  assembly_point_Point_set_x($0, $1);
  assembly_snake_Snake_set_isAlive($0, 1);
  $lib_rt_common_OBJECT_set_rtId($0, assembly_point_Point_constructor(0, 0));
  $lib_rt_common_OBJECT_set_gcInfo2($0, 0);
  return $0 | 0;
 }
 
 function $lib_memory_memory_fill($0, $1) {
  var $2 = 0;
  $2 = $1;
  while_continue_0 : while (1) {
   if ($2) {
    $1 = $0;
    $0 = $1 + 1 | 0;
    HEAP8[$1 >> 0] = 0;
    $2 = $2 - 1 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
 }
 
 function $lib_array_Array_i32__constructor() {
  var $0 = 0, $1 = 0;
  $0 = $lib_rt_stub___new(16, 6);
  assembly_point_Point_set_x($0, 0);
  assembly_point_Point_set_y($0, 0);
  $lib_rt_common_OBJECT_set_gcInfo2($0, 0);
  $lib_rt_common_OBJECT_set_rtId($0, 0);
  $1 = $lib_rt_stub___new(40, 0);
  $lib_memory_memory_fill($1, 40);
  assembly_point_Point_set_x($0, $1);
  assembly_point_Point_set_y($0, $1);
  $lib_rt_common_OBJECT_set_gcInfo2($0, 40);
  $lib_rt_common_OBJECT_set_rtId($0, 10);
  return $0;
 }
 
 function $lib_array_Array_i32__fill($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  $3 = HEAP32[($0 + 4 | 0) >> 2];
  $2 = HEAP32[($0 + 12 | 0) >> 2];
  $1 = ($2 | 0) > (0 | 0) ? 0 : $2;
  for_loop_0 : while (1) {
   if (($1 | 0) < ($2 | 0)) {
    HEAP32[($3 + ($1 << 2 | 0) | 0) >> 2] = 0;
    $1 = $1 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  return $0;
 }
 
 function assembly_buffer_Buffer_constructor_anonymous_0($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  return $lib_array_Array_i32__fill($lib_array_Array_i32__constructor()) | 0;
 }
 
 function start_assembly_game() {
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $lib_rt_stub_offset = 1628;
  assembly_game_snake = assembly_snake_Snake_constructor(0);
  $3 = $lib_rt_stub___new(4, 7);
  assembly_point_Point_set_x($3, 0);
  $2 = $lib_array_Array_i32__fill($lib_array_Array_i32__constructor());
  $4 = HEAP32[($2 + 12 | 0) >> 2];
  $5 = $lib_rt___newArray($4, 8);
  $6 = HEAP32[($5 + 4 | 0) >> 2];
  for_loop_0 : while (1) {
   $1 = HEAP32[($2 + 12 | 0) >> 2];
   if (($0 | 0) < ((($1 | 0) > ($4 | 0) ? $4 : $1) | 0)) {
    $1 = $0 << 2 | 0;
    (wasm2js_i32$0 = $1 + $6 | 0, wasm2js_i32$1 = FUNCTION_TABLE[HEAP32[1280 >> 2] | 0](HEAP32[(HEAP32[($2 + 4 | 0) >> 2] + $1 | 0) >> 2], $0, $2) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    $0 = $0 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  assembly_point_Point_set_x($3, $5);
  assembly_game_buffer = $3;
  $0 = $lib_rt_stub___new(5, 10);
  assembly_point_Point_set_x($0, 0);
  assembly_snake_Snake_set_isAlive($0, 0);
  assembly_point_Point_set_x($0, assembly_point_Point_constructor(0, 0));
  assembly_snake_Snake_set_isAlive($0, 1);
  assembly_game_seedGen = $0;
 }
 
 function assembly_snake_Snake_getBody($0) {
  $0 = $0 | 0;
  return HEAP32[$0 >> 2] | 0;
 }
 
 function assembly_seedGenerator_SeedGenerator_getRandPosition() {
  return ~~(+$lib_bindings_Math_random() * 9.0);
 }
 
 function $lib_array_Array_assembly_point_Point____get($0, $1) {
  if ($1 >>> 0 >= HEAP32[($0 + 12 | 0) >> 2] >>> 0) {
   $lib_builtins_abort(1312 | 0, 1232 | 0, 114 | 0, 42 | 0);
   abort();
  }
  $0 = HEAP32[(HEAP32[($0 + 4 | 0) >> 2] + ($1 << 2 | 0) | 0) >> 2];
  if (!$0) {
   $lib_builtins_abort(1376 | 0, 1232 | 0, 118 | 0, 40 | 0);
   abort();
  }
  return $0;
 }
 
 function assembly_point_Point_equal($0, $1) {
  return (HEAP32[($0 + 4 | 0) >> 2] | 0) == (HEAP32[($1 + 4 | 0) >> 2] | 0) & (HEAP32[$0 >> 2] | 0) == (HEAP32[$1 >> 2] | 0) | 0;
 }
 
 function $lib_array_ensureCapacity($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  $5 = HEAP32[($0 + 8 | 0) >> 2];
  if ($1 >>> 0 > ($5 >>> 2 | 0) >>> 0) {
   if ($1 >>> 0 > 268435455 >>> 0) {
    $lib_builtins_abort(1184 | 0, 1232 | 0, 19 | 0, 48 | 0);
    abort();
   }
   $8 = HEAP32[$0 >> 2];
   $2 = $5 << 1 | 0;
   $2 = $2 >>> 0 < 1073741820 >>> 0 ? $2 : 1073741820;
   $1 = ($1 >>> 0 > 8 >>> 0 ? $1 : 8) << 2 | 0;
   $4 = $1 >>> 0 < $2 >>> 0 ? $2 : $1;
   if ($4 >>> 0 > 1073741804 >>> 0) {
    $lib_builtins_abort(1056 | 0, 1120 | 0, 99 | 0, 30 | 0);
    abort();
   }
   $1 = $8 - 16 | 0;
   $3 = $1 - 4 | 0;
   $6 = HEAP32[$3 >> 2];
   $9 = ($lib_rt_stub_offset | 0) == ($1 + $6 | 0 | 0);
   $7 = $4 + 16 | 0;
   $2 = (($7 + 19 | 0) & -16 | 0) - 4 | 0;
   if ($6 >>> 0 < $7 >>> 0) {
    if ($9) {
     if ($7 >>> 0 > 1073741820 >>> 0) {
      $lib_builtins_abort(1056 | 0, 1120 | 0, 52 | 0, 33 | 0);
      abort();
     }
     $lib_rt_stub_maybeGrowMemory($1 + $2 | 0);
     assembly_point_Point_set_x($3, $2);
    } else {
     $3 = $6 << 1 | 0;
     $2 = $lib_rt_stub___alloc($2 >>> 0 > $3 >>> 0 ? $2 : $3);
     $lib_memory_memory_copy($2, $1, $6);
     $1 = $2;
    }
   } else {
    if ($9) {
     $lib_rt_stub_offset = $1 + $2 | 0;
     assembly_point_Point_set_x($3, $2);
    }
   }
   $lib_rt_common_OBJECT_set_rtSize($1 - 4 | 0, $4);
   $1 = $1 + 16 | 0;
   $lib_memory_memory_fill($1 + $5 | 0, $4 - $5 | 0);
   if (($1 | 0) != ($8 | 0)) {
    HEAP32[$0 >> 2] = $1;
    HEAP32[($0 + 4 | 0) >> 2] = $1;
   }
   HEAP32[($0 + 8 | 0) >> 2] = $4;
  }
 }
 
 function assembly_buffer_Buffer_set($0, $1, $2) {
  var $3 = 0;
  $0 = $lib_array_Array_assembly_point_Point____get(HEAP32[$0 >> 2], HEAP32[$1 >> 2]);
  $1 = HEAP32[($1 + 4 | 0) >> 2];
  if (HEAP32[($0 + 12 | 0) >> 2] >>> 0 <= $1 >>> 0) {
   if (($1 | 0) < (0 | 0)) {
    $lib_builtins_abort(1312 | 0, 1232 | 0, 130 | 0, 22 | 0);
    abort();
   }
   $3 = $1 + 1 | 0;
   $lib_array_ensureCapacity($0, $3);
   $lib_rt_common_OBJECT_set_rtId($0, $3);
  }
  HEAP32[(HEAP32[($0 + 4 | 0) >> 2] + ($1 << 2 | 0) | 0) >> 2] = $2;
 }
 
 function assembly_buffer_Buffer_setArr($0, $1, $2) {
  var $3 = 0;
  for_loop_0 : while (1) {
   if (($3 | 0) < (HEAP32[($1 + 12 | 0) >> 2] | 0)) {
    assembly_buffer_Buffer_set($0, $lib_array_Array_assembly_point_Point____get($1, $3), $2);
    $3 = $3 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
 }
 
 function assembly_point_Point_copy($0, $1) {
  assembly_point_Point_set_x($0, HEAP32[$1 >> 2]);
  assembly_point_Point_set_y($0, HEAP32[($1 + 4 | 0) >> 2]);
 }
 
 function assembly_snake_Snake_moveOnce($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0;
  $2 = HEAP32[$0 >> 2];
  $1 = HEAP32[($2 + 12 | 0) >> 2];
  if (($1 | 0) <= (0 | 0)) {
   $lib_builtins_abort(1504 | 0, 1232 | 0, 291 | 0, 18 | 0);
   abort();
  }
  $3 = $1 - 1 | 0;
  $1 = HEAP32[(HEAP32[($2 + 4 | 0) >> 2] + ($3 << 2 | 0) | 0) >> 2];
  $lib_rt_common_OBJECT_set_rtId($2, $3);
  $lib_rt_common_OBJECT_set_rtId($0, assembly_point_Point_constructor(0, 0));
  assembly_point_Point_copy(HEAP32[($0 + 12 | 0) >> 2], $1);
  assembly_point_Point_copy($1, $lib_array_Array_assembly_point_Point____get(HEAP32[$0 >> 2], 0));
  break_0 : {
   case3_0 : {
    switch (HEAP32[($0 + 8 | 0) >> 2] | 0) {
    case 0:
     assembly_point_Point_set_y($1, HEAP32[($1 + 4 | 0) >> 2] - 1 | 0);
     break break_0;
    case 1:
     assembly_point_Point_set_y($1, HEAP32[($1 + 4 | 0) >> 2] + 1 | 0);
     break break_0;
    case 2:
     assembly_point_Point_set_x($1, HEAP32[$1 >> 2] + 1 | 0);
     break break_0;
    case 3:
     break case3_0;
    default:
     break break_0;
    };
   }
   assembly_point_Point_set_x($1, HEAP32[$1 >> 2] - 1 | 0);
  }
  $0 = HEAP32[$0 >> 2];
  $2 = HEAP32[($0 + 12 | 0) >> 2] + 1 | 0;
  $lib_array_ensureCapacity($0, $2);
  $3 = HEAP32[($0 + 4 | 0) >> 2];
  $lib_memory_memory_copy($3 + 4 | 0, $3, ($2 - 1 | 0) << 2 | 0);
  HEAP32[$3 >> 2] = $1;
  $lib_rt_common_OBJECT_set_rtId($0, $2);
 }
 
 function assembly_snake_Snake_getHead($0) {
  return $lib_array_Array_assembly_point_Point____get(HEAP32[$0 >> 2], 0);
 }
 
 function assembly_snake_Snake_checkAlive($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0;
  $3 = $0;
  $1 = 1;
  __inlined_func$assembly_snake_Snake_checkHeadCollidingWithBody : {
   for_loop_0 : while (1) {
    if (($1 | 0) < (HEAP32[(HEAP32[$0 >> 2] + 12 | 0) >> 2] | 0)) {
     $2 = 1;
     if (assembly_point_Point_equal($lib_array_Array_assembly_point_Point____get(HEAP32[$0 >> 2], $1), assembly_snake_Snake_getHead($0))) {
      break __inlined_func$assembly_snake_Snake_checkHeadCollidingWithBody
     }
     $1 = $1 + 1 | 0;
     continue for_loop_0;
    }
    break for_loop_0;
   };
   $2 = 0;
  }
  if ($2) {
   $1 = 1
  } else {
   $1 = assembly_snake_Snake_getHead($0);
   if ((HEAP32[$1 >> 2] | 0) < (0 | 0)) {
    $2 = 1
   } else {
    $2 = (HEAP32[$1 >> 2] | 0) > (9 | 0)
   }
   if ($2) {
    $2 = 1
   } else {
    $2 = (HEAP32[($1 + 4 | 0) >> 2] | 0) < (0 | 0)
   }
   if ($2) {
    $1 = 1
   } else {
    $1 = (HEAP32[($1 + 4 | 0) >> 2] | 0) > (9 | 0)
   }
  }
  assembly_snake_Snake_set_isAlive($3, !$1);
  return (HEAPU8[($0 + 4 | 0) >> 0] | 0) != (0 | 0) | 0;
 }
 
 function assembly_snake_Snake_checkAteSeed($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  if (assembly_point_Point_equal(assembly_snake_Snake_getHead($0), HEAP32[$1 >> 2])) {
   $4 = HEAP32[($0 + 12 | 0) >> 2];
   $0 = HEAP32[$0 >> 2];
   $2 = HEAP32[($0 + 12 | 0) >> 2];
   $3 = $2 + 1 | 0;
   $lib_array_ensureCapacity($0, $3);
   HEAP32[(HEAP32[($0 + 4 | 0) >> 2] + ($2 << 2 | 0) | 0) >> 2] = $4;
   $lib_rt_common_OBJECT_set_rtId($0, $3);
   assembly_snake_Snake_set_isAlive($1, 1);
  }
 }
 
 function assembly_game_gameStep() {
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  if (HEAPU8[(assembly_game_snake + 4 | 0) >> 0]) {
   $3 = HEAP32[assembly_game_snake >> 2];
   $5 = assembly_game_snake;
   $0 = assembly_game_seedGen;
   if (HEAPU8[($0 + 4 | 0) >> 0]) {
    assembly_snake_Snake_set_isAlive($0, 0);
    assembly_point_Point_set_x($0, assembly_point_Point_constructor(assembly_seedGenerator_SeedGenerator_getRandPosition(), assembly_seedGenerator_SeedGenerator_getRandPosition()));
    while_continue_0 : while (1) {
     $1 = 0;
     $4 = HEAP32[$5 >> 2];
     __inlined_func$assembly_seedGenerator_SeedGenerator_checkSeedCollisionWithBody : {
      for_loop_0 : while (1) {
       if (($1 | 0) < (HEAP32[($4 + 12 | 0) >> 2] | 0)) {
        $2 = 1;
        if (assembly_point_Point_equal($lib_array_Array_assembly_point_Point____get($4, $1), HEAP32[$0 >> 2])) {
         break __inlined_func$assembly_seedGenerator_SeedGenerator_checkSeedCollisionWithBody
        }
        $1 = $1 + 1 | 0;
        continue for_loop_0;
       }
       break for_loop_0;
      };
      $2 = 0;
     }
     if ($2) {
      assembly_point_Point_set_x($0, assembly_point_Point_constructor(assembly_seedGenerator_SeedGenerator_getRandPosition(), assembly_seedGenerator_SeedGenerator_getRandPosition()));
      continue while_continue_0;
     }
     break while_continue_0;
    };
   }
   $0 = HEAP32[$0 >> 2];
   assembly_buffer_Buffer_setArr(assembly_game_buffer, $3, 1);
   assembly_buffer_Buffer_set(assembly_game_buffer, $0, 1);
   assembly_game_draw(HEAP32[assembly_game_buffer >> 2] | 0);
   assembly_buffer_Buffer_setArr(assembly_game_buffer, $3, 0);
   assembly_buffer_Buffer_set(assembly_game_buffer, $0, 0);
   assembly_snake_Snake_moveOnce(assembly_game_snake);
   assembly_snake_Snake_checkAlive(assembly_game_snake);
   assembly_snake_Snake_checkAteSeed(assembly_game_snake, assembly_game_seedGen);
  }
 }
 
 function assembly_snake_Snake_handleEvents($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  break_0 : {
   case3_0 : {
    switch ($1 - 1 | 0 | 0) {
    case 0:
     if ((HEAP32[($0 + 8 | 0) >> 2] | 0) != (1 | 0)) {
      $lib_rt_common_OBJECT_set_gcInfo2($0, 0)
     }
     break break_0;
    case 2:
     if (HEAP32[($0 + 8 | 0) >> 2]) {
      $lib_rt_common_OBJECT_set_gcInfo2($0, 1)
     }
     break break_0;
    case 1:
     if ((HEAP32[($0 + 8 | 0) >> 2] | 0) != (3 | 0)) {
      $lib_rt_common_OBJECT_set_gcInfo2($0, 2)
     }
     break break_0;
    case 3:
     break case3_0;
    default:
     break break_0;
    };
   }
   if ((HEAP32[($0 + 8 | 0) >> 2] | 0) != (2 | 0)) {
    $lib_rt_common_OBJECT_set_gcInfo2($0, 3)
   }
  }
 }
 
 function $lib_rt_stub___pin($0) {
  $0 = $0 | 0;
  return $0 | 0;
 }
 
 function $lib_rt_stub___unpin($0) {
  $0 = $0 | 0;
 }
 
 function $lib_rt_stub___collect() {
  
 }
 
 function $start() {
  start_assembly_game();
 }
 
 bufferView = HEAPU8;
 initActiveSegments(env);
 var FUNCTION_TABLE = [null, assembly_buffer_Buffer_constructor_anonymous_0];
 $start();
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "gameStep": assembly_game_gameStep, 
  "snake": assembly_game_snake, 
  "Snake": assembly_snake_Snake, 
  "Snake_constructor": assembly_snake_Snake_constructor, 
  "Snake_handleEvents": assembly_snake_Snake_handleEvents, 
  "Snake_getBody": assembly_snake_Snake_getBody, 
  "Snake_moveOnce": assembly_snake_Snake_moveOnce, 
  "Snake_checkAlive": assembly_snake_Snake_checkAlive, 
  "Snake_checkAteSeed": assembly_snake_Snake_checkAteSeed, 
  "__new": $lib_rt_stub___new, 
  "__pin": $lib_rt_stub___pin, 
  "__unpin": $lib_rt_stub___unpin, 
  "__collect": $lib_rt_stub___collect, 
  "__rtti_base": $lib_rt___rtti_base, 
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  })
 };
}

var retasmFunc = asmFunc(  { abort: function() { throw new Error('abort'); },
    abort,
    random,
    draw
  });
export var gameStep = retasmFunc.gameStep;
export var Snake_constructor = retasmFunc.Snake_constructor;
export var Snake_handleEvents = retasmFunc.Snake_handleEvents;
export var Snake_getBody = retasmFunc.Snake_getBody;
export var Snake_moveOnce = retasmFunc.Snake_moveOnce;
export var Snake_checkAlive = retasmFunc.Snake_checkAlive;
export var Snake_checkAteSeed = retasmFunc.Snake_checkAteSeed;
export var __new = retasmFunc.__new;
export var __pin = retasmFunc.__pin;
export var __unpin = retasmFunc.__unpin;
export var __collect = retasmFunc.__collect;
export var memory = retasmFunc.memory;
