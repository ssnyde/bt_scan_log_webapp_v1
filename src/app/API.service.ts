/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateScanEntry: OnCreateScanEntrySubscription;
  onUpdateScanEntry: OnUpdateScanEntrySubscription;
  onDeleteScanEntry: OnDeleteScanEntrySubscription;
};

export type CreateScanEntryInput = {
  id?: string | null;
  user: string;
  home: string;
  scanner: string;
  name: string;
  timestamp: string;
  rssi: number;
};

export type ModelScanEntryConditionInput = {
  user?: ModelStringInput | null;
  home?: ModelStringInput | null;
  scanner?: ModelStringInput | null;
  name?: ModelStringInput | null;
  timestamp?: ModelStringInput | null;
  rssi?: ModelIntInput | null;
  and?: Array<ModelScanEntryConditionInput | null> | null;
  or?: Array<ModelScanEntryConditionInput | null> | null;
  not?: ModelScanEntryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ScanEntry = {
  __typename: "ScanEntry";
  id: string;
  user: string;
  home: string;
  scanner: string;
  name: string;
  timestamp: string;
  rssi: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateScanEntryInput = {
  id: string;
  user?: string | null;
  home?: string | null;
  scanner?: string | null;
  name?: string | null;
  timestamp?: string | null;
  rssi?: number | null;
};

export type DeleteScanEntryInput = {
  id: string;
};

export type ModelScanEntryFilterInput = {
  id?: ModelIDInput | null;
  user?: ModelStringInput | null;
  home?: ModelStringInput | null;
  scanner?: ModelStringInput | null;
  name?: ModelStringInput | null;
  timestamp?: ModelStringInput | null;
  rssi?: ModelIntInput | null;
  and?: Array<ModelScanEntryFilterInput | null> | null;
  or?: Array<ModelScanEntryFilterInput | null> | null;
  not?: ModelScanEntryFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelScanEntryConnection = {
  __typename: "ModelScanEntryConnection";
  items: Array<ScanEntry | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionScanEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  user?: ModelSubscriptionStringInput | null;
  home?: ModelSubscriptionStringInput | null;
  scanner?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  timestamp?: ModelSubscriptionStringInput | null;
  rssi?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionScanEntryFilterInput | null> | null;
  or?: Array<ModelSubscriptionScanEntryFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type CreateScanEntryMutation = {
  __typename: "ScanEntry";
  id: string;
  user: string;
  home: string;
  scanner: string;
  name: string;
  timestamp: string;
  rssi: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateScanEntryMutation = {
  __typename: "ScanEntry";
  id: string;
  user: string;
  home: string;
  scanner: string;
  name: string;
  timestamp: string;
  rssi: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteScanEntryMutation = {
  __typename: "ScanEntry";
  id: string;
  user: string;
  home: string;
  scanner: string;
  name: string;
  timestamp: string;
  rssi: number;
  createdAt: string;
  updatedAt: string;
};

export type GetScanEntryQuery = {
  __typename: "ScanEntry";
  id: string;
  user: string;
  home: string;
  scanner: string;
  name: string;
  timestamp: string;
  rssi: number;
  createdAt: string;
  updatedAt: string;
};

export type ListScanEntriesQuery = {
  __typename: "ModelScanEntryConnection";
  items: Array<{
    __typename: "ScanEntry";
    id: string;
    user: string;
    home: string;
    scanner: string;
    name: string;
    timestamp: string;
    rssi: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateScanEntrySubscription = {
  __typename: "ScanEntry";
  id: string;
  user: string;
  home: string;
  scanner: string;
  name: string;
  timestamp: string;
  rssi: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateScanEntrySubscription = {
  __typename: "ScanEntry";
  id: string;
  user: string;
  home: string;
  scanner: string;
  name: string;
  timestamp: string;
  rssi: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteScanEntrySubscription = {
  __typename: "ScanEntry";
  id: string;
  user: string;
  home: string;
  scanner: string;
  name: string;
  timestamp: string;
  rssi: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateScanEntry(
    input: CreateScanEntryInput,
    condition?: ModelScanEntryConditionInput
  ): Promise<CreateScanEntryMutation> {
    const statement = `mutation CreateScanEntry($input: CreateScanEntryInput!, $condition: ModelScanEntryConditionInput) {
        createScanEntry(input: $input, condition: $condition) {
          __typename
          id
          user
          home
          scanner
          name
          timestamp
          rssi
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateScanEntryMutation>response.data.createScanEntry;
  }
  async UpdateScanEntry(
    input: UpdateScanEntryInput,
    condition?: ModelScanEntryConditionInput
  ): Promise<UpdateScanEntryMutation> {
    const statement = `mutation UpdateScanEntry($input: UpdateScanEntryInput!, $condition: ModelScanEntryConditionInput) {
        updateScanEntry(input: $input, condition: $condition) {
          __typename
          id
          user
          home
          scanner
          name
          timestamp
          rssi
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateScanEntryMutation>response.data.updateScanEntry;
  }
  async DeleteScanEntry(
    input: DeleteScanEntryInput,
    condition?: ModelScanEntryConditionInput
  ): Promise<DeleteScanEntryMutation> {
    const statement = `mutation DeleteScanEntry($input: DeleteScanEntryInput!, $condition: ModelScanEntryConditionInput) {
        deleteScanEntry(input: $input, condition: $condition) {
          __typename
          id
          user
          home
          scanner
          name
          timestamp
          rssi
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteScanEntryMutation>response.data.deleteScanEntry;
  }
  async Echo(msg?: string): Promise<string | null> {
    const statement = `query Echo($msg: String) {
        echo(msg: $msg)
      }`;
    const gqlAPIServiceArguments: any = {};
    if (msg) {
      gqlAPIServiceArguments.msg = msg;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data.echo;
  }
  async GetScanEntry(id: string): Promise<GetScanEntryQuery> {
    const statement = `query GetScanEntry($id: ID!) {
        getScanEntry(id: $id) {
          __typename
          id
          user
          home
          scanner
          name
          timestamp
          rssi
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetScanEntryQuery>response.data.getScanEntry;
  }
  async ListScanEntries(
    filter?: ModelScanEntryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListScanEntriesQuery> {
    const statement = `query ListScanEntries($filter: ModelScanEntryFilterInput, $limit: Int, $nextToken: String) {
        listScanEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user
            home
            scanner
            name
            timestamp
            rssi
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListScanEntriesQuery>response.data.listScanEntries;
  }
  OnCreateScanEntryListener(
    filter?: ModelSubscriptionScanEntryFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateScanEntry">>
  > {
    const statement = `subscription OnCreateScanEntry($filter: ModelSubscriptionScanEntryFilterInput) {
        onCreateScanEntry(filter: $filter) {
          __typename
          id
          user
          home
          scanner
          name
          timestamp
          rssi
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateScanEntry">>
    >;
  }

  OnUpdateScanEntryListener(
    filter?: ModelSubscriptionScanEntryFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateScanEntry">>
  > {
    const statement = `subscription OnUpdateScanEntry($filter: ModelSubscriptionScanEntryFilterInput) {
        onUpdateScanEntry(filter: $filter) {
          __typename
          id
          user
          home
          scanner
          name
          timestamp
          rssi
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateScanEntry">>
    >;
  }

  OnDeleteScanEntryListener(
    filter?: ModelSubscriptionScanEntryFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteScanEntry">>
  > {
    const statement = `subscription OnDeleteScanEntry($filter: ModelSubscriptionScanEntryFilterInput) {
        onDeleteScanEntry(filter: $filter) {
          __typename
          id
          user
          home
          scanner
          name
          timestamp
          rssi
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteScanEntry">>
    >;
  }
}
