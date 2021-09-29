//  Author: Mohammad Jihad Hossain
//  Create Date: 17/08/2021
//  Modify Date: 19/08/2021
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
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 100,
          }}
        >
          শ্রেণীকক্ষ পাঠাগার পর্যবেক্ষণ ফরম
        </Text>
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
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      পাঠাগার কার্যক্রম পরিচালনার জন্য শ্রেণীকক্ষটি উপযোগী
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16 }}>
                      ২.১ শ্রেণীকক্ষের দরজা-জানালা ভালো অবস্থায় এবং তালা দেওয়ার
                      ব্যবস্থা আছে
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ২.২ শিক্ষার্থীদের বসার জন্য শ্রেণীকক্ষ নিরাপদ ও পরিষ্কার
                      (ফাটল, গর্ত ইত্যাদি সমস্যা নাই)
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
                    প্রধান শিক্ষকের সাথে আলোচনা এবং LPO-কে অবহিত করুন । সহায়তা
                    প্রয়োজন হলে মাসিক প্রতিবেদন উল্লেখ করুন
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৩.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      পাঠাগার বুক শেলফটি ঠিকমত স্থাপন করা হয়েছে এবং ভালো অবস্থায়
                      আছে
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16 }}>
                      ৩.১ বুক শেলফের আশে পাশে পর্যাপ্ত জায়গা রয়েছে যাতে
                      শিক্ষারতিরা সহজে চলাচল করতে পারে, সহজে বই নিতে পারে এবং বই
                      পড়ার কাজে অংশ নিতে পারে
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ৩.২ বুক শেলফ এমন জায়গায় স্থাপন করা হয়েছে যার ফলে বইয়ের উপর
                      সরাসরি সূর্যের আলো বা বৃষ্টি পড়ে না কিংবা সরাসরি জানালার
                      সম্মুখে নয়
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ৩.৩ বুক শেলফ এবং শিক্ষকের টেবিল ভালো অবস্থায় আছে (ভাঙ্গা/
                      ব্যবহার অনুপযোগী নয়)
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
                    পাঠাগার ব্যবস্থাপনা ম্যনুয়ালের আলোকে আরও ভালো কোনো স্থানে
                    ঠিকমত বুক-শেলফটি স্থাপন করা যায় কিনা এ বিষয়ে পাঠাগারের
                    প্রধান শিক্ষকের সাথে আলোচনা করুন । প্রয়োজনে স্থাপন করে দেখান
                    ।
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৪.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      বুক রেজিস্টার আছে এবং নতুন বই পাওয়ার সাথে সাথে নিয়মিত
                      হালনাগাদ করা হয়
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
                  <Text>বুক রেজিস্টার যাচাই করুন এবং হালনাগাদ করুন । </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৫.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      বুক শেলফে নির্দেশনা অনুযায়ী বই সাজানো হয়েছে
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16 }}>
                      ৫.১ পড়ার ঘণ্টায় সকল বই এবং পড়ার সামগ্রী শেলফ-এ সাজানো আছে,
                      বাক্সে তালাবদ্ধ নয়
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ৫.২ সকল বই লেভেল অনুযায়ী সাজানো এবং বইয়ের প্রচ্ছদ/কভারেরপ
                      লেভেল সহজেই চোখে পড়ে
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ৫.৩ বইগুলো এমনভাবে সাজানো আছে যাতে শিখাত্রিরা সহজেই নিতে
                      পারে
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
                    পাঠাগার ব্যবস্থাপনা ম্যনুয়ালের আলোকে বই কিভাবে সাজাতে হয়
                    বলুন এবং পাঠাগার শিক্ষক বা বুক ক্যাপ্টেনের সাথে নিয়ে বই
                    সাজিয়ে দেখান ।
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৬.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      ছাপাসমৃদ্ধ উপকরণ যেমন চার্ট, পোস্টার অথবা শিক্ষার্থীদের
                      সৃজনশীল কাজ (আঁকা এবং লেখা) প্রদর্শিত আছে
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
                    পাঠাগার ব্যবস্থাপনা ম্যানুয়ালএর আলোকে শ্রেণীকক্ষ ছাপাসমৃদ্ধ
                    করার পদক্ষেপ নিন ।
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৭.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      কার্যকরী বই চেক-আউট ব্যবস্থা বিদ্যমান আছে
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16 }}>
                      ৭.১ বই চেক-আউটের নিয়মাবলী ও প্রক্রিয়া শ্রেণীকক্ষে পোস্টারে
                      প্রদর্শিত আছে
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ৭.২ বই চেক-আউট করার জন্য রেজিস্টার এর ব্যবহার আছে
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ৭.৩ পূর্ববর্তী সপ্তাহের বই গ্রহণ ও জমা দেয়ার তথ্য
                      রেজিস্টারে লিপিবদ্ধ আছে
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ৭.৪ গত মাস পর্যন্ত ফেরত দেওয়া হয়নি এমন বইসমূহের নাম
                      রেজিস্টারে লিপিবদ্ধ আছে
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ৭.৫ পূর্ববর্তী সপ্তাহের বই গ্রহণ ও জমা দেয়ার তথ্য
                      রেজিস্টারে লিপিবদ্ধ আছে
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text style={{ fontWeight: "bold" }}>
                          মাসের নাম (গত পরিদর্শনের পর থেকে){" "}
                        </Text>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder=".................."
                        ></TextInput>
                      </View>
                      <View style={{ flex: 1, padding: 2 }}>
                        <Text style={{ fontWeight: "bold" }}>
                          মোট বই চেক-আউটের এর সংখ্যা
                        </Text>
                        <TextInput
                          style={{ height: 40, padding: 5 }}
                          placeholder=".................."
                        ></TextInput>
                      </View>
                    </View>
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
                    পাঠাগার ব্যবস্থাপনা ম্যানুয়ালএর আলোকে বই গ্রহণ ও জমা
                    রেজিস্টার নিশ্চিত করুন । বই কম চেক-আউট হয়ে থাকলে প্রধান
                    শিক্ষকের সাথে এর কারণ সমূহ আলোচনা করুন । বুক চেক- আউট
                    বাড়ানোর ব্যাপারে তাঁর সাথে আলোচনা করুন এবং প্রয়োজনীয় পদক্ষেপ
                    নিন ।
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৮.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      নির্দিষ্ট পড়ার ঘণ্টা বিদ্যমান রয়েছে
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16 }}>
                      ৮.১ পর্যবেক্ষণকৃত শ্রেণির রুটিনে সপ্তাহে একদিন পড়ার ঘণ্টা
                      কার্যক্রম আছে
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ৮.২ প্রতিদিন বিদ্যালয় ছুটির পূর্বে বা পরে অথবা বিরতির সময়
                      বই পড়ার চেক-আউটের সুযোগ আছে
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
                    LPO-কে অবহিত করুন এবং রুম টু রিডের সহায়তা প্রয়োজন হলে মাসিক
                    প্রতিবেদন উল্লেখ করুন ।
                  </Text>
                </View>
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  backgroundColor: "#f5f5f5",
                }}
              >
                শ্রেণীকক্ষ পাঠাগার উন্নয়নশীল হতে হলে উপরের সবগুলা (১ থেকে ৮)
                ইনডিকেটর "হ্যাঁ" হতে হবে
              </Text>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>৯.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18 }}>
                      পড়া ভিত্তিক কার্যক্রমের তথ্য লিপিবদ্ধ করার জন্য একটি
                      রেজিস্টার রয়েছে এবং শিক্ষক প্রতি সপ্তাহে পড়ার ঘণ্টায় কি কি
                      কার্যক্রম করেছেন তা লিপিবদ্ধ করেন
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
                  <Text>LPO-কে অবহিত করুন এবং মাসিক সভায় তা তুলে ধরুন ।</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১০.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18 }}>
                      সংশ্লিষ্ট লাইব্রেরী শিক্ষক রুম টু রিড প্রদত্ত 'পড়ার ঘণ্টা
                      কার্যক্রম' প্রশিক্ষন-এ অংশগ্রহণ করেছেন
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
                    প্রধান শিক্ষকের সাথে আলোচনা করুন ও LPO-কে অবহিত করুন ।
                  </Text>
                </View>
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  backgroundColor: "#f5f5f5",
                }}
              >
                শ্রেণীকক্ষ পাঠাগার কার্যকর হতে হলে উপরের সবগুলা (১ থেকে ১০)
                ইনডিকেটর "হ্যাঁ" হতে হবে
              </Text>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১১.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18 }}>
                      গত ছয় মাসে কমপক্ষে একটি অভিভাবক সভা হয়েছে যেখানে সংশ্লিষ্ট
                      শ্রেণির শিক্ষার্থীদের পঠন অথবা পাঠাগার বিষয়ে আলোচনা হয়েছে
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
                  <Text>প্রধান শিক্ষককের জানান এবং LPO-কে অবহিত করুন ।</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১২.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18 }}>
                      বিদ্যালয় কর্মসূচি শুরুর ১ বছরের মধ্যে অভিভাবক ও স্থানীয়
                      জনগণের অংশগ্রহণে অন্তত একটি পড়া বিষয়ক অনুষ্ঠান হয়েছে
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
                    প্রধান শিক্ষককের সাথে আলোচনা করুন এবং LPO'র ফলোআপের জন্য নোট
                    নিন
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>১৩.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      পাঠাগার কর্মসূচি দীর্ঘ মেয়াদে পরিচালনার জন্য ব্যবস্থাপনা
                      কমিটি পরিকল্পনা গ্রহণ করেছে
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16 }}>
                      ১৩.১ অভিভাবক, স্থানীয় জনগণ এবং প্রধান শিক্ষক যৌথভাবে একমত
                      হয়ে পরিকল্পনাটি করেছেন ।
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ১৩.২ পরিকল্পনায় অভিভাবক ও স্থানীয় জনগণ সুনির্দিষ্ট
                      দায়িত্বের বিষয়টি উল্লেখ আছে ।
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
                    প্রধান শিক্ষককের সাথে আলোচনা করুন এবং LPO'র ফলোআপের জন্য নোট
                    নিন
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={{ backgroundColor: "#f5f5f5" }}>
              শ্রেণি শিক্ষকের সাথে আলোচনার জন্য গুরুত্বপূর্ণ কিছু বিষয় ঃ
            </Text>
            <View style={{ padding: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক ভালো করেছেন এমন ২/৩ টি ইনডিকেটর ( নম্বর ) উল্লেখ করুন
                    ।
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="১।  ..................................................."
                  ></TextInput>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="২।  ..................................................."
                  ></TextInput>
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
                    টি ইনডিকেটর (নম্বর) চিহ্নিত করেছেন তা উল্লেখ করুন এবং তিনি
                    তার উন্নয়ন এ কিভাবে এটি করবেন সেটি উল্লেখ করুন ।
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="১. ...................................."
                  ></TextInput>
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
