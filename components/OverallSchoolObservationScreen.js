//  Author: Mohammad Jihad Hossain
//  Create Date: 29/08/2021
//  Modify Date: 05/09/2021
//  Description: Overall school observation screen component

import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import { color } from "react-native-reanimated";
import { Checkbox } from "react-native-paper";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

export default class OverallSchoolObservationScreen extends React.Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: 20,
            padding: 25,
          }}
        >
          McGovern-Dole International Food for Education and Child Nutrition
          Program
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          বিদ্যালয়ের সামগ্রিক অবস্থা পর্যবেক্ষণ ফরম (প্রতি মাসে একবার)
        </Text>

        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ padding: 10 }}>
              <Text style={styles.bigRedText}>সাধারণ তথ্য:</Text>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text>বিদ্যালয়ের নাম:</Text>
                  <TextInput
                    placeholder="..............."
                    style={{ justifyContent: "flex-start" }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <Text>উপজেলা:</Text>
                      <TextInput
                        placeholder="..............."
                        style={{ justifyContent: "flex-start" }}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>তারিখ:</Text>
                      <TextInput
                        placeholder="দিন/মাস/বছর"
                        style={{ justifyContent: "flex-end" }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text>পরিদর্শনকারী এর নাম:</Text>
                  <TextInput
                    placeholder="..............."
                    style={{ justifyContent: "flex-start" }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text>পদবী:</Text>
                  <TextInput
                    placeholder="..............."
                    style={{ justifyContent: "flex-end" }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text>প্রধান শিক্ষকের নাম:</Text>
                  <TextInput
                    placeholder="..............."
                    style={{ justifyContent: "flex-start" }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text>জেন্ডার:</Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                      <Text>মহিলা</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                      <Text>পুরুষ</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ padding: 10 }}>
              <Text
                style={{
                  backgroundColor: "#ADD8E6",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                নির্দেশনা
              </Text>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ padding: 5 }}>
                    ১। প্রাইওরিটি এরিয়াসমুহ পর্যায়ক্রমে পর্যবেক্ষণ করেতে হবে
                    অর্থাৎ কেবল প্রাইওরিটি এরিয়া ১ এর সকল সূচকে "হ্যাঁ" হলে
                    প্রাইওরিটি এরিয়া ১ ও ২ এর সকল সূচকে "হ্যাঁ" হলে প্রাইওরিটি
                    এরিয়া ৩ এর সূচকগুলা পর্যবেক্ষণ করা যাবে ।
                  </Text>
                  <Text style={{ padding: 5 }}>
                    ২। বিদ্যালয়ের সামগ্রিক অবস্থা পর্যবেক্ষণ ২-৩ টি ভালো দিক
                    উল্লেখ করুন ।
                  </Text>
                  <Text style={{ padding: 5 }}>
                    ৩। প্রাইওরিটি এরিয়ার ভিত্তিতে যে ২-৩ টি ইনডিকেটরের উত্তর
                    "না" তার আলোকে সহায়তার জন্য অগ্রাধিকারভিত্তিক ইনডিকেটর
                    উল্লেখ করুন ।
                  </Text>
                  <Text style={{ padding: 5 }}>
                    ৪। বিদ্যালয়ের সামগ্রিক অবস্থা সংক্রান্ত সমস্যা নিয়ে প্রধান
                    শিক্ষকের সাথে আলোচনা করুন।
                  </Text>
                  <Text style={{ padding: 5 }}>
                    ৫। রুমটোরিড থেকে কোনো পদক্ষেপ গ্রহণের প্রয়োজন হলে উল্লেখ
                    করুন ।
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ justifyContent: "flex-end" }}>
                    ফলো-আপ করার জন্য গত পরিদর্শন থেকে প্রাপ্ত ২-৩ টি বিষয় উল্লেখ
                    করুন যেখানে উন্নতি প্রয়োজন ছিল ঃ
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <View style={{ padding: 5 }}>
                        <Text>১.</Text>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder="................................................"
                        ></TextInput>
                      </View>
                      <View style={{ padding: 5 }}>
                        <Text>২.</Text>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder="................................................"
                        ></TextInput>
                      </View>
                      <View style={{ padding: 5 }}>
                        <Text>৩.</Text>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder="................................................"
                        ></TextInput>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ padding: 10 }}>
              <Text style={styles.bigRedText}>পর্যবেক্ষণকৃত কার্যাবলী</Text>
              <View style={{ padding: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      রুটিন অনুযায়ী ক্লাস
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      প্রাক প্রাথমিক
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      ১ম
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      ২য়
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      ৩য়
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      ৪থ
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      ৫ম
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      শিক্ষকের প্রাইওরিটি এরিয়া
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      মন্তব্য
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>ক্লাস পর্যবেক্ষণ</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>বাংলা ক্লাস পর্যবেক্ষণ</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>শ্রেণি পাঠ/পড়ার ঘণ্টা পর্যবেক্ষণ</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>শ্রেণি পাঠ/পড়ার ঘণ্টা পর্যবেক্ষণ</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>পাঠাগার ব্যবস্থাপনা পর্যবেক্ষণ</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>পাঠাগার ব্যবস্থাপনা পর্যবেক্ষণ</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text> বিদ্যালয়ের সার্বিক অবস্থা পর্যবেক্ষণ </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text> বিদ্যালয়ের প্রাইওরিটি এরিয়াঃ </Text>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder="........."
                        ></TextInput>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text> অন্যান্যঃ </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="...................................................................................................।।"
                    ></TextInput>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ padding: 10 }}>
              <Text style={styles.bigRedText}>
                প্রাক- প্রাথমিক থেকে পঞ্চম শ্রেণি পর্যবেক্ষণের বিষয়সমূহ
              </Text>
              <View style={{ padding: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      প্রাইওরিটি এরিয়া এবং ইনডিকেটর
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      হ্যা
                    </Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      না
                    </Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text
                      style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                    >
                      মন্তব্য
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    প্রাইওরিটি এরিয়া -১ঃ উন্নয়নশীল
                  </Text>
                  <Text style={{ backgroundColor: "#ADD8E6" }}>
                    (১-৭ পর্যন্ত সকল ইনডিকেটর "হ্যাঁ" না হওয়া পর্যন্ত বিদ্যালয়টি
                    "উন্নয়নশীল" হিসেবে গণ্য হবে)
                  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>১.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      প্রধান শিক্ষকসহ সংশ্লিষ্ট সকল শিক্ষক বাংলা পাঠাদান
                      কার্যক্রম বিষয়ক প্রশিক্ষণে অংশ গ্রহণ করেছেন ।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>২.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      রুম টু রিড কর্তৃক আয়োজিত প্রশিক্ষণের আলোকে শিক্ষকগণ পাঠ/
                      কার্যক্রম পরিচালনা করেছেন । (অন্তত পর্যবেক্ষণকৃত শিক্ষকের
                      ৬০% এর ক্ষেত্রে )
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>৩.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      রুম টু রিড কর্তৃক সরবরাহকৃত সকল উপকরণ শ্রেণীকক্ষে বিতরণ
                      করা হয়েছে এবং ভালো অবস্থায় আছে ।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>৪.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      শিক্ষকগণ পাঠাগার থেকে নিয়মিত বুক চেক আউট করতে
                      শিক্ষার্থীদের (ছেলে-মেয়ে ও প্রতিবন্ধী) উৎসাহিত করেছেন ।
                      (গত মাসে ৫০% শিক্ষারতি অন্তত ১ টি বই নিয়েছে)
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>৫.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      শিক্ষার্থীরা নিয়মিত বাংলা পাঠ ও পড়ার ঘণ্টা কার্যক্রমে
                      অংশগ্রহণ করে (পর্যবেক্ষণ দিনে কমপক্ষে ৭০ % শিক্ষার্থী
                      উপস্তিত)
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>৬.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      বাংলা ক্লাসে পঠন যাচাইএ অন্তত ৪০% শিক্ষার্থী (ছেলে-মেয়ে)
                      প্রত্যাশিত-ফলাফল অর্জন (৫ টির মধ্যে অন্তত ৩ টি করছে)।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>৭.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      বিদ্যালয়ে তিন মাসে অন্তত একটি অভিভাবক সভা ও একটি এসএমসি
                      সভা অনুষ্ঠিত হয়েছে ।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    প্রাইওরিটি এরিয়া -২ঃ কার্যকরী
                  </Text>
                  <Text style={{ backgroundColor: "#ADD8E6" }}>
                    (১-৭ পর্যন্ত সকল ইনডিকেটর "হ্যাঁ" হলে এবং ৮-১৩ পর্যন্ত
                    ইনডিকেটর চলমান থাকলে বিদ্যালয়টি "কার্যকরী" হিসেবে গণ্য হবে)
                  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>৮.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      বিদ্যালয়ের রুটিন অনুসারে প্রশিক্ষণপ্রাপ্ত শিক্ষকগণ বাংলা
                      পাঠ/পড়ার ঘণ্টা কার্যক্রম পরিচালনা করেছেন (অন্তত ৭৫%
                      ক্ষেত্রে) এবং পূর্ণ সময় পাঠদান করেন ।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>৯.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      স্কুলে শিশুদের বয়স-উপযোগী ও জেন্ডার রেস্পন্সিভ পঠন উপকরণ
                      রয়েছে এবং নির্দেশনা অনুসারে শিক্ষক কর্তৃক ব্যবহৃত হচ্ছে ।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>১০.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      রুম টু রিড কর্তৃক প্রদত্ত প্রশিক্ষনের আলোকে শিক্ষকগণ
                      পাঠ/কার্যক্রম পরিচালনা করেছেন । (অন্তত পর্যবেক্ষণকৃত
                      শিক্ষকের ৮০% এর ক্ষেত্রে)
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>

                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>১১.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      শিক্ষকগণ পাঠাগার থেকে নিয়মিত বুক চেক আউট করতে
                      শিক্ষার্থীদের (ছেলে-মেয়ে ও প্রতিবন্ধী শিশু) উৎসাহিত করেছেন
                      (গত মাসে ৭০% শিক্ষার্থী অন্তত ১টি বই নিয়েছে ) ।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>১২.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      শিক্ষার্থীরা নিয়মিত বাংলা পাঠ ও পড়ার ঘণ্টা কার্যক্রম
                      অংশগ্রহণ করে (পর্যবেক্ষণ দিনে কমপক্ষে ৮০% শিক্ষার্থী
                      উপস্তিত ) ।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>১৩.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      বাংলা ক্লাস পঠন যাচাইয়ে অন্তত ৬০% শিক্ষার্থী (ছেলে-মেয়ে)
                      প্রতাশিত-ফলাফল অর্জন (৫ টির মধ্যে ৩ টি) করেছে ।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>১৪.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      বিদ্যালয় কত্রিপক্ষ, অভিভাবক, এসএমসি ও স্থানীয় জনগণের
                      সক্রিয়ু অংশগ্রহণের মাধ্যমে শিক্ষার মান-উন্নয়নের জন্য দীর্ঘ
                      মেয়াদি পরিকল্পনা গ্রহণ করেছে এবং তার অগ্রগতি মাসিকভিত্তিতে
                      পর্যালোচনা করা হয় ।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    প্রাইওরিটি এরিয়া -৩ঃ অধিক কার্যকরী
                  </Text>
                  <Text style={{ backgroundColor: "#ADD8E6" }}>
                    (১-১৪ পর্যন্ত সকল ইনডিকেটর "হ্যাঁ" হলে এবং ১৫-১৮ পর্যন্ত
                    ইনডিকেটর চলমান থাকলে বিদ্যালয়টি "অধিক কার্যকরী" হিসেবে গণ্য
                    হবে)
                  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>১৫.</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      শিক্ষার্থীরা নিয়মিত বাংলা পাঠ ও পড়ার ঘণ্টা কার্যক্রম
                      অংশগ্রহণ করে (পর্যবেক্ষণ দিনে কমপক্ষে ৮০% শিক্ষার্থী
                      উপস্তিত ) ।
                    </Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>মন্তব্য</Text>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="........."
                    ></TextInput>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ padding: 10 }}>
              <Text style={{ backgroundColor: "#ADD8E6" }}>
                শ্রেণি শিক্ষকের সাথে আলোচনার জন্য গুরুত্বপূর্ণ কিছু বিষয় ঃ
              </Text>
              <View style={{ padding: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      শিক্ষক ভালো করেছেন এমন ২/৩ টি সূচক ( অগ্রাধিকার এরিয়ার
                      নম্বর ) উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="১।  ..................................................."
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="২।  ..................................................."
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="৩।  ..................................................."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      অগ্রাধিকারভিত্তিতে শিক্ষককে তার নিজস্ব উন্নয়নের জন্য যে
                      ১/২ টি সূচক (এরিয়ার নম্বর) চিহ্নিত করেছেন তা উল্লেখ করুন
                      এবং তিনি তার উন্নয়ন এ কিভাবে এটি করবেন সেটি উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="১. ...................................."
                    ></TextInput>
                  </View>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 40, padding: 5 }}
                      placeholder="২. ...................................."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>কিভাবে করবেন ঃ</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 80, padding: 5 }}
                      placeholder="১. ...................................................................................."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 80, padding: 5 }}
                      placeholder="২. ...................................................................................."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <Text>
                      যে কাজ গুলো করার জন্য শ্রেণি শিক্ষক একমত হয়েছেন সেটি
                      উল্লেখ করুন ।
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 60, padding: 5 }}
                      placeholder="১. ...................................................................................."
                    ></TextInput>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, padding: 2 }}>
                    <TextInput
                      style={{ height: 60, padding: 5 }}
                      placeholder="২. ...................................................................................."
                    ></TextInput>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ padding: 10 }}>
              <Text style={styles.bigRedText}>পরিদর্শক এর তথ্য ঃ </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <View style={{ padding: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>এল এফ এর নাম ঃ </Text>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder=" ......"
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>স্বাক্ষর ঃ </Text>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder=" ......"
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>তারিখ ঃ </Text>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder=" ......"
                        ></TextInput>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View style={{ padding: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>এল পিও এর নাম ঃ </Text>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder=" ......"
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>স্বাক্ষর ঃ </Text>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder=" ......"
                        ></TextInput>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text>তারিখ ঃ </Text>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder=" ......"
                        ></TextInput>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  logoMain: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  bigBlueText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
  bigRedText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
  },
  pickerStyle: {
    height: 150,
    width: "80%",
    color: "#344953",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});
