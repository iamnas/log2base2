export function CodeWalkthrough() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-4">
            CODE WALKTHROUGH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visualize{" "}
            <span className="text-primary">step by step</span>{" "}
            code execution
          </h2>
          <p className="text-lg text-muted-foreground">
            With our step-by-step code walkthrough, you can visualize what happens
            in the computer memory when each and every line of code executes.
          </p>
        </div>
        <div className="relative">
          <div className="bg-[#F3F4F6] p-4 rounded-lg mb-4 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-black">
                {`int *ptr;
ptr = malloc(5 * sizeof(int));
ptr = realloc(ptr, 2 * sizeof(int));
ptr = realloc(ptr, 6 * sizeof(int));`}
              </code>
            </pre>
          </div>
          <div className="flex gap-4 md:gap-8 justify-end">
            <div className="bg-primary rounded-lg p-4 text-white w-28 md:w-32">
              <div className="text-center mb-2">Stack</div>
              <div className="bg-white/10 p-2 rounded">
                <div className="text-center mb-1">ptr</div>
                <div className="bg-white/20 p-1 rounded text-center">1000</div>
                <div className="text-center mt-1">2048</div>
              </div>
            </div>
            <div className="bg-primary rounded-lg p-4 text-white w-28 md:w-32">
              <div className="text-center mb-2">Heap</div>
              <div className="text-center">1000</div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white/10 p-1 rounded mt-1 text-center">
                  garbage value
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}