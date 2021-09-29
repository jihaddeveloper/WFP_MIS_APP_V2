//  Author: Mohammad Jihad Hossain
//  Create Date: 25/08/2021
//  Modify Date: 19/09/2021
//  Description: Library reading activities observation screen component

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

export default class LibraryReadingActivitiesObservationScreen extends React.Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 100,
            marginBottom: 50,
          }}
        >
          পড়ার ঘণ্টা কার্যক্রম পর্যবেক্ষণ ফরম
        </Text>

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
                <Text>পরিদর্শক এর নাম:</Text>
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
                <Text>শ্রেণি শিক্ষকের নাম:</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-start" }}
                />
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text>জেন্ডার:</Text>
                  </View>
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
              <View style={{ flex: 1 }}>
                <Text>
                  সংশ্লিষ্ট বিষয়ে প্রশিক্ষণপ্রাপ্ত শিক্ষক পাঠ পরিচালনা করছেন
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>হ্যা</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: !checked });
                      }}
                    />
                    <Text>না</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text>শ্রেণী:</Text>
                    <TextInput
                      placeholder="..............."
                      style={{ justifyContent: "flex-start" }}
                    />
                    <Text>শাখা:</Text>
                    <TextInput
                      placeholder="..............."
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>ক্লাস শুরুর সময়:</Text>
                    <TextInput
                      placeholder="..............."
                      style={{ justifyContent: "flex-start" }}
                    />
                    <Text>ক্লাস শেষের সময়:</Text>
                    <TextInput
                      placeholder="..............."
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text>পাঠ নং/ পাঠের নাম:</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-end" }}
                />
                <Text>দিন:</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-end" }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text>ভর্তিকৃত শিশুর সংখ্যা:</Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text>মেয়ে ঃ</Text>
                    <Text>ছেলে ঃ</Text>
                    <Text>মোট ঃ</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      placeholder="........"
                      style={{ justifyContent: "flex-end" }}
                    />
                    <TextInput
                      placeholder="........"
                      style={{ justifyContent: "flex-end" }}
                    />
                    <TextInput
                      placeholder="........"
                      style={{ justifyContent: "flex-end" }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text>উপস্থিত শিশুর সংখ্যা :</Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text>মেয়ে ঃ</Text>
                    <Text>ছেলে ঃ</Text>
                    <Text>মোট ঃ</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      placeholder="........"
                      style={{ justifyContent: "flex-end" }}
                    />
                    <TextInput
                      placeholder="........"
                      style={{ justifyContent: "flex-end" }}
                    />
                    <TextInput
                      placeholder="........"
                      style={{ justifyContent: "flex-end" }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>নির্দেশনা </Text>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ padding: 5 }}>
                  ১। সংশ্লিষ্ট বিষয়ে প্রশিক্ষণপ্রাপ্ত শিক্ষক কর্তৃক পাঠ পরিচালিত
                  হলেই কেবল সম্পূর্ণ পাঠ পর্যবেক্ষণ করুন ।
                </Text>
                <Text style={{ padding: 5 }}>
                  ২। সম্পূর্ণ পাঠ পর্যবেক্ষণ করুন তবে প্রাইওরিটি এরিয়ার ভিত্তিতে
                  ভালো দিক ও সহাওয়াতার ক্ষেত্রগুলা চিহ্নিত করুন ।
                </Text>
                <Text style={{ padding: 5 }}>
                  ৩। পড়ার ঘণ্টা কার্যক্রম সংক্রান্ত 2-3 টি ভালো দিক উল্লেখ করুন।
                </Text>
                <Text style={{ padding: 5 }}>
                  ৪। প্রাইওরিটি এরিয়ার ভিত্তিতে যে ১-২ টি ইনডিকেটরের উত্তর "না"
                  বা আংশিক হয়েছে তার আলোকে সহায়তার জন্য অগ্রাধিকারভিত্তিক
                  ইনডিকেটর উল্লেখ করুন ।
                </Text>
                <Text style={{ padding: 5 }}>
                  ৫। শ্রেণীকক্ষ পড়ার ঘণ্টা কার্যক্রমে উন্নয়ন যোগ্য ১/২ টি
                  ইনডিকেটর নিয়ে সংশ্লিষ্ট শিক্ষকের সাথে আলোচনা করুন।
                </Text>
                <Text style={{ padding: 5 }}>
                  ৬। রুমটোরিড থেকে কোনো পদক্ষেপ গ্রহণের প্রয়োজন হলে উল্লেখ করুন
                  ।
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ justifyContent: "flex-end" }}>
                  ফলো-আপ করার জন্য গত পরিদর্শন থেকে প্রাপ্ত ১-২ টি বিষয় উল্লেখ
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
            <Text style={styles.bigRedText}>ইনডিকেটর</Text>
            <View style={{ padding: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    ক্রমিক নং
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text
                        style={{
                          backgroundColor: "#ADD8E6",
                          fontWeight: "bold",
                        }}
                      >
                        সরব পাঠ
                      </Text>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text
                        style={{
                          backgroundColor: "#ADD8E6",
                          fontWeight: "bold",
                        }}
                      >
                        অংশগ্রহণমূলক পাঠ
                      </Text>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text
                        style={{
                          backgroundColor: "#ADD8E6",
                          fontWeight: "bold",
                        }}
                      >
                        স্বাধীনভাবে পড়া
                      </Text>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text
                        style={{
                          backgroundColor: "#ADD8E6",
                          fontWeight: "bold",
                        }}
                      >
                        জুটিতে পড়া
                      </Text>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          this.setState({ checked: !checked });
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text
                    style={{ backgroundColor: "#ADD8E6", fontWeight: "bold" }}
                  >
                    প্রাইওরিটি এরিয়া
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
                    আংশিক
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
                  ......................................................সার্বিক......................................................
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক সকল শিক্ষার্থীদের সাথে বন্ধুত্বপূর্ণ যোগাযোগ করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক সকল শিক্ষার্থীদের সাথে বন্ধুত্বপূর্ণ যোগাযোগ করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
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
                  <Text>২.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পড়ার ঘণ্টা কার্যক্রমে ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন
                    ও পিছিয়ে পড়া শিক্ষার্থীদের অংশগ্রহণে উৎসাহিত করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পড়ার ঘণ্টা কার্যক্রমে ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন
                    ও পিছিয়ে পড়া শিক্ষার্থীদের অংশগ্রহণে উৎসাহিত করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
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
                  <Text>৩.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পড়ার ঘণ্টা কার্যক্রম সম্পর্কে নির্দেশাবলী
                    পরিষ্কারভাবে দিয়েছেন এবং নির্দেশনা অনুযায়ী বর্ণিত ধাপগুলা
                    ধারাবাহিকভাবে অনুসরণ করে শ্রেণিপাঠ পরিচালনা করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পড়ার ঘণ্টা কার্যক্রম সম্পর্কে নির্দেশাবলী
                    পরিষ্কারভাবে দিয়েছেন এবং নির্দেশনা অনুযায়ী বর্ণিত ধাপগুলা
                    ধারাবাহিকভাবে অনুসরণ করে শ্রেণিপাঠ পরিচালনা করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
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
                  ......................................................পড়ার
                  আগে......................................................
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৪.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পাঠাগার থেকে একটা বই নিয়ে বইয়ের প্রচ্ছদ শিক্ষার্থীদের
                    দেখিয়েছেন এবং বইয়ের নাম ও লেখকের নাম বলেছেন{" "}
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>প্রযোজ্য নয়</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>২</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
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
                  <Text>৫.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক বই থেকে দু-একটি শব্দ অর্থ সহ পরিষ্কারভাবে
                    শিক্ষার্থীদের শিখিয়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>প্রযোজ্য নয়</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>৩</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
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
                  ......................................................পড়া
                  চলাকালীন......................................................
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৬.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    গল্পের বই পড়ে শোনানোর পাশাপাশি শিক্ষক প্রযোজ্য ক্ষেত্রে
                    অভিব্যক্তি প্রকাশ ও অঙ্গভঙ্গি করেও দেখিয়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>প্রযোজ্য নয়</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
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
                  <Text>৭.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শুধুমাত্র অংশ গ্রহণ মূলক পড়ার ক্ষেত্রে ঃ গল্পটি
                    শিক্ষার্থীদের পড়ার লেভেল অনুযায়ী উপযুক্ত ছিল ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>প্রযোজ্য নয়</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
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
                  <Text>৮.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শুধুমাত্র অংশ গ্রহণ মূলক পড়ার জন্যঃ গল্পটি দ্বিতীয়বার পড়ার
                    ক্ষেত্রে, শিক্ষক শিক্ষার্থীরা একসাথে পড়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শুধুমাত্র জুটিতে পড়ার ক্ষেত্রে ঃ শিক্ষক নির্দেশনার মাধ্যমে
                    নিশ্চিত করেছেন যে, শিক্ষার্থীরা একে অপরের পাশে জোড়ায় জোড়ায়
                    বসেছে এবং উভয়ই পড়েছে ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
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
                  <Text>৯.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    সকল ধরনের (ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন ও পিছিয়ে পড়া)
                    শিক্ষার্থীদের অংশগ্রহণ নিশ্চিত শিক্ষক গল্পটি পড়ার সময় এরপর
                    কি হতে/ঘটতে পারে ? এমন দু/তিনটি প্রশ্ন করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    সকল ধরনের (ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন ও পিছিয়ে পড়া)
                    শিক্ষার্থীদের অংশগ্রহণ নিশ্চিত করতে শিক্ষক একক বা জুটিতে পড়া
                    শুনেছেন এবং প্রয়োজনে প্রশ্ন করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>২</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
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
                  ......................................................পড়া
                  শেষে......................................................
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১০.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    সকল ধরনের (ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন ও পিছিয়ে পড়া)
                    শিক্ষার্থীদের বোধগম্যতা যাচাইয়ের জন্য শিক্ষক কখন, কোথায়, কি
                    এবং কে ইত্যাদি প্রশ্ন করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    সকল ধরনের (ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন ও পিছিয়ে পড়া)
                    শিক্ষার্থীদের বোধগম্যতা যাচাইয়ের জন্য শিক্ষক কখন, কোথায়, কি
                    এবং কে ইত্যাদি প্রশ্ন করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>৩</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
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
                  <Text>১১.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    বই চেক আউট করার জন্য আহ্বান জানিয়েছে বা সুযোগ করে দিয়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    বই চেক আউট করার জন্য আহ্বান জানিয়েছে বা সুযোগ করে দিয়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>১</Text>
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
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: !checked });
                    }}
                  />
                  <Text>আংশিক</Text>
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

          <View style={{ padding: 10 }}>
            <Text style={{ backgroundColor: "#ADD8E6" }}>
              শ্রেণি শিক্ষকের সাথে আলোচনার জন্য গুরুত্বপূর্ণ কিছু বিষয় ঃ
            </Text>
            <View style={{ padding: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক ভালো করেছেন এমন ২/৩ টি সূচক ( অগ্রাধিকার এরিয়ার নম্বর
                    ) উল্লেখ করুন ।
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
                    অগ্রাধিকারভিত্তিতে শিক্ষককে তার নিজস্ব উন্নয়নের জন্য যে ১/২
                    টি সূচক (এরিয়ার নম্বর) চিহ্নিত করেছেন তা উল্লেখ করুন এবং
                    তিনি তার উন্নয়ন এ কিভাবে এটি করবেন সেটি উল্লেখ করুন ।
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
                    যে কাজ গুলো করার জন্য শ্রেণি শিক্ষক একমত হয়েছেন সেটি উল্লেখ
                    করুন ।
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
        <View>
          <Text style={{ alignItems: "center", justifyContent: "center" }}>
            &copy; All Reserved, RoomtoRead Bangldesh
          </Text>
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
