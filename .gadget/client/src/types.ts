import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";

type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }


export enum GadgetFieldType {
  ID,
  Number,
  String,
  Enum,
  RichText,
  DateTime,
  Email,
  URL,
  Money,
  File,
  Color,
  Password,
  Computed,
  HasManyThrough,
  BelongsTo,
  HasMany,
  HasOne,
  Boolean,
  Object,
  Array,
  JSON,
  Code,
  EncryptedString,
  Vector,
  Any,
  Null,
  RecordState,
  RoleAssignments,
}


/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending"|"Descending";

/** Represents the possible values of the Status enum. */
export type ShopifyProductStatusEnum = "active" | "archived" | "draft";

/** Represents the possible values of the Collection Type enum. */
export type ShopifyCollectionCollectionTypeEnum = "custom" | "smart";

/** Represents the possible values of the Subject Type enum. */
export type ShopifyEventSubjectTypeEnum = "ApiPermission" | "Article" | "Blog" | "Collection" | "Comment" | "Order" | "Page" | "PriceRule" | "Product";

/** Represents the possible values of the Discount Class enum. */
export type ShopifyDiscountDiscountClassEnum = "ORDER" | "PRODUCT" | "SHIPPING" | string;

/** Represents the possible values of the Status enum. */
export type ShopifyDiscountStatusEnum = "ACTIVE" | "EXPIRED" | "SCHEDULED" | string;

/** Represents the possible values of the Type enum. */
export type ShopifyFileTypeEnum = "GenericFile" | "MediaImage" | "Video" | string;

/** Represents the possible values of the File Status enum. */
export type ShopifyFileFileStatusEnum = "FAILED" | "PROCESSING" | "READY" | "UPLOADED" | string;

/** Represents the possible values of the Topic enum. */
export type ShopifyGdprRequestTopicEnum = "customers/data_request" | "customers/redact" | "shop/redact";

/** Represents one blogPipeAds result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalBlogPipeAdsRecord = Scalars["JSONObject"];

/** Represents one shopifyArticle result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyArticleRecord = Scalars["JSONObject"];

/** Represents one shopifyBlog result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyBlogRecord = Scalars["JSONObject"];

/** Represents one shopifyCollect result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCollectRecord = Scalars["JSONObject"];

/** Represents one shopifyCollection result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCollectionRecord = Scalars["JSONObject"];

/** Represents one shopifyComment result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCommentRecord = Scalars["JSONObject"];

/** Represents one shopifyDiscount result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDiscountRecord = Scalars["JSONObject"];

/** Represents one shopifyDiscountCode result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDiscountCodeRecord = Scalars["JSONObject"];

/** Represents one shopifyEvent result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyEventRecord = Scalars["JSONObject"];

/** Represents one shopifyFile result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFileRecord = Scalars["JSONObject"];

/** Represents one shopifyGdprRequest result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyGdprRequestRecord = Scalars["JSONObject"];

/** Represents one shopifyInventoryItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyInventoryItemRecord = Scalars["JSONObject"];

/** Represents one shopifyInventoryLevel result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyInventoryLevelRecord = Scalars["JSONObject"];

/** Represents one shopifyLocation result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyLocationRecord = Scalars["JSONObject"];

/** Represents one shopifyPage result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyPageRecord = Scalars["JSONObject"];

/** Represents one shopifyPriceRule result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyPriceRuleRecord = Scalars["JSONObject"];

/** Represents one shopifyProduct result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductRecord = Scalars["JSONObject"];

/** Represents one shopifyProductImage result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductImageRecord = Scalars["JSONObject"];

/** Represents one shopifyProductOption result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductOptionRecord = Scalars["JSONObject"];

/** Represents one shopifyProductVariant result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductVariantRecord = Scalars["JSONObject"];

/** Represents one shopifyRedirect result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyRedirectRecord = Scalars["JSONObject"];

/** Represents one shopifyShop result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyShopRecord = Scalars["JSONObject"];

/** Represents one shopifySync result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySyncRecord = Scalars["JSONObject"];

/** Represents one blogPipeArticle result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalBlogPipeArticleRecord = Scalars["JSONObject"];

/** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];

/** Represents one blogPipeTopics result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalBlogPipeTopicsRecord = Scalars["JSONObject"];



export type BlogPipeAdsSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the adName field. Defaults to ascending (smallest value first). */
  adName?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the startDate field. Defaults to ascending (smallest value first). */
  startDate?: SortOrder | null;

  /** Sort the results by the endDate field. Defaults to ascending (smallest value first). */
  endDate?: SortOrder | null;

  /** Sort the results by the impressions field. Defaults to ascending (smallest value first). */
  impressions?: SortOrder | null;

  /** Sort the results by the clicks field. Defaults to ascending (smallest value first). */
  clicks?: SortOrder | null;

  /** Sort the results by the lastUpdate field. Defaults to ascending (smallest value first). */
  lastUpdate?: SortOrder | null;
};



export type BlogPipeAdsFilter = {

  AND?: (BlogPipeAdsFilter | null)[];

  OR?: (BlogPipeAdsFilter | null)[];

  NOT?: (BlogPipeAdsFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;

  adName?: StringFilter | null;

  status?: StringFilter | null;

  startDate?: StringFilter | null;

  endDate?: StringFilter | null;

  impressions?: StringFilter | null;

  clicks?: StringFilter | null;

  lastUpdate?: StringFilter | null;
};



export type IDFilter = {

  equals?: (Scalars['GadgetID'] | null) | null;

  notEquals?: (Scalars['GadgetID'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['GadgetID'] | null) | null)[];

  notIn?: ((Scalars['GadgetID'] | null) | null)[];

  lessThan?: (Scalars['GadgetID'] | null) | null;

  lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;

  greaterThan?: (Scalars['GadgetID'] | null) | null;

  greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
};



export type DateTimeFilter = {

  equals?: Date | Scalars['ISO8601DateString'] | null;

  notEquals?: Date | Scalars['ISO8601DateString'] | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: (Date | Scalars['ISO8601DateString'] | null)[];

  notIn?: (Date | Scalars['ISO8601DateString'] | null)[];

  lessThan?: Date | Scalars['ISO8601DateString'] | null;

  lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  greaterThan?: Date | Scalars['ISO8601DateString'] | null;

  greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  before?: Date | Scalars['ISO8601DateString'] | null;

  after?: Date | Scalars['ISO8601DateString'] | null;
};



export type StringFilter = {

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];

  notIn?: ((Scalars['String'] | null) | null)[];

  lessThan?: (Scalars['String'] | null) | null;

  lessThanOrEqual?: (Scalars['String'] | null) | null;

  greaterThan?: (Scalars['String'] | null) | null;

  greaterThanOrEqual?: (Scalars['String'] | null) | null;

  startsWith?: (Scalars['String'] | null) | null;
};



export type ShopifyProductVariantSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the barcode field. Defaults to ascending (smallest value first). */
  barcode?: SortOrder | null;

  /** Sort the results by the compareAtPrice field. Defaults to ascending (smallest value first). */
  compareAtPrice?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the fulfillmentService field. Defaults to ascending (smallest value first). */
  fulfillmentService?: SortOrder | null;

  /** Sort the results by the grams field. Defaults to ascending (smallest value first). */
  grams?: SortOrder | null;

  /** Sort the results by the inventoryManagement field. Defaults to ascending (smallest value first). */
  inventoryManagement?: SortOrder | null;

  /** Sort the results by the inventoryPolicy field. Defaults to ascending (smallest value first). */
  inventoryPolicy?: SortOrder | null;

  /** Sort the results by the inventoryQuantity field. Defaults to ascending (smallest value first). */
  inventoryQuantity?: SortOrder | null;

  /** Sort the results by the inventoryQuantityAdjustment field. Defaults to ascending (smallest value first). */
  inventoryQuantityAdjustment?: SortOrder | null;

  /** Sort the results by the oldInventoryQuantity field. Defaults to ascending (smallest value first). */
  oldInventoryQuantity?: SortOrder | null;

  /** Sort the results by the option1 field. Defaults to ascending (smallest value first). */
  option1?: SortOrder | null;

  /** Sort the results by the option2 field. Defaults to ascending (smallest value first). */
  option2?: SortOrder | null;

  /** Sort the results by the option3 field. Defaults to ascending (smallest value first). */
  option3?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the presentmentPrices field. Defaults to ascending (smallest value first). */
  presentmentPrices?: SortOrder | null;

  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the taxCode field. Defaults to ascending (smallest value first). */
  taxCode?: SortOrder | null;

  /** Sort the results by the taxable field. Defaults to ascending (smallest value first). */
  taxable?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the weight field. Defaults to ascending (smallest value first). */
  weight?: SortOrder | null;

  /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
  weightUnit?: SortOrder | null;
};



export type ShopifyProductVariantFilter = {

  AND?: (ShopifyProductVariantFilter | null)[];

  OR?: (ShopifyProductVariantFilter | null)[];

  NOT?: (ShopifyProductVariantFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  barcode?: StringFilter | null;

  compareAtPrice?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  fulfillmentService?: StringFilter | null;

  grams?: FloatFilter | null;

  inventoryManagement?: StringFilter | null;

  inventoryPolicy?: StringFilter | null;

  inventoryQuantity?: FloatFilter | null;

  inventoryQuantityAdjustment?: FloatFilter | null;

  oldInventoryQuantity?: FloatFilter | null;

  option1?: StringFilter | null;

  option2?: StringFilter | null;

  option3?: StringFilter | null;

  position?: FloatFilter | null;

  presentmentPrices?: JSONFilter | null;

  price?: StringFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  taxCode?: StringFilter | null;

  taxable?: BooleanFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  weight?: FloatFilter | null;

  weightUnit?: StringFilter | null;

  inventoryItem?: IDFilter | null;

  inventoryItemId?: IDFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  productImage?: IDFilter | null;

  productImageId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type FloatFilter = {

  equals?: (Scalars['Float'] | null) | null;

  notEquals?: (Scalars['Float'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['Float'] | null) | null)[];

  notIn?: ((Scalars['Float'] | null) | null)[];

  lessThan?: (Scalars['Float'] | null) | null;

  lessThanOrEqual?: (Scalars['Float'] | null) | null;

  greaterThan?: (Scalars['Float'] | null) | null;

  greaterThanOrEqual?: (Scalars['Float'] | null) | null;
};



export type JSONFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['JSON'] | null) | null;

  in?: ((Scalars['JSON'] | null) | null)[];

  notIn?: ((Scalars['JSON'] | null) | null)[];

  notEquals?: (Scalars['JSON'] | null) | null;

  matches?: (Scalars['JSON'] | null) | null;
};



export type BooleanFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['Boolean'] | null) | null;

  notEquals?: (Scalars['Boolean'] | null) | null;
};



export type ShopifyProductImageSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the alt field. Defaults to ascending (smallest value first). */
  alt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the height field. Defaults to ascending (smallest value first). */
  height?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the width field. Defaults to ascending (smallest value first). */
  width?: SortOrder | null;
};



export type ShopifyProductImageFilter = {

  AND?: (ShopifyProductImageFilter | null)[];

  OR?: (ShopifyProductImageFilter | null)[];

  NOT?: (ShopifyProductImageFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  alt?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  height?: FloatFilter | null;

  position?: FloatFilter | null;

  source?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  width?: FloatFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyProductOptionSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the values field. Defaults to ascending (smallest value first). */
  values?: SortOrder | null;
};



export type ShopifyProductOptionFilter = {

  AND?: (ShopifyProductOptionFilter | null)[];

  OR?: (ShopifyProductOptionFilter | null)[];

  NOT?: (ShopifyProductOptionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  name?: StringFilter | null;

  position?: FloatFilter | null;

  values?: JSONFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCollectSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the sortValue field. Defaults to ascending (smallest value first). */
  sortValue?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyCollectFilter = {

  AND?: (ShopifyCollectFilter | null)[];

  OR?: (ShopifyCollectFilter | null)[];

  NOT?: (ShopifyCollectFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  position?: FloatFilter | null;

  sortValue?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  customCollection?: IDFilter | null;

  customCollectionId?: IDFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyLocationSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the active field. Defaults to ascending (smallest value first). */
  active?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the legacy field. Defaults to ascending (smallest value first). */
  legacy?: SortOrder | null;

  /** Sort the results by the localizedCountryName field. Defaults to ascending (smallest value first). */
  localizedCountryName?: SortOrder | null;

  /** Sort the results by the localizedProvinceName field. Defaults to ascending (smallest value first). */
  localizedProvinceName?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;
};



export type ShopifyLocationFilter = {

  AND?: (ShopifyLocationFilter | null)[];

  OR?: (ShopifyLocationFilter | null)[];

  NOT?: (ShopifyLocationFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  active?: BooleanFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  city?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  legacy?: BooleanFilter | null;

  localizedCountryName?: StringFilter | null;

  localizedProvinceName?: StringFilter | null;

  name?: StringFilter | null;

  phone?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  zipCode?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyInventoryItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the cost field. Defaults to ascending (smallest value first). */
  cost?: SortOrder | null;

  /** Sort the results by the countryCodeOfOrigin field. Defaults to ascending (smallest value first). */
  countryCodeOfOrigin?: SortOrder | null;

  /** Sort the results by the countryHarmonizedSystemCodes field. Defaults to ascending (smallest value first). */
  countryHarmonizedSystemCodes?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the harmonizedSystemCode field. Defaults to ascending (smallest value first). */
  harmonizedSystemCode?: SortOrder | null;

  /** Sort the results by the provinceCodeOfOrigin field. Defaults to ascending (smallest value first). */
  provinceCodeOfOrigin?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the tracked field. Defaults to ascending (smallest value first). */
  tracked?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyInventoryItemFilter = {

  AND?: (ShopifyInventoryItemFilter | null)[];

  OR?: (ShopifyInventoryItemFilter | null)[];

  NOT?: (ShopifyInventoryItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  cost?: StringFilter | null;

  countryCodeOfOrigin?: StringFilter | null;

  countryHarmonizedSystemCodes?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  harmonizedSystemCode?: StringFilter | null;

  provinceCodeOfOrigin?: StringFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  tracked?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyPageSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the author field. Defaults to ascending (smallest value first). */
  author?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyPageFilter = {

  AND?: (ShopifyPageFilter | null)[];

  OR?: (ShopifyPageFilter | null)[];

  NOT?: (ShopifyPageFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  author?: StringFilter | null;

  body?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  handle?: StringFilter | null;

  publishedAt?: DateTimeFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDiscountCodeSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the code field. Defaults to ascending (smallest value first). */
  code?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the usageCount field. Defaults to ascending (smallest value first). */
  usageCount?: SortOrder | null;
};



export type ShopifyDiscountCodeFilter = {

  AND?: (ShopifyDiscountCodeFilter | null)[];

  OR?: (ShopifyDiscountCodeFilter | null)[];

  NOT?: (ShopifyDiscountCodeFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  code?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  usageCount?: FloatFilter | null;

  priceRule?: IDFilter | null;

  priceRuleId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyPriceRuleSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the allocationLimit field. Defaults to ascending (smallest value first). */
  allocationLimit?: SortOrder | null;

  /** Sort the results by the allocationMethod field. Defaults to ascending (smallest value first). */
  allocationMethod?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the customerSegmentPrerequisiteIds field. Defaults to ascending (smallest value first). */
  customerSegmentPrerequisiteIds?: SortOrder | null;

  /** Sort the results by the customerSelection field. Defaults to ascending (smallest value first). */
  customerSelection?: SortOrder | null;

  /** Sort the results by the endsAt field. Defaults to ascending (smallest value first). */
  endsAt?: SortOrder | null;

  /** Sort the results by the entitledCollectionIds field. Defaults to ascending (smallest value first). */
  entitledCollectionIds?: SortOrder | null;

  /** Sort the results by the entitledCountryIds field. Defaults to ascending (smallest value first). */
  entitledCountryIds?: SortOrder | null;

  /** Sort the results by the entitledProductIds field. Defaults to ascending (smallest value first). */
  entitledProductIds?: SortOrder | null;

  /** Sort the results by the entitledVariantIds field. Defaults to ascending (smallest value first). */
  entitledVariantIds?: SortOrder | null;

  /** Sort the results by the oncePerCustomer field. Defaults to ascending (smallest value first). */
  oncePerCustomer?: SortOrder | null;

  /** Sort the results by the prerequisiteCollectionIds field. Defaults to ascending (smallest value first). */
  prerequisiteCollectionIds?: SortOrder | null;

  /** Sort the results by the prerequisiteCustomerIds field. Defaults to ascending (smallest value first). */
  prerequisiteCustomerIds?: SortOrder | null;

  /** Sort the results by the prerequisiteProductIds field. Defaults to ascending (smallest value first). */
  prerequisiteProductIds?: SortOrder | null;

  /** Sort the results by the prerequisiteQuantityRange field. Defaults to ascending (smallest value first). */
  prerequisiteQuantityRange?: SortOrder | null;

  /** Sort the results by the prerequisiteShippingPriceRange field. Defaults to ascending (smallest value first). */
  prerequisiteShippingPriceRange?: SortOrder | null;

  /** Sort the results by the prerequisiteSubtotalRange field. Defaults to ascending (smallest value first). */
  prerequisiteSubtotalRange?: SortOrder | null;

  /** Sort the results by the prerequisiteToEntitlementPurchase field. Defaults to ascending (smallest value first). */
  prerequisiteToEntitlementPurchase?: SortOrder | null;

  /** Sort the results by the prerequisiteToEntitlementQuantityRatio field. Defaults to ascending (smallest value first). */
  prerequisiteToEntitlementQuantityRatio?: SortOrder | null;

  /** Sort the results by the prerequisiteVariants field. Defaults to ascending (smallest value first). */
  prerequisiteVariants?: SortOrder | null;

  /** Sort the results by the startsAt field. Defaults to ascending (smallest value first). */
  startsAt?: SortOrder | null;

  /** Sort the results by the targetSelection field. Defaults to ascending (smallest value first). */
  targetSelection?: SortOrder | null;

  /** Sort the results by the targetType field. Defaults to ascending (smallest value first). */
  targetType?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the usageLimit field. Defaults to ascending (smallest value first). */
  usageLimit?: SortOrder | null;

  /** Sort the results by the value field. Defaults to ascending (smallest value first). */
  value?: SortOrder | null;

  /** Sort the results by the valueType field. Defaults to ascending (smallest value first). */
  valueType?: SortOrder | null;
};



export type ShopifyPriceRuleFilter = {

  AND?: (ShopifyPriceRuleFilter | null)[];

  OR?: (ShopifyPriceRuleFilter | null)[];

  NOT?: (ShopifyPriceRuleFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  allocationLimit?: FloatFilter | null;

  allocationMethod?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  customerSegmentPrerequisiteIds?: JSONFilter | null;

  customerSelection?: StringFilter | null;

  endsAt?: DateTimeFilter | null;

  entitledCollectionIds?: JSONFilter | null;

  entitledCountryIds?: JSONFilter | null;

  entitledProductIds?: JSONFilter | null;

  entitledVariantIds?: JSONFilter | null;

  oncePerCustomer?: BooleanFilter | null;

  prerequisiteCollectionIds?: JSONFilter | null;

  prerequisiteCustomerIds?: JSONFilter | null;

  prerequisiteProductIds?: JSONFilter | null;

  prerequisiteQuantityRange?: JSONFilter | null;

  prerequisiteShippingPriceRange?: JSONFilter | null;

  prerequisiteSubtotalRange?: JSONFilter | null;

  prerequisiteToEntitlementPurchase?: JSONFilter | null;

  prerequisiteToEntitlementQuantityRatio?: JSONFilter | null;

  prerequisiteVariants?: JSONFilter | null;

  startsAt?: DateTimeFilter | null;

  targetSelection?: StringFilter | null;

  targetType?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  usageLimit?: FloatFilter | null;

  value?: FloatFilter | null;

  valueType?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyEventSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the arguments field. Defaults to ascending (smallest value first). */
  arguments?: SortOrder | null;

  /** Sort the results by the author field. Defaults to ascending (smallest value first). */
  author?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the description field. Defaults to ascending (smallest value first). */
  description?: SortOrder | null;

  /** Sort the results by the message field. Defaults to ascending (smallest value first). */
  message?: SortOrder | null;

  /** Sort the results by the path field. Defaults to ascending (smallest value first). */
  path?: SortOrder | null;

  /** Sort the results by the subjectId field. Defaults to ascending (smallest value first). */
  subjectId?: SortOrder | null;

  /** Sort the results by the subjectType field. Defaults to ascending (smallest value first). */
  subjectType?: SortOrder | null;

  /** Sort the results by the verb field. Defaults to ascending (smallest value first). */
  verb?: SortOrder | null;
};



export type ShopifyEventFilter = {

  AND?: (ShopifyEventFilter | null)[];

  OR?: (ShopifyEventFilter | null)[];

  NOT?: (ShopifyEventFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  arguments?: JSONFilter | null;

  author?: StringFilter | null;

  body?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  description?: StringFilter | null;

  message?: StringFilter | null;

  path?: StringFilter | null;

  subjectId?: FloatFilter | null;

  subjectType?: SingleEnumFilter | null;

  verb?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type SingleEnumFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];
};



export type ShopifyCollectionSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the disjunctive field. Defaults to ascending (smallest value first). */
  disjunctive?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the image field. Defaults to ascending (smallest value first). */
  image?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the publishedScope field. Defaults to ascending (smallest value first). */
  publishedScope?: SortOrder | null;

  /** Sort the results by the rules field. Defaults to ascending (smallest value first). */
  rules?: SortOrder | null;

  /** Sort the results by the sortOrder field. Defaults to ascending (smallest value first). */
  sortOrder?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the collectionType field. Defaults to ascending (smallest value first). */
  collectionType?: SortOrder | null;
};



export type ShopifyCollectionFilter = {

  AND?: (ShopifyCollectionFilter | null)[];

  OR?: (ShopifyCollectionFilter | null)[];

  NOT?: (ShopifyCollectionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  body?: StringFilter | null;

  disjunctive?: BooleanFilter | null;

  handle?: StringFilter | null;

  image?: JSONFilter | null;

  publishedAt?: DateTimeFilter | null;

  publishedScope?: StringFilter | null;

  rules?: JSONFilter | null;

  sortOrder?: StringFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;

  collectionType?: SingleEnumFilter | null;
};



export type ShopifyProductSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the productCategory field. Defaults to ascending (smallest value first). */
  productCategory?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the productType field. Defaults to ascending (smallest value first). */
  productType?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the publishedScope field. Defaults to ascending (smallest value first). */
  publishedScope?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: SortOrder | null;
};



export type ShopifyProductFilter = {

  AND?: (ShopifyProductFilter | null)[];

  OR?: (ShopifyProductFilter | null)[];

  NOT?: (ShopifyProductFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  productCategory?: JSONFilter | null;

  body?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  handle?: StringFilter | null;

  productType?: StringFilter | null;

  publishedAt?: DateTimeFilter | null;

  publishedScope?: StringFilter | null;

  status?: SingleEnumFilter | null;

  tags?: JSONFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  vendor?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyInventoryLevelSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the available field. Defaults to ascending (smallest value first). */
  available?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyInventoryLevelFilter = {

  AND?: (ShopifyInventoryLevelFilter | null)[];

  OR?: (ShopifyInventoryLevelFilter | null)[];

  NOT?: (ShopifyInventoryLevelFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  available?: FloatFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  inventoryItem?: IDFilter | null;

  inventoryItemId?: IDFilter | null;

  location?: IDFilter | null;

  locationId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifySyncSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the errorDetails field. Defaults to ascending (smallest value first). */
  errorDetails?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the errorMessage field. Defaults to ascending (smallest value first). */
  errorMessage?: SortOrder | null;

  /** Sort the results by the syncSince field. Defaults to ascending (smallest value first). */
  syncSince?: SortOrder | null;

  /** Sort the results by the force field. Defaults to ascending (smallest value first). */
  force?: SortOrder | null;

  /** Sort the results by the models field. Defaults to ascending (smallest value first). */
  models?: SortOrder | null;
};



export type ShopifySyncFilter = {

  AND?: (ShopifySyncFilter | null)[];

  OR?: (ShopifySyncFilter | null)[];

  NOT?: (ShopifySyncFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  errorDetails?: StringFilter | null;

  domain?: StringFilter | null;

  errorMessage?: StringFilter | null;

  syncSince?: DateTimeFilter | null;

  force?: BooleanFilter | null;

  models?: JSONFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type StateFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  inState?: (Scalars['String'] | null) | null;
};



export type ShopifyCommentSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the author field. Defaults to ascending (smallest value first). */
  author?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the bodyHtml field. Defaults to ascending (smallest value first). */
  bodyHtml?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the ip field. Defaults to ascending (smallest value first). */
  ip?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the userAgent field. Defaults to ascending (smallest value first). */
  userAgent?: SortOrder | null;
};



export type ShopifyCommentFilter = {

  AND?: (ShopifyCommentFilter | null)[];

  OR?: (ShopifyCommentFilter | null)[];

  NOT?: (ShopifyCommentFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  author?: StringFilter | null;

  body?: StringFilter | null;

  bodyHtml?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  email?: StringFilter | null;

  ip?: StringFilter | null;

  publishedAt?: DateTimeFilter | null;

  status?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  userAgent?: StringFilter | null;

  article?: IDFilter | null;

  articleId?: IDFilter | null;

  blog?: IDFilter | null;

  blogId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyArticleSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the author field. Defaults to ascending (smallest value first). */
  author?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the image field. Defaults to ascending (smallest value first). */
  image?: SortOrder | null;

  /** Sort the results by the published field. Defaults to ascending (smallest value first). */
  published?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the summary field. Defaults to ascending (smallest value first). */
  summary?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;
};



export type ShopifyArticleFilter = {

  AND?: (ShopifyArticleFilter | null)[];

  OR?: (ShopifyArticleFilter | null)[];

  NOT?: (ShopifyArticleFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  author?: StringFilter | null;

  body?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  handle?: StringFilter | null;

  image?: JSONFilter | null;

  published?: BooleanFilter | null;

  publishedAt?: DateTimeFilter | null;

  summary?: StringFilter | null;

  tags?: JSONFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  blog?: IDFilter | null;

  blogId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;

  status?: StringFilter | null;
};



export type ShopifyBlogSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the commentable field. Defaults to ascending (smallest value first). */
  commentable?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the feedburner field. Defaults to ascending (smallest value first). */
  feedburner?: SortOrder | null;

  /** Sort the results by the feedburnerLocation field. Defaults to ascending (smallest value first). */
  feedburnerLocation?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyBlogFilter = {

  AND?: (ShopifyBlogFilter | null)[];

  OR?: (ShopifyBlogFilter | null)[];

  NOT?: (ShopifyBlogFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  commentable?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  feedburner?: JSONFilter | null;

  feedburnerLocation?: StringFilter | null;

  handle?: StringFilter | null;

  tags?: JSONFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyRedirectSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the path field. Defaults to ascending (smallest value first). */
  path?: SortOrder | null;

  /** Sort the results by the target field. Defaults to ascending (smallest value first). */
  target?: SortOrder | null;
};



export type ShopifyRedirectFilter = {

  AND?: (ShopifyRedirectFilter | null)[];

  OR?: (ShopifyRedirectFilter | null)[];

  NOT?: (ShopifyRedirectFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  path?: StringFilter | null;

  target?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDiscountSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the appDiscountType field. Defaults to ascending (smallest value first). */
  appDiscountType?: SortOrder | null;

  /** Sort the results by the appliesOnOneTimePurchase field. Defaults to ascending (smallest value first). */
  appliesOnOneTimePurchase?: SortOrder | null;

  /** Sort the results by the appliesOnSubscription field. Defaults to ascending (smallest value first). */
  appliesOnSubscription?: SortOrder | null;

  /** Sort the results by the appliesOncePerCustomer field. Defaults to ascending (smallest value first). */
  appliesOncePerCustomer?: SortOrder | null;

  /** Sort the results by the asyncUsageCount field. Defaults to ascending (smallest value first). */
  asyncUsageCount?: SortOrder | null;

  /** Sort the results by the codeCount field. Defaults to ascending (smallest value first). */
  codeCount?: SortOrder | null;

  /** Sort the results by the combinesWith field. Defaults to ascending (smallest value first). */
  combinesWith?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the destinationSelection field. Defaults to ascending (smallest value first). */
  destinationSelection?: SortOrder | null;

  /** Sort the results by the discountClass field. Defaults to ascending (smallest value first). */
  discountClass?: SortOrder | null;

  /** Sort the results by the discountId field. Defaults to ascending (smallest value first). */
  discountId?: SortOrder | null;

  /** Sort the results by the endsAt field. Defaults to ascending (smallest value first). */
  endsAt?: SortOrder | null;

  /** Sort the results by the errorHistory field. Defaults to ascending (smallest value first). */
  errorHistory?: SortOrder | null;

  /** Sort the results by the hasTimelineComment field. Defaults to ascending (smallest value first). */
  hasTimelineComment?: SortOrder | null;

  /** Sort the results by the maximumShippingPrice field. Defaults to ascending (smallest value first). */
  maximumShippingPrice?: SortOrder | null;

  /** Sort the results by the minimumRequirement field. Defaults to ascending (smallest value first). */
  minimumRequirement?: SortOrder | null;

  /** Sort the results by the recurringCycleLimit field. Defaults to ascending (smallest value first). */
  recurringCycleLimit?: SortOrder | null;

  /** Sort the results by the shareableUrls field. Defaults to ascending (smallest value first). */
  shareableUrls?: SortOrder | null;

  /** Sort the results by the shortSummary field. Defaults to ascending (smallest value first). */
  shortSummary?: SortOrder | null;

  /** Sort the results by the startsAt field. Defaults to ascending (smallest value first). */
  startsAt?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the summary field. Defaults to ascending (smallest value first). */
  summary?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the totalSales field. Defaults to ascending (smallest value first). */
  totalSales?: SortOrder | null;

  /** Sort the results by the usageLimit field. Defaults to ascending (smallest value first). */
  usageLimit?: SortOrder | null;

  /** Sort the results by the usesPerOrderLimit field. Defaults to ascending (smallest value first). */
  usesPerOrderLimit?: SortOrder | null;
};



export type ShopifyDiscountFilter = {

  AND?: (ShopifyDiscountFilter | null)[];

  OR?: (ShopifyDiscountFilter | null)[];

  NOT?: (ShopifyDiscountFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  appDiscountType?: JSONFilter | null;

  appliesOnOneTimePurchase?: BooleanFilter | null;

  appliesOnSubscription?: BooleanFilter | null;

  appliesOncePerCustomer?: BooleanFilter | null;

  asyncUsageCount?: FloatFilter | null;

  codeCount?: IntFilter | null;

  combinesWith?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  destinationSelection?: JSONFilter | null;

  discountClass?: SingleEnumFilter | null;

  discountId?: StringFilter | null;

  endsAt?: DateTimeFilter | null;

  errorHistory?: JSONFilter | null;

  hasTimelineComment?: BooleanFilter | null;

  maximumShippingPrice?: JSONFilter | null;

  minimumRequirement?: JSONFilter | null;

  recurringCycleLimit?: IntFilter | null;

  shareableUrls?: JSONFilter | null;

  shortSummary?: StringFilter | null;

  startsAt?: DateTimeFilter | null;

  status?: SingleEnumFilter | null;

  summary?: StringFilter | null;

  title?: StringFilter | null;

  totalSales?: JSONFilter | null;

  usageLimit?: IntFilter | null;

  usesPerOrderLimit?: IntFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type IntFilter = {

  equals?: (Scalars['Int'] | null) | null;

  notEquals?: (Scalars['Int'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['Int'] | null) | null)[];

  notIn?: ((Scalars['Int'] | null) | null)[];

  lessThan?: (Scalars['Int'] | null) | null;

  lessThanOrEqual?: (Scalars['Int'] | null) | null;

  greaterThan?: (Scalars['Int'] | null) | null;

  greaterThanOrEqual?: (Scalars['Int'] | null) | null;
};



export type ShopifyFileSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the type field. Defaults to ascending (smallest value first). */
  type?: SortOrder | null;

  /** Sort the results by the alt field. Defaults to ascending (smallest value first). */
  alt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the duration field. Defaults to ascending (smallest value first). */
  duration?: SortOrder | null;

  /** Sort the results by the fileErrors field. Defaults to ascending (smallest value first). */
  fileErrors?: SortOrder | null;

  /** Sort the results by the fileStatus field. Defaults to ascending (smallest value first). */
  fileStatus?: SortOrder | null;

  /** Sort the results by the image field. Defaults to ascending (smallest value first). */
  image?: SortOrder | null;

  /** Sort the results by the originalFileSize field. Defaults to ascending (smallest value first). */
  originalFileSize?: SortOrder | null;

  /** Sort the results by the originalSource field. Defaults to ascending (smallest value first). */
  originalSource?: SortOrder | null;

  /** Sort the results by the preview field. Defaults to ascending (smallest value first). */
  preview?: SortOrder | null;

  /** Sort the results by the sources field. Defaults to ascending (smallest value first). */
  sources?: SortOrder | null;

  /** Sort the results by the url field. Defaults to ascending (smallest value first). */
  url?: SortOrder | null;
};



export type ShopifyFileFilter = {

  AND?: (ShopifyFileFilter | null)[];

  OR?: (ShopifyFileFilter | null)[];

  NOT?: (ShopifyFileFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  type?: SingleEnumFilter | null;

  alt?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  duration?: IntFilter | null;

  fileErrors?: JSONFilter | null;

  fileStatus?: SingleEnumFilter | null;

  image?: JSONFilter | null;

  originalFileSize?: IntFilter | null;

  originalSource?: JSONFilter | null;

  preview?: JSONFilter | null;

  sources?: JSONFilter | null;

  url?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyGdprRequestSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the payload field. Defaults to ascending (smallest value first). */
  payload?: SortOrder | null;

  /** Sort the results by the topic field. Defaults to ascending (smallest value first). */
  topic?: SortOrder | null;
};



export type ShopifyGdprRequestFilter = {

  AND?: (ShopifyGdprRequestFilter | null)[];

  OR?: (ShopifyGdprRequestFilter | null)[];

  NOT?: (ShopifyGdprRequestFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  payload?: JSONFilter | null;

  topic?: SingleEnumFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyShopSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: SortOrder | null;

  /** Sort the results by the checkoutApiSupported field. Defaults to ascending (smallest value first). */
  checkoutApiSupported?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the cookieConsentLevel field. Defaults to ascending (smallest value first). */
  cookieConsentLevel?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: SortOrder | null;

  /** Sort the results by the countryName field. Defaults to ascending (smallest value first). */
  countryName?: SortOrder | null;

  /** Sort the results by the countyTaxes field. Defaults to ascending (smallest value first). */
  countyTaxes?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the customerEmail field. Defaults to ascending (smallest value first). */
  customerEmail?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the eligibleForCardReaderGiveaway field. Defaults to ascending (smallest value first). */
  eligibleForCardReaderGiveaway?: SortOrder | null;

  /** Sort the results by the eligibleForPayments field. Defaults to ascending (smallest value first). */
  eligibleForPayments?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the enabledPresentmentCurrencies field. Defaults to ascending (smallest value first). */
  enabledPresentmentCurrencies?: SortOrder | null;

  /** Sort the results by the finances field. Defaults to ascending (smallest value first). */
  finances?: SortOrder | null;

  /** Sort the results by the forceSsl field. Defaults to ascending (smallest value first). */
  forceSsl?: SortOrder | null;

  /** Sort the results by the googleAppsDomain field. Defaults to ascending (smallest value first). */
  googleAppsDomain?: SortOrder | null;

  /** Sort the results by the googleAppsLoginEnabled field. Defaults to ascending (smallest value first). */
  googleAppsLoginEnabled?: SortOrder | null;

  /** Sort the results by the grantedScopes field. Defaults to ascending (smallest value first). */
  grantedScopes?: SortOrder | null;

  /** Sort the results by the hasDiscounts field. Defaults to ascending (smallest value first). */
  hasDiscounts?: SortOrder | null;

  /** Sort the results by the hasGiftCards field. Defaults to ascending (smallest value first). */
  hasGiftCards?: SortOrder | null;

  /** Sort the results by the hasStorefront field. Defaults to ascending (smallest value first). */
  hasStorefront?: SortOrder | null;

  /** Sort the results by the ianaTimezone field. Defaults to ascending (smallest value first). */
  ianaTimezone?: SortOrder | null;

  /** Sort the results by the installedViaApiKey field. Defaults to ascending (smallest value first). */
  installedViaApiKey?: SortOrder | null;

  /** Sort the results by the latitude field. Defaults to ascending (smallest value first). */
  latitude?: SortOrder | null;

  /** Sort the results by the longitude field. Defaults to ascending (smallest value first). */
  longitude?: SortOrder | null;

  /** Sort the results by the marketingSmsContentEnabledAtCheckout field. Defaults to ascending (smallest value first). */
  marketingSmsContentEnabledAtCheckout?: SortOrder | null;

  /** Sort the results by the moneyFormat field. Defaults to ascending (smallest value first). */
  moneyFormat?: SortOrder | null;

  /** Sort the results by the moneyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the multiLocationEnabled field. Defaults to ascending (smallest value first). */
  multiLocationEnabled?: SortOrder | null;

  /** Sort the results by the myshopifyDomain field. Defaults to ascending (smallest value first). */
  myshopifyDomain?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the passwordEnabled field. Defaults to ascending (smallest value first). */
  passwordEnabled?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the planDisplayName field. Defaults to ascending (smallest value first). */
  planDisplayName?: SortOrder | null;

  /** Sort the results by the planName field. Defaults to ascending (smallest value first). */
  planName?: SortOrder | null;

  /** Sort the results by the preLaunchEnabled field. Defaults to ascending (smallest value first). */
  preLaunchEnabled?: SortOrder | null;

  /** Sort the results by the primaryLocale field. Defaults to ascending (smallest value first). */
  primaryLocale?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: SortOrder | null;

  /** Sort the results by the registeredWebhooks field. Defaults to ascending (smallest value first). */
  registeredWebhooks?: SortOrder | null;

  /** Sort the results by the requiresExtraPaymentsAgreement field. Defaults to ascending (smallest value first). */
  requiresExtraPaymentsAgreement?: SortOrder | null;

  /** Sort the results by the setupRequired field. Defaults to ascending (smallest value first). */
  setupRequired?: SortOrder | null;

  /** Sort the results by the shopOwner field. Defaults to ascending (smallest value first). */
  shopOwner?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the taxShipping field. Defaults to ascending (smallest value first). */
  taxShipping?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the timezone field. Defaults to ascending (smallest value first). */
  timezone?: SortOrder | null;

  /** Sort the results by the transactionalSmsDisabled field. Defaults to ascending (smallest value first). */
  transactionalSmsDisabled?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
  weightUnit?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;
};



export type ShopifyShopFilter = {

  AND?: (ShopifyShopFilter | null)[];

  OR?: (ShopifyShopFilter | null)[];

  NOT?: (ShopifyShopFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  checkoutApiSupported?: BooleanFilter | null;

  city?: StringFilter | null;

  cookieConsentLevel?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  countryName?: StringFilter | null;

  countyTaxes?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  customerEmail?: StringFilter | null;

  domain?: StringFilter | null;

  eligibleForCardReaderGiveaway?: BooleanFilter | null;

  eligibleForPayments?: BooleanFilter | null;

  email?: StringFilter | null;

  enabledPresentmentCurrencies?: JSONFilter | null;

  finances?: BooleanFilter | null;

  forceSsl?: BooleanFilter | null;

  googleAppsDomain?: StringFilter | null;

  googleAppsLoginEnabled?: BooleanFilter | null;

  grantedScopes?: JSONFilter | null;

  hasDiscounts?: BooleanFilter | null;

  hasGiftCards?: BooleanFilter | null;

  hasStorefront?: BooleanFilter | null;

  ianaTimezone?: StringFilter | null;

  installedViaApiKey?: StringFilter | null;

  latitude?: FloatFilter | null;

  longitude?: FloatFilter | null;

  marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;

  moneyFormat?: StringFilter | null;

  moneyInEmailsFormat?: StringFilter | null;

  moneyWithCurrencyFormat?: StringFilter | null;

  moneyWithCurrencyInEmailsFormat?: StringFilter | null;

  multiLocationEnabled?: BooleanFilter | null;

  myshopifyDomain?: StringFilter | null;

  name?: StringFilter | null;

  passwordEnabled?: BooleanFilter | null;

  phone?: StringFilter | null;

  planDisplayName?: StringFilter | null;

  planName?: StringFilter | null;

  preLaunchEnabled?: BooleanFilter | null;

  primaryLocale?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  registeredWebhooks?: JSONFilter | null;

  requiresExtraPaymentsAgreement?: BooleanFilter | null;

  setupRequired?: BooleanFilter | null;

  shopOwner?: StringFilter | null;

  source?: StringFilter | null;

  taxShipping?: BooleanFilter | null;

  taxesIncluded?: BooleanFilter | null;

  timezone?: StringFilter | null;

  transactionalSmsDisabled?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  weightUnit?: StringFilter | null;

  zipCode?: StringFilter | null;

  primaryLocation?: IDFilter | null;

  primaryLocationId?: IDFilter | null;
};



export type BlogPipeArticleSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;
};



export type BlogPipeArticleFilter = {

  AND?: (BlogPipeArticleFilter | null)[];

  OR?: (BlogPipeArticleFilter | null)[];

  NOT?: (BlogPipeArticleFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;

  title?: StringFilter | null;

  status?: StringFilter | null;
};



export type BlogPipeTopicsSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the keywords field. Defaults to ascending (smallest value first). */
  keywords?: SortOrder | null;
};



export type BlogPipeTopicsFilter = {

  AND?: (BlogPipeTopicsFilter | null)[];

  OR?: (BlogPipeTopicsFilter | null)[];

  NOT?: (BlogPipeTopicsFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  title?: StringFilter | null;

  keywords?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type CreateBlogPipeAdsInput = {

  shop?: ShopifyShopBelongsToInput | null;

  adName?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  startDate?: (Scalars['String'] | null) | null;

  endDate?: (Scalars['String'] | null) | null;

  impressions?: (Scalars['String'] | null) | null;

  clicks?: (Scalars['String'] | null) | null;

  lastUpdate?: (Scalars['String'] | null) | null;
};



export type ShopifyShopBelongsToInput = {

  actionA?: NestedShopifyShopActionAInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyShopActionAInput = {

  id: (Scalars['GadgetID'] | null);

  blogPipeAds?: (BlogPipeAdsHasManyInput | null)[];

  syncs?: (ShopifySyncHasManyInput | null)[];

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  checkoutApiSupported?: (Scalars['Boolean'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  cookieConsentLevel?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  countyTaxes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  customerEmail?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;

  eligibleForPayments?: (Scalars['Boolean'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;

  finances?: (Scalars['Boolean'] | null) | null;

  forceSsl?: (Scalars['Boolean'] | null) | null;

  googleAppsDomain?: (Scalars['String'] | null) | null;

  googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;

  hasDiscounts?: (Scalars['Boolean'] | null) | null;

  hasGiftCards?: (Scalars['Boolean'] | null) | null;

  hasStorefront?: (Scalars['Boolean'] | null) | null;

  ianaTimezone?: (Scalars['String'] | null) | null;

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;

  moneyFormat?: (Scalars['String'] | null) | null;

  moneyInEmailsFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;

  multiLocationEnabled?: (Scalars['Boolean'] | null) | null;

  myshopifyDomain?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  passwordEnabled?: (Scalars['Boolean'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  planDisplayName?: (Scalars['String'] | null) | null;

  planName?: (Scalars['String'] | null) | null;

  preLaunchEnabled?: (Scalars['Boolean'] | null) | null;

  primaryLocale?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;

  setupRequired?: (Scalars['Boolean'] | null) | null;

  shopOwner?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxShipping?: (Scalars['Boolean'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  timezone?: (Scalars['String'] | null) | null;

  transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weightUnit?: (Scalars['String'] | null) | null;

  zipCode?: (Scalars['String'] | null) | null;

  primaryLocation?: ShopifyLocationBelongsToInput | null;
};



export type BlogPipeAdsHasManyInput = {

  create?: NestedBlogPipeAdsCreateInput | null;

  update?: NestedBlogPipeAdsUpdateInput | null;

  delete?: NestedBlogPipeAdsDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeBlogPipeAdsInput | null;
};



export type NestedBlogPipeAdsCreateInput = {

  shop?: ShopifyShopBelongsToInput | null;

  adName?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  startDate?: (Scalars['String'] | null) | null;

  endDate?: (Scalars['String'] | null) | null;

  impressions?: (Scalars['String'] | null) | null;

  clicks?: (Scalars['String'] | null) | null;

  lastUpdate?: (Scalars['String'] | null) | null;
};



export type NestedBlogPipeAdsUpdateInput = {

  shop?: ShopifyShopBelongsToInput | null;

  adName?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  startDate?: (Scalars['String'] | null) | null;

  endDate?: (Scalars['String'] | null) | null;

  impressions?: (Scalars['String'] | null) | null;

  clicks?: (Scalars['String'] | null) | null;

  lastUpdate?: (Scalars['String'] | null) | null;

  id: (Scalars['GadgetID'] | null);
};



export type NestedBlogPipeAdsDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeBlogPipeAdsInput = {

  /** The new list of records to converge to */
  values: (ConvergeBlogPipeAdsValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeBlogPipeAdsValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  adName?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  startDate?: (Scalars['String'] | null) | null;

  endDate?: (Scalars['String'] | null) | null;

  impressions?: (Scalars['String'] | null) | null;

  clicks?: (Scalars['String'] | null) | null;

  lastUpdate?: (Scalars['String'] | null) | null;
};



export type ConvergeActionMap = {

  /** One of the model action's API identifiers. Specifies which action to use to create new records that are in the set of specified records but not yet in the database. Defaults to the action named `create` if it exists. */
  create?: (Scalars['String'] | null) | null;

  /** One of the model action's API identifiers. Specifies which action to use to update new records that are in the set of specified records and already in the database, but maybe have different field values. Defaults to the action named `update` if it exists. */
  update?: (Scalars['String'] | null) | null;

  /** One of the model action's API identifiers. Specifies which action to use to delete records that are not in the set of specified records but exist in the database. Defaults to the action named `delete` if it exists. */
  delete?: (Scalars['String'] | null) | null;
};



export type ShopifySyncHasManyInput = {

  run?: NestedShopifySyncRunInput | null;

  complete?: NestedShopifySyncCompleteInput | null;

  error?: NestedShopifySyncErrorInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifySyncInput | null;
};



export type NestedShopifySyncRunInput = {

  errorDetails?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  startReason?: (Scalars['String'] | null) | null;
};



export type NestedShopifySyncCompleteInput = {

  errorDetails?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifySyncErrorInput = {

  errorDetails?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifySyncInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifySyncValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifySyncValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyLocationBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type BulkCreateBlogPipeAdsInput = {

  blogPipeAds?: CreateBlogPipeAdsInput | null;
};



export type UpdateBlogPipeAdsInput = {

  shop?: ShopifyShopBelongsToInput | null;

  adName?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  startDate?: (Scalars['String'] | null) | null;

  endDate?: (Scalars['String'] | null) | null;

  impressions?: (Scalars['String'] | null) | null;

  clicks?: (Scalars['String'] | null) | null;

  lastUpdate?: (Scalars['String'] | null) | null;
};



export type BulkUpdateBlogPipeAdsInput = {

  blogPipeAds?: UpdateBlogPipeAdsInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type ActionAShopifyShopInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  blogPipeAds?: (BlogPipeAdsHasManyInput | null)[];

  syncs?: (ShopifySyncHasManyInput | null)[];

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  checkoutApiSupported?: (Scalars['Boolean'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  cookieConsentLevel?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  countyTaxes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  customerEmail?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;

  eligibleForPayments?: (Scalars['Boolean'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;

  finances?: (Scalars['Boolean'] | null) | null;

  forceSsl?: (Scalars['Boolean'] | null) | null;

  googleAppsDomain?: (Scalars['String'] | null) | null;

  googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;

  hasDiscounts?: (Scalars['Boolean'] | null) | null;

  hasGiftCards?: (Scalars['Boolean'] | null) | null;

  hasStorefront?: (Scalars['Boolean'] | null) | null;

  ianaTimezone?: (Scalars['String'] | null) | null;

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;

  moneyFormat?: (Scalars['String'] | null) | null;

  moneyInEmailsFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;

  multiLocationEnabled?: (Scalars['Boolean'] | null) | null;

  myshopifyDomain?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  passwordEnabled?: (Scalars['Boolean'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  planDisplayName?: (Scalars['String'] | null) | null;

  planName?: (Scalars['String'] | null) | null;

  preLaunchEnabled?: (Scalars['Boolean'] | null) | null;

  primaryLocale?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;

  setupRequired?: (Scalars['Boolean'] | null) | null;

  shopOwner?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxShipping?: (Scalars['Boolean'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  timezone?: (Scalars['String'] | null) | null;

  transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weightUnit?: (Scalars['String'] | null) | null;

  zipCode?: (Scalars['String'] | null) | null;

  primaryLocation?: ShopifyLocationBelongsToInput | null;
};



export type BulkActionAShopifyShopsInput = {

  shopifyShop?: ActionAShopifyShopInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type RunShopifySyncInput = {

  errorDetails?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkRunShopifySyncsInput = {

  shopifySync?: RunShopifySyncInput | null;

  startReason?: (Scalars['String'] | null) | null;
};



export type CompleteShopifySyncInput = {

  errorDetails?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCompleteShopifySyncsInput = {

  shopifySync?: CompleteShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type ErrorShopifySyncInput = {

  errorDetails?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkErrorShopifySyncsInput = {

  shopifySync?: ErrorShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateBlogPipeArticleInput = {

  shop?: ShopifyShopBelongsToInput | null;

  title?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;
};



export type BulkCreateBlogPipeArticlesInput = {

  blogPipeArticle?: CreateBlogPipeArticleInput | null;
};



export type UpdateBlogPipeArticleInput = {

  shop?: ShopifyShopBelongsToInput | null;

  title?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;
};



export type BulkUpdateBlogPipeArticlesInput = {

  blogPipeArticle?: UpdateBlogPipeArticleInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateBlogPipeTopicsInput = {

  title?: (Scalars['String'] | null) | null;

  keywords?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateBlogPipeTopicsInput = {

  blogPipeTopics?: CreateBlogPipeTopicsInput | null;
};



export type UpdateBlogPipeTopicsInput = {

  title?: (Scalars['String'] | null) | null;

  keywords?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateBlogPipeTopicsInput = {

  blogPipeTopics?: UpdateBlogPipeTopicsInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type ActionABlogPipeTopicsInput = {

  title?: (Scalars['String'] | null) | null;

  keywords?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkActionABlogPipeTopicsInput = {

  blogPipeTopics?: ActionABlogPipeTopicsInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type InternalBlogPipeAdsInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  adName?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  startDate?: (Scalars['String'] | null) | null;

  endDate?: (Scalars['String'] | null) | null;

  impressions?: (Scalars['String'] | null) | null;

  clicks?: (Scalars['String'] | null) | null;

  lastUpdate?: (Scalars['String'] | null) | null;
};



export type InternalBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type AppGraphQLTriggerMutationContext = {

  /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
  sessionID?: (Scalars['GadgetID'] | null) | null;
};



export type InternalShopifyArticleInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  author?: (Scalars['String'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  handle?: (Scalars['String'] | null) | null;

  image?: (Scalars['JSON'] | null) | null;

  published?: (Scalars['Boolean'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  summary?: (Scalars['String'] | null) | null;

  tags?: (Scalars['JSON'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  blog?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  status?: (Scalars['String'] | null) | null;
};



export type InternalShopifyBlogInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  commentable?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  feedburner?: (Scalars['JSON'] | null) | null;

  feedburnerLocation?: (Scalars['String'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  tags?: (Scalars['JSON'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyCollectInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  position?: (Scalars['Float'] | null) | null;

  sortValue?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customCollection?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyCollectAtomicsInput | null;
};



export type InternalShopifyCollectAtomicsInput = {

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];
};



export type NumericAtomicFieldUpdateInput = {

  /** A number to atomically increment the field value by. Can only be used on numeric fields. */
  increment?: (Scalars['Float'] | null) | null;

  /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
  decrement?: (Scalars['Float'] | null) | null;
};



export type InternalShopifyCollectionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  body?: (Scalars['String'] | null) | null;

  disjunctive?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  image?: (Scalars['JSON'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  rules?: (Scalars['JSON'] | null) | null;

  sortOrder?: (Scalars['String'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  collectionType?: ShopifyCollectionCollectionTypeEnum | null;
};



export type InternalShopifyCommentInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  author?: (Scalars['String'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  bodyHtml?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  email?: (Scalars['String'] | null) | null;

  ip?: (Scalars['String'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  status?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  userAgent?: (Scalars['String'] | null) | null;

  article?: InternalBelongsToInput | null;

  blog?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyDiscountInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  appDiscountType?: (Scalars['JSON'] | null) | null;

  appliesOnOneTimePurchase?: (Scalars['Boolean'] | null) | null;

  appliesOnSubscription?: (Scalars['Boolean'] | null) | null;

  appliesOncePerCustomer?: (Scalars['Boolean'] | null) | null;

  asyncUsageCount?: (Scalars['Float'] | null) | null;

  codeCount?: (Scalars['Int'] | null) | null;

  combinesWith?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  destinationSelection?: (Scalars['JSON'] | null) | null;

  discountClass?: ShopifyDiscountDiscountClassEnum | null;

  discountId?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  errorHistory?: (Scalars['JSON'] | null) | null;

  hasTimelineComment?: (Scalars['Boolean'] | null) | null;

  maximumShippingPrice?: (Scalars['JSON'] | null) | null;

  minimumRequirement?: (Scalars['JSON'] | null) | null;

  recurringCycleLimit?: (Scalars['Int'] | null) | null;

  shareableUrls?: (Scalars['JSON'] | null) | null;

  shortSummary?: (Scalars['String'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  status?: ShopifyDiscountStatusEnum | null;

  summary?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  totalSales?: (Scalars['JSON'] | null) | null;

  usageLimit?: (Scalars['Int'] | null) | null;

  usesPerOrderLimit?: (Scalars['Int'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyDiscountAtomicsInput | null;
};



export type InternalShopifyDiscountAtomicsInput = {

  /** Numeric atomic commands for operating on asyncUsageCount. */
  asyncUsageCount?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on codeCount. */
  codeCount?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on recurringCycleLimit. */
  recurringCycleLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on usageLimit. */
  usageLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on usesPerOrderLimit. */
  usesPerOrderLimit?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyDiscountCodeInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  code?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageCount?: (Scalars['Float'] | null) | null;

  priceRule?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyDiscountCodeAtomicsInput | null;
};



export type InternalShopifyDiscountCodeAtomicsInput = {

  /** Numeric atomic commands for operating on usageCount. */
  usageCount?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyEventInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  arguments?: (Scalars['JSON'] | null) | null;

  author?: (Scalars['String'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  description?: (Scalars['String'] | null) | null;

  message?: (Scalars['String'] | null) | null;

  path?: (Scalars['String'] | null) | null;

  subjectId?: (Scalars['Float'] | null) | null;

  subjectType?: ShopifyEventSubjectTypeEnum | null;

  verb?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyEventAtomicsInput | null;
};



export type InternalShopifyEventAtomicsInput = {

  /** Numeric atomic commands for operating on subjectId. */
  subjectId?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyFileInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  type?: ShopifyFileTypeEnum | null;

  alt?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  duration?: (Scalars['Int'] | null) | null;

  fileErrors?: (Scalars['JSON'] | null) | null;

  fileStatus?: ShopifyFileFileStatusEnum | null;

  image?: (Scalars['JSON'] | null) | null;

  originalFileSize?: (Scalars['Int'] | null) | null;

  originalSource?: (Scalars['JSON'] | null) | null;

  preview?: (Scalars['JSON'] | null) | null;

  sources?: (Scalars['JSON'] | null) | null;

  url?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyFileAtomicsInput | null;
};



export type InternalShopifyFileAtomicsInput = {

  /** Numeric atomic commands for operating on duration. */
  duration?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on originalFileSize. */
  originalFileSize?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyGdprRequestInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  payload?: (Scalars['JSON'] | null) | null;

  topic?: ShopifyGdprRequestTopicEnum | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyInventoryItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  cost?: (Scalars['String'] | null) | null;

  countryCodeOfOrigin?: (Scalars['String'] | null) | null;

  countryHarmonizedSystemCodes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  harmonizedSystemCode?: (Scalars['String'] | null) | null;

  provinceCodeOfOrigin?: (Scalars['String'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  tracked?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyInventoryLevelInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  available?: (Scalars['Float'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  inventoryItem?: InternalBelongsToInput | null;

  location?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyInventoryLevelAtomicsInput | null;
};



export type InternalShopifyInventoryLevelAtomicsInput = {

  /** Numeric atomic commands for operating on available. */
  available?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyLocationInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  active?: (Scalars['Boolean'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  legacy?: (Scalars['Boolean'] | null) | null;

  localizedCountryName?: (Scalars['String'] | null) | null;

  localizedProvinceName?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  zipCode?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyPageInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  author?: (Scalars['String'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  handle?: (Scalars['String'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyPriceRuleInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  allocationLimit?: (Scalars['Float'] | null) | null;

  allocationMethod?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerSegmentPrerequisiteIds?: (Scalars['JSON'] | null) | null;

  customerSelection?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  entitledCollectionIds?: (Scalars['JSON'] | null) | null;

  entitledCountryIds?: (Scalars['JSON'] | null) | null;

  entitledProductIds?: (Scalars['JSON'] | null) | null;

  entitledVariantIds?: (Scalars['JSON'] | null) | null;

  oncePerCustomer?: (Scalars['Boolean'] | null) | null;

  prerequisiteCollectionIds?: (Scalars['JSON'] | null) | null;

  prerequisiteCustomerIds?: (Scalars['JSON'] | null) | null;

  prerequisiteProductIds?: (Scalars['JSON'] | null) | null;

  prerequisiteQuantityRange?: (Scalars['JSON'] | null) | null;

  prerequisiteShippingPriceRange?: (Scalars['JSON'] | null) | null;

  prerequisiteSubtotalRange?: (Scalars['JSON'] | null) | null;

  prerequisiteToEntitlementPurchase?: (Scalars['JSON'] | null) | null;

  prerequisiteToEntitlementQuantityRatio?: (Scalars['JSON'] | null) | null;

  prerequisiteVariants?: (Scalars['JSON'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  targetSelection?: (Scalars['String'] | null) | null;

  targetType?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageLimit?: (Scalars['Float'] | null) | null;

  value?: (Scalars['Float'] | null) | null;

  valueType?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyPriceRuleAtomicsInput | null;
};



export type InternalShopifyPriceRuleAtomicsInput = {

  /** Numeric atomic commands for operating on allocationLimit. */
  allocationLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on usageLimit. */
  usageLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on value. */
  value?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyProductInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  productCategory?: (Scalars['JSON'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  handle?: (Scalars['String'] | null) | null;

  productType?: (Scalars['String'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  status?: ShopifyProductStatusEnum | null;

  tags?: (Scalars['JSON'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  vendor?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyProductImageInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  alt?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  height?: (Scalars['Float'] | null) | null;

  position?: (Scalars['Float'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  width?: (Scalars['Float'] | null) | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyProductImageAtomicsInput | null;
};



export type InternalShopifyProductImageAtomicsInput = {

  /** Numeric atomic commands for operating on height. */
  height?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on width. */
  width?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyProductOptionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  name?: (Scalars['String'] | null) | null;

  position?: (Scalars['Float'] | null) | null;

  values?: (Scalars['JSON'] | null) | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyProductOptionAtomicsInput | null;
};



export type InternalShopifyProductOptionAtomicsInput = {

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyProductVariantInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  barcode?: (Scalars['String'] | null) | null;

  compareAtPrice?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  inventoryManagement?: (Scalars['String'] | null) | null;

  inventoryPolicy?: (Scalars['String'] | null) | null;

  inventoryQuantity?: (Scalars['Float'] | null) | null;

  inventoryQuantityAdjustment?: (Scalars['Float'] | null) | null;

  oldInventoryQuantity?: (Scalars['Float'] | null) | null;

  option1?: (Scalars['String'] | null) | null;

  option2?: (Scalars['String'] | null) | null;

  option3?: (Scalars['String'] | null) | null;

  position?: (Scalars['Float'] | null) | null;

  presentmentPrices?: (Scalars['JSON'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxCode?: (Scalars['String'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weight?: (Scalars['Float'] | null) | null;

  weightUnit?: (Scalars['String'] | null) | null;

  inventoryItem?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  productImage?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyProductVariantAtomicsInput | null;
};



export type InternalShopifyProductVariantAtomicsInput = {

  /** Numeric atomic commands for operating on grams. */
  grams?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on inventoryQuantity. */
  inventoryQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on inventoryQuantityAdjustment. */
  inventoryQuantityAdjustment?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on oldInventoryQuantity. */
  oldInventoryQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on weight. */
  weight?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyRedirectInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  path?: (Scalars['String'] | null) | null;

  target?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyShopInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  accessToken?: (Scalars['String'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  checkoutApiSupported?: (Scalars['Boolean'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  cookieConsentLevel?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  countyTaxes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  customerEmail?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;

  eligibleForPayments?: (Scalars['Boolean'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;

  finances?: (Scalars['Boolean'] | null) | null;

  forceSsl?: (Scalars['Boolean'] | null) | null;

  googleAppsDomain?: (Scalars['String'] | null) | null;

  googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;

  grantedScopes?: (Scalars['JSON'] | null) | null;

  hasDiscounts?: (Scalars['Boolean'] | null) | null;

  hasGiftCards?: (Scalars['Boolean'] | null) | null;

  hasStorefront?: (Scalars['Boolean'] | null) | null;

  ianaTimezone?: (Scalars['String'] | null) | null;

  installedViaApiKey?: (Scalars['String'] | null) | null;

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;

  moneyFormat?: (Scalars['String'] | null) | null;

  moneyInEmailsFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;

  multiLocationEnabled?: (Scalars['Boolean'] | null) | null;

  myshopifyDomain?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  passwordEnabled?: (Scalars['Boolean'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  planDisplayName?: (Scalars['String'] | null) | null;

  planName?: (Scalars['String'] | null) | null;

  preLaunchEnabled?: (Scalars['Boolean'] | null) | null;

  primaryLocale?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  registeredWebhooks?: (Scalars['JSON'] | null) | null;

  requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;

  setupRequired?: (Scalars['Boolean'] | null) | null;

  shopOwner?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxShipping?: (Scalars['Boolean'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  timezone?: (Scalars['String'] | null) | null;

  transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weightUnit?: (Scalars['String'] | null) | null;

  zipCode?: (Scalars['String'] | null) | null;

  primaryLocation?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyShopAtomicsInput | null;
};



export type InternalShopifyShopAtomicsInput = {

  /** Numeric atomic commands for operating on latitude. */
  latitude?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on longitude. */
  longitude?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifySyncInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorDetails?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalBlogPipeArticleInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  title?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;
};



export type InternalSessionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  shopifySID?: (Scalars['String'] | null) | null;

  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: ((Scalars['String'] | null))[];
};



export type InternalBlogPipeTopicsInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  title?: (Scalars['String'] | null) | null;

  keywords?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};


/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
  CurrencyAmount: string;
  /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
  ISO8601DateString: string;
  /** A file object produced by a browser for uploading to cloud storage */
  Upload: File;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: JSONObject;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: JSONValue;
  /** The ID of a record in Gadget */
  GadgetID: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
  RecordState: (string | { [key: string]: Scalars['RecordState'] });
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
  HydrationPlan: unknown;
};


/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {
  __typename: 'SimpleError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this error. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
};



export type AvailableSimpleErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;
};



export type ExecutionError = {

  __typename: 'SimpleError'|'InvalidRecordError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The Gadget platform error code for this error. */
  code: Scalars['String'];

  /** The stack for any exception that caused the error. Only available for super users. */
  stack: (Scalars['String'] | null);
};



export type AvailableExecutionErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error. Only available for super users. */
  stack?: boolean | null | undefined;
};


/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {
  __typename: 'InvalidRecordError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this InvalidRecordError. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField: (Scalars['JSONObject'] | null);
  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors: InvalidFieldError[];
  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record: (Scalars['JSONObject'] | null);
  /** The model of the record which failed validation */
  model: (GadgetModel | null);
};



export type AvailableInvalidRecordErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this InvalidRecordError. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;

  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField?: boolean | null | undefined;

  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors?: AvailableInvalidFieldErrorSelection;

  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record?: boolean | null | undefined;

  /** The model of the record which failed validation */
  model?: AvailableGadgetModelSelection;
};


/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export type InvalidFieldError = {

  __typename: 'InvalidFieldError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier: Scalars['String'];
};



export type AvailableInvalidFieldErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier?: boolean | null | undefined;
};



export type GadgetModel = {

  __typename: 'GadgetModel';

  key: Scalars['String'];

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  filterable: Scalars['Boolean'];

  sortable: Scalars['Boolean'];

  searchable: Scalars['Boolean'];

  fields: GadgetModelField[];

  actions: GadgetAction[];

  action: (GadgetAction | null);

  pluralName: Scalars['String'];

  pluralApiIdentifier: Scalars['String'];

  currentSingletonApiIdentifier: (Scalars['String'] | null);

  initialCreatedState: (Scalars['String'] | null);
};



export type AvailableGadgetModelSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  searchable?: boolean | null | undefined;

  fields?: AvailableGadgetModelFieldSelection;

  actions?: AvailableGadgetActionSelection;

  action?: AvailableGadgetActionSelection;

  pluralName?: boolean | null | undefined;

  pluralApiIdentifier?: boolean | null | undefined;

  currentSingletonApiIdentifier?: boolean | null | undefined;

  initialCreatedState?: boolean | null | undefined;
};


/** One field of a Gadget model */
export interface GadgetModelField extends GadgetField {
  __typename: 'GadgetModelField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: GadgetFieldType;
  hasDefault: Scalars['Boolean'];
  required: Scalars['Boolean'];
  requiredArgumentForInput: Scalars['Boolean'];
  configuration: GadgetFieldConfigInterface;
  isUniqueField: Scalars['Boolean'];
  sortable: Scalars['Boolean'];
  filterable: Scalars['Boolean'];
  examples: GadgetModelFieldExamples;
};



export type AvailableGadgetModelFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;

  isUniqueField?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  examples?: AvailableGadgetModelFieldExamplesSelection;
};



export type GadgetField = {

  __typename: 'GadgetModelField'|'GadgetObjectField';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  fieldType: GadgetFieldType;

  hasDefault: Scalars['Boolean'];

  required: Scalars['Boolean'];

  requiredArgumentForInput: Scalars['Boolean'];

  configuration: GadgetFieldConfigInterface;
};



export type AvailableGadgetFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};


/** The common bits that all field configuration types share */
export type GadgetFieldConfigInterface = {

  __typename: 'GadgetGenericFieldConfig'|'GadgetObjectFieldConfig'|'GadgetBelongsToConfig'|'GadgetHasManyConfig'|'GadgetEnumConfig'|'GadgetDateTimeConfig';

  fieldType: GadgetFieldType;
};



export type AvailableGadgetFieldConfigInterfaceSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;
};



export type GadgetModelFieldExamples = {

  __typename: 'GadgetModelFieldExamples';

  linkExistingChild: (GadgetFieldUsageExample | null);

  linkNewChild: (GadgetFieldUsageExample | null);

  linkToExistingParent: (GadgetFieldUsageExample | null);

  createNestedInParent: (GadgetFieldUsageExample | null);
};



export type AvailableGadgetModelFieldExamplesSelection = {

  __typename?: boolean | null | undefined;

  linkExistingChild?: AvailableGadgetFieldUsageExampleSelection;

  linkNewChild?: AvailableGadgetFieldUsageExampleSelection;

  linkToExistingParent?: AvailableGadgetFieldUsageExampleSelection;

  createNestedInParent?: AvailableGadgetFieldUsageExampleSelection;
};



export type GadgetFieldUsageExample = {

  __typename: 'GadgetFieldUsageExample';

  exampleGraphQLMutation: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetFieldUsageExampleSelection = {

  __typename?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};



export type GadgetAction = {

  __typename: 'GadgetAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  requiresInput: Scalars['Boolean'];

  acceptsInput: Scalars['Boolean'];

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect: Scalars['Boolean'];

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect: Scalars['Boolean'];

  isDeleteAction: Scalars['Boolean'];

  isCreateOrUpdateAction: Scalars['Boolean'];

  operatesWithRecordIdentity: Scalars['Boolean'];

  possibleTransitions: Scalars['JSONObject'];

  availableInBulk: Scalars['Boolean'];

  bulkApiIdentifier: (Scalars['String'] | null);

  hasAmbiguousIdentifier: Scalars['Boolean'];

  inputFields: GadgetObjectField[];

  bulkInvokedByIDOnly: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  examples: (GadgetActionGraphQLType | null);
};



export type AvailableGadgetActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect?: boolean | null | undefined;

  isDeleteAction?: boolean | null | undefined;

  isCreateOrUpdateAction?: boolean | null | undefined;

  operatesWithRecordIdentity?: boolean | null | undefined;

  possibleTransitions?: boolean | null | undefined;

  availableInBulk?: boolean | null | undefined;

  bulkApiIdentifier?: boolean | null | undefined;

  hasAmbiguousIdentifier?: boolean | null | undefined;

  inputFields?: AvailableGadgetObjectFieldSelection;

  bulkInvokedByIDOnly?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetActionGraphQLTypeSelection;
};


/** One field of an action input or other transitory object in Gadget */
export interface GadgetObjectField extends GadgetField {
  __typename: 'GadgetObjectField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: GadgetFieldType;
  hasDefault: Scalars['Boolean'];
  required: Scalars['Boolean'];
  requiredArgumentForInput: Scalars['Boolean'];
  configuration: GadgetFieldConfigInterface;
};



export type AvailableGadgetObjectFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};



export type GadgetTrigger = {

  __typename: 'GadgetTrigger';

  specID: Scalars['String'];
};



export type AvailableGadgetTriggerSelection = {

  __typename?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export type GadgetActionGraphQLType = {

  __typename: 'GadgetActionGraphQLType';

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars['String'];

  exampleGraphQLMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];

  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation: (Scalars['String'] | null);

  exampleBulkGraphQLMutation: (Scalars['String'] | null);

  exampleBulkGraphQLVariables: (Scalars['JSON'] | null);

  exampleBulkImperativeInvocation: (Scalars['String'] | null);

  exampleBulkReactHook: (Scalars['String'] | null);

  bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
};



export type AvailableGadgetActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;

  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation?: boolean | null | undefined;

  exampleBulkGraphQLMutation?: boolean | null | undefined;

  exampleBulkGraphQLVariables?: boolean | null | undefined;

  exampleBulkImperativeInvocation?: boolean | null | undefined;

  exampleBulkReactHook?: boolean | null | undefined;

  bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};



export interface GadgetGenericFieldConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetGenericFieldConfig';
  fieldType: GadgetFieldType;
};



export type AvailableGadgetGenericFieldConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;
};



export interface GadgetObjectFieldConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetObjectFieldConfig';
  fieldType: GadgetFieldType;
  name: (Scalars['String'] | null);
  fields: GadgetModelField[];
};



export type AvailableGadgetObjectFieldConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  name?: boolean | null | undefined;

  fields?: AvailableGadgetModelFieldSelection;
};



export interface GadgetBelongsToConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetBelongsToConfig';
  fieldType: GadgetFieldType;
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetBelongsToConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetHasManyConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetHasManyConfig';
  fieldType: GadgetFieldType;
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetHasManyConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetEnumConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetEnumConfig';
  fieldType: GadgetFieldType;
  allowMultiple: Scalars['Boolean'];
  allowOther: Scalars['Boolean'];
  options: GadgetEnumOption[];
};



export type AvailableGadgetEnumConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  allowMultiple?: boolean | null | undefined;

  allowOther?: boolean | null | undefined;

  options?: AvailableGadgetEnumOptionSelection;
};



export type GadgetEnumOption = {

  __typename: 'GadgetEnumOption';

  name: Scalars['String'];

  color: Scalars['String'];
};



export type AvailableGadgetEnumOptionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  color?: boolean | null | undefined;
};



export interface GadgetDateTimeConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetDateTimeConfig';
  fieldType: GadgetFieldType;
  includeTime: Scalars['Boolean'];
};



export type AvailableGadgetDateTimeConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  includeTime?: boolean | null | undefined;
};



export type Query = {

  __typename: 'Query';

  blogPipeAds: (BlogPipeAds | null);

  blogPipeAdss: BlogPipeAdsConnection;

  shopifyArticle: (ShopifyArticle | null);

  shopifyArticles: ShopifyArticleConnection;

  shopifyBlog: (ShopifyBlog | null);

  shopifyBlogs: ShopifyBlogConnection;

  shopifyCollect: (ShopifyCollect | null);

  shopifyCollects: ShopifyCollectConnection;

  shopifyCollection: (ShopifyCollection | null);

  shopifyCollections: ShopifyCollectionConnection;

  shopifyComment: (ShopifyComment | null);

  shopifyComments: ShopifyCommentConnection;

  shopifyDiscount: (ShopifyDiscount | null);

  shopifyDiscounts: ShopifyDiscountConnection;

  shopifyDiscountCode: (ShopifyDiscountCode | null);

  shopifyDiscountCodes: ShopifyDiscountCodeConnection;

  shopifyEvent: (ShopifyEvent | null);

  shopifyEvents: ShopifyEventConnection;

  shopifyFile: (ShopifyFile | null);

  shopifyFiles: ShopifyFileConnection;

  shopifyGdprRequest: (ShopifyGdprRequest | null);

  shopifyGdprRequests: ShopifyGdprRequestConnection;

  shopifyInventoryItem: (ShopifyInventoryItem | null);

  shopifyInventoryItems: ShopifyInventoryItemConnection;

  shopifyInventoryLevel: (ShopifyInventoryLevel | null);

  shopifyInventoryLevels: ShopifyInventoryLevelConnection;

  shopifyLocation: (ShopifyLocation | null);

  shopifyLocations: ShopifyLocationConnection;

  shopifyPage: (ShopifyPage | null);

  shopifyPages: ShopifyPageConnection;

  shopifyPriceRule: (ShopifyPriceRule | null);

  shopifyPriceRules: ShopifyPriceRuleConnection;

  shopifyProduct: (ShopifyProduct | null);

  shopifyProducts: ShopifyProductConnection;

  shopifyProductImage: (ShopifyProductImage | null);

  shopifyProductImages: ShopifyProductImageConnection;

  shopifyProductOption: (ShopifyProductOption | null);

  shopifyProductOptions: ShopifyProductOptionConnection;

  shopifyProductVariant: (ShopifyProductVariant | null);

  shopifyProductVariants: ShopifyProductVariantConnection;

  shopifyRedirect: (ShopifyRedirect | null);

  shopifyRedirects: ShopifyRedirectConnection;

  shopifyShop: (ShopifyShop | null);

  shopifyShops: ShopifyShopConnection;

  shopifySync: (ShopifySync | null);

  shopifySyncs: ShopifySyncConnection;

  blogPipeArticle: (BlogPipeArticle | null);

  blogPipeArticles: BlogPipeArticleConnection;

  session: (Session | null);

  sessions: SessionConnection;

  blogPipeTopics: (BlogPipeTopics | null);

  blogPipeTopicss: BlogPipeTopicsConnection;

  internal: (InternalQueries | null);

  currentSession: (Session | null);

  shopifyConnection: Shopify;
};



export type AvailableQuerySelection = {

  __typename?: boolean | null | undefined;

  blogPipeAds?: AvailableBlogPipeAdsSelection;

  blogPipeAdss?: AvailableBlogPipeAdsConnectionSelection;

  shopifyArticle?: AvailableShopifyArticleSelection;

  shopifyArticles?: AvailableShopifyArticleConnectionSelection;

  shopifyBlog?: AvailableShopifyBlogSelection;

  shopifyBlogs?: AvailableShopifyBlogConnectionSelection;

  shopifyCollect?: AvailableShopifyCollectSelection;

  shopifyCollects?: AvailableShopifyCollectConnectionSelection;

  shopifyCollection?: AvailableShopifyCollectionSelection;

  shopifyCollections?: AvailableShopifyCollectionConnectionSelection;

  shopifyComment?: AvailableShopifyCommentSelection;

  shopifyComments?: AvailableShopifyCommentConnectionSelection;

  shopifyDiscount?: AvailableShopifyDiscountSelection;

  shopifyDiscounts?: AvailableShopifyDiscountConnectionSelection;

  shopifyDiscountCode?: AvailableShopifyDiscountCodeSelection;

  shopifyDiscountCodes?: AvailableShopifyDiscountCodeConnectionSelection;

  shopifyEvent?: AvailableShopifyEventSelection;

  shopifyEvents?: AvailableShopifyEventConnectionSelection;

  shopifyFile?: AvailableShopifyFileSelection;

  shopifyFiles?: AvailableShopifyFileConnectionSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;

  shopifyGdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  shopifyInventoryItem?: AvailableShopifyInventoryItemSelection;

  shopifyInventoryItems?: AvailableShopifyInventoryItemConnectionSelection;

  shopifyInventoryLevel?: AvailableShopifyInventoryLevelSelection;

  shopifyInventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  shopifyLocation?: AvailableShopifyLocationSelection;

  shopifyLocations?: AvailableShopifyLocationConnectionSelection;

  shopifyPage?: AvailableShopifyPageSelection;

  shopifyPages?: AvailableShopifyPageConnectionSelection;

  shopifyPriceRule?: AvailableShopifyPriceRuleSelection;

  shopifyPriceRules?: AvailableShopifyPriceRuleConnectionSelection;

  shopifyProduct?: AvailableShopifyProductSelection;

  shopifyProducts?: AvailableShopifyProductConnectionSelection;

  shopifyProductImage?: AvailableShopifyProductImageSelection;

  shopifyProductImages?: AvailableShopifyProductImageConnectionSelection;

  shopifyProductOption?: AvailableShopifyProductOptionSelection;

  shopifyProductOptions?: AvailableShopifyProductOptionConnectionSelection;

  shopifyProductVariant?: AvailableShopifyProductVariantSelection;

  shopifyProductVariants?: AvailableShopifyProductVariantConnectionSelection;

  shopifyRedirect?: AvailableShopifyRedirectSelection;

  shopifyRedirects?: AvailableShopifyRedirectConnectionSelection;

  shopifyShop?: AvailableShopifyShopSelection;

  shopifyShops?: AvailableShopifyShopConnectionSelection;

  shopifySync?: AvailableShopifySyncSelection;

  shopifySyncs?: AvailableShopifySyncConnectionSelection;

  blogPipeArticle?: AvailableBlogPipeArticleSelection;

  blogPipeArticles?: AvailableBlogPipeArticleConnectionSelection;

  session?: AvailableSessionSelection;

  sessions?: AvailableSessionConnectionSelection;

  blogPipeTopics?: AvailableBlogPipeTopicsSelection;

  blogPipeTopicss?: AvailableBlogPipeTopicsConnectionSelection;

  internal?: AvailableInternalQueriesSelection;

  currentSession?: AvailableSessionSelection;

  shopifyConnection?: AvailableShopifySelection;
};



export type BlogPipeAds = {

  __typename: 'BlogPipeAds';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  adName: (Scalars['String'] | null);

  status: (Scalars['String'] | null);

  startDate: (Scalars['String'] | null);

  endDate: (Scalars['String'] | null);

  impressions: (Scalars['String'] | null);

  clicks: (Scalars['String'] | null);

  lastUpdate: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableBlogPipeAdsSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  adName?: boolean | null | undefined;

  status?: boolean | null | undefined;

  startDate?: boolean | null | undefined;

  endDate?: boolean | null | undefined;

  impressions?: boolean | null | undefined;

  clicks?: boolean | null | undefined;

  lastUpdate?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyShop = {

  __typename: 'ShopifyShop';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  blogPipeAds: BlogPipeAdsConnection;

  collects: ShopifyCollectConnection;

  locations: ShopifyLocationConnection;

  productVariants: ShopifyProductVariantConnection;

  inventoryItems: ShopifyInventoryItemConnection;

  pages: ShopifyPageConnection;

  priceRules: ShopifyPriceRuleConnection;

  events: ShopifyEventConnection;

  collections: ShopifyCollectionConnection;

  products: ShopifyProductConnection;

  inventoryLevels: ShopifyInventoryLevelConnection;

  syncs: ShopifySyncConnection;

  blogs: ShopifyBlogConnection;

  redirects: ShopifyRedirectConnection;

  /** @deprecated This field is no longer supported in the Public API. Please remove it from your queries, and use the Internal API for access. */
  accessToken: (Scalars['String'] | null);

  address1: (Scalars['String'] | null);

  address2: (Scalars['String'] | null);

  checkoutApiSupported: (Scalars['Boolean'] | null);

  city: (Scalars['String'] | null);

  cookieConsentLevel: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  countryCode: (Scalars['String'] | null);

  countryName: (Scalars['String'] | null);

  countyTaxes: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currency: (Scalars['String'] | null);

  customerEmail: (Scalars['String'] | null);

  domain: (Scalars['String'] | null);

  productOptions: ShopifyProductOptionConnection;

  eligibleForCardReaderGiveaway: (Scalars['Boolean'] | null);

  eligibleForPayments: (Scalars['Boolean'] | null);

  email: (Scalars['String'] | null);

  enabledPresentmentCurrencies: (Scalars['JSON'] | null);

  finances: (Scalars['Boolean'] | null);

  forceSsl: (Scalars['Boolean'] | null);

  discounts: ShopifyDiscountConnection;

  googleAppsDomain: (Scalars['String'] | null);

  googleAppsLoginEnabled: (Scalars['Boolean'] | null);

  grantedScopes: (Scalars['JSON'] | null);

  hasDiscounts: (Scalars['Boolean'] | null);

  hasGiftCards: (Scalars['Boolean'] | null);

  hasStorefront: (Scalars['Boolean'] | null);

  ianaTimezone: (Scalars['String'] | null);

  comments: ShopifyCommentConnection;

  installedViaApiKey: (Scalars['String'] | null);

  latitude: (Scalars['Float'] | null);

  longitude: (Scalars['Float'] | null);

  marketingSmsContentEnabledAtCheckout: (Scalars['Boolean'] | null);

  moneyFormat: (Scalars['String'] | null);

  moneyInEmailsFormat: (Scalars['String'] | null);

  moneyWithCurrencyFormat: (Scalars['String'] | null);

  moneyWithCurrencyInEmailsFormat: (Scalars['String'] | null);

  multiLocationEnabled: (Scalars['Boolean'] | null);

  myshopifyDomain: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  files: ShopifyFileConnection;

  passwordEnabled: (Scalars['Boolean'] | null);

  phone: (Scalars['String'] | null);

  planDisplayName: (Scalars['String'] | null);

  planName: (Scalars['String'] | null);

  preLaunchEnabled: (Scalars['Boolean'] | null);

  primaryLocale: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  provinceCode: (Scalars['String'] | null);

  gdprRequests: ShopifyGdprRequestConnection;

  articles: ShopifyArticleConnection;

  registeredWebhooks: (Scalars['JSON'] | null);

  requiresExtraPaymentsAgreement: (Scalars['Boolean'] | null);

  setupRequired: (Scalars['Boolean'] | null);

  shopOwner: (Scalars['String'] | null);

  discountCodes: ShopifyDiscountCodeConnection;

  source: (Scalars['String'] | null);

  taxShipping: (Scalars['Boolean'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  timezone: (Scalars['String'] | null);

  productImages: ShopifyProductImageConnection;

  transactionalSmsDisabled: (Scalars['Boolean'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  weightUnit: (Scalars['String'] | null);

  zipCode: (Scalars['String'] | null);

  primaryLocation: (ShopifyLocation | null);

  primaryLocationId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyShopSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  blogPipeAds?: AvailableBlogPipeAdsConnectionSelection;

  collects?: AvailableShopifyCollectConnectionSelection;

  locations?: AvailableShopifyLocationConnectionSelection;

  productVariants?: AvailableShopifyProductVariantConnectionSelection;

  inventoryItems?: AvailableShopifyInventoryItemConnectionSelection;

  pages?: AvailableShopifyPageConnectionSelection;

  priceRules?: AvailableShopifyPriceRuleConnectionSelection;

  events?: AvailableShopifyEventConnectionSelection;

  collections?: AvailableShopifyCollectionConnectionSelection;

  products?: AvailableShopifyProductConnectionSelection;

  inventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  syncs?: AvailableShopifySyncConnectionSelection;

  blogs?: AvailableShopifyBlogConnectionSelection;

  redirects?: AvailableShopifyRedirectConnectionSelection;

  /** @deprecated This field is no longer supported in the Public API. Please remove it from your queries, and use the Internal API for access. */
  accessToken?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  address2?: boolean | null | undefined;

  checkoutApiSupported?: boolean | null | undefined;

  city?: boolean | null | undefined;

  cookieConsentLevel?: boolean | null | undefined;

  country?: boolean | null | undefined;

  countryCode?: boolean | null | undefined;

  countryName?: boolean | null | undefined;

  countyTaxes?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  customerEmail?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  productOptions?: AvailableShopifyProductOptionConnectionSelection;

  eligibleForCardReaderGiveaway?: boolean | null | undefined;

  eligibleForPayments?: boolean | null | undefined;

  email?: boolean | null | undefined;

  enabledPresentmentCurrencies?: boolean | null | undefined;

  finances?: boolean | null | undefined;

  forceSsl?: boolean | null | undefined;

  discounts?: AvailableShopifyDiscountConnectionSelection;

  googleAppsDomain?: boolean | null | undefined;

  googleAppsLoginEnabled?: boolean | null | undefined;

  grantedScopes?: boolean | null | undefined;

  hasDiscounts?: boolean | null | undefined;

  hasGiftCards?: boolean | null | undefined;

  hasStorefront?: boolean | null | undefined;

  ianaTimezone?: boolean | null | undefined;

  comments?: AvailableShopifyCommentConnectionSelection;

  installedViaApiKey?: boolean | null | undefined;

  latitude?: boolean | null | undefined;

  longitude?: boolean | null | undefined;

  marketingSmsContentEnabledAtCheckout?: boolean | null | undefined;

  moneyFormat?: boolean | null | undefined;

  moneyInEmailsFormat?: boolean | null | undefined;

  moneyWithCurrencyFormat?: boolean | null | undefined;

  moneyWithCurrencyInEmailsFormat?: boolean | null | undefined;

  multiLocationEnabled?: boolean | null | undefined;

  myshopifyDomain?: boolean | null | undefined;

  name?: boolean | null | undefined;

  files?: AvailableShopifyFileConnectionSelection;

  passwordEnabled?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  planDisplayName?: boolean | null | undefined;

  planName?: boolean | null | undefined;

  preLaunchEnabled?: boolean | null | undefined;

  primaryLocale?: boolean | null | undefined;

  province?: boolean | null | undefined;

  provinceCode?: boolean | null | undefined;

  gdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  articles?: AvailableShopifyArticleConnectionSelection;

  registeredWebhooks?: boolean | null | undefined;

  requiresExtraPaymentsAgreement?: boolean | null | undefined;

  setupRequired?: boolean | null | undefined;

  shopOwner?: boolean | null | undefined;

  discountCodes?: AvailableShopifyDiscountCodeConnectionSelection;

  source?: boolean | null | undefined;

  taxShipping?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  timezone?: boolean | null | undefined;

  productImages?: AvailableShopifyProductImageConnectionSelection;

  transactionalSmsDisabled?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  weightUnit?: boolean | null | undefined;

  zipCode?: boolean | null | undefined;

  primaryLocation?: AvailableShopifyLocationSelection;

  primaryLocationId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of BlogPipeAds items. */
export type BlogPipeAdsConnection = {

  __typename: 'BlogPipeAdsConnection';

  /** A list of edges. */
  edges: BlogPipeAdsEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableBlogPipeAdsConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableBlogPipeAdsEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a BlogPipeAds connection. */
export type BlogPipeAdsEdge = {

  __typename: 'BlogPipeAdsEdge';

  /** The item at the end of the edge */
  node: BlogPipeAds;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableBlogPipeAdsEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableBlogPipeAdsSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** Information about pagination in a connection. */
export type PageInfo = {

  __typename: 'PageInfo';

  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];

  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];

  /** When paginating backwards, the cursor to continue. */
  startCursor: (Scalars['String'] | null);

  /** When paginating forwards, the cursor to continue. */
  endCursor: (Scalars['String'] | null);
};



export type AvailablePageInfoSelection = {

  __typename?: boolean | null | undefined;

  /** When paginating forwards, are there more items? */
  hasNextPage?: boolean | null | undefined;

  /** When paginating backwards, are there more items? */
  hasPreviousPage?: boolean | null | undefined;

  /** When paginating backwards, the cursor to continue. */
  startCursor?: boolean | null | undefined;

  /** When paginating forwards, the cursor to continue. */
  endCursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCollect items. */
export type ShopifyCollectConnection = {

  __typename: 'ShopifyCollectConnection';

  /** A list of edges. */
  edges: ShopifyCollectEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCollectConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCollectEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCollect connection. */
export type ShopifyCollectEdge = {

  __typename: 'ShopifyCollectEdge';

  /** The item at the end of the edge */
  node: ShopifyCollect;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCollectEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCollectSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCollect = {

  __typename: 'ShopifyCollect';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  position: (Scalars['Float'] | null);

  sortValue: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  customCollection: (ShopifyCollection | null);

  customCollectionId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCollectSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  position?: boolean | null | undefined;

  sortValue?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  customCollection?: AvailableShopifyCollectionSelection;

  customCollectionId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyCollection = {

  __typename: 'ShopifyCollection';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  body: (Scalars['String'] | null);

  disjunctive: (Scalars['Boolean'] | null);

  handle: (Scalars['String'] | null);

  image: (Scalars['JSON'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  publishedScope: (Scalars['String'] | null);

  rules: (Scalars['JSON'] | null);

  sortOrder: (Scalars['String'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  products: ShopifyProductConnection;

  shopifyCollects: ShopifyCollectConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  collectionType: ShopifyCollectionCollectionTypeEnum;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCollectionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  body?: boolean | null | undefined;

  disjunctive?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  image?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  publishedScope?: boolean | null | undefined;

  rules?: boolean | null | undefined;

  sortOrder?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  products?: AvailableShopifyProductConnectionSelection;

  shopifyCollects?: AvailableShopifyCollectConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  collectionType?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProduct items. */
export type ShopifyProductConnection = {

  __typename: 'ShopifyProductConnection';

  /** A list of edges. */
  edges: ShopifyProductEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProduct connection. */
export type ShopifyProductEdge = {

  __typename: 'ShopifyProductEdge';

  /** The item at the end of the edge */
  node: ShopifyProduct;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyProduct = {

  __typename: 'ShopifyProduct';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  productCategory: (Scalars['JSON'] | null);

  body: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  handle: (Scalars['String'] | null);

  images: ShopifyProductImageConnection;

  options: ShopifyProductOptionConnection;

  productType: (Scalars['String'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  publishedScope: (Scalars['String'] | null);

  status: ShopifyProductStatusEnum;

  tags: (Scalars['JSON'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  variants: ShopifyProductVariantConnection;

  vendor: (Scalars['String'] | null);

  customCollections: ShopifyCollectionConnection;

  shopifyCollects: ShopifyCollectConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  productCategory?: boolean | null | undefined;

  body?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  images?: AvailableShopifyProductImageConnectionSelection;

  options?: AvailableShopifyProductOptionConnectionSelection;

  productType?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  publishedScope?: boolean | null | undefined;

  status?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  variants?: AvailableShopifyProductVariantConnectionSelection;

  vendor?: boolean | null | undefined;

  customCollections?: AvailableShopifyCollectionConnectionSelection;

  shopifyCollects?: AvailableShopifyCollectConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProductImage items. */
export type ShopifyProductImageConnection = {

  __typename: 'ShopifyProductImageConnection';

  /** A list of edges. */
  edges: ShopifyProductImageEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductImageConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductImageEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProductImage connection. */
export type ShopifyProductImageEdge = {

  __typename: 'ShopifyProductImageEdge';

  /** The item at the end of the edge */
  node: ShopifyProductImage;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductImageEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductImageSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyProductImage = {

  __typename: 'ShopifyProductImage';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  variants: ShopifyProductVariantConnection;

  alt: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  height: (Scalars['Float'] | null);

  position: (Scalars['Float'] | null);

  source: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  width: (Scalars['Float'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductImageSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  variants?: AvailableShopifyProductVariantConnectionSelection;

  alt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  height?: boolean | null | undefined;

  position?: boolean | null | undefined;

  source?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  width?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProductVariant items. */
export type ShopifyProductVariantConnection = {

  __typename: 'ShopifyProductVariantConnection';

  /** A list of edges. */
  edges: ShopifyProductVariantEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductVariantConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductVariantEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProductVariant connection. */
export type ShopifyProductVariantEdge = {

  __typename: 'ShopifyProductVariantEdge';

  /** The item at the end of the edge */
  node: ShopifyProductVariant;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductVariantEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductVariantSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyProductVariant = {

  __typename: 'ShopifyProductVariant';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  barcode: (Scalars['String'] | null);

  compareAtPrice: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  fulfillmentService: (Scalars['String'] | null);

  grams: (Scalars['Float'] | null);

  inventoryManagement: (Scalars['String'] | null);

  inventoryPolicy: (Scalars['String'] | null);

  inventoryQuantity: (Scalars['Float'] | null);

  inventoryQuantityAdjustment: (Scalars['Float'] | null);

  oldInventoryQuantity: (Scalars['Float'] | null);

  option1: (Scalars['String'] | null);

  option2: (Scalars['String'] | null);

  option3: (Scalars['String'] | null);

  position: (Scalars['Float'] | null);

  presentmentPrices: (Scalars['JSON'] | null);

  price: (Scalars['String'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  sku: (Scalars['String'] | null);

  taxCode: (Scalars['String'] | null);

  taxable: (Scalars['Boolean'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  weight: (Scalars['Float'] | null);

  weightUnit: (Scalars['String'] | null);

  inventoryItem: (ShopifyInventoryItem | null);

  inventoryItemId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  productImage: (ShopifyProductImage | null);

  productImageId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductVariantSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  barcode?: boolean | null | undefined;

  compareAtPrice?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  fulfillmentService?: boolean | null | undefined;

  grams?: boolean | null | undefined;

  inventoryManagement?: boolean | null | undefined;

  inventoryPolicy?: boolean | null | undefined;

  inventoryQuantity?: boolean | null | undefined;

  inventoryQuantityAdjustment?: boolean | null | undefined;

  oldInventoryQuantity?: boolean | null | undefined;

  option1?: boolean | null | undefined;

  option2?: boolean | null | undefined;

  option3?: boolean | null | undefined;

  position?: boolean | null | undefined;

  presentmentPrices?: boolean | null | undefined;

  price?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  taxCode?: boolean | null | undefined;

  taxable?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  weight?: boolean | null | undefined;

  weightUnit?: boolean | null | undefined;

  inventoryItem?: AvailableShopifyInventoryItemSelection;

  inventoryItemId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  productImage?: AvailableShopifyProductImageSelection;

  productImageId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyInventoryItem = {

  __typename: 'ShopifyInventoryItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  productVariant: (ShopifyProductVariant | null);

  cost: (Scalars['String'] | null);

  countryCodeOfOrigin: (Scalars['String'] | null);

  countryHarmonizedSystemCodes: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  harmonizedSystemCode: (Scalars['String'] | null);

  provinceCodeOfOrigin: (Scalars['String'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  sku: (Scalars['String'] | null);

  tracked: (Scalars['Boolean'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  locations: ShopifyLocationConnection;

  shopifyInventoryLevels: ShopifyInventoryLevelConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyInventoryItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  productVariant?: AvailableShopifyProductVariantSelection;

  cost?: boolean | null | undefined;

  countryCodeOfOrigin?: boolean | null | undefined;

  countryHarmonizedSystemCodes?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  harmonizedSystemCode?: boolean | null | undefined;

  provinceCodeOfOrigin?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  tracked?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  locations?: AvailableShopifyLocationConnectionSelection;

  shopifyInventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyLocation items. */
export type ShopifyLocationConnection = {

  __typename: 'ShopifyLocationConnection';

  /** A list of edges. */
  edges: ShopifyLocationEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyLocationConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyLocationEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyLocation connection. */
export type ShopifyLocationEdge = {

  __typename: 'ShopifyLocationEdge';

  /** The item at the end of the edge */
  node: ShopifyLocation;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyLocationEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyLocationSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyLocation = {

  __typename: 'ShopifyLocation';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  active: (Scalars['Boolean'] | null);

  address1: (Scalars['String'] | null);

  address2: (Scalars['String'] | null);

  city: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  countryCode: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  legacy: (Scalars['Boolean'] | null);

  localizedCountryName: (Scalars['String'] | null);

  localizedProvinceName: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  phone: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  provinceCode: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  zipCode: (Scalars['String'] | null);

  inventoryItems: ShopifyInventoryItemConnection;

  shopifyInventoryLevels: ShopifyInventoryLevelConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyLocationSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  active?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  address2?: boolean | null | undefined;

  city?: boolean | null | undefined;

  country?: boolean | null | undefined;

  countryCode?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  legacy?: boolean | null | undefined;

  localizedCountryName?: boolean | null | undefined;

  localizedProvinceName?: boolean | null | undefined;

  name?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  province?: boolean | null | undefined;

  provinceCode?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  zipCode?: boolean | null | undefined;

  inventoryItems?: AvailableShopifyInventoryItemConnectionSelection;

  shopifyInventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyInventoryItem items. */
export type ShopifyInventoryItemConnection = {

  __typename: 'ShopifyInventoryItemConnection';

  /** A list of edges. */
  edges: ShopifyInventoryItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyInventoryItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyInventoryItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyInventoryItem connection. */
export type ShopifyInventoryItemEdge = {

  __typename: 'ShopifyInventoryItemEdge';

  /** The item at the end of the edge */
  node: ShopifyInventoryItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyInventoryItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyInventoryItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyInventoryLevel items. */
export type ShopifyInventoryLevelConnection = {

  __typename: 'ShopifyInventoryLevelConnection';

  /** A list of edges. */
  edges: ShopifyInventoryLevelEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyInventoryLevelConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyInventoryLevelEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyInventoryLevel connection. */
export type ShopifyInventoryLevelEdge = {

  __typename: 'ShopifyInventoryLevelEdge';

  /** The item at the end of the edge */
  node: ShopifyInventoryLevel;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyInventoryLevelEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyInventoryLevelSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyInventoryLevel = {

  __typename: 'ShopifyInventoryLevel';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  available: (Scalars['Float'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  inventoryItem: (ShopifyInventoryItem | null);

  inventoryItemId: (Scalars['GadgetID'] | null);

  location: (ShopifyLocation | null);

  locationId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyInventoryLevelSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  available?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  inventoryItem?: AvailableShopifyInventoryItemSelection;

  inventoryItemId?: boolean | null | undefined;

  location?: AvailableShopifyLocationSelection;

  locationId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProductOption items. */
export type ShopifyProductOptionConnection = {

  __typename: 'ShopifyProductOptionConnection';

  /** A list of edges. */
  edges: ShopifyProductOptionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductOptionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductOptionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProductOption connection. */
export type ShopifyProductOptionEdge = {

  __typename: 'ShopifyProductOptionEdge';

  /** The item at the end of the edge */
  node: ShopifyProductOption;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductOptionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductOptionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyProductOption = {

  __typename: 'ShopifyProductOption';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  name: (Scalars['String'] | null);

  position: (Scalars['Float'] | null);

  values: (Scalars['JSON'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductOptionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  name?: boolean | null | undefined;

  position?: boolean | null | undefined;

  values?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCollection items. */
export type ShopifyCollectionConnection = {

  __typename: 'ShopifyCollectionConnection';

  /** A list of edges. */
  edges: ShopifyCollectionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCollectionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCollectionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCollection connection. */
export type ShopifyCollectionEdge = {

  __typename: 'ShopifyCollectionEdge';

  /** The item at the end of the edge */
  node: ShopifyCollection;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCollectionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCollectionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyPage items. */
export type ShopifyPageConnection = {

  __typename: 'ShopifyPageConnection';

  /** A list of edges. */
  edges: ShopifyPageEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyPageConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyPageEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyPage connection. */
export type ShopifyPageEdge = {

  __typename: 'ShopifyPageEdge';

  /** The item at the end of the edge */
  node: ShopifyPage;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyPageEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyPageSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyPage = {

  __typename: 'ShopifyPage';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  author: (Scalars['String'] | null);

  body: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  handle: (Scalars['String'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyPageSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  author?: boolean | null | undefined;

  body?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyPriceRule items. */
export type ShopifyPriceRuleConnection = {

  __typename: 'ShopifyPriceRuleConnection';

  /** A list of edges. */
  edges: ShopifyPriceRuleEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyPriceRuleConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyPriceRuleEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyPriceRule connection. */
export type ShopifyPriceRuleEdge = {

  __typename: 'ShopifyPriceRuleEdge';

  /** The item at the end of the edge */
  node: ShopifyPriceRule;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyPriceRuleEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyPriceRuleSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyPriceRule = {

  __typename: 'ShopifyPriceRule';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  allocationLimit: (Scalars['Float'] | null);

  allocationMethod: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  customerSegmentPrerequisiteIds: (Scalars['JSON'] | null);

  customerSelection: (Scalars['String'] | null);

  endsAt: (Scalars['DateTime'] | null);

  entitledCollectionIds: (Scalars['JSON'] | null);

  entitledCountryIds: (Scalars['JSON'] | null);

  entitledProductIds: (Scalars['JSON'] | null);

  entitledVariantIds: (Scalars['JSON'] | null);

  oncePerCustomer: (Scalars['Boolean'] | null);

  prerequisiteCollectionIds: (Scalars['JSON'] | null);

  prerequisiteCustomerIds: (Scalars['JSON'] | null);

  prerequisiteProductIds: (Scalars['JSON'] | null);

  prerequisiteQuantityRange: (Scalars['JSON'] | null);

  prerequisiteShippingPriceRange: (Scalars['JSON'] | null);

  prerequisiteSubtotalRange: (Scalars['JSON'] | null);

  prerequisiteToEntitlementPurchase: (Scalars['JSON'] | null);

  prerequisiteToEntitlementQuantityRatio: (Scalars['JSON'] | null);

  prerequisiteVariants: (Scalars['JSON'] | null);

  startsAt: (Scalars['DateTime'] | null);

  targetSelection: (Scalars['String'] | null);

  targetType: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  usageLimit: (Scalars['Float'] | null);

  value: (Scalars['Float'] | null);

  valueType: (Scalars['String'] | null);

  discountCodes: ShopifyDiscountCodeConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyPriceRuleSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  allocationLimit?: boolean | null | undefined;

  allocationMethod?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  customerSegmentPrerequisiteIds?: boolean | null | undefined;

  customerSelection?: boolean | null | undefined;

  endsAt?: boolean | null | undefined;

  entitledCollectionIds?: boolean | null | undefined;

  entitledCountryIds?: boolean | null | undefined;

  entitledProductIds?: boolean | null | undefined;

  entitledVariantIds?: boolean | null | undefined;

  oncePerCustomer?: boolean | null | undefined;

  prerequisiteCollectionIds?: boolean | null | undefined;

  prerequisiteCustomerIds?: boolean | null | undefined;

  prerequisiteProductIds?: boolean | null | undefined;

  prerequisiteQuantityRange?: boolean | null | undefined;

  prerequisiteShippingPriceRange?: boolean | null | undefined;

  prerequisiteSubtotalRange?: boolean | null | undefined;

  prerequisiteToEntitlementPurchase?: boolean | null | undefined;

  prerequisiteToEntitlementQuantityRatio?: boolean | null | undefined;

  prerequisiteVariants?: boolean | null | undefined;

  startsAt?: boolean | null | undefined;

  targetSelection?: boolean | null | undefined;

  targetType?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  usageLimit?: boolean | null | undefined;

  value?: boolean | null | undefined;

  valueType?: boolean | null | undefined;

  discountCodes?: AvailableShopifyDiscountCodeConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDiscountCode items. */
export type ShopifyDiscountCodeConnection = {

  __typename: 'ShopifyDiscountCodeConnection';

  /** A list of edges. */
  edges: ShopifyDiscountCodeEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDiscountCodeConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDiscountCodeEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDiscountCode connection. */
export type ShopifyDiscountCodeEdge = {

  __typename: 'ShopifyDiscountCodeEdge';

  /** The item at the end of the edge */
  node: ShopifyDiscountCode;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDiscountCodeEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDiscountCodeSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyDiscountCode = {

  __typename: 'ShopifyDiscountCode';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  code: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  usageCount: (Scalars['Float'] | null);

  priceRule: (ShopifyPriceRule | null);

  priceRuleId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDiscountCodeSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  code?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  usageCount?: boolean | null | undefined;

  priceRule?: AvailableShopifyPriceRuleSelection;

  priceRuleId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyEvent items. */
export type ShopifyEventConnection = {

  __typename: 'ShopifyEventConnection';

  /** A list of edges. */
  edges: ShopifyEventEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyEventConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyEventEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyEvent connection. */
export type ShopifyEventEdge = {

  __typename: 'ShopifyEventEdge';

  /** The item at the end of the edge */
  node: ShopifyEvent;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyEventEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyEventSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyEvent = {

  __typename: 'ShopifyEvent';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  arguments: (Scalars['JSON'] | null);

  author: (Scalars['String'] | null);

  body: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  description: (Scalars['String'] | null);

  message: (Scalars['String'] | null);

  path: (Scalars['String'] | null);

  subjectId: (Scalars['Float'] | null);

  subjectType: ShopifyEventSubjectTypeEnum;

  verb: (Scalars['String'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyEventSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  arguments?: boolean | null | undefined;

  author?: boolean | null | undefined;

  body?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  description?: boolean | null | undefined;

  message?: boolean | null | undefined;

  path?: boolean | null | undefined;

  subjectId?: boolean | null | undefined;

  subjectType?: boolean | null | undefined;

  verb?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifySync items. */
export type ShopifySyncConnection = {

  __typename: 'ShopifySyncConnection';

  /** A list of edges. */
  edges: ShopifySyncEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySyncConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySyncEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySync connection. */
export type ShopifySyncEdge = {

  __typename: 'ShopifySyncEdge';

  /** The item at the end of the edge */
  node: ShopifySync;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySyncEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySyncSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifySync = {

  __typename: 'ShopifySync';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  errorDetails: (Scalars['String'] | null);

  domain: Scalars['String'];

  errorMessage: (Scalars['String'] | null);

  /** DateTime that this sync was run from */
  syncSince: (Scalars['DateTime'] | null);

  force: (Scalars['Boolean'] | null);

  models: (Scalars['JSON'] | null);

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySyncSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  errorDetails?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  errorMessage?: boolean | null | undefined;

  /** DateTime that this sync was run from */
  syncSince?: boolean | null | undefined;

  force?: boolean | null | undefined;

  models?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyBlog items. */
export type ShopifyBlogConnection = {

  __typename: 'ShopifyBlogConnection';

  /** A list of edges. */
  edges: ShopifyBlogEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyBlogConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyBlogEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyBlog connection. */
export type ShopifyBlogEdge = {

  __typename: 'ShopifyBlogEdge';

  /** The item at the end of the edge */
  node: ShopifyBlog;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyBlogEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyBlogSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyBlog = {

  __typename: 'ShopifyBlog';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  commentable: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  feedburner: (Scalars['JSON'] | null);

  feedburnerLocation: (Scalars['String'] | null);

  handle: (Scalars['String'] | null);

  comments: ShopifyCommentConnection;

  articles: ShopifyArticleConnection;

  tags: (Scalars['JSON'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyBlogSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  commentable?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  feedburner?: boolean | null | undefined;

  feedburnerLocation?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  comments?: AvailableShopifyCommentConnectionSelection;

  articles?: AvailableShopifyArticleConnectionSelection;

  tags?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyComment items. */
export type ShopifyCommentConnection = {

  __typename: 'ShopifyCommentConnection';

  /** A list of edges. */
  edges: ShopifyCommentEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCommentConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCommentEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyComment connection. */
export type ShopifyCommentEdge = {

  __typename: 'ShopifyCommentEdge';

  /** The item at the end of the edge */
  node: ShopifyComment;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCommentEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCommentSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyComment = {

  __typename: 'ShopifyComment';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  author: (Scalars['String'] | null);

  body: (Scalars['String'] | null);

  bodyHtml: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  email: (Scalars['String'] | null);

  ip: (Scalars['String'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  status: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  userAgent: (Scalars['String'] | null);

  article: (ShopifyArticle | null);

  articleId: (Scalars['GadgetID'] | null);

  blog: (ShopifyBlog | null);

  blogId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCommentSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  author?: boolean | null | undefined;

  body?: boolean | null | undefined;

  bodyHtml?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  email?: boolean | null | undefined;

  ip?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  status?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  userAgent?: boolean | null | undefined;

  article?: AvailableShopifyArticleSelection;

  articleId?: boolean | null | undefined;

  blog?: AvailableShopifyBlogSelection;

  blogId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyArticle = {

  __typename: 'ShopifyArticle';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  comments: ShopifyCommentConnection;

  author: (Scalars['String'] | null);

  body: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  handle: (Scalars['String'] | null);

  image: (Scalars['JSON'] | null);

  published: (Scalars['Boolean'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  summary: (Scalars['String'] | null);

  tags: (Scalars['JSON'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  blog: (ShopifyBlog | null);

  blogId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  status: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyArticleSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  comments?: AvailableShopifyCommentConnectionSelection;

  author?: boolean | null | undefined;

  body?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  image?: boolean | null | undefined;

  published?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  summary?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  blog?: AvailableShopifyBlogSelection;

  blogId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  status?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyArticle items. */
export type ShopifyArticleConnection = {

  __typename: 'ShopifyArticleConnection';

  /** A list of edges. */
  edges: ShopifyArticleEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyArticleConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyArticleEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyArticle connection. */
export type ShopifyArticleEdge = {

  __typename: 'ShopifyArticleEdge';

  /** The item at the end of the edge */
  node: ShopifyArticle;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyArticleEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyArticleSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyRedirect items. */
export type ShopifyRedirectConnection = {

  __typename: 'ShopifyRedirectConnection';

  /** A list of edges. */
  edges: ShopifyRedirectEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyRedirectConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyRedirectEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyRedirect connection. */
export type ShopifyRedirectEdge = {

  __typename: 'ShopifyRedirectEdge';

  /** The item at the end of the edge */
  node: ShopifyRedirect;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyRedirectEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyRedirectSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyRedirect = {

  __typename: 'ShopifyRedirect';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  path: (Scalars['String'] | null);

  target: (Scalars['String'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyRedirectSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  path?: boolean | null | undefined;

  target?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDiscount items. */
export type ShopifyDiscountConnection = {

  __typename: 'ShopifyDiscountConnection';

  /** A list of edges. */
  edges: ShopifyDiscountEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDiscountConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDiscountEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDiscount connection. */
export type ShopifyDiscountEdge = {

  __typename: 'ShopifyDiscountEdge';

  /** The item at the end of the edge */
  node: ShopifyDiscount;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDiscountEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDiscountSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyDiscount = {

  __typename: 'ShopifyDiscount';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  appDiscountType: (Scalars['JSON'] | null);

  appliesOnOneTimePurchase: (Scalars['Boolean'] | null);

  appliesOnSubscription: (Scalars['Boolean'] | null);

  appliesOncePerCustomer: (Scalars['Boolean'] | null);

  asyncUsageCount: (Scalars['Float'] | null);

  codeCount: (Scalars['Int'] | null);

  combinesWith: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  destinationSelection: (Scalars['JSON'] | null);

  discountClass: ShopifyDiscountDiscountClassEnum;

  discountId: (Scalars['String'] | null);

  endsAt: (Scalars['DateTime'] | null);

  errorHistory: (Scalars['JSON'] | null);

  hasTimelineComment: (Scalars['Boolean'] | null);

  maximumShippingPrice: (Scalars['JSON'] | null);

  minimumRequirement: (Scalars['JSON'] | null);

  recurringCycleLimit: (Scalars['Int'] | null);

  shareableUrls: (Scalars['JSON'] | null);

  shortSummary: (Scalars['String'] | null);

  startsAt: (Scalars['DateTime'] | null);

  status: ShopifyDiscountStatusEnum;

  summary: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  totalSales: (Scalars['JSON'] | null);

  usageLimit: (Scalars['Int'] | null);

  usesPerOrderLimit: (Scalars['Int'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDiscountSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  appDiscountType?: boolean | null | undefined;

  appliesOnOneTimePurchase?: boolean | null | undefined;

  appliesOnSubscription?: boolean | null | undefined;

  appliesOncePerCustomer?: boolean | null | undefined;

  asyncUsageCount?: boolean | null | undefined;

  codeCount?: boolean | null | undefined;

  combinesWith?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  destinationSelection?: boolean | null | undefined;

  discountClass?: boolean | null | undefined;

  discountId?: boolean | null | undefined;

  endsAt?: boolean | null | undefined;

  errorHistory?: boolean | null | undefined;

  hasTimelineComment?: boolean | null | undefined;

  maximumShippingPrice?: boolean | null | undefined;

  minimumRequirement?: boolean | null | undefined;

  recurringCycleLimit?: boolean | null | undefined;

  shareableUrls?: boolean | null | undefined;

  shortSummary?: boolean | null | undefined;

  startsAt?: boolean | null | undefined;

  status?: boolean | null | undefined;

  summary?: boolean | null | undefined;

  title?: boolean | null | undefined;

  totalSales?: boolean | null | undefined;

  usageLimit?: boolean | null | undefined;

  usesPerOrderLimit?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFile items. */
export type ShopifyFileConnection = {

  __typename: 'ShopifyFileConnection';

  /** A list of edges. */
  edges: ShopifyFileEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFileConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFileEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFile connection. */
export type ShopifyFileEdge = {

  __typename: 'ShopifyFileEdge';

  /** The item at the end of the edge */
  node: ShopifyFile;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFileEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFileSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyFile = {

  __typename: 'ShopifyFile';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  type: ShopifyFileTypeEnum;

  alt: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  duration: (Scalars['Int'] | null);

  fileErrors: (Scalars['JSON'] | null);

  fileStatus: ShopifyFileFileStatusEnum;

  image: (Scalars['JSON'] | null);

  originalFileSize: (Scalars['Int'] | null);

  originalSource: (Scalars['JSON'] | null);

  preview: (Scalars['JSON'] | null);

  sources: (Scalars['JSON'] | null);

  url: (Scalars['String'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFileSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  type?: boolean | null | undefined;

  alt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  duration?: boolean | null | undefined;

  fileErrors?: boolean | null | undefined;

  fileStatus?: boolean | null | undefined;

  image?: boolean | null | undefined;

  originalFileSize?: boolean | null | undefined;

  originalSource?: boolean | null | undefined;

  preview?: boolean | null | undefined;

  sources?: boolean | null | undefined;

  url?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyGdprRequest items. */
export type ShopifyGdprRequestConnection = {

  __typename: 'ShopifyGdprRequestConnection';

  /** A list of edges. */
  edges: ShopifyGdprRequestEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyGdprRequestConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyGdprRequestEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyGdprRequest connection. */
export type ShopifyGdprRequestEdge = {

  __typename: 'ShopifyGdprRequestEdge';

  /** The item at the end of the edge */
  node: ShopifyGdprRequest;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyGdprRequestEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyGdprRequestSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyGdprRequest = {

  __typename: 'ShopifyGdprRequest';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  payload: (Scalars['JSON'] | null);

  topic: ShopifyGdprRequestTopicEnum;

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyGdprRequestSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  payload?: boolean | null | undefined;

  topic?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyShop items. */
export type ShopifyShopConnection = {

  __typename: 'ShopifyShopConnection';

  /** A list of edges. */
  edges: ShopifyShopEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyShopConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyShopEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyShop connection. */
export type ShopifyShopEdge = {

  __typename: 'ShopifyShopEdge';

  /** The item at the end of the edge */
  node: ShopifyShop;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyShopEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyShopSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type BlogPipeArticle = {

  __typename: 'BlogPipeArticle';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  title: (Scalars['String'] | null);

  status: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableBlogPipeArticleSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  title?: boolean | null | undefined;

  status?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of BlogPipeArticle items. */
export type BlogPipeArticleConnection = {

  __typename: 'BlogPipeArticleConnection';

  /** A list of edges. */
  edges: BlogPipeArticleEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableBlogPipeArticleConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableBlogPipeArticleEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a BlogPipeArticle connection. */
export type BlogPipeArticleEdge = {

  __typename: 'BlogPipeArticleEdge';

  /** The item at the end of the edge */
  node: BlogPipeArticle;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableBlogPipeArticleEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableBlogPipeArticleSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type Session = {

  __typename: 'Session';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: (Scalars['GadgetID'] | null);

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  shopifySID: (Scalars['String'] | null);

  roles: Role[];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableSessionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  shopifySID?: boolean | null | undefined;

  roles?: AvailableRoleSelection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export type Role = {

  __typename: 'Role';

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key: Scalars['String'];

  /** The human readable name for this role. Can be changed. */
  name: Scalars['String'];
};



export type AvailableRoleSelection = {

  __typename?: boolean | null | undefined;

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key?: boolean | null | undefined;

  /** The human readable name for this role. Can be changed. */
  name?: boolean | null | undefined;
};


/** A connection to a list of Session items. */
export type SessionConnection = {

  __typename: 'SessionConnection';

  /** A list of edges. */
  edges: SessionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableSessionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableSessionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a Session connection. */
export type SessionEdge = {

  __typename: 'SessionEdge';

  /** The item at the end of the edge */
  node: Session;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableSessionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableSessionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type BlogPipeTopics = {

  __typename: 'BlogPipeTopics';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  title: (Scalars['String'] | null);

  keywords: (Scalars['String'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableBlogPipeTopicsSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  title?: boolean | null | undefined;

  keywords?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of BlogPipeTopics items. */
export type BlogPipeTopicsConnection = {

  __typename: 'BlogPipeTopicsConnection';

  /** A list of edges. */
  edges: BlogPipeTopicsEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableBlogPipeTopicsConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableBlogPipeTopicsEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a BlogPipeTopics connection. */
export type BlogPipeTopicsEdge = {

  __typename: 'BlogPipeTopicsEdge';

  /** The item at the end of the edge */
  node: BlogPipeTopics;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableBlogPipeTopicsEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableBlogPipeTopicsSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type InternalQueries = {

  __typename: 'InternalQueries';

  blogPipeAds: (InternalBlogPipeAdsRecord | null);

  listBlogPipeAds: InternalBlogPipeAdsRecordConnection;

  shopifyArticle: (InternalShopifyArticleRecord | null);

  listShopifyArticle: InternalShopifyArticleRecordConnection;

  shopifyBlog: (InternalShopifyBlogRecord | null);

  listShopifyBlog: InternalShopifyBlogRecordConnection;

  shopifyCollect: (InternalShopifyCollectRecord | null);

  listShopifyCollect: InternalShopifyCollectRecordConnection;

  shopifyCollection: (InternalShopifyCollectionRecord | null);

  listShopifyCollection: InternalShopifyCollectionRecordConnection;

  shopifyComment: (InternalShopifyCommentRecord | null);

  listShopifyComment: InternalShopifyCommentRecordConnection;

  shopifyDiscount: (InternalShopifyDiscountRecord | null);

  listShopifyDiscount: InternalShopifyDiscountRecordConnection;

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);

  listShopifyDiscountCode: InternalShopifyDiscountCodeRecordConnection;

  shopifyEvent: (InternalShopifyEventRecord | null);

  listShopifyEvent: InternalShopifyEventRecordConnection;

  shopifyFile: (InternalShopifyFileRecord | null);

  listShopifyFile: InternalShopifyFileRecordConnection;

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);

  listShopifyGdprRequest: InternalShopifyGdprRequestRecordConnection;

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);

  listShopifyInventoryItem: InternalShopifyInventoryItemRecordConnection;

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);

  listShopifyInventoryLevel: InternalShopifyInventoryLevelRecordConnection;

  shopifyLocation: (InternalShopifyLocationRecord | null);

  listShopifyLocation: InternalShopifyLocationRecordConnection;

  shopifyPage: (InternalShopifyPageRecord | null);

  listShopifyPage: InternalShopifyPageRecordConnection;

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);

  listShopifyPriceRule: InternalShopifyPriceRuleRecordConnection;

  shopifyProduct: (InternalShopifyProductRecord | null);

  listShopifyProduct: InternalShopifyProductRecordConnection;

  shopifyProductImage: (InternalShopifyProductImageRecord | null);

  listShopifyProductImage: InternalShopifyProductImageRecordConnection;

  shopifyProductOption: (InternalShopifyProductOptionRecord | null);

  listShopifyProductOption: InternalShopifyProductOptionRecordConnection;

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);

  listShopifyProductVariant: InternalShopifyProductVariantRecordConnection;

  shopifyRedirect: (InternalShopifyRedirectRecord | null);

  listShopifyRedirect: InternalShopifyRedirectRecordConnection;

  shopifyShop: (InternalShopifyShopRecord | null);

  listShopifyShop: InternalShopifyShopRecordConnection;

  shopifySync: (InternalShopifySyncRecord | null);

  listShopifySync: InternalShopifySyncRecordConnection;

  blogPipeArticle: (InternalBlogPipeArticleRecord | null);

  listBlogPipeArticle: InternalBlogPipeArticleRecordConnection;

  session: (InternalSessionRecord | null);

  listSession: InternalSessionRecordConnection;

  blogPipeTopics: (InternalBlogPipeTopicsRecord | null);

  listBlogPipeTopics: InternalBlogPipeTopicsRecordConnection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails: (Scalars['JSONObject'] | null);
};



export type AvailableInternalQueriesSelection = {

  __typename?: boolean | null | undefined;

  blogPipeAds?: boolean | null | undefined;

  listBlogPipeAds?: AvailableInternalBlogPipeAdsRecordConnectionSelection;

  shopifyArticle?: boolean | null | undefined;

  listShopifyArticle?: AvailableInternalShopifyArticleRecordConnectionSelection;

  shopifyBlog?: boolean | null | undefined;

  listShopifyBlog?: AvailableInternalShopifyBlogRecordConnectionSelection;

  shopifyCollect?: boolean | null | undefined;

  listShopifyCollect?: AvailableInternalShopifyCollectRecordConnectionSelection;

  shopifyCollection?: boolean | null | undefined;

  listShopifyCollection?: AvailableInternalShopifyCollectionRecordConnectionSelection;

  shopifyComment?: boolean | null | undefined;

  listShopifyComment?: AvailableInternalShopifyCommentRecordConnectionSelection;

  shopifyDiscount?: boolean | null | undefined;

  listShopifyDiscount?: AvailableInternalShopifyDiscountRecordConnectionSelection;

  shopifyDiscountCode?: boolean | null | undefined;

  listShopifyDiscountCode?: AvailableInternalShopifyDiscountCodeRecordConnectionSelection;

  shopifyEvent?: boolean | null | undefined;

  listShopifyEvent?: AvailableInternalShopifyEventRecordConnectionSelection;

  shopifyFile?: boolean | null | undefined;

  listShopifyFile?: AvailableInternalShopifyFileRecordConnectionSelection;

  shopifyGdprRequest?: boolean | null | undefined;

  listShopifyGdprRequest?: AvailableInternalShopifyGdprRequestRecordConnectionSelection;

  shopifyInventoryItem?: boolean | null | undefined;

  listShopifyInventoryItem?: AvailableInternalShopifyInventoryItemRecordConnectionSelection;

  shopifyInventoryLevel?: boolean | null | undefined;

  listShopifyInventoryLevel?: AvailableInternalShopifyInventoryLevelRecordConnectionSelection;

  shopifyLocation?: boolean | null | undefined;

  listShopifyLocation?: AvailableInternalShopifyLocationRecordConnectionSelection;

  shopifyPage?: boolean | null | undefined;

  listShopifyPage?: AvailableInternalShopifyPageRecordConnectionSelection;

  shopifyPriceRule?: boolean | null | undefined;

  listShopifyPriceRule?: AvailableInternalShopifyPriceRuleRecordConnectionSelection;

  shopifyProduct?: boolean | null | undefined;

  listShopifyProduct?: AvailableInternalShopifyProductRecordConnectionSelection;

  shopifyProductImage?: boolean | null | undefined;

  listShopifyProductImage?: AvailableInternalShopifyProductImageRecordConnectionSelection;

  shopifyProductOption?: boolean | null | undefined;

  listShopifyProductOption?: AvailableInternalShopifyProductOptionRecordConnectionSelection;

  shopifyProductVariant?: boolean | null | undefined;

  listShopifyProductVariant?: AvailableInternalShopifyProductVariantRecordConnectionSelection;

  shopifyRedirect?: boolean | null | undefined;

  listShopifyRedirect?: AvailableInternalShopifyRedirectRecordConnectionSelection;

  shopifyShop?: boolean | null | undefined;

  listShopifyShop?: AvailableInternalShopifyShopRecordConnectionSelection;

  shopifySync?: boolean | null | undefined;

  listShopifySync?: AvailableInternalShopifySyncRecordConnectionSelection;

  blogPipeArticle?: boolean | null | undefined;

  listBlogPipeArticle?: AvailableInternalBlogPipeArticleRecordConnectionSelection;

  session?: boolean | null | undefined;

  listSession?: AvailableInternalSessionRecordConnectionSelection;

  blogPipeTopics?: boolean | null | undefined;

  listBlogPipeTopics?: AvailableInternalBlogPipeTopicsRecordConnectionSelection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: boolean | null | undefined;
};


/** A connection to a list of InternalBlogPipeAdsRecord items. */
export type InternalBlogPipeAdsRecordConnection = {

  __typename: 'InternalBlogPipeAdsRecordConnection';

  /** A list of edges. */
  edges: InternalBlogPipeAdsRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalBlogPipeAdsRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalBlogPipeAdsRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalBlogPipeAdsRecord connection. */
export type InternalBlogPipeAdsRecordEdge = {

  __typename: 'InternalBlogPipeAdsRecordEdge';

  /** The item at the end of the edge */
  node: InternalBlogPipeAdsRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalBlogPipeAdsRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyArticleRecord items. */
export type InternalShopifyArticleRecordConnection = {

  __typename: 'InternalShopifyArticleRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyArticleRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyArticleRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyArticleRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyArticleRecord connection. */
export type InternalShopifyArticleRecordEdge = {

  __typename: 'InternalShopifyArticleRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyArticleRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyArticleRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyBlogRecord items. */
export type InternalShopifyBlogRecordConnection = {

  __typename: 'InternalShopifyBlogRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyBlogRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyBlogRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyBlogRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyBlogRecord connection. */
export type InternalShopifyBlogRecordEdge = {

  __typename: 'InternalShopifyBlogRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyBlogRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyBlogRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCollectRecord items. */
export type InternalShopifyCollectRecordConnection = {

  __typename: 'InternalShopifyCollectRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCollectRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCollectRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCollectRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCollectRecord connection. */
export type InternalShopifyCollectRecordEdge = {

  __typename: 'InternalShopifyCollectRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCollectRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCollectRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCollectionRecord items. */
export type InternalShopifyCollectionRecordConnection = {

  __typename: 'InternalShopifyCollectionRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCollectionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCollectionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCollectionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCollectionRecord connection. */
export type InternalShopifyCollectionRecordEdge = {

  __typename: 'InternalShopifyCollectionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCollectionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCollectionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCommentRecord items. */
export type InternalShopifyCommentRecordConnection = {

  __typename: 'InternalShopifyCommentRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCommentRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCommentRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCommentRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCommentRecord connection. */
export type InternalShopifyCommentRecordEdge = {

  __typename: 'InternalShopifyCommentRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCommentRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCommentRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDiscountRecord items. */
export type InternalShopifyDiscountRecordConnection = {

  __typename: 'InternalShopifyDiscountRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDiscountRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDiscountRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDiscountRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDiscountRecord connection. */
export type InternalShopifyDiscountRecordEdge = {

  __typename: 'InternalShopifyDiscountRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDiscountRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDiscountRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDiscountCodeRecord items. */
export type InternalShopifyDiscountCodeRecordConnection = {

  __typename: 'InternalShopifyDiscountCodeRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDiscountCodeRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDiscountCodeRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDiscountCodeRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDiscountCodeRecord connection. */
export type InternalShopifyDiscountCodeRecordEdge = {

  __typename: 'InternalShopifyDiscountCodeRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDiscountCodeRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDiscountCodeRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyEventRecord items. */
export type InternalShopifyEventRecordConnection = {

  __typename: 'InternalShopifyEventRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyEventRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyEventRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyEventRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyEventRecord connection. */
export type InternalShopifyEventRecordEdge = {

  __typename: 'InternalShopifyEventRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyEventRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyEventRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFileRecord items. */
export type InternalShopifyFileRecordConnection = {

  __typename: 'InternalShopifyFileRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFileRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFileRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFileRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFileRecord connection. */
export type InternalShopifyFileRecordEdge = {

  __typename: 'InternalShopifyFileRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFileRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFileRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyGdprRequestRecord items. */
export type InternalShopifyGdprRequestRecordConnection = {

  __typename: 'InternalShopifyGdprRequestRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyGdprRequestRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyGdprRequestRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyGdprRequestRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyGdprRequestRecord connection. */
export type InternalShopifyGdprRequestRecordEdge = {

  __typename: 'InternalShopifyGdprRequestRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyGdprRequestRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyGdprRequestRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyInventoryItemRecord items. */
export type InternalShopifyInventoryItemRecordConnection = {

  __typename: 'InternalShopifyInventoryItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyInventoryItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyInventoryItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyInventoryItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyInventoryItemRecord connection. */
export type InternalShopifyInventoryItemRecordEdge = {

  __typename: 'InternalShopifyInventoryItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyInventoryItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyInventoryItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyInventoryLevelRecord items. */
export type InternalShopifyInventoryLevelRecordConnection = {

  __typename: 'InternalShopifyInventoryLevelRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyInventoryLevelRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyInventoryLevelRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyInventoryLevelRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyInventoryLevelRecord connection. */
export type InternalShopifyInventoryLevelRecordEdge = {

  __typename: 'InternalShopifyInventoryLevelRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyInventoryLevelRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyInventoryLevelRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyLocationRecord items. */
export type InternalShopifyLocationRecordConnection = {

  __typename: 'InternalShopifyLocationRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyLocationRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyLocationRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyLocationRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyLocationRecord connection. */
export type InternalShopifyLocationRecordEdge = {

  __typename: 'InternalShopifyLocationRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyLocationRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyLocationRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyPageRecord items. */
export type InternalShopifyPageRecordConnection = {

  __typename: 'InternalShopifyPageRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyPageRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyPageRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyPageRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyPageRecord connection. */
export type InternalShopifyPageRecordEdge = {

  __typename: 'InternalShopifyPageRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyPageRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyPageRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyPriceRuleRecord items. */
export type InternalShopifyPriceRuleRecordConnection = {

  __typename: 'InternalShopifyPriceRuleRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyPriceRuleRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyPriceRuleRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyPriceRuleRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyPriceRuleRecord connection. */
export type InternalShopifyPriceRuleRecordEdge = {

  __typename: 'InternalShopifyPriceRuleRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyPriceRuleRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyPriceRuleRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductRecord items. */
export type InternalShopifyProductRecordConnection = {

  __typename: 'InternalShopifyProductRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductRecord connection. */
export type InternalShopifyProductRecordEdge = {

  __typename: 'InternalShopifyProductRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductImageRecord items. */
export type InternalShopifyProductImageRecordConnection = {

  __typename: 'InternalShopifyProductImageRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductImageRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductImageRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductImageRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductImageRecord connection. */
export type InternalShopifyProductImageRecordEdge = {

  __typename: 'InternalShopifyProductImageRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductImageRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductImageRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductOptionRecord items. */
export type InternalShopifyProductOptionRecordConnection = {

  __typename: 'InternalShopifyProductOptionRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductOptionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductOptionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductOptionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductOptionRecord connection. */
export type InternalShopifyProductOptionRecordEdge = {

  __typename: 'InternalShopifyProductOptionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductOptionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductOptionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductVariantRecord items. */
export type InternalShopifyProductVariantRecordConnection = {

  __typename: 'InternalShopifyProductVariantRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductVariantRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductVariantRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductVariantRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductVariantRecord connection. */
export type InternalShopifyProductVariantRecordEdge = {

  __typename: 'InternalShopifyProductVariantRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductVariantRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductVariantRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyRedirectRecord items. */
export type InternalShopifyRedirectRecordConnection = {

  __typename: 'InternalShopifyRedirectRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyRedirectRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyRedirectRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyRedirectRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyRedirectRecord connection. */
export type InternalShopifyRedirectRecordEdge = {

  __typename: 'InternalShopifyRedirectRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyRedirectRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyRedirectRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyShopRecord items. */
export type InternalShopifyShopRecordConnection = {

  __typename: 'InternalShopifyShopRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyShopRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyShopRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyShopRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyShopRecord connection. */
export type InternalShopifyShopRecordEdge = {

  __typename: 'InternalShopifyShopRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyShopRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyShopRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySyncRecord items. */
export type InternalShopifySyncRecordConnection = {

  __typename: 'InternalShopifySyncRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySyncRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySyncRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySyncRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySyncRecord connection. */
export type InternalShopifySyncRecordEdge = {

  __typename: 'InternalShopifySyncRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySyncRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySyncRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalBlogPipeArticleRecord items. */
export type InternalBlogPipeArticleRecordConnection = {

  __typename: 'InternalBlogPipeArticleRecordConnection';

  /** A list of edges. */
  edges: InternalBlogPipeArticleRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalBlogPipeArticleRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalBlogPipeArticleRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalBlogPipeArticleRecord connection. */
export type InternalBlogPipeArticleRecordEdge = {

  __typename: 'InternalBlogPipeArticleRecordEdge';

  /** The item at the end of the edge */
  node: InternalBlogPipeArticleRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalBlogPipeArticleRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalSessionRecord items. */
export type InternalSessionRecordConnection = {

  __typename: 'InternalSessionRecordConnection';

  /** A list of edges. */
  edges: InternalSessionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalSessionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalSessionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalSessionRecord connection. */
export type InternalSessionRecordEdge = {

  __typename: 'InternalSessionRecordEdge';

  /** The item at the end of the edge */
  node: InternalSessionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalSessionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalBlogPipeTopicsRecord items. */
export type InternalBlogPipeTopicsRecordConnection = {

  __typename: 'InternalBlogPipeTopicsRecordConnection';

  /** A list of edges. */
  edges: InternalBlogPipeTopicsRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalBlogPipeTopicsRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalBlogPipeTopicsRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalBlogPipeTopicsRecord connection. */
export type InternalBlogPipeTopicsRecordEdge = {

  __typename: 'InternalBlogPipeTopicsRecordEdge';

  /** The item at the end of the edge */
  node: InternalBlogPipeTopicsRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalBlogPipeTopicsRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** Represents one of the roles an identity in the system can be entitled to */
export type GadgetRole = {

  __typename: 'GadgetRole';

  key: Scalars['String'];

  name: Scalars['String'];

  selectable: Scalars['Boolean'];

  order: Scalars['Int'];
};



export type AvailableGadgetRoleSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  selectable?: boolean | null | undefined;

  order?: boolean | null | undefined;
};



export type GadgetGlobalAction = {

  __typename: 'GadgetGlobalAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  requiresInput: Scalars['Boolean'];

  acceptsInput: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  examples: (GadgetGlobalActionGraphQLType | null);
};



export type AvailableGadgetGlobalActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};



export type GadgetGlobalActionGraphQLType = {

  __typename: 'GadgetGlobalActionGraphQLType';

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars['String'];

  exampleGraphQLMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetGlobalActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};


/** One upload target to use for the Direct Upload style of sending files to Gadget */
export type DirectUploadToken = {

  __typename: 'DirectUploadToken';

  /** The URL to upload a file to. */
  url: Scalars['String'];

  /** The token to pass to an action to reference the uploaded file. */
  token: Scalars['String'];
};



export type AvailableDirectUploadTokenSelection = {

  __typename?: boolean | null | undefined;

  /** The URL to upload a file to. */
  url?: boolean | null | undefined;

  /** The token to pass to an action to reference the uploaded file. */
  token?: boolean | null | undefined;
};


/** Information about the Shopify Connection */
export type Shopify = {

  __typename: 'Shopify';

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication: (Scalars['Boolean'] | null);

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes: Scalars['String'][];
};



export type AvailableShopifySelection = {

  __typename?: boolean | null | undefined;

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication?: boolean | null | undefined;

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes?: boolean | null | undefined;
};



export type Mutation = {

  __typename: 'Mutation';

  createBlogPipeAds: (CreateBlogPipeAdsResult | null);

  bulkCreateBlogPipeAds: (BulkCreateBlogPipeAdsResult | null);

  updateBlogPipeAds: (UpdateBlogPipeAdsResult | null);

  bulkUpdateBlogPipeAds: (BulkUpdateBlogPipeAdsResult | null);

  deleteBlogPipeAds: (DeleteBlogPipeAdsResult | null);

  bulkDeleteBlogPipeAds: (BulkDeleteBlogPipeAdsResult | null);

  actionAShopifyShop: (ActionAShopifyShopResult | null);

  bulkActionAShopifyShops: (BulkActionAShopifyShopsResult | null);

  runShopifySync: (RunShopifySyncResult | null);

  bulkRunShopifySyncs: (BulkRunShopifySyncsResult | null);

  completeShopifySync: (CompleteShopifySyncResult | null);

  bulkCompleteShopifySyncs: (BulkCompleteShopifySyncsResult | null);

  errorShopifySync: (ErrorShopifySyncResult | null);

  bulkErrorShopifySyncs: (BulkErrorShopifySyncsResult | null);

  createBlogPipeArticle: (CreateBlogPipeArticleResult | null);

  bulkCreateBlogPipeArticles: (BulkCreateBlogPipeArticlesResult | null);

  updateBlogPipeArticle: (UpdateBlogPipeArticleResult | null);

  bulkUpdateBlogPipeArticles: (BulkUpdateBlogPipeArticlesResult | null);

  deleteBlogPipeArticle: (DeleteBlogPipeArticleResult | null);

  bulkDeleteBlogPipeArticles: (BulkDeleteBlogPipeArticlesResult | null);

  createBlogPipeTopics: (CreateBlogPipeTopicsResult | null);

  bulkCreateBlogPipeTopics: (BulkCreateBlogPipeTopicsResult | null);

  updateBlogPipeTopics: (UpdateBlogPipeTopicsResult | null);

  bulkUpdateBlogPipeTopics: (BulkUpdateBlogPipeTopicsResult | null);

  deleteBlogPipeTopics: (DeleteBlogPipeTopicsResult | null);

  bulkDeleteBlogPipeTopics: (BulkDeleteBlogPipeTopicsResult | null);

  actionABlogPipeTopics: (ActionABlogPipeTopicsResult | null);

  bulkActionABlogPipeTopics: (BulkActionABlogPipeTopicsResult | null);

  globalShopifySync: (GlobalShopifySyncResult | null);

  internal: (InternalMutations | null);
};



export type AvailableMutationSelection = {

  __typename?: boolean | null | undefined;

  createBlogPipeAds?: AvailableCreateBlogPipeAdsResultSelection;

  bulkCreateBlogPipeAds?: AvailableBulkCreateBlogPipeAdsResultSelection;

  updateBlogPipeAds?: AvailableUpdateBlogPipeAdsResultSelection;

  bulkUpdateBlogPipeAds?: AvailableBulkUpdateBlogPipeAdsResultSelection;

  deleteBlogPipeAds?: AvailableDeleteBlogPipeAdsResultSelection;

  bulkDeleteBlogPipeAds?: AvailableBulkDeleteBlogPipeAdsResultSelection;

  actionAShopifyShop?: AvailableActionAShopifyShopResultSelection;

  bulkActionAShopifyShops?: AvailableBulkActionAShopifyShopsResultSelection;

  runShopifySync?: AvailableRunShopifySyncResultSelection;

  bulkRunShopifySyncs?: AvailableBulkRunShopifySyncsResultSelection;

  completeShopifySync?: AvailableCompleteShopifySyncResultSelection;

  bulkCompleteShopifySyncs?: AvailableBulkCompleteShopifySyncsResultSelection;

  errorShopifySync?: AvailableErrorShopifySyncResultSelection;

  bulkErrorShopifySyncs?: AvailableBulkErrorShopifySyncsResultSelection;

  createBlogPipeArticle?: AvailableCreateBlogPipeArticleResultSelection;

  bulkCreateBlogPipeArticles?: AvailableBulkCreateBlogPipeArticlesResultSelection;

  updateBlogPipeArticle?: AvailableUpdateBlogPipeArticleResultSelection;

  bulkUpdateBlogPipeArticles?: AvailableBulkUpdateBlogPipeArticlesResultSelection;

  deleteBlogPipeArticle?: AvailableDeleteBlogPipeArticleResultSelection;

  bulkDeleteBlogPipeArticles?: AvailableBulkDeleteBlogPipeArticlesResultSelection;

  createBlogPipeTopics?: AvailableCreateBlogPipeTopicsResultSelection;

  bulkCreateBlogPipeTopics?: AvailableBulkCreateBlogPipeTopicsResultSelection;

  updateBlogPipeTopics?: AvailableUpdateBlogPipeTopicsResultSelection;

  bulkUpdateBlogPipeTopics?: AvailableBulkUpdateBlogPipeTopicsResultSelection;

  deleteBlogPipeTopics?: AvailableDeleteBlogPipeTopicsResultSelection;

  bulkDeleteBlogPipeTopics?: AvailableBulkDeleteBlogPipeTopicsResultSelection;

  actionABlogPipeTopics?: AvailableActionABlogPipeTopicsResultSelection;

  bulkActionABlogPipeTopics?: AvailableBulkActionABlogPipeTopicsResultSelection;

  globalShopifySync?: AvailableGlobalShopifySyncResultSelection;

  internal?: AvailableInternalMutationsSelection;
};



export type CreateBlogPipeAdsResult = {

  __typename: 'CreateBlogPipeAdsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeAds: (BlogPipeAds | null);
};



export type AvailableCreateBlogPipeAdsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeAds?: AvailableBlogPipeAdsSelection;
};


/** The output when running the create on the blogPipeAds model in bulk. */
export type BulkCreateBlogPipeAdsResult = {

  __typename: 'BulkCreateBlogPipeAdsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed blogPipeAds records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeAdss: (BlogPipeAds | null)[];
};



export type AvailableBulkCreateBlogPipeAdsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed blogPipeAds records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeAdss?: AvailableBlogPipeAdsSelection;
};



export type UpdateBlogPipeAdsResult = {

  __typename: 'UpdateBlogPipeAdsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeAds: (BlogPipeAds | null);
};



export type AvailableUpdateBlogPipeAdsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeAds?: AvailableBlogPipeAdsSelection;
};


/** The output when running the update on the blogPipeAds model in bulk. */
export type BulkUpdateBlogPipeAdsResult = {

  __typename: 'BulkUpdateBlogPipeAdsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed blogPipeAds records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeAdss: (BlogPipeAds | null)[];
};



export type AvailableBulkUpdateBlogPipeAdsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed blogPipeAds records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeAdss?: AvailableBlogPipeAdsSelection;
};



export type DeleteBlogPipeAdsResult = {

  __typename: 'DeleteBlogPipeAdsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteBlogPipeAdsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the blogPipeAds model in bulk. */
export type BulkDeleteBlogPipeAdsResult = {

  __typename: 'BulkDeleteBlogPipeAdsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteBlogPipeAdsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type ActionAShopifyShopResult = {

  __typename: 'ActionAShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableActionAShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};


/** The output when running the actionA on the shopifyShop model in bulk. */
export type BulkActionAShopifyShopsResult = {

  __typename: 'BulkActionAShopifyShopsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyShop records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyShops: (ShopifyShop | null)[];
};



export type AvailableBulkActionAShopifyShopsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyShop records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyShops?: AvailableShopifyShopSelection;
};



export type RunShopifySyncResult = {

  __typename: 'RunShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableRunShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the run on the shopifySync model in bulk. */
export type BulkRunShopifySyncsResult = {

  __typename: 'BulkRunShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkRunShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type CompleteShopifySyncResult = {

  __typename: 'CompleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableCompleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the complete on the shopifySync model in bulk. */
export type BulkCompleteShopifySyncsResult = {

  __typename: 'BulkCompleteShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkCompleteShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type ErrorShopifySyncResult = {

  __typename: 'ErrorShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableErrorShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the error on the shopifySync model in bulk. */
export type BulkErrorShopifySyncsResult = {

  __typename: 'BulkErrorShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkErrorShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type CreateBlogPipeArticleResult = {

  __typename: 'CreateBlogPipeArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeArticle: (BlogPipeArticle | null);
};



export type AvailableCreateBlogPipeArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeArticle?: AvailableBlogPipeArticleSelection;
};


/** The output when running the create on the blogPipeArticle model in bulk. */
export type BulkCreateBlogPipeArticlesResult = {

  __typename: 'BulkCreateBlogPipeArticlesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed blogPipeArticle records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeArticles: (BlogPipeArticle | null)[];
};



export type AvailableBulkCreateBlogPipeArticlesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed blogPipeArticle records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeArticles?: AvailableBlogPipeArticleSelection;
};



export type UpdateBlogPipeArticleResult = {

  __typename: 'UpdateBlogPipeArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeArticle: (BlogPipeArticle | null);
};



export type AvailableUpdateBlogPipeArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeArticle?: AvailableBlogPipeArticleSelection;
};


/** The output when running the update on the blogPipeArticle model in bulk. */
export type BulkUpdateBlogPipeArticlesResult = {

  __typename: 'BulkUpdateBlogPipeArticlesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed blogPipeArticle records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeArticles: (BlogPipeArticle | null)[];
};



export type AvailableBulkUpdateBlogPipeArticlesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed blogPipeArticle records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeArticles?: AvailableBlogPipeArticleSelection;
};



export type DeleteBlogPipeArticleResult = {

  __typename: 'DeleteBlogPipeArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteBlogPipeArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the blogPipeArticle model in bulk. */
export type BulkDeleteBlogPipeArticlesResult = {

  __typename: 'BulkDeleteBlogPipeArticlesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteBlogPipeArticlesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateBlogPipeTopicsResult = {

  __typename: 'CreateBlogPipeTopicsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeTopics: (BlogPipeTopics | null);
};



export type AvailableCreateBlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeTopics?: AvailableBlogPipeTopicsSelection;
};


/** The output when running the create on the blogPipeTopics model in bulk. */
export type BulkCreateBlogPipeTopicsResult = {

  __typename: 'BulkCreateBlogPipeTopicsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed blogPipeTopics records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeTopicss: (BlogPipeTopics | null)[];
};



export type AvailableBulkCreateBlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed blogPipeTopics records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeTopicss?: AvailableBlogPipeTopicsSelection;
};



export type UpdateBlogPipeTopicsResult = {

  __typename: 'UpdateBlogPipeTopicsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeTopics: (BlogPipeTopics | null);
};



export type AvailableUpdateBlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeTopics?: AvailableBlogPipeTopicsSelection;
};


/** The output when running the update on the blogPipeTopics model in bulk. */
export type BulkUpdateBlogPipeTopicsResult = {

  __typename: 'BulkUpdateBlogPipeTopicsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed blogPipeTopics records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeTopicss: (BlogPipeTopics | null)[];
};



export type AvailableBulkUpdateBlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed blogPipeTopics records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeTopicss?: AvailableBlogPipeTopicsSelection;
};



export type DeleteBlogPipeTopicsResult = {

  __typename: 'DeleteBlogPipeTopicsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteBlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the blogPipeTopics model in bulk. */
export type BulkDeleteBlogPipeTopicsResult = {

  __typename: 'BulkDeleteBlogPipeTopicsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteBlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type ActionABlogPipeTopicsResult = {

  __typename: 'ActionABlogPipeTopicsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeTopics: (BlogPipeTopics | null);
};



export type AvailableActionABlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeTopics?: AvailableBlogPipeTopicsSelection;
};


/** The output when running the actionA on the blogPipeTopics model in bulk. */
export type BulkActionABlogPipeTopicsResult = {

  __typename: 'BulkActionABlogPipeTopicsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed blogPipeTopics records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeTopicss: (BlogPipeTopics | null)[];
};



export type AvailableBulkActionABlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed blogPipeTopics records by each sent bulk action. Returned in the same order as the input bulk action params. */
  blogPipeTopicss?: AvailableBlogPipeTopicsSelection;
};



export type GlobalShopifySyncResult = {

  __typename: 'GlobalShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableGlobalShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type InternalMutations = {

  __typename: 'InternalMutations';

  startTransaction: Scalars['String'];

  commitTransaction: Scalars['String'];

  rollbackTransaction: Scalars['String'];

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock: LockOperationResult;

  createBlogPipeAds: (InternalCreateBlogPipeAdsResult | null);

  updateBlogPipeAds: (InternalUpdateBlogPipeAdsResult | null);

  deleteBlogPipeAds: (InternalDeleteBlogPipeAdsResult | null);

  deleteManyBlogPipeAds: (InternalDeleteManyBlogPipeAdsResult | null);

  bulkCreateBlogPipeAdss: (InternalBulkCreateBlogPipeAdssResult | null);

  triggerCreateBlogPipeAds: (CreateBlogPipeAdsResult | null);

  triggerUpdateBlogPipeAds: (UpdateBlogPipeAdsResult | null);

  triggerDeleteBlogPipeAds: (DeleteBlogPipeAdsResult | null);

  createShopifyArticle: (InternalCreateShopifyArticleResult | null);

  updateShopifyArticle: (InternalUpdateShopifyArticleResult | null);

  deleteShopifyArticle: (InternalDeleteShopifyArticleResult | null);

  deleteManyShopifyArticle: (InternalDeleteManyShopifyArticleResult | null);

  bulkCreateShopifyArticles: (InternalBulkCreateShopifyArticlesResult | null);

  triggerCreateShopifyArticle: (CreateShopifyArticleResult | null);

  triggerUpdateShopifyArticle: (UpdateShopifyArticleResult | null);

  triggerDeleteShopifyArticle: (DeleteShopifyArticleResult | null);

  createShopifyBlog: (InternalCreateShopifyBlogResult | null);

  updateShopifyBlog: (InternalUpdateShopifyBlogResult | null);

  deleteShopifyBlog: (InternalDeleteShopifyBlogResult | null);

  deleteManyShopifyBlog: (InternalDeleteManyShopifyBlogResult | null);

  bulkCreateShopifyBlogs: (InternalBulkCreateShopifyBlogsResult | null);

  triggerCreateShopifyBlog: (CreateShopifyBlogResult | null);

  triggerUpdateShopifyBlog: (UpdateShopifyBlogResult | null);

  triggerDeleteShopifyBlog: (DeleteShopifyBlogResult | null);

  createShopifyCollect: (InternalCreateShopifyCollectResult | null);

  updateShopifyCollect: (InternalUpdateShopifyCollectResult | null);

  deleteShopifyCollect: (InternalDeleteShopifyCollectResult | null);

  deleteManyShopifyCollect: (InternalDeleteManyShopifyCollectResult | null);

  bulkCreateShopifyCollects: (InternalBulkCreateShopifyCollectsResult | null);

  triggerCreateShopifyCollect: (CreateShopifyCollectResult | null);

  triggerUpdateShopifyCollect: (UpdateShopifyCollectResult | null);

  triggerDeleteShopifyCollect: (DeleteShopifyCollectResult | null);

  createShopifyCollection: (InternalCreateShopifyCollectionResult | null);

  updateShopifyCollection: (InternalUpdateShopifyCollectionResult | null);

  deleteShopifyCollection: (InternalDeleteShopifyCollectionResult | null);

  deleteManyShopifyCollection: (InternalDeleteManyShopifyCollectionResult | null);

  bulkCreateShopifyCollections: (InternalBulkCreateShopifyCollectionsResult | null);

  triggerCreateShopifyCollection: (CreateShopifyCollectionResult | null);

  triggerUpdateShopifyCollection: (UpdateShopifyCollectionResult | null);

  triggerDeleteShopifyCollection: (DeleteShopifyCollectionResult | null);

  createShopifyComment: (InternalCreateShopifyCommentResult | null);

  updateShopifyComment: (InternalUpdateShopifyCommentResult | null);

  deleteShopifyComment: (InternalDeleteShopifyCommentResult | null);

  deleteManyShopifyComment: (InternalDeleteManyShopifyCommentResult | null);

  bulkCreateShopifyComments: (InternalBulkCreateShopifyCommentsResult | null);

  triggerCreateShopifyComment: (CreateShopifyCommentResult | null);

  triggerUpdateShopifyComment: (UpdateShopifyCommentResult | null);

  triggerDeleteShopifyComment: (DeleteShopifyCommentResult | null);

  createShopifyDiscount: (InternalCreateShopifyDiscountResult | null);

  updateShopifyDiscount: (InternalUpdateShopifyDiscountResult | null);

  deleteShopifyDiscount: (InternalDeleteShopifyDiscountResult | null);

  deleteManyShopifyDiscount: (InternalDeleteManyShopifyDiscountResult | null);

  bulkCreateShopifyDiscounts: (InternalBulkCreateShopifyDiscountsResult | null);

  triggerCreateShopifyDiscount: (CreateShopifyDiscountResult | null);

  triggerUpdateShopifyDiscount: (UpdateShopifyDiscountResult | null);

  triggerDeleteShopifyDiscount: (DeleteShopifyDiscountResult | null);

  createShopifyDiscountCode: (InternalCreateShopifyDiscountCodeResult | null);

  updateShopifyDiscountCode: (InternalUpdateShopifyDiscountCodeResult | null);

  deleteShopifyDiscountCode: (InternalDeleteShopifyDiscountCodeResult | null);

  deleteManyShopifyDiscountCode: (InternalDeleteManyShopifyDiscountCodeResult | null);

  bulkCreateShopifyDiscountCodes: (InternalBulkCreateShopifyDiscountCodesResult | null);

  triggerCreateShopifyDiscountCode: (CreateShopifyDiscountCodeResult | null);

  triggerUpdateShopifyDiscountCode: (UpdateShopifyDiscountCodeResult | null);

  triggerDeleteShopifyDiscountCode: (DeleteShopifyDiscountCodeResult | null);

  createShopifyEvent: (InternalCreateShopifyEventResult | null);

  updateShopifyEvent: (InternalUpdateShopifyEventResult | null);

  deleteShopifyEvent: (InternalDeleteShopifyEventResult | null);

  deleteManyShopifyEvent: (InternalDeleteManyShopifyEventResult | null);

  bulkCreateShopifyEvents: (InternalBulkCreateShopifyEventsResult | null);

  triggerCreateShopifyEvent: (CreateShopifyEventResult | null);

  triggerUpdateShopifyEvent: (UpdateShopifyEventResult | null);

  triggerDeleteShopifyEvent: (DeleteShopifyEventResult | null);

  createShopifyFile: (InternalCreateShopifyFileResult | null);

  updateShopifyFile: (InternalUpdateShopifyFileResult | null);

  deleteShopifyFile: (InternalDeleteShopifyFileResult | null);

  deleteManyShopifyFile: (InternalDeleteManyShopifyFileResult | null);

  bulkCreateShopifyFiles: (InternalBulkCreateShopifyFilesResult | null);

  triggerCreateShopifyFile: (CreateShopifyFileResult | null);

  triggerUpdateShopifyFile: (UpdateShopifyFileResult | null);

  triggerDeleteShopifyFile: (DeleteShopifyFileResult | null);

  createShopifyGdprRequest: (InternalCreateShopifyGdprRequestResult | null);

  updateShopifyGdprRequest: (InternalUpdateShopifyGdprRequestResult | null);

  deleteShopifyGdprRequest: (InternalDeleteShopifyGdprRequestResult | null);

  deleteManyShopifyGdprRequest: (InternalDeleteManyShopifyGdprRequestResult | null);

  bulkCreateShopifyGdprRequests: (InternalBulkCreateShopifyGdprRequestsResult | null);

  triggerCreateShopifyGdprRequest: (CreateShopifyGdprRequestResult | null);

  triggerUpdateShopifyGdprRequest: (UpdateShopifyGdprRequestResult | null);

  createShopifyInventoryItem: (InternalCreateShopifyInventoryItemResult | null);

  updateShopifyInventoryItem: (InternalUpdateShopifyInventoryItemResult | null);

  deleteShopifyInventoryItem: (InternalDeleteShopifyInventoryItemResult | null);

  deleteManyShopifyInventoryItem: (InternalDeleteManyShopifyInventoryItemResult | null);

  bulkCreateShopifyInventoryItems: (InternalBulkCreateShopifyInventoryItemsResult | null);

  triggerCreateShopifyInventoryItem: (CreateShopifyInventoryItemResult | null);

  triggerUpdateShopifyInventoryItem: (UpdateShopifyInventoryItemResult | null);

  triggerDeleteShopifyInventoryItem: (DeleteShopifyInventoryItemResult | null);

  createShopifyInventoryLevel: (InternalCreateShopifyInventoryLevelResult | null);

  updateShopifyInventoryLevel: (InternalUpdateShopifyInventoryLevelResult | null);

  deleteShopifyInventoryLevel: (InternalDeleteShopifyInventoryLevelResult | null);

  deleteManyShopifyInventoryLevel: (InternalDeleteManyShopifyInventoryLevelResult | null);

  bulkCreateShopifyInventoryLevels: (InternalBulkCreateShopifyInventoryLevelsResult | null);

  triggerCreateShopifyInventoryLevel: (CreateShopifyInventoryLevelResult | null);

  triggerUpdateShopifyInventoryLevel: (UpdateShopifyInventoryLevelResult | null);

  triggerDeleteShopifyInventoryLevel: (DeleteShopifyInventoryLevelResult | null);

  createShopifyLocation: (InternalCreateShopifyLocationResult | null);

  updateShopifyLocation: (InternalUpdateShopifyLocationResult | null);

  deleteShopifyLocation: (InternalDeleteShopifyLocationResult | null);

  deleteManyShopifyLocation: (InternalDeleteManyShopifyLocationResult | null);

  bulkCreateShopifyLocations: (InternalBulkCreateShopifyLocationsResult | null);

  triggerCreateShopifyLocation: (CreateShopifyLocationResult | null);

  triggerUpdateShopifyLocation: (UpdateShopifyLocationResult | null);

  triggerDeleteShopifyLocation: (DeleteShopifyLocationResult | null);

  createShopifyPage: (InternalCreateShopifyPageResult | null);

  updateShopifyPage: (InternalUpdateShopifyPageResult | null);

  deleteShopifyPage: (InternalDeleteShopifyPageResult | null);

  deleteManyShopifyPage: (InternalDeleteManyShopifyPageResult | null);

  bulkCreateShopifyPages: (InternalBulkCreateShopifyPagesResult | null);

  triggerCreateShopifyPage: (CreateShopifyPageResult | null);

  triggerUpdateShopifyPage: (UpdateShopifyPageResult | null);

  triggerDeleteShopifyPage: (DeleteShopifyPageResult | null);

  createShopifyPriceRule: (InternalCreateShopifyPriceRuleResult | null);

  updateShopifyPriceRule: (InternalUpdateShopifyPriceRuleResult | null);

  deleteShopifyPriceRule: (InternalDeleteShopifyPriceRuleResult | null);

  deleteManyShopifyPriceRule: (InternalDeleteManyShopifyPriceRuleResult | null);

  bulkCreateShopifyPriceRules: (InternalBulkCreateShopifyPriceRulesResult | null);

  triggerCreateShopifyPriceRule: (CreateShopifyPriceRuleResult | null);

  triggerUpdateShopifyPriceRule: (UpdateShopifyPriceRuleResult | null);

  triggerDeleteShopifyPriceRule: (DeleteShopifyPriceRuleResult | null);

  createShopifyProduct: (InternalCreateShopifyProductResult | null);

  updateShopifyProduct: (InternalUpdateShopifyProductResult | null);

  deleteShopifyProduct: (InternalDeleteShopifyProductResult | null);

  deleteManyShopifyProduct: (InternalDeleteManyShopifyProductResult | null);

  bulkCreateShopifyProducts: (InternalBulkCreateShopifyProductsResult | null);

  triggerCreateShopifyProduct: (CreateShopifyProductResult | null);

  triggerUpdateShopifyProduct: (UpdateShopifyProductResult | null);

  triggerDeleteShopifyProduct: (DeleteShopifyProductResult | null);

  createShopifyProductImage: (InternalCreateShopifyProductImageResult | null);

  updateShopifyProductImage: (InternalUpdateShopifyProductImageResult | null);

  deleteShopifyProductImage: (InternalDeleteShopifyProductImageResult | null);

  deleteManyShopifyProductImage: (InternalDeleteManyShopifyProductImageResult | null);

  bulkCreateShopifyProductImages: (InternalBulkCreateShopifyProductImagesResult | null);

  triggerCreateShopifyProductImage: (CreateShopifyProductImageResult | null);

  triggerUpdateShopifyProductImage: (UpdateShopifyProductImageResult | null);

  triggerDeleteShopifyProductImage: (DeleteShopifyProductImageResult | null);

  createShopifyProductOption: (InternalCreateShopifyProductOptionResult | null);

  updateShopifyProductOption: (InternalUpdateShopifyProductOptionResult | null);

  deleteShopifyProductOption: (InternalDeleteShopifyProductOptionResult | null);

  deleteManyShopifyProductOption: (InternalDeleteManyShopifyProductOptionResult | null);

  bulkCreateShopifyProductOptions: (InternalBulkCreateShopifyProductOptionsResult | null);

  triggerCreateShopifyProductOption: (CreateShopifyProductOptionResult | null);

  triggerUpdateShopifyProductOption: (UpdateShopifyProductOptionResult | null);

  triggerDeleteShopifyProductOption: (DeleteShopifyProductOptionResult | null);

  createShopifyProductVariant: (InternalCreateShopifyProductVariantResult | null);

  updateShopifyProductVariant: (InternalUpdateShopifyProductVariantResult | null);

  deleteShopifyProductVariant: (InternalDeleteShopifyProductVariantResult | null);

  deleteManyShopifyProductVariant: (InternalDeleteManyShopifyProductVariantResult | null);

  bulkCreateShopifyProductVariants: (InternalBulkCreateShopifyProductVariantsResult | null);

  triggerCreateShopifyProductVariant: (CreateShopifyProductVariantResult | null);

  triggerUpdateShopifyProductVariant: (UpdateShopifyProductVariantResult | null);

  triggerDeleteShopifyProductVariant: (DeleteShopifyProductVariantResult | null);

  createShopifyRedirect: (InternalCreateShopifyRedirectResult | null);

  updateShopifyRedirect: (InternalUpdateShopifyRedirectResult | null);

  deleteShopifyRedirect: (InternalDeleteShopifyRedirectResult | null);

  deleteManyShopifyRedirect: (InternalDeleteManyShopifyRedirectResult | null);

  bulkCreateShopifyRedirects: (InternalBulkCreateShopifyRedirectsResult | null);

  triggerCreateShopifyRedirect: (CreateShopifyRedirectResult | null);

  triggerUpdateShopifyRedirect: (UpdateShopifyRedirectResult | null);

  triggerDeleteShopifyRedirect: (DeleteShopifyRedirectResult | null);

  createShopifyShop: (InternalCreateShopifyShopResult | null);

  updateShopifyShop: (InternalUpdateShopifyShopResult | null);

  deleteShopifyShop: (InternalDeleteShopifyShopResult | null);

  deleteManyShopifyShop: (InternalDeleteManyShopifyShopResult | null);

  bulkCreateShopifyShops: (InternalBulkCreateShopifyShopsResult | null);

  triggerUpdateShopifyShop: (UpdateShopifyShopResult | null);

  triggerInstallShopifyShop: (InstallShopifyShopResult | null);

  triggerUninstallShopifyShop: (UninstallShopifyShopResult | null);

  triggerReinstallShopifyShop: (ReinstallShopifyShopResult | null);

  triggerActionAShopifyShop: (ActionAShopifyShopResult | null);

  createShopifySync: (InternalCreateShopifySyncResult | null);

  updateShopifySync: (InternalUpdateShopifySyncResult | null);

  deleteShopifySync: (InternalDeleteShopifySyncResult | null);

  deleteManyShopifySync: (InternalDeleteManyShopifySyncResult | null);

  bulkCreateShopifySyncs: (InternalBulkCreateShopifySyncsResult | null);

  triggerRunShopifySync: (RunShopifySyncResult | null);

  triggerCompleteShopifySync: (CompleteShopifySyncResult | null);

  triggerErrorShopifySync: (ErrorShopifySyncResult | null);

  createBlogPipeArticle: (InternalCreateBlogPipeArticleResult | null);

  updateBlogPipeArticle: (InternalUpdateBlogPipeArticleResult | null);

  deleteBlogPipeArticle: (InternalDeleteBlogPipeArticleResult | null);

  deleteManyBlogPipeArticle: (InternalDeleteManyBlogPipeArticleResult | null);

  bulkCreateBlogPipeArticles: (InternalBulkCreateBlogPipeArticlesResult | null);

  triggerCreateBlogPipeArticle: (CreateBlogPipeArticleResult | null);

  triggerUpdateBlogPipeArticle: (UpdateBlogPipeArticleResult | null);

  triggerDeleteBlogPipeArticle: (DeleteBlogPipeArticleResult | null);

  createSession: (InternalCreateSessionResult | null);

  updateSession: (InternalUpdateSessionResult | null);

  deleteSession: (InternalDeleteSessionResult | null);

  deleteManySession: (InternalDeleteManySessionResult | null);

  bulkCreateSessions: (InternalBulkCreateSessionsResult | null);

  createBlogPipeTopics: (InternalCreateBlogPipeTopicsResult | null);

  updateBlogPipeTopics: (InternalUpdateBlogPipeTopicsResult | null);

  deleteBlogPipeTopics: (InternalDeleteBlogPipeTopicsResult | null);

  deleteManyBlogPipeTopics: (InternalDeleteManyBlogPipeTopicsResult | null);

  bulkCreateBlogPipeTopicss: (InternalBulkCreateBlogPipeTopicssResult | null);

  triggerCreateBlogPipeTopics: (CreateBlogPipeTopicsResult | null);

  triggerUpdateBlogPipeTopics: (UpdateBlogPipeTopicsResult | null);

  triggerDeleteBlogPipeTopics: (DeleteBlogPipeTopicsResult | null);

  triggerActionABlogPipeTopics: (ActionABlogPipeTopicsResult | null);

  triggerGlobalShopifySync: (GlobalShopifySyncResult | null);
};



export type AvailableInternalMutationsSelection = {

  __typename?: boolean | null | undefined;

  startTransaction?: boolean | null | undefined;

  commitTransaction?: boolean | null | undefined;

  rollbackTransaction?: boolean | null | undefined;

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock?: AvailableLockOperationResultSelection;

  createBlogPipeAds?: AvailableInternalCreateBlogPipeAdsResultSelection;

  updateBlogPipeAds?: AvailableInternalUpdateBlogPipeAdsResultSelection;

  deleteBlogPipeAds?: AvailableInternalDeleteBlogPipeAdsResultSelection;

  deleteManyBlogPipeAds?: AvailableInternalDeleteManyBlogPipeAdsResultSelection;

  bulkCreateBlogPipeAdss?: AvailableInternalBulkCreateBlogPipeAdssResultSelection;

  triggerCreateBlogPipeAds?: AvailableCreateBlogPipeAdsResultSelection;

  triggerUpdateBlogPipeAds?: AvailableUpdateBlogPipeAdsResultSelection;

  triggerDeleteBlogPipeAds?: AvailableDeleteBlogPipeAdsResultSelection;

  createShopifyArticle?: AvailableInternalCreateShopifyArticleResultSelection;

  updateShopifyArticle?: AvailableInternalUpdateShopifyArticleResultSelection;

  deleteShopifyArticle?: AvailableInternalDeleteShopifyArticleResultSelection;

  deleteManyShopifyArticle?: AvailableInternalDeleteManyShopifyArticleResultSelection;

  bulkCreateShopifyArticles?: AvailableInternalBulkCreateShopifyArticlesResultSelection;

  triggerCreateShopifyArticle?: AvailableCreateShopifyArticleResultSelection;

  triggerUpdateShopifyArticle?: AvailableUpdateShopifyArticleResultSelection;

  triggerDeleteShopifyArticle?: AvailableDeleteShopifyArticleResultSelection;

  createShopifyBlog?: AvailableInternalCreateShopifyBlogResultSelection;

  updateShopifyBlog?: AvailableInternalUpdateShopifyBlogResultSelection;

  deleteShopifyBlog?: AvailableInternalDeleteShopifyBlogResultSelection;

  deleteManyShopifyBlog?: AvailableInternalDeleteManyShopifyBlogResultSelection;

  bulkCreateShopifyBlogs?: AvailableInternalBulkCreateShopifyBlogsResultSelection;

  triggerCreateShopifyBlog?: AvailableCreateShopifyBlogResultSelection;

  triggerUpdateShopifyBlog?: AvailableUpdateShopifyBlogResultSelection;

  triggerDeleteShopifyBlog?: AvailableDeleteShopifyBlogResultSelection;

  createShopifyCollect?: AvailableInternalCreateShopifyCollectResultSelection;

  updateShopifyCollect?: AvailableInternalUpdateShopifyCollectResultSelection;

  deleteShopifyCollect?: AvailableInternalDeleteShopifyCollectResultSelection;

  deleteManyShopifyCollect?: AvailableInternalDeleteManyShopifyCollectResultSelection;

  bulkCreateShopifyCollects?: AvailableInternalBulkCreateShopifyCollectsResultSelection;

  triggerCreateShopifyCollect?: AvailableCreateShopifyCollectResultSelection;

  triggerUpdateShopifyCollect?: AvailableUpdateShopifyCollectResultSelection;

  triggerDeleteShopifyCollect?: AvailableDeleteShopifyCollectResultSelection;

  createShopifyCollection?: AvailableInternalCreateShopifyCollectionResultSelection;

  updateShopifyCollection?: AvailableInternalUpdateShopifyCollectionResultSelection;

  deleteShopifyCollection?: AvailableInternalDeleteShopifyCollectionResultSelection;

  deleteManyShopifyCollection?: AvailableInternalDeleteManyShopifyCollectionResultSelection;

  bulkCreateShopifyCollections?: AvailableInternalBulkCreateShopifyCollectionsResultSelection;

  triggerCreateShopifyCollection?: AvailableCreateShopifyCollectionResultSelection;

  triggerUpdateShopifyCollection?: AvailableUpdateShopifyCollectionResultSelection;

  triggerDeleteShopifyCollection?: AvailableDeleteShopifyCollectionResultSelection;

  createShopifyComment?: AvailableInternalCreateShopifyCommentResultSelection;

  updateShopifyComment?: AvailableInternalUpdateShopifyCommentResultSelection;

  deleteShopifyComment?: AvailableInternalDeleteShopifyCommentResultSelection;

  deleteManyShopifyComment?: AvailableInternalDeleteManyShopifyCommentResultSelection;

  bulkCreateShopifyComments?: AvailableInternalBulkCreateShopifyCommentsResultSelection;

  triggerCreateShopifyComment?: AvailableCreateShopifyCommentResultSelection;

  triggerUpdateShopifyComment?: AvailableUpdateShopifyCommentResultSelection;

  triggerDeleteShopifyComment?: AvailableDeleteShopifyCommentResultSelection;

  createShopifyDiscount?: AvailableInternalCreateShopifyDiscountResultSelection;

  updateShopifyDiscount?: AvailableInternalUpdateShopifyDiscountResultSelection;

  deleteShopifyDiscount?: AvailableInternalDeleteShopifyDiscountResultSelection;

  deleteManyShopifyDiscount?: AvailableInternalDeleteManyShopifyDiscountResultSelection;

  bulkCreateShopifyDiscounts?: AvailableInternalBulkCreateShopifyDiscountsResultSelection;

  triggerCreateShopifyDiscount?: AvailableCreateShopifyDiscountResultSelection;

  triggerUpdateShopifyDiscount?: AvailableUpdateShopifyDiscountResultSelection;

  triggerDeleteShopifyDiscount?: AvailableDeleteShopifyDiscountResultSelection;

  createShopifyDiscountCode?: AvailableInternalCreateShopifyDiscountCodeResultSelection;

  updateShopifyDiscountCode?: AvailableInternalUpdateShopifyDiscountCodeResultSelection;

  deleteShopifyDiscountCode?: AvailableInternalDeleteShopifyDiscountCodeResultSelection;

  deleteManyShopifyDiscountCode?: AvailableInternalDeleteManyShopifyDiscountCodeResultSelection;

  bulkCreateShopifyDiscountCodes?: AvailableInternalBulkCreateShopifyDiscountCodesResultSelection;

  triggerCreateShopifyDiscountCode?: AvailableCreateShopifyDiscountCodeResultSelection;

  triggerUpdateShopifyDiscountCode?: AvailableUpdateShopifyDiscountCodeResultSelection;

  triggerDeleteShopifyDiscountCode?: AvailableDeleteShopifyDiscountCodeResultSelection;

  createShopifyEvent?: AvailableInternalCreateShopifyEventResultSelection;

  updateShopifyEvent?: AvailableInternalUpdateShopifyEventResultSelection;

  deleteShopifyEvent?: AvailableInternalDeleteShopifyEventResultSelection;

  deleteManyShopifyEvent?: AvailableInternalDeleteManyShopifyEventResultSelection;

  bulkCreateShopifyEvents?: AvailableInternalBulkCreateShopifyEventsResultSelection;

  triggerCreateShopifyEvent?: AvailableCreateShopifyEventResultSelection;

  triggerUpdateShopifyEvent?: AvailableUpdateShopifyEventResultSelection;

  triggerDeleteShopifyEvent?: AvailableDeleteShopifyEventResultSelection;

  createShopifyFile?: AvailableInternalCreateShopifyFileResultSelection;

  updateShopifyFile?: AvailableInternalUpdateShopifyFileResultSelection;

  deleteShopifyFile?: AvailableInternalDeleteShopifyFileResultSelection;

  deleteManyShopifyFile?: AvailableInternalDeleteManyShopifyFileResultSelection;

  bulkCreateShopifyFiles?: AvailableInternalBulkCreateShopifyFilesResultSelection;

  triggerCreateShopifyFile?: AvailableCreateShopifyFileResultSelection;

  triggerUpdateShopifyFile?: AvailableUpdateShopifyFileResultSelection;

  triggerDeleteShopifyFile?: AvailableDeleteShopifyFileResultSelection;

  createShopifyGdprRequest?: AvailableInternalCreateShopifyGdprRequestResultSelection;

  updateShopifyGdprRequest?: AvailableInternalUpdateShopifyGdprRequestResultSelection;

  deleteShopifyGdprRequest?: AvailableInternalDeleteShopifyGdprRequestResultSelection;

  deleteManyShopifyGdprRequest?: AvailableInternalDeleteManyShopifyGdprRequestResultSelection;

  bulkCreateShopifyGdprRequests?: AvailableInternalBulkCreateShopifyGdprRequestsResultSelection;

  triggerCreateShopifyGdprRequest?: AvailableCreateShopifyGdprRequestResultSelection;

  triggerUpdateShopifyGdprRequest?: AvailableUpdateShopifyGdprRequestResultSelection;

  createShopifyInventoryItem?: AvailableInternalCreateShopifyInventoryItemResultSelection;

  updateShopifyInventoryItem?: AvailableInternalUpdateShopifyInventoryItemResultSelection;

  deleteShopifyInventoryItem?: AvailableInternalDeleteShopifyInventoryItemResultSelection;

  deleteManyShopifyInventoryItem?: AvailableInternalDeleteManyShopifyInventoryItemResultSelection;

  bulkCreateShopifyInventoryItems?: AvailableInternalBulkCreateShopifyInventoryItemsResultSelection;

  triggerCreateShopifyInventoryItem?: AvailableCreateShopifyInventoryItemResultSelection;

  triggerUpdateShopifyInventoryItem?: AvailableUpdateShopifyInventoryItemResultSelection;

  triggerDeleteShopifyInventoryItem?: AvailableDeleteShopifyInventoryItemResultSelection;

  createShopifyInventoryLevel?: AvailableInternalCreateShopifyInventoryLevelResultSelection;

  updateShopifyInventoryLevel?: AvailableInternalUpdateShopifyInventoryLevelResultSelection;

  deleteShopifyInventoryLevel?: AvailableInternalDeleteShopifyInventoryLevelResultSelection;

  deleteManyShopifyInventoryLevel?: AvailableInternalDeleteManyShopifyInventoryLevelResultSelection;

  bulkCreateShopifyInventoryLevels?: AvailableInternalBulkCreateShopifyInventoryLevelsResultSelection;

  triggerCreateShopifyInventoryLevel?: AvailableCreateShopifyInventoryLevelResultSelection;

  triggerUpdateShopifyInventoryLevel?: AvailableUpdateShopifyInventoryLevelResultSelection;

  triggerDeleteShopifyInventoryLevel?: AvailableDeleteShopifyInventoryLevelResultSelection;

  createShopifyLocation?: AvailableInternalCreateShopifyLocationResultSelection;

  updateShopifyLocation?: AvailableInternalUpdateShopifyLocationResultSelection;

  deleteShopifyLocation?: AvailableInternalDeleteShopifyLocationResultSelection;

  deleteManyShopifyLocation?: AvailableInternalDeleteManyShopifyLocationResultSelection;

  bulkCreateShopifyLocations?: AvailableInternalBulkCreateShopifyLocationsResultSelection;

  triggerCreateShopifyLocation?: AvailableCreateShopifyLocationResultSelection;

  triggerUpdateShopifyLocation?: AvailableUpdateShopifyLocationResultSelection;

  triggerDeleteShopifyLocation?: AvailableDeleteShopifyLocationResultSelection;

  createShopifyPage?: AvailableInternalCreateShopifyPageResultSelection;

  updateShopifyPage?: AvailableInternalUpdateShopifyPageResultSelection;

  deleteShopifyPage?: AvailableInternalDeleteShopifyPageResultSelection;

  deleteManyShopifyPage?: AvailableInternalDeleteManyShopifyPageResultSelection;

  bulkCreateShopifyPages?: AvailableInternalBulkCreateShopifyPagesResultSelection;

  triggerCreateShopifyPage?: AvailableCreateShopifyPageResultSelection;

  triggerUpdateShopifyPage?: AvailableUpdateShopifyPageResultSelection;

  triggerDeleteShopifyPage?: AvailableDeleteShopifyPageResultSelection;

  createShopifyPriceRule?: AvailableInternalCreateShopifyPriceRuleResultSelection;

  updateShopifyPriceRule?: AvailableInternalUpdateShopifyPriceRuleResultSelection;

  deleteShopifyPriceRule?: AvailableInternalDeleteShopifyPriceRuleResultSelection;

  deleteManyShopifyPriceRule?: AvailableInternalDeleteManyShopifyPriceRuleResultSelection;

  bulkCreateShopifyPriceRules?: AvailableInternalBulkCreateShopifyPriceRulesResultSelection;

  triggerCreateShopifyPriceRule?: AvailableCreateShopifyPriceRuleResultSelection;

  triggerUpdateShopifyPriceRule?: AvailableUpdateShopifyPriceRuleResultSelection;

  triggerDeleteShopifyPriceRule?: AvailableDeleteShopifyPriceRuleResultSelection;

  createShopifyProduct?: AvailableInternalCreateShopifyProductResultSelection;

  updateShopifyProduct?: AvailableInternalUpdateShopifyProductResultSelection;

  deleteShopifyProduct?: AvailableInternalDeleteShopifyProductResultSelection;

  deleteManyShopifyProduct?: AvailableInternalDeleteManyShopifyProductResultSelection;

  bulkCreateShopifyProducts?: AvailableInternalBulkCreateShopifyProductsResultSelection;

  triggerCreateShopifyProduct?: AvailableCreateShopifyProductResultSelection;

  triggerUpdateShopifyProduct?: AvailableUpdateShopifyProductResultSelection;

  triggerDeleteShopifyProduct?: AvailableDeleteShopifyProductResultSelection;

  createShopifyProductImage?: AvailableInternalCreateShopifyProductImageResultSelection;

  updateShopifyProductImage?: AvailableInternalUpdateShopifyProductImageResultSelection;

  deleteShopifyProductImage?: AvailableInternalDeleteShopifyProductImageResultSelection;

  deleteManyShopifyProductImage?: AvailableInternalDeleteManyShopifyProductImageResultSelection;

  bulkCreateShopifyProductImages?: AvailableInternalBulkCreateShopifyProductImagesResultSelection;

  triggerCreateShopifyProductImage?: AvailableCreateShopifyProductImageResultSelection;

  triggerUpdateShopifyProductImage?: AvailableUpdateShopifyProductImageResultSelection;

  triggerDeleteShopifyProductImage?: AvailableDeleteShopifyProductImageResultSelection;

  createShopifyProductOption?: AvailableInternalCreateShopifyProductOptionResultSelection;

  updateShopifyProductOption?: AvailableInternalUpdateShopifyProductOptionResultSelection;

  deleteShopifyProductOption?: AvailableInternalDeleteShopifyProductOptionResultSelection;

  deleteManyShopifyProductOption?: AvailableInternalDeleteManyShopifyProductOptionResultSelection;

  bulkCreateShopifyProductOptions?: AvailableInternalBulkCreateShopifyProductOptionsResultSelection;

  triggerCreateShopifyProductOption?: AvailableCreateShopifyProductOptionResultSelection;

  triggerUpdateShopifyProductOption?: AvailableUpdateShopifyProductOptionResultSelection;

  triggerDeleteShopifyProductOption?: AvailableDeleteShopifyProductOptionResultSelection;

  createShopifyProductVariant?: AvailableInternalCreateShopifyProductVariantResultSelection;

  updateShopifyProductVariant?: AvailableInternalUpdateShopifyProductVariantResultSelection;

  deleteShopifyProductVariant?: AvailableInternalDeleteShopifyProductVariantResultSelection;

  deleteManyShopifyProductVariant?: AvailableInternalDeleteManyShopifyProductVariantResultSelection;

  bulkCreateShopifyProductVariants?: AvailableInternalBulkCreateShopifyProductVariantsResultSelection;

  triggerCreateShopifyProductVariant?: AvailableCreateShopifyProductVariantResultSelection;

  triggerUpdateShopifyProductVariant?: AvailableUpdateShopifyProductVariantResultSelection;

  triggerDeleteShopifyProductVariant?: AvailableDeleteShopifyProductVariantResultSelection;

  createShopifyRedirect?: AvailableInternalCreateShopifyRedirectResultSelection;

  updateShopifyRedirect?: AvailableInternalUpdateShopifyRedirectResultSelection;

  deleteShopifyRedirect?: AvailableInternalDeleteShopifyRedirectResultSelection;

  deleteManyShopifyRedirect?: AvailableInternalDeleteManyShopifyRedirectResultSelection;

  bulkCreateShopifyRedirects?: AvailableInternalBulkCreateShopifyRedirectsResultSelection;

  triggerCreateShopifyRedirect?: AvailableCreateShopifyRedirectResultSelection;

  triggerUpdateShopifyRedirect?: AvailableUpdateShopifyRedirectResultSelection;

  triggerDeleteShopifyRedirect?: AvailableDeleteShopifyRedirectResultSelection;

  createShopifyShop?: AvailableInternalCreateShopifyShopResultSelection;

  updateShopifyShop?: AvailableInternalUpdateShopifyShopResultSelection;

  deleteShopifyShop?: AvailableInternalDeleteShopifyShopResultSelection;

  deleteManyShopifyShop?: AvailableInternalDeleteManyShopifyShopResultSelection;

  bulkCreateShopifyShops?: AvailableInternalBulkCreateShopifyShopsResultSelection;

  triggerUpdateShopifyShop?: AvailableUpdateShopifyShopResultSelection;

  triggerInstallShopifyShop?: AvailableInstallShopifyShopResultSelection;

  triggerUninstallShopifyShop?: AvailableUninstallShopifyShopResultSelection;

  triggerReinstallShopifyShop?: AvailableReinstallShopifyShopResultSelection;

  triggerActionAShopifyShop?: AvailableActionAShopifyShopResultSelection;

  createShopifySync?: AvailableInternalCreateShopifySyncResultSelection;

  updateShopifySync?: AvailableInternalUpdateShopifySyncResultSelection;

  deleteShopifySync?: AvailableInternalDeleteShopifySyncResultSelection;

  deleteManyShopifySync?: AvailableInternalDeleteManyShopifySyncResultSelection;

  bulkCreateShopifySyncs?: AvailableInternalBulkCreateShopifySyncsResultSelection;

  triggerRunShopifySync?: AvailableRunShopifySyncResultSelection;

  triggerCompleteShopifySync?: AvailableCompleteShopifySyncResultSelection;

  triggerErrorShopifySync?: AvailableErrorShopifySyncResultSelection;

  createBlogPipeArticle?: AvailableInternalCreateBlogPipeArticleResultSelection;

  updateBlogPipeArticle?: AvailableInternalUpdateBlogPipeArticleResultSelection;

  deleteBlogPipeArticle?: AvailableInternalDeleteBlogPipeArticleResultSelection;

  deleteManyBlogPipeArticle?: AvailableInternalDeleteManyBlogPipeArticleResultSelection;

  bulkCreateBlogPipeArticles?: AvailableInternalBulkCreateBlogPipeArticlesResultSelection;

  triggerCreateBlogPipeArticle?: AvailableCreateBlogPipeArticleResultSelection;

  triggerUpdateBlogPipeArticle?: AvailableUpdateBlogPipeArticleResultSelection;

  triggerDeleteBlogPipeArticle?: AvailableDeleteBlogPipeArticleResultSelection;

  createSession?: AvailableInternalCreateSessionResultSelection;

  updateSession?: AvailableInternalUpdateSessionResultSelection;

  deleteSession?: AvailableInternalDeleteSessionResultSelection;

  deleteManySession?: AvailableInternalDeleteManySessionResultSelection;

  bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;

  createBlogPipeTopics?: AvailableInternalCreateBlogPipeTopicsResultSelection;

  updateBlogPipeTopics?: AvailableInternalUpdateBlogPipeTopicsResultSelection;

  deleteBlogPipeTopics?: AvailableInternalDeleteBlogPipeTopicsResultSelection;

  deleteManyBlogPipeTopics?: AvailableInternalDeleteManyBlogPipeTopicsResultSelection;

  bulkCreateBlogPipeTopicss?: AvailableInternalBulkCreateBlogPipeTopicssResultSelection;

  triggerCreateBlogPipeTopics?: AvailableCreateBlogPipeTopicsResultSelection;

  triggerUpdateBlogPipeTopics?: AvailableUpdateBlogPipeTopicsResultSelection;

  triggerDeleteBlogPipeTopics?: AvailableDeleteBlogPipeTopicsResultSelection;

  triggerActionABlogPipeTopics?: AvailableActionABlogPipeTopicsResultSelection;

  triggerGlobalShopifySync?: AvailableGlobalShopifySyncResultSelection;
};



export type LockOperationResult = {

  __typename: 'LockOperationResult';

  /** Whether the lock operation succeeded */
  success: Scalars['Boolean'];

  /** Any errors encountered during the locking/unlocking operation */
  errors: ExecutionError[];
};



export type AvailableLockOperationResultSelection = {

  __typename?: boolean | null | undefined;

  /** Whether the lock operation succeeded */
  success?: boolean | null | undefined;

  /** Any errors encountered during the locking/unlocking operation */
  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateBlogPipeAdsResult = {

  __typename: 'InternalCreateBlogPipeAdsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeAds: (InternalBlogPipeAdsRecord | null);
};



export type AvailableInternalCreateBlogPipeAdsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeAds?: boolean | null | undefined;
};



export type InternalUpdateBlogPipeAdsResult = {

  __typename: 'InternalUpdateBlogPipeAdsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeAds: (InternalBlogPipeAdsRecord | null);
};



export type AvailableInternalUpdateBlogPipeAdsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeAds?: boolean | null | undefined;
};



export type InternalDeleteBlogPipeAdsResult = {

  __typename: 'InternalDeleteBlogPipeAdsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeAds: (InternalBlogPipeAdsRecord | null);
};



export type AvailableInternalDeleteBlogPipeAdsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeAds?: boolean | null | undefined;
};



export type InternalDeleteManyBlogPipeAdsResult = {

  __typename: 'InternalDeleteManyBlogPipeAdsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyBlogPipeAdsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateBlogPipeAdssResult = {

  __typename: 'InternalBulkCreateBlogPipeAdssResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeAdss: (InternalBlogPipeAdsRecord | null)[];
};



export type AvailableInternalBulkCreateBlogPipeAdssResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeAdss?: boolean | null | undefined;
};



export type InternalCreateShopifyArticleResult = {

  __typename: 'InternalCreateShopifyArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyArticle: (InternalShopifyArticleRecord | null);
};



export type AvailableInternalCreateShopifyArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyArticle?: boolean | null | undefined;
};



export type InternalUpdateShopifyArticleResult = {

  __typename: 'InternalUpdateShopifyArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyArticle: (InternalShopifyArticleRecord | null);
};



export type AvailableInternalUpdateShopifyArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyArticle?: boolean | null | undefined;
};



export type InternalDeleteShopifyArticleResult = {

  __typename: 'InternalDeleteShopifyArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyArticle: (InternalShopifyArticleRecord | null);
};



export type AvailableInternalDeleteShopifyArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyArticle?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyArticleResult = {

  __typename: 'InternalDeleteManyShopifyArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyArticlesResult = {

  __typename: 'InternalBulkCreateShopifyArticlesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyArticles: (InternalShopifyArticleRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyArticlesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyArticles?: boolean | null | undefined;
};



export type CreateShopifyArticleResult = {

  __typename: 'CreateShopifyArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyArticle: (ShopifyArticle | null);
};



export type AvailableCreateShopifyArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyArticle?: AvailableShopifyArticleSelection;
};



export type UpdateShopifyArticleResult = {

  __typename: 'UpdateShopifyArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyArticle: (ShopifyArticle | null);
};



export type AvailableUpdateShopifyArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyArticle?: AvailableShopifyArticleSelection;
};



export type DeleteShopifyArticleResult = {

  __typename: 'DeleteShopifyArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyBlogResult = {

  __typename: 'InternalCreateShopifyBlogResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBlog: (InternalShopifyBlogRecord | null);
};



export type AvailableInternalCreateShopifyBlogResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBlog?: boolean | null | undefined;
};



export type InternalUpdateShopifyBlogResult = {

  __typename: 'InternalUpdateShopifyBlogResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBlog: (InternalShopifyBlogRecord | null);
};



export type AvailableInternalUpdateShopifyBlogResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBlog?: boolean | null | undefined;
};



export type InternalDeleteShopifyBlogResult = {

  __typename: 'InternalDeleteShopifyBlogResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBlog: (InternalShopifyBlogRecord | null);
};



export type AvailableInternalDeleteShopifyBlogResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBlog?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyBlogResult = {

  __typename: 'InternalDeleteManyShopifyBlogResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyBlogResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyBlogsResult = {

  __typename: 'InternalBulkCreateShopifyBlogsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBlogs: (InternalShopifyBlogRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyBlogsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBlogs?: boolean | null | undefined;
};



export type CreateShopifyBlogResult = {

  __typename: 'CreateShopifyBlogResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBlog: (ShopifyBlog | null);
};



export type AvailableCreateShopifyBlogResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBlog?: AvailableShopifyBlogSelection;
};



export type UpdateShopifyBlogResult = {

  __typename: 'UpdateShopifyBlogResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBlog: (ShopifyBlog | null);
};



export type AvailableUpdateShopifyBlogResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBlog?: AvailableShopifyBlogSelection;
};



export type DeleteShopifyBlogResult = {

  __typename: 'DeleteShopifyBlogResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyBlogResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCollectResult = {

  __typename: 'InternalCreateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (InternalShopifyCollectRecord | null);
};



export type AvailableInternalCreateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: boolean | null | undefined;
};



export type InternalUpdateShopifyCollectResult = {

  __typename: 'InternalUpdateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (InternalShopifyCollectRecord | null);
};



export type AvailableInternalUpdateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: boolean | null | undefined;
};



export type InternalDeleteShopifyCollectResult = {

  __typename: 'InternalDeleteShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (InternalShopifyCollectRecord | null);
};



export type AvailableInternalDeleteShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCollectResult = {

  __typename: 'InternalDeleteManyShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCollectsResult = {

  __typename: 'InternalBulkCreateShopifyCollectsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollects: (InternalShopifyCollectRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCollectsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollects?: boolean | null | undefined;
};



export type CreateShopifyCollectResult = {

  __typename: 'CreateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (ShopifyCollect | null);
};



export type AvailableCreateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: AvailableShopifyCollectSelection;
};



export type UpdateShopifyCollectResult = {

  __typename: 'UpdateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (ShopifyCollect | null);
};



export type AvailableUpdateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: AvailableShopifyCollectSelection;
};



export type DeleteShopifyCollectResult = {

  __typename: 'DeleteShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCollectionResult = {

  __typename: 'InternalCreateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (InternalShopifyCollectionRecord | null);
};



export type AvailableInternalCreateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: boolean | null | undefined;
};



export type InternalUpdateShopifyCollectionResult = {

  __typename: 'InternalUpdateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (InternalShopifyCollectionRecord | null);
};



export type AvailableInternalUpdateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: boolean | null | undefined;
};



export type InternalDeleteShopifyCollectionResult = {

  __typename: 'InternalDeleteShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (InternalShopifyCollectionRecord | null);
};



export type AvailableInternalDeleteShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCollectionResult = {

  __typename: 'InternalDeleteManyShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCollectionsResult = {

  __typename: 'InternalBulkCreateShopifyCollectionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollections: (InternalShopifyCollectionRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCollectionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollections?: boolean | null | undefined;
};



export type CreateShopifyCollectionResult = {

  __typename: 'CreateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (ShopifyCollection | null);
};



export type AvailableCreateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: AvailableShopifyCollectionSelection;
};



export type UpdateShopifyCollectionResult = {

  __typename: 'UpdateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (ShopifyCollection | null);
};



export type AvailableUpdateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: AvailableShopifyCollectionSelection;
};



export type DeleteShopifyCollectionResult = {

  __typename: 'DeleteShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCommentResult = {

  __typename: 'InternalCreateShopifyCommentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyComment: (InternalShopifyCommentRecord | null);
};



export type AvailableInternalCreateShopifyCommentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyComment?: boolean | null | undefined;
};



export type InternalUpdateShopifyCommentResult = {

  __typename: 'InternalUpdateShopifyCommentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyComment: (InternalShopifyCommentRecord | null);
};



export type AvailableInternalUpdateShopifyCommentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyComment?: boolean | null | undefined;
};



export type InternalDeleteShopifyCommentResult = {

  __typename: 'InternalDeleteShopifyCommentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyComment: (InternalShopifyCommentRecord | null);
};



export type AvailableInternalDeleteShopifyCommentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyComment?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCommentResult = {

  __typename: 'InternalDeleteManyShopifyCommentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCommentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCommentsResult = {

  __typename: 'InternalBulkCreateShopifyCommentsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyComments: (InternalShopifyCommentRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCommentsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyComments?: boolean | null | undefined;
};



export type CreateShopifyCommentResult = {

  __typename: 'CreateShopifyCommentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyComment: (ShopifyComment | null);
};



export type AvailableCreateShopifyCommentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyComment?: AvailableShopifyCommentSelection;
};



export type UpdateShopifyCommentResult = {

  __typename: 'UpdateShopifyCommentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyComment: (ShopifyComment | null);
};



export type AvailableUpdateShopifyCommentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyComment?: AvailableShopifyCommentSelection;
};



export type DeleteShopifyCommentResult = {

  __typename: 'DeleteShopifyCommentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCommentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyDiscountResult = {

  __typename: 'InternalCreateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (InternalShopifyDiscountRecord | null);
};



export type AvailableInternalCreateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: boolean | null | undefined;
};



export type InternalUpdateShopifyDiscountResult = {

  __typename: 'InternalUpdateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (InternalShopifyDiscountRecord | null);
};



export type AvailableInternalUpdateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: boolean | null | undefined;
};



export type InternalDeleteShopifyDiscountResult = {

  __typename: 'InternalDeleteShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (InternalShopifyDiscountRecord | null);
};



export type AvailableInternalDeleteShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDiscountResult = {

  __typename: 'InternalDeleteManyShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDiscountsResult = {

  __typename: 'InternalBulkCreateShopifyDiscountsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscounts: (InternalShopifyDiscountRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDiscountsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscounts?: boolean | null | undefined;
};



export type CreateShopifyDiscountResult = {

  __typename: 'CreateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (ShopifyDiscount | null);
};



export type AvailableCreateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: AvailableShopifyDiscountSelection;
};



export type UpdateShopifyDiscountResult = {

  __typename: 'UpdateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (ShopifyDiscount | null);
};



export type AvailableUpdateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: AvailableShopifyDiscountSelection;
};



export type DeleteShopifyDiscountResult = {

  __typename: 'DeleteShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyDiscountCodeResult = {

  __typename: 'InternalCreateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);
};



export type AvailableInternalCreateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: boolean | null | undefined;
};



export type InternalUpdateShopifyDiscountCodeResult = {

  __typename: 'InternalUpdateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);
};



export type AvailableInternalUpdateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: boolean | null | undefined;
};



export type InternalDeleteShopifyDiscountCodeResult = {

  __typename: 'InternalDeleteShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);
};



export type AvailableInternalDeleteShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDiscountCodeResult = {

  __typename: 'InternalDeleteManyShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDiscountCodesResult = {

  __typename: 'InternalBulkCreateShopifyDiscountCodesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCodes: (InternalShopifyDiscountCodeRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDiscountCodesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCodes?: boolean | null | undefined;
};



export type CreateShopifyDiscountCodeResult = {

  __typename: 'CreateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (ShopifyDiscountCode | null);
};



export type AvailableCreateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: AvailableShopifyDiscountCodeSelection;
};



export type UpdateShopifyDiscountCodeResult = {

  __typename: 'UpdateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (ShopifyDiscountCode | null);
};



export type AvailableUpdateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: AvailableShopifyDiscountCodeSelection;
};



export type DeleteShopifyDiscountCodeResult = {

  __typename: 'DeleteShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyEventResult = {

  __typename: 'InternalCreateShopifyEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyEvent: (InternalShopifyEventRecord | null);
};



export type AvailableInternalCreateShopifyEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyEvent?: boolean | null | undefined;
};



export type InternalUpdateShopifyEventResult = {

  __typename: 'InternalUpdateShopifyEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyEvent: (InternalShopifyEventRecord | null);
};



export type AvailableInternalUpdateShopifyEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyEvent?: boolean | null | undefined;
};



export type InternalDeleteShopifyEventResult = {

  __typename: 'InternalDeleteShopifyEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyEvent: (InternalShopifyEventRecord | null);
};



export type AvailableInternalDeleteShopifyEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyEvent?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyEventResult = {

  __typename: 'InternalDeleteManyShopifyEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyEventsResult = {

  __typename: 'InternalBulkCreateShopifyEventsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyEvents: (InternalShopifyEventRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyEventsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyEvents?: boolean | null | undefined;
};



export type CreateShopifyEventResult = {

  __typename: 'CreateShopifyEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyEvent: (ShopifyEvent | null);
};



export type AvailableCreateShopifyEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyEvent?: AvailableShopifyEventSelection;
};



export type UpdateShopifyEventResult = {

  __typename: 'UpdateShopifyEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyEvent: (ShopifyEvent | null);
};



export type AvailableUpdateShopifyEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyEvent?: AvailableShopifyEventSelection;
};



export type DeleteShopifyEventResult = {

  __typename: 'DeleteShopifyEventResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyEventResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyFileResult = {

  __typename: 'InternalCreateShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFile: (InternalShopifyFileRecord | null);
};



export type AvailableInternalCreateShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFile?: boolean | null | undefined;
};



export type InternalUpdateShopifyFileResult = {

  __typename: 'InternalUpdateShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFile: (InternalShopifyFileRecord | null);
};



export type AvailableInternalUpdateShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFile?: boolean | null | undefined;
};



export type InternalDeleteShopifyFileResult = {

  __typename: 'InternalDeleteShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFile: (InternalShopifyFileRecord | null);
};



export type AvailableInternalDeleteShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFile?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFileResult = {

  __typename: 'InternalDeleteManyShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFilesResult = {

  __typename: 'InternalBulkCreateShopifyFilesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFiles: (InternalShopifyFileRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFilesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFiles?: boolean | null | undefined;
};



export type CreateShopifyFileResult = {

  __typename: 'CreateShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFile: (ShopifyFile | null);
};



export type AvailableCreateShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFile?: AvailableShopifyFileSelection;
};



export type UpdateShopifyFileResult = {

  __typename: 'UpdateShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFile: (ShopifyFile | null);
};



export type AvailableUpdateShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFile?: AvailableShopifyFileSelection;
};



export type DeleteShopifyFileResult = {

  __typename: 'DeleteShopifyFileResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFileResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyGdprRequestResult = {

  __typename: 'InternalCreateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalUpdateShopifyGdprRequestResult = {

  __typename: 'InternalUpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalDeleteShopifyGdprRequestResult = {

  __typename: 'InternalDeleteShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalDeleteShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyGdprRequestResult = {

  __typename: 'InternalDeleteManyShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyGdprRequestsResult = {

  __typename: 'InternalBulkCreateShopifyGdprRequestsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequests: (InternalShopifyGdprRequestRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyGdprRequestsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequests?: boolean | null | undefined;
};



export type CreateShopifyGdprRequestResult = {

  __typename: 'CreateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (ShopifyGdprRequest | null);
};



export type AvailableCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};



export type UpdateShopifyGdprRequestResult = {

  __typename: 'UpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (ShopifyGdprRequest | null);
};



export type AvailableUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};



export type InternalCreateShopifyInventoryItemResult = {

  __typename: 'InternalCreateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);
};



export type AvailableInternalCreateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyInventoryItemResult = {

  __typename: 'InternalUpdateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);
};



export type AvailableInternalUpdateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyInventoryItemResult = {

  __typename: 'InternalDeleteShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);
};



export type AvailableInternalDeleteShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyInventoryItemResult = {

  __typename: 'InternalDeleteManyShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyInventoryItemsResult = {

  __typename: 'InternalBulkCreateShopifyInventoryItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItems: (InternalShopifyInventoryItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyInventoryItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItems?: boolean | null | undefined;
};



export type CreateShopifyInventoryItemResult = {

  __typename: 'CreateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (ShopifyInventoryItem | null);
};



export type AvailableCreateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: AvailableShopifyInventoryItemSelection;
};



export type UpdateShopifyInventoryItemResult = {

  __typename: 'UpdateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (ShopifyInventoryItem | null);
};



export type AvailableUpdateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: AvailableShopifyInventoryItemSelection;
};



export type DeleteShopifyInventoryItemResult = {

  __typename: 'DeleteShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyInventoryLevelResult = {

  __typename: 'InternalCreateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);
};



export type AvailableInternalCreateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: boolean | null | undefined;
};



export type InternalUpdateShopifyInventoryLevelResult = {

  __typename: 'InternalUpdateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);
};



export type AvailableInternalUpdateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: boolean | null | undefined;
};



export type InternalDeleteShopifyInventoryLevelResult = {

  __typename: 'InternalDeleteShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);
};



export type AvailableInternalDeleteShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyInventoryLevelResult = {

  __typename: 'InternalDeleteManyShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyInventoryLevelsResult = {

  __typename: 'InternalBulkCreateShopifyInventoryLevelsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevels: (InternalShopifyInventoryLevelRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyInventoryLevelsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevels?: boolean | null | undefined;
};



export type CreateShopifyInventoryLevelResult = {

  __typename: 'CreateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (ShopifyInventoryLevel | null);
};



export type AvailableCreateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: AvailableShopifyInventoryLevelSelection;
};



export type UpdateShopifyInventoryLevelResult = {

  __typename: 'UpdateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (ShopifyInventoryLevel | null);
};



export type AvailableUpdateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: AvailableShopifyInventoryLevelSelection;
};



export type DeleteShopifyInventoryLevelResult = {

  __typename: 'DeleteShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyLocationResult = {

  __typename: 'InternalCreateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (InternalShopifyLocationRecord | null);
};



export type AvailableInternalCreateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: boolean | null | undefined;
};



export type InternalUpdateShopifyLocationResult = {

  __typename: 'InternalUpdateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (InternalShopifyLocationRecord | null);
};



export type AvailableInternalUpdateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: boolean | null | undefined;
};



export type InternalDeleteShopifyLocationResult = {

  __typename: 'InternalDeleteShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (InternalShopifyLocationRecord | null);
};



export type AvailableInternalDeleteShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyLocationResult = {

  __typename: 'InternalDeleteManyShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyLocationsResult = {

  __typename: 'InternalBulkCreateShopifyLocationsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocations: (InternalShopifyLocationRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyLocationsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocations?: boolean | null | undefined;
};



export type CreateShopifyLocationResult = {

  __typename: 'CreateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (ShopifyLocation | null);
};



export type AvailableCreateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: AvailableShopifyLocationSelection;
};



export type UpdateShopifyLocationResult = {

  __typename: 'UpdateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (ShopifyLocation | null);
};



export type AvailableUpdateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: AvailableShopifyLocationSelection;
};



export type DeleteShopifyLocationResult = {

  __typename: 'DeleteShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyPageResult = {

  __typename: 'InternalCreateShopifyPageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPage: (InternalShopifyPageRecord | null);
};



export type AvailableInternalCreateShopifyPageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPage?: boolean | null | undefined;
};



export type InternalUpdateShopifyPageResult = {

  __typename: 'InternalUpdateShopifyPageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPage: (InternalShopifyPageRecord | null);
};



export type AvailableInternalUpdateShopifyPageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPage?: boolean | null | undefined;
};



export type InternalDeleteShopifyPageResult = {

  __typename: 'InternalDeleteShopifyPageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPage: (InternalShopifyPageRecord | null);
};



export type AvailableInternalDeleteShopifyPageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPage?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyPageResult = {

  __typename: 'InternalDeleteManyShopifyPageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyPageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyPagesResult = {

  __typename: 'InternalBulkCreateShopifyPagesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPages: (InternalShopifyPageRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyPagesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPages?: boolean | null | undefined;
};



export type CreateShopifyPageResult = {

  __typename: 'CreateShopifyPageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPage: (ShopifyPage | null);
};



export type AvailableCreateShopifyPageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPage?: AvailableShopifyPageSelection;
};



export type UpdateShopifyPageResult = {

  __typename: 'UpdateShopifyPageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPage: (ShopifyPage | null);
};



export type AvailableUpdateShopifyPageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPage?: AvailableShopifyPageSelection;
};



export type DeleteShopifyPageResult = {

  __typename: 'DeleteShopifyPageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyPageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyPriceRuleResult = {

  __typename: 'InternalCreateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);
};



export type AvailableInternalCreateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: boolean | null | undefined;
};



export type InternalUpdateShopifyPriceRuleResult = {

  __typename: 'InternalUpdateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);
};



export type AvailableInternalUpdateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: boolean | null | undefined;
};



export type InternalDeleteShopifyPriceRuleResult = {

  __typename: 'InternalDeleteShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);
};



export type AvailableInternalDeleteShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyPriceRuleResult = {

  __typename: 'InternalDeleteManyShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyPriceRulesResult = {

  __typename: 'InternalBulkCreateShopifyPriceRulesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRules: (InternalShopifyPriceRuleRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyPriceRulesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRules?: boolean | null | undefined;
};



export type CreateShopifyPriceRuleResult = {

  __typename: 'CreateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (ShopifyPriceRule | null);
};



export type AvailableCreateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: AvailableShopifyPriceRuleSelection;
};



export type UpdateShopifyPriceRuleResult = {

  __typename: 'UpdateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (ShopifyPriceRule | null);
};



export type AvailableUpdateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: AvailableShopifyPriceRuleSelection;
};



export type DeleteShopifyPriceRuleResult = {

  __typename: 'DeleteShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyProductResult = {

  __typename: 'InternalCreateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalCreateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductResult = {

  __typename: 'InternalUpdateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalUpdateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductResult = {

  __typename: 'InternalDeleteShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalDeleteShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductResult = {

  __typename: 'InternalDeleteManyShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductsResult = {

  __typename: 'InternalBulkCreateShopifyProductsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProducts: (InternalShopifyProductRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProducts?: boolean | null | undefined;
};



export type CreateShopifyProductResult = {

  __typename: 'CreateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (ShopifyProduct | null);
};



export type AvailableCreateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: AvailableShopifyProductSelection;
};



export type UpdateShopifyProductResult = {

  __typename: 'UpdateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (ShopifyProduct | null);
};



export type AvailableUpdateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: AvailableShopifyProductSelection;
};



export type DeleteShopifyProductResult = {

  __typename: 'DeleteShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyProductImageResult = {

  __typename: 'InternalCreateShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (InternalShopifyProductImageRecord | null);
};



export type AvailableInternalCreateShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductImageResult = {

  __typename: 'InternalUpdateShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (InternalShopifyProductImageRecord | null);
};



export type AvailableInternalUpdateShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductImageResult = {

  __typename: 'InternalDeleteShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (InternalShopifyProductImageRecord | null);
};



export type AvailableInternalDeleteShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductImageResult = {

  __typename: 'InternalDeleteManyShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductImagesResult = {

  __typename: 'InternalBulkCreateShopifyProductImagesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImages: (InternalShopifyProductImageRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductImagesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImages?: boolean | null | undefined;
};



export type CreateShopifyProductImageResult = {

  __typename: 'CreateShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (ShopifyProductImage | null);
};



export type AvailableCreateShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: AvailableShopifyProductImageSelection;
};



export type UpdateShopifyProductImageResult = {

  __typename: 'UpdateShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductImage: (ShopifyProductImage | null);
};



export type AvailableUpdateShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductImage?: AvailableShopifyProductImageSelection;
};



export type DeleteShopifyProductImageResult = {

  __typename: 'DeleteShopifyProductImageResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyProductImageResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyProductOptionResult = {

  __typename: 'InternalCreateShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOption: (InternalShopifyProductOptionRecord | null);
};



export type AvailableInternalCreateShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOption?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductOptionResult = {

  __typename: 'InternalUpdateShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOption: (InternalShopifyProductOptionRecord | null);
};



export type AvailableInternalUpdateShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOption?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductOptionResult = {

  __typename: 'InternalDeleteShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOption: (InternalShopifyProductOptionRecord | null);
};



export type AvailableInternalDeleteShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOption?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductOptionResult = {

  __typename: 'InternalDeleteManyShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductOptionsResult = {

  __typename: 'InternalBulkCreateShopifyProductOptionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOptions: (InternalShopifyProductOptionRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductOptionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOptions?: boolean | null | undefined;
};



export type CreateShopifyProductOptionResult = {

  __typename: 'CreateShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOption: (ShopifyProductOption | null);
};



export type AvailableCreateShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOption?: AvailableShopifyProductOptionSelection;
};



export type UpdateShopifyProductOptionResult = {

  __typename: 'UpdateShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductOption: (ShopifyProductOption | null);
};



export type AvailableUpdateShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductOption?: AvailableShopifyProductOptionSelection;
};



export type DeleteShopifyProductOptionResult = {

  __typename: 'DeleteShopifyProductOptionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyProductOptionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyProductVariantResult = {

  __typename: 'InternalCreateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);
};



export type AvailableInternalCreateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductVariantResult = {

  __typename: 'InternalUpdateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);
};



export type AvailableInternalUpdateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductVariantResult = {

  __typename: 'InternalDeleteShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);
};



export type AvailableInternalDeleteShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductVariantResult = {

  __typename: 'InternalDeleteManyShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductVariantsResult = {

  __typename: 'InternalBulkCreateShopifyProductVariantsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariants: (InternalShopifyProductVariantRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductVariantsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariants?: boolean | null | undefined;
};



export type CreateShopifyProductVariantResult = {

  __typename: 'CreateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (ShopifyProductVariant | null);
};



export type AvailableCreateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: AvailableShopifyProductVariantSelection;
};



export type UpdateShopifyProductVariantResult = {

  __typename: 'UpdateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (ShopifyProductVariant | null);
};



export type AvailableUpdateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: AvailableShopifyProductVariantSelection;
};



export type DeleteShopifyProductVariantResult = {

  __typename: 'DeleteShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyRedirectResult = {

  __typename: 'InternalCreateShopifyRedirectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRedirect: (InternalShopifyRedirectRecord | null);
};



export type AvailableInternalCreateShopifyRedirectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRedirect?: boolean | null | undefined;
};



export type InternalUpdateShopifyRedirectResult = {

  __typename: 'InternalUpdateShopifyRedirectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRedirect: (InternalShopifyRedirectRecord | null);
};



export type AvailableInternalUpdateShopifyRedirectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRedirect?: boolean | null | undefined;
};



export type InternalDeleteShopifyRedirectResult = {

  __typename: 'InternalDeleteShopifyRedirectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRedirect: (InternalShopifyRedirectRecord | null);
};



export type AvailableInternalDeleteShopifyRedirectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRedirect?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyRedirectResult = {

  __typename: 'InternalDeleteManyShopifyRedirectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyRedirectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyRedirectsResult = {

  __typename: 'InternalBulkCreateShopifyRedirectsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRedirects: (InternalShopifyRedirectRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyRedirectsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRedirects?: boolean | null | undefined;
};



export type CreateShopifyRedirectResult = {

  __typename: 'CreateShopifyRedirectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRedirect: (ShopifyRedirect | null);
};



export type AvailableCreateShopifyRedirectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRedirect?: AvailableShopifyRedirectSelection;
};



export type UpdateShopifyRedirectResult = {

  __typename: 'UpdateShopifyRedirectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRedirect: (ShopifyRedirect | null);
};



export type AvailableUpdateShopifyRedirectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRedirect?: AvailableShopifyRedirectSelection;
};



export type DeleteShopifyRedirectResult = {

  __typename: 'DeleteShopifyRedirectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyRedirectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyShopResult = {

  __typename: 'InternalCreateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalCreateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalUpdateShopifyShopResult = {

  __typename: 'InternalUpdateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalDeleteShopifyShopResult = {

  __typename: 'InternalDeleteShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalDeleteShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyShopResult = {

  __typename: 'InternalDeleteManyShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyShopsResult = {

  __typename: 'InternalBulkCreateShopifyShopsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShops: (InternalShopifyShopRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyShopsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShops?: boolean | null | undefined;
};



export type UpdateShopifyShopResult = {

  __typename: 'UpdateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type InstallShopifyShopResult = {

  __typename: 'InstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableInstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type UninstallShopifyShopResult = {

  __typename: 'UninstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableUninstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type ReinstallShopifyShopResult = {

  __typename: 'ReinstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableReinstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type InternalCreateShopifySyncResult = {

  __typename: 'InternalCreateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalCreateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalUpdateShopifySyncResult = {

  __typename: 'InternalUpdateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalUpdateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalDeleteShopifySyncResult = {

  __typename: 'InternalDeleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalDeleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalDeleteManyShopifySyncResult = {

  __typename: 'InternalDeleteManyShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifySyncsResult = {

  __typename: 'InternalBulkCreateShopifySyncsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySyncs: (InternalShopifySyncRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySyncs?: boolean | null | undefined;
};



export type InternalCreateBlogPipeArticleResult = {

  __typename: 'InternalCreateBlogPipeArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeArticle: (InternalBlogPipeArticleRecord | null);
};



export type AvailableInternalCreateBlogPipeArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeArticle?: boolean | null | undefined;
};



export type InternalUpdateBlogPipeArticleResult = {

  __typename: 'InternalUpdateBlogPipeArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeArticle: (InternalBlogPipeArticleRecord | null);
};



export type AvailableInternalUpdateBlogPipeArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeArticle?: boolean | null | undefined;
};



export type InternalDeleteBlogPipeArticleResult = {

  __typename: 'InternalDeleteBlogPipeArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeArticle: (InternalBlogPipeArticleRecord | null);
};



export type AvailableInternalDeleteBlogPipeArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeArticle?: boolean | null | undefined;
};



export type InternalDeleteManyBlogPipeArticleResult = {

  __typename: 'InternalDeleteManyBlogPipeArticleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyBlogPipeArticleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateBlogPipeArticlesResult = {

  __typename: 'InternalBulkCreateBlogPipeArticlesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeArticles: (InternalBlogPipeArticleRecord | null)[];
};



export type AvailableInternalBulkCreateBlogPipeArticlesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeArticles?: boolean | null | undefined;
};



export type InternalCreateSessionResult = {

  __typename: 'InternalCreateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalCreateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalUpdateSessionResult = {

  __typename: 'InternalUpdateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalUpdateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalDeleteSessionResult = {

  __typename: 'InternalDeleteSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalDeleteSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalDeleteManySessionResult = {

  __typename: 'InternalDeleteManySessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManySessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateSessionsResult = {

  __typename: 'InternalBulkCreateSessionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  sessions: (InternalSessionRecord | null)[];
};



export type AvailableInternalBulkCreateSessionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  sessions?: boolean | null | undefined;
};



export type InternalCreateBlogPipeTopicsResult = {

  __typename: 'InternalCreateBlogPipeTopicsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeTopics: (InternalBlogPipeTopicsRecord | null);
};



export type AvailableInternalCreateBlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeTopics?: boolean | null | undefined;
};



export type InternalUpdateBlogPipeTopicsResult = {

  __typename: 'InternalUpdateBlogPipeTopicsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeTopics: (InternalBlogPipeTopicsRecord | null);
};



export type AvailableInternalUpdateBlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeTopics?: boolean | null | undefined;
};



export type InternalDeleteBlogPipeTopicsResult = {

  __typename: 'InternalDeleteBlogPipeTopicsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeTopics: (InternalBlogPipeTopicsRecord | null);
};



export type AvailableInternalDeleteBlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeTopics?: boolean | null | undefined;
};



export type InternalDeleteManyBlogPipeTopicsResult = {

  __typename: 'InternalDeleteManyBlogPipeTopicsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyBlogPipeTopicsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateBlogPipeTopicssResult = {

  __typename: 'InternalBulkCreateBlogPipeTopicssResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  blogPipeTopicss: (InternalBlogPipeTopicsRecord | null)[];
};



export type AvailableInternalBulkCreateBlogPipeTopicssResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  blogPipeTopicss?: boolean | null | undefined;
};



export type ExplicitNestingRequired = never;

export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
  [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;

export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined
  ? never
  : Schema extends (infer T)[]
  ? Select<T, Selection>[]
  : Schema extends null
  ? Select<Exclude<Schema, null>, Selection> | null
  : {
      [Key in keyof Selection & keyof Schema]: Selection[Key] extends true
        ? Schema[Key]
        : Selection[Key] extends FieldSelection
        ? Select<Schema[Key], Selection[Key]>
        : never;
    };

export type IDsList = {
  ids: string[];
}
