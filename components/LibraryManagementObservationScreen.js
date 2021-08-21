//  Author: Mohammad Jihad Hossain
//  Create Date: 17/08/2021
//  Modify Date: 21/08/2021
//  Description: Library management observation screen component

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

export default class LibraryManagementObservationScreen extends React.Component {
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
        <Text style={{ fontSize: 20 }}>শ্রেণীকক্ষ পাঠাগার পর্যবেক্ষণ ফরম</Text>
        <Text style={{ fontSize: 20 }}>(এলএফ-দের জন্য)</Text>

        <ScrollView>
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
                <Text>পরিদর্শনকারীর নাম:</Text>
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
                <Text>লাইব্রেরি শিক্ষকের নাম:</Text>
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
                  সংশ্লিষ্ট বিষয়ে প্রশিক্ষণপ্রাপ্ত শিক্ষক পাঠাগার ব্যবস্থপনা
                  দায়িত্বে আছেন ঃ
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
                <Text>শ্রেণী:</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-start" }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text>শাখা:</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-start" }}
                />
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>নির্দেশনা </Text>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ padding: 5 }}>
                  ১। সংশ্লিষ্ট বিষয়ে প্রশিক্ষণপ্রাপ্ত শিক্ষক কত্রিক পাঠ পরিচালিত
                  হলেই কেবল সম্পূর্ণ পাঠ পর্যবেক্ষণ করুন ।
                </Text>
                <Text style={{ padding: 5 }}>
                  ২। প্রধান ইনডিকেটরের অধীন সকল সাব-ইনডিকেটর হ্যাঁ হলে প্রধান
                  ইনডিকেটরটি "হ্যাঁ" হবে ।
                </Text>
                <Text style={{ padding: 5 }}>
                  ৩। পাঠাগার সংক্রান্ত 2-3 টি ভালো দিক উল্লেখ করুন।
                </Text>
                <Text style={{ padding: 5 }}>
                  ৪। প্রথম যে ২-৩ টি ইনডিকেটরের উত্তর "না" হয়েছে তার আলোকে
                  সহায়তার জন্য অগ্রাধিকারভিত্তিক ইনডিকেটর উল্লেখ করুন
                </Text>
                <Text style={{ padding: 5 }}>
                  ৫। শ্রেণীকক্ষ পাঠাগারের সমস্যা নিয়ে সংশ্লিষ্ট লাইব্রেরি
                  শিক্ষকের সাথে আলোচনা করুন।
                </Text>
                <Text style={{ padding: 5 }}>
                  ৬। রুমটোরিড থেকে কোনো পদক্ষেপ গ্রহণের প্রয়োজন হলে উল্লেখ করুন
                  ।
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
            <Text style={styles.bigRedText}>
              ইনডিকেটর(প্রতিটি সাব-ইনডিকেটর "হ্যাঁ" হলে প্রধান ইনডিকেটর "হ্যাঁ"
              হবে)
            </Text>
            <View style={{ padding: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ backgroundColor: "#f5f5f5" }}>ক্রমিক নং</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ backgroundColor: "#f5f5f5" }}>ইনডিকেটর</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ backgroundColor: "#f5f5f5" }}>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ backgroundColor: "#f5f5f5" }}>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ backgroundColor: "#f5f5f5" }}>
                    "না" হলে করনীয়
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      বিদ্যালয়ের সংশ্লিষ্ট শিক্ষক পাঠাগার ব্যবস্থাপনা বিষয়ে
                      প্রশিক্ষণে অংশগ্রহণ করেছেন
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16 }}>
                      ১.১ পাঠাগার বাবস্থাপনার জন্য পর্যবেক্ষণকৃত শ্রেণিতে একজন
                      প্রশিক্ষণ প্রাপ্ত লাইব্রেরি শিক্ষক দায়িত্ব প্রাপ্ত আছেন
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ১.২বিদ্যালয়ের প্রধান শিক্ষক রুম টু রিড পরিচালিত পাঠাগার
                      ব্যবস্থাপনা প্রশিক্ষণে অংশগ্রহণ করেছেন
                    </Text>
                  </View>
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
                  <Text>
                    এলপিও-কে অবহিত করুন এবং রুম টু রিডের সহায়তা প্রয়োজন হলে
                    মাসিক প্রতিবেদনে উল্লেখ করুন
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>২.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক সঠিকভাবে বর্ণ পড়া বা বর্ণ ও শব্দাংশ মিলিয়ে শব্দ পড়া
                    শিখিয়েছেন এবং শিখাত্রিদের চর্চা করার সুযোগ দিয়েছেন ।
                    (প্রযোজ্য ক্ষেত্রে)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১</Text>
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
                    শিক্ষক শব্দ ভাণ্ডারের শব্দগুলো অর্থসহ শিখিয়েছেন এবং
                    শিক্ষার্থীদের শব্দগুলো ব্যবহার করে নতুন বাক্য গঠনের সুযোগ
                    দিয়েছেন । (প্রযোজ্য ক্ষেত্রে)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৩</Text>
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
                  <Text>৪.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক শিক্ষার্থীদের সাবলিল পঠন (সঠিক গতি , শুদ্ধ উচ্চারণ ও
                    অভিব্যাক্তি বজায় রেখে পড়া) উপস্থাপন করে দেখিয়েছেন এবং
                    শিক্ষার্থীদের শব্দ ভাণ্ডারের শব্দগুলো অর্থসহ শিখিয়েছেন এবং
                    শিক্ষাথ্রিদের শব্দগুলো ব্যবহার করে নতুন বাক্য গঠনের সুযোগ
                    দিয়েছেন । (প্রযোজ্য ক্ষেত্রে)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>২</Text>
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
                    সঠিক উত্তরের জন্য শিক্ষক শিক্ষার্থীদের সহায়ক প্রশ্ন করেছেন
                    বা উত্তর খোঁজার কৌশল শিখিয়েছেন । (প্রযোজ্য ক্ষেত্রে)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৩</Text>
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
                  <Text>৬.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক নির্দেশনা অনুযায়ী বর্ণ/ যুক্তবর্ণ / শব্দ / বাক্য
                    লেখার কাজ করিয়েছেন । (প্রযোজ্য ক্ষেত্রে)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>২</Text>
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
                <Text style={{ backgroundColor: "green" }}>
                  সার্বিক (সমগ্র পাঠ উপস্থাপন সংশ্লিষ্ট)
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৭.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক শিখন-শিখানো কার্যক্রমে আমি করি-আমরা করি-তুমি কর
                    পদ্ধতিটি ব্যাবহার করেছেন । (প্রযোজ্য ক্ষেত্রে)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১</Text>
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
                    শিক্ষক শিক্ষার্থীদের এককভাবে বা জুটিতে বা দলে পড়ার সুযোগ
                    দিয়েছেন । (প্রযোজ্য ক্ষেত্রে)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১</Text>
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
                    শিক্ষক নির্ধারিত সময়ের মধ্যে পাঠের সকল কাজ ধারাবাহিকভাবে
                    সম্পন্ন করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৩</Text>
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
                  <Text>১০.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক পাঠের শিখন-শিখানো কাজে সহায়ক উপকরণ (রুম টু রিড কর্তৃক
                    প্রদত্ত) ব্যাবহার করেছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>২</Text>
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
                    শিক্ষার্থীদের বই, ওয়ার্কবুকের কাজ নিশ্চিত করে যে গত ভিজিটের
                    পর পাঠের ধারাবাহিকতা অনুসারে অগ্রগতি হয়েছে ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>২</Text>
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
                  <Text>১২.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক ছেলে-মেয়ে, বিশেষ চাহিদা সম্পন্ন ও পিছিয়ে পড়া
                    শিক্ষার্থীদেরকে পাঠের কাজে এবং মূল্যায়নে অংশ গ্রহণ করিয়েছেন
                    ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১</Text>
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
            <Text>Hello World</Text>
          </View>
        </ScrollView>
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
