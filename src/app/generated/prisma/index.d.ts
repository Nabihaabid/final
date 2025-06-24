
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model StudentDetails
 * 
 */
export type StudentDetails = $Result.DefaultSelection<Prisma.$StudentDetailsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more StudentDetails
 * const studentDetails = await prisma.studentDetails.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more StudentDetails
   * const studentDetails = await prisma.studentDetails.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.studentDetails`: Exposes CRUD operations for the **StudentDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentDetails
    * const studentDetails = await prisma.studentDetails.findMany()
    * ```
    */
  get studentDetails(): Prisma.StudentDetailsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    StudentDetails: 'StudentDetails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "studentDetails"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      StudentDetails: {
        payload: Prisma.$StudentDetailsPayload<ExtArgs>
        fields: Prisma.StudentDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload>
          }
          findFirst: {
            args: Prisma.StudentDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload>
          }
          findMany: {
            args: Prisma.StudentDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload>[]
          }
          create: {
            args: Prisma.StudentDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload>
          }
          createMany: {
            args: Prisma.StudentDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload>[]
          }
          delete: {
            args: Prisma.StudentDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload>
          }
          update: {
            args: Prisma.StudentDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload>
          }
          deleteMany: {
            args: Prisma.StudentDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload>[]
          }
          upsert: {
            args: Prisma.StudentDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentDetailsPayload>
          }
          aggregate: {
            args: Prisma.StudentDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentDetails>
          }
          groupBy: {
            args: Prisma.StudentDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentDetailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    studentDetails?: StudentDetailsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model StudentDetails
   */

  export type AggregateStudentDetails = {
    _count: StudentDetailsCountAggregateOutputType | null
    _min: StudentDetailsMinAggregateOutputType | null
    _max: StudentDetailsMaxAggregateOutputType | null
  }

  export type StudentDetailsMinAggregateOutputType = {
    id: string | null
    Name: string | null
    IsActive: boolean | null
    Email: string | null
  }

  export type StudentDetailsMaxAggregateOutputType = {
    id: string | null
    Name: string | null
    IsActive: boolean | null
    Email: string | null
  }

  export type StudentDetailsCountAggregateOutputType = {
    id: number
    Name: number
    IsActive: number
    Email: number
    _all: number
  }


  export type StudentDetailsMinAggregateInputType = {
    id?: true
    Name?: true
    IsActive?: true
    Email?: true
  }

  export type StudentDetailsMaxAggregateInputType = {
    id?: true
    Name?: true
    IsActive?: true
    Email?: true
  }

  export type StudentDetailsCountAggregateInputType = {
    id?: true
    Name?: true
    IsActive?: true
    Email?: true
    _all?: true
  }

  export type StudentDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentDetails to aggregate.
     */
    where?: StudentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentDetails to fetch.
     */
    orderBy?: StudentDetailsOrderByWithRelationInput | StudentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentDetails
    **/
    _count?: true | StudentDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentDetailsMaxAggregateInputType
  }

  export type GetStudentDetailsAggregateType<T extends StudentDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentDetails[P]>
      : GetScalarType<T[P], AggregateStudentDetails[P]>
  }




  export type StudentDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentDetailsWhereInput
    orderBy?: StudentDetailsOrderByWithAggregationInput | StudentDetailsOrderByWithAggregationInput[]
    by: StudentDetailsScalarFieldEnum[] | StudentDetailsScalarFieldEnum
    having?: StudentDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentDetailsCountAggregateInputType | true
    _min?: StudentDetailsMinAggregateInputType
    _max?: StudentDetailsMaxAggregateInputType
  }

  export type StudentDetailsGroupByOutputType = {
    id: string
    Name: string
    IsActive: boolean | null
    Email: string
    _count: StudentDetailsCountAggregateOutputType | null
    _min: StudentDetailsMinAggregateOutputType | null
    _max: StudentDetailsMaxAggregateOutputType | null
  }

  type GetStudentDetailsGroupByPayload<T extends StudentDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentDetailsGroupByOutputType[P]>
        }
      >
    >


  export type StudentDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    IsActive?: boolean
    Email?: boolean
  }, ExtArgs["result"]["studentDetails"]>

  export type StudentDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    IsActive?: boolean
    Email?: boolean
  }, ExtArgs["result"]["studentDetails"]>

  export type StudentDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    IsActive?: boolean
    Email?: boolean
  }, ExtArgs["result"]["studentDetails"]>

  export type StudentDetailsSelectScalar = {
    id?: boolean
    Name?: boolean
    IsActive?: boolean
    Email?: boolean
  }

  export type StudentDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "IsActive" | "Email", ExtArgs["result"]["studentDetails"]>

  export type $StudentDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentDetails"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Name: string
      IsActive: boolean | null
      Email: string
    }, ExtArgs["result"]["studentDetails"]>
    composites: {}
  }

  type StudentDetailsGetPayload<S extends boolean | null | undefined | StudentDetailsDefaultArgs> = $Result.GetResult<Prisma.$StudentDetailsPayload, S>

  type StudentDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentDetailsCountAggregateInputType | true
    }

  export interface StudentDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentDetails'], meta: { name: 'StudentDetails' } }
    /**
     * Find zero or one StudentDetails that matches the filter.
     * @param {StudentDetailsFindUniqueArgs} args - Arguments to find a StudentDetails
     * @example
     * // Get one StudentDetails
     * const studentDetails = await prisma.studentDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentDetailsFindUniqueArgs>(args: SelectSubset<T, StudentDetailsFindUniqueArgs<ExtArgs>>): Prisma__StudentDetailsClient<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentDetailsFindUniqueOrThrowArgs} args - Arguments to find a StudentDetails
     * @example
     * // Get one StudentDetails
     * const studentDetails = await prisma.studentDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentDetailsClient<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentDetailsFindFirstArgs} args - Arguments to find a StudentDetails
     * @example
     * // Get one StudentDetails
     * const studentDetails = await prisma.studentDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentDetailsFindFirstArgs>(args?: SelectSubset<T, StudentDetailsFindFirstArgs<ExtArgs>>): Prisma__StudentDetailsClient<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentDetailsFindFirstOrThrowArgs} args - Arguments to find a StudentDetails
     * @example
     * // Get one StudentDetails
     * const studentDetails = await prisma.studentDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentDetailsClient<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentDetails
     * const studentDetails = await prisma.studentDetails.findMany()
     * 
     * // Get first 10 StudentDetails
     * const studentDetails = await prisma.studentDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentDetailsWithIdOnly = await prisma.studentDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentDetailsFindManyArgs>(args?: SelectSubset<T, StudentDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentDetails.
     * @param {StudentDetailsCreateArgs} args - Arguments to create a StudentDetails.
     * @example
     * // Create one StudentDetails
     * const StudentDetails = await prisma.studentDetails.create({
     *   data: {
     *     // ... data to create a StudentDetails
     *   }
     * })
     * 
     */
    create<T extends StudentDetailsCreateArgs>(args: SelectSubset<T, StudentDetailsCreateArgs<ExtArgs>>): Prisma__StudentDetailsClient<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentDetails.
     * @param {StudentDetailsCreateManyArgs} args - Arguments to create many StudentDetails.
     * @example
     * // Create many StudentDetails
     * const studentDetails = await prisma.studentDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentDetailsCreateManyArgs>(args?: SelectSubset<T, StudentDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentDetails and returns the data saved in the database.
     * @param {StudentDetailsCreateManyAndReturnArgs} args - Arguments to create many StudentDetails.
     * @example
     * // Create many StudentDetails
     * const studentDetails = await prisma.studentDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentDetails and only return the `id`
     * const studentDetailsWithIdOnly = await prisma.studentDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentDetails.
     * @param {StudentDetailsDeleteArgs} args - Arguments to delete one StudentDetails.
     * @example
     * // Delete one StudentDetails
     * const StudentDetails = await prisma.studentDetails.delete({
     *   where: {
     *     // ... filter to delete one StudentDetails
     *   }
     * })
     * 
     */
    delete<T extends StudentDetailsDeleteArgs>(args: SelectSubset<T, StudentDetailsDeleteArgs<ExtArgs>>): Prisma__StudentDetailsClient<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentDetails.
     * @param {StudentDetailsUpdateArgs} args - Arguments to update one StudentDetails.
     * @example
     * // Update one StudentDetails
     * const studentDetails = await prisma.studentDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentDetailsUpdateArgs>(args: SelectSubset<T, StudentDetailsUpdateArgs<ExtArgs>>): Prisma__StudentDetailsClient<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentDetails.
     * @param {StudentDetailsDeleteManyArgs} args - Arguments to filter StudentDetails to delete.
     * @example
     * // Delete a few StudentDetails
     * const { count } = await prisma.studentDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDetailsDeleteManyArgs>(args?: SelectSubset<T, StudentDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentDetails
     * const studentDetails = await prisma.studentDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentDetailsUpdateManyArgs>(args: SelectSubset<T, StudentDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentDetails and returns the data updated in the database.
     * @param {StudentDetailsUpdateManyAndReturnArgs} args - Arguments to update many StudentDetails.
     * @example
     * // Update many StudentDetails
     * const studentDetails = await prisma.studentDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentDetails and only return the `id`
     * const studentDetailsWithIdOnly = await prisma.studentDetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentDetails.
     * @param {StudentDetailsUpsertArgs} args - Arguments to update or create a StudentDetails.
     * @example
     * // Update or create a StudentDetails
     * const studentDetails = await prisma.studentDetails.upsert({
     *   create: {
     *     // ... data to create a StudentDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentDetails we want to update
     *   }
     * })
     */
    upsert<T extends StudentDetailsUpsertArgs>(args: SelectSubset<T, StudentDetailsUpsertArgs<ExtArgs>>): Prisma__StudentDetailsClient<$Result.GetResult<Prisma.$StudentDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentDetailsCountArgs} args - Arguments to filter StudentDetails to count.
     * @example
     * // Count the number of StudentDetails
     * const count = await prisma.studentDetails.count({
     *   where: {
     *     // ... the filter for the StudentDetails we want to count
     *   }
     * })
    **/
    count<T extends StudentDetailsCountArgs>(
      args?: Subset<T, StudentDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentDetailsAggregateArgs>(args: Subset<T, StudentDetailsAggregateArgs>): Prisma.PrismaPromise<GetStudentDetailsAggregateType<T>>

    /**
     * Group by StudentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentDetailsGroupByArgs['orderBy'] }
        : { orderBy?: StudentDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentDetails model
   */
  readonly fields: StudentDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentDetails model
   */
  interface StudentDetailsFieldRefs {
    readonly id: FieldRef<"StudentDetails", 'String'>
    readonly Name: FieldRef<"StudentDetails", 'String'>
    readonly IsActive: FieldRef<"StudentDetails", 'Boolean'>
    readonly Email: FieldRef<"StudentDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentDetails findUnique
   */
  export type StudentDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * Filter, which StudentDetails to fetch.
     */
    where: StudentDetailsWhereUniqueInput
  }

  /**
   * StudentDetails findUniqueOrThrow
   */
  export type StudentDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * Filter, which StudentDetails to fetch.
     */
    where: StudentDetailsWhereUniqueInput
  }

  /**
   * StudentDetails findFirst
   */
  export type StudentDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * Filter, which StudentDetails to fetch.
     */
    where?: StudentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentDetails to fetch.
     */
    orderBy?: StudentDetailsOrderByWithRelationInput | StudentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentDetails.
     */
    cursor?: StudentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentDetails.
     */
    distinct?: StudentDetailsScalarFieldEnum | StudentDetailsScalarFieldEnum[]
  }

  /**
   * StudentDetails findFirstOrThrow
   */
  export type StudentDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * Filter, which StudentDetails to fetch.
     */
    where?: StudentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentDetails to fetch.
     */
    orderBy?: StudentDetailsOrderByWithRelationInput | StudentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentDetails.
     */
    cursor?: StudentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentDetails.
     */
    distinct?: StudentDetailsScalarFieldEnum | StudentDetailsScalarFieldEnum[]
  }

  /**
   * StudentDetails findMany
   */
  export type StudentDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * Filter, which StudentDetails to fetch.
     */
    where?: StudentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentDetails to fetch.
     */
    orderBy?: StudentDetailsOrderByWithRelationInput | StudentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentDetails.
     */
    cursor?: StudentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentDetails.
     */
    skip?: number
    distinct?: StudentDetailsScalarFieldEnum | StudentDetailsScalarFieldEnum[]
  }

  /**
   * StudentDetails create
   */
  export type StudentDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * The data needed to create a StudentDetails.
     */
    data: XOR<StudentDetailsCreateInput, StudentDetailsUncheckedCreateInput>
  }

  /**
   * StudentDetails createMany
   */
  export type StudentDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentDetails.
     */
    data: StudentDetailsCreateManyInput | StudentDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentDetails createManyAndReturn
   */
  export type StudentDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many StudentDetails.
     */
    data: StudentDetailsCreateManyInput | StudentDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentDetails update
   */
  export type StudentDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * The data needed to update a StudentDetails.
     */
    data: XOR<StudentDetailsUpdateInput, StudentDetailsUncheckedUpdateInput>
    /**
     * Choose, which StudentDetails to update.
     */
    where: StudentDetailsWhereUniqueInput
  }

  /**
   * StudentDetails updateMany
   */
  export type StudentDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentDetails.
     */
    data: XOR<StudentDetailsUpdateManyMutationInput, StudentDetailsUncheckedUpdateManyInput>
    /**
     * Filter which StudentDetails to update
     */
    where?: StudentDetailsWhereInput
    /**
     * Limit how many StudentDetails to update.
     */
    limit?: number
  }

  /**
   * StudentDetails updateManyAndReturn
   */
  export type StudentDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * The data used to update StudentDetails.
     */
    data: XOR<StudentDetailsUpdateManyMutationInput, StudentDetailsUncheckedUpdateManyInput>
    /**
     * Filter which StudentDetails to update
     */
    where?: StudentDetailsWhereInput
    /**
     * Limit how many StudentDetails to update.
     */
    limit?: number
  }

  /**
   * StudentDetails upsert
   */
  export type StudentDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * The filter to search for the StudentDetails to update in case it exists.
     */
    where: StudentDetailsWhereUniqueInput
    /**
     * In case the StudentDetails found by the `where` argument doesn't exist, create a new StudentDetails with this data.
     */
    create: XOR<StudentDetailsCreateInput, StudentDetailsUncheckedCreateInput>
    /**
     * In case the StudentDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentDetailsUpdateInput, StudentDetailsUncheckedUpdateInput>
  }

  /**
   * StudentDetails delete
   */
  export type StudentDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
    /**
     * Filter which StudentDetails to delete.
     */
    where: StudentDetailsWhereUniqueInput
  }

  /**
   * StudentDetails deleteMany
   */
  export type StudentDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentDetails to delete
     */
    where?: StudentDetailsWhereInput
    /**
     * Limit how many StudentDetails to delete.
     */
    limit?: number
  }

  /**
   * StudentDetails without action
   */
  export type StudentDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentDetails
     */
    select?: StudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentDetails
     */
    omit?: StudentDetailsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentDetailsScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    IsActive: 'IsActive',
    Email: 'Email'
  };

  export type StudentDetailsScalarFieldEnum = (typeof StudentDetailsScalarFieldEnum)[keyof typeof StudentDetailsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentDetailsWhereInput = {
    AND?: StudentDetailsWhereInput | StudentDetailsWhereInput[]
    OR?: StudentDetailsWhereInput[]
    NOT?: StudentDetailsWhereInput | StudentDetailsWhereInput[]
    id?: StringFilter<"StudentDetails"> | string
    Name?: StringFilter<"StudentDetails"> | string
    IsActive?: BoolNullableFilter<"StudentDetails"> | boolean | null
    Email?: StringFilter<"StudentDetails"> | string
  }

  export type StudentDetailsOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    IsActive?: SortOrderInput | SortOrder
    Email?: SortOrder
  }

  export type StudentDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentDetailsWhereInput | StudentDetailsWhereInput[]
    OR?: StudentDetailsWhereInput[]
    NOT?: StudentDetailsWhereInput | StudentDetailsWhereInput[]
    Name?: StringFilter<"StudentDetails"> | string
    IsActive?: BoolNullableFilter<"StudentDetails"> | boolean | null
    Email?: StringFilter<"StudentDetails"> | string
  }, "id" | "id">

  export type StudentDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    IsActive?: SortOrderInput | SortOrder
    Email?: SortOrder
    _count?: StudentDetailsCountOrderByAggregateInput
    _max?: StudentDetailsMaxOrderByAggregateInput
    _min?: StudentDetailsMinOrderByAggregateInput
  }

  export type StudentDetailsScalarWhereWithAggregatesInput = {
    AND?: StudentDetailsScalarWhereWithAggregatesInput | StudentDetailsScalarWhereWithAggregatesInput[]
    OR?: StudentDetailsScalarWhereWithAggregatesInput[]
    NOT?: StudentDetailsScalarWhereWithAggregatesInput | StudentDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentDetails"> | string
    Name?: StringWithAggregatesFilter<"StudentDetails"> | string
    IsActive?: BoolNullableWithAggregatesFilter<"StudentDetails"> | boolean | null
    Email?: StringWithAggregatesFilter<"StudentDetails"> | string
  }

  export type StudentDetailsCreateInput = {
    id?: string
    Name: string
    IsActive?: boolean | null
    Email: string
  }

  export type StudentDetailsUncheckedCreateInput = {
    id?: string
    Name: string
    IsActive?: boolean | null
    Email: string
  }

  export type StudentDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type StudentDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type StudentDetailsCreateManyInput = {
    id?: string
    Name: string
    IsActive?: boolean | null
    Email: string
  }

  export type StudentDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type StudentDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    IsActive?: SortOrder
    Email?: SortOrder
  }

  export type StudentDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    IsActive?: SortOrder
    Email?: SortOrder
  }

  export type StudentDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    IsActive?: SortOrder
    Email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}