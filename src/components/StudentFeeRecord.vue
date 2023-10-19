<template>
  <div>
    <v-card>
      <v-card-title>Edit Pay Fee</v-card-title>
      <div v-if="student" class="px-6">
        <v-row>
          <v-col cols="12" sm="6" md="6">Name: {{ student.name }}</v-col>
          <v-col cols="12" sm="6" md="6"
            >Father Name: {{ student.parentName }}</v-col
          >
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">Class: {{ student.className }}</v-col>
          <v-col cols="12" sm="6" md="6"
            >Mobile Number: {{ student.mobile }}</v-col
          >
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">Section: {{ student.section }}</v-col>
          <v-col cols="12" sm="6" md="6"
            >Roll Number: {{ student.rollNumber }}</v-col
          >
        </v-row>
        <v-row class="pb-4">
          <v-col cols="12" sm="12" md="12"
            >Admission Number: {{ student.admissionNumber }}</v-col
          >
        </v-row>
      </div>
    </v-card>

    <!-- current paybale -->
    <v-card class="my-6">
      <v-row align="center">
        <v-col cols="12" sm="10" md="10">
          <v-card-title
            >Current Payables Fee: RS {{ currentPayablesSum }}</v-card-title
          >
        </v-col>
        <v-col cols="auto" class="ml-auto mr-2">
          <SBtn
            v-if="currentTable == 'currentPayables'"
            small
            :icon="$icons.mdiMinus"
            @click="removeTable"
          />
          <SBtn
            v-else
            small
            :icon="$icons.mdiPlus"
            @click="showTable('currentPayables')"
          />
        </v-col>
      </v-row>
      <v-data-table
        v-if="currentTable == 'currentPayables'"
        v-model="selectedCurrentPays"
        :headers="payablesHeader"
        :items="currentPayables"
        :items-per-page="currentPayables.length"
        item-key="payableId"
        hide-default-footer
      >
        <template slot="item.payingNow" slot-scope="{ item }">
          <STextField
            v-model="item.payingNow"
            hide-details
            type="Number"
            style="width: 100px"
          />
        </template>
        <template slot="item.dues" slot-scope="{ item }">
          <STextField
            v-model="item.dues"
            hide-details
            type="Number"
            style="width: 100px"
          />
        </template>
        <template slot="item.paid" slot-scope="{ item }">
          <STextField
            v-model="item.paid"
            hide-details
            type="Number"
            style="width: 100px"
          />
        </template>
        <template slot="item.amount" slot-scope="{ item }">
          <STextField
            v-model="item.amount"
            hide-details
            type="Number"
            style="width: 100px"
          />
        </template>
        <template slot="item.fine" slot-scope="{ item }">
          <STextField
            v-model="item.fine"
            hide-details
            type="Number"
            style="width: 100px"
          />
        </template>
        <template slot="item.discount" slot-scope="{ item }">
          <STextField
            v-model="item.discount"
            hide-details
            type="Number"
            style="width: 100px"
          />
        </template>
        <template slot="item.toPay" slot-scope="{ item }">
          <STextField
            v-model="item.toPay"
            hide-details
            type="Number"
            style="width: 100px"
          />
        </template>
      </v-data-table>
    </v-card>

    <!-- upcoming paybale -->
    <!-- <v-card class="my-6">
        <v-row align="center">
          <v-col cols="12" sm="10" md="10">
            <v-card-title>Upcoming Payables Fee: RS {{ upcomingPayablesSum }}</v-card-title>
          </v-col>
          <v-col cols="auto" class="ml-auto mr-2">
            <SBtn
              v-if="currentTable == 'upcomingPayables'"
              small
              :icon="$icons.mdiMinus"
              @click="removeTable"
            />
            <SBtn v-else small :icon="$icons.mdiPlus" @click="showTable('upcomingPayables')" />
          </v-col>
        </v-row>
        <v-data-table
          v-if="currentTable == 'upcomingPayables'"
          v-model="selectedUpcomingPays"
          :headers="payablesHeader"
          :items="upcomingPayables"
          :items-per-page="upcomingPayables.length"
          item-key="payableId"
          hide-default-footer
        >
          <template slot="item.payingNow" slot-scope="{ item }">
            <STextField v-model="item.payingNow" hide-details type="number" style="width: 100px" />
          </template>
        </v-data-table>
      </v-card> -->

    <!-- on demand paybale -->
    <!-- <v-card class="my-6">
        <v-row align="center">
          <v-col cols="12" sm="10" md="10">
            <v-card-title>On demand Payables Fee: RS {{ onDemandPayablesSum }}</v-card-title>
          </v-col>
          <v-col cols="auto" class="ml-auto mr-2">
            <SBtn
              v-if="currentTable === 'onDemandPayables'"
              small
              :icon="$icons.mdiMinus"
              @click="removeTable"
            />
            <SBtn v-else small :icon="$icons.mdiPlus" @click="showTable('onDemandPayables')" />
          </v-col>
        </v-row>
        <v-data-table
          v-if="currentTable == 'onDemandPayables'"
          v-model="selectedOnDemandPays"
          :headers="demandFeeHeader"
          :items="onDemandPayables"
          :items-per-page="onDemandPayables.length"
          item-key="payableId"
          hide-default-footer
        >
          <template #item.amount="{ item }">
            {{ item.amount || item.payingNow }}
          </template>
          <template #item.payingNow="{ item }">
            <STextField v-model="item.payingNow" hide-details type="Number" style="width: 100px" />
          </template>
        </v-data-table>
      </v-card> -->

    <!-- pay fees -->
    <v-card class="my-6 px-6 pt-8">
      <SForm @submit="payFee">
        <v-row>
          <v-col md="6" sm="6" cols="12" class="mr-md-8">
            <SSelect
              v-model="paymentObject.paymentType"
              label="Pay Mode"
              :items="constants.paymentOptions"
              :rules="$validate('required')"
            />
            <STextField
              v-model="paymentObject.paymentDate"
              type="date"
              label="Payment Date"
              :rules="$validate('required')"
            />
            <STextField
              v-model="paymentObject.remarks"
              type="textarea"
              placeholder="Remarks"
            />
          </v-col>
          <v-col class="ml-md-auto text-lg">
            <v-row>
              <v-col cols="9">Current Payable Fee:</v-col>
              <v-col cols="3">
                {{ currentPayablesSum }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">Upcoming Payable Fee:</v-col>
              <v-col cols="3">
                {{ upcomingPayablesSum }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">On Demand Payable Fee:</v-col>
              <v-col cols="3">
                {{ onDemandPayablesSum }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">Total:</v-col>
              <v-col cols="3">
                {{
                  currentPayablesSum + upcomingPayablesSum + onDemandPayablesSum
                }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row no-gutters class="pb-6">
          <SBtn type="submit" class="ml-auto" label="Pay Fee" />
        </v-row>
      </SForm>
    </v-card>
    <!-- <pre> {{ paymentObject }} </pre> -->
  </div>
</template>

<script>
import { accountApi } from "@/apis";
import {
  $notify,
  computed,
  constants,
  date,
  helper,
  onMounted,
  ref,
  useRouter,
  useBatchStore,
} from "@/plugins/setup";

export default {
  name: "PayFee",
  setup() {
    const { route, router } = useRouter();
    const student = ref(undefined);
    const currentTable = ref("currentPayables");
    const currentPayables = ref([]);
    const upcomingPayables = ref([]);
    const onDemandPayables = ref([]);
    const paymentObject = ref({});
    const bottomSection = ref({});
    const selectedCurrentPays = ref([]);
    const selectedOnDemandPays = ref([]);
    const selectedUpcomingPays = ref([]);
    const batchStore = useBatchStore();
    const currentBatch = computed(() => batchStore.currentBatch);
    const getStudentPaybles = async () => {
      // const { studentId } = route.value.params
      const payload = {
        batchId: currentBatch.value.id,
        institutionId: localStorage.getItem("institutionId"),
        studentId: route.value.params.studentId,
      };
      const res = await accountApi.getStudentPayList(payload);

      // console.log(payload, '_________________get res')

      if (res) {
        student.value = res.responseObject.studentInfo;
        currentPayables.value =
          res?.responseObject.studentPaymentRecordList.reduce((acc, item) => {
            return acc.concat(item.payableList);
          }, []);
        bottomSection.value = res?.responseObject.studentPaymentRecordList;

        // student.value = res.student

        // upcomingPayables.value = res?.upcomingPayables
      } else {
        router.push({ name: "CollectFee" });
      }
    };

    const removeTable = () => {
      currentTable.value = "";
    };

    const showTable = (tableName) => {
      currentTable.value = tableName;
    };

    const currentPayablesSum = computed(() =>
      helper.getSum(selectedCurrentPays.value, "payingNow")
    );
    const upcomingPayablesSum = computed(() => {
      const total = bottomSection.value.reduce(
        (sum, item) => sum + item.upcomingPayableAmount,
        0
      );

      return total;
    });

    const onDemandPayablesSum = computed(() => {
      const total = helper.getSum(selectedOnDemandPays.value, "payingNow");

      return total;
    });

    // const resetForms = () => {
    //   paymentObject.value = { paymentDate: date(), payableList: [] }
    //   selectedCurrentPays.value = []
    //   selectedOnDemandPays.value = []
    //   selectedUpcomingPays.value = []
    // }

    const payFee = async () => {
      // paymentObject.value = {
      //   ...paymentObject.value,
      //   ...student.value,
      //   upcomingPayableAmount: upcomingPayablesSum.value,
      //   currentPayableAmount: currentPayablesSum.value,
      //   demandFeeAmount: onDemandPayablesSum.value,
      //   payableList: [
      //     ...selectedCurrentPays.value,
      //     ...selectedOnDemandPays.value,
      //     ...selectedUpcomingPays.value,
      //   ],
      // }

      const res = await accountApi.collectPayment(paymentObject.value);
      if (res) {
        // getStudentPaybles()
        router.push({
          name: "PrintReceipt",
          params: { receiptId: res.responseObject },
        });
        $notify({ type: "success", text: "Fee Paid Successfully" });

        // resetForms()
      }
    };
    const getAllFees = async () => {
      const res = await accountApi.getFeesList();
      if (res) {
        const data = res.responseObject.filter(
          (fee) => fee.type === "ON_DEMAND"
        );
        onDemandPayables.value = data.map((fee) => ({
          ...fee,
          payingNow: fee.amount,
          feeName: fee.name,
          period: fee.applicableDate,
        }));
      }
    };

    onMounted(() => {
      getStudentPaybles();
      getAllFees();

      // resetForms()
    });

    return {
      student,
      currentTable,
      removeTable,
      showTable,
      bottomSection,
      selectedCurrentPays,
      selectedOnDemandPays,
      selectedUpcomingPays,
      currentPayablesSum,
      upcomingPayablesSum,
      onDemandPayablesSum,
      currentPayables,
      upcomingPayables,
      onDemandPayables,
      paymentObject,
      payFee,
      constants,
      payablesHeader: [
        { text: "Fee Name", value: "feeName" },
        { text: "Period", value: "period" },
        { text: "Amount", value: "amount" },
        { text: "Paid", value: "paid" },
        { text: "Dues", value: "dues" },
        { text: "Fine", value: "fine" },
        { text: "Discount", value: "discount" },
        { text: "To-Pay", value: "toPay" },
        { text: "Pay", value: "payingNow" },
      ],
      demandFeeHeader: [
        { text: "Fee Name", value: "feeName" },
        { text: "Period", value: "period" },
        { text: "Pay Amount", value: "amount" },
        { text: "Pay", value: "payingNow" },
      ],
    };
  },
};
</script>
