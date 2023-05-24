Query Keys
Về cốt lõi, TanStack Query quản lý bộ nhớ đệm truy vấn cho bạn dựa trên các khóa truy vấn. Các khóa truy vấn phải là một Mảng ở cấp cao nhất và có thể đơn giản như một Mảng có một chuỗi hoặc phức tạp như một mảng gồm nhiều chuỗi và các đối tượng lồng nhau. Miễn là khóa truy vấn có thể tuần tự hóa và là duy nhất cho dữ liệu của truy vấn , thì bạn có thể sử dụng nó!

Phím truy vấn đơn giản
Dạng đơn giản nhất của khóa là một mảng với các giá trị hằng số. Định dạng này hữu ích cho:

Tài nguyên danh sách/chỉ mục chung
Tài nguyên không phân cấp
tsx
// A list of todos
useQuery({ queryKey: ['todos'], ... })

// Something else, whatever!
useQuery({ queryKey: ['something', 'special'], ... })
Khóa mảng có biến
Khi một truy vấn cần thêm thông tin để mô tả duy nhất dữ liệu của nó, bạn có thể sử dụng một mảng với một chuỗi và bất kỳ số đối tượng có thể tuần tự hóa nào để mô tả truy vấn đó. Điều này hữu ích cho:

Tài nguyên phân cấp hoặc lồng nhau
Thông thường, việc chuyển ID, chỉ mục hoặc nguyên hàm khác để nhận dạng duy nhất mục
Truy vấn có tham số bổ sung
Việc chuyển một đối tượng của các tùy chọn bổ sung là phổ biến
tsx
// An individual todo
useQuery({ queryKey: ['todo', 5], ... })

// An individual todo in a "preview" format
useQuery({ queryKey: ['todo', 5, { preview: true }], ...})

// A list of todos that are "done"
useQuery({ queryKey: ['todos', { type: 'done' }], ... })
Khóa truy vấn được băm một cách xác định!
Điều này có nghĩa là bất kể thứ tự các khóa trong đối tượng, tất cả các truy vấn sau đều được coi là bằng nhau:

tsx
useQuery({ queryKey: ['todos', { status, page }], ... })
useQuery({ queryKey: ['todos', { page, status }], ...})
useQuery({ queryKey: ['todos', { page, status, other: undefined }], ... })
Tuy nhiên, các khóa truy vấn sau không bằng nhau. Thứ tự mục mảng quan trọng!

tsx
useQuery({ queryKey: ['todos', status, page], ... })
useQuery({ queryKey: ['todos', page, status], ...})
useQuery({ queryKey: ['todos', undefined, page, status], ...})
Nếu chức năng truy vấn của bạn phụ thuộc vào một biến, hãy đưa nó vào khóa truy vấn của bạn
Vì các khóa truy vấn mô tả duy nhất dữ liệu mà chúng đang tìm nạp, nên chúng phải bao gồm bất kỳ biến nào bạn sử dụng trong hàm truy vấn thay đổi . Ví dụ:

tsx
function Todos({ todoId }) {
const result = useQuery({
queryKey: ['todos', todoId],
queryFn: () => fetchTodoById(todoId),
})
}

               --- Query Fn ----

Hàm truy vấn
Hàm truy vấn có thể thực sự là bất kỳ hàm nào trả về một lời hứa . Lời hứa được trả lại sẽ giải quyết dữ liệu hoặc gây ra lỗi .

Tất cả những điều sau đây là cấu hình chức năng truy vấn hợp lệ:

`tsx`

`useQuery({ queryKey: ['todos'], queryFn: fetchAllTodos })
useQuery({ queryKey: ['todos', todoId], queryFn: () => fetchTodoById(todoId) })
useQuery({
  queryKey: ['todos', todoId],
  queryFn: async () => {
    const data = await fetchTodoById(todoId)
    return data
  },
})
useQuery({
  queryKey: ['todos', todoId],
  queryFn: ({ queryKey }) => fetchTodoById(queryKey[1]),
})`

``
`1. Handling and Throwing Errors`-`Xử lý và ném lỗi`
Đối với Truy vấn TanStack để xác định một truy vấn đã bị lỗi, chức năng truy vấn phải đưa ra hoặc trả về một Lời hứa bị từ chối . Bất kỳ lỗi nào được đưa ra trong chức năng truy vấn sẽ được duy trì ở trạng errorthái của truy vấn.

`tsx`

`const { error } = useQuery({
queryKey: ['todos', todoId],
queryFn: async () => {
if (somethingGoesWrong) {
throw new Error('Oh no!')
}
if (somethingElseGoesWrong) {
return Promise.reject(new Error('Oh no!'))
}

    return data

},
})`

`2. Usage with fetch and other clients that do not throw by default`
`Sử dụng với fetchvà các ứng dụng khách khác không ném theo mặc định`
Trong khi hầu hết các tiện ích thích axioshoặc graphql-requesttự động ném lỗi cho các cuộc gọi HTTP không thành công, một số tiện ích như fetchkhông ném lỗi theo mặc định. Nếu đúng như vậy, bạn sẽ cần phải tự ném chúng đi. Đây là một cách đơn giản để làm điều đó với fetchAPI phổ biến:

` tsx`

`const { error } = useQuery({
queryKey: ['todos', todoId],
queryFn: async () => {
if (somethingGoesWrong) {
throw new Error('Oh no!')
}
if (somethingElseGoesWrong) {
return Promise.reject(new Error('Oh no!'))
}

    return data

},
})`

`3. Query Function Variables` - `Biến chức năng truy vấn`

Các khóa truy vấn không chỉ dùng để xác định duy nhất dữ liệu bạn đang tìm nạp mà còn được chuyển một cách thuận tiện vào hàm truy vấn của bạn như một phần của QueryFunctionContext. Mặc dù không phải lúc nào cũng cần thiết, nhưng điều này giúp bạn có thể trích xuất các hàm truy vấn nếu cần:

tsx
function Todos({ status, page }) {
const result = useQuery({
queryKey: ['todos', { status, page }],
queryFn: fetchTodoList,
})
}

// Access the key, status and page variables in your query function!
function fetchTodoList({ queryKey }) {
const [_key, { status, page }] = queryKey
return new Promise()
}
`QueryFunctionContext` - `Hàm truy vấnBối cảnh`

``The QueryFunctionContext is the object passed to each query function. It consists of:

queryKey: QueryKey: Query Keys
pageParam?: unknown
only for Infinite Queries
the page parameter used to fetch the current page
signal?: AbortSignal
AbortSignal instance provided by TanStack Query
Can be used for Query Cancellation
meta: Record<string, unknown> | undefined
an optional field you can fill with additional information about your query``

`Là QueryFunctionContextđối tượng được truyền cho mỗi chức năng truy vấn. Nó bao gồm:

queryKey: QueryKey: Phím truy vấn
pageParam?: unknown
chỉ dành cho Truy vấn vô hạn
tham số trang được sử dụng để tìm nạp trang hiện tại
signal?: AbortSignal
Phiên bản AbortSignal do TanStack Query cung cấp
Có thể được sử dụng để Hủy truy vấn
meta: Record<string, unknown> | undefined
một trường tùy chọn mà bạn có thể điền thông tin bổ sung về truy vấn của mình`
